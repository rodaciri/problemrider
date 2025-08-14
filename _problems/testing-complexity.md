---
title: Testing Complexity
description: Quality assurance must verify the same functionality in multiple locations,
  which increases the testing effort and the risk of missing bugs.
category:
- Testing
- Quality
related_problems:
- slug: difficult-to-test-code
  similarity: 0.7
- slug: insufficient-testing
  similarity: 0.65
- slug: complex-and-obscure-logic
  similarity: 0.6
- slug: test-debt
  similarity: 0.6
- slug: inconsistent-quality
  similarity: 0.6
layout: problem
---

## Description
Testing complexity is a common problem in software systems with a high degree of code duplication. It occurs when quality assurance (QA) must verify the same functionality in multiple locations. This increases the testing effort and the risk of missing bugs. Testing complexity is often a sign of a poorly designed system with a high degree of code duplication.

## Indicators ⟡
- The QA team is spending a lot of time testing the same functionality over and over again.
- The QA team is not able to keep up with the pace of development.
- The QA team is missing a lot of bugs.
- The QA team is not happy with the quality of the system.

## Symptoms ▲
- **[Increased Manual Testing Effort](increased-manual-testing-effort.md):** The QA team has to spend a lot of time manually testing the same functionality in multiple locations.
- **[Increased Risk of Bugs](increased-risk-of-bugs.md):** The risk of missing bugs is increased when the same functionality has to be tested in multiple locations.
- **[Feedback Isolation](feedback-isolation.md):** The feedback loop between development and QA is slow because it takes a long time to test the system.
- **[Developer Frustration and Burnout](developer-frustration-and-burnout.md):** The QA team can become demoralized when they are constantly testing the same functionality over and over again.

## Root Causes ▼
- **[Code Duplication](code-duplication.md):** The same code is duplicated in multiple places, which means that the same functionality has to be tested in multiple locations.
- **[Synchronization Problems](synchronization-problems.md):** Changes made to one copy of the code are not propagated to the other copies, which means that the QA team has to test all of the copies to make sure that they are all working correctly.
- **[Quality Blind Spots](quality-blind-spots.md):** There is no test automation strategy, which means that all of the testing has to be done manually.
- **[Monolithic Architecture Constraints](monolithic-architecture-constraints.md):** The system is not designed in a modular way, which makes it difficult to test components in isolation.

## Detection Methods ○
- **Test Case Analysis:** Analyze your test cases to identify duplicated tests.
- **Code Coverage Analysis:** Analyze your code coverage to identify areas of the system that are not being tested.
- **QA Team Feedback:** Listen to feedback from the QA team to identify areas of the system that are difficult to test.
- **Bug Triage:** Analyze your bug triage process to identify bugs that are being missed by the QA team.

## Examples
An e-commerce website has a checkout flow that is duplicated in two different places. The QA team has to test the checkout flow in both places to make sure that it is working correctly. This is a waste of time and effort, and it increases the risk of missing bugs. The problem could be solved by creating a single, reusable checkout flow that is used in both places.
