---
title: Stack Overflow Errors
description: Programs exceed the allocated stack space due to excessive recursion
  or large local variables, causing application crashes.
category:
- Code
- Performance
related_problems:
- slug: memory-leaks
  similarity: 0.55
- slug: resource-allocation-failures
  similarity: 0.55
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

- [Unbounded Data Structures](unbounded-data-structures.md) <span class="info-tooltip" title="Confidence: 0.613, Strength: 0.898">ⓘ</span>
<br/>  Excessive growth of data structures without constraints can lead to increased memory usage, which exacerbates stack overflow errors by consuming available stack space more rapidly during recursive function calls or when allocating large local variables.
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.562, Strength: 0.755">ⓘ</span>
<br/>  Excessive recursion or large local variables can lead to stack overflow errors that disrupt the execution flow, causing delayed responses from services and ultimately resulting in timeouts for upstream consumers.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.541, Strength: 0.845">ⓘ</span>
<br/>  Excessive recursion can lead to stack overflow errors, which may cause the program to fail to release allocated resources before crashing, thereby serving as an indicator of underlying memory management issues in legacy systems.
- [Interrupt Overhead](interrupt-overhead.md) <span class="info-tooltip" title="Confidence: 0.321, Strength: 0.732">ⓘ</span>
<br/>  Excessive hardware interrupts can lead to frequent context switches that increase the likelihood of stack overflow errors, as the disrupted execution flow prevents proper stack management and can exacerbate issues with recursive calls or large local variables.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○

- **Stack Usage Monitoring:** Monitor stack usage during application execution to identify growth patterns
- **Recursion Depth Tracking:** Instrument recursive functions to track maximum recursion depth
- **Static Analysis:** Analyze code for potential unbounded recursion or large stack allocations
- **Stress Testing:** Test with inputs that may cause deep recursion or large stack usage
- **Stack Trace Analysis:** Examine crash stack traces to identify recursion patterns
- **Profiling Tools:** Use memory profilers to monitor stack usage during operation


## Examples

A file system directory traversal function uses recursion to explore nested folders but lacks a maximum depth limit. When processing a directory structure with hundreds of nested levels (either legitimate or created maliciously), the recursive calls exhaust the stack space and crash the application. Another example involves a mathematical calculation function that recursively computes factorials without checking for reasonable input bounds. When a user inputs a large number like 50000, the recursive factorial calculation creates tens of thousands of stack frames and crashes with a stack overflow before completing the computation.
