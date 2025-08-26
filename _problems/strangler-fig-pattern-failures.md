---
title: Strangler Fig Pattern Failures
description: Incremental modernization using the strangler fig pattern stalls due
  to complex interdependencies and data consistency challenges
category:
- Architecture
- Code
- Operations
related_problems:
- slug: modernization-strategy-paralysis
  similarity: 0.65
- slug: second-system-effect
  similarity: 0.55
- slug: cascade-failures
  similarity: 0.55
- slug: modernization-roi-justification-failure
  similarity: 0.55
- slug: stagnant-architecture
  similarity: 0.55
- slug: maintenance-paralysis
  similarity: 0.55
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
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.476, Strength: 0.668">ⓘ</span>
<br/>  The failure to modernize incrementally leads to increased complexity and delays in service responses, resulting in upstream timeouts as dependent services are unable to receive timely data from the legacy components.
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.440, Strength: 0.641">ⓘ</span>
<br/>  The stalling of incremental modernization due to complex interdependencies and data consistency issues leads to a lack of clarity and stability in project goals, prompting constant changes to requirements as stakeholders attempt to adapt to the evolving challenges.
- [Complex Domain Model](complex-domain-model.md) <span class="info-tooltip" title="Confidence: 0.431, Strength: 0.645">ⓘ</span>
<br/>  The inherent complexity of the business domain leads to intricate interdependencies in the legacy system, making it difficult to implement incremental modernization effectively, thereby manifesting as stalled progress in the modernization efforts.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.386, Strength: 0.653">ⓘ</span>
<br/>  The stalling of incremental modernization due to complex interdependencies leads to situations where resources are allocated for new components but not properly deallocated, resulting in unreleased resources that indicate underlying issues in the modernization process.
- [Legacy Skill Shortage](legacy-skill-shortage.md) <span class="info-tooltip" title="Confidence: 0.383, Strength: 0.643">ⓘ</span>
<br/>  The stalling of incremental modernization due to complex interdependencies and data consistency issues highlights a reliance on legacy technologies, which in turn exacerbates the shortage of skilled developers capable of maintaining these systems, creating a cycle of technical debt and increasing risk of failure.
- [Flaky Tests](flaky-tests.md) <span class="info-tooltip" title="Confidence: 0.327, Strength: 0.688">ⓘ</span>
<br/>  Random test failures arise from the intricate dependencies and inconsistent data states inherent in the legacy system, indicating that the incremental modernization efforts are struggling to maintain reliability and coherence amidst complex integration challenges.

## Root Causes ▼
- [Brittle Codebase](brittle-codebase.md) <span class="info-tooltip" title="Confidence: 0.384, Strength: 0.902">ⓘ</span>
<br/>  The difficulty in modifying the existing code without introducing new bugs leads to hesitance in implementing incremental changes, which stalls the modernization effort due to the complex interdependencies and data consistency challenges inherent in legacy systems.
- [Large Estimates for Small Changes](large-estimates-for-small-changes.md) <span class="info-tooltip" title="Confidence: 0.375, Strength: 0.846">ⓘ</span>
<br/>  The tendency to provide large time estimates for small changes reflects the underlying code complexity and interdependencies in legacy systems, which in turn creates uncertainty and stalls incremental modernization efforts due to fears of unintended consequences and data integrity issues.

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
