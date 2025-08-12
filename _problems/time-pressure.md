---
title: "Time Pressure"
description: "Teams are forced to take shortcuts to meet immediate deadlines, deferring proper solutions and rushing important tasks like code reviews."
category: ['Process', 'Quality']
related_problems: ['high-technical-debt', 'inadequate-code-reviews', 'insufficient-testing']
layout: problem
---

## Description
Time pressure is a pervasive problem in software development where the emphasis on speed and meeting deadlines leads to compromises in quality. When teams are constantly rushed, they are more likely to take shortcuts, skip important steps like testing and thorough code reviews, and make suboptimal design decisions. This can lead to an accumulation of technical debt, a decrease in code quality, and an increase in the number of bugs.

## Indicators ⟡
- The team is consistently working overtime to meet deadlines.
- Features are frequently descoped or rushed at the end of a release cycle.
- There is a general feeling of being in a constant state of "firefighting".

## Symptoms ▲
- [High Technical Debt](high-technical-debt.md): The codebase is riddled with shortcuts and workarounds.
- [Review Process Breakdown](review-process-breakdown.md): Reviews are rushed and superficial.
- [Quality Blind Spots](quality-blind-spots.md): The team does not have enough time to write and run comprehensive tests.
- **[Increased Stress and Burnout](increased-stress-and-burnout.md):** Team members are overworked and stressed, leading to a decrease in morale and productivity.

## Root Causes ▼
- **[Unrealistic Deadlines](unrealistic-deadlines.md):** Management sets aggressive deadlines that do not account for the actual effort required.
- **[Planning Dysfunction](planning-dysfunction.md):** The team does not have a clear plan or a realistic estimate of the work involved.
- **[Scope Expansion](scope-expansion.md):** The scope of the project is constantly expanding without a corresponding adjustment in the timeline.
- **Product Direction Chaos:** There is no one to protect the team from unrealistic expectations and to prioritize the work.

## Detection Methods ○
- **Track Overtime Hours:** Monitor the number of hours the team is working beyond their normal schedule.
- **Analyze Bug Reports:** Look for an increase in the number of bugs, especially those that could have been prevented with more time for testing and review.
- **Team Retrospectives:** Discuss the impact of deadlines on the team's ability to produce high-quality work.

## Examples
A team is under pressure to deliver a new feature by the end of the quarter. To meet the deadline, they decide to skip writing unit tests and to perform only a cursory manual test. The feature is delivered on time, but it is full of bugs that are only discovered by users in production. The team then has to spend the next several weeks fixing the bugs, which ultimately delays the next feature release.