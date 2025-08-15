Create a new technical debt entry in TECHDEBT.md at the beginning of this file using the following standardized structure:

## [Brief Title of the Technical Debt Issue]

**Problem**: [Clear description of what the technical debt is - the current problematic state]

**Impact**: 
- [Specific impacts - e.g., performance, maintainability, developer experience]
- [more entries for impacts as needed]

**Root Cause**: [Explanation of why this technical debt exists - the decision or circumstance that led to it. Include commit references if applicable using format [commit-hash](commit/commit-hash)]

**Suggested Resolution**:
1. [Specific actionable step 1]
2. [Specific actionable step 2] 
3. [Additional steps as needed]
4. [Consider mentioning alternative approaches if applicable]

**Priority**: [High/Medium/Low] - [Brief justification for priority level]

**Created by**: [The name of the current user as identifier]  
**Date**: [Current date in YYYY-MM-DD format]

---

Guidelines:
- Use title case for the main heading
- Be specific and actionable in the problem description
- List concrete impacts, not vague concerns
- Include commit references where relevant using the format shown above
- Priority should reflect both impact and urgency
- Each entry should be separated by a horizontal rule (---)
- Add new entries at the top of the file (after any existing header)

Make an tech debt entry for this: $ARGUMENTS