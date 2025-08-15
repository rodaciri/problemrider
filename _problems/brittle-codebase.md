---
title: Brittle Codebase
description: The existing code is difficult to modify without introducing new bugs,
  making maintenance and feature development risky.
category:
- Architecture
- Code
related_problems:
- slug: inconsistent-codebase
  similarity: 0.75
- slug: increasing-brittleness
  similarity: 0.7
- slug: difficult-code-comprehension
  similarity: 0.65
- slug: spaghetti-code
  similarity: 0.65
- slug: uncontrolled-codebase-growth
  similarity: 0.65
- slug: complex-and-obscure-logic
  similarity: 0.65
layout: problem
---

## Description
A brittle codebase is one that is difficult and risky to change. When a small change in one part of the codebase leads to unexpected failures in other parts, it is a sign of a brittle codebase. This is often caused by a lack of automated tests, a high degree of coupling between components, and a general lack of good design principles. A brittle codebase is a major source of technical debt, and it can significantly slow down the pace of development.

## Indicators ⟡
- Developers express fear or hesitation when asked to modify certain parts of the system.
- Estimates for small changes are consistently much larger than expected.
- The team avoids refactoring, even when they know it is needed.
- Onboarding new developers takes an unusually long time because the codebase is so hard to understand.

## Symptoms ▲

- **[High Bug Introduction Rate](high-bug-introduction-rate.md):** Every code change, no matter how small, seems to introduce new defects.
- **[Quality Degradation](quality-degradation.md):** Overall system quality decreases over time despite development effort.
- **[Fear of Change](fear-of-change.md):** Developers are hesitant to modify existing code due to the high risk of breaking something.
- **[Slow Development Velocity](slow-development-velocity.md):** Feature development and bug fixes take longer than expected because of the need for extensive regression testing and rework.
- **[High Technical Debt](high-technical-debt.md):** The codebase accumulates more and more technical debt as developers opt for quick, dirty fixes over proper solutions.
- **[Unpredictable System Behavior](unpredictable-system-behavior.md):** Changes in one part of the system have unexpected side effects in seemingly unrelated areas.

## Root Causes ▼

- **[Quality Blind Spots](quality-blind-spots.md):** The codebase has insufficient unit, integration, or end-to-end tests, making it impossible to verify changes quickly and reliably.
- **[High Coupling and Low Cohesion](high-coupling-low-cohesion.md):** Components are tightly coupled, meaning a change in one requires changes in many others. Functions and modules do too many unrelated things.
- **[Complex and Obscure Logic](complex-and-obscure-logic.md):** The code is hard to understand due to convoluted logic, lack of comments, or poor naming conventions.
- **[Global State and Side Effects](global-state-and-side-effects.md):** Excessive use of global variables or functions with hidden side effects makes it difficult to reason about code behavior.
- **[Inconsistent Codebase](inconsistent-codebase.md):** Different parts of the code follow different patterns, making it hard to predict behavior.
- **[Incomplete Knowledge](incomplete-knowledge.md):** Critical design decisions or complex algorithms are not documented, making it hard for new developers to understand the system.

## Detection Methods ○

- **Code Coverage Tools:** Use tools to measure test coverage. Low coverage is a strong indicator of brittleness.
- **Static Analysis Tools:** Tools that measure code complexity (e.g., cyclomatic complexity), coupling, and other metrics can highlight problematic areas.
- **Bug Tracking Metrics:** Monitor the rate of regression bugs introduced after new features or changes.
- **Developer Surveys/Interviews:** Ask developers about their experience working with the codebase and their confidence in making changes.
- **Code Review Feedback:** Look for recurring comments about code being hard to understand or risky to change.

## Examples

A team needs to update a small piece of business logic in a legacy system. The change is estimated to take a few hours, but because the code is so tightly coupled and lacks tests, the team spends two weeks trying to implement the change and fix all the new bugs it introduces. For example, a function that calculates a user's discount also updates their loyalty points and sends an email. Changing the discount calculation logic unexpectedly breaks the email sending feature because the function has too many responsibilities. This problem is a hallmark of aging, unmaintained software systems. It often arises from a lack of discipline in software engineering practices, especially testing and design principles, over a long period.