---
title: Global State and Side Effects
description: Excessive use of global variables or functions with hidden side effects
  makes it difficult to reason about code behavior.
category:
- Design
- Maintenance
related_problems:
- slug: hidden-side-effects
  similarity: 0.623
- slug: spaghetti-code
  similarity: 0.572
- slug: unpredictable-system-behavior
  similarity: 0.566
- slug: increasing-brittleness
  similarity: 0.519
- slug: hidden-dependencies
  similarity: 0.518
layout: problem
---

## Description
Global state and side effects are a common source of complexity and bugs in software systems. Global state refers to data that is accessible and mutable from anywhere in the codebase, while side effects are modifications to state that occur as a byproduct of a function call. When used excessively, these constructs can make it very difficult to reason about the behavior of the system, as the impact of a change can be far-reaching and unpredictable.

## Indicators ⟡
- It is difficult to understand the impact of a change to a piece of code.
- The same bug appears in different parts of the system.
- The system behaves differently in different environments, even though the code is the same.

## Symptoms ▲
- [Brittle Codebase](brittle-codebase.md): The system is difficult to change without introducing new bugs.
- [High Coupling and Low Cohesion](high-coupling-low-cohesion.md): Components are tightly coupled through their shared access to global state.
- **[Unpredictable System Behavior](unpredictable-system-behavior.md):** The system behaves in unexpected ways due to hidden dependencies and side effects.
- **[Difficult to Test Code](difficult-to-test-code.md):** It is difficult to write unit tests for code that relies on global state or has side effects.

## Root Causes ▼
- **Lack of a Clear Architecture:** The system was not designed with a clear separation of concerns, leading to a proliferation of global state.
- **[Inexperienced Developers](inexperienced-developers.md):** The code was written by developers who were not aware of the dangers of global state and side effects.
- **[Time Pressure](time-pressure.md):** The code was written under tight deadlines, leading to shortcuts and a lack of attention to good design principles.

## Detection Methods ○
- **Static Analysis:** Use static analysis tools to identify the use of global variables and functions with side effects.
- **Code Reviews:** Pay close attention to the use of global state and side effects during code reviews.
- **Testing:** Write tests that expose the hidden dependencies and side effects in the code.

## Examples
A function that calculates the total price of a shopping cart also has a side effect of applying a discount to the user's account. This side effect is not documented, and it is not obvious from the function's name or signature. As a result, a developer who calls this function to simply display the total price in the UI inadvertently applies a discount to the user's account, leading to a loss of revenue for the company. This is a classic example of how hidden side effects can lead to unexpected and undesirable behavior.