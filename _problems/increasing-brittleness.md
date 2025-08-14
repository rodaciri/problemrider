---
title: Increasing Brittleness
description: Software systems become more fragile and prone to breaking over time,
  with small changes having unpredictable and widespread effects.
category:
- System Quality
- Maintainability
- Risk
related_problems:
- slug: brittle-codebase
  similarity: 0.7
- slug: quality-degradation
  similarity: 0.65
- slug: rapid-system-changes
  similarity: 0.6
- slug: tight-coupling-issues
  similarity: 0.6
- slug: unpredictable-system-behavior
  similarity: 0.6
layout: problem
---

## Description

Increasing brittleness occurs when software systems become progressively more fragile and unstable over time, where seemingly minor changes can cause unexpected failures or break unrelated functionality. This brittleness develops as technical debt accumulates, dependencies become more complex, and the system architecture degrades without proper maintenance. Brittle systems are difficult to modify safely and often exhibit unpredictable behavior.

## Indicators ⟡

- Small changes frequently cause unexpected failures in unrelated system areas
- The number of bugs increases even when new features aren't being added
- System behavior becomes increasingly unpredictable
- More time is spent debugging than developing new functionality
- Changes that worked in development fail in production for unclear reasons

## Symptoms ▲

- **[Cascade Failures](cascade-failures.md):** Failures in one component trigger failures throughout the system
- **[Unpredictable System Behavior](unpredictable-system-behavior.md):** System responses become inconsistent and hard to predict
- **Regression Bug Increase:** New bugs appear in previously working functionality
- **Production Instability:** Production environments experience frequent unexpected issues
- **[Fear of Change](fear-of-change.md):** Development team becomes afraid to make any modifications

## Root Causes ▼

- **[High Technical Debt](high-technical-debt.md):** Accumulated shortcuts and poor design decisions create instability
- **[Tight Coupling Issues](tight-coupling-issues.md):** System components are too interdependent, causing changes to ripple unexpectedly
- **Inadequate Testing:** Insufficient test coverage fails to catch interactions and edge cases
- **[Inadequate Error Handling](inadequate-error-handling.md):** System doesn't gracefully handle unexpected conditions
- **Complex Interdependencies:** System components interact in ways that are difficult to understand and predict

## Detection Methods ○

- **Failure Rate Tracking:** Monitor the frequency of system failures and their relationship to recent changes
- **Change Impact Analysis:** Assess how often changes affect unrelated system areas
- **Bug Trend Analysis:** Track bug reports over time, particularly regression bugs
- **System Stability Metrics:** Measure system uptime, error rates, and performance consistency
- **Change Risk Assessment:** Evaluate the perceived risk associated with making system modifications

## Examples

An e-commerce platform experiences a critical failure in its product recommendation engine after a seemingly unrelated change to the user authentication system. Investigation reveals that the authentication change modified a shared caching layer that the recommendation engine relied on, even though this dependency wasn't documented anywhere. This type of unexpected failure happens increasingly often - a database schema change breaks the reporting system, a UI update causes checkout failures, and a performance optimization triggers inventory tracking bugs. The development team spends more time investigating and fixing these cascade failures than implementing new features. Another example involves a financial trading system where adding a new data validation rule causes existing trades to fail processing due to subtle changes in data flow timing. The system has become so interconnected and fragile that any change risks triggering failures in distant parts of the system, making development extremely slow and risky.