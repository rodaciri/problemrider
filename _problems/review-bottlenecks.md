---
title: Review Bottlenecks
description: The code review process becomes a significant bottleneck, delaying the
  delivery of new features and bug fixes.
category:
- Process
- Team
related_problems:
- slug: code-review-inefficiency
  similarity: 0.75
- slug: inadequate-code-reviews
  similarity: 0.75
- slug: review-process-breakdown
  similarity: 0.7
- slug: insufficient-code-review
  similarity: 0.7
- slug: team-members-not-engaged-in-review-process
  similarity: 0.7
- slug: maintenance-bottlenecks
  similarity: 0.65
layout: problem
---

## Description
Review bottlenecks occur when the code review process consistently slows down the development cycle. This can happen for a variety of reasons, such as having too few reviewers, large and complex pull requests, or a culture where reviews are not prioritized. When code reviews become a bottleneck, it can lead to frustration among developers, delayed releases, and a decrease in overall development velocity.

## Indicators ⟡
- Pull requests are sitting for a long time without being reviewed.
- Developers are frequently context-switching while waiting for reviews.
- The team has a low deployment frequency.
- There is a lot of pressure to approve pull requests quickly, even if they are not ready.

## Symptoms ▲
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.653, Strength: 0.861">ⓘ</span>
<br/>  The delays caused by the code review process lead to a lack of timely feedback, prompting stakeholders to frequently change requirements in an attempt to adapt to evolving project needs, which ultimately exacerbates the review bottlenecks and creates a cycle of rework and frustration.
- [Developer Frustration and Burnout](developer-frustration-and-burnout.md) <span class="info-tooltip" title="Confidence: 0.639, Strength: 0.860">ⓘ</span>
<br/>  The prolonged wait times for code reviews in legacy systems lead to frustration and burnout among developers, as they feel their contributions are undervalued and progress is hindered, resulting in decreased motivation and engagement.
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.638, Strength: 0.832">ⓘ</span>
<br/>  Delayed code reviews extend the time required for integrating updates into the system, leading to increased response times for dependent services that ultimately cause them to timeout when requesting data.
- [Poor Test Coverage](poor-test-coverage.md) <span class="info-tooltip" title="Confidence: 0.630, Strength: 0.850">ⓘ</span>
<br/>  The slow code review process limits timely feedback on test implementation, resulting in critical areas of the codebase remaining untested and exposing the system to undetected faults.
- [Legacy Skill Shortage](legacy-skill-shortage.md) <span class="info-tooltip" title="Confidence: 0.617, Strength: 0.843">ⓘ</span>
<br/>  The insufficient number of developers skilled in outdated technologies leads to prolonged review cycles, as the remaining knowledgeable team members are overwhelmed, causing delays in feature delivery and system maintenance.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.503, Strength: 0.776">ⓘ</span>
<br/>  Delays in the code review process can lead to an accumulation of unreleased resources, as developers may create and allocate these resources in anticipation of code approval, resulting in improper deallocation when features and fixes are not promptly integrated.
- [Monolithic Architecture Constraints](monolithic-architecture-constraints.md) <span class="info-tooltip" title="Confidence: 0.485, Strength: 0.875">ⓘ</span>
<br/>  As the code review process slows down due to the increasing size and complexity of the codebase, it becomes increasingly challenging to manage, maintain, and implement changes effectively, highlighting the systemic difficulties inherent in a large monolithic architecture.
- [Team Members Not Engaged in Review Process](team-members-not-engaged-in-review-process.md) <span class="info-tooltip" title="Confidence: 0.477, Strength: 0.869">ⓘ</span>
<br/>  The frequent assignment of code reviews to the same individuals, coupled with a lack of meaningful feedback, highlights a systemic disengagement that exacerbates delays in the review process, ultimately reinforcing bottlenecks in feature delivery and bug resolution within legacy systems.
- [Poor Caching Strategy](poor-caching-strategy.md) <span class="info-tooltip" title="Confidence: 0.468, Strength: 0.796">ⓘ</span>
<br/>  The lengthy code review process hinders timely implementation of optimizations, causing a lack of efficient caching strategies to be prioritized, which results in excessive data fetching and increased latency in the system.
- [Stakeholder-Developer Communication Gap](stakeholder-developer-communication-gap.md) <span class="info-tooltip" title="Confidence: 0.451, Strength: 0.875">ⓘ</span>
<br/>  Delays in the code review process hinder timely feedback and iteration, causing misalignments between stakeholder expectations and developer outputs, which ultimately leads to rework and dissatisfaction.
- [Analysis Paralysis](analysis-paralysis.md) <span class="info-tooltip" title="Confidence: 0.440, Strength: 0.874">ⓘ</span>
<br/>  The delays in the code review process lead teams to overanalyze and excessively research potential solutions instead of moving forward with implementation, resulting in stagnation and lack of progress in development within legacy systems.
- [Deadline Pressure](deadline-pressure.md) <span class="info-tooltip" title="Confidence: 0.436, Strength: 0.853">ⓘ</span>
<br/>  The prolonged code review process creates a sense of urgency among developers to meet deadlines, leading to rushed decisions and shortcuts that compromise software quality, thereby highlighting the inefficiencies in the review workflow as a critical symptom.
- [Inefficient Development Environment](inefficient-development-environment.md) <span class="info-tooltip" title="Confidence: 0.436, Strength: 0.808">ⓘ</span>
<br/>  A slow and cumbersome development environment exacerbates the review process by hindering developers' ability to efficiently implement changes, leading to increased wait times for code reviews and ultimately delaying feature delivery and bug fixes.
- [Negative User Feedback](negative-user-feedback.md) <span class="info-tooltip" title="Confidence: 0.434, Strength: 0.879">ⓘ</span>
<br/>  Delays in the code review process hinder timely updates and optimizations, leading to performance issues that manifest as user complaints about slow loading times and application freezes.
- [Reduced Feature Quality](reduced-feature-quality.md) <span class="info-tooltip" title="Confidence: 0.417, Strength: 0.926">ⓘ</span>
<br/>  The prolonged code review process limits the time developers can dedicate to refining and enhancing features, leading to a decline in the overall quality and usability of the delivered software.
- [Author Frustration](author-frustration.md) <span class="info-tooltip" title="Confidence: 0.405, Strength: 0.905">ⓘ</span>
<br/>  The delays in the code review process create uncertainty and inconsistency in feedback, leading to developer frustration as they struggle to navigate the conflicting or unpredictable evaluations of their work.
- [Stakeholder Dissatisfaction](stakeholder-dissatisfaction.md) <span class="info-tooltip" title="Confidence: 0.402, Strength: 0.901">ⓘ</span>
<br/>  Delays in the code review process extend the timeline for feature delivery and bug fixes, leading to stakeholder dissatisfaction due to unmet expectations for project outcomes and overall development pace.
- [Reduced Innovation](reduced-innovation.md) <span class="info-tooltip" title="Confidence: 0.399, Strength: 0.899">ⓘ</span>
<br/>  The prolonged code review process stifles teams' ability to experiment with and implement new ideas, leading them to prioritize only essential tasks and diminishing their innovative capacity.
- [High Defect Rate in Production](high-defect-rate-in-production.md) <span class="info-tooltip" title="Confidence: 0.389, Strength: 0.786">ⓘ</span>
<br/>  The delays in the code review process lead to insufficient testing and oversight of new code, resulting in a higher likelihood of defects emerging in production after releases.
- [Capacity Mismatch](capacity-mismatch.md) <span class="info-tooltip" title="Confidence: 0.370, Strength: 0.822">ⓘ</span>
<br/>  The delays in the code review process create a mismatch between the available capacity for development and the demand for timely feature delivery, leading to underutilization of resources and exacerbating the bottleneck in the workflow.
- [Inability to Innovate](inability-to-innovate.md) <span class="info-tooltip" title="Confidence: 0.365, Strength: 0.874">ⓘ</span>
<br/>  The prolonged code review process consumes valuable resources and time, leaving the team overwhelmed with immediate maintenance tasks and unable to allocate bandwidth for innovation and strategic improvements.
- [Inefficient Code](inefficient-code.md) <span class="info-tooltip" title="Confidence: 0.361, Strength: 0.837">ⓘ</span>
<br/>  Delays in the code review process lead to the accumulation of inefficient or poorly optimized code, as developers may rush to implement changes without thorough examination, resulting in performance bottlenecks that hinder system efficiency.
- [Review Process Breakdown](review-process-breakdown.md) <span class="info-tooltip" title="Confidence: 0.332, Strength: 0.832">ⓘ</span>
<br/>  The failure of the code review process to effectively identify issues and provide feedback exacerbates the bottleneck, as inadequate reviews lead to unresolved problems and increased delays in delivering features and fixes within legacy systems.
- [Slow Development Velocity](slow-development-velocity.md) <span class="info-tooltip" title="Confidence: 0.328, Strength: 0.902">ⓘ</span>
<br/>  Delays in the code review process lead to a backlog of unapproved changes, causing the team’s ability to implement and deliver new features and bug fixes to stagnate, which in turn results in a decline in overall development velocity.
- [Poor Project Control](poor-project-control.md) <span class="info-tooltip" title="Confidence: 0.326, Strength: 0.824">ⓘ</span>
<br/>  Inefficient code reviews lead to a lack of timely feedback on project progress, causing critical issues to remain undetected and exacerbating delays in feature delivery and bug resolution.
- [Delayed Bug Fixes](delayed-bug-fixes.md) <span class="info-tooltip" title="Confidence: 0.324, Strength: 0.812">ⓘ</span>
<br/>  The prolonged code review process impedes the timely resolution of known issues, leading to extended delays in bug fixes that contribute to user frustration and ongoing system problems.
- [Undefined Code Style Guidelines](undefined-code-style-guidelines.md) <span class="info-tooltip" title="Confidence: 0.320, Strength: 0.655">ⓘ</span>
<br/>  The lack of clear coding standards leads to subjective feedback during the review process, causing prolonged discussions and delays that exacerbate the overall bottleneck in delivering features and fixes.
- [Inadequate Test Data Management](inadequate-test-data-management.md) <span class="info-tooltip" title="Confidence: 0.314, Strength: 0.822">ⓘ</span>
<br/>  The delay in the code review process prevents timely updates to the test data, resulting in unrealistic or outdated data that fails to represent actual usage scenarios, thus indicating an underlying bottleneck in development workflows.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○
- **Pull Request Lead Time:** Track the time it takes from when a pull request is created to when it is merged.
- **Reviewer Load:** Analyze the number of pull requests that are assigned to each reviewer.
- **Developer Surveys:** Ask developers about their experience with the code review process and whether they feel that it is a bottleneck.

## Examples
A team has a rule that all pull requests must be reviewed by two people. However, there are only two senior developers on the team who are qualified to review code. As a result, pull requests are often sitting for days or even weeks before they are reviewed. This is causing a lot of frustration among the junior developers, who are not able to get their code merged in a timely manner. In another example, a team has a culture where code reviews are not prioritized. Developers are expected to complete their own work before they review the code of others. This is leading to a situation where pull requests are often sitting for a long time before they are reviewed, which is slowing down the entire development process.
