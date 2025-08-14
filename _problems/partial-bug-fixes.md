---
title: Partial Bug Fixes
description: Issues appear to be resolved but resurface in different contexts because
  the fix was not applied to all instances of the duplicated code.
category:
- Maintenance
- Quality
related_problems:
- slug: delayed-bug-fixes
  similarity: 0.7
- slug: difficult-code-reuse
  similarity: 0.65
- slug: incomplete-knowledge
  similarity: 0.65
- slug: inconsistent-quality
  similarity: 0.6
- slug: code-duplication
  similarity: 0.6
layout: problem
---

## Description
Partial bug fixes are a common problem in software systems with a high degree of code duplication. They occur when a bug is fixed in one instance of the duplicated code, but not in all of them. This can lead to a number of problems, including regression bugs, a loss of trust in the system, and a great deal of frustration for the development team. Partial bug fixes are often a sign of a poorly designed system with a high degree of code duplication.

## Indicators ⟡
- The same bug is reported over and over again.
- The team is constantly fixing regression bugs.
- The team is not sure if a bug has been fixed.
- The team is not able to reproduce bugs that are reported by users.

## Symptoms ▲
- **[Regression Bugs](regression-bugs.md):** A bug that was previously fixed reappears.
- **[User Trust Erosion](user-trust-erosion.md):** Users lose trust in the system when bugs that were supposed to be fixed reappear.
- **[Increased Customer Support Load](increased-customer-support-load.md):** The support team has to spend a lot of time dealing with bug reports about bugs that were supposed to be fixed.
- **[Debugging Difficulties](debugging-difficulties.md):** It is difficult to debug problems when the same bug is manifesting itself in different ways in different parts of the system.

## Root Causes ▼
- **[Code Duplication](code-duplication.md):** The same code is duplicated in multiple places, and the bug is not fixed in all of them.
- **[Synchronization Problems](synchronization-problems.md):** Changes made to one copy of the code are not propagated to the other copies.
- **[Incomplete Knowledge](incomplete-knowledge.md):** The developer who fixed the bug was not aware of all of the instances of the duplicated code.
- **Lack of a Centralized Bug Tracking System:** There is no centralized bug tracking system, which makes it difficult to track the status of bugs.

## Detection Methods ○
- **Code Duplication Analysis:** Use static analysis tools to identify duplicated code.
- **Regression Testing:** Use regression testing to verify that bugs that were previously fixed have not reappeared.
- **Code Reviews:** Code reviews are a great way to identify partial bug fixes.
- **Bug Tracking System:** Use a centralized bug tracking system to track the status of bugs.

## Examples
An e-commerce website has a bug in its checkout flow. The bug is fixed in the checkout flow for regular customers, but it is not fixed in the checkout flow for guest customers. As a result, the bug is still present in the system, and it is still affecting users. The problem could have been avoided if the developer who fixed the bug had been aware of the duplicated code and had fixed the bug in both places.
