# Technical Debt

## Causal Analysis Script Uses Problem Titles Instead of Filenames

**Problem**: The causal reasoning script (`scripts/start_causal_reasoning.py`) uses problem titles from YAML frontmatter instead of markdown filenames as identifiers, creating an additional layer of complexity in title-to-filename mapping.

**Impact**: 
- Complex title-to-slug conversion required for file operations
- Potential mismatches between cache keys and actual filenames  
- Additional complexity in the `update_causal_relationships.py` script to map titles back to files
- Risk of errors when titles don't convert cleanly to expected slugs
- Maintenance burden when problem titles change but filenames remain consistent

**Root Cause**: The script processes problems by extracting titles from YAML frontmatter (line 39: `title = front.get('title')`) and uses these titles throughout the causal analysis cache instead of using the more stable filename-based slugs. Cache keys are generated using `get_pair_key(title_a, title_b)` rather than slug-based keys.

**Suggested Resolution**:
1. Modify `start_causal_reasoning.py` to use problem slugs (filenames) as primary identifiers
2. Update cache structure to use slug-based keys instead of title-based keys  
3. Ensure the `update_causal_relationships.py` script can work directly with slug-based mappings
4. Add validation to ensure slug-title mapping consistency
5. Consider using slugs as the source of truth with titles as display-only metadata

**Priority**: Medium - creates complexity but current workarounds are functional

**Created by**: Markus  
**Date**: 2025-08-22

---


## Visualization Script Often Forgotten and Not Executed

**Problem**: The graph visualization script (`scripts/create_visualization.py`) is a separate manual process that is often forgotten and not executed, leading to outdated or missing visualization content.

**Impact**: 
- Stale visualization data that doesn't reflect current problem catalog
- Manual process easily forgotten during development workflow
- Inconsistent user experience with outdated graph relationships
- Developer friction when visualization is needed but not current
- Potential confusion for users seeing outdated problem connections

**Root Cause**: The visualization generation is decoupled from the main build process and requires manual execution, making it easy to overlook during regular development and content updates.

**Suggested Resolution**:
1. Integrate visualization generation into the Jekyll build process
2. Add automation to regenerate visualization on content changes
3. Create git hooks to remind developers to update visualization
4. Consider moving to client-side dynamic visualization generation
5. Add documentation or scripts to automate the visualization update process

**Priority**: Medium - impacts user experience but doesn't break core functionality

**Created by**: Markus  
**Date**: 2025-08-15

---

## Jekyll Publishing Unwanted Root-Level Files to Website

**Problem**: Every new root-level file must be manually added to the `exclude` list in `_config.yml` to prevent Jekyll from publishing it to the website, creating extra work and a potential surface for failures.

**Impact**: 
- Extra maintenance work for each new root-level file added
- High risk of forgetting to exclude files, leading to unwanted publication
- Potential security exposure if sensitive files are accidentally published
- Error-prone manual process that scales poorly
- Developer friction when adding development artifacts

**Root Cause**: Jekyll's default inclusive behavior combined with the project's need for various root-level development files (TECHDEBT.md, ARCH.md, etc.) creates an ongoing maintenance burden where each file addition requires remembering to update the exclusion configuration.

**Suggested Resolution**:
1. Update `_config.yml` to add comprehensive `exclude` list for root-level files
2. Review current root-level files to identify which should be excluded
3. Test local build to verify exclusions work correctly
4. Consider moving development files to dedicated directories if needed
5. Document exclusion policy for future file additions

**Priority**: Medium - affects website quality and potentially security

**Created by**: Markus  
**Date**: 2025-08-15

---

## Inconsistent Root Causes and Symptoms Structure Across Problem Entries

**Problem**: The root causes and symptoms sections in problem entries lack consistent structure and rigor, with some entries having vague or incomplete causal relationships that need investigation and validation.

**Impact**: 
- Reduced catalog reliability and trustworthiness for users
- Inconsistent quality across problem patterns
- Difficulty in creating accurate problem interconnections
- Potential for misleading guidance in legacy system analysis

**Root Cause**: The catalog has grown organically without established standards for validating causal relationships, leading to varying levels of detail and accuracy in symptom-cause mappings.

**Suggested Resolution**:
1. Establish clear criteria for what constitutes a valid root cause vs. symptom
2. Create a review process for validating causal relationships in existing entries
3. Develop templates or guidelines for documenting evidence-based root causes
4. Systematically audit existing problem entries for causal accuracy
5. Implement peer review for new problem entries focusing on causal logic

**Priority**: High - impacts the core value proposition of the catalog as a reliable reference

**Created by**: Markus  
**Date**: 2025-08-15

---

## Embeddings Directory Checked Into Version Control

**Problem**: The `_embeddings/` directory containing 438 cached embedding files (YAML format) is currently tracked in version control.

**Impact**: 
- Repository bloat with generated/cached data
- Unnecessary storage and bandwidth usage during clones
- Potential merge conflicts on embedding regeneration
- Violates best practices of not committing generated artifacts

**Root Cause**: Embeddings were committed in [cfdcdca](commit/cfdcdca) to enable "quicker related problem search" without considering version control implications.

**Suggested Resolution**:
1. Add `_embeddings/` to `.gitignore`
2. Remove existing `_embeddings/` files from git tracking using `git rm --cached`
3. Update build process or documentation to regenerate embeddings as needed
4. Consider alternative caching strategies (e.g., CI artifacts, external storage)

**Priority**: Medium - affects repository hygiene but doesn't break functionality

**Created by**: Markus  
**Date**: 2025-08-15
