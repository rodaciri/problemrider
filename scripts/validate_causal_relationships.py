#!/usr/bin/env python3
"""
Causal relationship validator using SD-SCM inspired approach.
Install dependencies: pip install -r scripts/requirements.txt
Additional dependencies: pip install networkx openai
"""

import yaml
import argparse
import re
import json
from pathlib import Path
from typing import Dict, List, Tuple, Set
import networkx as nx

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


class CausalRelationshipValidator:
    def __init__(self, problems_dir: str = "_problems"):
        self.problems_dir = Path(problems_dir)
        self.problems: Dict[str, Dict] = {}
        self.causal_graph = nx.DiGraph()
        
        # Initialize OpenAI client (uses environment variables)
        self.client = openai.OpenAI()
    
    def load_problems(self) -> None:
        """Load all problem files and extract causal relationships."""
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
                            'symptoms': self._extract_section(markdown_content, 'Indicators'),
                            'root_causes': self._extract_section(markdown_content, 'Root Causes'),
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
    
    def _clean_markdown_text(self, text: str) -> str:
        """Clean markdown formatting from text."""
        html = markdown.markdown(text)
        soup = BeautifulSoup(html, 'html.parser')
        plain_text = soup.get_text()
        return re.sub(r'\s+', ' ', plain_text).strip()
    
    def build_causal_graph(self) -> None:
        """Build initial causal graph from existing problem relationships."""
        print("Building causal graph...")
        
        for problem_key, problem_data in self.problems.items():
            # Add problem node
            self.causal_graph.add_node(problem_key, 
                                     type='problem',
                                     title=problem_data['title'],
                                     description=problem_data['description'])
            
            # Extract causal relationships from text
            self._extract_causal_links(problem_key, problem_data)
    
    def _extract_causal_links(self, problem_key: str, problem_data: Dict) -> None:
        """Extract causal relationships mentioned in problem text."""
        # Look for linked problems in symptoms and root causes sections
        symptoms_text = problem_data['symptoms']
        root_causes_text = problem_data['root_causes']
        
        # Simple regex to find markdown links to other problems
        link_pattern = r'\[([^\]]+)\]\(([^)]+)\.md\)'
        
        # Find symptom relationships
        for match in re.finditer(link_pattern, symptoms_text):
            linked_problem = match.group(2)
            if linked_problem in self.problems:
                # This problem manifests as symptoms in the linked problem
                self.causal_graph.add_edge(problem_key, linked_problem, 
                                         relationship='manifests_as')
        
        # Find root cause relationships
        for match in re.finditer(link_pattern, root_causes_text):
            linked_problem = match.group(2)
            if linked_problem in self.problems:
                # The linked problem causes this problem
                self.causal_graph.add_edge(linked_problem, problem_key, 
                                         relationship='causes')
    
    def validate_causal_relationship(self, cause: str, effect: str) -> Dict:
        """Use LLM to validate a causal relationship with focus on causal chains."""
        cause_info = self.problems.get(cause, {})
        effect_info = self.problems.get(effect, {})
        
        prompt = f"""
You are an expert in legacy software systems and causal reasoning. Evaluate whether there is a DIRECT CAUSAL CHAIN between these two problems:

POTENTIAL ROOT CAUSE:
Title: {cause_info.get('title', 'Unknown')}
Description: {cause_info.get('description', 'No description')}
Root Causes: {cause_info.get('root_causes', 'None listed')}

POTENTIAL EFFECT/SYMPTOM:
Title: {effect_info.get('title', 'Unknown')}
Description: {effect_info.get('description', 'No description')}
Symptoms: {effect_info.get('symptoms', 'None listed')}

CRITICAL: Focus on CAUSAL CHAINS, not just relatedness. Ask yourself:
1. Could the ROOT CAUSE problem directly trigger or cause the EFFECT problem?
2. Would fixing the ROOT CAUSE problem prevent or reduce the EFFECT problem?
3. Is there a logical cause-and-effect mechanism between them?

Please respond with a JSON object containing:
- "plausible": boolean (true/false) - Is there a direct causal relationship?
- "confidence": number (0.0 to 1.0) - How confident are you in this causal chain?
- "reasoning": string explaining the causal mechanism (if any)
- "causal_chain": string describing the step-by-step causal process
- "relationship_type": string ("causes", "symptom_of", "unrelated", "correlated_only")

Focus on CAUSALITY, not correlation or general relatedness. Be strict about what constitutes a true causal relationship.
"""
        
        try:
            response = self.client.chat.completions.create(
                model="gpt-5",
                messages=[
                    {"role": "system", "content": "You are an expert in legacy software systems and causal reasoning."},
                    {"role": "user", "content": prompt}
                ]
            )
            
            # Parse JSON response
            result = json.loads(response.choices[0].message.content)
            return result
            
        except Exception as e:
            print(f"Error validating relationship {cause} -> {effect}: {e}")
            return {"plausible": False, "confidence": 0.0, "reasoning": f"Error: {e}", "alternative_relationship": ""}
    
    def validate_all_relationships(self, min_confidence: float = 0.7, limit: int = None) -> List[Dict]:
        """Validate causal relationships in the graph."""
        print(f"Validating causal relationships with LLM{f' (limit: {limit})' if limit else ''}...")
        
        validation_results = []
        edges = list(self.causal_graph.edges(data=True))
        
        # Limit the number of relationships to validate
        if limit:
            edges = edges[:limit]
            print(f"Processing first {len(edges)} relationships out of {len(list(self.causal_graph.edges()))}")
        
        for edge in edges:
            cause, effect, data = edge
            relationship_type = data.get('relationship', 'unknown')
            
            print(f"Validating: {cause} --{relationship_type}--> {effect}")
            
            validation = self.validate_causal_relationship(cause, effect)
            
            result = {
                'cause': cause,
                'effect': effect,
                'relationship_type': relationship_type,
                'validation': validation,
                'needs_review': validation['confidence'] < min_confidence or not validation['plausible']
            }
            
            # Display result immediately
            print(f"  Result: {validation['plausible']} (confidence: {validation['confidence']:.2f})")
            print(f"  Reasoning: {validation['reasoning'][:100]}...")
            print()
            
            validation_results.append(result)
            
            # Add to graph for analysis
            self.causal_graph.edges[cause, effect]['validation'] = validation
        
        return validation_results
    
    def find_missing_causal_relationships(self, sample_size: int = 10) -> List[Dict]:
        """Find potential missing causal relationships using both semantic similarity and exhaustive search."""
        print(f"Looking for missing causal relationships (sample size: {sample_size})...")
        
        missing_relationships = []
        
        # Get problems that have symptoms but unclear causes
        problems_needing_causes = [
            key for key, data in self.problems.items() 
            if data['symptoms'] and not data['root_causes']
        ]
        
        # Sample problems to analyze
        import random
        sample_problems = random.sample(
            problems_needing_causes, 
            min(sample_size, len(problems_needing_causes))
        )
        
        for problem_key in sample_problems:
            problem_data = self.problems[problem_key]
            
            # Strategy 1: Use semantic similarity for quick relevant problem discovery
            relevant_candidates = self._find_semantically_similar_problems(problem_key, top_k=10)
            
            # Strategy 2: Also include random sample for non-obvious causal relationships
            all_other_problems = [p for p in self.problems.keys() if p != problem_key]
            random_candidates = random.sample(all_other_problems, min(5, len(all_other_problems)))
            
            # Combine candidates (remove duplicates)
            all_candidates = list(set(relevant_candidates + random_candidates))
            
            print(f"Analyzing {problem_key} against {len(all_candidates)} potential causes...")
            
            for potential_cause in all_candidates:
                # Check if relationship already exists
                if not self.causal_graph.has_edge(potential_cause, problem_key):
                    print(f"  Testing: {potential_cause} -> {problem_key}")
                    validation = self.validate_causal_relationship(potential_cause, problem_key)
                    
                    print(f"    Result: {validation['plausible']} (confidence: {validation['confidence']:.2f})")
                    
                    if validation['plausible'] and validation['confidence'] > 0.6:
                        print(f"    ✓ FOUND: {validation['reasoning'][:80]}...")
                        missing_relationships.append({
                            'cause': potential_cause,
                            'effect': problem_key,
                            'validation': validation,
                            'suggested': True,
                            'discovery_method': 'semantic' if potential_cause in relevant_candidates else 'random'
                        })
                    else:
                        print(f"    ✗ Not causal")
                    print()
        
        return missing_relationships
    
    def _find_semantically_similar_problems(self, problem_key: str, top_k: int = 10) -> List[str]:
        """Find semantically similar problems using simple text similarity."""
        try:
            from sentence_transformers import SentenceTransformer
            import numpy as np
            
            # Initialize model
            model = SentenceTransformer('all-MiniLM-L6-v2')
            
            # Get text for target problem
            target_problem = self.problems[problem_key]
            target_text = f"{target_problem['title']} {target_problem['description']} {target_problem['symptoms']}"
            target_embedding = model.encode([target_text])[0]
            
            # Get embeddings for all other problems
            similarities = []
            for other_key, other_data in self.problems.items():
                if other_key != problem_key:
                    other_text = f"{other_data['title']} {other_data['description']} {other_data['root_causes']}"
                    other_embedding = model.encode([other_text])[0]
                    
                    # Cosine similarity
                    similarity = np.dot(target_embedding, other_embedding) / (
                        np.linalg.norm(target_embedding) * np.linalg.norm(other_embedding)
                    )
                    similarities.append((other_key, similarity))
            
            # Return top similar problems
            similarities.sort(key=lambda x: x[1], reverse=True)
            return [key for key, _ in similarities[:top_k]]
            
        except ImportError:
            print("⚠️  sentence-transformers not available, using random selection")
            import random
            all_other = [p for p in self.problems.keys() if p != problem_key]
            return random.sample(all_other, min(top_k, len(all_other)))
    
    def generate_report(self, validation_results: List[Dict], missing_relationships: List[Dict]) -> str:
        """Generate a validation report."""
        report = []
        report.append("# Causal Relationship Validation Report\n")
        
        # Summary statistics
        total_relationships = len(validation_results)
        valid_relationships = sum(1 for r in validation_results if r['validation']['plausible'])
        needs_review = sum(1 for r in validation_results if r['needs_review'])
        
        report.append(f"## Summary")
        report.append(f"- Total relationships validated: {total_relationships}")
        report.append(f"- Plausible relationships: {valid_relationships} ({valid_relationships/total_relationships*100:.1f}%)")
        report.append(f"- Relationships needing review: {needs_review}")
        report.append(f"- Missing relationships found: {len(missing_relationships)}")
        report.append("")
        
        # Problematic relationships
        problematic = [r for r in validation_results if r['needs_review']]
        if problematic:
            report.append("## Relationships Needing Review")
            for rel in problematic:
                cause_title = self.problems[rel['cause']]['title']
                effect_title = self.problems[rel['effect']]['title']
                confidence = rel['validation']['confidence']
                reasoning = rel['validation']['reasoning']
                
                report.append(f"### {cause_title} → {effect_title}")
                report.append(f"**Confidence:** {confidence:.2f}")
                report.append(f"**Reasoning:** {reasoning}")
                report.append("")
        
        # Missing relationships
        if missing_relationships:
            report.append("## Suggested Missing Relationships")
            for rel in missing_relationships:
                cause_title = self.problems[rel['cause']]['title']
                effect_title = self.problems[rel['effect']]['title']
                confidence = rel['validation']['confidence']
                reasoning = rel['validation']['reasoning']
                
                report.append(f"### {cause_title} → {effect_title}")
                report.append(f"**Confidence:** {confidence:.2f}")
                report.append(f"**Reasoning:** {reasoning}")
                report.append("")
        
        return "\n".join(report)
    
    def update_problem_files_with_confidence(self, validation_results: List[Dict], missing_relationships: List[Dict]):
        """Update problem files with confidence scores in links and reorder by confidence."""
        print("Updating problem files with confidence scores...")
        
        # Group relationships by effect (the problem being updated)
        relationships_by_effect = {}
        
        # Add validated existing relationships
        for result in validation_results:
            effect = result['effect']
            if effect not in relationships_by_effect:
                relationships_by_effect[effect] = []
            relationships_by_effect[effect].append({
                'cause': result['cause'],
                'confidence': round(result['validation']['confidence'] * 20) / 20,
                'relationship_type': result['relationship_type']
            })
        
        # Add missing relationships that were found
        for result in missing_relationships:
            effect = result['effect']
            if effect not in relationships_by_effect:
                relationships_by_effect[effect] = []
            relationships_by_effect[effect].append({
                'cause': result['cause'],
                'confidence': round(result['validation']['confidence'] * 20) / 20,
                'relationship_type': 'causes'
            })
        
        # Update each problem file
        for problem_key, relationships in relationships_by_effect.items():
            if problem_key in self.problems:
                # Sort by confidence descending
                relationships.sort(key=lambda x: x['confidence'], reverse=True)
                self._update_file_with_confidence(problem_key, relationships)
    
    def _update_file_with_confidence(self, problem_key: str, relationships: List[Dict]):
        """Update a single file with confidence scores in links."""
        problem_data = self.problems[problem_key]
        file_path = problem_data['file_path']
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Update symptoms and root causes sections with confidence scores
        content = self._update_section_with_confidence(content, relationships, 'symptoms')
        content = self._update_section_with_confidence(content, relationships, 'root_causes')
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print(f"Updated {problem_key} with {len(relationships)} causal relationships")
    
    def _update_section_with_confidence(self, content: str, relationships: List[Dict], section_type: str) -> str:
        """Update a section with confidence scores and reorder by confidence."""
        section_name = "Indicators" if section_type == 'symptoms' else "Root Causes"
        
        # Find section boundaries
        section_start = re.search(rf'^## {section_name}.*$', content, re.MULTILINE)
        if not section_start:
            return content
        
        # Find next section or end of content
        next_section = re.search(r'^## ', content[section_start.end():], re.MULTILINE)
        if next_section:
            section_end = section_start.end() + next_section.start()
        else:
            section_end = len(content)
        
        section_content = content[section_start.end():section_end]
        
        # Extract and update links with confidence scores
        updated_section = self._update_links_with_confidence(section_content, relationships)
        
        # Reconstruct content
        return content[:section_start.end()] + updated_section + content[section_end:]
    
    def _update_links_with_confidence(self, section_content: str, relationships: List[Dict]) -> str:
        """Update markdown links with confidence scores."""
        # Pattern to match markdown links: [title](problem.md) or [title](problem.md) (0.85)
        link_pattern = r'\[([^\]]+)\]\(([^)]+)\.md\)(?:\s*\([0-9.]+\))?'
        
        def replace_link(match):
            title = match.group(1)
            problem_slug = match.group(2)
            
            # Find confidence for this relationship
            confidence = None
            for rel in relationships:
                if rel['cause'] == problem_slug:
                    confidence = rel['confidence']
                    break
            
            if confidence is not None:
                rounded_confidence = round(confidence * 20) / 20
                return f"[{title}]({problem_slug}.md) ({rounded_confidence:.2f})"
            else:
                return match.group(0)  # Return original if no confidence found
        
        return re.sub(link_pattern, replace_link, section_content)


def main():
    parser = argparse.ArgumentParser(description="Validate causal relationships using SD-SCM inspired approach")
    parser.add_argument("--output", default="causal_validation_report.md", help="Output report file")
    parser.add_argument("--sample-missing", type=int, default=5, help="Sample size for missing relationship detection")
    parser.add_argument("--limit", type=int, default=5, help="Limit number of relationships to validate (default: 5)")
    parser.add_argument("--update-files", action="store_true", help="Update problem files with confidence scores")
    args = parser.parse_args()
    
    validator = CausalRelationshipValidator()
    validator.load_problems()
    validator.build_causal_graph()
    
    # Validate existing relationships
    validation_results = validator.validate_all_relationships(limit=args.limit)
    
    # Find missing causal relationships
    missing_relationships = validator.find_missing_causal_relationships(sample_size=args.sample_missing)
    
    # Generate report
    report = validator.generate_report(validation_results, missing_relationships)
    
    # Save report
    with open(args.output, 'w') as f:
        f.write(report)
    
    print(f"Validation report saved to {args.output}")
    
    # Update files with confidence scores if requested
    if args.update_files:
        validator.update_problem_files_with_confidence(validation_results, missing_relationships)


if __name__ == "__main__":
    main()