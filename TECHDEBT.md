# Technical Debt

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