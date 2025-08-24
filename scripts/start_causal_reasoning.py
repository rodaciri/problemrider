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

def load_problem(filepath):
    print(f"  📄 Loading: {os.path.basename(filepath)}")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    # Split frontmatter and body
    if content.startswith('---'):
        parts = content.split('---', 2)
        front = yaml.safe_load(parts[1])
        markdown_content = parts[2].strip()
        title = front.get('title') or front.get('slug') or os.path.basename(filepath)
        yaml_description = front.get('description', '')
        
        # Extract only the ## Description section
        description_section = extract_description_section(markdown_content)
        
        print(f"    ✅ Title: {title}")
        print(f"    📝 YAML description: {len(yaml_description)} chars")
        print(f"    📖 Description section: {len(description_section)} chars")
        
        return title, yaml_description, description_section
    else:
        title = os.path.basename(filepath)
        print(f"    ⚠️  No frontmatter found, using filename as title: {title}")
        return title, '', content

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
    
    return parser.parse_args()

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

def causal_score_pair(problem_a, problem_b, model_config):
    # Combine both YAML description and markdown content for richer analysis
    def format_problem_text(problem):
        text_parts = [problem['title']]
        if problem['yaml_description']:
            text_parts.append(f"Summary: {problem['yaml_description']}")
        if problem['markdown_content']:
            text_parts.append(f"Details: {problem['markdown_content']}")
        return " | ".join(text_parts)
    
    s1 = format_problem_text(problem_a)
    s2 = format_problem_text(problem_b)
    
    print(f"\n🔄 Evaluating causal relationships...")
    print(f"   Problem A: {problem_a['title']}")
    print(f"   Problem B: {problem_b['title']}")
    
    # Progress bar for the two evaluations
    with tqdm(total=2, desc="Causal Analysis", bar_format='{l_bar}{bar}| {n_fmt}/{total_fmt} [{elapsed}<{remaining}]') as pbar:
        # A → B
        pbar.set_description(f"A→B: {problem_a['title'][:20]}... → {problem_b['title'][:20]}...")
        if 'model_path' in model_config:
            score_ab = evaluate(s1, s2, model_name=model_config['model_name'], model_path=model_config['model_path'])
        else:
            score_ab = evaluate(s1, s2, model_name=model_config['model_name'])
        pbar.update(1)
        
        # B → A
        pbar.set_description(f"B→A: {problem_b['title'][:20]}... → {problem_a['title'][:20]}...")
        if 'model_path' in model_config:
            score_ba = evaluate(s2, s1, model_name=model_config['model_name'], model_path=model_config['model_path'])
        else:
            score_ba = evaluate(s2, s1, model_name=model_config['model_name'])
        pbar.update(1)
    
    print(f"   ✅ Evaluation complete!")
    return score_ab, score_ba

def get_cache_filepath(cache_id=None, model_name='CESAR'):
    """Generate cache file path with timestamp and model"""
    if cache_id is None:
        cache_id = datetime.now().strftime("%Y%m%d_%H%M%S")
    cache_dir = os.path.join(os.path.dirname(__file__), 'tmp')
    os.makedirs(cache_dir, exist_ok=True)
    return os.path.join(cache_dir, f'causal_analysis_cache_{model_name}_{cache_id}.json')

