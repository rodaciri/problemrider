---
title: Stack Overflow Errors
description: Programs exceed the allocated stack space due to excessive recursion
  or large local variables, causing application crashes.
category:
- Technical
- Performance
- Runtime Errors
related_problems:
- slug: buffer-overflow-vulnerabilities
  similarity: 0.763
- slug: null-pointer-dereferences
  similarity: 0.664
- slug: excessive-object-allocation
  similarity: 0.594
- slug: memory-fragmentation
  similarity: 0.563
- slug: spaghetti-code
  similarity: 0.548
layout: problem
---

## Description

Stack overflow errors occur when a program's call stack exceeds the allocated stack space, typically due to unbounded recursion, excessively deep function call chains, or allocation of very large local variables. The stack is a limited memory region used for function calls, local variables, and return addresses. When this space is exhausted, the program crashes with a stack overflow error, which can be difficult to debug and may indicate fundamental algorithmic or architectural problems.

## Indicators ⟡

- Application crashes with stack overflow or stack space exceeded errors
- Crashes occur during recursive operations or deeply nested function calls
- Performance degrades before crashes due to excessive stack usage
- Stack traces show very deep call hierarchies or infinite recursion patterns
- Memory profiling shows rapid stack growth during specific operations

## Symptoms ▲

- **Application Crashes:** Immediate termination with stack overflow exceptions or segmentation faults
- **[Unpredictable System Behavior](unpredictable-system-behavior.md):** System becomes unstable when stack limits are approached
- **Performance Degradation:** Slowdown before crash due to memory management overhead
- **Recursive Loop Detection:** Stack traces reveal infinite or excessively deep recursion
- **Memory Exhaustion:** Stack memory is consumed rapidly during problematic operations

## Root Causes ▼

- **Unbounded Recursion:** Recursive algorithms without proper termination conditions or with incorrect base cases
- **Circular Function Calls:** Functions call each other in cycles without termination conditions
- **Excessively Deep Call Chains:** Legitimate but impractically deep function call hierarchies
- **Large Local Variables:** Allocation of very large arrays or structures on the stack
- **Tail Recursion Without Optimization:** Recursive calls that could be optimized but aren't due to compiler limitations
- **Input-Dependent Recursion Depth:** Recursion depth depends on input size without bounds checking

## Detection Methods ○

- **Stack Usage Monitoring:** Monitor stack usage during application execution to identify growth patterns
- **Recursion Depth Tracking:** Instrument recursive functions to track maximum recursion depth
- **Static Analysis:** Analyze code for potential unbounded recursion or large stack allocations
- **Stress Testing:** Test with inputs that may cause deep recursion or large stack usage
- **Stack Trace Analysis:** Examine crash stack traces to identify recursion patterns
- **Profiling Tools:** Use memory profilers to monitor stack usage during operation

## Examples

A file system directory traversal function uses recursion to explore nested folders but lacks a maximum depth limit. When processing a directory structure with hundreds of nested levels (either legitimate or created maliciously), the recursive calls exhaust the stack space and crash the application. Another example involves a mathematical calculation function that recursively computes factorials without checking for reasonable input bounds. When a user inputs a large number like 50000, the recursive factorial calculation creates tens of thousands of stack frames and crashes with a stack overflow before completing the computation.