---
title: Bloated Class
description: A class that has grown so large that it has become difficult to understand,
  maintain, and test.
category:
- Code
related_problems:
- slug: excessive-class-size
  similarity: 0.75
- slug: monolithic-functions-and-classes
  similarity: 0.6
- slug: uncontrolled-codebase-growth
  similarity: 0.55
- slug: over-reliance-on-utility-classes
  similarity: 0.55
- slug: god-object-anti-pattern
  similarity: 0.55
- slug: feature-creep
  similarity: 0.5
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

- [Complex Domain Model](complex-domain-model.md) <span class="info-tooltip" title="Confidence: 0.663, Strength: 0.896">ⓘ</span>
<br/>  The excessive complexity of the business domain leads to an accumulation of responsibilities within a single class, resulting in bloating that obscures understanding and hinders maintainability.
- [Unbounded Data Structures](unbounded-data-structures.md) <span class="info-tooltip" title="Confidence: 0.659, Strength: 0.896">ⓘ</span>
<br/>  The difficulty in managing and organizing the growing complexity of a large class often leads to unbounded data structures, as the lack of clear boundaries and responsibilities results in unchecked data accumulation, ultimately causing memory and performance issues in legacy systems.
- [Analysis Paralysis](analysis-paralysis.md) <span class="info-tooltip" title="Confidence: 0.544, Strength: 0.934">ⓘ</span>
<br/>  When a class becomes overly complex and difficult to understand, it leads to teams spending excessive time analyzing its intricacies instead of implementing solutions, resulting in a stagnation of development progress.
- [Procedural Programming in OOP Languages](procedural-programming-in-oop-languages.md) <span class="info-tooltip" title="Confidence: 0.460, Strength: 0.837">ⓘ</span>
<br/>  The reliance on procedural programming techniques within object-oriented languages leads developers to create large, monolithic functions that lack proper encapsulation, ultimately contributing to class bloat as the codebase becomes increasingly difficult to manage and understand.
- [Large Pull Requests](large-pull-requests.md) <span class="info-tooltip" title="Confidence: 0.439, Strength: 0.844">ⓘ</span>
<br/>  The excessive size of a class leads to numerous changes being bundled together in a single pull request, making it impossible for reviewers to thoroughly assess the code, which ultimately results in superficial reviews and overlooked issues.
- [Monolithic Architecture Constraints](monolithic-architecture-constraints.md) <span class="info-tooltip" title="Confidence: 0.439, Strength: 0.881">ⓘ</span>
<br/>  As a class becomes excessively large and complex, it contributes to the overall heaviness of a monolithic codebase, making it increasingly cumbersome to maintain and deploy, thereby indicating the underlying issue of poor modularization and structure.
- [Inefficient Code](inefficient-code.md) <span class="info-tooltip" title="Confidence: 0.422, Strength: 0.875">ⓘ</span>
<br/>  The presence of performance bottlenecks and computational inefficiencies often indicates that a class has accumulated excessive responsibilities and complexity, leading to convoluted code paths that hinder maintainability and optimization efforts in legacy systems.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.380, Strength: 0.725">ⓘ</span>
<br/>  As a class becomes overly complex and cumbersome, it often leads to inadequate management of resources, resulting in objects and connections that are never properly deallocated, thus indicating a lack of oversight and maintenance in the code.
- [Information Fragmentation](information-fragmentation.md) <span class="info-tooltip" title="Confidence: 0.353, Strength: 0.907">ⓘ</span>
<br/>  The difficulty in understanding and maintaining an overly complex class often leads developers to document knowledge in various locations and formats, resulting in fragmented information that complicates system comprehension and support.
- [Test Debt](test-debt.md) <span class="info-tooltip" title="Confidence: 0.323, Strength: 0.957">ⓘ</span>
<br/>  A large and complex class often leads to inadequate test coverage as developers struggle to understand its functionality, resulting in accumulated quality assurance risks that manifest as test debt.
- [Monolithic Functions and Classes](monolithic-functions-and-classes.md) <span class="info-tooltip" title="Confidence: 0.314, Strength: 0.787">ⓘ</span>
<br/>  The presence of individual functions or classes that handle multiple unrelated responsibilities indicates a lack of modularity and cohesion, which often stems from a single bloated class that has not been properly refactored, leading to an entangled codebase that is challenging to maintain and understand.
- [Team Coordination Issues](team-coordination-issues.md) <span class="info-tooltip" title="Confidence: 0.311, Strength: 0.858">ⓘ</span>
<br/>  The difficulty in understanding and navigating a large, complex class leads to miscommunication and inconsistent approaches among developers, resulting in coordination issues as they struggle to effectively collaborate on the same codebase.
- [Feature Creep](feature-creep.md) <span class="info-tooltip" title="Confidence: 0.307, Strength: 0.905">ⓘ</span>
<br/>  The gradual expansion of features without proper oversight leads to an accumulation of responsibilities within a single class, resulting in a complex structure that is hard to manage and indicative of underlying maintainability issues.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○
- **Code Metrics Tools:** Use tools to measure class size, number of methods, and cyclomatic complexity.
- **Code Reviews:** Look for classes that are difficult to understand and review.
- **Static Analysis Tools:** Use tools to identify code smells, such as large classes and long methods.


## Examples
A `User` class in a social media application that is responsible for everything from authentication and authorization to profile management, news feed generation, and sending notifications. The class has over 50 methods and 1000 lines of code. When a developer wants to make a change to the news feed generation logic, they have to be careful not to break the authentication logic. It is also very difficult to write unit tests for the class because it has so many dependencies. As a result, development is slow and error-prone.
