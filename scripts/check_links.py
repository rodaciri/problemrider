#!/usr/bin/env python3

import os
import re

def fix_markdown_links(root_dir):
    """Remove broken markdown links while preserving the title and description text."""
    problems_dir = os.path.join(root_dir, '_problems')
    
    if not os.path.isdir(problems_dir):
        print(f"Error: Directory '{problems_dir}' not found.")
        return

    markdown_files = [f for f in os.listdir(problems_dir) if f.endswith('.md')]
    valid_files = set(markdown_files)
    
    total_broken_links = 0
    files_modified = 0

    for filename in markdown_files:
        filepath = os.path.join(problems_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content
        file_broken_links = 0

        # Pattern to match: **[Title](filename.md):** description
        def replace_broken_link(match):
            nonlocal file_broken_links, total_broken_links
            full_match = match.group(0)
            title = match.group(1)
            link_file = match.group(2)
            description = match.group(3)
            
            if link_file not in valid_files:
                file_broken_links += 1
                total_broken_links += 1
                # Return just the bold title and description without the link  
                return f"- **{title}:**{description}"
            else:
                # Keep the link as is
                return full_match

        # Replace broken links: - **[Title](file.md):** description  
        content = re.sub(r'- \*\*\[([^\]]+)\]\(([^)]+\.md)\):\*\*(.*)', 
                        replace_broken_link, content, flags=re.MULTILINE)

        # Write back if content changed
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            files_modified += 1
            print(f"Fixed {file_broken_links} broken links in: {filename}")

    print(f"\nSummary:")
    print(f"Total broken links removed: {total_broken_links}")
    print(f"Files modified: {files_modified}")
    
    if total_broken_links == 0:
        print("No broken links found!")

def check_markdown_links(root_dir):
    """Check for broken links without modifying files."""
    invalid_links = []
    problems_dir = os.path.join(root_dir, '_problems')
    
    if not os.path.isdir(problems_dir):
        print(f"Error: Directory '{problems_dir}' not found.")
        return

    markdown_files = [f for f in os.listdir(problems_dir) if f.endswith('.md')]

    for filename in markdown_files:
        filepath = os.path.join(problems_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Regex to find markdown links: [text](path)
        # This regex specifically looks for relative paths, not starting with http:// or https://
        links = re.findall(r'\[.*?\]\((?!https?://)(.*?\.md)\)', content)

        for link in links:
            linked_filepath = os.path.join(problems_dir, link)
            if not os.path.exists(linked_filepath):
                invalid_links.append(f"File: {filename}, Invalid Link: {link}")
    
    if invalid_links:
        print("Invalid Links Found:")
        for link in invalid_links:
            print(link)
    else:
        print("No invalid links found.")

if __name__ == "__main__":
    import sys
    # Get the project root directory (parent of scripts directory)
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    
    if len(sys.argv) > 1 and sys.argv[1] == "--fix":
        print("Fixing broken links...")
        fix_markdown_links(project_root)
    else:
        print("Checking for broken links (use --fix to automatically remove them)...")
        check_markdown_links(project_root)