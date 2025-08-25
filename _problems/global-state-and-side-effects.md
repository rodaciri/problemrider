---
title: Global State and Side Effects
description: Excessive use of global variables or functions with hidden side effects
  makes it difficult to reason about code behavior.
category:
- Architecture
- Code
related_problems:
- slug: hidden-side-effects
  similarity: 0.65
- slug: unpredictable-system-behavior
  similarity: 0.55
- slug: complex-and-obscure-logic
  similarity: 0.55
- slug: spaghetti-code
  similarity: 0.55
- slug: hidden-dependencies
  similarity: 0.55
- slug: inconsistent-codebase
  similarity: 0.5
layout: problem
---

## Description
Global state and side effects are a common source of complexity and bugs in software systems. Global state refers to data that is accessible and mutable from anywhere in the codebase, while side effects are modifications to state that occur as a byproduct of a function call. When used excessively, these constructs can make it very difficult to reason about the behavior of the system, as the impact of a change can be far-reaching and unpredictable.


## Indicators ⟡
- It is difficult to understand the impact of a change to a piece of code.
- The same bug appears in different parts of the system.
- The system behaves differently in different environments, even though the code is the same.


## Symptoms ▲

- [Inconsistent Naming Conventions](inconsistent-naming-conventions.md) <span class="info-tooltip" title="Confidence: 0.573, Strength: 0.863">ⓘ</span>
<br/>  The presence of global variables and functions with hidden side effects often leads to inconsistent naming conventions, as developers may use arbitrary or unclear names to manage the unpredictable interactions within the code, making it harder to understand and maintain.
- [Unpredictable System Behavior](unpredictable-system-behavior.md) <span class="info-tooltip" title="Confidence: 0.510, Strength: 0.899">ⓘ</span>
<br/>  Excessive reliance on global variables and functions with hidden side effects creates tangled dependencies, leading to unpredictable behavior across the system as changes propagate unexpectedly through these untracked connections.
- [Merge Conflicts](merge-conflicts.md) <span class="info-tooltip" title="Confidence: 0.422, Strength: 0.682">ⓘ</span>
<br/>  The frequent modifications by multiple developers to the same large functions or files are driven by the unpredictable behavior caused by excessive global variables and hidden side effects, leading to merge conflicts that indicate a lack of clear code structure and understanding.
- [Flaky Tests](flaky-tests.md) <span class="info-tooltip" title="Confidence: 0.381, Strength: 0.678">ⓘ</span>
<br/>  Excessive reliance on global variables and functions with hidden side effects leads to unpredictable interactions and race conditions in tests, causing them to fail intermittently and eroding confidence in the overall stability of the legacy codebase.
- [Legacy API Versioning Nightmare](legacy-api-versioning-nightmare.md) <span class="info-tooltip" title="Confidence: 0.333, Strength: 0.743">ⓘ</span>
<br/>  The excessive reliance on global variables and functions with hidden side effects in legacy systems leads to unpredictable behavior, making it challenging to implement consistent API changes, which in turn results in versioning and backward compatibility issues that escalate over time.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.322, Strength: 0.578">ⓘ</span>
<br/>  The excessive reliance on global variables and functions with hidden side effects often leads to complex, unpredictable code paths that fail to manage resource allocation and deallocation consistently, resulting in unreleased resources as the system struggles to maintain proper state across various operations.

## Root Causes ▼

- [Shared Dependencies](shared-dependencies.md) <span class="info-tooltip" title="Confidence: 0.397, Strength: 0.923">ⓘ</span>
<br/>  The reliance on shared libraries and frameworks leads to tightly coupled components that inadvertently introduce global state and side effects, making it challenging to predict and manage code behavior across the system.
- [Shared Database](shared-database.md) <span class="info-tooltip" title="Confidence: 0.387, Strength: 0.917">ⓘ</span>
<br/>  The reliance on a single database by multiple components leads to global state issues, as changes made by one service can introduce hidden side effects that affect the behavior of others, complicating code reasoning and maintenance in legacy systems.
- [Misunderstanding of OOP](misunderstanding-of-oop.md) <span class="info-tooltip" title="Confidence: 0.302, Strength: 0.912">ⓘ</span>
<br/>  A lack of understanding of object-oriented programming principles leads developers to rely on global variables and functions with side effects, resulting in tightly coupled code that is hard to maintain and reason about in legacy systems.

## Detection Methods ○
- **Static Analysis:** Use static analysis tools to identify the use of global variables and functions with side effects.
- **Code Reviews:** Pay close attention to the use of global state and side effects during code reviews.
- **Testing:** Write tests that expose the hidden dependencies and side effects in the code.


## Examples
A function that calculates the total price of a shopping cart also has a side effect of applying a discount to the user's account. This side effect is not documented, and it is not obvious from the function's name or signature. As a result, a developer who calls this function to simply display the total price in the UI inadvertently applies a discount to the user's account, leading to a loss of revenue for the company. This is a classic example of how hidden side effects can lead to unexpected and undesirable behavior.
