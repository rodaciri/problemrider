---
title: High Bug Introduction Rate
description: A high rate of new bugs are introduced with every change to the codebase,
  indicating underlying quality issues.
category:
- Code
related_problems:
- slug: increased-bug-count
  similarity: 0.75
- slug: increased-risk-of-bugs
  similarity: 0.7
- slug: high-defect-rate-in-production
  similarity: 0.65
- slug: increased-error-rates
  similarity: 0.6
- slug: high-turnover
  similarity: 0.6
- slug: regression-bugs
  similarity: 0.6
layout: problem
---

## Description
A high bug introduction rate means that for every new feature or fix, a significant number of new bugs are created. This is a strong indicator of a fragile and unhealthy codebase. It slows down development, erodes confidence in the software, and increases the cost of maintenance. This problem is often a symptom of deeper issues in the development process and code quality.

## Indicators ⟡
- The number of bug reports increases after each release.
- Developers spend more time fixing new bugs than building new features.
- The "bugs" column on the team's Kanban board is always full.
- There is a sense of "one step forward, two steps back" in the development process.

## Symptoms ▲
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.565, Strength: 0.817">ⓘ</span>
<br/>  Constant updates to project requirements create instability in the codebase, increasing the likelihood of introducing new bugs as developers struggle to adapt and implement changes without a solid foundation, thereby signaling underlying quality issues in the software.
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.539, Strength: 0.743">ⓘ</span>
<br/>  The frequent introduction of new bugs leads to unstable code, causing delays and failures in API responses as dependencies struggle to process requests within their expected timeframes.
- [Poor Test Coverage](poor-test-coverage.md) <span class="info-tooltip" title="Confidence: 0.502, Strength: 0.722">ⓘ</span>
<br/>  The introduction of a high rate of new bugs is often driven by poor test coverage, as the lack of sufficient tests fails to identify existing issues and validate changes, allowing defects to proliferate unnoticed within the legacy codebase.
- [Increased Customer Support Load](increased-customer-support-load.md) <span class="info-tooltip" title="Confidence: 0.478, Strength: 0.732">ⓘ</span>
<br/>  The frequent introduction of new bugs with each code change leads to increased user frustration and task failures, resulting in a higher volume of support requests as users seek assistance to resolve issues that stem from the underlying quality problems in the legacy system.
- [Developer Frustration and Burnout](developer-frustration-and-burnout.md) <span class="info-tooltip" title="Confidence: 0.473, Strength: 0.703">ⓘ</span>
<br/>  The persistent introduction of new bugs creates a challenging environment that demoralizes developers, leading to frustration and burnout as they struggle to manage the quality issues and constant firefighting associated with maintaining a fragile legacy codebase.
- [Legacy Skill Shortage](legacy-skill-shortage.md) <span class="info-tooltip" title="Confidence: 0.470, Strength: 0.722">ⓘ</span>
<br/>  The introduction of a high rate of new bugs is exacerbated by the critical shortage of developers familiar with legacy technologies, as their lack of expertise results in insufficient understanding of the existing codebase, leading to more errors during changes and maintenance.
- [Inefficient Development Environment](inefficient-development-environment.md) <span class="info-tooltip" title="Confidence: 0.451, Strength: 0.742">ⓘ</span>
<br/>  The slow and cumbersome development environment hampers the team's ability to thoroughly test and review code changes, leading to a higher likelihood of introducing new bugs as quality assurance processes become inefficient.
- [Reduced Team Productivity](reduced-team-productivity.md) <span class="info-tooltip" title="Confidence: 0.445, Strength: 0.762">ⓘ</span>
<br/>  The frequent introduction of new bugs leads to increased time spent on debugging and fixing issues, which in turn reduces the development team's overall productivity and effectiveness in delivering new features.
- [Slow Development Velocity](slow-development-velocity.md) <span class="info-tooltip" title="Confidence: 0.415, Strength: 0.758">ⓘ</span>
<br/>  The frequent introduction of new bugs leads to increased time spent on debugging and rework, thereby hindering the team's ability to deliver features and fixes efficiently, which in turn manifests as a noticeable decline in overall development velocity.
- [Large Pull Requests](large-pull-requests.md) <span class="info-tooltip" title="Confidence: 0.389, Strength: 0.628">ⓘ</span>
<br/>  Large pull requests complicate the review process, resulting in superficial assessments that fail to catch potential issues, thereby contributing to the high rate of new bugs introduced with each code change.
- [Flaky Tests](flaky-tests.md) <span class="info-tooltip" title="Confidence: 0.376, Strength: 0.690">ⓘ</span>
<br/>  The random failure of tests due to unstable conditions reveals the fragile state of the codebase, as it highlights the introduction of new bugs during changes that compromise the reliability of the testing process itself.
- [Analysis Paralysis](analysis-paralysis.md) <span class="info-tooltip" title="Confidence: 0.366, Strength: 0.767">ⓘ</span>
<br/>  The tendency to become mired in excessive research and deliberation stems from a fear of introducing new bugs, which leads to a lack of confidence in the codebase and hinders progress, thereby highlighting the underlying quality issues that contribute to the high rate of new bugs.
- [Deadline Pressure](deadline-pressure.md) <span class="info-tooltip" title="Confidence: 0.353, Strength: 0.778">ⓘ</span>
<br/>  Intense deadline pressure often forces developers to prioritize speed over thorough testing and code quality, resulting in rushed implementations that increase the likelihood of introducing new bugs into the legacy codebase.
- [Interrupt Overhead](interrupt-overhead.md) <span class="info-tooltip" title="Confidence: 0.339, Strength: 0.765">ⓘ</span>
<br/>  The frequent introduction of new bugs can lead to inefficient code execution, resulting in excessive hardware interrupts that disrupt CPU flow and cause context switching, thus serving as an indicator of underlying quality issues in the codebase.
- [Inefficient Code](inefficient-code.md) <span class="info-tooltip" title="Confidence: 0.320, Strength: 0.843">ⓘ</span>
<br/>  The introduction of new bugs often stems from inefficient code, as complex and poorly optimized logic increases the likelihood of errors during modifications, revealing underlying quality issues in the legacy system.
- [Inability to Innovate](inability-to-innovate.md) <span class="info-tooltip" title="Confidence: 0.319, Strength: 0.764">ⓘ</span>
<br/>  The frequent introduction of new bugs consumes the team's resources and focus, leaving little room for innovation, as they are preoccupied with fixing recurring issues instead of exploring new solutions or improvements.
- [Merge Conflicts](merge-conflicts.md) <span class="info-tooltip" title="Confidence: 0.313, Strength: 0.763">ⓘ</span>
<br/>  Frequent merge conflicts arise from multiple developers working on the same large, poorly structured code sections, which increases the likelihood of introducing new bugs as changes are made without adequate isolation or testing.
- [Complex Implementation Paths](complex-implementation-paths.md) <span class="info-tooltip" title="Confidence: 0.307, Strength: 0.694">ⓘ</span>
<br/>  The introduction of complex technical solutions for simple business requirements increases the likelihood of errors, as convoluted code paths are harder to understand and maintain, thereby contributing to a higher rate of new bugs with each code change.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○
- **Bug Tracking Metrics:** Monitor the number of new bugs reported after each release.
- **Code Churn Analysis:** Analyze the number of times a file is changed. High churn can indicate problematic areas.
- **Developer Feedback:** Regularly solicit feedback from the development team about the quality of the codebase and the development process.

## Examples
A team releases a new version of their software with a few new features. Within a week, the number of bug reports from users has doubled. The team spends the next two sprints fixing these new bugs, delaying the start of the next planned features. This cycle repeats with every release, leading to a slow and unpredictable development process.
