---
title: Reduced Code Submission Frequency
description: Developers batch multiple changes together or delay submissions to avoid
  frequent code review cycles, reducing feedback quality and integration frequency.
category:
- Process
- Development Workflow
- Team Dynamics
related_problems:
- slug: large-pull-requests
  similarity: 75%
- slug: extended-review-cycles
  similarity: 75%
- slug: review-bottlenecks
  similarity: 75%
- slug: code-review-inefficiency
  similarity: 70%
- slug: reduced-review-participation
  similarity: 65%
layout: problem
---

## Description

Reduced code submission frequency occurs when developers intentionally batch multiple changes together or delay submitting code for review to avoid the overhead and frustration of frequent review cycles. While this might seem efficient from an individual perspective, it leads to larger, more complex changes that are harder to review effectively, increases integration risks, and reduces the collaborative benefits of frequent feedback.

## Indicators ⟡

- Developers submit large pull requests containing multiple unrelated changes
- Days or weeks pass between code submissions from active developers
- Team members mention waiting to "finish everything" before submitting for review
- Pull request sizes are consistently larger than team guidelines recommend
- Developers express reluctance to submit work-in-progress or incremental changes

## Symptoms ▲

- **[Large Pull Requests](large-pull-requests.md):** Changes become oversized and difficult to review comprehensively
- **Integration Risk Increase:** Less frequent integration creates higher risk of conflicts and integration problems
- **Delayed Feedback:** Issues are discovered later in the development process when they're harder to fix
- **Reduced Collaboration:** Team members work in isolation longer, missing opportunities for early collaboration
- **Review Quality Degradation:** Large changes are harder to review thoroughly, leading to missed issues

## Root Causes ▼

- **[Author Frustration](author-frustration.md):** Previous negative review experiences discourage frequent submissions
- **[Code Review Inefficiency](code-review-inefficiency.md):** Lengthy review processes make frequent submissions seem impractical
- **Review Process Fear:** Anxiety about criticism or rejection leads to submission avoidance
- **Perfectionist Tendencies:** Desire to submit only "complete" work prevents incremental sharing
- **Review Overhead Perception:** Belief that review process costs outweigh benefits for small changes

## Detection Methods ○

- **Submission Frequency Tracking:** Monitor how often individual developers submit code for review
- **Pull Request Size Analysis:** Track the size and complexity of code submissions over time
- **Developer Behavior Surveys:** Collect feedback on reasons for batching changes or delaying submissions
- **Integration Frequency Measurement:** Assess how often code is integrated into main branches
- **Collaboration Pattern Analysis:** Evaluate whether reduced submissions correlate with decreased team collaboration

## Examples

A developer working on a new feature becomes frustrated after their first small pull request goes through four rounds of review with extensive style debates. For their next change, they decide to implement the entire feature, write all tests, update documentation, and handle three related bug fixes before submitting anything for review. The resulting 800-line pull request is difficult for reviewers to analyze comprehensively, contains multiple unrelated changes that should be evaluated separately, and takes two weeks to review instead of the few days each individual change would have required. Another example involves a team member who stops submitting daily progress because previous reviews focused heavily on minor formatting issues. They begin working for a week at a time before submitting, creating integration conflicts with teammates' work and making it harder for the team to provide early feedback on design decisions that are difficult to change later in the development process.