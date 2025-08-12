---
title: "Shared Dependencies"
description: "A situation where multiple components or services share a common set of libraries and frameworks."
category: ['Architecture', 'Deployment']
related_problems: ['deployment-coupling', 'technology-lock-in', 'dependency-version-conflicts']
layout: problem
---

## Description
Shared dependencies is a situation where multiple components or services share a common set of libraries and frameworks. This is a common problem in monolithic architectures, where all the components are tightly coupled and deployed as a single unit. Shared dependencies can lead to a number of problems, including deployment coupling, technology lock-in, and dependency version conflicts.

## Indicators ⟡
- Multiple components or services are using the same libraries and frameworks.
- It is not possible to update a library or framework for one component or service without affecting the others.
- There are often dependency version conflicts between different components or services.
- The system is difficult to maintain and extend.

## Symptoms ▲
- **[Deployment Coupling](deployment-coupling.md):** It is not possible to deploy one component or service without affecting the others.
- **[Technology Lock-In](technology-lock-in.md):** It is difficult to switch to a new technology because all the components and services are dependent on the same set of libraries and frameworks.
- **[Dependency Version Conflicts](dependency-version-conflicts.md):** There are often dependency version conflicts between different components or services.
- **[High Maintenance Costs](high-maintenance-costs.md):** The system is expensive to maintain because it is difficult to update the libraries and frameworks.

## Root Causes ▼
- **[Monolithic Architecture Constraints](monolithic-architecture-constraints.md):** The system is designed as a monolith, with all the components tightly coupled and sharing a common set of libraries and frameworks.
- **[Convenience-Driven Development](convenience-driven-development.md):** It is often easier to have all the components or services share a common set of libraries and frameworks than to create a separate set for each one.
- **[Stagnant Architecture](stagnant-architecture.md):** The system does not have a clear architecture, so it is difficult to know how to manage the dependencies.
- **[Inexperienced Developers](inexperienced-developers.md):** Inexperienced developers may not have the skills or the experience to design a system with a clear dependency management strategy.

## Detection Methods ○
- **Dependency Analysis Tools:** Use tools to analyze the dependencies of the system to identify which libraries and frameworks are being shared by multiple components or services.
- **Developer Surveys:** Ask developers if they feel like they are able to update the libraries and frameworks for their components or services without affecting others.
- **Build and Test Log Analysis:** Analyze the build and test logs to identify dependency version conflicts.

## Examples
A company has a large, monolithic e-commerce application. The application is composed of a number of different components, including a product catalog, a shopping cart, and a payment gateway. All of the components share a common set of libraries and frameworks. When the development team wants to update a library for the product catalog, they have to be careful not to break the shopping cart or the payment gateway. This makes it difficult to update the libraries, and it often leads to problems.
