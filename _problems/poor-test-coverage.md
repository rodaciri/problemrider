---
title: Poor Test Coverage
description: Critical parts of the codebase are not covered by tests, creating blind
  spots in quality assurance.
category:
- Testing
- Quality
- Process
related_problems:
- slug: quality-blind-spots
  similarity: 0.725
- slug: insufficient-testing
  similarity: 0.674
- slug: high-defect-rate-in-production
  similarity: 0.653
- slug: inadequate-test-infrastructure
  similarity: 0.611
- slug: inadequate-test-data-management
  similarity: 0.605
layout: problem
---

## Description

Poor test coverage occurs when significant portions of the codebase, particularly critical functionality, lack adequate automated testing. This creates gaps in quality assurance where bugs can hide undetected until they reach production. Poor coverage doesn't just mean low percentage numbers—it specifically refers to the absence of tests for important business logic, error handling paths, edge cases, and integration points that are crucial for system reliability.

## Indicators ⟡
- Code coverage reports show low percentages, especially in critical business logic areas
- Production bugs frequently occur in areas with little or no test coverage
- Developers are uncertain whether changes will break existing functionality
- Critical system components have no automated tests
- Error handling and edge cases are rarely tested

## Symptoms ▲
- **[Increased Risk of Bugs](increased-risk-of-bugs.md):** Higher likelihood of defects reaching production due to untested code paths
- **[Quality Blind Spots](quality-blind-spots.md):** Overall testing strategy fails to adequately verify system behavior
- **[Regression Bugs](regression-bugs.md):** Changes break existing functionality that would have been caught by better test coverage
- **[High Defect Rate in Production](high-defect-rate-in-production.md):** Critical bugs are first discovered by users rather than during development
- **[Release Anxiety](release-anxiety.md):** Teams are nervous about deployments due to uncertainty about untested code

## Root Causes ▼
- **[Quality Blind Spots](quality-blind-spots.md):** Team doesn't prioritize comprehensive test coverage
- **[Difficult to Test Code](difficult-to-test-code.md):** Code architecture makes it challenging to write effective tests
- **[Legacy Code Without Tests](legacy-code-without-tests.md):** Existing code was written without tests and is difficult to retrofit with testing
- **[Time Pressure](time-pressure.md):** Pressure to deliver features quickly leads to skipping test development
- **[Poor Planning](poor-planning.md):** No systematic approach to identifying what needs to be tested
- **[Tool Limitations](tool-limitations.md):** Testing tools or framework limitations make certain types of testing difficult

## Detection Methods ○
- **Code Coverage Analysis:** Use tools to measure what percentage of code is executed by tests
- **Critical Path Identification:** Map business-critical functionality and assess its test coverage
- **Bug Source Analysis:** Track whether production bugs occur in tested vs. untested code areas
- **Coverage Trend Monitoring:** Track whether test coverage is improving, declining, or stagnating over time
- **Manual Testing Dependency:** Identify areas that rely heavily on manual testing due to lack of automation

## Examples

A financial trading application has 40% overall test coverage, but analysis reveals that the core risk calculation algorithms—responsible for preventing catastrophic trading losses—have only 15% test coverage. The existing tests only cover basic scenarios with small trade amounts, but the complex logic handling large trades, margin requirements, and risk limits during market volatility is completely untested. When market conditions change unexpectedly, the untested risk calculation code fails to properly limit exposure, resulting in significant financial losses that could have been prevented by comprehensive testing of edge cases and stress scenarios. Another example involves an e-commerce platform where the payment processing module has 80% line coverage but 0% coverage of error handling paths. While normal payment flows are well-tested, the code that handles declined cards, network timeouts, partial payments, and refund scenarios is never executed by tests. When payment gateway issues occur, customers experience lost transactions, double charges, and failed refunds because the error handling code contains bugs that were never caught during testing.