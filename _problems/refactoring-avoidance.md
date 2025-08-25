---
title: Refactoring Avoidance
description: The development team actively avoids refactoring the codebase, even when
  they acknowledge it's necessary, due to fear of introducing new bugs.
category:
- Code
- Process
related_problems:
- slug: resistance-to-change
  similarity: 0.75
- slug: fear-of-change
  similarity: 0.7
- slug: maintenance-paralysis
  similarity: 0.7
- slug: fear-of-breaking-changes
  similarity: 0.65
- slug: brittle-codebase
  similarity: 0.6
- slug: high-technical-debt
  similarity: 0.6
layout: problem
---

## Description
Refactoring avoidance is the phenomenon where a development team consistently postpones or avoids improving the internal structure of the code, even when they are aware of its deficiencies. This is often driven by a fear that any change, no matter how well-intentioned, will introduce new bugs or break existing functionality. This avoidance is a self-perpetuating cycle: the longer refactoring is delayed, the more technical debt accumulates, and the riskier any future changes become. It is a clear sign of a fragile and unhealthy codebase.


## Indicators ⟡
- Developers say things like, "Don't touch that code, it's a house of cards."
- The team consistently chooses to add new code rather than modify existing code.
- There is a long list of known technical debt items that never gets addressed.
- The codebase is full of commented-out code, dead code, and other forms of cruft.


## Symptoms ▲

- [Developer Frustration and Burnout](developer-frustration-and-burnout.md) <span class="info-tooltip" title="Confidence: 0.480, Strength: 0.707">ⓘ</span>
<br/>  The development team's reluctance to refactor the codebase, stemming from a fear of introducing new bugs, leads to unresolved technical debt, which exacerbates frustrations and burnout as developers face increasingly complex and unmanageable code.
- [Legacy Skill Shortage](legacy-skill-shortage.md) <span class="info-tooltip" title="Confidence: 0.473, Strength: 0.733">ⓘ</span>
<br/>  The development team's fear of introducing new bugs through necessary code refactoring leads to a reliance on a dwindling pool of developers familiar with legacy systems, creating maintenance bottlenecks and highlighting the urgent need for modernization skills that are not being cultivated.
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.467, Strength: 0.697">ⓘ</span>
<br/>  The reluctance to refactor the codebase leads to a fragile architecture that cannot adapt easily to evolving requirements, causing frequent changes and necessitating rework as developers attempt to accommodate new demands without addressing underlying technical debt.
- [Inefficient Development Environment](inefficient-development-environment.md) <span class="info-tooltip" title="Confidence: 0.455, Strength: 0.731">ⓘ</span>
<br/>  The team's fear of introducing new bugs during code refactoring leads them to maintain an outdated codebase, resulting in a slow and cumbersome development environment that further hinders their ability to implement necessary changes.
- [Analysis Paralysis](analysis-paralysis.md) <span class="info-tooltip" title="Confidence: 0.413, Strength: 0.748">ⓘ</span>
<br/>  The development team's fear of introducing new bugs leads to excessive research and deliberation instead of action, causing a stagnation in progress as they overanalyze potential refactoring strategies without implementing necessary changes.
- [Reduced Team Productivity](reduced-team-productivity.md) <span class="info-tooltip" title="Confidence: 0.405, Strength: 0.734">ⓘ</span>
<br/>  The reluctance to refactor the codebase leads to increased technical debt and unresolved inefficiencies, which in turn hampers the team's productivity as they spend more time dealing with existing issues rather than improving the system.
- [Inadequate Mentoring Structure](inadequate-mentoring-structure.md) <span class="info-tooltip" title="Confidence: 0.306, Strength: 0.716">ⓘ</span>
<br/>  The lack of a systematic mentoring approach results in new developers not gaining the confidence or skills needed to effectively manage code changes, reinforcing the team's fear of refactoring due to the potential introduction of bugs.
- [Reduced Innovation](reduced-innovation.md) <span class="info-tooltip" title="Confidence: 0.305, Strength: 0.743">ⓘ</span>
<br/>  The fear of introducing new bugs during necessary code refactoring leads to a stagnant codebase, which in turn stifles creativity and discourages teams from pursuing innovative solutions, as they prioritize maintaining the status quo over exploring new ideas.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○
- **Code Churn Analysis:** Analyze the history of the codebase to see which files are being modified most frequently. If the same files are being churned over and over again without any improvement in their structure, it is a sign of refactoring avoidance.
- **Technical Debt Backlog:** If the team has a backlog of technical debt items that is constantly growing and never shrinking, it is a clear sign that they are avoiding refactoring.
- **Developer Interviews:** Ask developers about their attitude towards refactoring. If they express fear or reluctance, it is a sign of a problem.
- **Code Quality Metrics:** Track code quality metrics over time. A steady decline in quality is a strong indicator of refactoring avoidance.


## Examples
A team is working on a legacy system that has been in production for over a decade. The code is a mess, but it works. The team is afraid to touch it for fear of breaking it. When they need to add a new feature, they simply copy and paste existing code and modify it slightly. This leads to a lot of code duplication and makes the system even harder to maintain. The team knows that they should refactor the code, but they never do because they are afraid of the consequences. This is a classic example of refactoring avoidance.
