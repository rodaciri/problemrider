import os
import re
import argparse
from titlecase import titlecase

def process_file(filepath, fix_mode=False):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original_content = content
    changes_made = False
    
    # Check for title in YAML front matter
    title_match = re.search(r'^title: "(.+)"', content, re.MULTILINE)
    if title_match:
        old_title = title_match.group(1)
        new_title = titlecase(old_title)
        
        if old_title != new_title:
            if fix_mode:
                print(f"Fixing YAML title in {filepath}: '{old_title}' -> '{new_title}'")
                content = content.replace(f'title: "{old_title}"', f'title: "{new_title}"')
                changes_made = True
            else:
                print(f"Would fix YAML title in {filepath}: '{old_title}' -> '{new_title}'")
    
    # Check for H1 headers that might need title case
    h1_matches = re.finditer(r'^# (.+)$', content, re.MULTILINE)
    for match in h1_matches:
        old_header = match.group(1)
        new_header = titlecase(old_header)
        
        if old_header != new_header:
            if fix_mode:
                print(f"Fixing H1 in {filepath}: '{old_header}' -> '{new_header}'")
                content = content.replace(f'# {old_header}', f'# {new_header}')
                changes_made = True
            else:
                print(f"Would fix H1 in {filepath}: '{old_header}' -> '{new_header}'")
    
    # Check for markdown links - pattern: [Title Text](link.md)
    link_matches = re.finditer(r'\[([^\]]+)\]\([^)]+\.md\)', content)
    for match in link_matches:
        old_link_text = match.group(1)
        new_link_text = titlecase(old_link_text)
        
        if old_link_text != new_link_text:
            if fix_mode:
                print(f"Fixing link text in {filepath}: '[{old_link_text}]' -> '[{new_link_text}]'")
                content = content.replace(f'[{old_link_text}]', f'[{new_link_text}]')
                changes_made = True
            else:
                print(f"Would fix link text in {filepath}: '[{old_link_text}]' -> '[{new_link_text}]'")
    
    # Write the file only once if changes were made
    if fix_mode and changes_made:
        with open(filepath, 'w') as f:
            f.write(content)

def main():
    parser = argparse.ArgumentParser(description='Convert titles to proper title case using New York Times Manual of Style')
    parser.add_argument('--fix', action='store_true', 
                       help='Actually modify files. Without this flag, performs a dry run.')
    
    args = parser.parse_args()
    
    problems_dir = '../_problems'
    
    if not args.fix:
        print("DRY RUN - Use --fix to actually modify files")
        print("=" * 50)
    
    for filename in os.listdir(problems_dir):
        if filename.endswith('.md'):
            filepath = os.path.join(problems_dir, filename)
            process_file(filepath, args.fix)

if __name__ == '__main__':
    main()