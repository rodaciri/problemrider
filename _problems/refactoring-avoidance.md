---
title: Refactoring Avoidance
description: The development team actively avoids refactoring the codebase, even when
  they acknowledge it's necessary, due to fear of introducing new bugs.
category:
- Process
- Maintenance
- Quality
related_problems:
- slug: high-technical-debt
  similarity: 0.749
- slug: fear-of-breaking-changes
  similarity: 0.715
- slug: resistance-to-change
  similarity: 0.712
- slug: maintenance-paralysis
  similarity: 0.706
- slug: fear-of-change
  similarity: 0.697
layout: problem
---

## Description
Refactoring avoidance is the phenomenon where a development team consistently postpones or avoids improving the internal structure of the code, even when they are aware of its deficiencies. This is often driven by a fear that any change, no matter how well-intentioned, will introduce new bugs or break existing functionality. This avoidance is a self-perpetuating cycle: the longer refactoring is delayed, the more technical debt accumulates, and the riskier any future changes become. It is a clear sign of a fragile and unhealthy codebase.

## Indicators ⟡
- Developers say things like, "Don't touch that code, it's a house of cards."
- The team consistently chooses to add new code rather than modify existing code.
- There is a long list of known technical debt items that never gets addressed.
- The codebase is full of commented-out code, dead code, and other forms of cruft.

## Symptoms ▲
- **[Brittle Codebase](brittle-codebase.md):** The codebase becomes increasingly fragile and difficult to change over time.
- **[High Technical Debt](high-technical-debt.md):** The accumulation of technical debt accelerates, making the system more and more expensive to maintain.
- **[Slow Development Velocity](slow-development-velocity.md):** It takes longer and longer to add new features because developers have to work around the existing, messy code.
- **[Developer Frustration and Burnout](developer-frustration-and-burnout.md):** Developers become demoralized by working in a codebase that they are afraid to improve.

## Root Causes ▼
- **[Fear of Change](fear-of-change.md):** The primary driver of refactoring avoidance is the fear of introducing new bugs in a system that is not well-understood or well-tested.
- **[Quality Blind Spots](quality-blind-spots.md):** Without a comprehensive suite of automated tests, developers have no way to verify that their refactoring efforts have not broken anything.
- **[Time Pressure](time-pressure.md):** The team is under constant pressure to deliver new features, and there is no time allocated for non-functional improvements like refactoring.
- **[Short-Term Focus](short-term-focus.md):** The organization does not recognize the value of refactoring and does not provide the necessary time and resources to do it.
- **Lack of Ownership and Accountability:** No one is responsible for the long-term health of the codebase, so no one is willing to take on the risk of refactoring.

## Detection Methods ○
- **Code Churn Analysis:** Analyze the history of the codebase to see which files are being modified most frequently. If the same files are being churned over and over again without any improvement in their structure, it is a sign of refactoring avoidance.
- **Technical Debt Backlog:** If the team has a backlog of technical debt items that is constantly growing and never shrinking, it is a clear sign that they are avoiding refactoring.
- **Developer Interviews:** Ask developers about their attitude towards refactoring. If they express fear or reluctance, it is a sign of a problem.
- **Code Quality Metrics:** Track code quality metrics over time. A steady decline in quality is a strong indicator of refactoring avoidance.

## Examples
A team is working on a legacy system that has been in production for over a decade. The code is a mess, but it works. The team is afraid to touch it for fear of breaking it. When they need to add a new feature, they simply copy and paste existing code and modify it slightly. This leads to a lot of code duplication and makes the system even harder to maintain. The team knows that they should refactor the code, but they never do because they are afraid of the consequences. This is a classic example of refactoring avoidance.
