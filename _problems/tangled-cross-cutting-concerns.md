---
title: Tangled Cross-Cutting Concerns
description: A situation where cross-cutting concerns, such as logging, security,
  and transactions, are tightly coupled with the business logic.
category:
- Code Quality
- Architecture
related_problems:
- slug: legacy-business-logic-extraction-difficulty
  similarity: 0.559
- slug: spaghetti-code
  similarity: 0.559
- slug: system-integration-blindness
  similarity: 0.532
- slug: tight-coupling-issues
  similarity: 0.527
- slug: inadequate-integration-tests
  similarity: 0.512
layout: problem
---

## Description
Tangled cross-cutting concerns is a situation where cross-cutting concerns, such as logging, security, and transactions, are tightly coupled with the business logic. This is a common problem in monolithic architectures, where there is no clear separation of concerns. Tangled cross-cutting concerns can lead to a number of problems, including code duplication, tight coupling issues, and difficult-to-test code.

## Indicators ⟡
- The same code for logging, security, or transactions is repeated in multiple places.
- It is not possible to change the implementation of a cross-cutting concern without affecting the business logic.
- It is not possible to test the business logic without also testing the cross-cutting concerns.
- The code is difficult to understand and maintain.

## Symptoms ▲
- **[Code Duplication](code-duplication.md):** The same code for cross-cutting concerns is repeated in multiple places.
- **[Tight Coupling Issues](tight-coupling-issues.md):** The business logic is tightly coupled to the cross-cutting concerns.
- **[Difficult to Test Code](difficult-to-test-code.md):** It is difficult to test the business logic in isolation from the cross-cutting concerns.
- **[Lower Code Quality](lower-code-quality.md):** The code quality suffers because it is difficult to understand and maintain.

## Root Causes ▼
- **[Monolithic Architecture Constraints](monolithic-architecture-constraints.md):** The system is designed as a monolith, with no clear separation of concerns.
- **[Convenience-Driven Development](convenience-driven-development.md):** It is often easier to add cross-cutting concerns directly to the business logic than to create a separate module for them.
- **[Stagnant Architecture](stagnant-architecture.md):** The system does not have a clear architecture, so it is difficult to know how to separate the cross-cutting concerns from the business logic.
- **[Inexperienced Developers](inexperienced-developers.md):** Inexperienced developers may not have the skills or the experience to design a system with a clear separation of concerns.

## Detection Methods ○
- **Code Reviews:** Look for code where cross-cutting concerns are mixed in with the business logic.
- **Static Analysis Tools:** Use tools to identify duplicated code and other code smells.
- **Architectural Diagrams:** Create a diagram of the system architecture to identify where the cross-cutting concerns are located.

## Examples
A company has a large, monolithic e-commerce application. The application has a number of different services, including a product catalog, a shopping cart, and a payment gateway. The code for logging, security, and transactions is duplicated in all of the services. This makes it difficult to change the implementation of a cross-cutting concern, and it also makes it difficult to test the business logic in isolation. As a result, the code is difficult to maintain, and the code quality is poor.
