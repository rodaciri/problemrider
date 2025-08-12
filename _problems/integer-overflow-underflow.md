---
title: "Integer Overflow and Underflow"
description: "Arithmetic operations produce results that exceed the maximum or minimum values representable by integer data types, leading to unexpected behavior."
category: ['Technical', 'Data Integrity', 'Security']
related_problems: ['unpredictable-system-behavior', 'data-protection-risk', 'algorithmic-complexity-problems']
layout: problem
---

## Description

Integer overflow and underflow occur when arithmetic operations produce results that cannot be represented within the bounds of the integer data type being used. Overflow happens when a result exceeds the maximum representable value, while underflow occurs when a result is less than the minimum representable value. In most programming languages, these conditions cause the value to wrap around, leading to unexpected and potentially dangerous behavior including security vulnerabilities.

## Indicators ⟡

- Calculations produce unexpectedly small or negative results from large positive inputs
- Loop counters or array indices become negative unexpectedly
- Security checks are bypassed due to unexpected value wrapping
- Memory allocation fails or allocates incorrect amounts due to size calculation errors
- Financial or measurement calculations produce obviously incorrect results

## Symptoms ▲

- **[Unpredictable System Behavior](unpredictable-system-behavior.md):** Applications behave unexpectedly due to wrapped integer values
- **[Buffer Overflow Vulnerabilities](buffer-overflow-vulnerabilities.md):** Buffer overflows or access control bypasses caused by integer wrapping
- **[Data Protection Risk](data-protection-risk.md):** Sensitive data exposed due to incorrect bounds checking
- **[Inconsistent Behavior](inconsistent-behavior.md):** Financial, scientific, or engineering calculations produce incorrect results
- **[Excessive Object Allocation](excessive-object-allocation.md):** Incorrect memory allocation sizes due to overflow in size calculations

## Root Causes ▼

- **[Inadequate Error Handling](inadequate-error-handling.md):** Large or malicious input values are not validated before arithmetic operations
- **Unsafe Arithmetic Operations:** Addition, multiplication, or other operations performed without overflow checking
- **[Poor Domain Model](poor-domain-model.md):** Using integer types that are too small for the expected range of values
- **Loop Counter Issues:** Loop counters that can be incremented beyond their maximum representable value
- **Size Calculation Errors:** Calculating buffer sizes or array indices without considering overflow possibilities
- **Signed/Unsigned Type Confusion:** Mixing signed and unsigned integers in ways that cause unexpected behavior

## Detection Methods ○

- **Static Analysis Tools:** Use tools that can identify potential integer overflow conditions in arithmetic operations
- **Runtime Overflow Detection:** Use compiler flags or runtime libraries that detect integer overflow during execution
- **Bounds Checking:** Implement explicit bounds checking before arithmetic operations
- **Input Validation Testing:** Test with extreme input values to identify overflow conditions
- **Code Review:** Review arithmetic operations for potential overflow scenarios
- **Fuzzing:** Use automated testing with large or unusual input values to trigger overflow conditions

## Examples

A web application calculates memory buffer sizes by multiplying the number of items by the size per item. An attacker provides an extremely large item count that causes integer overflow, making the calculated buffer size wrap around to a small positive value. The application allocates a small buffer but then writes data for the original large number of items, causing a buffer overflow that can be exploited for code injection. Another example involves a financial application that calculates interest by multiplying principal amounts by interest rates. For very large principal amounts, the multiplication overflows and wraps to a negative value, causing the application to incorrectly calculate negative interest and potentially crediting money to accounts inappropriately.