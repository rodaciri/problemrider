---
title: Long-Lived Feature Branches
description: Code is not being reviewed and merged in a timely manner, leading to
  integration problems and increased risk.
category:
- Code
- Process
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

- [Developer Frustration and Burnout](developer-frustration-and-burnout.md) <span class="info-tooltip" title="Confidence: 0.463, Strength: 0.677">ⓘ</span>
<br/>  The prolonged existence of unmerged code leads to mounting technical debt and integration challenges, which frustrate developers as they grapple with an increasingly complex and unstable codebase, ultimately contributing to their disengagement and burnout.
- [Merge Conflicts](merge-conflicts.md) <span class="info-tooltip" title="Confidence: 0.461, Strength: 0.794">ⓘ</span>
<br/>  The prolonged existence of unmerged code branches leads to multiple developers altering the same sections of the codebase, resulting in frequent merge conflicts that slow down development and signal the need for more timely code reviews and integration processes.
- [Unbounded Data Growth](unbounded-data-growth.md) <span class="info-tooltip" title="Confidence: 0.451, Strength: 0.709">ⓘ</span>
<br/>  Delayed code reviews and merges hinder timely updates to data management strategies, resulting in unaddressed data growth issues as legacy systems accumulate outdated or unnecessary data without effective oversight.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.443, Strength: 0.698">ⓘ</span>
<br/>  The prolonged existence of unmerged code changes leads to an accumulation of unreleased resources, as developers may allocate system resources for features that are never finalized or integrated, resulting in inefficient resource management and increased technical debt.
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.410, Strength: 0.628">ⓘ</span>
<br/>  The prolonged duration of unmerged code increases the likelihood of requirements changing during development, as stakeholders may seek to adjust features based on evolving priorities, resulting in rework and integration challenges.
- [Slow Development Velocity](slow-development-velocity.md) <span class="info-tooltip" title="Confidence: 0.405, Strength: 0.735">ⓘ</span>
<br/>  The prolonged existence of unmerged code branches leads to frequent integration conflicts and technical debt, which in turn hampers the team's ability to deliver features and fixes efficiently, manifesting as a decline in development velocity.
- [Inefficient Development Environment](inefficient-development-environment.md) <span class="info-tooltip" title="Confidence: 0.387, Strength: 0.647">ⓘ</span>
<br/>  The slow and cumbersome development environment exacerbates integration issues by delaying code reviews and merges, leading to prolonged feature branches that hinder overall team efficiency and responsiveness.
- [Review Process Breakdown](review-process-breakdown.md) <span class="info-tooltip" title="Confidence: 0.363, Strength: 0.599">ⓘ</span>
<br/>  The prolonged existence of feature branches hinders timely code reviews, resulting in a breakdown of review processes that fail to catch critical issues, thereby exacerbating integration problems and increasing technical debt in legacy systems.
- [Reduced Team Productivity](reduced-team-productivity.md) <span class="info-tooltip" title="Confidence: 0.333, Strength: 0.589">ⓘ</span>
<br/>  When code remains unreviewed and merged for extended periods, it creates bottlenecks that hinder collaboration and progress, ultimately leading to decreased output and effectiveness within the development team.
- [Inconsistent Naming Conventions](inconsistent-naming-conventions.md) <span class="info-tooltip" title="Confidence: 0.323, Strength: 0.671">ⓘ</span>
<br/>  The prolonged isolation of code in feature branches leads to a lack of collaborative naming standards and documentation, resulting in inconsistent naming conventions that further complicate code comprehension and maintenance within legacy systems.
- [Reduced Innovation](reduced-innovation.md) <span class="info-tooltip" title="Confidence: 0.315, Strength: 0.701">ⓘ</span>
<br/>  The accumulation of unmerged code leads to a backlog that stifles collaboration and experimentation, causing teams to prioritize immediate fixes over innovative solutions, ultimately hindering progress and adaptation in the system.

## Root Causes ▼

- [High API Latency](high-api-latency.md) <span class="info-tooltip" title="Confidence: 0.301, Strength: 0.934">ⓘ</span>
<br/>  Excessive API response times lead to delays in development and testing cycles, causing code changes to accumulate in feature branches without timely reviews or merges, ultimately resulting in integration challenges and increased risk.

## Detection Methods ○

- **Version Control System Analysis:** Monitor the age and size of feature branches in your Git repository.
- **Code Review Metrics:** Track the time it takes for pull requests to be reviewed and merged.
- **Build/Deployment Frequency:** Observe how often the main branch is built and deployed.
- **Developer Feedback:** Ask developers about their experiences with merge conflicts and integration challenges.


## Examples
A team is developing a major new module for an application. The development takes three months on a single feature branch. When it's time to merge, there are hundreds of conflicts with the main branch, and the team spends weeks resolving them, delaying the release. In another case, a developer works on a new feature for several weeks without pushing their changes or creating a pull request. Meanwhile, another developer makes a related change on the main branch. When the first developer finally tries to merge, their changes are incompatible, requiring significant rework. This problem is often a symptom of a team that has not fully embraced continuous integration or agile development practices. It can lead to significant technical debt and slow down the overall development process.
