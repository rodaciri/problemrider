---
title: "Hidden Side Effects"
description: "Functions have undocumented side effects that modify state or trigger actions beyond their apparent purpose."
category: ['Technical', 'Design', 'Quality']
related_problems: ['global-state-and-side-effects', 'unpredictable-system-behavior', 'difficult-to-test-code']
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
- **[Unpredictable System Behavior](unpredictable-system-behavior.md):** Functions cause unexpected changes in seemingly unrelated parts of the system
- **[Difficult to Test Code](difficult-to-test-code.md):** Functions cannot be easily tested in isolation due to their hidden dependencies and effects
- **[Global State and Side Effects](global-state-and-side-effects.md):** Functions modify shared state without making this behavior explicit
- **Debugging Difficulties:** Issues are hard to trace because functions have effects beyond their apparent purpose
- **Code Comprehension Problems:** Developers struggle to understand what functions actually do versus what they appear to do

## Root Causes ▼
- **Poor Function Design:** Functions are designed to do multiple things instead of having a single, clear responsibility
- **Convenience Shortcuts:** Developers add extra functionality to existing functions instead of creating separate, focused functions
- **Implicit Requirements:** Business requirements include side effects that aren't clearly documented in the code
- **Legacy Evolution:** Functions accumulate additional responsibilities over time without proper refactoring
- **Lack of Separation of Concerns:** No clear separation between core functionality and supporting actions like logging or notifications
- **Global State Dependencies:** Functions rely on and modify global variables without making these dependencies explicit

## Detection Methods ○
- **Code Analysis:** Review function implementations to identify actions beyond their apparent purpose
- **Side Effect Documentation:** Create a catalog of all the side effects each function produces
- **Testing Complexity:** Identify functions that require extensive mocking or setup for testing
- **Developer Interviews:** Ask team members about functions that behave differently than expected
- **Static Analysis Tools:** Use tools that can identify functions with multiple responsibilities or external dependencies

## Examples

A function called `calculateUserDiscount()` appears to simply compute a discount percentage for a user. However, examination reveals that it also: updates the user's "last discount calculation" timestamp in the database, logs the calculation to an analytics service, sends a promotional email if the user qualifies for a special offer, updates a cache of discount rates, and triggers a webhook notification to a marketing system. When developers call this function during unit tests or in batch processing scenarios, they unknowingly trigger emails, webhook calls, and database updates. The hidden side effects make the function impossible to use safely in contexts where only the calculation is needed. Another example involves a `getUserProfile()` method that retrieves user data but also silently updates the user's "last accessed" timestamp, increments a page view counter, logs the access for security auditing, and refreshes cached user preferences. These hidden side effects cause problems when the function is called multiple times in a single request or when it's used in administrative tools where the side effects are undesirable.