---
title: Flaky Tests
description: Tests fail randomly due to timing, setup, or dependencies, undermining
  trust in the test suite
category:
- Technical
- Process
- Maintenance
related_problems:
- slug: testing-environment-fragility
  similarity: 0.7
- slug: outdated-tests
  similarity: 0.6
- slug: testing-complexity
  similarity: 0.55
- slug: difficult-to-test-code
  similarity: 0.55
- slug: quality-blind-spots
  similarity: 0.55
layout: problem
---

## Description

Flaky tests are automated tests that produce inconsistent results when run multiple times against the same code, sometimes passing and sometimes failing without any changes to the codebase. These tests undermine confidence in the entire test suite, making it difficult to distinguish between real regressions and false positives. Over time, teams begin to ignore test failures or disable flaky tests, reducing the effectiveness of automated testing as a safety net for code changes.

## Indicators ⟡

- Tests that occasionally fail on continuous integration but pass when run locally
- Team members regularly re-running failed test suites to see if they pass the second time
- Tests that fail more frequently during high system load or specific times of day
- Intermittent test failures that are difficult to reproduce consistently
- Tests that depend on external services or network connectivity
- Test setup or teardown processes that don't consistently reset system state
- Tests with hard-coded timing assumptions or sleep statements

## Symptoms ▲

- **[Quality Blind Spots](quality-blind-spots.md):** Low confidence in test suite results leading to ignored failures
- **[Debugging Difficulties](debugging-difficulties.md):** Developers spending significant time investigating false positive test failures
- **[Poor Test Coverage](poor-test-coverage.md):** Disabled or skipped tests that were too unreliable to maintain
- **[Complex Deployment Process](complex-deployment-process.md):** CI/CD pipelines that require multiple retry attempts to get clean builds
- **[Unpredictable System Behavior](unpredictable-system-behavior.md):** Test failures that resolve themselves without any code changes
- **[High Defect Rate in Production](high-defect-rate-in-production.md):** Difficulty identifying real regressions among false positives
- **[Fear of Change](fear-of-change.md):** Team reluctance to add new automated tests due to reliability concerns
- **[Increased Manual Testing Effort](increased-manual-testing-effort.md):** Manual testing increases as automated testing becomes unreliable
- **[Developer Frustration and Burnout](developer-frustration-and-burnout.md):** Team stress from dealing with unreliable test infrastructure
- **[Release Anxiety](release-anxiety.md):** Uncertainty about release quality when tests cannot be trusted
- **[Slow Development Velocity](slow-development-velocity.md):** Development slowdown due to investigation of false test failures
- **[Regression Bugs](regression-bugs.md):** Real bugs missed because teams ignore test failures
- **[Constant Firefighting](constant-firefighting.md):** Ongoing effort required to manage and fix flaky tests
- **[Reduced Individual Productivity](reduced-individual-productivity.md):** Developer time wasted on unreliable test results

## Root Causes ▼

- **[Race Conditions](race-conditions.md):** Race conditions and timing dependencies in test code
- **[External Service Delays](external-service-delays.md):** Tests that depend on external systems or services beyond team control  
- **[Difficult to Test Code](difficult-to-test-code.md):** Inadequate test isolation leading to interdependencies between tests
- **[Inconsistent Behavior](inconsistent-behavior.md):** Non-deterministic test data or random value generation without proper seeding
- **[Global State and Side Effects](global-state-and-side-effects.md):** Insufficient cleanup between test runs leaving persistent state
- **[Algorithmic Complexity Problems](algorithmic-complexity-problems.md):** Tests that make assumptions about system performance or timing
- **[Resource Contention](resource-contention.md):** Shared test environments that create conflicts between concurrent test runs
- **[Knowledge Gaps](knowledge-gaps.md):** Poor understanding of asynchronous behavior and proper synchronization techniques
- **[Testing Environment Fragility](testing-environment-fragility.md):** Test environments that are not properly configured or maintained
- **[Time Pressure](time-pressure.md):** Rushed test development that doesn't account for reliability concerns
- **[Quality Blind Spots](quality-blind-spots.md):** Organizational culture that doesn't prioritize test quality and reliability
- **[Complex Implementation Paths](complex-implementation-paths.md):** Overly complex test scenarios that are inherently unreliable
- **[Database Connection Leaks](database-connection-leaks.md):** Test infrastructure that doesn't properly manage resources
- **[Memory Leaks](memory-leaks.md):** Test environments with resource leaks that affect test reliability
- **[Environment Variable Issues](environment-variable-issues.md):** Configuration issues that create inconsistent test environments

## Detection Methods ○

- Track test failure rates and patterns over time to identify inconsistent tests
- Run test suites multiple times in succession to identify non-deterministic behavior
- Monitor CI/CD pipeline metrics for tests that fail and then pass without code changes
- Use test flakiness detection tools that analyze historical test results
- Implement test quarantine systems that flag unreliable tests
- Review test code for timing dependencies, external service calls, and shared state
- Analyze test failures by time of day, system load, or environmental factors

## Examples

A web application's test suite includes an integration test that verifies user registration functionality. The test creates a user account, sends a verification email, and checks that the account becomes active. However, the test sometimes fails because it doesn't wait long enough for the email service to process the request before checking the account status. On fast test environments, the test passes, but on slower systems or during high load, the email processing takes longer and the test fails. The team initially ignores these failures as "environment issues," but over time, more tests develop similar timing problems. Eventually, the team loses confidence in the test suite and begins relying more heavily on manual testing, missing several real bugs that automated tests could have caught.