---
title: Constant Firefighting
description: The development team is perpetually occupied with fixing bugs and addressing
  urgent issues, leaving little to no time for new feature development.
category:
- Code
- Process
related_problems:
- slug: development-disruption
  similarity: 0.75
- slug: time-pressure
  similarity: 0.65
- slug: uneven-work-flow
  similarity: 0.65
- slug: constantly-shifting-deadlines
  similarity: 0.65
- slug: operational-overhead
  similarity: 0.65
- slug: frequent-changes-to-requirements
  similarity: 0.65
layout: problem
---

## Description
Constant firefighting, also known as "reactive development," is a state where a development team is so consumed by urgent, unplanned work that they have little or no time for planned, proactive work. The team is constantly in a state of crisis, lurching from one emergency to the next. This is a highly inefficient and stressful way to work, and it is a clear sign that the system is unstable and the development process is broken.

## Indicators ⟡
- The majority of the team's time is spent on unplanned work.
- The team is frequently context-switching between different urgent tasks.
- There is a sense of chaos and urgency in the team's daily work.
- The team is consistently missing its deadlines for planned work.

## Symptoms ▲
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.600, Strength: 0.820">ⓘ</span>
<br/>  The ongoing need to fix urgent issues in legacy systems often results in a lack of stable requirements, as stakeholders frequently adjust their demands in response to immediate problems, creating a cycle of rework that hinders feature development.
- [Unbounded Data Structures](unbounded-data-structures.md) <span class="info-tooltip" title="Confidence: 0.563, Strength: 0.828">ⓘ</span>
<br/>  The ongoing urgency to fix bugs and resolve immediate issues often leads to neglecting proper data management practices, resulting in unbounded data structures that exacerbate performance problems and further drain development resources.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.559, Strength: 0.802">ⓘ</span>
<br/>  The ongoing need to fix urgent issues often leads to hasty coding practices, resulting in unreleased resources as developers prioritize immediate bug resolution over proper resource management, which is a clear indicator of the team's chronic inability to allocate time for thorough development and maintenance.
- [Inefficient Development Environment](inefficient-development-environment.md) <span class="info-tooltip" title="Confidence: 0.548, Strength: 0.766">ⓘ</span>
<br/>  The team's constant engagement in urgent bug fixing creates a reactive workflow that prevents optimization of their development environment, leading to inefficiencies that further exacerbate the time lost to addressing immediate issues rather than enabling proactive feature development.
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.530, Strength: 0.724">ⓘ</span>
<br/>  The continuous focus on urgent bug fixes diminishes the team's capacity to optimize and maintain API performance, leading to increased upstream timeouts as services fail to receive timely responses.
- [Reduced Team Productivity](reduced-team-productivity.md) <span class="info-tooltip" title="Confidence: 0.523, Strength: 0.788">ⓘ</span>
<br/>  The ongoing necessity to resolve urgent issues in legacy systems consumes the team's bandwidth, leading to decreased productivity as they are unable to allocate time for strategic development and innovation.
- [Legacy Skill Shortage](legacy-skill-shortage.md) <span class="info-tooltip" title="Confidence: 0.478, Strength: 0.723">ⓘ</span>
<br/>  The ongoing need to fix urgent issues diminishes the time available for knowledge transfer and training, resulting in a critical shortage of developers skilled in maintaining legacy systems, which further exacerbates the cycle of constant firefighting.
- [Unbounded Data Growth](unbounded-data-growth.md) <span class="info-tooltip" title="Confidence: 0.463, Strength: 0.720">ⓘ</span>
<br/>  The ongoing need to fix urgent issues prevents the team from implementing effective data management practices, leading to unchecked data growth that exacerbates system instability and increases the frequency of critical bugs, further entrenching the cycle of constant firefighting.
- [Merge Conflicts](merge-conflicts.md) <span class="info-tooltip" title="Confidence: 0.438, Strength: 0.699">ⓘ</span>
<br/>  The constant need to address urgent issues forces multiple developers to work on the same legacy codebase simultaneously, leading to frequent merge conflicts as they modify overlapping sections of large functions or files, which in turn exacerbates the time constraints and hinders overall development progress.
- [Developer Frustration and Burnout](developer-frustration-and-burnout.md) <span class="info-tooltip" title="Confidence: 0.416, Strength: 0.641">ⓘ</span>
<br/>  The constant need to fix bugs and urgent issues in legacy systems prevents developers from engaging in meaningful work, leading to frustration and burnout as they feel trapped in a cycle of reactive maintenance rather than proactive development.
- [Slow Development Velocity](slow-development-velocity.md) <span class="info-tooltip" title="Confidence: 0.410, Strength: 0.735">ⓘ</span>
<br/>  The team's continuous focus on urgent bug fixes and crisis management diverts resources away from planned development work, leading to a decline in the ability to deliver features and improvements at a consistent pace, ultimately reflecting a systematic decrease in overall productivity.
- [Unmotivated Employees](unmotivated-employees.md) <span class="info-tooltip" title="Confidence: 0.404, Strength: 0.674">ⓘ</span>
<br/>  The constant pressure to fix urgent issues in a legacy system prevents team members from engaging in meaningful development work, leading to frustration and detachment from their roles, which manifests as a lack of motivation and low morale.
- [Analysis Paralysis](analysis-paralysis.md) <span class="info-tooltip" title="Confidence: 0.394, Strength: 0.795">ⓘ</span>
<br/>  The constant need to fix urgent issues in legacy systems creates a reactive environment where teams become so focused on troubleshooting that they get stuck in endless research and analysis, unable to transition to actionable implementation, thereby stalling overall development progress.
- [Inconsistent Naming Conventions](inconsistent-naming-conventions.md) <span class="info-tooltip" title="Confidence: 0.361, Strength: 0.691">ⓘ</span>
<br/>  The constant need to address urgent issues prevents the team from standardizing naming conventions, leading to a chaotic codebase that becomes increasingly difficult to maintain and exacerbates the firefighting cycle.
- [Inadequate Test Data Management](inadequate-test-data-management.md) <span class="info-tooltip" title="Confidence: 0.359, Strength: 0.717">ⓘ</span>
<br/>  The continuous focus on urgent bug fixes prevents the team from implementing robust test data management practices, resulting in the use of inadequate test data that fails to simulate real-world scenarios, thereby perpetuating the cycle of urgent issues.
- [Flaky Tests](flaky-tests.md) <span class="info-tooltip" title="Confidence: 0.341, Strength: 0.695">ⓘ</span>
<br/>  The continual focus on urgent bug fixes prevents the team from stabilizing and refining the test environment, leading to flaky tests that erode confidence in the system and further exacerbate the need for constant firefighting.
- [Reduced Innovation](reduced-innovation.md) <span class="info-tooltip" title="Confidence: 0.332, Strength: 0.721">ⓘ</span>
<br/>  The continuous need to resolve urgent issues in legacy systems diverts resources and attention away from innovation, resulting in a culture that prioritizes immediate fixes over creative solutions, which stifles the exploration of new ideas.
- [Delayed Value Delivery](delayed-value-delivery.md) <span class="info-tooltip" title="Confidence: 0.332, Strength: 0.771">ⓘ</span>
<br/>  The continuous focus on resolving urgent issues prevents the development team from allocating resources to implement new features, resulting in prolonged delays in delivering value to users and increasing their frustration.
- [Product Direction Chaos](product-direction-chaos.md) <span class="info-tooltip" title="Confidence: 0.331, Strength: 0.777">ⓘ</span>
<br/>  The constant need to fix urgent bugs due to insufficient time for proactive development leads to chaotic product direction, as conflicting priorities from various stakeholders arise when the team lacks the bandwidth to align on a coherent strategy.
- [Invisible Nature of Technical Debt](invisible-nature-of-technical-debt.md) <span class="info-tooltip" title="Confidence: 0.331, Strength: 0.779">ⓘ</span>
<br/>  The ongoing need to fix urgent issues prevents the team from effectively addressing underlying technical debt, which remains unseen by non-technical stakeholders, thus perpetuating a cycle of constant firefighting without the resources needed for sustainable improvement.
- [Lower Code Quality](lower-code-quality.md) <span class="info-tooltip" title="Confidence: 0.313, Strength: 0.658">ⓘ</span>
<br/>  The constant need to resolve urgent issues prevents developers from dedicating adequate time to thorough testing and code reviews, resulting in rushed work that increases mistakes and defects in the codebase.
- [Inconsistent Knowledge Acquisition](inconsistent-knowledge-acquisition.md) <span class="info-tooltip" title="Confidence: 0.312, Strength: 0.807">ⓘ</span>
<br/>  The constant need to address urgent issues prevents the development team from establishing standardized training and documentation practices, leading to inconsistent knowledge acquisition among team members, which exacerbates the firefighting cycle as new developers struggle to understand the legacy system efficiently.
- [Interrupt Overhead](interrupt-overhead.md) <span class="info-tooltip" title="Confidence: 0.309, Strength: 0.741">ⓘ</span>
<br/>  The continuous need to address urgent issues in legacy systems often leads to excessive hardware interrupts, which disrupt CPU execution and exacerbate performance problems, thereby consuming valuable development resources that could otherwise be allocated to new feature development.
- [Poor Project Control](poor-project-control.md) <span class="info-tooltip" title="Confidence: 0.306, Strength: 0.728">ⓘ</span>
<br/>  The ongoing focus on urgent bug fixes prevents adequate project oversight, leading to a lack of visibility into emerging issues, which exacerbates the cycle of constant firefighting and hinders proactive management in legacy systems.
- [Stakeholder-Developer Communication Gap](stakeholder-developer-communication-gap.md) <span class="info-tooltip" title="Confidence: 0.306, Strength: 0.737">ⓘ</span>
<br/>  The continuous need to address urgent issues prevents the development team from engaging in thorough discussions with stakeholders, resulting in misaligned expectations and frequent rework, which highlights the underlying struggle of being caught in a reactive cycle rather than a proactive development approach.
- [Inadequate Configuration Management](inadequate-configuration-management.md) <span class="info-tooltip" title="Confidence: 0.305, Strength: 0.786">ⓘ</span>
<br/>  The constant prioritization of urgent bug fixes over systematic configuration management leads to poorly tracked versions and increased errors, thereby exacerbating the cycle of firefighting as the development team struggles to maintain stability amidst ongoing issues.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○
- **Track Unplanned Work:** Measure the percentage of the team's time that is spent on unplanned work. If this number is consistently high, it is a clear sign of a problem.
- **Analyze Bug Reports:** Look for patterns in the bug reports. Are the same problems recurring over and over again? This is a sign that the team is not addressing the root causes of the problems.
- **Team Retrospectives:** Ask the team about their experience with firefighting. Are they feeling overwhelmed? Do they feel like they are making progress?
- **Monitor Key Metrics:** Track metrics like mean time to recovery (MTTR) and change failure rate. A high MTTR and a high change failure rate are both indicators of a team that is struggling with firefighting.

## Examples
A team is responsible for maintaining a critical business application. The application is old and has a lot of technical debt. The team spends most of its time fixing production issues. They are constantly being pulled off of their planned work to deal with emergencies. As a result, they are never able to make any progress on the long-term improvements that would make the application more stable. The team is stuck in a vicious cycle of firefighting, and they are becoming increasingly burned out.
