---
title: Inadequate Integration Tests
description: The interactions between different modules or services are not thoroughly
  tested, leading to integration failures.
category:
- Testing
- Quality
- Architecture
related_problems:
- slug: missing-end-to-end-tests
  similarity: 75%
- slug: system-integration-blindness
  similarity: 75%
- slug: poor-interfaces-between-applications
  similarity: 65%
- slug: inadequate-test-infrastructure
  similarity: 60%
- slug: integration-difficulties
  similarity: 60%
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
- **Integration Failures:** Components work individually but fail when combined with other parts of the system
- **[Cascade Failures](cascade-failures.md):** Failures in one component trigger unexpected failures in others
- **Data Inconsistencies:** Information becomes corrupted or lost as it passes between system components
- **Communication Breakdowns:** Services or modules fail to communicate properly despite individual functionality being correct
- **Environment-Specific Issues:** Problems appear in staging or production that don't occur in development environments

## Root Causes ▼
- **Testing Strategy Gaps:** Focus on unit testing without corresponding attention to integration testing
- **Complex Integration Points:** Many interfaces between components create numerous potential failure points
- **[High Coupling and Low Cohesion](high-coupling-low-cohesion.md):** Tightly coupled components create complex integration dependencies
- **Mock Overuse:** Extensive mocking in unit tests masks real integration issues
- **Environment Differences:** Integration testing environments don't accurately reflect production configurations
- **External Service Dependencies:** Difficulty testing integrations with third-party services or APIs

## Detection Methods ○
- **Integration Test Coverage Analysis:** Measure what percentage of component interactions are covered by integration tests
- **Production Issue Categorization:** Track how many bugs stem from integration problems versus component-specific issues
- **Interface Documentation Review:** Assess whether component interfaces are well-defined and tested
- **Cross-Component Bug Analysis:** Identify bugs that span multiple system components
- **Deployment Environment Testing:** Compare issue rates between isolated and integrated testing environments

## Examples

A microservices-based e-commerce platform has comprehensive unit tests for each service: user management, inventory, payment processing, and order fulfillment. Each service works perfectly in isolation and passes all unit tests. However, integration testing is minimal, focusing only on happy-path scenarios. In production, when a user attempts to purchase an out-of-stock item, the inventory service correctly returns an "out of stock" status, but the payment service has already processed the charge because it doesn't properly handle the timing of inventory checks. The order fulfillment service then fails because it receives conflicting information about payment status and inventory availability. The integration failure results in customers being charged for items they can't receive. Another example involves a document management system where the upload component, processing engine, and storage service all work correctly individually. However, integration testing missed the fact that the upload component produces metadata in one format while the processing engine expects a different format. In production, documents upload successfully and are stored correctly, but the processing engine silently fails to index them, making uploaded documents unsearchable despite appearing to be successfully processed.