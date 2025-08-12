---
title: "Strangler Fig Pattern Failures"
description: "Incremental modernization using the strangler fig pattern stalls due to complex interdependencies and data consistency challenges"
category: ['Technical', 'Design', 'Migration']
related_problems: [cross-system-data-synchronization-problems, poor-interfaces-between-applications, implementation-starts-without-design]
layout: problem
---

## Description

Strangler fig pattern failures occur when attempts to gradually replace legacy system components with modern alternatives stall or fail due to underestimated complexity in system boundaries, data consistency requirements, and interdependencies. The strangler fig pattern, intended to enable low-risk incremental modernization, becomes a source of increased complexity and technical debt when the "strangling" process cannot be completed, leaving organizations with hybrid systems that are more complex than either the original legacy system or a complete replacement would have been.

## Indicators ⟡

- Strangler fig implementation projects that consistently miss deadlines and milestones
- Difficulty identifying clean boundaries between legacy and new system components
- Data synchronization complexity between legacy and new components that exceeds expectations
- New system components that require increasingly complex integration with remaining legacy parts
- Performance degradation as requests flow through both legacy and new system layers
- Team estimates for completing the "strangling" process that keep extending
- Growing operational complexity from managing both legacy and new system components simultaneously

## Symptoms ▲

- **[Operational Overhead](operational-overhead.md):** Increased system complexity and operational overhead compared to the original legacy system
- **[Cross-System Data Synchronization Problems](cross-system-data-synchronization-problems.md):** Data consistency issues between legacy and new components that require constant monitoring
- **[Slow Application Performance](slow-application-performance.md):** Performance bottlenecks at the integration points between old and new system components
- **[Slow Development Velocity](slow-development-velocity.md):** Development velocity that decreases as more legacy components are replaced
- **[High Technical Debt](high-technical-debt.md):** Technical debt accumulation in integration layers and data synchronization mechanisms
- **[Poor User Experience (UX) Design](poor-user-experience-ux-design.md):** User experience degradation due to inconsistencies between legacy and new system behaviors
- **[Incomplete Projects](incomplete-projects.md):** Modernization projects that appear successful initially but stall at 30-70% completion
- **[Stagnant Architecture](stagnant-architecture.md):** Abandoned modernization efforts that leave hybrid systems in production indefinitely
- **[Data Migration Integrity Issues](data-migration-integrity-issues.md):** Data corruption or inconsistency problems during the migration process
- **[Integration Difficulties](integration-difficulties.md):** Complex integration challenges between legacy and new system components
- **[Debugging Difficulties](debugging-difficulties.md):** Increased difficulty troubleshooting issues across hybrid system boundaries
- **[High Maintenance Costs](high-maintenance-costs.md):** Higher maintenance costs due to supporting both legacy and new system components
- **[Budget Overruns](budget-overruns.md):** Project costs that exceed estimates due to unexpected integration complexity

## Root Causes ▼

- **[Planning Dysfunction](planning-dysfunction.md):** Insufficient analysis of legacy system boundaries and internal dependencies before starting
- **[Knowledge Gaps](knowledge-gaps.md):** Lack of experience with strangler fig pattern implementation and common failure modes
- **[High Coupling and Low Cohesion](high-coupling-low-cohesion.md):** Legacy systems with deeply interconnected components that resist clean separation
- **[Time Pressure](time-pressure.md):** Time pressure that leads to shortcuts in boundary analysis and integration design
- **[Frequent Changes to Requirements](frequent-changes-to-requirements.md):** Business requirements that change during the modernization process, affecting system boundaries
- **[High Technical Debt](high-technical-debt.md):** Technical debt in legacy systems that makes clean component extraction extremely difficult
- **[Complex and Obscure Logic](complex-and-obscure-logic.md):** Underestimation of data consistency and synchronization complexity in hybrid system states
- **[Inadequate Configuration Management](inadequate-configuration-management.md):** Inadequate tooling and infrastructure for managing complex data synchronization scenarios
- **[Implementation Starts Without Design](implementation-starts-without-design.md):** Beginning strangler fig implementation without proper architectural analysis
- **[Insufficient Design Skills](insufficient-design-skills.md):** Lack of expertise in designing clean system boundaries and migration strategies
- **[Legacy System Documentation Archaeology](legacy-system-documentation-archaeology.md):** Poor understanding of legacy system internals making boundary identification difficult
- **[Schema Evolution Paralysis](schema-evolution-paralysis.md):** Database schema constraints that prevent clean component separation
- **[Poor Interfaces Between Applications](poor-interfaces-between-applications.md):** Existing poor integration patterns that complicate the strangler fig approach

## Detection Methods ○

- Track progress metrics for strangler fig implementation against original timeline estimates
- Monitor data consistency issues and synchronization failures between system components
- Measure system complexity metrics before and during the strangling process
- Assess team confidence levels and estimate accuracy for completing remaining modernization work
- Analyze performance impacts and operational overhead of the hybrid system state
- Review technical debt accumulation in integration and synchronization code
- Survey development teams about challenges and blockers in continuing the modernization
- Evaluate whether the current hybrid system provides better value than the original legacy system

## Examples

A retail company begins modernizing their inventory management system using the strangler fig pattern, starting with the product catalog component. The new catalog service works well initially, but as they attempt to replace the pricing engine, they discover that pricing logic is deeply intertwined with inventory allocation, order processing, and promotional systems. Maintaining data consistency between the new catalog, legacy pricing, and various downstream systems requires complex real-time synchronization that frequently fails during peak traffic. Each additional component replacement exposes new dependencies that weren't apparent in the original system analysis. After 18 months, the team has replaced 40% of the legacy system but estimates that completing the modernization will take another 3 years due to increasing complexity. The hybrid system now requires more operational overhead than the original legacy system, performs worse during peak loads, and has introduced data consistency bugs that didn't exist before. The organization faces the difficult choice of abandoning the modernization effort or committing to years more work with uncertain outcomes.