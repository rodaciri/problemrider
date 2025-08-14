---
title: Convenience-Driven Development
description: A development practice where developers choose the easiest and most convenient
  solution, rather than the best solution.
category:
- Code Quality
- Process
related_problems:
- slug: cv-driven-development
  similarity: 0.7
- slug: brittle-codebase
  similarity: 0.6
- slug: feature-creep-without-refactoring
  similarity: 0.55
- slug: difficult-code-comprehension
  similarity: 0.55
- slug: assumption-based-development
  similarity: 0.55
layout: problem
---

## Description
Convenience-driven development is a development practice where developers choose the easiest and most convenient solution, rather than the best solution. This often leads to a gradual degradation of the codebase, as developers take shortcuts and make design decisions that are not in the best long-term interest of the project. Convenience-driven development is often a sign of a lack of experience or a lack of discipline on the part of the development team.

## Indicators ⟡
- The codebase is full of hacks and workarounds.
- The design of the codebase is inconsistent.
- There is a lot of duplicated code.
- The codebase is difficult to understand and maintain.

## Symptoms ▲
- **[Bloated Class](bloated-class.md):** It is often easier to add a new method to an existing class than to create a new one.
- **[God Object Anti-Pattern](god-object-anti-pattern.md):** It is often easier to add a new responsibility to an existing class than to create a new one.
- **[High Technical Debt](high-technical-debt.md):** The codebase is accumulating more and more technical debt as developers take shortcuts and make poor design decisions.
- **[Inconsistent Codebase](inconsistent-codebase.md):** The codebase is inconsistent because developers are not following a common set of design principles.

## Root Causes ▼
- **[Time Pressure](time-pressure.md):** Developers are under pressure to deliver new features as quickly as possible, so they take shortcuts.
- **[Inexperienced Developers](inexperienced-developers.md):** Inexperienced developers may not have the skills or the experience to make good design decisions.
- **[Slow Knowledge Transfer](slow-knowledge-transfer.md):** There is no one on the team who is responsible for making sure that the codebase is well-designed and well-maintained.
- **[Review Process Breakdown](review-process-breakdown.md):** There is no process in place for reviewing code and providing feedback on design decisions.

## Detection Methods ○
- **Code Reviews:** Look for code that is poorly designed and difficult to understand.
- **Static Analysis Tools:** Use tools to identify code smells, such as duplicated code and large classes.
- **Developer Surveys:** Ask developers if they feel like they are able to write high-quality code.

## Examples
A developer needs to add a new feature to a legacy system. The developer is under pressure to deliver the feature as quickly as possible. The developer decides to copy and paste a large block of code from another part of the system, rather than taking the time to refactor the code and create a new, reusable component. This saves the developer a few hours of work in the short term, but it adds to the technical debt of the system and makes it more difficult to maintain in the long term.
