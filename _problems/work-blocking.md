---
title: Work Blocking
description: Development tasks cannot proceed without pending approvals, creating
  bottlenecks and delays in the development process.
category:
- Management
- Process
related_problems:
- slug: approval-dependencies
  similarity: 0.75
- slug: work-queue-buildup
  similarity: 0.65
- slug: delayed-decision-making
  similarity: 0.65
- slug: bottleneck-formation
  similarity: 0.65
- slug: decision-paralysis
  similarity: 0.65
- slug: decision-avoidance
  similarity: 0.6
layout: problem
---

## Description

Work blocking occurs when development tasks cannot move forward because they require approvals, decisions, or inputs that are delayed or unavailable. This creates a bottleneck effect where developers and teams sit idle or switch to less productive work while waiting for permission to proceed. Work blocking often indicates over-centralized decision-making, unclear authority structures, or processes that prioritize control over productivity.


## Indicators ⟡

- Developers frequently report being "blocked" on tasks during stand-up meetings
- Tasks remain in "waiting for approval" status for extended periods
- Team velocity decreases due to context switching while waiting for decisions
- Developers work on lower-priority tasks while higher-priority work is blocked
- Multiple team members are dependent on the same person or process for approvals


## Symptoms ▲

- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.443, Strength: 0.648">ⓘ</span>
<br/>  Constantly changing requirements often arise from the inability to progress through development due to pending approvals, resulting in a cycle of rework and delays that highlights the underlying work blocking issue.
- [Developer Frustration and Burnout](developer-frustration-and-burnout.md) <span class="info-tooltip" title="Confidence: 0.436, Strength: 0.651">ⓘ</span>
<br/>  The inability to progress on development tasks due to pending approvals leads to frustration and burnout among developers, as they feel their efforts are stymied, causing disengagement and exhaustion in an already challenging legacy system environment.
- [Deadline Pressure](deadline-pressure.md) <span class="info-tooltip" title="Confidence: 0.341, Strength: 0.718">ⓘ</span>
<br/>  The inability to progress on development tasks due to pending approvals creates urgency and pressure to meet deadlines, which in turn fosters a culture of rushed decision-making and compromises in quality, highlighting the detrimental impact of work blocking on the overall development process.
- [New Hire Frustration](new-hire-frustration.md) <span class="info-tooltip" title="Confidence: 0.301, Strength: 0.674">ⓘ</span>
<br/>  The inability to obtain necessary approvals not only stifles development progress but also leaves new hires feeling powerless and frustrated, as they are unable to engage in meaningful contributions, highlighting the impact of systemic delays on team morale and productivity.

## Root Causes ▼

- [Atomic Operation Overhead](atomic-operation-overhead.md) <span class="info-tooltip" title="Confidence: 0.356, Strength: 0.905">ⓘ</span>
<br/>  Excessive use of atomic operations leads to increased memory synchronization overhead and cache coherency traffic, which in turn slows down the approval processes necessary for development tasks, resulting in work blocking and delays.
- [Deadlock Conditions](deadlock-conditions.md) <span class="info-tooltip" title="Confidence: 0.355, Strength: 0.931">ⓘ</span>
<br/>  The inability to progress on development tasks is caused by multiple processes being unable to release necessary resources due to interdependencies, leading to a situation where each task is effectively waiting on another, resulting in significant bottlenecks in the workflow.
- [Bottleneck Formation](bottleneck-formation.md) <span class="info-tooltip" title="Confidence: 0.352, Strength: 0.954">ⓘ</span>
<br/>  Inefficient approval processes and reliance on specific team members create constraints that prevent timely decision-making, leading to work blocking and hindering the overall development flow in legacy systems.

## Detection Methods ○

- **Blocking Time Tracking:** Monitor how much time tasks spend in blocked status
- **Approval Queue Analysis:** Track the volume and processing time of different types of approval requests
- **Developer Surveys:** Ask team members about their experience with approvals and decision-making autonomy
- **Stand-up Meeting Analysis:** Count frequency of "blocked" status reports and reasons
- **Decision Authority Mapping:** Identify decision types that require approval vs. those that can be made independently
- **Flow Efficiency Measurement:** Calculate percentage of time work items are actively progressing vs. waiting


## Examples

A development team needs approval from the architecture committee for any database schema changes. The committee meets once per week, and decisions often require additional documentation or clarification, leading to multi-week delays for simple changes like adding an index. Developers end up working on less important tasks while critical performance improvements are blocked. Another example involves a mobile app team that must get UI design approval from a design director who travels frequently. Simple layout adjustments that could be implemented in hours instead wait weeks for approval, forcing developers to work around incomplete designs or delay feature releases.
