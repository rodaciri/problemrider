---
title: Lock Contention
description: Multiple threads compete for the same locks, causing threads to block
  and reducing parallel execution efficiency.
category:
- Technical
- Concurrency
- Performance
related_problems:
- slug: memory-barrier-inefficiency
  similarity: 0.721
- slug: atomic-operation-overhead
  similarity: 0.696
- slug: deadlock-conditions
  similarity: 0.639
- slug: false-sharing
  similarity: 0.617
- slug: race-conditions
  similarity: 0.567
layout: problem
---

## Description

Lock contention occurs when multiple threads frequently compete for the same synchronization primitives (mutexes, locks, semaphores), causing threads to block while waiting for locks to become available. This reduces the effectiveness of parallel execution as threads spend time waiting rather than doing useful work, and can lead to performance degradation that's worse than single-threaded execution in severe cases.

## Indicators ⟡

- Multi-threaded applications perform worse than single-threaded equivalents
- Thread profiling shows significant time spent waiting for locks
- Lock acquisition times increase under higher thread counts
- System monitoring shows threads in blocked or waiting states
- CPU utilization is low despite high thread activity

## Symptoms ▲

- **Thread Blocking:** Threads spend excessive time waiting for lock acquisition
- **Reduced Parallelism:** Multi-threaded code performs poorly due to serialization
- **[Synchronization Problems](synchronization-problems.md):** Excessive synchronization overhead reduces overall system efficiency
- **Performance Degradation:** Adding more threads decreases rather than increases performance
- **CPU Underutilization:** Low CPU usage despite high thread count due to blocking

## Root Causes ▼

- **Coarse-Grained Locking:** Single locks protect large critical sections or multiple unrelated resources
- **Hot Lock Patterns:** Multiple threads frequently access the same shared resource
- **Lock Hierarchy Issues:** Poor lock ordering creates unnecessary contention points
- **Read-Write Lock Misuse:** Using exclusive locks where read-shared locks would be appropriate
- **Global State Protection:** Global variables requiring synchronization create system-wide bottlenecks
- **Lock Granularity Problems:** Inappropriate balance between too few and too many locks

## Detection Methods ○

- **Lock Profiling:** Use profiling tools that can identify lock contention and wait times
- **Thread State Analysis:** Monitor thread states to identify blocking patterns
- **Performance Scaling Tests:** Test performance with varying thread counts to identify contention
- **Lock Instrumentation:** Add instrumentation to measure lock hold times and wait times
- **Concurrency Profilers:** Use specialized tools designed to detect synchronization bottlenecks
- **CPU Utilization Monitoring:** Analyze CPU usage patterns during high-contention scenarios

## Examples

A web server uses a single global lock to protect access to a shared cache that stores user session data. Under high load, hundreds of request threads compete for this lock, causing most threads to block while waiting for cache access. The result is that a 16-core server performs worse than a single-threaded version because threads spend more time waiting for the lock than processing requests. Another example involves a parallel data processing system where multiple worker threads process items from a shared queue protected by a single mutex. As the number of worker threads increases, performance decreases because threads spend most of their time waiting to access the queue rather than processing data items.