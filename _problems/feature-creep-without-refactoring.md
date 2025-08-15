---
title: Feature Creep Without Refactoring
description: The continuous addition of new features to a codebase without taking
  the time to refactor and improve the design.
category:
- Code
- Process
related_problems:
- slug: feature-creep
  similarity: 0.85
- slug: scope-creep
  similarity: 0.6
- slug: maintenance-paralysis
  similarity: 0.55
- slug: convenience-driven-development
  similarity: 0.55
- slug: feature-bloat
  similarity: 0.55
- slug: accumulation-of-workarounds
  similarity: 0.55
layout: problem
---

## Description
Feature creep without refactoring is the process of continuously adding new features to a codebase without taking the time to refactor and improve the design. This leads to a gradual degradation of the codebase, making it more and more difficult to maintain and extend. It is a common problem in software development, and it is often driven by a desire to deliver new features as quickly as possible.

## Indicators ⟡
- The codebase is becoming increasingly complex and difficult to understand.
- It is taking longer and longer to add new features.
- The number of bugs is increasing.
- Developers are becoming more and more frustrated with the codebase.

## Symptoms ▲
- **[Bloated Class](bloated-class.md):** Classes are becoming larger and more complex as new features are added.
- **[God Object Anti-Pattern](god-object-anti-pattern.md):** A single class is responsible for too many things.
- **[High Technical Debt](high-technical-debt.md):** The codebase is accumulating more and more technical debt.
- **[Slow Development Velocity](slow-development-velocity.md):** It is taking longer and longer to deliver new features.

## Root Causes ▼
- **[Time Pressure](time-pressure.md):** Developers are under pressure to deliver new features as quickly as possible, so they don't have time to refactor the code.
- **[Short-Term Focus](short-term-focus.md):** The team is focused on delivering new features in the short term, and they are not thinking about the long-term health of the codebase.
- **[Short-Term Focus](short-term-focus.md):** The team does not have a budget for refactoring, so they are not able to make the time to improve the design of the codebase.
- **[Inexperienced Developers](inexperienced-developers.md):** Inexperienced developers may not have the skills or the experience to refactor the code effectively.

## Detection Methods ○
- **Code Metrics Tools:** Use tools to measure code complexity, class size, and other metrics.
- **Code Reviews:** Look for code that is difficult to understand and review.
- **Static Analysis Tools:** Use tools to identify code smells, such as large classes and long methods.

## Examples
A startup is building a new social media application. The team is under a lot of pressure to deliver new features as quickly as possible. They are constantly adding new features to the codebase without taking the time to refactor it. As a result, the codebase is becoming more and more complex and difficult to maintain. The team is starting to experience a slowdown in development velocity, and the number of bugs is increasing. If they don't start taking the time to refactor the code, they will eventually reach a point where it is impossible to add new features.
