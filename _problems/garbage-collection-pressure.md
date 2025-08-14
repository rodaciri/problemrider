---
title: Garbage Collection Pressure
description: Excessive object allocation and deallocation causes frequent garbage
  collection cycles, creating performance pauses and reducing application throughput.
category:
- Technical
- Performance
- Memory Management
related_problems:
- slug: excessive-object-allocation
  similarity: 70%
- slug: circular-references
  similarity: 55%
- slug: memory-leaks
  similarity: 55%
- slug: memory-fragmentation
  similarity: 55%
- slug: resource-allocation-failures
  similarity: 50%
layout: problem
---

## Description

Garbage collection pressure occurs when applications create and discard objects at such a high rate that the garbage collector must run frequently to reclaim memory, causing noticeable performance pauses and reduced overall throughput. This problem is particularly severe in applications with high allocation rates, large object graphs, or inappropriate object lifetime patterns that stress the garbage collection system.

## Indicators ⟡

- Frequent garbage collection cycles interrupt application execution
- GC pause times increase over application lifetime
- High allocation rates shown in memory profiling
- Application throughput decreases due to GC overhead
- Memory usage patterns show rapid allocation and collection cycles

## Symptoms ▲

- **Application Pause Times:** Noticeable delays during garbage collection cycles
- **Reduced Throughput:** Overall application performance decreases due to GC overhead
- **Response Time Variability:** Inconsistent response times due to unpredictable GC timing
- **CPU Usage Spikes:** Periodic high CPU usage during garbage collection phases
- **[Gradual Performance Degradation](gradual-performance-degradation.md):** Performance gets worse as heap fragmentation and GC pressure increase

## Root Causes ▼

- **High Object Allocation Rate:** Applications create temporary objects at unsustainable rates
- **Large Object Graphs:** Complex object relationships require extensive GC traversal
- **Inappropriate Object Lifetimes:** Objects live longer than necessary, preventing timely collection
- **Boxing/Unboxing Operations:** Excessive conversion between value types and objects
- **String Concatenation:** Inefficient string operations creating many temporary objects
- **Collection API Misuse:** Using collections in ways that create unnecessary object allocation

## Detection Methods ○

- **GC Logging:** Enable garbage collector logging to analyze collection frequency and duration
- **Memory Profiling:** Use profilers to track object allocation rates and garbage collection impact
- **Application Performance Monitoring:** Monitor throughput and response time correlations with GC activity
- **Heap Analysis:** Analyze heap dumps to identify object allocation patterns and lifetimes
- **GC Tuning Metrics:** Monitor GC-specific metrics like collection time percentage and pause duration
- **Allocation Profiling:** Profile object allocation hot paths and patterns

## Examples

A web service processes JSON requests by parsing them into object graphs, processing the data, and serializing responses. The parsing creates thousands of temporary objects per request, and under high load, the garbage collector runs every few seconds, causing 100-200ms pauses that make the API unresponsive. The application's throughput drops by 40% due to time spent in garbage collection rather than request processing. Another example involves a data analytics application that processes large datasets by creating intermediate collection objects for each data transformation step. The application creates millions of temporary list and map objects, causing the garbage collector to run almost continuously and making data processing take 10x longer than necessary due to constant memory management overhead.