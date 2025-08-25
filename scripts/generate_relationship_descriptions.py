#!/usr/bin/env python3
"""
Generate relationship descriptions between problems and their symptoms/causes.
Install dependencies: pip install -r scripts/requirements.txt
Additional dependencies: pip install openai
"""

import yaml
import argparse
import re
import json
import os
import csv
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Tuple

try:
    from tqdm import tqdm
except ImportError:
    print("❌ tqdm not installed")
    print("Run: pip install tqdm")
    exit(1)

try:
    import markdown
    from bs4 import BeautifulSoup
except ImportError:
    print("❌ markdown/beautifulsoup4 not installed")
    print("Run: pip install -r scripts/requirements.txt")
    exit(1)

try:
    import openai
except ImportError:
    print("❌ openai not installed")
    print("Run: pip install openai")
    exit(1)


class RelationshipDescriptionGenerator:
    def __init__(self, problems_dir: str = "_problems"):
        self.problems_dir = Path(problems_dir)
        self.problems: Dict[str, Dict] = {}
        
        
        # Initialize OpenRouter client
        try:
            self.client = openai.OpenAI(
                base_url="https://openrouter.ai/api/v1",
                api_key=os.getenv("OPENROUTER_API_KEY")
            )
            if not os.getenv("OPENROUTER_API_KEY"):
                print("❌ OPENROUTER_API_KEY environment variable not set")
                print("Set it with: export OPENROUTER_API_KEY='your-key-here'")
                print("Get your key from: https://openrouter.ai/")
                exit(1)
        except Exception as e:
            print(f"❌ Failed to initialize OpenRouter client: {e}")
            exit(1)
    
    def load_problems(self) -> None:
        """Load all problem files."""
        print(f"Loading problems from {self.problems_dir}...")
        
        for file_path in self.problems_dir.glob("*.md"):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if content.startswith('---'):
                    parts = content.split('---', 2)
                    if len(parts) >= 3:
                        metadata = yaml.safe_load(parts[1])
                        markdown_content = parts[2]
                        
                        problem_key = file_path.stem
                        self.problems[problem_key] = {
                            'file_path': file_path,
                            'title': metadata.get('title', ''),
                            'description': metadata.get('description', ''),
                            'metadata': metadata,
                            'indicators': self._extract_section(markdown_content, 'Indicators'),
                            'symptoms': self._extract_section(markdown_content, 'Symptoms'),
                            'root_causes': self._extract_section(markdown_content, 'Root Causes'),
                            'indicators_raw': self._extract_section_raw(markdown_content, 'Indicators'),
                            'symptoms_raw': self._extract_section_raw(markdown_content, 'Symptoms'),
                            'root_causes_raw': self._extract_section_raw(markdown_content, 'Root Causes'),
                            'description_section': self._extract_section(markdown_content, 'Description')
                        }
            except Exception as e:
                print(f"Error loading {file_path}: {e}")
                
        print(f"Loaded {len(self.problems)} problems")
    
    def _extract_section(self, content: str, section_name: str) -> str:
        """Extract a specific section from markdown content."""
        pattern = rf'## {section_name}.*?\n(.*?)(?=\n## |\n$)'
        match = re.search(pattern, content, re.IGNORECASE | re.DOTALL)
        if match:
            return self._clean_markdown_text(match.group(1))
        return ''
    
    def _extract_section_raw(self, content: str, section_name: str) -> str:
        """Extract a specific section from markdown content without cleaning."""
        pattern = rf'## {section_name}.*?\n(.*?)(?=\n## |\n$)'
        match = re.search(pattern, content, re.IGNORECASE | re.DOTALL)
        if match:
            return match.group(1).strip()
        return ''
    
    def _clean_markdown_text(self, text: str) -> str:
        """Clean markdown formatting from text."""
        html = markdown.markdown(text)
        soup = BeautifulSoup(html, 'html.parser')
        plain_text = soup.get_text()
        return re.sub(r'\s+', ' ', plain_text).strip()
    
    def _extract_linked_problems(self, text: str) -> List[str]:
        """Extract linked problems from markdown text."""
        link_patterns = [
            r'\[([^\]]+)\]\(([^)]+)\.md\)',  # Standard markdown links
            r'\[([^\]]+)\]\(\.\.?/([^)]+)\.md\)',  # Relative path links
        ]
        
        linked_problems = []
        for pattern in link_patterns:
            for match in re.finditer(pattern, text):
                problem_slug = match.group(2).replace('../', '').replace('./', '')
                if problem_slug in self.problems:
                    linked_problems.append(problem_slug)
        
        return list(set(linked_problems))  # Remove duplicates
    
    def generate_relationship_description(self, problem_key: str, related_problem: str, relationship_type: str) -> str:
        """Generate a description of how a related problem connects to the main problem."""
        
        main_problem = self.problems.get(problem_key, {})
        related_problem_data = self.problems.get(related_problem, {})
        
        # Determine the relationship direction and context
        if relationship_type == "symptom":
            context = "symptom/indicator"
            direction = f"{related_problem_data['title']} is a symptom of {main_problem['title']}"
        else:  # root_cause
            context = "root cause"
            direction = f"{related_problem_data['title']} is a root cause of {main_problem['title']}"
        
        prompt = f"""
You are an expert in legacy software systems analysis. You need to write a very brief, clear description of once sentence explaining how one problem relates to another as a {context}.

MAIN PROBLEM:
Title: {main_problem['title']}
Description: {main_problem['description']}

RELATED PROBLEM ({context.upper()}):
Title: {related_problem_data['title']}
Description: {related_problem_data['description']}

RELATIONSHIP CONTEXT: {direction}

Write a very description that explains:
- WHY this relationship exists (the mechanism or connection) and HOW the related problem functions as a {context} in the context of legacy systems

The description should help readers understand the logical connection between these problems. Focus on the practical, technical relationship rather than abstract concepts.

Don't mention the titles of the problens in the description. Just explain the relationship in one concise and short sentence.

Respond with just the description text, no additional formatting or preamble.
"""
        
        try:
            response = self.client.chat.completions.create(
                model="openai/gpt-4o-mini",
                messages=[
                    {"role": "system", "content": "You are an expert in legacy software systems and technical problem analysis."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.7,
                max_tokens=150
            )
            
            description = response.choices[0].message.content.strip()
            return description
            
        except Exception as e:
            error_msg = f"ERROR: Failed to generate description for {problem_key} -> {related_problem}: {str(e)}"
            print(f"❌ {error_msg}")
            return error_msg
    
    def process_problem_file(self, problem_key: str) -> Dict:
        """Process a single problem file and generate relationship descriptions."""
        if problem_key not in self.problems:
            print(f"❌ Problem '{problem_key}' not found")
            return {}
        
        problem_data = self.problems[problem_key]
        print(f"Processing {problem_key}: {problem_data['title']}")
        
        results = {
            'problem_key': problem_key,
            'title': problem_data['title'],
            'symptom_descriptions': [],
            'root_cause_descriptions': []
        }
        
        # Extract linked problems from symptoms/indicators sections (use raw markdown)
        indicators_raw = problem_data.get('indicators_raw', '')
        symptoms_raw = problem_data.get('symptoms_raw', '')
        combined_symptoms_raw = indicators_raw + ' ' + symptoms_raw
        
        symptom_links = self._extract_linked_problems(combined_symptoms_raw)
        print(f"  Found {len(symptom_links)} symptom links")
        
        if symptom_links:
            with tqdm(symptom_links, desc="  Generating symptom descriptions", unit="desc") as pbar:
                for linked_problem in pbar:
                    pbar.set_postfix_str(f"Processing {linked_problem}")
                    description = self.generate_relationship_description(problem_key, linked_problem, "symptom")
                    results['symptom_descriptions'].append({
                        'problem': linked_problem,
                        'title': self.problems[linked_problem]['title'],
                        'description': description
                    })
        
        # Extract linked problems from root causes section (use raw markdown)
        root_causes_raw = problem_data.get('root_causes_raw', '')
        root_cause_links = self._extract_linked_problems(root_causes_raw)
        print(f"  Found {len(root_cause_links)} root cause links")
        
        if root_cause_links:
            with tqdm(root_cause_links, desc="  Generating root cause descriptions", unit="desc") as pbar:
                for linked_problem in pbar:
                    pbar.set_postfix_str(f"Processing {linked_problem}")
                    description = self.generate_relationship_description(problem_key, linked_problem, "root_cause")
                    results['root_cause_descriptions'].append({
                        'problem': linked_problem,
                        'title': self.problems[linked_problem]['title'],
                        'description': description
                    })
        
        return results
    
    def process_problem_file_cached(self, problem_key: str, completed_relationships: set, cache_file: str) -> Dict:
        """Process a single problem file, skipping relationships that already exist in cache."""
        if problem_key not in self.problems:
            print(f"❌ Problem '{problem_key}' not found")
            return {}
        
        problem_data = self.problems[problem_key]
        print(f"Processing {problem_key}: {problem_data['title']}")
        
        results = {
            'problem_key': problem_key,
            'title': problem_data['title'],
            'symptom_descriptions': [],
            'root_cause_descriptions': []
        }
        
        # Extract linked problems from symptoms/indicators sections (use raw markdown)
        indicators_raw = problem_data.get('indicators_raw', '')
        symptoms_raw = problem_data.get('symptoms_raw', '')
        combined_symptoms_raw = indicators_raw + ' ' + symptoms_raw
        
        symptom_links = self._extract_linked_problems(combined_symptoms_raw)
        # Filter out already completed relationships
        new_symptom_links = [link for link in symptom_links 
                           if (problem_key, link, 'symptom') not in completed_relationships]
        
        print(f"  Found {len(symptom_links)} symptom links, {len(new_symptom_links)} new")
        
        if new_symptom_links:
            with tqdm(new_symptom_links, desc="  Generating symptom descriptions", unit="desc") as pbar:
                for linked_problem in pbar:
                    pbar.set_postfix_str(f"Processing {linked_problem}")
                    description = self.generate_relationship_description(problem_key, linked_problem, "symptom")
                    
                    # Immediately append to CSV file
                    self.append_relationship_to_csv(
                        cache_file, problem_key, problem_data['title'],
                        linked_problem, self.problems[linked_problem]['title'],
                        'symptom', description
                    )
                    
                    results['symptom_descriptions'].append({
                        'problem': linked_problem,
                        'title': self.problems[linked_problem]['title'],
                        'description': description
                    })
        
        # Extract linked problems from root causes section (use raw markdown)
        root_causes_raw = problem_data.get('root_causes_raw', '')
        root_cause_links = self._extract_linked_problems(root_causes_raw)
        # Filter out already completed relationships
        new_root_cause_links = [link for link in root_cause_links 
                              if (problem_key, link, 'root_cause') not in completed_relationships]
        
        print(f"  Found {len(root_cause_links)} root cause links, {len(new_root_cause_links)} new")
        
        if new_root_cause_links:
            with tqdm(new_root_cause_links, desc="  Generating root cause descriptions", unit="desc") as pbar:
                for linked_problem in pbar:
                    pbar.set_postfix_str(f"Processing {linked_problem}")
                    description = self.generate_relationship_description(problem_key, linked_problem, "root_cause")
                    
                    # Immediately append to CSV file
                    self.append_relationship_to_csv(
                        cache_file, problem_key, problem_data['title'],
                        linked_problem, self.problems[linked_problem]['title'],
                        'root_cause', description
                    )
                    
                    results['root_cause_descriptions'].append({
                        'problem': linked_problem,
                        'title': self.problems[linked_problem]['title'],
                        'description': description
                    })
        
        return results
    
    def process_all_problems(self, limit: int = None) -> List[Dict]:
        """Process all problem files or a limited subset."""
        print(f"Processing problem files{f' (limit: {limit})' if limit else ''}...")
        
        all_results = []
        problem_keys = list(self.problems.keys())
        
        if limit:
            problem_keys = problem_keys[:limit]
            print(f"Processing first {len(problem_keys)} problems out of {len(self.problems)} total")
        
        with tqdm(problem_keys, desc="Processing problems", unit="problem") as pbar:
            for problem_key in pbar:
                pbar.set_postfix_str(f"Processing {problem_key}")
                results = self.process_problem_file(problem_key)
                if results:
                    all_results.append(results)
        
        return all_results
    
    def get_cache_filepath(self, cache_id: str = None) -> str:
        """Generate cache file path with timestamp"""
        if cache_id is None:
            cache_id = datetime.now().strftime("%Y%m%d_%H%M%S")
        cache_dir = os.path.join(os.path.dirname(__file__), 'tmp')
        os.makedirs(cache_dir, exist_ok=True)
        return os.path.join(cache_dir, f'relationship_descriptions_cache_{cache_id}.csv')
    
    def find_cache_file(self, cache_id: str = None) -> str:
        """Find specific cache file or the most recent one"""
        cache_dir = os.path.join(os.path.dirname(__file__), 'tmp')
        if not os.path.exists(cache_dir):
            return None
        
        if cache_id:
            # Look for specific cache file
            cache_file = os.path.join(cache_dir, f'relationship_descriptions_cache_{cache_id}.csv')
            return cache_file if os.path.exists(cache_file) else None
        else:
            # Find latest cache file
            cache_files = [f for f in os.listdir(cache_dir) 
                          if f.startswith('relationship_descriptions_cache_') and f.endswith('.csv')]
            if not cache_files:
                return None
            
            # Sort by filename (which includes timestamp)
            cache_files.sort(reverse=True)
            return os.path.join(cache_dir, cache_files[0])
    
    def load_existing_descriptions(self, output_file: str) -> Dict[str, Dict]:
        """Load existing descriptions from CSV file."""
        existing = {}
        try:
            with open(output_file, 'r', encoding='utf-8', newline='') as f:
                # Peek at first line to check if it has headers
                first_line = f.readline().strip()
                f.seek(0)  # Reset to beginning
                
                # Check if first line contains the expected header
                if first_line.startswith('problem_key,'):
                    # File has headers
                    reader = csv.DictReader(f)
                    for row in reader:
                        key = f"{row['problem_key']}|{row['related_key']}|{row['relationship_type']}"
                        existing[key] = row
                else:
                    # File has no headers, define column order manually
                    fieldnames = ['problem_key', 'problem_title', 'related_key', 'related_title', 
                                 'relationship_type', 'description', 'last_updated']
                    reader = csv.DictReader(f, fieldnames=fieldnames)
                    for row in reader:
                        key = f"{row['problem_key']}|{row['related_key']}|{row['relationship_type']}"
                        existing[key] = row
        except (FileNotFoundError, csv.Error):
            pass
        return existing
    
    def get_completed_relationships(self, cache_file: str) -> set:
        """Get set of completed relationships from cache file"""
        completed = set()
        existing_data = self.load_existing_descriptions(cache_file)
        for key in existing_data.keys():
            parts = key.split('|')
            if len(parts) == 3:
                problem_key, related_key, relationship_type = parts
                completed.add((problem_key, related_key, relationship_type))
        return completed
    
    def append_relationship_to_csv(self, output_file: str, problem_key: str, problem_title: str, 
                                 related_key: str, related_title: str, relationship_type: str, description: str) -> None:
        """Append a single relationship to CSV file immediately."""
        # Create output directory if it doesn't exist
        os.makedirs(os.path.dirname(output_file), exist_ok=True)
        
        # Check if file exists and has content
        file_exists = os.path.exists(output_file)
        needs_header = False
        
        if not file_exists:
            needs_header = True
        else:
            # Check if file is empty or doesn't have header
            with open(output_file, 'r', encoding='utf-8') as f:
                first_line = f.readline().strip()
                if not first_line or not first_line.startswith('problem_key'):
                    needs_header = True
        
        # Define fieldnames
        fieldnames = ['problem_key', 'problem_title', 'related_key', 'related_title', 
                     'relationship_type', 'description', 'last_updated']
        
        # Prepare row data
        row = {
            'problem_key': problem_key,
            'problem_title': problem_title,
            'related_key': related_key,
            'related_title': related_title,
            'relationship_type': relationship_type,
            'description': description,
            'last_updated': datetime.now().isoformat()
        }
        
        # Append to file
        with open(output_file, 'a', encoding='utf-8', newline='') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            
            # Write header if needed
            if needs_header:
                writer.writeheader()
            
            writer.writerow(row)
    
    def save_descriptions_csv(self, results: List[Dict], output_file: str, additive: bool = True) -> None:
        """Save relationship descriptions as CSV file for use by other scripts."""
        # This method is now mainly used for batch summary reporting
        # Individual relationships are saved immediately via append_relationship_to_csv
        
        new_count = 0
        for result in results:
            new_count += len(result['symptom_descriptions']) + len(result['root_cause_descriptions'])
        
        existing_data = self.load_existing_descriptions(output_file)
        
        print(f"   💾 Descriptions CSV updated incrementally to {output_file}")
        print(f"   📊 {new_count} new relationships processed")
        print(f"   🎯 Total: {len(existing_data)} relationships across {len(set(r['problem_key'] for r in existing_data.values()))} problems")
    
    def generate_report(self, results: List[Dict]) -> str:
        """Generate a report with all relationship descriptions."""
        report = []
        report.append("# Problem Relationship Descriptions Report\n")
        
        total_problems = len(results)
        total_symptoms = sum(len(r['symptom_descriptions']) for r in results)
        total_causes = sum(len(r['root_cause_descriptions']) for r in results)
        
        report.append(f"## Summary")
        report.append(f"- Problems processed: {total_problems}")
        report.append(f"- Symptom relationships described: {total_symptoms}")
        report.append(f"- Root cause relationships described: {total_causes}")
        report.append("")
        
        for result in results:
            report.append(f"## {result['title']}")
            report.append(f"**File:** {result['problem_key']}.md")
            report.append("")
            
            if result['symptom_descriptions']:
                report.append("### Symptom Relationships")
                for desc in result['symptom_descriptions']:
                    report.append(f"**{desc['title']}**: {desc['description']}")
                report.append("")
            
            if result['root_cause_descriptions']:
                report.append("### Root Cause Relationships")
                for desc in result['root_cause_descriptions']:
                    report.append(f"**{desc['title']}**: {desc['description']}")
                report.append("")
        
        return "\n".join(report)


def main():
    parser = argparse.ArgumentParser(
        description="Generate relationship descriptions between problems and their symptoms/causes",
        epilog="""Examples:
  %(prog)s --file feature-factory            # Process specific problem file
  %(prog)s --limit 5                         # Process first 5 problems  
  %(prog)s --cache-id 20241126_143022        # Resume from specific cache
  %(prog)s --limit 10 --batch-size 3         # Process 10 problems in batches of 3
  %(prog)s --dry-run                         # Generate report only, don't update files

The script uses cached results to avoid re-generating descriptions for the same relationships.
Run multiple times to process all relationships in batches.""",
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    parser.add_argument("--file", type=str, help="Process specific problem file (e.g., 'feature-factory' or 'feature-factory.md')")
    parser.add_argument("--limit", type=int, help="Limit number of problems to process")
    parser.add_argument("--batch-size", type=int, default=5, help="Number of problems to process in each batch (default: %(default)d)")
    parser.add_argument("--cache-id", type=str, help="Specific cache ID to use (e.g., '20241126_143022'). If not specified, uses latest cache or creates new one.")
    parser.add_argument("--output", default="scripts/tmp/relationship_descriptions_report.md", help="Output report file (default: %(default)s)")
    parser.add_argument("--csv-output", help="CSV output file for use by other scripts (overrides cache-based naming)")
    parser.add_argument("--dry-run", action="store_true", help="Generate report only (default behavior - no files are updated by this script)")
    parser.add_argument("--overwrite", action="store_true", help="Overwrite existing CSV file instead of adding to it")
    args = parser.parse_args()
    
    print("🚀 Starting Relationship Description Generation")
    print("=" * 50)
    if args.cache_id:
        print(f"🆔 Cache ID: {args.cache_id}")
    print()

    generator = RelationshipDescriptionGenerator()
    generator.load_problems()
    
    # Determine cache file
    if args.csv_output:
        # Use specified CSV output file
        cache_file = args.csv_output
        print(f"📄 Using specified output file: {os.path.basename(cache_file)}")
    else:
        # Use cache-based naming
        cache_file = generator.find_cache_file(args.cache_id)
        if cache_file:
            print(f"📄 Found cache: {os.path.basename(cache_file)}")
        else:
            if args.cache_id:
                print(f"⚠️  Specified cache ID '{args.cache_id}' not found")
            cache_file = generator.get_cache_filepath(args.cache_id)
            print(f"📄 Creating new cache: {os.path.basename(cache_file)}")
    
    # Load existing completed relationships
    completed_relationships = generator.get_completed_relationships(cache_file)
    print(f"✅ Found {len(completed_relationships)} existing relationships in cache")
    print()
    
    if args.file:
        # Handle .md extension - remove it to get the slug
        file_slug = args.file
        if file_slug.endswith('.md'):
            file_slug = file_slug[:-3]
        
        if file_slug not in generator.problems:
            print(f"❌ Problem file '{args.file}' not found. Available files:")
            available_files = list(generator.problems.keys())[:10]  # Show first 10
            for f in available_files:
                print(f"  - {f}.md")
            if len(generator.problems) > 10:
                print(f"  ... and {len(generator.problems) - 10} more")
            return
        
        # Process single file (skip relationships that already exist)
        print(f"🎯 Processing single file: {file_slug}")
        result = generator.process_problem_file_cached(file_slug, completed_relationships, cache_file)
        results = [result] if result else []
    else:
        # Process problems in batches, skipping completed ones
        all_problems = list(generator.problems.keys())
        remaining_problems = []
        
        for problem_key in all_problems:
            problem_data = generator.problems[problem_key]
            indicators_raw = problem_data.get('indicators_raw', '')
            symptoms_raw = problem_data.get('symptoms_raw', '')
            root_causes_raw = problem_data.get('root_causes_raw', '')
            
            # Check if this problem has any uncompleted relationships
            has_uncompleted = False
            
            # Check symptom links
            combined_symptoms_raw = indicators_raw + ' ' + symptoms_raw
            symptom_links = generator._extract_linked_problems(combined_symptoms_raw)
            for linked_problem in symptom_links:
                if (problem_key, linked_problem, 'symptom') not in completed_relationships:
                    has_uncompleted = True
                    break
            
            # Check root cause links
            if not has_uncompleted:
                root_cause_links = generator._extract_linked_problems(root_causes_raw)
                for linked_problem in root_cause_links:
                    if (problem_key, linked_problem, 'root_cause') not in completed_relationships:
                        has_uncompleted = True
                        break
            
            if has_uncompleted:
                remaining_problems.append(problem_key)
        
        print(f"📊 Total problems: {len(all_problems)}")
        print(f"🔄 Problems with remaining relationships: {len(remaining_problems)}")
        
        if not remaining_problems:
            print("🎉 All relationships already completed!")
            results = []
        else:
            # Process in batches
            if args.limit:
                target_problems = remaining_problems[:args.limit]
            else:
                target_problems = remaining_problems[:args.batch_size]
            
            print(f"🎯 Processing {len(target_problems)} problems in this batch")
            if len(remaining_problems) > len(target_problems):
                print(f"   ({len(remaining_problems) - len(target_problems)} problems remaining for future runs)")
            print()
            
            results = []
            try:
                with tqdm(target_problems, desc="Processing problems", unit="problem") as pbar:
                    for problem_key in pbar:
                        pbar.set_postfix_str(f"Processing {problem_key}")
                        result = generator.process_problem_file_cached(problem_key, completed_relationships, cache_file)
                        if result:
                            results.append(result)
                            # Update completed relationships for next iteration
                            for desc in result['symptom_descriptions']:
                                completed_relationships.add((problem_key, desc['problem'], 'symptom'))
                            for desc in result['root_cause_descriptions']:
                                completed_relationships.add((problem_key, desc['problem'], 'root_cause'))
            except KeyboardInterrupt:
                print(f"\n⚠️  Processing interrupted by user")
                print(f"   💾 Progress saved to {cache_file}")
                print(f"   📊 {len(results)} problems processed before interruption")
                print(f"   🔄 Run script again to continue from where you left off")
                if results:
                    # Generate partial report
                    report = generator.generate_report(results)
                    with open(args.output, 'w') as f:
                        f.write(report)
                    print(f"   📄 Partial report saved to {args.output}")
                return
    
    # Generate report and save results
    if results:
        report = generator.generate_report(results)
        
        # Save report
        with open(args.output, 'w') as f:
            f.write(report)
        
        # Save CSV for use by other scripts
        additive_mode = not args.overwrite
        generator.save_descriptions_csv(results, cache_file, additive=additive_mode)
        
        # Summary
        total_symptoms = sum(len(r['symptom_descriptions']) for r in results)
        total_causes = sum(len(r['root_cause_descriptions']) for r in results)
        
        print(f"\n✅ Complete!")
        print(f"   📊 {len(results)} problems processed")
        print(f"   🔗 {total_symptoms} symptom relationships described")
        print(f"   🔍 {total_causes} root cause relationships described")
        print(f"   📄 Report saved to {args.output}")
        print(f"   💾 Cache saved to {cache_file}")
        print(f"   💡 Use update_causal_relationships.py to apply descriptions to markdown files")
        
        if not args.file and 'remaining_problems' in locals() and len(remaining_problems) > len(target_problems):
            print(f"   🔄 Run script again to process remaining {len(remaining_problems) - len(target_problems)} problems")
    else:
        print("No new relationships to process")


if __name__ == "__main__":
    main()