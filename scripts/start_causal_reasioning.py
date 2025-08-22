import os
import yaml
from causalstrength import evaluate
from tqdm import tqdm
import time

def extract_description_section(markdown_content):
    """Extract only the ## Description section from markdown content"""
    lines = markdown_content.split('\n')
    description_lines = []
    in_description = False
    
    for line in lines:
        if line.strip().startswith('## Description'):
            in_description = True
            continue
        elif line.strip().startswith('##') and in_description:
            # Found another section, stop collecting
            break
        elif in_description:
            description_lines.append(line)
    
    return '\n'.join(description_lines).strip()

def load_problem(filepath):
    print(f"  📄 Loading: {os.path.basename(filepath)}")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    # Split frontmatter and body
    if content.startswith('---'):
        parts = content.split('---', 2)
        front = yaml.safe_load(parts[1])
        markdown_content = parts[2].strip()
        title = front.get('title') or front.get('slug') or os.path.basename(filepath)
        yaml_description = front.get('description', '')
        
        # Extract only the ## Description section
        description_section = extract_description_section(markdown_content)
        
        print(f"    ✅ Title: {title}")
        print(f"    📝 YAML description: {len(yaml_description)} chars")
        print(f"    📖 Description section: {len(description_section)} chars")
        
        return title, yaml_description, description_section
    else:
        title = os.path.basename(filepath)
        print(f"    ⚠️  No frontmatter found, using filename as title: {title}")
        return title, '', content

def causal_score_pair(problem_a, problem_b):
    # Combine both YAML description and markdown content for richer analysis
    def format_problem_text(problem):
        text_parts = [problem['title']]
        if problem['yaml_description']:
            text_parts.append(f"Summary: {problem['yaml_description']}")
        if problem['markdown_content']:
            text_parts.append(f"Details: {problem['markdown_content']}")
        return " | ".join(text_parts)
    
    s1 = format_problem_text(problem_a)
    s2 = format_problem_text(problem_b)
    
    print(f"\n🔄 Evaluating causal relationships...")
    print(f"   Problem A: {problem_a['title']}")
    print(f"   Problem B: {problem_b['title']}")
    
    # Progress bar for the two evaluations
    with tqdm(total=2, desc="Causal Analysis", bar_format='{l_bar}{bar}| {n_fmt}/{total_fmt} [{elapsed}<{remaining}]') as pbar:
        # A → B
        pbar.set_description(f"A→B: {problem_a['title'][:20]}... → {problem_b['title'][:20]}...")
        score_ab = evaluate(s1, s2, model_name='CESAR', model_path='shaobocui/cesar-bert-large')
        pbar.update(1)
        
        # B → A
        pbar.set_description(f"B→A: {problem_b['title'][:20]}... → {problem_a['title'][:20]}...")
        score_ba = evaluate(s2, s1, model_name='CESAR', model_path='shaobocui/cesar-bert-large')
        pbar.update(1)
    
    print(f"   ✅ Evaluation complete!")
    return score_ab, score_ba

def main():
    print("🚀 Starting Causal Reasoning Analysis")
    print("=" * 50)
    
    folder = '_problems'
    print(f"📁 Scanning directory: {folder}")
    
    all_files = [f for f in os.listdir(folder) if f.endswith('.md')]
    files = sorted(all_files)[:2]
    
    print(f"📊 Found {len(all_files)} total problem files")
    print(f"🎯 Analyzing first 2 files: {', '.join(files)}")
    print()
    
    print("📚 Loading problem files...")
    probs = []
    for filename in files:
        path = os.path.join(folder, filename)
        title, yaml_desc, markdown_content = load_problem(path)
        probs.append({
            'title': title, 
            'yaml_description': yaml_desc, 
            'markdown_content': markdown_content
        })
    print()

    a, b = probs

    print("🔍 Analysis Setup Complete")
    print(f"   Problem A: '{a['title']}'")
    if a['yaml_description']:
        print(f"     Summary: {a['yaml_description'][:100]}{'...' if len(a['yaml_description']) > 100 else ''}")
    print(f"   Problem B: '{b['title']}'")
    if b['yaml_description']:
        print(f"     Summary: {b['yaml_description'][:100]}{'...' if len(b['yaml_description']) > 100 else ''}")
    print()

    start_time = time.time()
    score_ab, score_ba = causal_score_pair(a, b)
    elapsed = time.time() - start_time

    print(f"\n📈 Results (Analysis took {elapsed:.1f} seconds):")
    print("=" * 50)
    print(f"Score ({a['title']} → {b['title']}): {score_ab:.4f}")
    print(f"Score ({b['title']} → {a['title']}): {score_ba:.4f}")
    print()

    print("🎯 Conclusion:")
    if score_ab > score_ba:
        confidence = abs(score_ab - score_ba)
        print(f"✅ Likely: **{a['title']} causes {b['title']}** (confidence: {confidence:.4f})")
    elif score_ba > score_ab:
        confidence = abs(score_ba - score_ab)
        print(f"✅ Likely: **{b['title']} causes {a['title']}** (confidence: {confidence:.4f})")
    else:
        print("⚖️  Causal direction is ambiguous or equal")
    
    print("\n🏁 Analysis Complete!")
    print("=" * 50)

if __name__ == '__main__':
    main()