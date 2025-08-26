---
title: Inadequate Integration Tests
description: The interactions between different modules or services are not thoroughly
  tested, leading to integration failures.
category:
- Architecture
- Code
- Testing
related_problems:
- slug: missing-end-to-end-tests
  similarity: 0.75
- slug: system-integration-blindness
  similarity: 0.75
- slug: poor-interfaces-between-applications
  similarity: 0.65
- slug: inadequate-test-infrastructure
  similarity: 0.6
- slug: quality-blind-spots
  similarity: 0.6
- slug: integration-difficulties
  similarity: 0.6
layout: problem
---

## Description

Inadequate integration tests occur when the testing strategy focuses primarily on individual components while failing to verify that different parts of the system work correctly together. Integration issues often arise at the boundaries between modules, services, or external systems, where assumptions about data formats, timing, error handling, or communication protocols may be incorrect. Without proper integration testing, systems may work well in isolation but fail when components interact in production environments.

## Indicators ⟡
- Unit tests pass but the application fails when modules are combined
- Bugs frequently occur at the boundaries between different system components
- Issues appear only when multiple features or services are used together
- Production problems often involve data format mismatches or communication failures
- Deployment to integrated environments reveals issues not caught in isolated testing

## Symptoms ▲
- [Poor Test Coverage](poor-test-coverage.md) <span class="info-tooltip" title="Confidence: 0.494, Strength: 0.730">ⓘ</span>
<br/>  In legacy systems, insufficient integration tests often lead to poor test coverage because critical interactions between modules go unverified, resulting in untested code paths that contribute to undetected integration failures.
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.480, Strength: 0.669">ⓘ</span>
<br/>  Inadequate integration testing fails to identify issues in the interactions between modules, leading to unexpected failures and delays in responses from services, which manifests as upstream timeouts when those services are unable to complete requests within the expected time frame.
- [Reduced Team Productivity](reduced-team-productivity.md) <span class="info-tooltip" title="Confidence: 0.357, Strength: 0.722">ⓘ</span>
<br/>  Inadequate integration tests lead to frequent integration failures, causing developers to spend excessive time troubleshooting and resolving issues instead of focusing on new feature development, which ultimately results in reduced team productivity.

## Root Causes ▼
- [Shared Database](shared-database.md) <span class="info-tooltip" title="Confidence: 0.359, Strength: 0.941">ⓘ</span>
<br/>  The reliance on a shared database leads to inadequate integration tests because changes in one service can inadvertently affect others without thorough testing of their interactions, resulting in undetected integration failures.
- [External Service Delays](external-service-delays.md) <span class="info-tooltip" title="Confidence: 0.334, Strength: 0.929">ⓘ</span>
<br/>  The slow response times of external services lead to insufficient test coverage in integration scenarios, as the testing processes cannot effectively simulate or account for these delays, resulting in unaddressed integration failures.
- [Duplicated Effort](duplicated-effort.md) <span class="info-tooltip" title="Confidence: 0.334, Strength: 0.932">ⓘ</span>
<br/>  The lack of coordination among team members results in overlapping implementations that fail to align, leading to insufficient coverage of integration tests for the combined functionality of the system.
- [Partial Bug Fixes](partial-bug-fixes.md) <span class="info-tooltip" title="Confidence: 0.333, Strength: 0.909">ⓘ</span>
<br/>  The presence of partial bug fixes leads to inadequate integration tests because unresolved issues in duplicated code create unpredictable interactions that are not captured during testing, resulting in failures when modules are integrated.
- [Bikeshedding](bikeshedding.md) <span class="info-tooltip" title="Confidence: 0.329, Strength: 0.916">ⓘ</span>
<br/>  The tendency to prioritize trivial code reviews over substantive design discussions leads to insufficient attention on critical integration tests, resulting in undetected failures during module interactions in legacy systems.
- [Shared Dependencies](shared-dependencies.md) <span class="info-tooltip" title="Confidence: 0.324, Strength: 0.951">ⓘ</span>
<br/>  The reliance on shared libraries across multiple components often leads to inconsistent behavior and versioning issues, making it difficult to establish comprehensive integration tests that account for all interactions, thereby resulting in inadequate testing coverage.
- [Complex Deployment Process](complex-deployment-process.md) <span class="info-tooltip" title="Confidence: 0.309, Strength: 0.843">ⓘ</span>
<br/>  The manual and error-prone nature of the deployment process leads to insufficient time and resources allocated for thorough integration testing, resulting in undetected failures when different modules or services interact in production.
- [Increasing Brittleness](increasing-brittleness.md) <span class="info-tooltip" title="Confidence: 0.309, Strength: 0.844">ⓘ</span>
<br/>  The increasing fragility of legacy systems makes it difficult to anticipate the impact of changes, resulting in inadequate integration tests that fail to account for unforeseen interactions and dependencies between modules.

## Detection Methods ○
- **Integration Test Coverage Analysis:** Measure what percentage of component interactions are covered by integration tests
- **Production Issue Categorization:** Track how many bugs stem from integration problems versus component-specific issues
- **Interface Documentation Review:** Assess whether component interfaces are well-defined and tested
- **Cross-Component Bug Analysis:** Identify bugs that span multiple system components
- **Deployment Environment Testing:** Compare issue rates between isolated and integrated testing environments

## Examples

A microservices-based e-commerce platform has comprehensive unit tests for each service: user management, inventory, payment processing, and order fulfillment. Each service works perfectly in isolation and passes all unit tests. However, integration testing is minimal, focusing only on happy-path scenarios. In production, when a user attempts to purchase an out-of-stock item, the inventory service correctly returns an "out of stock" status, but the payment service has already processed the charge because it doesn't properly handle the timing of inventory checks. The order fulfillment service then fails because it receives conflicting information about payment status and inventory availability. The integration failure results in customers being charged for items they can't receive. Another example involves a document management system where the upload component, processing engine, and storage service all work correctly individually. However, integration testing missed the fact that the upload component produces metadata in one format while the processing engine expects a different format. In production, documents upload successfully and are stored correctly, but the processing engine silently fails to index them, making uploaded documents unsearchable despite appearing to be successfully processed.
