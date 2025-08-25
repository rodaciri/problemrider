---
title: Null Pointer Dereferences
description: Programs attempt to access memory through null or invalid pointers, causing
  crashes and potential security vulnerabilities.
category:
- Code
- Security
related_problems:
- slug: buffer-overflow-vulnerabilities
  similarity: 0.55
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

- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.442, Strength: 0.694">ⓘ</span>
<br/>  In legacy systems, the failure to deallocate resources often leads to null pointer dereferences, as unhandled resource management can leave pointers pointing to freed memory, resulting in attempts to access invalid memory locations.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○

- **Static Analysis Tools:** Use tools that can identify potential null pointer dereference paths in source code
- **Runtime Checking:** Use runtime tools like AddressSanitizer or Valgrind to detect null pointer accesses
- **Null Checking Analysis:** Review code for proper null checking before pointer dereference
- **Exception Handling Review:** Analyze exception handling to ensure pointers are validated
- **Unit Testing:** Create tests that specifically exercise null pointer conditions
- **Code Review:** Manual review focusing on pointer initialization and validation patterns


## Examples

A C program allocates memory using malloc but doesn't check if the allocation succeeded. When memory is exhausted, malloc returns NULL, but the program continues to use the null pointer as if it points to valid memory, causing a segmentation fault when it tries to write data. Another example involves a Java application that retrieves an object from a collection that may be empty. Without checking if the returned object is null, the code immediately calls a method on the object, resulting in a NullPointerException that crashes the application thread and may leave the system in an inconsistent state.
