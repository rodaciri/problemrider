---
title: Fear of Breaking Changes
description: The team is reluctant to make changes to the codebase for fear of breaking
  existing functionality, which can lead to a stagnant and outdated system.
category:
- Code
- Culture
- Process
related_problems:
- slug: fear-of-change
  similarity: 0.85
- slug: resistance-to-change
  similarity: 0.7
- slug: fear-of-failure
  similarity: 0.7
- slug: history-of-failed-changes
  similarity: 0.65
- slug: maintenance-paralysis
  similarity: 0.65
- slug: refactoring-avoidance
  similarity: 0.65
layout: problem
---

## Description
Fear of breaking changes is a common problem in software development. It is the fear that a change to the codebase will have unintended consequences and will break existing functionality. This fear can be paralyzing, and it can prevent a team from making necessary changes to the system. When a team is afraid to make changes, the system can become stagnant and outdated. This can lead to a number of problems, including a decline in user satisfaction, a loss of competitive advantage, and a great deal of frustration for the development team.


## Indicators ⟡
- The team is hesitant to make changes to the codebase.
- The team is not refactoring the code.
- The team is not keeping up with the latest technologies.
- The team is not innovating.


## Symptoms ▲

- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.650, Strength: 0.865">ⓘ</span>
<br/>  The reluctance to modify the codebase due to the fear of introducing errors often results in stakeholders frequently changing requirements in an attempt to adjust to perceived limitations, thereby indicating an underlying issue of stagnation in the system's evolution.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.575, Strength: 0.828">ⓘ</span>
<br/>  The reluctance to modify the codebase often leads developers to avoid implementing necessary resource management practices, resulting in unreleased resources that accumulate over time and further contribute to system instability.
- [Legacy Skill Shortage](legacy-skill-shortage.md) <span class="info-tooltip" title="Confidence: 0.539, Strength: 0.778">ⓘ</span>
<br/>  The reluctance to modify the codebase due to the fear of introducing errors discourages developers from engaging with legacy technologies, resulting in a critical shortage of skilled personnel capable of maintaining and updating the system effectively.
- [Developer Frustration and Burnout](developer-frustration-and-burnout.md) <span class="info-tooltip" title="Confidence: 0.513, Strength: 0.734">ⓘ</span>
<br/>  The reluctance to make changes due to fear of introducing breaking changes creates a cycle of frustration and burnout among developers, as they become increasingly demotivated by the lack of progress and innovation in an outdated codebase.
- [Flaky Tests](flaky-tests.md) <span class="info-tooltip" title="Confidence: 0.511, Strength: 0.783">ⓘ</span>
<br/>  Flaky tests undermine confidence in the testing process, causing developers to hesitate in making necessary changes to the codebase, which perpetuates the fear of introducing bugs and leads to an increasingly outdated system.
- [Review Process Breakdown](review-process-breakdown.md) <span class="info-tooltip" title="Confidence: 0.425, Strength: 0.675">ⓘ</span>
<br/>  The reluctance to modify the codebase due to concerns about unintended consequences leads to a superficial review process that neglects thorough analysis and constructive feedback, ultimately perpetuating technical debt and reducing overall code quality.
- [Negative User Feedback](negative-user-feedback.md) <span class="info-tooltip" title="Confidence: 0.409, Strength: 0.815">ⓘ</span>
<br/>  The reluctance to modify the codebase due to concerns about disrupting existing functionality prevents necessary updates and optimizations, leading to performance issues that manifest as negative user feedback.
- [Team Members Not Engaged in Review Process](team-members-not-engaged-in-review-process.md) <span class="info-tooltip" title="Confidence: 0.376, Strength: 0.749">ⓘ</span>
<br/>  The reluctance to change the codebase fosters disengagement in the review process, as team members avoid providing feedback on potentially risky modifications, which in turn creates a cycle of stagnation and decreases code quality in legacy systems.
- [Inability to Innovate](inability-to-innovate.md) <span class="info-tooltip" title="Confidence: 0.353, Strength: 0.804">ⓘ</span>
<br/>  The reluctance to modify the codebase due to concerns about disrupting existing functionality leads to a focus on maintenance over innovation, resulting in a system that fails to evolve and adapt to new requirements or technologies.
- [Analysis Paralysis](analysis-paralysis.md) <span class="info-tooltip" title="Confidence: 0.353, Strength: 0.834">ⓘ</span>
<br/>  The reluctance to implement changes due to concerns about disrupting existing functionality leads teams to overanalyze potential impacts, resulting in prolonged research phases that hinder progress in legacy systems.
- [Team Dysfunction](team-dysfunction.md) <span class="info-tooltip" title="Confidence: 0.338, Strength: 0.838">ⓘ</span>
<br/>  The reluctance to change the codebase due to fear of breaking existing functionality creates a culture of avoidance, leading to team members prioritizing individual concerns over collaboration, which manifests as dysfunction and hampers coordinated efforts to address technical debt and innovate.
- [Deadline Pressure](deadline-pressure.md) <span class="info-tooltip" title="Confidence: 0.324, Strength: 0.739">ⓘ</span>
<br/>  The reluctance to modify the codebase due to concerns about breaking existing functionality creates a culture of cautiousness that, when coupled with intense deadline pressure, results in rushed decisions and shortcuts that further entrench the outdated state of the system.
- [Inadequate Mentoring Structure](inadequate-mentoring-structure.md) <span class="info-tooltip" title="Confidence: 0.323, Strength: 0.732">ⓘ</span>
<br/>  The reluctance to make changes due to fear of breaking existing functionality often stems from a lack of systematic mentoring, which results in insufficient knowledge transfer and support for new developers, thereby perpetuating the cycle of stagnation in the codebase.
- [Stakeholder Dissatisfaction](stakeholder-dissatisfaction.md) <span class="info-tooltip" title="Confidence: 0.312, Strength: 0.811">ⓘ</span>
<br/>  The team's reluctance to implement necessary changes due to concerns about introducing errors leads to a slower development pace and outdated features, ultimately resulting in dissatisfaction among stakeholders who expect timely and effective project outcomes.
- [Stakeholder-Developer Communication Gap](stakeholder-developer-communication-gap.md) <span class="info-tooltip" title="Confidence: 0.309, Strength: 0.735">ⓘ</span>
<br/>  The team's fear of introducing breaking changes leads to a conservative approach in development, resulting in insufficient engagement with stakeholders to clarify expectations, which manifests as misunderstandings and rework when outdated features fail to align with current needs.
- [Monolithic Architecture Constraints](monolithic-architecture-constraints.md) <span class="info-tooltip" title="Confidence: 0.307, Strength: 0.721">ⓘ</span>
<br/>  The reluctance to make changes due to fear of breaking existing functionality results in a complex and unwieldy codebase, where the increasing size and interdependencies of the code exacerbate maintenance challenges, ultimately serving as a clear indicator of the underlying fear that stifles innovation and adaptability.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○
- **Code Churn:** Analyze the history of the codebase to see how often the code is being changed.
- **Technical Debt:** Track the amount of technical debt in the system.
- **Developer Surveys:** Ask developers about their feelings about making changes to the system.
- **Willingness to Experiment:** Is the team willing to experiment with new ideas and technologies?


## Examples
A company has a legacy system that is critical to its business. The system is old and fragile, and the team is afraid to make changes to it. As a result, the system is not being updated, and it is falling behind the competition. The company is losing market share, and they are at risk of going out of business. The team knows that they need to make changes to the system, but they are paralyzed by fear.
