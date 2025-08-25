---
title: Shared Database
description: A situation where multiple services or components share a single database.
category:
- Architecture
- Data
related_problems:
- slug: shared-dependencies
  similarity: 0.75
- slug: deployment-coupling
  similarity: 0.5
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

- [Complex Domain Model](complex-domain-model.md) <span class="info-tooltip" title="Confidence: 0.666, Strength: 0.916">ⓘ</span>
<br/>  The sharing of a single database among multiple services leads to a tightly coupled architecture, where the inherent complexity of the business domain manifests as a convoluted domain model, complicating system understanding and implementation.
- [Unbounded Data Structures](unbounded-data-structures.md) <span class="info-tooltip" title="Confidence: 0.655, Strength: 0.931">ⓘ</span>
<br/>  The sharing of a single database among multiple services can lead to unbounded data structures as each service may inadvertently contribute to excessive data growth without coordinated management, resulting in memory exhaustion and degraded performance across the system.
- [Legacy Skill Shortage](legacy-skill-shortage.md) <span class="info-tooltip" title="Confidence: 0.648, Strength: 0.929">ⓘ</span>
<br/>  The reliance on a shared database across multiple services increases complexity and interdependencies, making it difficult for developers lacking experience with legacy technologies to effectively maintain or troubleshoot the system, thereby highlighting the skill shortage as a critical barrier to system stability.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.614, Strength: 0.922">ⓘ</span>
<br/>  The sharing of a single database among multiple services can lead to unreleased resources, as improper management of database connections and transactions often results in neglected deallocation of system resources, which is a common issue in legacy systems where resource handling is not rigorously enforced.
- [Data Migration Integrity Issues](data-migration-integrity-issues.md) <span class="info-tooltip" title="Confidence: 0.609, Strength: 0.919">ⓘ</span>
<br/>  The reliance on a single database by multiple services creates tightly coupled dependencies that can lead to schema mismatches and format incompatibilities during data migration, thereby compromising data integrity and consistency as a direct consequence of those shared interactions.
- [Unbounded Data Growth](unbounded-data-growth.md) <span class="info-tooltip" title="Confidence: 0.572, Strength: 0.868">ⓘ</span>
<br/>  When multiple services or components rely on a single database, the lack of isolation and governance often leads to unbounded data growth, as there are insufficient mechanisms in place to manage data retention, resulting in unchecked accumulation of information.
- [Knowledge Silos](knowledge-silos.md) <span class="info-tooltip" title="Confidence: 0.564, Strength: 0.917">ⓘ</span>
<br/>  When multiple services rely on a single database, it can lead to fragmented access and expertise, as team members focus on their specific areas without sharing insights, creating knowledge silos that inhibit collaboration and hinder overall system understanding.
- [Monolithic Architecture Constraints](monolithic-architecture-constraints.md) <span class="info-tooltip" title="Confidence: 0.451, Strength: 0.954">ⓘ</span>
<br/>  When multiple services rely on a single database, it often leads to tightly coupled code and shared state, resulting in a large, complex codebase that is increasingly challenging to maintain, scale, and deploy as changes in one part of the system can inadvertently impact others.
- [Cross-System Data Synchronization Problems](cross-system-data-synchronization-problems.md) <span class="info-tooltip" title="Confidence: 0.427, Strength: 0.860">ⓘ</span>
<br/>  The reliance on a single database for multiple services leads to synchronization challenges and data consistency issues, particularly during migrations, as changes in one component can inadvertently affect others, resulting in potential data corruption.
- [Monolithic Functions and Classes](monolithic-functions-and-classes.md) <span class="info-tooltip" title="Confidence: 0.424, Strength: 0.918">ⓘ</span>
<br/>  The sharing of a single database often leads to monolithic functions and classes because developers are compelled to tightly couple diverse business logic and data access patterns to accommodate interdependencies, resulting in complex and unwieldy code that is difficult to modify or understand.
- [Team Dysfunction](team-dysfunction.md) <span class="info-tooltip" title="Confidence: 0.413, Strength: 0.909">ⓘ</span>
<br/>  The reliance on a single database creates competition and conflicting priorities among teams, leading to communication breakdowns and diminished collaboration, as they struggle to align their goals and manage shared data dependencies effectively.
- [Ripple Effect of Changes](ripple-effect-of-changes.md) <span class="info-tooltip" title="Confidence: 0.408, Strength: 0.920">ⓘ</span>
<br/>  The reliance on a single database by multiple services leads to tightly coupled components, where a minor modification in one service necessitates widespread adjustments across others due to shared data dependencies, thus manifesting as a ripple effect of changes.
- [Inadequate Test Data Management](inadequate-test-data-management.md) <span class="info-tooltip" title="Confidence: 0.398, Strength: 0.926">ⓘ</span>
<br/>  The reliance on a single database for multiple services often results in the use of outdated or unrealistic test data, as teams prioritize immediate access over maintaining comprehensive and relevant datasets, leading to testing processes that fail to replicate real-world usage.
- [Poor Domain Model](poor-domain-model.md) <span class="info-tooltip" title="Confidence: 0.392, Strength: 0.925">ⓘ</span>
<br/>  The reliance on a single database by multiple services often leads to a fragmented understanding of core business concepts, resulting in a poorly structured domain model that reflects the shared data's complexity and inconsistencies.
- [Feature Creep](feature-creep.md) <span class="info-tooltip" title="Confidence: 0.387, Strength: 0.960">ⓘ</span>
<br/>  The reliance on a single database by multiple services often leads to uncoordinated feature expansions, as developers attempt to accommodate varied requirements without proper architecture, resulting in a complex and unwieldy system.
- [Global State and Side Effects](global-state-and-side-effects.md) <span class="info-tooltip" title="Confidence: 0.387, Strength: 0.917">ⓘ</span>
<br/>  The reliance on a single database by multiple services leads to the use of global variables and functions with hidden side effects, as changes in one component can unpredictably affect others, complicating code behavior and making it challenging to maintain and understand the system.
- [Code Duplication](code-duplication.md) <span class="info-tooltip" title="Confidence: 0.386, Strength: 0.932">ⓘ</span>
<br/>  The reliance on a single database for multiple services often leads to code duplication as developers create similar data access and manipulation logic in different components to accommodate shared data structures, making maintenance complex and increasing the risk of inconsistencies.
- [Technology Isolation](technology-isolation.md) <span class="info-tooltip" title="Confidence: 0.385, Strength: 0.936">ⓘ</span>
<br/>  The reliance on a single database for multiple services limits the adoption of modern, modular architectures, leading to technology isolation as teams struggle to integrate contemporary tools and practices within the outdated system framework.
- [Index Fragmentation](index-fragmentation.md) <span class="info-tooltip" title="Confidence: 0.384, Strength: 0.913">ⓘ</span>
<br/>  When multiple services or components interact with a single database, the frequent and varied data modifications lead to disorganized indexes, serving as an indicator of inefficiencies arising from the shared environment.
- [Difficult to Test Code](difficult-to-test-code.md) <span class="info-tooltip" title="Confidence: 0.372, Strength: 0.911">ⓘ</span>
<br/>  The reliance on a single database for multiple components creates tight coupling and interdependencies, making it difficult to isolate and test individual code segments without the risk of affecting others, thereby indicating the challenges of effective testing in the system.
- [System Integration Blindness](system-integration-blindness.md) <span class="info-tooltip" title="Confidence: 0.371, Strength: 0.921">ⓘ</span>
<br/>  When multiple services rely on a single database, the lack of clear boundaries and dependencies can lead to components functioning properly in isolation but failing to integrate, highlighting an incomplete understanding of how shared data impacts overall system behavior.
- [Duplicated Research Effort](duplicated-research-effort.md) <span class="info-tooltip" title="Confidence: 0.367, Strength: 0.883">ⓘ</span>
<br/>  The reliance on a single database often leads to fragmented access to information, causing team members to unknowingly duplicate research efforts instead of collaborating effectively based on shared knowledge.
- [False Sharing](false-sharing.md) <span class="info-tooltip" title="Confidence: 0.362, Strength: 0.891">ⓘ</span>
<br/>  When multiple services interact with a shared database, the frequent and concurrent access to closely located data can lead to inefficiencies in memory management, as changes by one service can cause cache invalidation for others, resulting in performance degradation indicative of contention issues within the system.
- [Information Fragmentation](information-fragmentation.md) <span class="info-tooltip" title="Confidence: 0.361, Strength: 0.919">ⓘ</span>
<br/>  The reliance on a single database by multiple services often leads to information being stored in various formats and locations, resulting in fragmented critical system knowledge that is difficult to access and maintain effectively.
- [Inadequate Integration Tests](inadequate-integration-tests.md) <span class="info-tooltip" title="Confidence: 0.359, Strength: 0.941">ⓘ</span>
<br/>  The reliance on a single database for multiple services often leads to inadequate integration tests, as the complexity and interdependencies of shared data models make it challenging to simulate and validate the interactions accurately, resulting in undetected integration failures.
- [Inefficient Database Indexing](inefficient-database-indexing.md) <span class="info-tooltip" title="Confidence: 0.351, Strength: 0.936">ⓘ</span>
<br/>  When multiple services rely on a single database, the lack of tailored indexing for specific query patterns often leads to inefficient data retrieval, as competing access needs can prevent optimal indexing strategies from being implemented, resulting in slow performance and full-table scans as a clear indicator of underlying resource contention.
- [Test Debt](test-debt.md) <span class="info-tooltip" title="Confidence: 0.350, Strength: 0.908">ⓘ</span>
<br/>  The reliance on a single database among multiple services complicates testing due to intertwined dependencies, resulting in inadequate quality assurance practices that contribute to test debt and ultimately hinder development velocity.
- [Duplicated Work](duplicated-work.md) <span class="info-tooltip" title="Confidence: 0.345, Strength: 0.897">ⓘ</span>
<br/>  The reliance on a single database can lead to multiple team members unknowingly accessing and working on the same data sets or tasks, resulting in duplicated efforts and conflicting changes as they lack clear visibility into each other's activities.
- [Single Entry Point Design](single-entry-point-design.md) <span class="info-tooltip" title="Confidence: 0.343, Strength: 0.909">ⓘ</span>
<br/>  The reliance on a single object to handle all requests often arises in legacy systems due to the need for centralized access and control over a shared database, indicating an underlying issue of coupling and tight integration among components.
- [Cascade Delays](cascade-delays.md) <span class="info-tooltip" title="Confidence: 0.341, Strength: 0.932">ⓘ</span>
<br/>  The reliance on a single database for multiple services leads to bottlenecks and resource contention, causing delays in one service to propagate quickly to others that depend on the same data, ultimately resulting in missed deadlines across projects.
- [Poor Interfaces Between Applications](poor-interfaces-between-applications.md) <span class="info-tooltip" title="Confidence: 0.336, Strength: 0.912">ⓘ</span>
<br/>  The reliance on a single database often results in poorly defined interfaces between applications, as teams may bypass proper integration protocols to accommodate shared access, leading to fragile connections and inconsistent data across the system.
- [Knowledge Dependency](knowledge-dependency.md) <span class="info-tooltip" title="Confidence: 0.330, Strength: 0.938">ⓘ</span>
<br/>  The reliance on a single database can create bottlenecks in knowledge transfer and decision-making, as team members often depend on a few experienced individuals to interpret and manage the complexities of shared data access, leading to prolonged knowledge dependency.
- [Resource Contention](resource-contention.md) <span class="info-tooltip" title="Confidence: 0.325, Strength: 0.901">ⓘ</span>
<br/>  When multiple services concurrently access a single database, they can create bottlenecks that lead to increased resource contention as each service competes for the limited CPU, memory, or I/O bandwidth, thereby indicating underlying issues with shared database architecture in legacy systems.
- [Inconsistent Quality](inconsistent-quality.md) <span class="info-tooltip" title="Confidence: 0.317, Strength: 0.910">ⓘ</span>
<br/>  The sharing of a single database among multiple services often leads to varying levels of maintenance and oversight, resulting in some components being updated or optimized while others are neglected, thus causing inconsistent quality across the system.
- [Tight Coupling Issues](tight-coupling-issues.md) <span class="info-tooltip" title="Confidence: 0.311, Strength: 0.959">ⓘ</span>
<br/>  The reliance on a single database for multiple services leads to tightly coupled components, as changes in one service's data structure necessitate corresponding adjustments in others, thereby hindering flexibility and maintainability in legacy systems.
- [Scaling Inefficiencies](scaling-inefficiencies.md) <span class="info-tooltip" title="Confidence: 0.310, Strength: 0.968">ⓘ</span>
<br/>  When multiple services rely on a single database, the interdependence created hinders the ability to scale components independently, as any change or demand in one service can negatively impact the overall performance of the shared database, thus manifesting scaling inefficiencies as a direct symptom of this architectural choice.
- [Unused Indexes](unused-indexes.md) <span class="info-tooltip" title="Confidence: 0.310, Strength: 0.880">ⓘ</span>
<br/>  When multiple services rely on a single database, they often create a variety of indexes for their specific query needs, leading to the accumulation of unused indexes that indicate inefficient database management and resource allocation.
- [Quality Degradation](quality-degradation.md) <span class="info-tooltip" title="Confidence: 0.304, Strength: 0.930">ⓘ</span>
<br/>  The reliance on a single database by multiple services leads to intertwined data dependencies and complexities, resulting in increased technical debt and insufficient quality practices that manifest as a gradual decline in system performance and reliability.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○
- **Architectural Diagrams:** Create a diagram of the system architecture to identify which services or components are sharing a single database.
- **Database Schema Analysis:** Analyze the database schema to identify which tables are being used by multiple services or components.
- **Developer Surveys:** Ask developers if they feel like they are able to change the database schema without affecting other services or components.


## Examples
A company has a large, monolithic e-commerce application. The application is composed of a number of different services, including a product catalog, a shopping cart, and a payment gateway. All of the services share a single database. When the development team wants to make a change to the database schema for the product catalog, they have to be careful not to break the shopping cart or the payment gateway. This makes it difficult to make changes to the database, and it often leads to problems.
