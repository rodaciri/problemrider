---
title: Large, Risky Releases
description: Infrequent releases lead to large, complex deployments that are difficult
  to test, prone to failure, and have a significant impact on users when they go wrong.
category:
- Process
- Quality
- Deployment
related_problems:
- slug: complex-deployment-process
  similarity: 0.7
- slug: long-release-cycles
  similarity: 0.65
- slug: release-instability
  similarity: 0.65
- slug: deployment-risk
  similarity: 0.65
- slug: frequent-hotfixes-and-rollbacks
  similarity: 0.65
- slug: release-anxiety
  similarity: 0.65
layout: problem
---

## Description
Large, risky releases are a common problem in organizations with long release cycles. When releases are infrequent, they tend to be large and complex. This is because they contain a large number of changes, which can interact in unexpected ways. Large releases are difficult to test, and they are more likely to fail than small releases. When a large release fails, it can have a significant impact on users and the business. It can also be difficult and time-consuming to roll back a large release, which can prolong the outage.

## Indicators ⟡
- Releases are a major event that requires a lot of planning and coordination.
- The team is anxious and stressed about deployments.
- There is a high rate of post-deployment bugs and other issues.
- Rollbacks are a common occurrence.

## Symptoms ▲
- **[Release Instability](release-instability.md):** Releases are frequently unstable and require immediate attention from the development team.
- **[Frequent Hotfixes and Rollbacks](frequent-hotfixes-and-rollbacks.md):** The team is constantly deploying emergency fixes or rolling back releases to address critical issues.
- **[High Defect Rate in Production](high-defect-rate-in-production.md):** A large number of bugs are discovered in production after a release.
- **[User Trust Erosion](user-trust-erosion.md):** Frequent issues and emergency fixes damage user confidence in the system's reliability.

## Root Causes ▼
- **[Long Release Cycles](long-release-cycles.md):** Infrequent releases are the primary cause of large, risky releases.
- **Lack of Automated Tests:** Without a comprehensive suite of automated tests, it is difficult to test large releases effectively.
- **[Complex Deployment Process](complex-deployment-process.md):** A manual, time-consuming, and error-prone deployment process can increase the risk of failure.
- **[Lack of a Continuous Integration Culture:]**(feedback-isolation.md) A culture that does not prioritize the continuous integration of code will naturally have larger, riskier releases.
- **Feature Branching:** The use of long-lived feature branches can lead to large, complex merges that are difficult to test.

## Detection Methods ○
- **Release Size:** Track the number of changes in each release.
- **Release Failure Rate:** Track the percentage of releases that result in a critical failure.
- **Mean Time to Recovery (MTTR):** Measure the average time it takes to recover from a failed release.
- **Post-Release Bug Count:** Count the number of bugs that are reported in the days and weeks following a release.

## Examples
A company releases a new version of its software once a year. The annual release is a major event that requires months of planning and coordination. The release contains a large number of new features and bug fixes. The testing process is long and arduous, but it is impossible to test every possible combination of changes. As a result, the release is always risky, and it often fails. When the release fails, it can take days to roll it back, which has a significant impact on the company's customers.
