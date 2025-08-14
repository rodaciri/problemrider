---
title: Work Blocking
description: Development tasks cannot proceed without pending approvals, creating
  bottlenecks and delays in the development process.
category:
- Process
- Workflow
- Management
related_problems:
- slug: delayed-decision-making
  similarity: 80%
- slug: approval-dependencies
  similarity: 75%
- slug: bottleneck-formation
  similarity: 70%
- slug: work-queue-buildup
  similarity: 70%
- slug: extended-cycle-times
  similarity: 65%
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

- **[Slow Development Velocity](slow-development-velocity.md):** Overall team productivity decreases due to waiting time and context switching
- **[Developer Frustration and Burnout](developer-frustration-and-burnout.md):** Team members become frustrated by their inability to make progress
- **[Context Switching Overhead](context-switching-overhead.md):** Developers must constantly switch between different tasks while waiting for approvals
- **[Missed Deadlines](missed-deadlines.md):** Projects are delayed because critical approvals don't come in time
- **[Micromanagement Culture](micromanagement-culture.md):** Team cannot make decisions independently within their area of expertise
- **Resource Underutilization:** Skilled developers spend time on administrative tasks or waiting instead of producing value

## Root Causes ▼

- **[Approval Dependencies](approval-dependencies.md):** Too many decisions require external approval before work can proceed
- **[Micromanagement Culture](micromanagement-culture.md):** Management culture that requires approval for routine decisions
- **Risk Aversion:** Excessive fear of mistakes leads to over-control through approvals
- **Trust Issues:** Management doesn't trust team members to make appropriate decisions
- **Unclear Decision Authority:** No clear guidelines about what decisions can be made independently vs. requiring approval
- **Bottleneck Personnel:** Critical decisions depend on specific individuals who become unavailable
- **Process Over-Engineering:** Approval processes designed for high-risk situations applied to routine work

## Detection Methods ○

- **Blocking Time Tracking:** Monitor how much time tasks spend in blocked status
- **Approval Queue Analysis:** Track the volume and processing time of different types of approval requests
- **Developer Surveys:** Ask team members about their experience with approvals and decision-making autonomy
- **Stand-up Meeting Analysis:** Count frequency of "blocked" status reports and reasons
- **Decision Authority Mapping:** Identify decision types that require approval vs. those that can be made independently
- **Flow Efficiency Measurement:** Calculate percentage of time work items are actively progressing vs. waiting

## Examples

A development team needs approval from the architecture committee for any database schema changes. The committee meets once per week, and decisions often require additional documentation or clarification, leading to multi-week delays for simple changes like adding an index. Developers end up working on less important tasks while critical performance improvements are blocked. Another example involves a mobile app team that must get UI design approval from a design director who travels frequently. Simple layout adjustments that could be implemented in hours instead wait weeks for approval, forcing developers to work around incomplete designs or delay feature releases.