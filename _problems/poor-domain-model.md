---
title: Poor Domain Model
description: Core business concepts are poorly understood or reflected in the system,
  leading to fragile logic and miscommunication
category:
- Design
- Communication
- Technical
related_problems:
- slug: complex-domain-model
  similarity: 0.75
- slug: poorly-defined-responsibilities
  similarity: 0.55
- slug: poor-interfaces-between-applications
  similarity: 0.55
- slug: legacy-business-logic-extraction-difficulty
  similarity: 0.5
- slug: database-schema-design-problems
  similarity: 0.5
layout: problem
---

## Description

A poor domain model occurs when the software system fails to accurately represent the real-world business concepts, relationships, and rules it is meant to support. This leads to a fundamental disconnect between how the business operates and how the software models that operation. The resulting system becomes fragile, difficult to modify, and prone to bugs because the code structure doesn't align with business reality. This problem is especially critical in legacy modernization where existing poor models often get replicated rather than improved.

## Indicators ⟡

- Business stakeholders and developers frequently talk past each other using different terminology
- Database schemas that don't reflect natural business relationships
- Business rules scattered throughout the codebase rather than centralized in domain logic
- Frequent requests for "simple" changes that require touching many unrelated parts of the system
- Domain experts expressing confusion about how the system represents their work
- New team members struggling to understand the connection between code and business processes

## Symptoms ▲

- **[High Bug Introduction Rate](high-bug-introduction-rate.md):** High bug rates in business logic implementations
- **[Data Migration Integrity Issues](data-migration-integrity-issues.md):** Frequent data inconsistencies that require manual correction
- **[Slow Feature Development](slow-feature-development.md):** Difficulty implementing new business rules or modifying existing ones
- **[Workaround Culture](workaround-culture.md):** Business processes that require workarounds because the system can't support them naturally
- **[Inconsistent Behavior](inconsistent-behavior.md):** Reports and analytics that produce confusing or incorrect results
- **[Integration Difficulties](integration-difficulties.md):** Integration challenges when connecting to other systems with different domain models
- **[Difficult Developer Onboarding](difficult-developer-onboarding.md):** Onboarding difficulties for both technical and business team members
- **[Stakeholder-Developer Communication Gap](stakeholder-developer-communication-gap.md):** Communication problems due to misaligned mental models
- **[Legacy Business Logic Extraction Difficulty](legacy-business-logic-extraction-difficulty.md):** Challenges understanding and extracting business rules from poorly modeled code
- **[Complex and Obscure Logic](complex-and-obscure-logic.md):** Business logic that is cryptic and difficult to understand
- **[Misaligned Deliverables](misaligned-deliverables.md):** Software that doesn't meet business expectations due to modeling mismatches
- **[High Maintenance Costs](high-maintenance-costs.md):** Expensive maintenance due to frequent business logic changes
- **[Database Schema Design Problems](database-schema-design-problems.md):** Database structures that don't support business operations efficiently
- **[Debugging Difficulties](debugging-difficulties.md):** Complex troubleshooting due to unclear business logic representation

## Root Causes ▼

- **[Stakeholder-Developer Communication Gap](stakeholder-developer-communication-gap.md):** Insufficient collaboration between domain experts and development teams during design
- **[Knowledge Gaps](knowledge-gaps.md):** Technical teams making assumptions about business processes without validation
- **[High Technical Debt](high-technical-debt.md):** Legacy systems that evolved organically without proper domain modeling
- **[Implementation Starts Without Design](implementation-starts-without-design.md):** Pressure to start coding before fully understanding the business domain
- **[Insufficient Design Skills](insufficient-design-skills.md):** Lack of domain-driven design practices and expertise
- **[Communication Breakdown](communication-breakdown.md):** Business stakeholders unable to articulate their mental models clearly
- **[Database Schema Design Problems](database-schema-design-problems.md):** Database-first design approaches that prioritize technical convenience over business logic
- **[Time Pressure](time-pressure.md):** Inadequate time allocated for domain discovery and modeling activities
- **[Procedural Programming in OOP Languages](procedural-programming-in-oop-languages.md):** Programming approaches that don't support proper domain modeling
- **[Stakeholder-Developer Communication Gap](stakeholder-developer-communication-gap.md):** No common vocabulary between business and technical teams
- **[Team Silos](team-silos.md):** Organizational silos that prevent effective domain knowledge transfer
- **[Planning Dysfunction](planning-dysfunction.md):** Lack of planning for domain modeling and business analysis activities
- **[Short-Term Focus](short-term-focus.md):** Focus on immediate delivery over understanding business domain
- **[Inexperienced Developers](inexperienced-developers.md):** Development teams without experience in domain modeling
- **[Copy-Paste Programming](copy-paste-programming.md):** Replicating poor domain models from legacy systems without improvement

## Detection Methods ○

- Conduct domain modeling workshops with business experts and development teams
- Review code for business logic scattered across multiple layers or modules
- Analyze bug patterns to identify areas where business rules are poorly implemented
- Map business processes to code structures to identify misalignments
- Interview domain experts about how well the system reflects their mental models
- Review database schemas for tables and relationships that don't map to business concepts
- Examine integration points where domain model mismatches cause translation complexity

## Examples

An e-commerce company's order management system treats "Order" as a simple data structure with status fields, rather than modeling the complex business reality where orders go through distinct states (placed, confirmed, fulfilled, shipped, delivered) with specific business rules governing transitions. This leads to scenarios where orders can be marked as "shipped" before being "confirmed," or "delivered" without being "fulfilled." Business users constantly encounter data that doesn't make sense, requiring manual intervention. When the company tries to add new features like partial shipments or order modifications, they discover that the poor domain model makes these changes extremely difficult, requiring extensive refactoring across multiple systems rather than simple business rule additions.