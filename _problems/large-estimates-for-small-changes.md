---
title: Large Estimates for Small Changes
description: The team consistently provides large time estimates for seemingly small
  changes, indicating underlying code complexity and risk.
category:
- Code
- Process
related_problems:
- slug: fear-of-change
  similarity: 0.6
- slug: brittle-codebase
  similarity: 0.55
- slug: history-of-failed-changes
  similarity: 0.55
- slug: slow-feature-development
  similarity: 0.55
- slug: increased-cost-of-development
  similarity: 0.55
- slug: frequent-changes-to-requirements
  similarity: 0.55
layout: problem
---

## Description
When small, seemingly simple changes are consistently estimated to take a long time to implement, it is a strong indicator of underlying problems in the codebase. This phenomenon, often referred to as "high-cost-of-change," suggests that the system has become rigid and fragile. The development team is likely navigating a minefield of technical debt, where every modification carries the risk of unforeseen side effects. This problem can cripple a team's ability to respond to changing business needs and can be a major source of frustration for both developers and stakeholders.

## Indicators ⟡
- A simple bug fix is estimated to take days or weeks.
- Stakeholders are surprised by the high cost of minor feature requests.
- The team spends more time in meetings discussing the risks of a change than actually implementing it.
- There is a noticeable reluctance from the team to take on tasks that involve modifying existing code.

