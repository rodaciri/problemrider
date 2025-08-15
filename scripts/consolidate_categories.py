#!/usr/bin/env python3
"""
Script to consolidate problem categories from ~200 to 15 core categories.
Updates all markdown files in _problems directory.
"""

import os
import re
import yaml
from pathlib import Path

# Category mapping from old categories to new consolidated categories
CATEGORY_MAPPING = {
    # Process (workflow, planning, development process)
    'Process': 'Process',
    'Planning': 'Process',
    'Workflow': 'Process',
    'Development Workflow': 'Process',
    'Development Experience': 'Process',
    'Developer Experience': 'Process',
    'Change Management': 'Process',
    'Decision Making': 'Process',
    'Flow': 'Process',
    'Efficiency': 'Process',
    'Productivity': 'Process',
    'Project Management': 'Process',
    
    # Architecture (design, system structure, coupling issues)
    'Architecture': 'Architecture',
    'Design': 'Architecture',
    'System Quality': 'Architecture',
    'System Management': 'Architecture',
    'Microservices': 'Architecture',
    'API Design': 'Architecture',
    'API Management': 'Architecture',
    'Object-Oriented Design': 'Architecture',
    
    # Code (maintainability, technical debt, code issues)
    'Code Quality': 'Code',
    'Maintenance': 'Code',
    'Technical Debt': 'Code',
    'Maintainability': 'Code',
    'Quality': 'Code',
    'Maintenance': 'Code',
    'Technical': 'Code',
    'Implementation': 'Code',
    'Reliability': 'Code',
    'Stability': 'Code',
    'Error Handling': 'Code',
    'Runtime Errors': 'Code',
    'Solution Quality': 'Code',
    'Logging': 'Code',
    'Frontend': 'Code',
    'Build System': 'Code',
    'Automation': 'Code',
    'Tooling': 'Code',
    'Technology': 'Code',
    
    # Performance (speed, scalability, resource usage)
    'Performance': 'Performance',
    'Scalability': 'Performance',
    'Resource Management': 'Performance',
    'Resource Planning': 'Performance',
    'Memory Management': 'Performance',
    'Memory': 'Performance',
    'Concurrency': 'Performance',
    'Hardware': 'Performance',
    'Networking': 'Performance',
    'Network': 'Performance',
    'Capacity Planning': 'Performance',
    'Bottlenecks': 'Performance',
    'Data Processing': 'Performance',
    
    # Team (team coordination, collaboration)
    'Team': 'Team',
    'Team Dynamics': 'Team',
    'Team Coordination': 'Team',
    'Team Collaboration': 'Team',
    'Team Development': 'Team',
    'Collaboration': 'Team',
    'Coordination': 'Team',
    'Workload Distribution': 'Team',
    'Skills': 'Team',
    'Learning': 'Team',
    
    # Communication (knowledge sharing, documentation)
    'Communication': 'Communication',
    'Knowledge Management': 'Communication',
    'Knowledge Sharing': 'Communication',
    'Documentation': 'Communication',
    'Information Disclosure': 'Communication',
    'Stakeholder Relations': 'Communication',
    'Stakeholder Management': 'Communication',
    'Business Relations': 'Communication',
    
    # Management (leadership, project management)
    'Management': 'Management',
    'Leadership': 'Management',
    'Strategic': 'Management',
    'Strategy': 'Management',
    'Organizational': 'Management',
    'Organizational Structure': 'Management',
    'Governance': 'Management',
    'Politics': 'Management',
    'Authority': 'Management',
    'Accountability': 'Management',
    'Responsibility': 'Management',
    'Risk Management': 'Management',
    'Risk': 'Management',
    'Cost Management': 'Management',
    'Financial': 'Management',
    'Business Continuity': 'Management',
    'Delivery': 'Management',
    
    # Security (vulnerabilities, compliance)
    'Security': 'Security',
    'Compliance': 'Security',
    'Data Protection': 'Security',
    'Authentication': 'Security',
    'Credential Management': 'Security',
    'Input Validation': 'Security',
    'Session Management': 'Security',
    'Legal': 'Security',
    
    # Business (strategy, product, business impact)
    'Business': 'Business',
    'Business Impact': 'Business',
    'Business Logic': 'Business',
    'Product': 'Business',
    'Product Management': 'Business',
    'Competitive': 'Business',
    'External Factors': 'Business',
    'Trust': 'Business',
    
    # Operations (deployment, infrastructure, configuration)
    'Operations': 'Operations',
    'Deployment': 'Operations',
    'Infrastructure': 'Operations',
    'Configuration': 'Operations',
    'Environment Management': 'Operations',
    'Support': 'Operations',
    'Observability': 'Operations',
    'Operational': 'Operations',
    'Migration': 'Operations',
    'Legacy': 'Operations',
    'Monitoring': 'Operations',
    
    # Testing (quality assurance, integration tests)
    'Testing': 'Testing',
    'Quality Assurance': 'Testing',
    'Integration': 'Testing',
    'Measurement': 'Testing',
    'Analysis': 'Testing',
    
    # Database (data management, queries)
    'Database': 'Database',
    'Data Management': 'Database',
    'Data Integrity': 'Database',
    'Data Quality': 'Database',
    'Data Modeling': 'Database',
    'Data': 'Database',
    
    # Dependencies (vendor management, integration, API issues)
    'Dependencies': 'Dependencies',
    'Vendor Management': 'Dependencies',
    'Vendor Relations': 'Dependencies',
    'Independence': 'Dependencies',
    'Adaptability': 'Dependencies',
    
    # Requirements (user experience, planning, stakeholder needs)
    'Requirements': 'Requirements',
    'User Experience': 'Requirements',
    'Usability': 'Requirements',
    
    # Culture (individual issues, workplace health, organizational problems)
    'Culture': 'Culture',
    'Individual': 'Culture',
    'Individual Performance': 'Culture',
    'Workplace Health': 'Culture',
    'Health': 'Culture',
    'Psychology': 'Culture',
    'Cultural': 'Culture',
    'Consistency': 'Culture',
}

