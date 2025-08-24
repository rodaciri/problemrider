import os
import yaml
import json
import argparse
import numpy as np
from causalstrength import evaluate
from tqdm import tqdm
import time
from datetime import datetime
from sklearn.metrics.pairwise import cosine_similarity
import logging
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor, as_completed
import functools
import pickle
import hashlib
from multiprocessing import cpu_count
import signal
import sys

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

@functools.lru_cache(maxsize=500)
def _load_problem_content(filepath, mtime):
    """Internal cached function to load problem content"""
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def load_problem(filepath):
    """Load problem with file caching based on modification time"""
    try:
        # Get file modification time for cache invalidation
        mtime = os.path.getmtime(filepath)
        content = _load_problem_content(filepath, mtime)
        
        # Split frontmatter and body
        if content.startswith('---'):
            parts = content.split('---', 2)
            front = yaml.safe_load(parts[1])
            markdown_content = parts[2].strip()
            title = front.get('title') or front.get('slug') or os.path.basename(filepath)
            yaml_description = front.get('description', '')
            
            # Extract only the ## Description section
            description_section = extract_description_section(markdown_content)
            
            return title, yaml_description, description_section
        else:
            title = os.path.basename(filepath)
            return title, '', content
    except Exception as e:
        print(f"  ⚠️  Error loading {filepath}: {e}")
        return os.path.basename(filepath), '', ''

