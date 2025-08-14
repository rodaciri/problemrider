---
title: Single Entry Point Design
description: A design where all requests to a system must go through a single object
  or component.
category:
- Architecture
- Design
related_problems:
- slug: god-object-anti-pattern
  similarity: 60%
- slug: monolithic-functions-and-classes
  similarity: 55%
- slug: maintenance-bottlenecks
  similarity: 55%
- slug: monolithic-architecture-constraints
  similarity: 50%
- slug: process-design-flaws
  similarity: 50%
layout: problem
---

## Description
A single entry point design is a design where all requests to a system must go through a single object or component. This can be a problem because it can lead to a god object anti-pattern, where the single entry point becomes responsible for too many things. It can also create a maintenance bottleneck, as all changes to the system must go through the single entry point.

## Indicators ⟡
- A single class or component that is responsible for handling all incoming requests.
- The single entry point is often very large and complex.
- It is difficult to make changes to the system without touching the single entry point.
- The single entry point is a common source of bugs.

## Symptoms ▲
- **[God Object Anti-Pattern](god-object-anti-pattern.md):** The single entry point becomes a god object, with too many responsibilities.
- **[Maintenance Bottlenecks](maintenance-bottlenecks.md):** The single entry point becomes a bottleneck, as all changes must go through it.
- **[Tight Coupling Issues](tight-coupling-issues.md):** The single entry point is tightly coupled to all the other components in the system.
- **[High Bug Introduction Rate](high-bug-introduction-rate.md):** The single entry point is a common source of bugs, as it is so large and complex.

## Root Causes ▼
- **[Convenience-Driven Development](convenience-driven-development.md):** It is often easier to add a new responsibility to an existing entry point than to create a new one.
- **[Stagnant Architecture](stagnant-architecture.md):** The system does not have a clear architecture, so it is difficult to know where to add new functionality.
- **[Inexperienced Developers](inexperienced-developers.md):** Inexperienced developers may not have the skills or the experience to design a system with multiple entry points.

## Detection Methods ○
- **Code Reviews:** Look for single classes or components that are responsible for handling all incoming requests.
- **Static Analysis Tools:** Use tools to identify large classes and classes with a large number of dependencies.
- **Architectural Diagrams:** Create a diagram of the system architecture to identify single points of entry.

## Examples
A web application has a single `FrontController` servlet that is responsible for handling all incoming HTTP requests. The `FrontController` is responsible for routing requests to the appropriate handler, but it is also responsible for authentication, authorization, logging, and a number of other cross-cutting concerns. The `FrontController` is over 1000 lines of code and has dependencies on dozens of other classes. It is a major maintenance bottleneck, and it is a common source of bugs.
