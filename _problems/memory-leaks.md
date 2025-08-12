---
title: "Memory Leaks"
description: "Applications fail to release memory that is no longer needed, leading to gradual memory consumption and eventual performance degradation or crashes."
category: ['Performance', 'Stability']
related_problems: ['memory-swapping']
layout: problem
---

## Description
A memory leak is a type of resource leak that occurs when a computer program incorrectly manages memory allocations in such a way that memory which is no longer needed is not released. Over time, these leaks can consume a significant amount of memory, leading to a degradation in performance and, eventually, a crash of the application or the entire system. Memory leaks are a common problem in languages that require manual memory management, but they can also occur in languages with automatic memory management if objects are unintentionally kept alive.

## Indicators ⟡
- The application's memory usage is constantly increasing, even when it is not under heavy load.
- The application is slow, and you suspect that it is due to a memory leak.
- The application is crashing with out-of-memory errors.
- You are getting complaints from users about slow performance.

## Symptoms ▲

- **[Unbounded Data Growth](unbounded-data-growth.md):** The application's memory footprint (RAM usage) steadily grows over time, even when idle or under constant load.
- **[Gradual Performance Degradation](gradual-performance-degradation.md):** The application becomes progressively slower, less responsive, or experiences increased latency as available memory diminishes.
- **[Stack Overflow Errors](stack-overflow-errors.md):** Eventually, the application may crash with out-of-memory exceptions or be terminated by the operating system.
- **[Memory Swapping](memory-swapping.md):** The operating system starts moving data from RAM to disk (swapping) to free up memory, leading to severe performance slowdowns.
- **[System Outages](system-outages.md):** The entire server or system hosting the application may become sluggish or unresponsive.

## Root Causes ▼

- **[Unreleased Resources](unreleased-resources.md):** Objects, connections, file handles, or other resources are allocated but never properly deallocated or closed.
- **[Improper Event Listener Management](improper-event-listener-management.md):** Event listeners are added but not removed when the associated UI components or objects are destroyed, leading to references that prevent garbage collection.
- **[Unbounded Data Structures](unbounded-data-structures.md):** Data is stored in global variables or caches that are never cleared, accumulating over the application's lifetime.
- **[Circular References](circular-references.md):** Two or more objects reference each other in a way that prevents the garbage collector from identifying them as unreachable.
- **[Vendor Dependency](vendor-dependency.md):** A memory leak exists within a third-party library or framework used by the application.
- **[Unbounded Data Structures](unbounded-data-structures.md):** Using data structures that grow indefinitely without proper pruning or size limits.

## Detection Methods ○

- **Memory Profilers:** Use language-specific memory profiling tools (e.g., Java VisualVM, .NET Memory Profiler, Chrome DevTools Memory tab, Valgrind for C/C++) to analyze heap dumps and track object allocations and references.
- **System Monitoring Tools:** Monitor the application's process memory usage over time using OS-level tools (`top`, `htop`, Task Manager) or APM tools.
- **Load Testing with Long Duration:** Run load tests for extended periods to observe memory growth patterns.
- **Code Review:** Look for common memory leak anti-patterns, especially in areas dealing with event listeners, resource management, or global state.
- **Automated Tests:** Integrate memory usage checks into automated tests, especially for long-running processes.

## Examples
A long-running backend service that processes customer orders gradually consumes more and more RAM. After several days, it crashes. Profiling reveals that a `HashMap` used to cache customer data is never cleared, and new customer entries are continuously added, leading to an unbounded growth in memory. In another case, a single-page application (SPA) allows users to navigate between different views. Each time a user visits a particular view, new event listeners are attached to DOM elements, but the old listeners are never removed when the view is destroyed. Over time, this accumulates thousands of unreferenced DOM nodes and listeners, leading to a significant memory leak and browser slowdown. Memory leaks are particularly problematic in long-running applications, services, or embedded systems. They can be difficult to diagnose because their symptoms often appear gradually and may only manifest after extended periods of operation.