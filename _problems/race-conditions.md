---
title: Race Conditions
description: Multiple threads access shared resources simultaneously without proper
  synchronization, leading to unpredictable behavior and data corruption.
category:
- Technical
- Concurrency
- Data Integrity
related_problems:
- slug: lock-contention
  similarity: 65%
- slug: false-sharing
  similarity: 60%
- slug: deadlock-conditions
  similarity: 60%
- slug: synchronization-problems
  similarity: 55%
- slug: resource-contention
  similarity: 50%
layout: problem
---

## Description

Race conditions occur when multiple threads or processes access and manipulate shared data concurrently, and the outcome depends on the precise timing of their execution. Without proper synchronization mechanisms, the interleaving of operations can lead to data corruption, inconsistent state, or unexpected behavior. Race conditions are among the most challenging bugs to reproduce and debug because they depend on timing and may only manifest under specific load conditions.

## Indicators ⟡

- Application behavior varies between runs with identical inputs
- Data corruption or inconsistent state occurs intermittently
- Problems manifest only under high load or specific timing conditions
- Multi-threaded operations produce different results on different executions
- Debugging shows variables with unexpected values that don't match the intended logic flow

## Symptoms ▲

- **Data Corruption:** Shared data structures become corrupted due to concurrent modification
- **[Unpredictable System Behavior](unpredictable-system-behavior.md):** Application behavior varies unpredictably between identical executions
- **Inconsistent State:** System state becomes internally inconsistent due to partially completed operations
- **Lost Updates:** Concurrent modifications cause some updates to be lost or overwritten
- **[Synchronization Problems](synchronization-problems.md):** Coordination between threads fails, leading to incorrect program flow

## Root Causes ▼

- **Missing Synchronization:** Shared resources are accessed without proper locking or synchronization mechanisms
- **[Global State and Side Effects](global-state-and-side-effects.md):** Global variables are modified concurrently without protection
- **Inadequate Atomic Operations:** Operations that should be atomic are implemented as multiple non-atomic steps
- **Lock-Free Programming Errors:** Incorrect implementation of lock-free algorithms and data structures
- **Thread-Unsafe Library Usage:** Using non-thread-safe libraries or functions in multi-threaded contexts
- **Improper Synchronization Scope:** Synchronization mechanisms protect too little or too much of the critical section

## Detection Methods ○

- **Stress Testing:** Run applications under high concurrency to increase the likelihood of race conditions manifesting
- **Thread Sanitizers:** Use tools like ThreadSanitizer to detect data races during execution
- **Static Analysis:** Analyze code for potential race conditions and unsynchronized access to shared data
- **Mutation Testing:** Introduce timing variations to expose race condition vulnerabilities
- **Code Review:** Systematically review multi-threaded code for proper synchronization patterns
- **Logging and Instrumentation:** Add detailed logging around concurrent operations to trace race condition occurrences

## Examples

A web application maintains a global counter of active user sessions. Two threads simultaneously read the counter value (100), increment it, and write back the result. Due to the race condition, both threads read the same initial value and both write back 101, instead of the correct final value of 102. This causes the session count to be inaccurate and leads to incorrect resource allocation decisions. Another example involves an e-commerce system where two threads process the last item in inventory simultaneously. Both threads check that inventory > 0, find one item available, and both proceed to decrement the inventory and create orders. This results in overselling inventory and creating orders for products that are actually out of stock.