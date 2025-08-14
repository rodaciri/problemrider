---
title: Extended Review Cycles
description: Code reviews require multiple rounds of feedback and revision, significantly
  extending the time from code submission to approval.
category:
- Process
- Efficiency
- Team Dynamics
related_problems:
- slug: extended-cycle-times
  similarity: 0.7
- slug: code-review-inefficiency
  similarity: 0.65
- slug: long-release-cycles
  similarity: 0.6
- slug: inadequate-initial-reviews
  similarity: 0.6
- slug: extended-research-time
  similarity: 0.6
layout: problem
---

## Description

Extended review cycles occur when code reviews require multiple rounds of feedback and revision before approval, significantly extending the time from initial code submission to final acceptance. While some revision is normal and healthy, extended cycles involve excessive back-and-forth that provides diminishing returns on code quality while consuming substantial developer time and creating delays in feature delivery.

## Indicators ⟡

- Code reviews regularly require 4 or more rounds of revision
- Simple changes take days or weeks to get approved
- Review comments continue to identify new issues in later rounds that could have been caught initially
- Authors spend more time addressing review feedback than writing the original code
- Review approval times vary dramatically for similar-complexity changes

## Symptoms ▲

- **[Slow Development Velocity](slow-development-velocity.md):** Overall development speed is reduced by lengthy review processes
- **Developer Context Switching:** Authors must repeatedly return to old code changes, disrupting current work
- **[Author Frustration](author-frustration.md):** Developers become frustrated with seemingly endless revision requirements
- **[Review Bottlenecks](review-bottlenecks.md):** Extended cycles create backlogs and delays in the review process
- **[Reduced Innovation](reduced-innovation.md):** Developers avoid making improvements or trying new approaches to minimize review cycles

## Root Causes ▼

- **[Large Pull Requests](large-pull-requests.md):** Oversized changes are difficult to review thoroughly in one pass
- **[Conflicting Reviewer Opinions](conflicting-reviewer-opinions.md):** Contradictory feedback requires multiple revision attempts
- **[Inadequate Initial Reviews](inadequate-initial-reviews.md):** Reviewers don't identify all issues in early rounds, leading to iterative discovery
- **[Perfectionist Review Culture](perfectionist-review-culture.md):** Excessive focus on minor improvements extends review cycles unnecessarily
- **[Communication Breakdown](communication-breakdown.md):** Unclear feedback leads to misunderstandings and incorrect revisions

## Detection Methods ○

- **Review Round Tracking:** Monitor the number of revision rounds required for different types of changes
- **Review Duration Analysis:** Measure total time from submission to approval for various change sizes
- **Feedback Quality Assessment:** Analyze whether early review rounds catch the most important issues
- **Author Time Investment:** Track how much time developers spend on review revisions versus new development
- **Review Efficiency Metrics:** Compare review cycles across different teams or reviewers

## Examples

A developer submits a 200-line feature implementation that goes through six rounds of review over three weeks. The first round focuses on code style, the second on error handling, the third on performance concerns, the fourth on testing approach, the fifth on variable naming, and the sixth on documentation. Each round requires 1-2 days of author work and 1-2 days of reviewer turnaround time. By the time the code is approved, the author has lost context on the original implementation and the feature delivery is delayed by a month. Another example involves a simple bug fix that requires four review rounds because different reviewers identify different aspects to improve in each round - first the fix approach, then the test coverage, then the error messages, and finally the logging. The fix that should have taken a day ends up consuming a week of calendar time and multiple hours of developer effort across the team.