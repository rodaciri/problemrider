---
title: Large Estimates for Small Changes
description: The team consistently provides large time estimates for seemingly small
  changes, indicating underlying code complexity and risk.
category:
- Process
- Maintenance
related_problems:
- slug: fear-of-change
  similarity: 60%
- slug: brittle-codebase
  similarity: 55%
- slug: history-of-failed-changes
  similarity: 55%
- slug: slow-feature-development
  similarity: 55%
- slug: increased-cost-of-development
  similarity: 55%
layout: problem
---

## Description
When small, seemingly simple changes are consistently estimated to take a long time to implement, it is a strong indicator of underlying problems in the codebase. This phenomenon, often referred to as "high-cost-of-change," suggests that the system has become rigid and fragile. The development team is likely navigating a minefield of technical debt, where every modification carries the risk of unforeseen side effects. This problem can cripple a team's ability to respond to changing business needs and can be a major source of frustration for both developers and stakeholders.

## Indicators ⟡
- A simple bug fix is estimated to take days or weeks.
- Stakeholders are surprised by the high cost of minor feature requests.
- The team spends more time in meetings discussing the risks of a change than actually implementing it.
- There is a noticeable reluctance from the team to take on tasks that involve modifying existing code.

## Symptoms ▲
- **[Slow Development Velocity](slow-development-velocity.md):** The overall pace of development is slow, as even minor tasks consume significant time and resources.
- **[Increased Cost of Development](increased-cost-of-development.md):** The cost of implementing new features and fixing bugs is inflated due to the high effort required for each change.
- **[Reduced Innovation](reduced-innovation.md):** The team is unable to experiment or innovate because the cost of change is prohibitively high.
- **[Misaligned Deliverables](misaligned-deliverables.md):** Stakeholders may become frustrated with the development team's inability to deliver value in a timely manner, leading to a breakdown in communication and trust.

## Root Causes ▼
- **[Brittle Codebase](brittle-codebase.md):** The code is tightly coupled and lacks automated tests, making it impossible to make changes with confidence.
- **[High Technical Debt](high-technical-debt.md):** The accumulation of past shortcuts and design compromises has made the codebase difficult to work with.
- **[Complex and Obscure Logic](complex-and-obscure-logic.md):** The code is hard to understand, requiring developers to spend a lot of time deciphering it before they can make any changes.
- **[Fear of Change](fear-of-change.md):** Developers are afraid to touch the code because they know from experience that it is likely to break in unexpected ways.
- **Lack of Documentation:** The absence of clear documentation makes it difficult for developers to understand the impact of their changes.

## Detection Methods ○
- **Analyze Estimation Trends:** Track the estimates for tasks of similar complexity over time. A consistent increase in estimates is a red flag.
- **Compare Estimated vs. Actual Time:** If the actual time taken to complete tasks is consistently much higher than the estimates, it indicates that the team is struggling with unforeseen complexity.
- **Developer Feedback:** Ask developers why their estimates are so high. Their answers will often point to the root causes.
- **Code Complexity Metrics:** Use static analysis tools to measure code complexity. High complexity scores often correlate with high-cost-of-change.

## Examples
A product manager requests a small change to the user interface: adding a new field to a form. The development team estimates that this will take two weeks to implement. The product manager is shocked, as they expected it to be a simple, one-day task. The developers explain that the form is used in multiple places throughout the application, and the underlying data model is tightly coupled to other parts of the system. Any change to the form requires extensive testing to ensure that it doesn't break anything else. This is a classic example of how a brittle codebase can lead to large estimates for small changes.
