---
title: Single Entry Point Design
description: A design where all requests to a system must go through a single object
  or component.
category:
- Architecture
related_problems:
- slug: god-object-anti-pattern
  similarity: 0.6
- slug: monolithic-functions-and-classes
  similarity: 0.6
- slug: maintenance-bottlenecks
  similarity: 0.55
- slug: monolithic-architecture-constraints
  similarity: 0.5
- slug: process-design-flaws
  similarity: 0.5
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

- [Legacy Skill Shortage](legacy-skill-shortage.md) <span class="info-tooltip" title="Confidence: 0.372, Strength: 0.621">ⓘ</span>
<br/>  The reliance on a single component for all system requests amplifies the impact of a legacy skill shortage, as the limited pool of developers familiar with that component leads to increased maintenance bottlenecks and potential failures.

## Root Causes ▼

- [Shared Dependencies](shared-dependencies.md) <span class="info-tooltip" title="Confidence: 0.348, Strength: 0.883">ⓘ</span>
<br/>  The reliance on shared libraries and frameworks among multiple components often leads to a single entry point design as a means to manage and coordinate access to these dependencies, simplifying integration and reducing the risk of version conflicts in legacy systems.
- [Shared Database](shared-database.md) <span class="info-tooltip" title="Confidence: 0.343, Strength: 0.909">ⓘ</span>
<br/>  The requirement for all requests to funnel through a single component arises from the need to manage concurrent access and data integrity in a scenario where multiple services rely on a shared database, leading to a tightly coupled architecture that can hinder scalability and flexibility.

## Detection Methods ○
- **Code Reviews:** Look for single classes or components that are responsible for handling all incoming requests.
- **Static Analysis Tools:** Use tools to identify large classes and classes with a large number of dependencies.
- **Architectural Diagrams:** Create a diagram of the system architecture to identify single points of entry.


## Examples
A web application has a single `FrontController` servlet that is responsible for handling all incoming HTTP requests. The `FrontController` is responsible for routing requests to the appropriate handler, but it is also responsible for authentication, authorization, logging, and a number of other cross-cutting concerns. The `FrontController` is over 1000 lines of code and has dependencies on dozens of other classes. It is a major maintenance bottleneck, and it is a common source of bugs.
