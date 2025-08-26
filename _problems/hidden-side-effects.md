---
title: Hidden Side Effects
description: Functions have undocumented side effects that modify state or trigger
  actions beyond their apparent purpose.
category:
- Architecture
- Code
related_problems:
- slug: global-state-and-side-effects
  similarity: 0.65
- slug: hidden-dependencies
  similarity: 0.65
- slug: unpredictable-system-behavior
  similarity: 0.55
- slug: complex-and-obscure-logic
  similarity: 0.5
layout: problem
---

## Description

Hidden side effects occur when functions or methods perform actions beyond their apparent primary purpose without clearly documenting or indicating these additional behaviors. These side effects might include modifying global state, triggering events, writing to logs, sending notifications, or updating caches. Hidden side effects make code difficult to understand, test, and maintain because developers cannot predict all the consequences of calling a function based on its name and parameters alone.

## Indicators ⟡
- Functions with innocent-sounding names that perform multiple unrelated actions
- Debugging reveals that functions modify state or trigger actions not obvious from their signatures
- Unit tests are difficult to write because functions have many external dependencies
- Code reviews frequently involve questions about unexpected function behaviors
- System behavior changes unexpectedly when functions are called in different contexts

## Symptoms ▲
- [Poor Test Coverage](poor-test-coverage.md) <span class="info-tooltip" title="Confidence: 0.615, Strength: 0.831">ⓘ</span>
<br/>  In legacy systems, undocumented side effects in functions lead to unexpected behavior, which results in critical code paths being overlooked in testing, thus revealing poor test coverage as an indicator of these hidden complexities.
- [Flaky Tests](flaky-tests.md) <span class="info-tooltip" title="Confidence: 0.470, Strength: 0.781">ⓘ</span>
<br/>  Undocumented side effects in functions can lead to unpredictable changes in state, causing tests to fail intermittently as they rely on specific conditions that may be altered unexpectedly, thus undermining the reliability of the test suite.
- [Team Dysfunction](team-dysfunction.md) <span class="info-tooltip" title="Confidence: 0.397, Strength: 0.830">ⓘ</span>
<br/>  Undocumented side effects create unpredictable behavior in the software, leading to misunderstandings and misalignment among team members, as they struggle to coordinate their efforts without a clear understanding of the system's true functionality.
- [Legacy Business Logic Extraction Difficulty](legacy-business-logic-extraction-difficulty.md) <span class="info-tooltip" title="Confidence: 0.380, Strength: 0.737">ⓘ</span>
<br/>  Undocumented side effects in functions obscure the true behavior of the code, complicating the identification and extraction of critical business rules that are intertwined with these hidden modifications.
- [Inconsistent Naming Conventions](inconsistent-naming-conventions.md) <span class="info-tooltip" title="Confidence: 0.378, Strength: 0.794">ⓘ</span>
<br/>  Unstructured or conflicting names in legacy code can obscure the true purpose of functions, making it difficult to identify and understand their hidden side effects, thus serving as a symptom of deeper issues within the system's design and documentation.
- [Poor Operational Concept](poor-operational-concept.md) <span class="info-tooltip" title="Confidence: 0.371, Strength: 0.876">ⓘ</span>
<br/>  Undocumented side effects in functions can lead to unexpected behaviors that complicate system monitoring and maintenance, resulting in instability that reveals a lack of foresight in operational planning.
- [Delayed Bug Fixes](delayed-bug-fixes.md) <span class="info-tooltip" title="Confidence: 0.348, Strength: 0.769">ⓘ</span>
<br/>  Undocumented side effects complicate debugging efforts, leading to unresolved issues that persist over time and contribute to user frustration.
- [Secret Management Problems](secret-management-problems.md) <span class="info-tooltip" title="Confidence: 0.347, Strength: 0.813">ⓘ</span>
<br/>  Undocumented side effects in functions can inadvertently alter the management of sensitive credentials, leading to security vulnerabilities and operational challenges as these unintended modifications may compromise the integrity and proper handling of secrets.
- [System Integration Blindness](system-integration-blindness.md) <span class="info-tooltip" title="Confidence: 0.309, Strength: 0.838">ⓘ</span>
<br/>  Undocumented side effects in functions can lead to unexpected behaviors when components are integrated, as the lack of visibility into these effects prevents developers from understanding how changes in one part of the system can unintentionally influence others, thus exposing integration failures.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○
- **Code Analysis:** Review function implementations to identify actions beyond their apparent purpose
- **Side Effect Documentation:** Create a catalog of all the side effects each function produces
- **Testing Complexity:** Identify functions that require extensive mocking or setup for testing
- **Developer Interviews:** Ask team members about functions that behave differently than expected
- **Static Analysis Tools:** Use tools that can identify functions with multiple responsibilities or external dependencies

## Examples

A function called `calculateUserDiscount()` appears to simply compute a discount percentage for a user. However, examination reveals that it also: updates the user's "last discount calculation" timestamp in the database, logs the calculation to an analytics service, sends a promotional email if the user qualifies for a special offer, updates a cache of discount rates, and triggers a webhook notification to a marketing system. When developers call this function during unit tests or in batch processing scenarios, they unknowingly trigger emails, webhook calls, and database updates. The hidden side effects make the function impossible to use safely in contexts where only the calculation is needed. Another example involves a `getUserProfile()` method that retrieves user data but also silently updates the user's "last accessed" timestamp, increments a page view counter, logs the access for security auditing, and refreshes cached user preferences. These hidden side effects cause problems when the function is called multiple times in a single request or when it's used in administrative tools where the side effects are undesirable.
