---
title: Long-Lived Feature Branches
description: Code is not being reviewed and merged in a timely manner, leading to
  integration problems and increased risk.
category:
- Process
- Maintenance
related_problems:
- slug: large-feature-scope
  similarity: 0.7
- slug: slow-feature-development
  similarity: 0.6
- slug: merge-conflicts
  similarity: 0.55
- slug: inconsistent-codebase
  similarity: 0.55
- slug: fear-of-breaking-changes
  similarity: 0.55
- slug: feature-creep
  similarity: 0.55
layout: problem
---

## Description
Long-lived feature branches are a common problem in teams that use a branching model for development. When a feature branch is kept separate from the main branch for an extended period of time, it can become difficult and risky to merge back in. The longer a branch lives, the more it diverges from the main branch, increasing the likelihood of merge conflicts and making it harder to integrate the changes. This can lead to a "merge hell" scenario, where a significant amount of time is spent resolving conflicts instead of delivering value.

## Indicators ⟡
- Feature branches are often days or weeks old.
- Merging a feature branch is a major event that requires a lot of coordination.
- The team is constantly dealing with merge conflicts.
- The team is afraid to merge feature branches for fear of breaking something.

## Symptoms ▲

- **Merge Conflicts:** Frequent and complex merge conflicts when trying to integrate the feature branch back into the main branch.
- **Outdated Code:** The feature branch diverges significantly from the main branch, making it difficult to keep up with changes.
- **Delayed Feedback:** Bugs or integration issues are discovered late in the development cycle, making them more expensive to fix.
- **Reduced Visibility:** Other team members are unaware of changes being made in long-lived branches, leading to duplicated effort or architectural inconsistencies.
- **Increased Risk of Bugs:** Larger, infrequent merges increase the likelihood of introducing new defects.
- **[Review Process Breakdown](review-process-breakdown.md):** Large pull requests are harder to review thoroughly, leading to inadequate code reviews.

## Root Causes ▼

- **[Large Feature Scope](large-feature-scope.md):** The feature being developed is too large to be broken down into smaller, incremental changes.
- **Lack of Continuous Integration:** The team does not regularly integrate code from feature branches into the main branch.
- **Slow Code Review Process:** Code reviews are not performed promptly, causing branches to linger.
- **Fear of Breaking Main:** Developers are hesitant to merge incomplete work into the main branch, even with proper testing.
- **Insufficient Automation:** Lack of automated tests or deployment pipelines makes frequent integration risky.
- **Individual Work Silos:** Developers work in isolation on large features without regular collaboration or integration.

## Detection Methods ○

- **Version Control System Analysis:** Monitor the age and size of feature branches in your Git repository.
- **Code Review Metrics:** Track the time it takes for pull requests to be reviewed and merged.
- **Build/Deployment Frequency:** Observe how often the main branch is built and deployed.
- **Developer Feedback:** Ask developers about their experiences with merge conflicts and integration challenges.

## Examples
A team is developing a major new module for an application. The development takes three months on a single feature branch. When it's time to merge, there are hundreds of conflicts with the main branch, and the team spends weeks resolving them, delaying the release. In another case, a developer works on a new feature for several weeks without pushing their changes or creating a pull request. Meanwhile, another developer makes a related change on the main branch. When the first developer finally tries to merge, their changes are incompatible, requiring significant rework. This problem is often a symptom of a team that has not fully embraced continuous integration or agile development practices. It can lead to significant technical debt and slow down the overall development process.