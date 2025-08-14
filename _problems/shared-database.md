---
title: Shared Database
description: A situation where multiple services or components share a single database.
category:
- Architecture
- Data
related_problems:
- slug: shared-dependencies
  similarity: 0.567
layout: problem
---

## Description
A shared database is a situation where multiple services or components share a single database. This is a common problem in monolithic architectures, where all the components are tightly coupled and deployed as a single unit. A shared database can lead to a number of problems, including deployment coupling, scaling inefficiencies, and tight coupling issues.

## Indicators ⟡
- Multiple services or components are reading from and writing to the same database.
- It is not possible to change the database schema without affecting multiple services or components.
- It is not possible to scale the database for one service or component without affecting the others.
- The database is a single point of failure for the entire system.

## Symptoms ▲
- **[Deployment Coupling](deployment-coupling.md):** It is not possible to deploy one service or component without affecting the others.
- **[Scaling Inefficiencies](scaling-inefficiencies.md):** It is not possible to scale one service or component without affecting the others.
- **[Tight Coupling Issues](tight-coupling-issues.md):** The services or components are tightly coupled, which makes it difficult to change them independently.
- **[Single Points of Failure](single-points-of-failure.md):** The database is a single point of failure for the entire system.

## Root Causes ▼
- **[Monolithic Architecture Constraints](monolithic-architecture-constraints.md):** The system is designed as a monolith, with all the components tightly coupled and sharing a single database.
- **[Convenience-Driven Development](convenience-driven-development.md):** It is often easier to have all the services or components share a single database than to create a separate database for each one.
- **[Stagnant Architecture](stagnant-architecture.md):** The system does not have a clear architecture, so it is difficult to know how to design the database.
- **[Inexperienced Developers](inexperienced-developers.md):** Inexperienced developers may not have the skills or the experience to design a system with multiple databases.

## Detection Methods ○
- **Architectural Diagrams:** Create a diagram of the system architecture to identify which services or components are sharing a single database.
- **Database Schema Analysis:** Analyze the database schema to identify which tables are being used by multiple services or components.
- **Developer Surveys:** Ask developers if they feel like they are able to change the database schema without affecting other services or components.

## Examples
A company has a large, monolithic e-commerce application. The application is composed of a number of different services, including a product catalog, a shopping cart, and a payment gateway. All of the services share a single database. When the development team wants to make a change to the database schema for the product catalog, they have to be careful not to break the shopping cart or the payment gateway. This makes it difficult to make changes to the database, and it often leads to problems.
