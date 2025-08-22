#!/usr/bin/env python3
"""
Update symptoms and root causes in problem markdown files with CESAR causal analysis results.

This script reads the CESAR causal analysis cache and updates the ## Symptoms and ## Root Causes
sections in _problems/*.md files with more trustworthy causal relationships based on the
causal strength scores from the analysis.
"""

import os
import json
import yaml
import argparse
from typing import Dict, List, Tuple, Set
import re

def load_causal_cache(cache_file: str) -> Dict:
    """Load the CESAR causal analysis cache file."""
    try:
        with open(cache_file, 'r', encoding='utf-8') as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError) as e:
        raise ValueError(f"Could not load cache file {cache_file}: {e}")

def parse_problem_file(filepath: str) -> Tuple[Dict, str, str]:
    """Parse a problem markdown file and return frontmatter, body, and original content."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if not content.startswith('---'):
        raise ValueError(f"Problem file {filepath} missing YAML frontmatter")
    
    parts = content.split('---', 2)
    if len(parts) != 3:
        raise ValueError(f"Invalid frontmatter format in {filepath}")
    
    frontmatter = yaml.safe_load(parts[1])
    body = parts[2].strip()
    
    return frontmatter, body, content

def extract_causal_relationships(cache_data: Dict, problem_title: str, 
                                confidence_threshold: float = 0.30) -> Tuple[List[Tuple], List[Tuple]]:
    """
    Extract causal relationships from cache data for a specific problem.
    
    Returns:
        - symptoms: List of (title, confidence, score) tuples where this problem is the cause
        - root_causes: List of (title, confidence, score) tuples where this problem is the effect
    """
    symptoms = []  # This problem causes other problems (A → B where A is our problem)
    root_causes = []  # Other problems cause this problem (A → B where B is our problem)
    
    results = cache_data.get('results', {})
    
    # Track all relationships to avoid circular causality
    symptom_titles = set()
    root_cause_titles = set()
    
    for pair_key, result in results.items():
        # Skip relationships below confidence threshold
        if result['confidence'] < confidence_threshold:
            continue
        
        title_a = result['title_a']
        title_b = result['title_b']
        stronger_direction = result['stronger_direction']
        confidence = result['confidence']
        stronger_score = result['stronger_score']
        
        # Check if our problem is involved in this relationship
        if problem_title not in [title_a, title_b]:
            continue
        
        # Parse the stronger direction to determine causal relationship
        if ' → ' in stronger_direction:
            cause, effect = stronger_direction.split(' → ')
            
            if cause == problem_title:
                # Our problem is the cause, other problem is symptom
                other_problem = effect
                if other_problem not in root_cause_titles:  # Avoid circular causality
                    symptoms.append((other_problem, confidence, stronger_score))
                    symptom_titles.add(other_problem)
            elif effect == problem_title:
                # Our problem is the effect, other problem is root cause
                other_problem = cause
                if other_problem not in symptom_titles:  # Avoid circular causality
                    root_causes.append((other_problem, confidence, stronger_score))
                    root_cause_titles.add(other_problem)
    
    # Sort by confidence (highest first)
    symptoms.sort(key=lambda x: x[1], reverse=True)
    root_causes.sort(key=lambda x: x[1], reverse=True)
    
    return symptoms, root_causes

def title_to_slug(title: str) -> str:
    """Convert a problem title to its expected markdown filename slug."""
    return title.lower().replace(' ', '-').replace('(', '').replace(')', '').replace('/', '-')

def build_markdown_section(section_title: str, relationships: List[Tuple], 
                         section_symbol: str, existing_problems: Set[str]) -> str:
    """Build a markdown section from causal relationships."""
    if not relationships:
        return f"## {section_title} {section_symbol}\n\n*No significant causal relationships identified with confidence ≥ 0.30*\n"
    
    lines = [f"## {section_title} {section_symbol}\n"]
    
    for title, confidence, score in relationships:
        slug = title_to_slug(title)
        
        # Only create link if the problem file exists
        if slug in existing_problems:
            link_text = f"[{title}]({slug}.md)"
        else:
            link_text = f"**{title}**"
        
        # Add confidence and score information as comment
        lines.append(f"- {link_text} *(confidence: {confidence:.3f}, strength: {score:.3f})*")
    
    lines.append("")  # Empty line after section
    return "\n".join(lines)

def get_existing_problems(problems_dir: str) -> Set[str]:
    """Get set of existing problem slugs from the problems directory."""
    existing = set()
    for filename in os.listdir(problems_dir):
        if filename.endswith('.md'):
            slug = filename[:-3]  # Remove .md extension
            existing.add(slug)
    return existing

def update_problem_file(filepath: str, cache_data: Dict, confidence_threshold: float = 0.30,
                       existing_problems: Set[str] = None, dry_run: bool = False) -> bool:
    """Update a single problem file with CESAR-based causal relationships."""
    if existing_problems is None:
        existing_problems = set()
    
    try:
        frontmatter, body, original_content = parse_problem_file(filepath)
        problem_title = frontmatter.get('title', '')
        
        if not problem_title:
            print(f"⚠️  Skipping {filepath}: No title in frontmatter")
            return False
        
        print(f"📄 Processing: {problem_title}")
        
        # Extract causal relationships from cache
        symptoms, root_causes = extract_causal_relationships(
            cache_data, problem_title, confidence_threshold
        )
        
        print(f"   Found {len(symptoms)} symptoms, {len(root_causes)} root causes")
        
        if not symptoms and not root_causes:
            print(f"   ⚠️  No causal relationships found for {problem_title}")
            return False
        
        # Split body into sections
        sections = re.split(r'^## ', body, flags=re.MULTILINE)
        
        # Build new sections
        new_symptoms_section = build_markdown_section("Symptoms", symptoms, "▲", existing_problems)
        new_root_causes_section = build_markdown_section("Root Causes", root_causes, "▼", existing_problems)
        
        # Rebuild the body, replacing Symptoms and Root Causes sections
        new_body_parts = []
        
        for i, section in enumerate(sections):
            if i == 0:  # First part before any ## header
                new_body_parts.append(section.rstrip())
                continue
            
            section_name = section.split('\n')[0].strip()
            section_content = '\n'.join(section.split('\n')[1:])
            
            # Replace Symptoms and Root Causes sections with CESAR-based versions
            if section_name.startswith('Symptoms'):
                new_body_parts.append(new_symptoms_section)
            elif section_name.startswith('Root Causes'):
                new_body_parts.append(new_root_causes_section)
            else:
                # Keep other sections unchanged
                new_body_parts.append(f"## {section}")
        
        # If Symptoms or Root Causes sections didn't exist, add them
        has_symptoms = any('Symptoms' in part for part in new_body_parts)
        has_root_causes = any('Root Causes' in part for part in new_body_parts)
        
        if not has_symptoms and symptoms:
            new_body_parts.append(new_symptoms_section)
        
        if not has_root_causes and root_causes:
            new_body_parts.append(new_root_causes_section)
        
        # Reconstruct the full file content
        new_content = "---\n" + yaml.dump(frontmatter, default_flow_style=False) + "---\n\n"
        new_content += '\n'.join(new_body_parts).strip() + '\n'
        
        if dry_run:
            print(f"   🔍 DRY RUN - Would update {filepath}")
            return True
        
        # Write the updated content
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"   ✅ Updated {filepath}")
        return True
        
    except Exception as e:
        print(f"   ❌ Error processing {filepath}: {e}")
        return False

def main():
    parser = argparse.ArgumentParser(
        description="Update problem files with CESAR causal analysis results",
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    
    parser.add_argument('cache_file', 
                       help='Path to CESAR causal analysis cache JSON file')
    parser.add_argument('--problems-dir', default='_problems',
                       help='Directory containing problem markdown files (default: _problems)')
    parser.add_argument('--confidence-threshold', type=float, default=0.30,
                       help='Minimum confidence threshold for including relationships (default: 0.30)')
    parser.add_argument('--dry-run', action='store_true',
                       help='Show what would be updated without making changes')
    parser.add_argument('--problem-filter', 
                       help='Only update problems matching this title substring (case insensitive)')
    
    args = parser.parse_args()
    
    print("🚀 CESAR Causal Relationships Update")
    print("=" * 50)
    print(f"📄 Cache file: {args.cache_file}")
    print(f"📁 Problems dir: {args.problems_dir}")
    print(f"🎯 Confidence threshold: {args.confidence_threshold}")
    if args.dry_run:
        print("🔍 DRY RUN MODE - No files will be modified")
    print()
    
    # Load cache data
    try:
        cache_data = load_causal_cache(args.cache_file)
        print(f"✅ Loaded cache with {len(cache_data.get('results', {}))} causal relationships")
    except ValueError as e:
        print(f"❌ {e}")
        return 1
    
    # Get existing problems for link validation
    if not os.path.exists(args.problems_dir):
        print(f"❌ Problems directory {args.problems_dir} does not exist")
        return 1
    
    existing_problems = get_existing_problems(args.problems_dir)
    print(f"📊 Found {len(existing_problems)} existing problem files")
    print()
    
    # Process each problem file
    problem_files = [f for f in os.listdir(args.problems_dir) if f.endswith('.md')]
    problem_files.sort()
    
    updated_count = 0
    skipped_count = 0
    
    for filename in problem_files:
        filepath = os.path.join(args.problems_dir, filename)
        
        # Apply filter if specified
        if args.problem_filter:
            try:
                frontmatter, _, _ = parse_problem_file(filepath)
                title = frontmatter.get('title', '')
                if args.problem_filter.lower() not in title.lower():
                    continue
            except Exception:
                continue  # Skip files we can't parse
        
        if update_problem_file(filepath, cache_data, args.confidence_threshold, 
                             existing_problems, args.dry_run):
            updated_count += 1
        else:
            skipped_count += 1
    
    print()
    print("📊 Summary:")
    print(f"   ✅ Files updated: {updated_count}")
    print(f"   ⚠️  Files skipped: {skipped_count}")
    
    if args.dry_run:
        print("\n🔍 This was a dry run. Use without --dry-run to apply changes.")
    
    return 0

if __name__ == '__main__':
    exit(main())