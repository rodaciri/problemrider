#!/usr/bin/env python3
"""
Simple embeddings using sentence-transformers with Qwen3-Embedding-0.6B or local embedding service.
Install dependencies: pip install -r scripts/requirements.txt

Usage:
    python scripts/calculate_related_problems.py --dry-run
    python scripts/calculate_related_problems.py --use-local --local-url http://192.168.1.100:8000
    
Environment variables:
    LOCAL_EMBEDDING_URL: Default URL for local embedding service (default: http://host.docker.internal:1234)
"""

import yaml
import argparse
import re
import numpy as np
import os
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

try:
    import requests
except ImportError:
    requests = None
    print("⚠️  requests not installed - local embedding service unavailable")
    print("Run: pip install requests")



# Configuration
MIN_SIMILARITY = 0.5
# For WSL2 users: Use Windows host IP to access LM Studio running on Windows
DEFAULT_LOCAL_EMBEDDING_URL = "http://host.docker.internal:1234"


class SimpleEmbeddingAnalyzer:
    def __init__(self, problems_dir: str = "_problems", use_local: bool = False, local_url: str = None):
        self.problems_dir = Path(problems_dir)
        self.problems: Dict[str, Dict] = {}
        self.embeddings: Dict[str, np.ndarray] = {}
        self.use_local = use_local
        self.local_url = local_url or os.getenv('LOCAL_EMBEDDING_URL', DEFAULT_LOCAL_EMBEDDING_URL)
        self.local_model_name = None
        
        if self.use_local:
            if requests is None:
                raise ValueError("requests package is required for local embedding service")
            print(f"🌐 Using local embedding service at: {self.local_url}")
            self._test_local_service()
            self.model = None
        else:
            print("🤖 Loading Qwen3-Embedding-0.6B model locally...")
            self.model = SentenceTransformer('Qwen/Qwen3-Embedding-0.6B')
            
            device = self.model.device
            print(f"Using device: {device}")
            if 'cuda' in str(device):
                import torch
                gpu_name = torch.cuda.get_device_name(device)
                print(f"GPU: {gpu_name}")
            else:
                import platform
                print(f"CPU: {platform.processor()}")
    
    def _test_local_service(self):
        """Test connectivity to local embedding service and detect available models."""
        try:
            # Test LM Studio's models endpoint instead of /health
            response = requests.get(f"{self.local_url}/v1/models", timeout=5)
            if response.status_code == 200:
                data = response.json()
                if data.get('data'):
                    model_names = [model.get('id', 'unknown') for model in data['data']]
                    print(f"✅ LM Studio is available with models: {', '.join(model_names)}")
                    # Use the first available model
                    self.local_model_name = model_names[0]
                    print(f"🎯 Using model: {self.local_model_name}")
                else:
                    print("⚠️  LM Studio is available but no models are loaded")
                    raise ValueError("No models available in local service")
            else:
                print(f"⚠️  Local service responded with status {response.status_code}")
                raise ValueError(f"Local service returned status {response.status_code}")
        except requests.exceptions.RequestException as e:
            print(f"❌ Cannot connect to LM Studio: {e}")
            print("🔄 Falling back to local model...")
            self.use_local = False
            print("🤖 Loading Qwen3-Embedding-0.6B model locally...")
            self.model = SentenceTransformer('Qwen/Qwen3-Embedding-0.6B')
        
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
    
    def _get_embeddings_local(self, texts: List[str]) -> np.ndarray:
        """Get embeddings from LM Studio using OpenAI-compatible API with batch processing."""
        try:
            from tqdm import tqdm
            
            # Try batch processing first
            batch_size = min(20, len(texts))  # Start with reasonable batch size
            
            if len(texts) > 1:
                try:
                    # Test if batch processing is supported with 2 texts
                    test_batch = texts[:min(2, len(texts))]
                    test_response = requests.post(
                        f"{self.local_url}/v1/embeddings",
                        json={
                            "input": test_batch,
                            "model": self.local_model_name
                        },
                        headers={"Content-Type": "application/json"},
                        timeout=30
                    )
                    
                    if test_response.status_code == 200:
                        test_data = test_response.json()
                        if isinstance(test_data.get("data"), list) and len(test_data["data"]) == len(test_batch):
                            print(f"🚀 Using batch processing (batch_size={batch_size})")
                            return self._get_embeddings_batch(texts, batch_size)
                except Exception as e:
                    print(f"⚠️ Batch test failed: {e}")
                    pass  # Fall back to individual requests
            
            # Fall back to individual requests
            print("🐌 Using individual requests (batch processing not supported)")
            embeddings = []
            
            with tqdm(texts, desc="🌐 Getting embeddings", unit="text") as pbar:
                for text in pbar:
                    response = requests.post(
                        f"{self.local_url}/v1/embeddings",
                        json={
                            "input": text,
                            "model": self.local_model_name
                        },
                        headers={"Content-Type": "application/json"},
                        timeout=30
                    )
                    response.raise_for_status()
                    data = response.json()
                    embeddings.append(data["data"][0]["embedding"])
            
            return np.array(embeddings)
        except requests.exceptions.RequestException as e:
            print(f"❌ Error getting embeddings from LM Studio: {e}")
            raise
    
    def _get_embeddings_batch(self, texts: List[str], batch_size: int) -> np.ndarray:
        """Get embeddings in batches for better performance."""
        from tqdm import tqdm
        embeddings = []
        
        # Process in batches
        num_batches = (len(texts) + batch_size - 1) // batch_size
        with tqdm(range(0, len(texts), batch_size), desc="🚀 Batch processing", unit="batch", total=num_batches) as pbar:
            for i in pbar:
                batch = texts[i:i + batch_size]
                pbar.set_postfix({"batch_size": len(batch)})
                
                response = requests.post(
                    f"{self.local_url}/v1/embeddings",
                    json={
                        "input": batch,
                        "model": self.local_model_name
                    },
                    headers={"Content-Type": "application/json"},
                    timeout=60  # Longer timeout for batches
                )
                response.raise_for_status()
                data = response.json()
                
                # Extract embeddings from batch response
                batch_embeddings = [item["embedding"] for item in data["data"]]
                embeddings.extend(batch_embeddings)
        
        return np.array(embeddings)
    
    def create_embeddings(self) -> None:
        """Create fresh embeddings using local service or Qwen3-Embedding-0.6B."""
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
        
        print(f"📊 Encoding {len(texts_to_encode)} problems...")
        
        if self.use_local:
            print(f"🌐 Generating embeddings via local service at {self.local_url}")
            embeddings = self._get_embeddings_local(texts_to_encode)
        else:
            print("🤖 Generating embeddings using local Qwen3-Embedding-0.6B model")
            embeddings = self.model.encode(texts_to_encode, show_progress_bar=True, convert_to_numpy=True)
        
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
    
    def update_all_files(self, dry_run: bool = True, min_similarity: float = 0.3):
        """Update all files with new related problems."""
        print(f"\n{'[DRY RUN] ' if dry_run else ''}Updating files...")
        
        updates = 0
        for problem_key in self.problems.keys():
            related = self.find_related(problem_key, top_k=5, min_similarity=min_similarity)
            # Create list of objects with slug and similarity (as quantized decimals)
            new_related = [{"slug": key, "similarity": round(score * 20) / 20} for key, score in related]
            
            if new_related:
                updates += 1
                # Show all updates with actual related problems
                related_with_scores = [f"{key} ({round(score * 20) / 20:.2f})" for key, score in related]
                print(f"{problem_key}:")
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
    parser = argparse.ArgumentParser(description="Generate related problems using Qwen3-Embedding-0.6B")
    parser.add_argument("--dry-run", action="store_true", help="Show changes without writing")
    parser.add_argument("--use-local", action="store_true", help="Use local embedding service instead of sentence-transformers")
    parser.add_argument("--local-url", type=str, help=f"URL of local embedding service (default: {DEFAULT_LOCAL_EMBEDDING_URL})")
    args = parser.parse_args()
    
    analyzer = SimpleEmbeddingAnalyzer(
        use_local=args.use_local,
        local_url=args.local_url
    )
    analyzer.load_problems()
    analyzer.create_embeddings()

    analyzer.update_all_files(dry_run=args.dry_run, min_similarity=MIN_SIMILARITY)

if __name__ == "__main__":
    main()