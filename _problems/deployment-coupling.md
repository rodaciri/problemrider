---
title: Deployment Coupling
description: A situation where multiple components or services must be deployed together,
  even if only one of them has changed.
category:
- Architecture
- Deployment
related_problems:
- slug: shared-dependencies
  similarity: 0.659
- slug: tight-coupling-issues
  similarity: 0.628
- slug: deployment-environment-inconsistencies
  similarity: 0.622
- slug: complex-deployment-process
  similarity: 0.602
- slug: system-integration-blindness
  similarity: 0.587
layout: problem
---

## Description
Deployment coupling is a situation where multiple components or services must be deployed together, even if only one of them has changed. This is a common problem in monolithic architectures, where all the components are tightly coupled and deployed as a single unit. Deployment coupling can lead to long release cycles, large and risky releases, and a great deal of anxiety for the development team.

## Indicators ⟡
- A small change to one component requires the entire system to be redeployed.
- It is not possible to deploy different components of the system independently.
- The deployment process is complex and error-prone.
- The development team is afraid to make changes to the system because they are afraid of breaking something.

## Symptoms ▲
- **[Long Release Cycles](long-release-cycles.md):** It takes a long time to deploy a new version of the software because the entire system must be redeployed.
- **[Large, Risky Releases](large-risky-releases.md):** Releases are infrequent, large, and complex because they include changes to multiple components.
- **[Release Anxiety](release-anxiety.md):** The development team is anxious and stressed about deployments because they are so large and risky.
- **[Release Instability](release-instability.md):** Releases frequently fail and require a rollback because of the complexity of deploying the entire system at once.

## Root Causes ▼
- **[Monolithic Architecture Constraints](monolithic-architecture-constraints.md):** The system is designed as a monolith, with all the components tightly coupled.
- **[Shared Database](shared-database.md):** The components share a single database, which makes it difficult to deploy them independently.
- **[Shared Dependencies](shared-dependencies.md):** The components share a common set of libraries and frameworks, which makes it difficult to update them independently.
- **[Complex Deployment Process](complex-deployment-process.md):** There is no clear, defined process for deploying software, which makes it difficult to deploy components independently.

## Detection Methods ○
- **Deployment Process Mapping:** Map out the steps in the deployment process to identify bottlenecks and areas for improvement.
- **Component Dependency Analysis:** Analyze the dependencies between components to identify which components can be deployed independently.
- **Developer Surveys:** Ask developers if they feel like they are able to deploy their changes quickly and safely.

## Examples
A company has a large, monolithic e-commerce application. The application is composed of a number of different components, including a product catalog, a shopping cart, and a payment gateway. The components are all tightly coupled and deployed as a single unit. When the development team wants to make a change to the product catalog, they must redeploy the entire application. This is a time-consuming and risky process, and it often leads to problems. As a result, the company is only able to release new software once a month.
