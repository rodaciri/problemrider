---
title: Uncontrolled Codebase Growth
description: A situation where a codebase grows in size and complexity without any
  control or planning.
category:
- Code Quality
- Maintenance
related_problems:
- slug: brittle-codebase
  similarity: 0.677
- slug: feature-creep-without-refactoring
  similarity: 0.672
- slug: high-technical-debt
  similarity: 0.603
- slug: high-maintenance-costs
  similarity: 0.603
- slug: refactoring-avoidance
  similarity: 0.601
layout: problem
---

## Description
Uncontrolled codebase growth is a situation where a codebase grows in size and complexity without any control or planning. This is a common problem in long-lived projects, where new features are constantly being added without any thought to the overall design of the system. Uncontrolled codebase growth can lead to a number of problems, including high technical debt, bloated classes, and a general slowdown in development velocity.

## Indicators ⟡
- The codebase is becoming increasingly large and complex.
- It is taking longer and longer to add new features.
- The number of bugs is increasing.
- Developers are becoming more and more frustrated with the codebase.

## Symptoms ▲
- **[High Technical Debt](high-technical-debt.md):** The codebase is accumulating more and more technical debt as it grows in size and complexity.
- **[Bloated Class](bloated-class.md):** Classes are becoming larger and more complex as new features are added.
- **[God Object Anti-Pattern](god-object-anti-pattern.md):** A single class is responsible for too many things.
- **[Slow Development Velocity](slow-development-velocity.md):** It is taking longer and longer to deliver new features.

## Root Causes ▼
- **[Feature Creep Without Refactoring](feature-creep-without-refactoring.md):** New features are added to the codebase without taking the time to refactor it.
- **[Convenience-Driven Development](convenience-driven-development.md):** It is often easier to add a new method to an existing class than to create a new one.
- **[Stagnant Architecture](stagnant-architecture.md):** The system does not have a clear architecture, so it is difficult to know where to add new functionality.
- **[Inexperienced Developers](inexperienced-developers.md):** Inexperienced developers may not have the skills or the experience to design a system that is easy to maintain and extend.

## Detection Methods ○
- **Code Metrics Tools:** Use tools to measure code complexity, class size, and other metrics.
- **Code Reviews:** Look for code that is difficult to understand and review.
- **Static Analysis Tools:** Use tools to identify code smells, such as large classes and long methods.

## Examples
A company has a large, monolithic e-commerce application that has been in development for over 10 years. The codebase has grown to over a million lines of code, and it is becoming increasingly difficult to maintain and extend. The development team is spending more and more time fixing bugs and less and less time adding new features. The company is starting to lose market share to its competitors, who are able to innovate more quickly.