def load_cache(cache_file):
    """Load existing cache file if it exists"""
    if os.path.exists(cache_file):
        try:
            with open(cache_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except (json.JSONDecodeError, IOError):
            return None
    return None

def save_cache(cache_file, cache_data):
    """Save cache data to file"""
    try:
        with open(cache_file, 'w', encoding='utf-8') as f:
            json.dump(cache_data, f, indent=2, ensure_ascii=False)
        return True
    except IOError:
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

def load_embedding(problem_slug):
    """Load embedding vector for a problem from _embeddings directory"""
    embedding_path = os.path.join(os.path.dirname(__file__), '..', '_embeddings', f'{problem_slug}.yaml')
    try:
        with open(embedding_path, 'r', encoding='utf-8') as f:
            data = yaml.safe_load(f)
            return np.array(data['embedding'])
    except (FileNotFoundError, KeyError, TypeError):
        return None

def get_problem_slug(filepath):
    """Extract problem slug from file path (filename without extension)"""
    return os.path.splitext(os.path.basename(filepath))[0]

def calculate_similarity_scores(probs):
    """Calculate cosine similarity scores for all problem pairs"""
    print("📊 Loading embeddings and calculating similarities...")
    
    # Load embeddings for all problems
    embeddings = {}
    embedding_vectors = []
    problem_indices = {}
    
    for i, prob in enumerate(probs):
        slug = prob['slug']
        embedding = load_embedding(slug)
        if embedding is not None:
            embeddings[slug] = embedding
            embedding_vectors.append(embedding)
            problem_indices[slug] = i
    
    print(f"   ✅ Loaded embeddings for {len(embeddings)} out of {len(probs)} problems")
    
    if len(embeddings) < 2:
        print("   ⚠️  Insufficient embeddings for similarity calculation")
        return []
    
    # Calculate pairwise cosine similarities
    embedding_matrix = np.array(embedding_vectors)
    similarity_matrix = cosine_similarity(embedding_matrix)
    
    # Extract pair similarities
    similarities = []
    slug_to_idx = {slug: idx for idx, slug in enumerate(embeddings.keys())}
    
    for i, slug_a in enumerate(embeddings.keys()):
        for j, slug_b in enumerate(list(embeddings.keys())[i+1:], i+1):
            similarity = similarity_matrix[i][j]
            prob_idx_a = problem_indices[slug_a]
            prob_idx_b = problem_indices[slug_b]
            
            similarities.append({
                'prob_a': probs[prob_idx_a],
                'prob_b': probs[prob_idx_b],
                'similarity': similarity,
                'pair_key': get_pair_key(probs[prob_idx_a]['title'], probs[prob_idx_b]['title'])
            })
    
    # Sort by similarity (highest first)
    similarities.sort(key=lambda x: x['similarity'], reverse=True)
    
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
    """Process a list of pairs and update cache"""
    with tqdm(total=len(pairs_to_analyze), desc=progress_desc, position=0) as pbar:
        for pair_info in pairs_to_analyze:
            if isinstance(pair_info, dict) and 'prob_a' in pair_info:
                # Batch processing format
                prob_a = pair_info['prob_a']
                prob_b = pair_info['prob_b']
                similarity = pair_info.get('similarity', 0.0)
                pair_key = pair_info['pair_key']
                pbar.set_description(f"Analyzing (sim:{similarity:.3f}): {prob_a['title'][:12]}...↔{prob_b['title'][:12]}...")
            else:
                # Non-batch processing format (tuple)
                prob_a, prob_b = pair_info
                similarity = 0.0
                pair_key = get_pair_key(prob_a['title'], prob_b['title'])
                pbar.set_description(f"Analyzing: {prob_a['title'][:15]}... ↔ {prob_b['title'][:15]}...")
            
            result = analyze_problem_pair(prob_a, prob_b, model_config, similarity)
            
            # Save to cache immediately
            pair_key_str = f"{pair_key[0]}|{pair_key[1]}"
            cache_data['results'][pair_key_str] = result
            cache_data['completed_pairs'].append(list(pair_key))
            
            # Save cache periodically
            if len(cache_data['completed_pairs']) % 3 == 0:
                save_cache(cache_file, cache_data)
            
            pbar.update(1)

def main():

    loggers = [logging.getLogger(name) for name in logging.root.manager.loggerDict]
    for logger in loggers:
        if "transformers" in logger.name.lower():
            logger.setLevel(logging.ERROR)

    # Parse command line arguments
    args = parse_args()
    model_config = get_model_config(args.model)
    
    print("🚀 Starting Causal Reasoning Analysis")
    print("=" * 50)
    print(f"🤖 Using model: {args.model}")
    if args.cache_id:
        print(f"🆔 Cache ID: {args.cache_id}")
    print()
    
    # Check for existing cache
    cache_file = find_cache_file(args.cache_id, args.model)
    cache_data = None
    
    if cache_file:
        print(f"📄 Found cache: {os.path.basename(cache_file)}")
        cache_data = load_cache(cache_file)
        if cache_data:
            print(f"   ✅ Loaded {len(cache_data.get('results', {}))} cached results")
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
    
    print()
    
    folder = '_problems'
    print(f"📁 Scanning directory: {folder}")
    
    all_files = [f for f in os.listdir(folder) if f.endswith('.md')]
    files = sorted(all_files)
    
    print(f"📊 Found {len(all_files)} total problem files")
    print(f"🎯 Analyzing all {len(files)} files")
    print()
    
    print("📚 Loading problem files...")
    probs = []
    for filename in files:
        path = os.path.join(folder, filename)
        title, yaml_desc, markdown_content = load_problem(path)
        probs.append({
            'title': title, 
            'yaml_description': yaml_desc, 
            'markdown_content': markdown_content,
            'slug': get_problem_slug(path)
        })
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