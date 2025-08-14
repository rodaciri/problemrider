---
title: Avoidance Behaviors
description: Complex tasks are postponed or avoided entirely due to cognitive overload,
  fear, or perceived difficulty.
category:
- Team
- Process
- Management
related_problems:
- slug: procrastination-on-complex-tasks
  similarity: 0.8
- slug: decision-avoidance
  similarity: 0.7
- slug: cognitive-overload
  similarity: 0.6
- slug: refactoring-avoidance
  similarity: 0.6
- slug: accumulation-of-workarounds
  similarity: 0.6
layout: problem
---

## Description

Avoidance behaviors occur when developers consistently postpone, defer, or avoid tackling complex or challenging tasks due to psychological barriers such as cognitive overload, fear of failure, or mental fatigue. These behaviors manifest as procrastination on difficult features, preference for simple tasks over complex ones, or finding reasons to work on other activities instead of addressing challenging problems. Over time, avoidance behaviors can lead to a backlog of difficult work and reduced team capability.

## Indicators ⟡

- Developers consistently choose easier tasks over more challenging ones
- Complex features remain in the backlog much longer than simple ones
- Team members find reasons to work on other tasks when assigned difficult work
- Important but challenging tasks are repeatedly postponed or reassigned
- Developers express anxiety or reluctance when discussing complex features

## Symptoms ▲

- **Backlog of Complex Work:** Difficult tasks accumulate while simple ones are completed quickly
- **Skill Stagnation:** Team doesn't develop capabilities to handle challenging problems
- **[Mental Fatigue](mental-fatigue.md):** Stress about avoided work creates ongoing psychological burden
- **Reduced Problem-Solving Capability:** Team becomes less effective at tackling complex challenges
- **Deadline Pressure:** Avoided work eventually becomes urgent and must be completed under pressure

## Root Causes ▼

- **[Cognitive Overload](cognitive-overload.md):** Tasks exceed individual cognitive capacity to manage complexity
- **[Fear of Change](fear-of-change.md):** Concern about breaking existing functionality or making mistakes
- **[Mental Fatigue](mental-fatigue.md):** Insufficient mental energy to tackle demanding problems
- **Lack of Problem-Solving Confidence:** Developers don't feel capable of handling complex challenges
- **Perfectionist Tendencies:** Fear that complex work won't meet quality standards
- **Insufficient Support:** Lack of guidance, tools, or resources for tackling difficult tasks

## Detection Methods ○

- **Task Completion Pattern Analysis:** Compare completion rates for simple vs. complex tasks
- **Backlog Age Analysis:** Track how long complex tasks remain unstarted
- **Developer Surveys:** Ask about task preferences and anxiety levels for different work types
- **Sprint Planning Observations:** Monitor how tasks are selected and avoided during planning
- **One-on-One Interviews:** Discuss individual concerns about specific types of work

## Examples

A development team has three complex features in their backlog that have been repeatedly moved to future sprints over six months. Each involves refactoring tightly coupled legacy code, and developers consistently choose to work on new feature additions instead, even when the complex refactoring would provide more value. The avoided work creates increasing technical debt and makes future development more difficult. Another example involves developers who avoid debugging certain production issues because they involve complex interactions between multiple microservices. Instead, they focus on easier bug fixes and feature work, leaving the difficult issues unresolved and causing ongoing system stability problems that compound over time.