---
title: "High Technical Debt"
description: "Accumulation of design or implementation shortcuts that lead to increased costs and effort in the long run."
category: ['Technical', 'Quality', 'Maintenance', 'Process']
related_problems: ['brittle-codebase', 'slow-development-velocity']
layout: problem
---

## Description
High technical debt is the implied cost of rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer. This debt accumulates when organizations fail to allocate dedicated time, resources, or budget for improving existing code quality, addressing technical debt, or modernizing system architecture. This creates a cycle where technical debt accumulates faster than it can be addressed, eventually making the system increasingly difficult and expensive to maintain. Technical debt can be a major drag on productivity, and it can make it difficult and risky to add new features or make changes to the codebase.

## Indicators ⟡
- The team is constantly fixing bugs instead of building new features.
- It takes a long time to onboard new developers.
- The team is hesitant to refactor code.
- There is a lot of duplicated code.
- All development time is allocated to new features or bug fixes.
- Refactoring work is only done when absolutely necessary to complete other features.
- Technical debt items are identified but never prioritized in sprint planning.
- Developers express frustration about not having time to "clean up" code.

## Symptoms ▲

- **[Slow Development Velocity](slow-development-velocity.md):** It takes longer to add new features or make changes due to the complexity and interconnectedness of the existing code.
- **[Brittle Codebase](brittle-codebase.md):** Code quality deteriorates as quick fixes accumulate without proper restructuring.
- **[Increased Bug Count](increased-bug-count.md):** Changes introduce new defects more frequently, leading to a higher defect rate in production.
- **[Developer Frustration and Burnout](developer-frustration-and-burnout.md):** Developers are demotivated by constantly working with difficult, messy, or fragile code.
- **[High Maintenance Costs](high-maintenance-costs.md):** A significant portion of development effort is spent on fixing bugs or maintaining existing code rather than building new value.
- **[Difficulty Onboarding New Hires](difficulty-onboarding-new-hires.md):** New team members struggle to understand the convoluted codebase.
- **[Resistance to Change](resistance-to-change.md):** Teams are hesitant to refactor or improve parts of the system due to the perceived risk and effort involved.

## Root Causes ▼

- **[Time Pressure](time-pressure.md):** Teams are forced to take shortcuts to meet immediate deadlines, deferring proper solutions.
- **[Short-Term Focus](short-term-focus.md):** Management prioritizes immediate feature delivery over long-term code health.
- **[Knowledge Gaps](knowledge-gaps.md):** Developers may not be aware of best practices or design patterns, leading to suboptimal implementations.
- **[Invisible Nature of Technical Debt](invisible-nature-of-technical-debt.md):** The impact of technical debt is not visible to non-technical stakeholders, making it hard to justify addressing it.
- **[Review Process Breakdown](review-process-breakdown.md):** Inadequate code reviews fail to catch design flaws or poor coding practices.
- **[Frequent Changes to Requirements](frequent-changes-to-requirements.md):** Frequent or unclear requirements lead to rushed, patch-like solutions.
- **[Poorly Defined Responsibilities](poorly-defined-responsibilities.md):** No clear responsibility for maintaining code quality over time.
- **[Difficulty Quantifying Benefits](difficulty-quantifying-benefits.md):** It is hard to measure the ROI of refactoring work compared to new features, so it often loses out in prioritization.
- **[Obsolete Technologies](obsolete-technologies.md):** Using outdated tools or frameworks that make modern development practices difficult.

## Detection Methods ○

- **Codebase Metrics:** Monitor metrics like cyclomatic complexity, coupling, and code coverage. High values often indicate technical debt.
- **Bug Tracking Systems:** Analyze the types and frequency of bugs, especially those related to specific modules.
- **Developer Surveys/Interviews:** Ask developers about their pain points, areas of the codebase they avoid, and perceived technical debt.
- **Code Audits:** Conduct regular, systematic reviews of the codebase to identify areas of concern.
- **Retrospectives:** Discuss recurring issues and identify if they stem from technical debt.
- **Sprint Planning Analysis:** Track what percentage of sprint capacity is allocated to technical improvements.
- **Velocity Trends:** Track whether development velocity is declining over time due to increasing technical complexity.

## Examples
A legacy e-commerce platform has a highly coupled monolithic architecture. Adding a new payment gateway requires changes across multiple, seemingly unrelated modules, leading to weeks of development and several new bugs in production. In another case, a function that was originally designed for a simple task has been modified over time with numerous `if-else` statements and special cases, making it thousands of lines long and impossible to understand or test.

A software company has identified that their user authentication system is built on deprecated libraries with known security vulnerabilities. The development team estimates it would take three weeks to modernize the authentication system, significantly improving security and maintainability. However, the product roadmap is packed with new features for the next six months, and management refuses to allocate developer time for "infrastructure work" that doesn't directly provide customer value. Over the following year, the team spends an estimated eight weeks total working around limitations of the old authentication system, dealing with security patches, and troubleshooting integration issues that would have been eliminated by the modernization effort.

Another example involves an e-commerce platform where the product catalog module has grown into a 5,000-line monolithic class that takes hours to understand and test. Developers frequently estimate extra time for catalog-related features due to the complexity, but requests to refactor the module are always deferred in favor of adding new product features. Eventually, a critical bug in the catalog code takes two weeks to fix because of the complexity, costing more time than a proper refactoring would have required.