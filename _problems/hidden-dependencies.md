---
title: Hidden Dependencies
description: Workarounds and patches create unexpected dependencies between system
  components that are not obvious from the code structure.
category:
- Technical
- Design
- Maintenance
related_problems:
- slug: unpredictable-system-behavior
  similarity: 0.7
- slug: tight-coupling-issues
  similarity: 0.65
- slug: hidden-side-effects
  similarity: 0.65
- slug: system-integration-blindness
  similarity: 0.65
- slug: circular-dependency-problems
  similarity: 0.6
layout: problem
---

## Description

Hidden dependencies occur when system components become interdependent in ways that are not obvious from their interfaces, documentation, or apparent structure. These dependencies often emerge from workarounds, shared global state, implicit timing assumptions, or side effects that were not part of the original design. Developers making changes to one component may unknowingly break functionality in seemingly unrelated parts of the system because the true dependencies are not visible or documented.

## Indicators ⟡

- Changes in one module unexpectedly break functionality in unrelated modules
- System behavior depends on the order of operations in non-obvious ways
- Components work correctly in isolation but fail when integrated
- Debugging reveals connections between components that weren't apparent from the code
- System failures cascade through components that shouldn't be related

## Symptoms ▲

- **[Ripple Effect of Changes](ripple-effect-of-changes.md):** Small modifications cause unexpected failures in distant parts of the system
- **[Debugging Difficulties](debugging-difficulties.md):** Problems are hard to diagnose because the true cause is in an unexpected location
- **[Unpredictable System Behavior](unpredictable-system-behavior.md):** System behavior varies based on hidden state or timing conditions
- **[Integration Difficulties](integration-difficulties.md):** Components that work independently fail when combined
- **[Testing Complexity](testing-complexity.md):** Comprehensive testing requires understanding non-obvious component relationships

## Root Causes ▼

- **[Accumulation of Workarounds](accumulation-of-workarounds.md):** Patches and fixes create new interdependencies between components
- **[Global State and Side Effects](global-state-and-side-effects.md):** Components implicitly depend on shared global variables or singletons
- **[Hidden Side Effects](hidden-side-effects.md):** Functions or methods have hidden side effects that other components rely on
- **Timing Dependencies:** Components depend on specific execution order or timing that isn't documented
- **Shared Resource Assumptions:** Components make implicit assumptions about shared resources like databases or files
- **[Poor Encapsulation](poor-encapsulation.md):** Component interfaces don't clearly define their dependencies

## Detection Methods ○

- **Dependency Mapping:** Document and visualize actual runtime dependencies vs. apparent design dependencies
- **Failure Impact Analysis:** Track which components are affected when specific components fail
- **Integration Testing:** Test component combinations to reveal hidden interdependencies
- **Change Impact Assessment:** Monitor which components require modification when others change
- **Code Analysis Tools:** Use static analysis to identify potential hidden connections

## Examples

A user authentication service has a workaround that writes login attempts to a temporary file to work around a database connection issue. The reporting module secretly reads this file to generate real-time user activity reports, creating a hidden dependency that isn't documented anywhere. When the authentication team fixes the database issue and removes the temporary file, the reporting module fails mysteriously. Another example involves an e-commerce system where the inventory module depends on the shopping cart module cleaning up abandoned carts within 30 minutes to prevent overselling, but this dependency exists only as a comment in a configuration file that most developers never see. When the cart cleanup process is modified to run every 2 hours, inventory tracking becomes inaccurate, causing customer orders to fail.