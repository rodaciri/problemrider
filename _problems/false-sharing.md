---
title: False Sharing
description: Multiple CPU cores access different variables located on the same cache
  line, causing unnecessary cache coherency traffic and performance degradation.
category:
- Technical
- Performance
- Concurrency
related_problems:
- slug: atomic-operation-overhead
  similarity: 75%
- slug: memory-barrier-inefficiency
  similarity: 60%
- slug: dma-coherency-issues
  similarity: 60%
- slug: lock-contention
  similarity: 60%
- slug: race-conditions
  similarity: 60%
layout: problem
---

## Description

False sharing occurs when multiple CPU cores access different data elements that happen to reside on the same cache line, causing the cache coherency protocol to invalidate and transfer cache lines between cores even though the cores are not actually sharing data logically. This creates unnecessary memory traffic and performance degradation in multi-threaded applications, as cores compete for cache lines containing unrelated data.

## Indicators ⟡

- Multi-threaded performance scales poorly with increased thread count
- Cache coherency traffic is high relative to actual data sharing requirements
- Performance degrades when threads access seemingly independent data structures
- Profiling shows excessive cache line transfers between CPU cores
- Single-threaded performance is good but multi-threaded performance is poor

## Symptoms ▲

- **Poor Multi-threading Scalability:** Adding more threads provides diminishing or negative performance returns
- **Excessive Cache Coherency Traffic:** High inter-core cache line transfers for logically unrelated data
- **[Synchronization Problems](synchronization-problems.md):** Unnecessary synchronization overhead due to cache line contention
- **Performance Variability:** Performance varies based on memory layout and thread assignment
- **CPU Core Contention:** CPU cores spend time managing cache coherency rather than computation

## Root Causes ▼

- **Data Structure Layout:** Related but independent variables placed adjacently in memory
- **Array Element Access:** Multiple threads accessing different elements of the same array
- **Structure Padding Issues:** Compiler padding places unrelated variables on same cache line
- **Global Variable Proximity:** Global variables accessed by different threads stored near each other
- **Counter Variables:** Multiple threads updating separate counters stored in adjacent memory
- **Thread-Local Storage Layout:** Thread-specific data inadvertently sharing cache lines

## Detection Methods ○

- **Cache Performance Profiling:** Use profilers that can detect cache line contention and false sharing
- **Hardware Performance Counters:** Monitor cache coherency events and inter-core traffic
- **Memory Layout Analysis:** Examine data structure layouts and memory alignment
- **Thread Affinity Testing:** Test performance with different thread-to-core assignments
- **Padding Experiments:** Add padding between data structures to test for false sharing effects
- **Cache Line Analysis Tools:** Use specialized tools that detect false sharing patterns

## Examples

A multi-threaded counter application has an array of counter variables, one per thread, to avoid synchronization. However, if multiple counters fit on the same 64-byte cache line, threads updating different counters cause cache line ping-ponging between CPU cores. Each update by one thread invalidates the cache line for other threads, forcing them to reload the entire cache line even though they're updating completely different counters. Another example involves a producer-consumer system where producer and consumer threads each have their own index variables (head and tail) for a circular buffer. If these indices are stored adjacently in memory, updating one index causes the other thread's cache line to be invalidated, creating false contention for data that is logically independent.