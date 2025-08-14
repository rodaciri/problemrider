---
title: Fear of Breaking Changes
description: The team is reluctant to make changes to the codebase for fear of breaking
  existing functionality, which can lead to a stagnant and outdated system.
category:
- Process
- Culture
- Maintenance
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
- **[Brittle Codebase](brittle-codebase.md):** The codebase is fragile and difficult to change.
- **[High Technical Debt](high-technical-debt.md):** The team is not paying down its technical debt, which is making the system more and more difficult to maintain.
- **[Slow Development Velocity](slow-development-velocity.md):** It takes a long time to develop and release new features.
- **[Reduced Innovation](reduced-innovation.md):** The team is not innovating because they are afraid to make changes to the system.

## Root Causes ▼
- **[High Bug Introduction Rate](high-bug-introduction-rate.md):** Without a comprehensive suite of automated tests, it is difficult to have confidence that a change will not break existing functionality.
- **Lack of a Staging Environment:** Without a realistic staging environment, it is difficult to test changes in a production-like setting before they are released.
- **[Complex Deployment Process](complex-deployment-process.md):** Without a plan for what to do when a change fails, it can be difficult to recover from a failed deployment.
- **[Fear of Conflict](fear-of-conflict.md):** A culture of blame can make people afraid to make mistakes.
- **[History of Failed Changes](history-of-failed-changes.md):** A history of failed changes can make a team hesitant to make changes in the future.

## Detection Methods ○
- **Code Churn:** Analyze the history of the codebase to see how often the code is being changed.
- **Technical Debt:** Track the amount of technical debt in the system.
- **Developer Surveys:** Ask developers about their feelings about making changes to the system.
- **Willingness to Experiment:** Is the team willing to experiment with new ideas and technologies?

## Examples
A company has a legacy system that is critical to its business. The system is old and fragile, and the team is afraid to make changes to it. As a result, the system is not being updated, and it is falling behind the competition. The company is losing market share, and they are at risk of going out of business. The team knows that they need to make changes to the system, but they are paralyzed by fear.
