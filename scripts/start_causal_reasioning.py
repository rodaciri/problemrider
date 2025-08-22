import os
import yaml
import json
import argparse
from causalstrength import evaluate
from tqdm import tqdm
import time
from datetime import datetime
from concurrent.futures import ThreadPoolExecutor, as_completed
import threading

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
    parser = argparse.ArgumentParser(description='Causal Reasoning Analysis for Legacy System Problems')
    parser.add_argument('--cache-id', type=str, default=None,
                       help='Specific cache ID to use (e.g., "20241122_143022"). If not specified, uses latest cache or creates new one.')
    parser.add_argument('--model', type=str, choices=['CESAR', 'CEQ'], default='CESAR',
                       help='Causal model to use (default: CESAR)')
    parser.add_argument('--threads', type=int, default=1,
                       help='Number of threads for parallel processing (default: 1)')
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

def evaluate_pair_parallel(pair_data):
    """Evaluate a single pair for parallel processing"""
    problem_a, problem_b, model_config = pair_data
    
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
    
    # A → B
    if 'model_path' in model_config:
        score_ab = evaluate(s1, s2, model_name=model_config['model_name'], model_path=model_config['model_path'])
        score_ba = evaluate(s2, s1, model_name=model_config['model_name'], model_path=model_config['model_path'])
    else:
        score_ab = evaluate(s1, s2, model_name=model_config['model_name'])
        score_ba = evaluate(s2, s1, model_name=model_config['model_name'])
    
    return {
        'problem_a': problem_a,
        'problem_b': problem_b,
        'score_ab': score_ab,
        'score_ba': score_ba
    }

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

def main():
    # Parse command line arguments
    args = parse_args()
    model_config = get_model_config(args.model)
    
    print("🚀 Starting Causal Reasoning Analysis")
    print("=" * 50)
    print(f"🤖 Using model: {args.model}")
    print(f"🧵 Threads: {args.threads}")
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
            'markdown_content': markdown_content
        })
    print()

    print("🔍 Analysis Setup Complete")
    print(f"   Will analyze {len(probs)} problems in all possible pairs")
    
    # Calculate all pairwise combinations
    total_pairs = len(probs) * (len(probs) - 1) // 2
    completed_pairs = set(tuple(pair) for pair in cache_data.get('completed_pairs', []))
    remaining_pairs = total_pairs - len(completed_pairs)
    
    print(f"📊 Total pairs: {total_pairs}")
    print(f"✅ Cached pairs: {len(completed_pairs)}")
    print(f"🔄 Remaining pairs: {remaining_pairs}")
    print()

    if remaining_pairs == 0:
        print("🎉 All pairs already analyzed! Loading results from cache...")
        results = list(cache_data['results'].values())
        elapsed = 0  # All results were from cache
    else:
        start_time = time.time()
        
        # Prepare pairs to analyze
        pairs_to_analyze = []
        for i in range(len(probs)):
            for j in range(i + 1, len(probs)):
                a, b = probs[i], probs[j]
                pair_key = get_pair_key(a['title'], b['title'])
                
                # Skip if already cached
                if pair_key not in completed_pairs:
                    pairs_to_analyze.append((a, b, model_config))
        
        # Thread-safe cache operations
        cache_lock = threading.Lock()
        completed_count = 0
        
        def process_result(eval_result):
            nonlocal completed_count
            
            a, b = eval_result['problem_a'], eval_result['problem_b']
            score_ab, score_ba = eval_result['score_ab'], eval_result['score_ba']
            
            # Determine stronger causal direction
            if score_ab > score_ba:
                stronger_direction = f"{a['title']} → {b['title']}"
                confidence = score_ab - score_ba
                stronger_score = score_ab
            elif score_ba > score_ab:
                stronger_direction = f"{b['title']} → {a['title']}"
                confidence = score_ba - score_ab
                stronger_score = score_ba
            else:
                stronger_direction = "Ambiguous"
                confidence = 0
                stronger_score = score_ab
            
            result = {
                'pair': f"{a['title']} ↔ {b['title']}",
                'title_a': a['title'],
                'title_b': b['title'],
                'score_ab': score_ab,
                'score_ba': score_ba,
                'stronger_direction': stronger_direction,
                'confidence': confidence,
                'stronger_score': stronger_score,
                'timestamp': datetime.now().isoformat()
            }
            
            # Thread-safe cache update
            with cache_lock:
                pair_key = get_pair_key(a['title'], b['title'])
                pair_key_str = f"{pair_key[0]}|{pair_key[1]}"
                cache_data['results'][pair_key_str] = result
                cache_data['completed_pairs'].append(list(pair_key))
                completed_count += 1
                
                # Save cache periodically (every 5 pairs)
                if completed_count % 5 == 0:
                    save_cache(cache_file, cache_data)
        
        if args.threads == 1:
            # Sequential processing with progress bar
            with tqdm(total=len(pairs_to_analyze), desc="Analyzing Pairs") as pbar:
                for pair_data in pairs_to_analyze:
                    a, b, _ = pair_data
                    pbar.set_description(f"Analyzing: {a['title'][:15]}... ↔ {b['title'][:15]}...")
                    result = evaluate_pair_parallel(pair_data)
                    process_result(result)
                    pbar.update(1)
        else:
            # Parallel processing
            with ThreadPoolExecutor(max_workers=args.threads) as executor:
                # Submit all tasks
                future_to_pair = {executor.submit(evaluate_pair_parallel, pair_data): pair_data 
                                for pair_data in pairs_to_analyze}
                
                # Process results as they complete
                with tqdm(total=len(pairs_to_analyze), desc="Analyzing Pairs") as pbar:
                    for future in as_completed(future_to_pair):
                        pair_data = future_to_pair[future]
                        try:
                            result = future.result()
                            process_result(result)
                            a, b, _ = pair_data
                            pbar.set_description(f"Completed: {a['title'][:15]}... ↔ {b['title'][:15]}...")
                        except Exception as exc:
                            a, b, _ = pair_data
                            print(f'Pair {a["title"]} ↔ {b["title"]} generated an exception: {exc}')
                        pbar.update(1)
        
        # Final cache save
        with cache_lock:
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