def consolidate_categories(categories):
    """Convert list of old categories to consolidated categories."""
    consolidated = set()
    for category in categories:
        if category in CATEGORY_MAPPING:
            consolidated.add(CATEGORY_MAPPING[category])
        else:
            # If not in mapping, try to find best match or default to original
            print(f"Warning: Category '{category}' not found in mapping, keeping as is")
            consolidated.add(category)
    return sorted(list(consolidated))

def update_problem_file(file_path):
    """Update a single problem file with consolidated categories."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split front matter and content
    if not content.startswith('---'):
        print(f"Warning: {file_path} doesn't have YAML front matter")
        return False
    
    parts = content.split('---', 2)
    if len(parts) < 3:
        print(f"Warning: {file_path} has malformed front matter")
        return False
    
    front_matter = parts[1]
    body_content = parts[2]
    
    # Parse YAML
    try:
        yaml_data = yaml.safe_load(front_matter)
    except yaml.YAMLError as e:
        print(f"Error parsing YAML in {file_path}: {e}")
        return False
    
    # Update categories if they exist
    if 'category' in yaml_data and yaml_data['category']:
        old_categories = yaml_data['category']
        if isinstance(old_categories, str):
            old_categories = [old_categories]
        
        new_categories = consolidate_categories(old_categories)
        yaml_data['category'] = new_categories
        
        print(f"{file_path}: {old_categories} -> {new_categories}")
    
    # Write back to file
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('---\n')
            yaml.dump(yaml_data, f, default_flow_style=False, sort_keys=False)
            f.write('---')
            f.write(body_content)
        return True
    except Exception as e:
        print(f"Error writing {file_path}: {e}")
        return False

def main():
    """Main function to process all problem files."""
    problems_dir = Path('_problems')
    
    if not problems_dir.exists():
        print("Error: _problems directory not found")
        return
    
    updated_count = 0
    total_count = 0
    
    for md_file in problems_dir.glob('*.md'):
        total_count += 1
        if update_problem_file(md_file):
            updated_count += 1
    
    print(f"\nProcessed {total_count} files, updated {updated_count} files")

if __name__ == '__main__':
    main()