#!/usr/bin/env python3
"""
Simple embeddings using sentence-transformers with all-MiniLM-L6-v2.
Install dependencies: pip install -r scripts/requirements.txt
"""

import yaml
import argparse
import re
import numpy as np
from pathlib import Path
from typing import Dict, List, Tuple

try:
    import markdown
    from bs4 import BeautifulSoup
except ImportError:
    print("❌ markdown/beautifulsoup4 not installed")
    print("Run: pip install -r scripts/requirements.txt")
    exit(1)


try:
    from sentence_transformers import SentenceTransformer
except ImportError:
    print("❌ sentence-transformers not installed")
    print("Run: pip install sentence-transformers")
    exit(1)



# Configuration
MIN_SIMILARITY = 0.5


class SimpleEmbeddingAnalyzer:
    def __init__(self, problems_dir: str = "_problems"):
        self.problems_dir = Path(problems_dir)
        self.problems: Dict[str, Dict] = {}
        self.embeddings: Dict[str, np.ndarray] = {}
        
        print("Loading all-MiniLM-L6-v2 model...")
        self.model = SentenceTransformer('all-MiniLM-L6-v2')
        
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
                            'current_related_problems': metadata.get('related_problems', []),
                            'metadata': metadata,
                            'content_sections': self._extract_additional_sections(markdown_content)
                        }
            except Exception as e:
                print(f"Error loading {file_path}: {e}")
                
        print(f"Loaded {len(self.problems)} problems")
    
    def _clean_markdown_text(self, text: str) -> str:
        """Clean markdown formatting from text."""
        # Convert markdown to HTML, then extract plain text
        html = markdown.markdown(text)
        soup = BeautifulSoup(html, 'html.parser')
        plain_text = soup.get_text()
        return re.sub(r'\s+', ' ', plain_text).strip()
    
    def _extract_section(self, content: str, section_name: str) -> str:
        """Extract a specific section from markdown content."""
        pattern = rf'## {section_name}.*?\n(.*?)(?=\n## |\n$)'
        match = re.search(pattern, content, re.IGNORECASE | re.DOTALL)
        if match:
            return self._clean_markdown_text(match.group(1))
        return ''
    
    def _extract_additional_sections(self, content: str) -> dict:
        """Extract specific sections: indicators, description, and examples."""
        sections = {
            'indicators': self._extract_section(content, 'Indicators'),
            'description': self._extract_section(content, 'Description')
        }
        return sections
    
    def create_embeddings(self) -> None:
        """Create fresh embeddings using all-MiniLM-L6-v2."""
        print("Creating fresh embeddings...")
        
        texts_to_encode = []
        keys_to_encode = []
        
        for problem_key, problem_data in self.problems.items():
            # Combine title, YAML description, description section, and indicators
            text_parts = [
                problem_data['title'],
                problem_data['description'],  # YAML description
                problem_data['content_sections']['description'],  # Description section
                problem_data['content_sections']['indicators']
            ]
            # Filter out empty parts
            text_parts = [part for part in text_parts if part.strip()]
            text = " ".join(text_parts)
            texts_to_encode.append(text)
            keys_to_encode.append(problem_key)
        
        print(f"Encoding {len(texts_to_encode)} problems...")
        embeddings = self.model.encode(texts_to_encode, show_progress_bar=True)
        
        for key, embedding in zip(keys_to_encode, embeddings):
            self.embeddings[key] = embedding
        
        print(f"Created fresh embeddings for {len(self.embeddings)} problems")
    
    def find_related(self, problem_key: str, top_k: int = 5, min_similarity: float = 0.3) -> List[Tuple[str, float]]:
        """Find related problems using cosine similarity."""
        if problem_key not in self.embeddings:
            return []
        
        base_emb = self.embeddings[problem_key]
        similarities = []
        
        for other_key, other_emb in self.embeddings.items():
            if other_key != problem_key:
                # Cosine similarity
                similarity = np.dot(base_emb, other_emb) / (np.linalg.norm(base_emb) * np.linalg.norm(other_emb))
                if similarity >= min_similarity:
                    similarities.append((other_key, float(similarity)))
        
        return sorted(similarities, key=lambda x: x[1], reverse=True)[:top_k]
    
    def update_all_files(self, dry_run: bool = True, min_similarity: float = 0.3, force_update: bool = False):
        """Update all files with new related problems."""
        print(f"\n{'[DRY RUN] ' if dry_run else ''}Updating files...")
        
        updates = 0
        for problem_key in self.problems.keys():
            related = self.find_related(problem_key, top_k=5, min_similarity=min_similarity)
            # Create list of objects with slug and similarity
            new_related = [{"slug": key, "similarity": round(score, 3)} for key, score in related]
            
            old_related = self.problems[problem_key]['current_related_problems']
            
            # Compare only slugs for change detection, but force update if requested
            old_slugs = [item["slug"] if isinstance(item, dict) else item for item in (old_related or [])]
            new_slugs = [item["slug"] for item in new_related]
            
            # Check if old format (simple strings) vs new format (dict with slug/similarity)
            needs_format_update = old_related and len(old_related) > 0 and not isinstance(old_related[0], dict)
            
            if new_related and (force_update or needs_format_update or set(new_slugs) != set(old_slugs)):
                updates += 1
                # Show all updates with actual related problems
                related_with_scores = [f"{key} ({score:.3f})" for key, score in related]
                print(f"{problem_key}:")
                print(f"  Old: {old_related}")
                print(f"  New: {related_with_scores}")
                print()
                
                if not dry_run:
                    self._update_file(problem_key, new_related)
        
        print(f"Total: {updates} files would be updated")
    
    def _update_file(self, problem_key: str, new_related: List[dict]):
        """Update a single file."""
        problem_data = self.problems[problem_key]
        file_path = problem_data['file_path']
        
        with open(file_path, 'r') as f:
            content = f.read()
        
        parts = content.split('---', 2)
        if len(parts) >= 3:
            metadata = yaml.safe_load(parts[1])
            metadata['related_problems'] = new_related
            new_yaml = yaml.dump(metadata, default_flow_style=False, sort_keys=False)
            new_content = f"---\n{new_yaml}---{parts[2]}"
            
            with open(file_path, 'w') as f:
                f.write(new_content)

def main():
    parser = argparse.ArgumentParser(description="Generate related problems using all-MiniLM-L6-v2")
    parser.add_argument("--dry-run", action="store_true", help="Show changes without writing")
    args = parser.parse_args()
    
    analyzer = SimpleEmbeddingAnalyzer()
    analyzer.load_problems()
    analyzer.create_embeddings()

    analyzer.update_all_files(dry_run=args.dry_run, min_similarity=MIN_SIMILARITY, force_update=False)

if __name__ == "__main__":
    main()