def parse_args():
    """Parse command line arguments"""
    parser = argparse.ArgumentParser(
        description='Causal Reasoning Analysis for Legacy System Problems',
        epilog='''
Examples:
  %(prog)s                              # Analyze top 10 most similar pairs with CESAR model
  %(prog)s --model CEQ                  # Use CEQ model instead of CESAR
  %(prog)s --batch-size 5               # Process 5 pairs per batch
  %(prog)s --cache-id 20241122_143022   # Resume from specific cache
  %(prog)s --model CEQ --batch-size 15  # CEQ model with 15 pairs per batch

The script uses embeddings from _embeddings/ directory to prioritize analysis of 
the most semantically similar problem pairs first, making causal discovery more efficient.
Run multiple times to process all pairs in similarity-ordered batches.
        ''',
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    
    parser.add_argument('--cache-id', type=str, default=None, metavar='ID',
                       help='Specific cache ID to use (e.g., "20241122_143022"). '
                            'If not specified, uses latest cache for the model or creates new one.')
    
    parser.add_argument('--model', type=str, choices=['CESAR', 'CEQ'], default='CESAR',
                       help='Causal strength model to use. CESAR uses shaobocui/cesar-bert-large, '
                            'CEQ uses built-in model. (default: %(default)s)')
    
    parser.add_argument('--batch-size', type=int, default=10, metavar='N',
                       help='Number of most similar problem pairs to analyze in each batch. '
                            'Larger batches process more pairs per run but take longer. (default: %(default)d)')
    
    parser.add_argument('--gpu-batch-size', type=int, default=16, metavar='N',
                       help='Number of pairs to process simultaneously on GPU. '
                            'Larger values use more GPU memory but can be faster. (default: %(default)d)')
    
    parser.add_argument('--parallel-workers', type=int, default=4, metavar='N',
                       help='Number of parallel workers for CPU tasks. '
                            'Set to number of CPU cores for best performance. (default: %(default)d)')
    
    parser.add_argument('--force-cpu', action='store_true',
                       help='Force CPU usage even if GPU is available')
    
    parser.add_argument('--allow-online', action='store_true',
                       help='Allow online model downloads (default: offline mode)')
    
    return parser.parse_args()

def check_model_availability(model_name, model_path=None):
    """Check if model is available locally (models will be auto-downloaded if missing)"""
    if model_path:
        # Check if CESAR model is cached locally
        cache_dir = os.path.join(os.path.dirname(__file__), 'tmp', 'transformers_cache')
        model_cache_path = os.path.join(cache_dir, 'models--' + model_path.replace('/', '--'))
        
        if os.path.exists(model_cache_path):
            return True, "Model available in cache"
        else:
            return True, "Model will be downloaded automatically"
    else:
        # CEQ model is built-in
        return True, "Built-in model"

def download_model_if_needed(model_config):
    """Download model if not available locally"""
    if 'model_path' not in model_config:
        return True  # CEQ model is built-in
    
    model_available, status = check_model_availability(model_config['model_name'], model_config['model_path'])
    
    if not model_available:
        print(f"   📦 Downloading {model_config['model_name']} model: {model_config['model_path']}...")
        try:
            # Temporarily enable online mode for download
            offline_vars = {}
            for var in ['TRANSFORMERS_OFFLINE', 'HF_DATASETS_OFFLINE', 'HF_HUB_OFFLINE']:
                if var in os.environ:
                    offline_vars[var] = os.environ[var]
                    del os.environ[var]
            
            # Test download by running a simple evaluation
            test_result = evaluate_single_direction((
                "Download test A.", 
                "Download test B.", 
                model_config
            ))
            
            # Restore offline mode immediately after download
            for var, value in offline_vars.items():
                os.environ[var] = value
            
            print(f"   ✅ Model downloaded successfully (test score: {test_result:.3f})")
            print(f"   🔒 Switched back to offline mode to avoid rate limits")
            return True
            
        except Exception as e:
            # Restore offline mode even if download failed
            for var, value in offline_vars.items():
                os.environ[var] = value
            print(f"   ❌ Model download failed: {e}")
            return False
    
    return True

def get_model_config(model_name):
    """Get model configuration based on model name"""
    if model_name == 'CESAR':
        return {
            'model_name': 'CESAR',
            'model_path': 'shaobocui/cesar-bert-large'
        }
    elif model_name == 'CEQ':
        return {
            'model_name': 'CEQ'
            # CEQ model doesn't require model_path parameter
        }
    else:
        raise ValueError(f"Unknown model: {model_name}")

@functools.lru_cache(maxsize=100)
def _format_problem_text_cached(title, yaml_desc, markdown_content):
    """Cached text formatting to avoid repeated string operations"""
    text_parts = [title]
    if yaml_desc:
        text_parts.append(f"Summary: {yaml_desc}")
    if markdown_content:
        text_parts.append(f"Details: {markdown_content}")
    return " | ".join(text_parts)

def causal_score_pair(problem_a, problem_b, model_config):
    """Optimized causal scoring with caching and reduced overhead"""
    # Use cached text formatting
    s1 = _format_problem_text_cached(
        problem_a['title'], 
        problem_a['yaml_description'], 
        problem_a['markdown_content']
    )
    s2 = _format_problem_text_cached(
        problem_b['title'], 
        problem_b['yaml_description'], 
        problem_b['markdown_content']
    )
    
    # Reduce console output for performance
    title_a_short = problem_a['title'][:15] + '...' if len(problem_a['title']) > 15 else problem_a['title']
    title_b_short = problem_b['title'][:15] + '...' if len(problem_b['title']) > 15 else problem_b['title']
    
    # Simplified progress tracking
    try:
        # Use offline mode to avoid rate limits during processing
        os.environ['TRANSFORMERS_OFFLINE'] = '1'
        os.environ['HF_DATASETS_OFFLINE'] = '1'
        os.environ['HF_HUB_OFFLINE'] = '1'
        os.environ['DISABLE_TELEMETRY'] = '1'
        
        # A → B
        if 'model_path' in model_config:
            score_ab = evaluate(s1, s2, model_name=model_config['model_name'], model_path=model_config['model_path'])
        else:
            score_ab = evaluate(s1, s2, model_name=model_config['model_name'])
        
        # B → A
        if 'model_path' in model_config:
            score_ba = evaluate(s2, s1, model_name=model_config['model_name'], model_path=model_config['model_path'])
        else:
            score_ba = evaluate(s2, s1, model_name=model_config['model_name'])
        
        return score_ab, score_ba
    except Exception as e:
        print(f"   ⚠️  Evaluation error for {title_a_short} ↔ {title_b_short}: {e}")
        return 0.0, 0.0

def evaluate_single_direction(text_pair_and_config):
    """Helper function for multiprocessing - evaluates a single direction"""
    (s1, s2, model_config) = text_pair_and_config
    try:
        # Use offline mode to avoid rate limits during processing
        os.environ['TRANSFORMERS_OFFLINE'] = '1'
        os.environ['HF_DATASETS_OFFLINE'] = '1'
        os.environ['HF_HUB_OFFLINE'] = '1'
        os.environ['DISABLE_TELEMETRY'] = '1'
        
        if 'model_path' in model_config:
            return evaluate(s1, s2, model_name=model_config['model_name'], model_path=model_config['model_path'])
        else:
            return evaluate(s1, s2, model_name=model_config['model_name'])
    except Exception as e:
        return 0.0

def causal_score_parallel(problem_pairs, model_config, max_workers=None):
    """Process multiple pairs using true parallel processing"""
    if max_workers is None:
        max_workers = min(model_config.get('parallel_workers', 4), cpu_count())
    
    print(f"   🚀 Using {max_workers} parallel workers for causal evaluation...")
    
    # Prepare all text pairs and their configurations
    all_tasks = []
    pair_indices = []
    
    for i, (prob_a, prob_b) in enumerate(problem_pairs):
        s1 = _format_problem_text_cached(
            prob_a['title'], 
            prob_a['yaml_description'], 
            prob_a['markdown_content']
        )
        s2 = _format_problem_text_cached(
            prob_b['title'], 
            prob_b['yaml_description'], 
            prob_b['markdown_content']
        )
        
        # Add both directions
        all_tasks.append((s1, s2, model_config))  # A→B
        all_tasks.append((s2, s1, model_config))  # B→A
        pair_indices.extend([i, i])  # Track which pair each task belongs to
    
    executor = None
    try:
        # Use appropriate executor based on OS (Windows has permission issues with ProcessPoolExecutor)
        if os.name == 'nt':  # Windows
            executor = ThreadPoolExecutor(max_workers=max_workers)
            print(f"   🚪 Windows detected - using thread-based parallelism")
        else:
            executor = ProcessPoolExecutor(max_workers=max_workers)
            print(f"   🚀 Using process-based parallelism")
        print(f"   ⚡ Submitting {len(all_tasks)} evaluation tasks...")
        print(f"   ⚠️  Press Ctrl+C to interrupt processing safely")
        
        # Submit all tasks
        future_to_index = {executor.submit(evaluate_single_direction, task): idx 
                         for idx, task in enumerate(all_tasks)}
        
        # Collect results with progress tracking and interrupt handling
        scores = [0.0] * len(all_tasks)
        completed = 0
        
        try:
            for future in as_completed(future_to_index):
                task_idx = future_to_index[future]
                try:
                    scores[task_idx] = future.result(timeout=30)  # 30 second timeout per task
                    completed += 1
                    if completed % 10 == 0 or completed == len(all_tasks):
                        print(f"   📊 Completed {completed}/{len(all_tasks)} evaluations ({100*completed/len(all_tasks):.1f}%)")
                except Exception as e:
                    scores[task_idx] = 0.0
        except KeyboardInterrupt:
            print(f"\n   🛑 Interrupt received! Stopping parallel processing...")
            print(f"   📊 Completed {completed}/{len(all_tasks)} evaluations before interrupt")
            # Cancel remaining futures
            for future in future_to_index:
                future.cancel()
            # Return partial results
            all_results = []
            for i, (prob_a, prob_b) in enumerate(problem_pairs):
                if i * 2 + 1 < len(scores):
                    score_ab = scores[i * 2]      # A→B
                    score_ba = scores[i * 2 + 1]  # B→A
                    all_results.append((prob_a, prob_b, score_ab, score_ba))
            return all_results
        
        # Reconstruct results by pair
        all_results = []
        for i, (prob_a, prob_b) in enumerate(problem_pairs):
            score_ab = scores[i * 2]      # A→B
            score_ba = scores[i * 2 + 1]  # B→A
            all_results.append((prob_a, prob_b, score_ab, score_ba))
        
        print(f"   ✅ Parallel processing completed!")
        return all_results
        
    except KeyboardInterrupt:
        print(f"\n   🛑 KeyboardInterrupt caught during setup")
        return []
    except Exception as e:
        print(f"   ⚠️  Parallel processing failed: {e}, falling back to sequential processing")
        return causal_score_sequential_fallback(problem_pairs, model_config)
    finally:
        # Ensure executor is properly closed
        if executor is not None:
            try:
                executor.shutdown(wait=False)
            except:
                pass

def causal_score_sequential_fallback(problem_pairs, model_config):
    """Sequential fallback when parallel processing fails"""
    all_results = []
    for prob_a, prob_b in problem_pairs:
        try:
            score_ab, score_ba = causal_score_pair(prob_a, prob_b, model_config)
            all_results.append((prob_a, prob_b, score_ab, score_ba))
        except KeyboardInterrupt:
            print(f"\n   🛑 Interrupt received during sequential fallback")
            break
        except Exception as e2:
            all_results.append((prob_a, prob_b, 0.0, 0.0))
    
    return all_results

def get_cache_filepath(cache_id=None, model_name='CESAR'):
    """Generate cache file path with timestamp and model"""
    if cache_id is None:
        cache_id = datetime.now().strftime("%Y%m%d_%H%M%S")
    cache_dir = os.path.join(os.path.dirname(__file__), 'tmp')
    os.makedirs(cache_dir, exist_ok=True)
    return os.path.join(cache_dir, f'causal_analysis_cache_{model_name}_{cache_id}.json')

def load_cache(cache_file):
    """Load existing cache file if it exists (optimized)"""
    if os.path.exists(cache_file):
        try:
            # Check file size first to avoid loading huge files
            file_size = os.path.getsize(cache_file)
            if file_size > 100 * 1024 * 1024:  # 100MB limit
                print(f"   ⚠️  Cache file too large ({file_size // 1024 // 1024}MB), starting fresh")
                return None
            
            with open(cache_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except (json.JSONDecodeError, IOError) as e:
            print(f"   ⚠️  Cache loading error: {e}")
            return None
    return None

def save_cache(cache_file, cache_data):
    """Save cache data to file (optimized with atomic writes)"""
    try:
        # Atomic write using temporary file
        temp_file = cache_file + '.tmp'
        with open(temp_file, 'w', encoding='utf-8') as f:
            json.dump(cache_data, f, indent=2, ensure_ascii=False)  # Pretty-printed JSON
        
        # Atomic rename
        if os.name == 'nt':  # Windows
            if os.path.exists(cache_file):
                os.remove(cache_file)
        os.rename(temp_file, cache_file)
        return True
    except IOError as e:
        print(f"   ⚠️  Cache saving error: {e}")
        if os.path.exists(temp_file):
            try:
                os.remove(temp_file)
            except:
                pass
        return False

def find_cache_file(cache_id=None, model_name='CESAR'):
    """Find specific cache file or the most recent one for the model"""
    cache_dir = os.path.join(os.path.dirname(__file__), 'tmp')
    if not os.path.exists(cache_dir):
        return None
    
    if cache_id:
        # Look for specific cache file
        cache_file = os.path.join(cache_dir, f'causal_analysis_cache_{model_name}_{cache_id}.json')
        return cache_file if os.path.exists(cache_file) else None
    else:
        # Find latest cache file for this model
        cache_files = [f for f in os.listdir(cache_dir) 
                      if f.startswith(f'causal_analysis_cache_{model_name}_') and f.endswith('.json')]
        if not cache_files:
            return None
        
        # Sort by filename (which includes timestamp)
        cache_files.sort(reverse=True)
        return os.path.join(cache_dir, cache_files[0])

def get_pair_key(title_a, title_b):
    """Generate consistent key for problem pair regardless of order"""
    return tuple(sorted([title_a, title_b]))

@functools.lru_cache(maxsize=500)
def load_embedding(problem_slug):
    """Load embedding vector for a problem from _embeddings directory (cached)"""
    embedding_path = os.path.join(os.path.dirname(__file__), '..', '_embeddings', f'{problem_slug}.yaml')
    try:
        with open(embedding_path, 'r', encoding='utf-8') as f:
            data = yaml.safe_load(f)
            return np.array(data['embedding'])
    except (FileNotFoundError, KeyError, TypeError):
        return None

def load_embedding_batch(problem_slugs):
    """Load multiple embeddings in parallel"""
    with ThreadPoolExecutor(max_workers=4) as executor:
        future_to_slug = {executor.submit(load_embedding, slug): slug for slug in problem_slugs}
        embeddings = {}
        
        for future in as_completed(future_to_slug):
            slug = future_to_slug[future]
            try:
                embedding = future.result()
                if embedding is not None:
                    embeddings[slug] = embedding
            except Exception as e:
                print(f"   ⚠️  Error loading embedding for {slug}: {e}")
        
        return embeddings

def get_problem_slug(filepath):
    """Extract problem slug from file path (filename without extension)"""
    return os.path.splitext(os.path.basename(filepath))[0]

def calculate_similarity_scores(probs):
    """Calculate cosine similarity scores for all problem pairs (optimized)"""
    print("📊 Loading embeddings and calculating similarities...")
    
    # Check for cached similarities first
    cache_dir = os.path.join(os.path.dirname(__file__), 'tmp')
    os.makedirs(cache_dir, exist_ok=True)
    
    # Create cache key based on problem list
    prob_slugs = [prob['slug'] for prob in probs]
    cache_key = hashlib.md5('|'.join(sorted(prob_slugs)).encode()).hexdigest()
    similarity_cache_file = os.path.join(cache_dir, f'similarities_{cache_key}.pkl')
    
    if os.path.exists(similarity_cache_file):
        try:
            with open(similarity_cache_file, 'rb') as f:
                similarities = pickle.load(f)
            print(f"   ⚡ Loaded {len(similarities)} cached similarities")
            return similarities
        except Exception:
            print("   ⚠️  Similarity cache corrupted, recalculating...")
    
    # Load embeddings in parallel
    embeddings = load_embedding_batch(prob_slugs)
    print(f"   ✅ Loaded embeddings for {len(embeddings)} out of {len(probs)} problems")
    
    if len(embeddings) < 2:
        print("   ⚠️  Insufficient embeddings for similarity calculation")
        return []
    
    # Build mapping from slug to problem index
    slug_to_prob = {prob['slug']: prob for prob in probs}
    
    # Calculate pairwise cosine similarities (vectorized)
    embedding_vectors = [embeddings[slug] for slug in embeddings.keys() if slug in embeddings]
    embedding_slugs = [slug for slug in embeddings.keys() if slug in embeddings]
    
    if len(embedding_vectors) < 2:
        return []
    
    embedding_matrix = np.array(embedding_vectors)
    similarity_matrix = cosine_similarity(embedding_matrix)
    
    # Extract pair similarities (optimized)
    similarities = []
    n_embeddings = len(embedding_slugs)
    
    # Use vectorized operations where possible
    for i in range(n_embeddings):
        for j in range(i + 1, n_embeddings):
            slug_a = embedding_slugs[i]
            slug_b = embedding_slugs[j]
            similarity = similarity_matrix[i][j]
            
            prob_a = slug_to_prob[slug_a]
            prob_b = slug_to_prob[slug_b]
            
            similarities.append({
                'prob_a': prob_a,
                'prob_b': prob_b,
                'similarity': similarity,
                'pair_key': get_pair_key(prob_a['title'], prob_b['title'])
            })
    
    # Sort by similarity (highest first)
    similarities.sort(key=lambda x: x['similarity'], reverse=True)
    
    # Cache the results
    try:
        with open(similarity_cache_file, 'wb') as f:
            pickle.dump(similarities, f)
        print(f"   💾 Cached similarities for future runs")
    except Exception as e:
        print(f"   ⚠️  Could not cache similarities: {e}")
    
    print(f"   📈 Calculated {len(similarities)} similarity scores")
    return similarities

def get_prioritized_batches(similarities, completed_pairs, batch_size=10):
    """Get batches of problem pairs prioritized by similarity, excluding completed ones"""
    available_similarities = [
        sim for sim in similarities 
        if sim['pair_key'] not in completed_pairs
    ]
    
    batches = []
    for i in range(0, len(available_similarities), batch_size):
        batch = available_similarities[i:i + batch_size]
        batches.append(batch)
    
    return batches

def analyze_problem_pair(prob_a, prob_b, model_config, similarity=0.0):
    """Analyze a single problem pair and return the result"""
    score_ab, score_ba = causal_score_pair(prob_a, prob_b, model_config)
    
    # Determine stronger causal direction
    if score_ab > score_ba:
        stronger_direction = f"{prob_a['title']} → {prob_b['title']}"
        confidence = score_ab - score_ba
        stronger_score = score_ab
    elif score_ba > score_ab:
        stronger_direction = f"{prob_b['title']} → {prob_a['title']}"
        confidence = score_ba - score_ab
        stronger_score = score_ba
    else:
        stronger_direction = "Ambiguous"
        confidence = 0
        stronger_score = score_ab
    
    return {
        'pair': f"{prob_a['title']} ↔ {prob_b['title']}",
        'title_a': prob_a['title'],
        'title_b': prob_b['title'],
        'score_ab': score_ab,
        'score_ba': score_ba,
        'stronger_direction': stronger_direction,
        'confidence': confidence,
        'stronger_score': stronger_score,
        'similarity': similarity,
        'timestamp': datetime.now().isoformat()
    }

def process_pairs(pairs_to_analyze, model_config, cache_data, cache_file, progress_desc="Processing"):
    """Process a list of pairs and update cache (with true batch processing)"""
    save_counter = 0
    save_frequency = max(1, len(pairs_to_analyze) // 10)  # Save 10 times during processing
    
    # Extract problem pairs and metadata
    problem_pairs = []
    pair_metadata = []
    
    for pair_info in pairs_to_analyze:
        if isinstance(pair_info, dict) and 'prob_a' in pair_info:
            prob_a = pair_info['prob_a']
            prob_b = pair_info['prob_b']
            similarity = pair_info.get('similarity', 0.0)
            pair_key = pair_info['pair_key']
        else:
            prob_a, prob_b = pair_info
            similarity = 0.0
            pair_key = get_pair_key(prob_a['title'], prob_b['title'])
        
        problem_pairs.append((prob_a, prob_b))
        pair_metadata.append({
            'similarity': similarity,
            'pair_key': pair_key
        })
    
    # Use batch processing for better GPU utilization
    batch_size = min(16, len(problem_pairs))  # Adjust based on GPU memory
    print(f"   🚀 Using batch processing (batch size: {batch_size})")
    
    with tqdm(total=len(pairs_to_analyze), desc=progress_desc, position=0, 
              bar_format='{l_bar}{bar}| {n_fmt}/{total_fmt} [{elapsed}<{remaining}, {rate_fmt}]') as pbar:
        
        # Process in batches
        for i in range(0, len(problem_pairs), batch_size):
            batch_pairs = problem_pairs[i:i + batch_size]
            batch_meta = pair_metadata[i:i + batch_size]
            
            try:
                # Process entire batch
                pbar.set_description(f"{progress_desc} (batch {i//batch_size + 1})")
                batch_results = causal_score_parallel(batch_pairs, model_config, model_config.get('parallel_workers', 4))
                
                # Save batch results
                for j, (prob_a, prob_b, score_ab, score_ba) in enumerate(batch_results):
                    meta = batch_meta[j]
                    
                    # Create result object
                    if score_ab > score_ba:
                        stronger_direction = f"{prob_a['title']} → {prob_b['title']}"
                        confidence = score_ab - score_ba
                        stronger_score = score_ab
                    elif score_ba > score_ab:
                        stronger_direction = f"{prob_b['title']} → {prob_a['title']}"
                        confidence = score_ba - score_ab
                        stronger_score = score_ba
                    else:
                        stronger_direction = "Ambiguous"
                        confidence = 0
                        stronger_score = score_ab
                    
                    result = {
                        'pair': f"{prob_a['title']} ↔ {prob_b['title']}",
                        'title_a': prob_a['title'],
                        'title_b': prob_b['title'],
                        'score_ab': score_ab,
                        'score_ba': score_ba,
                        'stronger_direction': stronger_direction,
                        'confidence': confidence,
                        'stronger_score': stronger_score,
                        'similarity': meta['similarity'],
                        'timestamp': datetime.now().isoformat()
                    }
                    
                    # Save to cache
                    pair_key = meta['pair_key']
                    pair_key_str = f"{pair_key[0]}|{pair_key[1]}"
                    cache_data['results'][pair_key_str] = result
                    cache_data['completed_pairs'].append(list(pair_key))
                    
                    save_counter += 1
                    pbar.update(1)
                
                # Save cache periodically
                if save_counter % save_frequency == 0:
                    save_cache(cache_file, cache_data)
                    
            except Exception as e:
                print(f"\n   ⚠️  Batch processing error: {e}, falling back to individual processing")
                # Fallback to individual processing
                for j, (prob_a, prob_b) in enumerate(batch_pairs):
                    meta = batch_meta[j]
                    try:
                        result = analyze_problem_pair(prob_a, prob_b, model_config, meta['similarity'])
                        
                        pair_key = meta['pair_key']
                        pair_key_str = f"{pair_key[0]}|{pair_key[1]}"
                        cache_data['results'][pair_key_str] = result
                        cache_data['completed_pairs'].append(list(pair_key))
                        
                        save_counter += 1
                        pbar.update(1)
                        
                    except Exception as e2:
                        print(f"\n   ⚠️  Individual fallback error: {e2}")
                        pbar.update(1)
                        continue
    
    # Final save
    save_cache(cache_file, cache_data)

def setup_performance_optimization(args, offline_mode=True):
    """Setup performance optimization settings"""
    # Set environment variables for better performance
    os.environ['TOKENIZERS_PARALLELISM'] = 'true'
    os.environ['OMP_NUM_THREADS'] = str(args.parallel_workers)
    os.environ['MKL_NUM_THREADS'] = str(args.parallel_workers)
    
    # Optimize NumExpr threading (suppress the warning message)
    os.environ['NUMEXPR_MAX_THREADS'] = str(args.parallel_workers)
    
    # Optimize for transformers library
    cache_dir = os.path.join(os.path.dirname(__file__), 'tmp')
    os.makedirs(cache_dir, exist_ok=True)
    os.environ['HF_HOME'] = os.path.join(cache_dir, 'huggingface_cache')
    
    # Always allow model downloads but use offline mode for processing
    # Models will be downloaded if missing, then cached for offline use
    print("   📦 Auto-download enabled - models will be downloaded if missing")
    print("   💾 Models cached locally for future offline use")
    
    # Disable telemetry for privacy but allow model downloads
    os.environ['DISABLE_TELEMETRY'] = '1'
    
    # Windows multiprocessing compatibility
    if os.name == 'nt':  # Windows
        print("   🖥️  Windows detected - using process spawn method for multiprocessing")
        import multiprocessing
        multiprocessing.set_start_method('spawn', force=True)
    
    try:
        import torch
        if torch.cuda.is_available() and not args.force_cpu:
            device_count = torch.cuda.device_count()
            current_device = torch.cuda.current_device()
            
            print(f"   📊 GPU available: {torch.cuda.get_device_name(current_device)}")
            print(f"   💾 GPU memory: {torch.cuda.get_device_properties(current_device).total_memory // 1024**3} GB")
            print(f"   🔢 GPU devices: {device_count}")
            
            # Enable GPU optimizations
            torch.backends.cudnn.benchmark = True
            torch.backends.cudnn.deterministic = False
            
            return True
        else:
            print("   ⚠️  Using CPU (GPU disabled or unavailable)")
            return False
    except ImportError:
        print("   ⚠️  PyTorch not available for GPU detection")
        return False

def main():
    
    # Global cache variables for signal handling
    global global_cache_file, global_cache_data
    global_cache_file = None
    global_cache_data = None
    
    def signal_handler(signum, frame):
        """Handle Ctrl+C by saving cache before exiting"""
        print(f"\n\n🛑 Interrupt received! Saving cache before exit...")
        if global_cache_file and global_cache_data:
            try:
                save_cache(global_cache_file, global_cache_data)
                completed_pairs = len(global_cache_data.get('completed_pairs', []))
                print(f"💾 Cache saved successfully with {completed_pairs} completed pairs")
            except Exception as e:
                print(f"⚠️  Failed to save cache: {e}")
        else:
            print("⚠️  No cache data to save")
        
        print("👋 Exiting...")
        sys.exit(0)
    
    # Register signal handler for Ctrl+C
    signal.signal(signal.SIGINT, signal_handler)
    
    # Suppress verbose logging from various libraries
    loggers = [logging.getLogger(name) for name in logging.root.manager.loggerDict]
    for logger in loggers:
        if any(lib in logger.name.lower() for lib in ["transformers", "tokenizers", "urllib3", "requests"]):
            logger.setLevel(logging.ERROR)
    
    # Suppress specific library warnings
    import warnings
    warnings.filterwarnings("ignore", category=UserWarning, module="transformers")
    warnings.filterwarnings("ignore", category=FutureWarning, module="transformers")
    warnings.filterwarnings("ignore", message=".*NumExpr.*")
    
    # Set numexpr logging to ERROR to suppress info messages
    logging.getLogger('numexpr').setLevel(logging.ERROR)

    # Parse command line arguments
    args = parse_args()
    model_config = get_model_config(args.model)
    
    # Add performance settings to model config
    model_config['gpu_batch_size'] = args.gpu_batch_size
    model_config['parallel_workers'] = args.parallel_workers
    model_config['force_cpu'] = args.force_cpu
    model_config['allow_online'] = args.allow_online
    
    print("🚀 Starting Causal Reasoning Analysis (Performance Optimized)")
    print("=" * 50)
    print(f"🤖 Using model: {args.model}")
    if args.cache_id:
        print(f"🆔 Cache ID: {args.cache_id}")
    print(f"📊 Analysis batch size: {args.batch_size} pairs per run")
    print(f"🚀 GPU batch size: {args.gpu_batch_size} pairs per GPU inference")
    print(f"🔧 Parallel workers: {args.parallel_workers}")
    
    # Setup performance optimizations (start in online mode for potential downloads)
    gpu_available = setup_performance_optimization(args, offline_mode=False)
    
    # Check and download model if needed
    model_ready = download_model_if_needed(model_config)
    if not model_ready:
        print("❌ Failed to prepare model. Exiting.")
        sys.exit(1)
    
    # Switch to offline mode after model is ready (to avoid rate limits during processing)
    print("   🔒 Enabling offline mode for processing to avoid HuggingFace rate limits...")
    os.environ['TRANSFORMERS_OFFLINE'] = '1'
    os.environ['HF_DATASETS_OFFLINE'] = '1'
    os.environ['HF_HUB_OFFLINE'] = '1'
    
    # Test model loading with a simple evaluation
    print("   🔍 Testing model loading...")
    try:
        test_result = evaluate_single_direction((
            "Test sentence A.", 
            "Test sentence B.", 
            model_config
        ))
        print(f"   ✅ Model test successful (score: {test_result:.3f})")
    except Exception as e:
        print(f"   ❌ Model test failed: {e}")
        sys.exit(1)
    
    print()
    
    # Check for existing cache
    cache_file = find_cache_file(args.cache_id, args.model)
    cache_data = None
    
    # Set global variables for signal handler
    global_cache_file = cache_file
    
    if cache_file:
        print(f"📄 Found cache: {os.path.basename(cache_file)}")
        cache_data = load_cache(cache_file)
        if cache_data:
            print(f"   ✅ Loaded {len(cache_data.get('results', {}))} cached results")
            # Update global variables for signal handler
            global_cache_data = cache_data
        else:
            print("   ⚠️  Cache file corrupted, starting fresh")
            cache_data = None
    
    if not cache_data:
        if args.cache_id and not cache_file:
            print(f"⚠️  Specified cache ID '{args.cache_id}' not found for model {args.model}")
        
        cache_file = get_cache_filepath(args.cache_id, args.model)
        cache_data = {
            'metadata': {
                'start_time': datetime.now().isoformat(),
                'model': args.model,
                'cache_id': args.cache_id or datetime.now().strftime("%Y%m%d_%H%M%S"),
                'version': '1.0'
            },
            'results': {},
            'completed_pairs': []
        }
        print(f"📄 Creating new cache: {os.path.basename(cache_file)}")
        
        # Update global variables for signal handler
        global_cache_file = cache_file
        global_cache_data = cache_data
    
    print()
    
    folder = '_problems'
    print(f"📁 Scanning directory: {folder}")
    
    all_files = [f for f in os.listdir(folder) if f.endswith('.md')]
    files = sorted(all_files)
    
    print(f"📊 Found {len(all_files)} total problem files")
    print(f"🎯 Analyzing all {len(files)} files")
    print()
    
    print("📚 Loading problem files...")
    
    # Load problems in parallel for better performance
    def load_single_problem(filename):
        path = os.path.join(folder, filename)
        title, yaml_desc, markdown_content = load_problem(path)
        return {
            'title': title, 
            'yaml_description': yaml_desc, 
            'markdown_content': markdown_content,
            'slug': get_problem_slug(path)
        }
    
    # Use ThreadPoolExecutor for parallel file loading
    with ThreadPoolExecutor(max_workers=4) as executor:
        probs = list(executor.map(load_single_problem, files))
    
    print(f"   ✅ Loaded {len(probs)} problems")
    print()

    print("🔍 Analysis Setup Complete")
    print(f"   Will analyze {len(probs)} problems in all possible pairs")
    
    # Calculate embeddings-based similarities for prioritization
    similarities = calculate_similarity_scores(probs)
    
    # Calculate all pairwise combinations
    total_pairs = len(probs) * (len(probs) - 1) // 2
    completed_pairs = set(tuple(pair) for pair in cache_data.get('completed_pairs', []))
    remaining_pairs = total_pairs - len(completed_pairs)
    
    print(f"📊 Total pairs: {total_pairs}")
    print(f"✅ Cached pairs: {len(completed_pairs)}")
    print(f"🔄 Remaining pairs: {remaining_pairs}")
    
    if similarities:
        batches = get_prioritized_batches(similarities, completed_pairs, args.batch_size)
        print(f"🎯 Prioritized batches: {len(batches)} (batch size: {args.batch_size})")
        if batches:
            avg_similarity = sum(sim['similarity'] for sim in batches[0]) / len(batches[0])
            print(f"   Next batch avg similarity: {avg_similarity:.4f}")
    else:
        print("⚠️  No embeddings available - using random order")
        batches = []
    print()

    if remaining_pairs == 0:
        print("🎉 All pairs already analyzed! Loading results from cache...")
        results = list(cache_data['results'].values())
        elapsed = 0  # All results were from cache
    else:
        start_time = time.time()
        
        if batches:
            # Process first prioritized batch only
            current_batch = batches[0]
            batch_num = 1
            total_batches = len(batches)
            
            print(f"🚀 Processing batch {batch_num}/{total_batches} ({len(current_batch)} pairs)")
            print(f"   Similarity range: {min(s['similarity'] for s in current_batch):.4f} - {max(s['similarity'] for s in current_batch):.4f}")
            print()
            
            # Process the current batch
            process_pairs(current_batch, model_config, cache_data, cache_file, f"Batch {batch_num}")
            
            print(f"\n✨ Batch {batch_num} complete! Processed {len(current_batch)} pairs")
            if batch_num < total_batches:
                print(f"🔄 Run script again to process next batch ({total_batches - batch_num} batches remaining)")
        else:
            # Fallback to random order if no embeddings
            print("⚠️  No embeddings available - processing first 10 pairs randomly")
            target_pairs = min(10, remaining_pairs)
            
            # Collect pairs for random processing
            random_pairs = []
            pairs_collected = 0
            
            for i in range(len(probs)):
                for j in range(i + 1, len(probs)):
                    if pairs_collected >= target_pairs:
                        break
                    
                    pair_key = get_pair_key(probs[i]['title'], probs[j]['title'])
                    
                    # Skip if already cached
                    if pair_key in completed_pairs:
                        continue
                    
                    random_pairs.append((probs[i], probs[j]))
                    pairs_collected += 1
                
                if pairs_collected >= target_pairs:
                    break
            
            # Process random pairs
            process_pairs(random_pairs, model_config, cache_data, cache_file, "Random Order")
        
        # Final cache save
        save_cache(cache_file, cache_data)
        print(f"💾 Cache saved to: {cache_file}")
        
        results = list(cache_data['results'].values())
        elapsed = time.time() - start_time

    print(f"\n📈 Analysis Results (took {elapsed:.1f} seconds):")
    print("=" * 70)
    
    # Sort results by confidence (strongest relationships first)
    results.sort(key=lambda x: x['confidence'], reverse=True)
    
    for i, result in enumerate(results[:10]):  # Show top 10
        print(f"{i+1:2d}. {result['stronger_direction']}")
        print(f"    Confidence: {result['confidence']:.4f} | Score: {result['stronger_score']:.4f}")
        print()
    
    if len(results) > 10:
        print(f"... and {len(results) - 10} more pairs")
        print()
    
    print("🎯 Summary:")
    strong_relationships = [r for r in results if r['confidence'] > 0.1]
    print(f"   Strong causal relationships (>0.1 confidence): {len(strong_relationships)}")
    print(f"   Average confidence: {sum(r['confidence'] for r in results) / len(results):.4f}")
    
    print("\n🏁 Analysis Complete!")
    print("=" * 50)

if __name__ == '__main__':
    main()