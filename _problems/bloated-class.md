---
title: Bloated Class
description: A class that has grown so large that it has become difficult to understand,
  maintain, and test.
category:
- Code Quality
- Maintenance
related_problems:
- slug: excessive-class-size
  similarity: 75%
- slug: monolithic-functions-and-classes
  similarity: 60%
- slug: uncontrolled-codebase-growth
  similarity: 55%
- slug: over-reliance-on-utility-classes
  similarity: 55%
- slug: god-object-anti-pattern
  similarity: 55%
layout: problem
---

## Description
A bloated class is a class that has accumulated too many responsibilities over time. It often starts as a small, well-designed class, but as new features are added, it grows in size and complexity. This makes it difficult to understand, maintain, and test. Bloated classes are a common code smell and a sign of technical debt.

## Indicators ⟡
- A class with a large number of methods and properties.
- A class that is difficult to name because it does too many things.
- A class that is frequently modified by multiple developers for different reasons.
- A class that is difficult to test in isolation.

## Symptoms ▲
- **[Increased Cognitive Load](increased-cognitive-load.md):** Developers have a hard time understanding the class and all its responsibilities.
- **[High Bug Introduction Rate](high-bug-introduction-rate.md):** Changes to the class often have unintended side effects.
- **[Difficult to Test Code](difficult-to-test-code.md):** It is hard to write unit tests for the class because it has too many dependencies.
- **[Slow Development Velocity](slow-development-velocity.md):** It takes a long time to make changes to the class.

## Root Causes ▼
- **[Feature Creep Without Refactoring](feature-creep-without-refactoring.md):** New features are added to the class without taking the time to refactor it.
- **[Convenience-Driven Development](convenience-driven-development.md):** It is often easier to add a new method to an existing class than to create a new one.
- **Lack of Responsibility Separation:** The class is not designed with a clear separation of concerns.
- **[Misunderstanding of OOP](misunderstanding-of-oop.md):** Developers may not have a good understanding of object-oriented design principles.

## Detection Methods ○
- **Code Metrics Tools:** Use tools to measure class size, number of methods, and cyclomatic complexity.
- **Code Reviews:** Look for classes that are difficult to understand and review.
- **Static Analysis Tools:** Use tools to identify code smells, such as large classes and long methods.

## Examples
A `User` class in a social media application that is responsible for everything from authentication and authorization to profile management, news feed generation, and sending notifications. The class has over 50 methods and 1000 lines of code. When a developer wants to make a change to the news feed generation logic, they have to be careful not to break the authentication logic. It is also very difficult to write unit tests for the class because it has so many dependencies. As a result, development is slow and error-prone.
