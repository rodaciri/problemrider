---
title: High Coupling and Low Cohesion
description: Software components are overly dependent on each other and perform too
  many unrelated functions, making the system difficult to change and understand.
category:
- Design
- Maintenance
related_problems:
- slug: tight-coupling-issues
  similarity: 0.65
- slug: poor-encapsulation
  similarity: 0.6
- slug: poorly-defined-responsibilities
  similarity: 0.6
- slug: ripple-effect-of-changes
  similarity: 0.55
- slug: deployment-coupling
  similarity: 0.55
layout: problem
---

## Description
High coupling and low cohesion are two of the most common design problems in software development. Coupling refers to the degree of interdependence between software modules, while cohesion refers to the degree to which the elements of a module belong together. A well-designed system should have low coupling and high cohesion. This makes the system easier to understand, maintain, and extend. A system with high coupling and low cohesion, on the other hand, is a nightmare to work with.

## Indicators ⟡
- A small change in one part of the system requires changes in many other seemingly unrelated parts.
- It is difficult to understand the purpose of a module or function without understanding many other parts of the system.
- Changes are prone to introducing new bugs due to unexpected side effects in tightly coupled components.
- Developers spend more time navigating dependencies and understanding complex interactions.

## Symptoms ▲

- **[Ripple Effect of Changes](ripple-effect-of-changes.md):** A small change in one part of the system requires modifications in many other seemingly unrelated parts.
- **[Difficult to Understand Code](difficult-to-understand-code.md):** It's hard to grasp the purpose of a module or function without understanding many other parts of the system.
- **[High Bug Introduction Rate](high-bug-introduction-rate.md):** Changes are prone to introducing new bugs due to unexpected side effects in tightly coupled components.
- **[Slow Development Velocity](slow-development-velocity.md):** Developers spend more time navigating dependencies and understanding complex interactions.
- **[Difficult to Test Code](difficult-to-test-code.md):** Components cannot be easily tested in isolation, requiring complex setup and mocking.
- **Code Duplication:** Developers copy and paste code rather than reusing existing components because it's too hard to extract or modify them.

## Root Causes ▼

- **Lack of Architectural Design:** The system was built without a clear architectural vision or design principles.
- **[Poorly Defined Responsibilities](poorly-defined-responsibilities.md):** Modules or classes are not designed with a single, clear responsibility.
- **Excessive Use of Global State:** Components directly access and modify global variables or shared mutable state.
- **Direct Class Instantiation:** Components directly instantiate other concrete classes instead of relying on interfaces or dependency injection.
- **[Procedural Programming in OOP Languages](procedural-programming-in-oop-languages.md):** Code is written in a procedural style, even within object-oriented languages, leading to large, monolithic functions.
- **Lack of Refactoring:** Over time, as features are added, the codebase is not refactored to maintain good design principles.

## Detection Methods ○

- **Code Metrics Tools:** Use static analysis tools that measure coupling (e.g., afferent/efferent coupling, CBO - Coupling Between Objects) and cohesion (e.g., LCOM - Lack of Cohesion in Methods).
- **Code Review:** Look for code that is hard to understand, has many dependencies, or performs multiple unrelated tasks.
- **Dependency Graphs:** Visualize the dependencies between modules or classes to identify highly coupled components.
- **Refactoring Challenges:** If refactoring a small part of the system proves to be extremely difficult or risky, it's a sign of high coupling.

## Examples
A legacy e-commerce system has a single `OrderProcessor` class that handles everything from validating customer data, calculating taxes, processing payments, updating inventory, and sending email notifications. A small change to the tax calculation logic requires understanding and potentially modifying the entire `OrderProcessor` class, risking unintended side effects on payment processing or email sending. In another case, a utility function `calculate_total` in a Python application directly accesses and modifies a global `database_connection` object and a global `logging_level` variable. This makes it impossible to test `calculate_total` in isolation without setting up a real database connection and affecting the global logging configuration. This problem is a fundamental design flaw that often accumulates over time in systems that lack continuous architectural oversight and refactoring. It is a major contributor to technical debt and makes legacy system modernization extremely challenging.