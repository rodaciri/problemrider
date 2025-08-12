#!/usr/bin/env python3
"""
Simplified CSV Export - Everything as Problem nodes

All entities (problems, symptoms, root causes) are treated as Problem nodes
with different labels/types to distinguish them.
"""

import os
import re
import yaml
import csv
from pathlib import Path
from typing import Dict, List, Set
import hashlib

class SimplifiedCSVExporter:
    def __init__(self, problems_dir: str = "../_problems"):
        self.problems_dir = Path(problems_dir)
        self.problems = []
        self.all_nodes = []  # All nodes as problems
        self.relationships = []
        self.node_cache = set()  # Track unique nodes
        
    def parse_markdown_file(self, file_path: Path) -> Dict:
        """Parse a markdown file and extract problem data."""
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Split front matter and body
        parts = content.split('---', 2)
        if len(parts) < 3:
            return None
            
        front_matter = yaml.safe_load(parts[1])
        body = parts[2].strip()
        
        # Extract sections from body
        sections = self._extract_sections(body)
        
        problem_data = {
            'title': front_matter.get('title', ''),
            'description': front_matter.get('description', ''),
            'category': front_matter.get('category', []),
            'related_problems': front_matter.get('related_problems', []),
            'file_path': str(file_path),
            'sections': sections
        }
        
        return problem_data
    
    def _extract_sections(self, body: str) -> Dict[str, List[str]]:
        """Extract symptoms and root causes from markdown body."""
        sections = {
            'symptoms': [],
            'root_causes': []
        }
        
        # Split into sections based on ## headers
        section_pattern = r'^## (.+?)$'
        current_section = None
        current_content = []
        
        for line in body.split('\n'):
            if re.match(section_pattern, line):
                # Save previous section
                if current_section:
                    sections[self._normalize_section_name(current_section)] = self._parse_section_content('\n'.join(current_content))
                
                # Start new section
                current_section = re.match(section_pattern, line).group(1).strip()
                current_content = []
            else:
                current_content.append(line)
        
        # Save last section
        if current_section:
            sections[self._normalize_section_name(current_section)] = self._parse_section_content('\n'.join(current_content))
        
        return sections
    
    def _normalize_section_name(self, section_name: str) -> str:
        """Normalize section names."""
        normalized = section_name.lower().replace(' ', '_')
        if 'symptom' in normalized:
            return 'symptoms'
        elif 'root' in normalized and 'cause' in normalized:
            return 'root_causes'
        return normalized
    
    def _parse_section_content(self, content: str) -> List[str]:
        """Parse section content and extract list items."""
        items = []
        lines = content.split('\n')
        current_item = []
        
        for line in lines:
            line = line.strip()
            if not line:
                continue
                
            # Check if this is a list item
            if re.match(r'^[-*]\s+', line) or re.match(r'^\d+\.\s+', line):
                # Save previous item
                if current_item:
                    items.append(' '.join(current_item).strip())
                    current_item = []
                
                # Start new item
                item_text = re.sub(r'^[-*]\s+|^\d+\.\s+', '', line)
                current_item = [item_text]
            elif line and not line.startswith('#') and current_item:
                # Continue current item
                current_item.append(line)
            elif line.startswith('**') and ':' in line:
                # Handle "**Title:** Description" format
                if current_item:
                    items.append(' '.join(current_item).strip())
                    current_item = []
                items.append(line)
        
        # Save last item
        if current_item:
            items.append(' '.join(current_item).strip())
        
        return [item for item in items if item]
    
    def _extract_linked_problems(self, text: str) -> List[str]:
        """Extract linked problems from text."""
        links = re.findall(r'\[([^\]]+)\]\([^)]+\.md\)', text)
        return links
    
    def _clean_text_for_csv(self, text: str) -> str:
        """Clean text for CSV export."""
        # Remove markdown formatting
        text = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', text)
        text = re.sub(r'\*\*([^*]+)\*\*', r'\1', text)
        text = re.sub(r'\*([^*]+)\*', r'\1', text)
        text = text.replace('\n', ' ').replace('\r', ' ')
        text = re.sub(r'\s+', ' ', text)
        return text.strip()
    
    def _generate_node_id(self, text: str) -> str:
        """Generate a unique node ID."""
        clean_text = re.sub(r'[^a-zA-Z0-9\s]', '', text.lower())
        clean_text = re.sub(r'\s+', '_', clean_text.strip())
        if len(clean_text) > 40:
            hash_suffix = hashlib.md5(text.encode()).hexdigest()[:8]
            clean_text = clean_text[:40] + '_' + hash_suffix
        return clean_text or hashlib.md5(text.encode()).hexdigest()[:8]
    
    def _add_node_if_new(self, title: str, description: str, node_type: str, categories: List[str] = None, file_path: str = None):
        """Add a node if it doesn't already exist."""
        node_id = self._generate_node_id(title)
        
        if node_id not in self.node_cache:
            self.all_nodes.append({
                'id': node_id,
                'title': self._clean_text_for_csv(title),
                'description': self._clean_text_for_csv(description),
                'type': node_type,
                'categories': '|'.join(categories) if categories else '',
                'file_path': file_path or ''
            })
            self.node_cache.add(node_id)
        
        return node_id
    
    def parse_all_files(self):
        """Parse all markdown files."""
        if not self.problems_dir.exists():
            raise ValueError(f"Problems directory {self.problems_dir} does not exist")
        
        for file_path in self.problems_dir.glob("*.md"):
            problem_data = self.parse_markdown_file(file_path)
            if problem_data:
                self.problems.append(problem_data)
                
                # Add main problem node
                problem_id = self._add_node_if_new(
                    title=problem_data['title'],
                    description=problem_data['description'],
                    node_type='MainProblem',
                    categories=problem_data['category'],
                    file_path=problem_data['file_path']
                )
                
                # Process symptoms
                for symptom in problem_data['sections'].get('symptoms', []):
                    clean_symptom = self._clean_text_for_csv(symptom)
                    
                    # Check for linked problems
                    linked_problems = self._extract_linked_problems(symptom)
                    if linked_problems:
                        for linked_problem in linked_problems:
                            target_id = self._add_node_if_new(
                                title=linked_problem,
                                description="",
                                node_type='Problem'
                            )
                            self.relationships.append({
                                'source_id': problem_id,
                                'target_id': target_id,
                                'relationship_type': 'HAS_SYMPTOM'
                            })
                        continue
                    
                    # Extract title and description
                    if '**' in clean_symptom and ':' in clean_symptom:
                        parts = clean_symptom.split(':', 1)
                        title = parts[0].strip('*').strip()
                        description = parts[1].strip() if len(parts) > 1 else ""
                    else:
                        title = clean_symptom
                        description = ""
                    
                    symptom_id = self._add_node_if_new(
                        title=title,
                        description=description,
                        node_type='Symptom'
                    )
                    
                    self.relationships.append({
                        'source_id': problem_id,
                        'target_id': symptom_id,
                        'relationship_type': 'HAS_SYMPTOM'
                    })
                
                # Process root causes
                for cause in problem_data['sections'].get('root_causes', []):
                    clean_cause = self._clean_text_for_csv(cause)
                    
                    # Check for linked problems
                    linked_problems = self._extract_linked_problems(cause)
                    if linked_problems:
                        for linked_problem in linked_problems:
                            target_id = self._add_node_if_new(
                                title=linked_problem,
                                description="",
                                node_type='Problem'
                            )
                            self.relationships.append({
                                'source_id': problem_id,
                                'target_id': target_id,
                                'relationship_type': 'CAUSED_BY'
                            })
                        continue
                    
                    # Extract title and description
                    if '**' in clean_cause and ':' in clean_cause:
                        parts = clean_cause.split(':', 1)
                        title = parts[0].strip('*').strip()
                        description = parts[1].strip() if len(parts) > 1 else ""
                    else:
                        title = clean_cause
                        description = ""
                    
                    cause_id = self._add_node_if_new(
                        title=title,
                        description=description,
                        node_type='RootCause'
                    )
                    
                    self.relationships.append({
                        'source_id': problem_id,
                        'target_id': cause_id,
                        'relationship_type': 'CAUSED_BY'
                    })
                
                # Process related problems
                for related_problem in problem_data.get('related_problems', []):
                    target_id = self._add_node_if_new(
                        title=related_problem,
                        description="",
                        node_type='Problem'
                    )
                    self.relationships.append({
                        'source_id': problem_id,
                        'target_id': target_id,
                        'relationship_type': 'RELATED_TO'
                    })
    
    def export_to_csv(self, output_dir: str = "neo4j_simple"):
        """Export to simplified CSV format."""
        output_path = Path(output_dir)
        output_path.mkdir(exist_ok=True)
        
        # Export all nodes as problems
        with open(output_path / "problems.csv", 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=['id', 'title', 'description', 'type', 'categories', 'file_path'])
            writer.writeheader()
            writer.writerows(self.all_nodes)
        
        # Export relationships
        with open(output_path / "relationships.csv", 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=['source_id', 'target_id', 'relationship_type'])
            writer.writeheader()
            writer.writerows(self.relationships)
        
        # Create import script
        self._create_import_script(output_path)
        
        print(f"Simplified CSV export generated in: {output_path}")
        print(f"Total nodes: {len(self.all_nodes)}")
        print(f"Total relationships: {len(self.relationships)}")
        
        # Show breakdown by type
        type_counts = {}
        for node in self.all_nodes:
            node_type = node['type']
            type_counts[node_type] = type_counts.get(node_type, 0) + 1
        
        print("\nNode breakdown by type:")
        for node_type, count in sorted(type_counts.items()):
            print(f"  {node_type}: {count}")
    
    def _create_import_script(self, output_path: Path):
        """Create import script for the simplified format."""
        script_content = """// Simplified Neo4j Import - Everything as Problem nodes
// Upload problems.csv and relationships.csv to Neo4j Aura first

// Clear existing data (optional)
MATCH (n) DETACH DELETE n;

// Load all nodes as Problems with different types
LOAD CSV WITH HEADERS FROM 'file:///problems.csv' AS row
CREATE (p:Problem {
  id: row.id,
  title: row.title,
  description: row.description,
  type: row.type,
  categories: CASE WHEN row.categories IS NOT NULL AND row.categories <> '' 
              THEN split(row.categories, '|') 
              ELSE [] END,
  file_path: row.file_path
});

// Create indexes
CREATE INDEX problem_id_idx FOR (p:Problem) ON (p.id);
CREATE INDEX problem_title_idx FOR (p:Problem) ON (p.title);
CREATE INDEX problem_type_idx FOR (p:Problem) ON (p.type);

// Load relationships
LOAD CSV WITH HEADERS FROM 'file:///relationships.csv' AS row
MATCH (source:Problem {id: row.source_id}), (target:Problem {id: row.target_id})
CALL apoc.create.relationship(source, row.relationship_type, {}, target) YIELD rel
RETURN count(rel);

// Alternative if APOC is not available - run these separately:

/*
// HAS_SYMPTOM relationships
LOAD CSV WITH HEADERS FROM 'file:///relationships.csv' AS row
WITH row WHERE row.relationship_type = 'HAS_SYMPTOM'
MATCH (source:Problem {id: row.source_id}), (target:Problem {id: row.target_id})
CREATE (source)-[:HAS_SYMPTOM]->(target);

// CAUSED_BY relationships  
LOAD CSV WITH HEADERS FROM 'file:///relationships.csv' AS row
WITH row WHERE row.relationship_type = 'CAUSED_BY'
MATCH (source:Problem {id: row.source_id}), (target:Problem {id: row.target_id})
CREATE (source)-[:CAUSED_BY]->(target);

// RELATED_TO relationships
LOAD CSV WITH HEADERS FROM 'file:///relationships.csv' AS row
WITH row WHERE row.relationship_type = 'RELATED_TO'
MATCH (source:Problem {id: row.source_id}), (target:Problem {id: row.target_id})
CREATE (source)-[:RELATED_TO]->(target);
*/

// Useful queries after import:

// Top 10 most referenced problems (your original query)
MATCH (n)<-[r]-()
RETURN n.title as problem_title, 
       n.type as problem_type,
       count(r) as incoming_relationships
ORDER BY incoming_relationships DESC
LIMIT 10;

// Problems by type
MATCH (n:Problem)
RETURN n.type, count(n) as count
ORDER BY count DESC;

// Find main problems and their symptoms
MATCH (main:Problem {type: 'MainProblem'})-[:HAS_SYMPTOM]->(symptom:Problem)
RETURN main.title, collect(symptom.title) as symptoms
LIMIT 5;
"""
        
        with open(output_path / "import_script.cypher", 'w', encoding='utf-8') as f:
            f.write(script_content)

def main():
    exporter = SimplifiedCSVExporter()
    exporter.parse_all_files()
    exporter.export_to_csv()

if __name__ == "__main__":
    main()