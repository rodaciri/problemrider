---
title: "Large Pull Requests"
description: "Pull requests are too large to review effectively, leading to superficial reviews and missed issues."
category: ['Process', 'Quality', 'Communication']
related_problems: ['superficial-code-reviews', 'inadequate-code-reviews', 'increased-risk-of-bugs']
layout: problem
---

## Description

Large pull requests occur when developers submit code changes that are too extensive or complex for reviewers to examine thoroughly within reasonable time constraints. These oversized changes make it practically impossible to conduct meaningful code reviews, as reviewers either skip the review entirely, perform only superficial checks, or approve changes without fully understanding their implications. Large pull requests defeat the primary purposes of code review: catching bugs, sharing knowledge, and maintaining code quality.

## Indicators ⟡
- Pull requests regularly contain hundreds or thousands of lines of changes
- Code reviews take an unusually long time or are approved very quickly without meaningful feedback
- Reviewers frequently comment "LGTM" (Looks Good To Me) without substantial review comments
- Developers avoid reviewing certain pull requests due to their size and complexity
- Multiple unrelated features or bug fixes are bundled together in single pull requests

## Symptoms ▲
- **[Review Process Breakdown](review-process-breakdown.md):** Reviews become cursory because the volume of changes is overwhelming
- **[Review Process Breakdown](review-process-breakdown.md):** Code review process fails to catch issues due to the impracticality of reviewing large changes
- **[Increased Risk of Bugs](increased-risk-of-bugs.md):** Defects slip through because reviewers cannot thoroughly examine all the changes
- **Review Bottlenecks:** Large pull requests create delays as reviewers struggle to find time for thorough examination
- **Knowledge Sharing Breakdown:** Learning opportunities are lost because reviewers cannot absorb large amounts of information effectively

## Root Causes ▼
- **Poor Work Breakdown:** Features are not broken down into smaller, reviewable increments
- **Batch Development:** Developers work in isolation for extended periods before submitting changes
- **Refactoring Mixed with Features:** Large refactoring efforts are combined with new feature development in single pull requests
- **Infrequent Commits:** Developers don't commit and push changes regularly, leading to accumulated large changes
- **Lack of Process Guidelines:** No team standards or tools to enforce reasonable pull request sizes
- **Feature Branch Duration:** Long-lived feature branches accumulate extensive changes before being merged

## Detection Methods ○
- **Pull Request Size Metrics:** Track lines of code changed, files modified, and complexity metrics for pull requests
- **Review Time Analysis:** Monitor how long reviews take and correlate with pull request size
- **Review Quality Assessment:** Analyze the depth and quality of feedback provided on different sized pull requests
- **Approval Patterns:** Identify pull requests that are approved quickly relative to their size
- **Developer Feedback:** Ask team members about their experience reviewing large pull requests

## Examples

A developer works on implementing a new user authentication system for three weeks in isolation. When they finally submit the pull request, it contains 2,500 lines of new code across 45 files, including database schema changes, new API endpoints, frontend components, configuration updates, and documentation changes. The assigned reviewers look at the massive pull request and either provide minimal feedback ("looks good overall") or focus only on obvious issues like code formatting, missing obvious bugs and architectural problems. Due to the size, no reviewer has the time or energy to understand the complete authentication flow, verify that security requirements are met, or ensure the implementation follows established patterns. Several critical security vulnerabilities make it into production because they were buried within the large changeset. Another example involves a pull request that combines a major refactoring of the data access layer with three new features and bug fixes for two existing features. The 1,800-line pull request spans multiple business domains and requires expertise in different areas of the system. Reviewers focus on the parts they understand best and skip areas outside their expertise, resulting in integration issues and inconsistent code quality across the different changes.