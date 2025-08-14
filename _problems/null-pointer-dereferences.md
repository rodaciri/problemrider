---
title: Null Pointer Dereferences
description: Programs attempt to access memory through null or invalid pointers, causing
  crashes and potential security vulnerabilities.
category:
- Technical
- Runtime Errors
- Security
related_problems:
- slug: buffer-overflow-vulnerabilities
  similarity: 70%
- slug: stack-overflow-errors
  similarity: 65%
- slug: race-conditions
  similarity: 55%
- slug: inadequate-error-handling
  similarity: 55%
- slug: abi-compatibility-issues
  similarity: 55%
layout: problem
---

## Description

Null pointer dereferences occur when a program attempts to access memory through a pointer that is null (points to memory address 0) or contains an invalid memory address. This is one of the most common runtime errors in systems programming and can cause immediate application crashes, data corruption, or security vulnerabilities. The error typically manifests as segmentation faults, access violations, or null pointer exceptions depending on the programming language and runtime environment.

## Indicators ⟡

- Application crashes with segmentation faults, access violations, or null pointer exceptions
- Crashes occur when accessing object methods or properties on potentially null references
- Debugging shows null or invalid pointer values at the point of crash
- Crashes happen inconsistently depending on program state or input conditions
- Stack traces point to memory access operations on null pointers

## Symptoms ▲

- **Application Crashes:** Immediate termination with memory access violation errors
- **[Unpredictable System Behavior](unpredictable-system-behavior.md):** System behavior becomes erratic when null pointers are accessed
- **[Increased Error Rates](increased-error-rates.md):** Higher frequency of runtime errors due to pointer issues
- **Data Corruption:** Attempted writes through null pointers may corrupt memory at address 0
- **[Data Protection Risk](data-protection-risk.md):** Potential security vulnerabilities from memory access violations

## Root Causes ▼

- **Uninitialized Pointers:** Pointers are declared but not initialized before use
- **Failed Memory Allocation:** Malloc or new operations fail and return null, but return value isn't checked
- **Premature Memory Deallocation:** Objects are freed or deleted while pointers still reference them
- **Array Bounds Violations:** Accessing array elements with invalid indices that result in null pointer access
- **Exception Handling Gaps:** Error conditions leave pointers in null states without proper validation
- **API Misuse:** Incorrect use of APIs that may return null values under certain conditions

## Detection Methods ○

- **Static Analysis Tools:** Use tools that can identify potential null pointer dereference paths in source code
- **Runtime Checking:** Use runtime tools like AddressSanitizer or Valgrind to detect null pointer accesses
- **Null Checking Analysis:** Review code for proper null checking before pointer dereference
- **Exception Handling Review:** Analyze exception handling to ensure pointers are validated
- **Unit Testing:** Create tests that specifically exercise null pointer conditions
- **Code Review:** Manual review focusing on pointer initialization and validation patterns

## Examples

A C program allocates memory using malloc but doesn't check if the allocation succeeded. When memory is exhausted, malloc returns NULL, but the program continues to use the null pointer as if it points to valid memory, causing a segmentation fault when it tries to write data. Another example involves a Java application that retrieves an object from a collection that may be empty. Without checking if the returned object is null, the code immediately calls a method on the object, resulting in a NullPointerException that crashes the application thread and may leave the system in an inconsistent state.