## Symptoms ▲
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.650, Strength: 0.873">ⓘ</span>
<br/>  The tendency to provide large time estimates for minor changes often stems from the intricate and brittle nature of legacy code, which in turn leads to frequent updates in requirements as stakeholders adjust their expectations based on the realized complexity and risks during development.
- [Slow Development Velocity](slow-development-velocity.md) <span class="info-tooltip" title="Confidence: 0.546, Strength: 0.898">ⓘ</span>
<br/>  The team's tendency to provide large time estimates for minor changes reflects the underlying complexity and technical debt of the legacy code, which in turn hampers development velocity as excessive time is spent assessing risks rather than implementing solutions.
- [Reduced Team Productivity](reduced-team-productivity.md) <span class="info-tooltip" title="Confidence: 0.503, Strength: 0.825">ⓘ</span>
<br/>  Large time estimates for seemingly small changes often arise from the intricate dependencies and outdated design of legacy systems, leading to reduced team productivity as developers spend more time navigating complexities and uncertainties instead of delivering efficient solutions.
- [Reduced Innovation](reduced-innovation.md) <span class="info-tooltip" title="Confidence: 0.502, Strength: 0.777">ⓘ</span>
<br/>  The tendency to provide large time estimates for small changes stems from the inherent complexity and risk in legacy systems, which discourages teams from pursuing innovative solutions and instead leads them to focus on minimal, safe modifications to avoid potential complications.
- [Increased Manual Work](increased-manual-work.md) <span class="info-tooltip" title="Confidence: 0.484, Strength: 0.746">ⓘ</span>
<br/>  The large time estimates for seemingly small changes often arise from the complex and outdated codebase that requires extensive manual intervention, making repetitive tasks more time-consuming and highlighting inefficiencies that further exacerbate the challenges in development.
- [Analysis Paralysis](analysis-paralysis.md) <span class="info-tooltip" title="Confidence: 0.478, Strength: 0.837">ⓘ</span>
<br/>  The tendency to provide excessive time estimates for minor changes stems from the inherent complexity and risks in legacy systems, which leads teams to overanalyze potential impacts during research phases, thus stalling progress on implementation.
- [Delayed Bug Fixes](delayed-bug-fixes.md) <span class="info-tooltip" title="Confidence: 0.478, Strength: 0.856">ⓘ</span>
<br/>  The tendency to provide inflated time estimates for minor changes often leads to prioritizing new features over addressing existing bugs, resulting in unresolved issues that persist and frustrate users.
- [Complex Implementation Paths](complex-implementation-paths.md) <span class="info-tooltip" title="Confidence: 0.468, Strength: 0.825">ⓘ</span>
<br/>  The large time estimates for small changes reflect the intricate implementation paths necessitated by legacy architectural constraints, where simplified business requirements lead to convoluted technical solutions, highlighting the code's underlying complexity and risk.
- [Author Frustration](author-frustration.md) <span class="info-tooltip" title="Confidence: 0.442, Strength: 0.876">ⓘ</span>
<br/>  The tendency to provide large time estimates for minor changes reveals the complexities and risks in the codebase, leading to frustration among developers during code reviews as they navigate unpredictable feedback stemming from the inherent challenges of modifying fragile legacy systems.
- [Inability to Innovate](inability-to-innovate.md) <span class="info-tooltip" title="Confidence: 0.440, Strength: 0.845">ⓘ</span>
<br/>  The team's struggle to deliver small changes quickly due to excessive estimates highlights the underlying code complexity, which consumes their resources and time, ultimately preventing them from pursuing innovative developments and improvements.
- [Invisible Nature of Technical Debt](invisible-nature-of-technical-debt.md) <span class="info-tooltip" title="Confidence: 0.425, Strength: 0.836">ⓘ</span>
<br/>  The large time estimates for minor changes reflect the hidden complexities and risks associated with accumulated technical debt, which non-technical stakeholders cannot easily perceive, leading to a lack of urgency in addressing the underlying issues.
- [Inefficient Development Environment](inefficient-development-environment.md) <span class="info-tooltip" title="Confidence: 0.423, Strength: 0.760">ⓘ</span>
<br/>  The slow and cumbersome development environment hinders the team's ability to efficiently test and implement changes, leading them to account for increased risk and uncertainty in their time estimates for modifications, thus reflecting the underlying code complexity associated with legacy systems.
- [Difficult Code Reuse](difficult-code-reuse.md) <span class="info-tooltip" title="Confidence: 0.423, Strength: 0.853">ⓘ</span>
<br/>  The inability to reuse code in different contexts often stems from tightly coupled and poorly structured legacy components, which increases the complexity of making even small changes and leads to inflated time estimates due to the anticipated risks associated with modifying such intricate systems.
- [Stakeholder-Developer Communication Gap](stakeholder-developer-communication-gap.md) <span class="info-tooltip" title="Confidence: 0.415, Strength: 0.839">ⓘ</span>
<br/>  The tendency to provide large time estimates for small changes often stems from unclear expectations between stakeholders and developers, as the complexity and risks inherent in the legacy codebase are not effectively communicated, leading to rework and stakeholder dissatisfaction.
- [Deadline Pressure](deadline-pressure.md) <span class="info-tooltip" title="Confidence: 0.414, Strength: 0.860">ⓘ</span>
<br/>  The tendency to provide large time estimates for minor changes reflects the complexity and fragility of legacy systems, which, when compounded by intense deadline pressure, results in hasty decisions that further compromise code quality and stability.
- [Merge Conflicts](merge-conflicts.md) <span class="info-tooltip" title="Confidence: 0.412, Strength: 0.791">ⓘ</span>
<br/>  Frequent merge conflicts arise from multiple developers needing to modify complex, interdependent code, which leads to inflated time estimates for small changes due to the perceived risk of introducing errors in tightly coupled legacy systems.
- [New Hire Frustration](new-hire-frustration.md) <span class="info-tooltip" title="Confidence: 0.412, Strength: 0.881">ⓘ</span>
<br/>  The consistently large time estimates for small changes reflect the underlying complexity and lack of documentation in the legacy code, creating barriers that frustrate new hires who struggle to navigate and understand the codebase effectively.
- [Monolithic Architecture Constraints](monolithic-architecture-constraints.md) <span class="info-tooltip" title="Confidence: 0.401, Strength: 0.788">ⓘ</span>
<br/>  The tendency to provide large estimates for minor changes is indicative of a burdensome code structure that hinders maintainability and flexibility, as the intricate interdependencies and tight coupling within a sprawling codebase amplify perceived risk and complexity.
- [Lower Code Quality](lower-code-quality.md) <span class="info-tooltip" title="Confidence: 0.401, Strength: 0.792">ⓘ</span>
<br/>  The tendency to provide large time estimates for small changes often stems from the increased complexity and technical debt in legacy code, which in turn creates an environment where developers, pressured by tight timelines or burnout, are more prone to make errors, leading to a decline in code quality.
- [Stakeholder Frustration](stakeholder-frustration.md) <span class="info-tooltip" title="Confidence: 0.398, Strength: 0.884">ⓘ</span>
<br/>  Large time estimates for small changes reflect hidden complexities in the legacy code, leading to stakeholder frustration as they perceive slow progress and poor communication, ultimately causing tension and diminishing support for the development team.
- [Review Process Breakdown](review-process-breakdown.md) <span class="info-tooltip" title="Confidence: 0.396, Strength: 0.663">ⓘ</span>
<br/>  The tendency to provide large time estimates for minor changes reflects the complexity and risks embedded in the legacy code, which are exacerbated by a breakdown in review processes that fail to catch issues, leading to a lack of confidence in the codebase and inflated estimates.
- [Unpredictable System Behavior](unpredictable-system-behavior.md) <span class="info-tooltip" title="Confidence: 0.388, Strength: 0.748">ⓘ</span>
<br/>  Large time estimates for minor changes often stem from the presence of hidden dependencies in the code, where unexpected side effects in seemingly unrelated areas indicate a lack of modularity and increased complexity, thereby signaling the risks involved in making even small modifications.
- [Inadequate Requirements Gathering](inadequate-requirements-gathering.md) <span class="info-tooltip" title="Confidence: 0.386, Strength: 0.830">ⓘ</span>
<br/>  Insufficient analysis and documentation of requirements often leads to unclear expectations and a lack of understanding of the existing codebase, causing the team to overestimate the time needed for small changes due to perceived complexity and risk.
- [Large Pull Requests](large-pull-requests.md) <span class="info-tooltip" title="Confidence: 0.382, Strength: 0.649">ⓘ</span>
<br/>  The tendency to provide large time estimates for minor changes often leads to the creation of extensive pull requests, as developers bundle multiple adjustments to mitigate perceived complexity, thereby complicating the review process and increasing the risk of overlooking critical issues.
- [Stakeholder Dissatisfaction](stakeholder-dissatisfaction.md) <span class="info-tooltip" title="Confidence: 0.379, Strength: 0.873">ⓘ</span>
<br/>  Large time estimates for seemingly minor changes reflect underlying code complexity and technical debt, leading to slower development cycles and ultimately resulting in stakeholder dissatisfaction with project outcomes and perceived lack of responsiveness.
- [Strangler Fig Pattern Failures](strangler-fig-pattern-failures.md) <span class="info-tooltip" title="Confidence: 0.375, Strength: 0.846">ⓘ</span>
<br/>  The tendency to provide large time estimates for minor changes reveals the underlying code complexity and risk, which in turn leads to failures in incremental modernization efforts due to the intricate interdependencies and data consistency issues that arise from such complexity.
- [Difficulty Quantifying Benefits](difficulty-quantifying-benefits.md) <span class="info-tooltip" title="Confidence: 0.361, Strength: 0.803">ⓘ</span>
<br/>  The consistently large estimates for minor changes reflect the inherent complexity and risk within the legacy codebase, making it difficult to quantify the benefits of necessary refactoring efforts, which in turn leads to their undervaluation in prioritization decisions.
- [Changing Project Scope](changing-project-scope.md) <span class="info-tooltip" title="Confidence: 0.348, Strength: 0.819">ⓘ</span>
<br/>  Frequent shifts in project direction exacerbate the team’s apprehension about the inherent code complexity and risk, leading to inflated time estimates for minor changes as a protective measure against potential unforeseen challenges.
- [Team Coordination Issues](team-coordination-issues.md) <span class="info-tooltip" title="Confidence: 0.347, Strength: 0.792">ⓘ</span>
<br/>  Difficulty in coordinating efforts among developers often stems from the complexity of the legacy codebase, which leads to inflated time estimates for minor changes, as uncertainty about interactions and dependencies increases the perceived risk and effort required for modifications.
- [Regression Bugs](regression-bugs.md) <span class="info-tooltip" title="Confidence: 0.339, Strength: 0.859">ⓘ</span>
<br/>  Large time estimates for small changes often stem from the intricate and fragile nature of legacy code, where the risk of inadvertently introducing regression bugs increases as developers navigate complex interdependencies and undocumented behaviors in the system.
- [History of Failed Changes](history-of-failed-changes.md) <span class="info-tooltip" title="Confidence: 0.338, Strength: 0.857">ⓘ</span>
<br/>  The tendency to provide large time estimates for minor changes often stems from a history of previous failed deployments, leading teams to overestimate complexity and risk due to their fear of repeating past mistakes.
- [Inadequate Initial Reviews](inadequate-initial-reviews.md) <span class="info-tooltip" title="Confidence: 0.336, Strength: 0.813">ⓘ</span>
<br/>  Inadequate initial reviews lead to undetected code complexities and risks, which subsequently inflate time estimates for minor changes as the team anticipates potential issues that were not addressed earlier.
- [Team Members Not Engaged in Review Process](team-members-not-engaged-in-review-process.md) <span class="info-tooltip" title="Confidence: 0.335, Strength: 0.725">ⓘ</span>
<br/>  The lack of engagement in the code review process prevents diverse perspectives and critical scrutiny, resulting in insufficient identification of complexities and risks in the legacy code, which in turn inflates time estimates for even minor changes.
- [Reduced Feature Quality](reduced-feature-quality.md) <span class="info-tooltip" title="Confidence: 0.330, Strength: 0.729">ⓘ</span>
<br/>  The tendency to provide large time estimates for seemingly small changes reflects the underlying complexity and risk in the codebase, which in turn limits the time available for thorough testing and refinement, resulting in reduced quality of delivered features.
- [Inefficient Code](inefficient-code.md) <span class="info-tooltip" title="Confidence: 0.321, Strength: 0.772">ⓘ</span>
<br/>  The tendency to provide large time estimates for minor changes stems from the presence of inefficient code, where performance bottlenecks and complex logic increase the perceived risk and effort required to implement even small modifications.
- [Poorly Defined Responsibilities](poorly-defined-responsibilities.md) <span class="info-tooltip" title="Confidence: 0.321, Strength: 0.812">ⓘ</span>
<br/>  The consistent provision of large time estimates for small changes often stems from the lack of clear responsibilities in modules, which leads to increased code complexity and interdependencies that make even minor modifications risky and time-consuming.
- [Unrealistic Schedule](unrealistic-schedule.md) <span class="info-tooltip" title="Confidence: 0.320, Strength: 0.803">ⓘ</span>
<br/>  Large time estimates for seemingly small changes reveal the complexity and risk inherent in legacy code, which in turn leads project managers to create unrealistic schedules based on optimistic assumptions, as they underestimate the true effort required to implement changes.
- [Communication Risk Within Project](communication-risk-within-project.md) <span class="info-tooltip" title="Confidence: 0.316, Strength: 0.817">ⓘ</span>
<br/>  The tendency to provide large time estimates for small changes often stems from unclear communication about the project's complexities and risks, which leads to misunderstandings among team members and further exacerbates the lack of trust and coordination essential for effective legacy system management.
- [Maintenance Cost Increase](maintenance-cost-increase.md) <span class="info-tooltip" title="Confidence: 0.314, Strength: 0.759">ⓘ</span>
<br/>  The tendency to provide large time estimates for small changes reflects the growing complexity and risk within the codebase, which in turn leads to increased resources spent on maintenance and support, as teams must navigate these intricacies more frequently and extensively.
- [Hidden Dependencies](hidden-dependencies.md) <span class="info-tooltip" title="Confidence: 0.306, Strength: 0.754">ⓘ</span>
<br/>  The tendency to provide large time estimates for minor changes arises from the presence of hidden dependencies created by workarounds and patches, which complicate the codebase and increase the perceived risk of making seemingly simple modifications.
- [Difficult Developer Onboarding](difficult-developer-onboarding.md) <span class="info-tooltip" title="Confidence: 0.302, Strength: 0.801">ⓘ</span>
<br/>  The large time estimates for minor changes reflect the code's underlying complexity, which in turn makes it challenging for new developers to navigate and comprehend the system, leading to prolonged onboarding times.
- [Team Confusion](team-confusion.md) <span class="info-tooltip" title="Confidence: 0.302, Strength: 0.857">ⓘ</span>
<br/>  The team's uncertainty about project goals and processes leads to miscommunication and misalignment, which exacerbates their perception of code complexity, resulting in inflated time estimates for changes that seem minor but are actually fraught with risk due to a lack of clarity.
- [Change Management Chaos](change-management-chaos.md) <span class="info-tooltip" title="Confidence: 0.301, Strength: 0.836">ⓘ</span>
<br/>  The tendency to provide large time estimates for minor changes reflects the intricate dependencies and undocumented complexities in legacy systems, which, when compounded by uncoordinated changes lacking oversight, leads to chaos and increased risk of conflicts and unintended consequences.
- [Scope Change Resistance](scope-change-resistance.md) <span class="info-tooltip" title="Confidence: 0.301, Strength: 0.790">ⓘ</span>
<br/>  The tendency to provide large time estimates for minor changes highlights the underlying code complexity and risk, which in turn fosters a culture of resistance to necessary scope changes, as stakeholders fear the potential for unforeseen complications and increased costs associated with modifying the project.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○
- **Analyze Estimation Trends:** Track the estimates for tasks of similar complexity over time. A consistent increase in estimates is a red flag.
- **Compare Estimated vs. Actual Time:** If the actual time taken to complete tasks is consistently much higher than the estimates, it indicates that the team is struggling with unforeseen complexity.
- **Developer Feedback:** Ask developers why their estimates are so high. Their answers will often point to the root causes.
- **Code Complexity Metrics:** Use static analysis tools to measure code complexity. High complexity scores often correlate with high-cost-of-change.

## Examples
A product manager requests a small change to the user interface: adding a new field to a form. The development team estimates that this will take two weeks to implement. The product manager is shocked, as they expected it to be a simple, one-day task. The developers explain that the form is used in multiple places throughout the application, and the underlying data model is tightly coupled to other parts of the system. Any change to the form requires extensive testing to ensure that it doesn't break anything else. This is a classic example of how a brittle codebase can lead to large estimates for small changes.
