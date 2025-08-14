---
title: Review Process Breakdown
description: Code reviews are not consistently performed, are rushed, superficial,
  or fail to identify critical issues, leading to lower code quality and increased
  risk.
category:
- Process
- Quality
related_problems:
- slug: review-process-breakdown
  similarity: 0.9
- slug: insufficient-code-review
  similarity: 0.85
- slug: superficial-code-reviews
  similarity: 0.8
- slug: code-review-inefficiency
  similarity: 0.75
- slug: team-members-not-engaged-in-review-process
  similarity: 0.75
- slug: review-bottlenecks
  similarity: 0.75
layout: problem
---

## Description
Inadequate code reviews are a major contributor to poor software quality. This encompasses both superficial reviews that provide little meaningful feedback and inconsistent review practices. When code reviews are rushed, superficial, or performed by inexperienced reviewers, they are unlikely to catch bugs, design flaws, or deviations from best practices. Superficial reviews often focus on minor stylistic issues rather than critical logic or design flaws, providing little more than "looks good to me" approvals without thorough examination. This can lead to a gradual degradation of the codebase, as technical debt and potential issues are allowed to accumulate. A healthy code review culture is one where reviews are thorough, thoughtful, and performed by a diverse group of reviewers with shared responsibility for code quality.

## Indicators ⟡
- Code reviews are often a bottleneck in the development process.
- The same types of bugs are repeatedly found in production.
- Developers are not learning from each other through code reviews.
- There is a lot of debate about style and other trivial issues in code reviews.

## Symptoms ▲

- **[High Defect Rate in Production](high-defect-rate-in-production.md):** Defects, security vulnerabilities, and performance bottlenecks that could have been caught during review make their way into production.
- **[Poor Domain Model](poor-domain-model.md):** Suboptimal architectural decisions or design patterns are not challenged or improved during review.
- **[Inconsistent Codebase](inconsistent-codebase.md):** The codebase becomes a mixture of different styles, making it difficult to read and maintain.
- **[Knowledge Silos](knowledge-silos.md):** Developers are not learning from each other, and best practices are not being disseminated.
- **[Bikeshedding](bikeshedding.md):** Reviewers focus on trivial issues like whitespace and variable names instead of more important issues like logic and design.
- **[Rushed Approvals](rushed-approvals.md):** Pull requests are approved quickly without thorough examination.
- **[Long-Lived Feature Branches](long-lived-feature-branches.md):** Code is not being reviewed and merged in a timely manner, leading to integration problems.
- **[Team Members Not Engaged in Review Process](team-members-not-engaged-in-review-process.md):** Reviews are often assigned to the same people, or reviewers do not provide meaningful feedback.

## Root Causes ▼

- **[Undefined Code Style Guidelines](undefined-code-style-guidelines.md):** There are no guidelines for how to conduct a review, what to look for, or who should be involved.
- **[Time Pressure](time-pressure.md):** Developers are under pressure to ship features quickly and do not have enough time to conduct thorough reviews.
- **[Inadequate Onboarding](inadequate-onboarding.md):** Reviewers may not know how to provide constructive feedback or what to look for in a review.
- **[Fear of Conflict](fear-of-conflict.md):** The team may not have a culture of collaboration and feedback, or there may be a fear of conflict.
- **[Tool Limitations](tool-limitations.md):** The tools used for code reviews may be difficult to use or may not provide the necessary features.
- **[Large Pull Requests](large-pull-requests.md):** Reviewing very large pull requests is cognitively demanding, leading reviewers to focus on easily digestible parts rather than complex issues.
- **[Lack of Ownership and Accountability](lack-of-ownership-and-accountability.md):** Reviewers may not feel a strong sense of responsibility for the quality of the code they are reviewing.

## Detection Methods ○

- **Track Bug Density:** A high number of bugs in a particular module or feature may indicate that the code was not reviewed properly.
- **Analyze Code Review Comments:** Look for patterns in the comments to see if reviewers are focusing on the right things. Periodically review a sample of code review comments to assess their depth and focus.
- **Post-Mortems/Retrospectives:** When bugs escape to production, analyze whether they could have been caught in code review and why they weren't.
- **Developer Surveys:** Ask developers for their feedback on the code review process and about the quality of feedback they receive during reviews.
- **Code Quality Metrics:** Monitor metrics like bug density, technical debt, and code complexity, which can indirectly indicate review effectiveness.
- **Use Static Analysis Tools:** These tools can automatically identify many common issues, freeing up reviewers to focus on more important things.

## Examples
A junior developer submits a pull request with a significant performance issue. The reviewer, who is under pressure to meet a deadline, approves the pull request without noticing the issue. The performance issue is later discovered in production. A developer submits a pull request that introduces an N+1 query performance bottleneck. The code review focuses solely on whether the variable names adhere to the team's convention and the placement of curly braces, completely missing the performance issue.

In another case, a team has a rule that all pull requests must be reviewed by at least two people. However, in practice, the same two senior developers are always assigned to do the reviews, and they are often too busy to provide meaningful feedback. A security vulnerability is introduced in a new feature, but the code review only contains comments about code formatting, and the security flaw is only discovered much later during a penetration test. This problem is common in teams that are growing quickly, have high turnover, or are under pressure to deliver features quickly, or where the importance of code reviews as a quality gate and knowledge-sharing mechanism is not fully understood.