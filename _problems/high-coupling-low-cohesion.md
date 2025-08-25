---
title: High Coupling and Low Cohesion
description: Software components are overly dependent on each other and perform too
  many unrelated functions, making the system difficult to change and understand.
category:
- Architecture
- Code
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
- slug: inconsistent-quality
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

- [Complex Domain Model](complex-domain-model.md) <span class="info-tooltip" title="Confidence: 0.319, Strength: 0.579">ⓘ</span>
<br/>  The intricate dependencies among components lead to a convoluted representation of the business domain, where the lack of clear separation of concerns complicates the understanding and implementation of the system.

## Root Causes ▼

- [Insufficient Design Skills](insufficient-design-skills.md) <span class="info-tooltip" title="Confidence: 0.360, Strength: 0.946">ⓘ</span>
<br/>  The lack of necessary design skills among the development team leads to poorly structured software, resulting in components that are tightly coupled and lack a clear, cohesive purpose, making the system more complex and harder to maintain.
- [Bikeshedding](bikeshedding.md) <span class="info-tooltip" title="Confidence: 0.347, Strength: 0.879">ⓘ</span>
<br/>  By prioritizing trivial issues over more significant design and architectural concerns, reviewers inadvertently allow components to become tightly coupled and perform multiple unrelated functions, leading to a system that is harder to maintain and evolve.
- [Perfectionist Culture](perfectionist-culture.md) <span class="info-tooltip" title="Confidence: 0.335, Strength: 0.896">ⓘ</span>
<br/>  A culture that demands perfection can result in extended development times, leading teams to create tightly coupled components that attempt to satisfy all requirements at once, thereby sacrificing modularity and clarity in favor of an unattainable ideal.
- [Misunderstanding of OOP](misunderstanding-of-oop.md) <span class="info-tooltip" title="Confidence: 0.318, Strength: 0.918">ⓘ</span>
<br/>  A lack of understanding of object-oriented programming principles leads developers to create interdependent components that bundle unrelated functions together, resulting in a tightly coupled and poorly cohesive system that is challenging to maintain and modify.
- [Procedural Background](procedural-background.md) <span class="info-tooltip" title="Confidence: 0.312, Strength: 0.947">ⓘ</span>
<br/>  Developers who favor procedural programming often create tightly-knit components that perform multiple roles, resulting in a system architecture characterized by high interdependence and a lack of clear functional separation, which complicates maintenance and evolution.
- [Technology Lock-In](technology-lock-in.md) <span class="info-tooltip" title="Confidence: 0.306, Strength: 0.865">ⓘ</span>
<br/>  The difficulty of transitioning to new technologies due to high costs and effort leads to reliance on outdated systems, which fosters excessive interdependencies among components and results in a proliferation of unrelated functions, thereby increasing coupling and decreasing cohesion.

## Detection Methods ○

- **Code Metrics Tools:** Use static analysis tools that measure coupling (e.g., afferent/efferent coupling, CBO - Coupling Between Objects) and cohesion (e.g., LCOM - Lack of Cohesion in Methods).
- **Code Review:** Look for code that is hard to understand, has many dependencies, or performs multiple unrelated tasks.
- **Dependency Graphs:** Visualize the dependencies between modules or classes to identify highly coupled components.
- **Refactoring Challenges:** If refactoring a small part of the system proves to be extremely difficult or risky, it's a sign of high coupling.


## Examples
A legacy e-commerce system has a single `OrderProcessor` class that handles everything from validating customer data, calculating taxes, processing payments, updating inventory, and sending email notifications. A small change to the tax calculation logic requires understanding and potentially modifying the entire `OrderProcessor` class, risking unintended side effects on payment processing or email sending. In another case, a utility function `calculate_total` in a Python application directly accesses and modifies a global `database_connection` object and a global `logging_level` variable. This makes it impossible to test `calculate_total` in isolation without setting up a real database connection and affecting the global logging configuration. This problem is a fundamental design flaw that often accumulates over time in systems that lack continuous architectural oversight and refactoring. It is a major contributor to technical debt and makes legacy system modernization extremely challenging.
