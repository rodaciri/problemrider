import os
import re
import frontmatter
import requests
from tqdm import tqdm
from openai import OpenAI

CANDIDATE_FILE = "scripts/backlog/candidates.md"
BACKLOG_NEW = "scripts/backlog/new.md"
BACKLOG_SIMILAR = "scripts/backlog/similar.md"
BACKLOG_DUPLICATE = "scripts/backlog/duplicate.md"
RESULTS_LOG = "scripts/complete_grooming_results.md"

def read_existing_problems(directory="_problems"):
    problems = []
    for filename in os.listdir(directory):
        if filename.endswith(".md"):
            with open(os.path.join(directory, filename), "r", encoding="utf-8") as f:
                post = frontmatter.load(f)
                title = post.get("title", "").strip()
                description = post.get("description", "").strip()
                if title and description:
                    problems.append({"title": title, "description": description})
        
    print(f"Found {len(problems)} existing problems in '{directory}'")
    return problems


def read_candidate_problems(file_path):
    pattern = r"- \*\*(.*?)\*\*: (.*)"
    problems = []
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    for i, line in enumerate(lines):
        match = re.match(pattern, line.strip())
        if match:
            problems.append({
                "title": match.group(1).strip(),
                "description": match.group(2).strip(),
                "raw": line,
                "index": i
            })

    print(f"Found {len(problems)} candidate problems in '{file_path}'")
    return problems


def check_similarity_with_lmstudio(candidate, existing_problems, client):
    prompt = f"""
    
    You're a software domain expert. A new problem of a legacy system and it's environment was suggested.
    Check if it is already captured in the existing list of problems.
    The goal is to have as many problems as possible but not duplicates or almost identical patterns.
    But if the problems are too similar or almost identical, then mark as duplicated.
    Classify the new problem as either "Duplicate", "Similar", or "New".

    Return only one of these: "DUPLICATE", "SIMILAR", or "SIMILAR" in the first line. Be strict but pragmatic.

    New candidate:
    Title: {candidate['title']}
    Description: {candidate['description']}

    Existing problems:\n"""

    for i, prob in enumerate(existing_problems):
        prompt += f"{i+1}. {prob['title']}: {prob['description']}\n"

    prompt += "\nYour classification for the new candidate (DUPLICATE / SIMILAR / NEW) in the first line, followed by reasons in the next lines:"

    completion = client.chat.completions.create(
        model="local-model",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.0,
    )

    return completion.choices[0].message.content

def main():
    existing = read_existing_problems("_problems")
    candidates = read_candidate_problems(CANDIDATE_FILE)
    new_problems = []
    similar_problems = []
    duplicate_problems = []

    results = []
    api_base = f"http://172.18.48.1:1234/v1"

    client = OpenAI(base_url=api_base, api_key="lm-studio")

    for cand in tqdm(candidates, desc="Checking candidates"):
        result = check_similarity_with_lmstudio(cand, existing, client)
        
        
        
        entry = f"- **{cand['title']}:** {cand['description']}"

        label = result.split("\n")[0].lower()
        
        print(f"### Candidate: {cand['title']}, Result: {label}")

        if "duplicate" in label:
            print(f"Duplicate problem: {entry}")
            duplicate_problems.append(entry)
        elif "similar" in label:
            print(f"Similar problem: {entry}")
            similar_problems.append(entry)
        elif "new" in label:
            print(f"New problem: {entry}")
            new_problems.append(entry)
        
        result_entry = f"# {cand['title']}\n\n{entry}\n\n{result}\n\n\n"
        print(result_entry)
        results.append(result_entry)


    with open(BACKLOG_DUPLICATE, "w", encoding="utf-8") as f:
        for p in duplicate_problems:
            f.write(p + "\n")
    with open(BACKLOG_SIMILAR, "w", encoding="utf-8") as f:
        for p in similar_problems:
            f.write(p + "\n")
    with open(BACKLOG_NEW, "w", encoding="utf-8") as f:
        for p in new_problems:
            f.write(p + "\n")

    with open(RESULTS_LOG, "w", encoding="utf-8") as f:
        for r in results:
            f.write(r + "\n")


if __name__ == "__main__":
    main()
