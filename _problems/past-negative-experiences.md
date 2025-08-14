---
title: Past Negative Experiences
description: A situation where developers are hesitant to make changes to the codebase
  because of negative experiences in the past.
category:
- Team
- Process
related_problems:
- slug: history-of-failed-changes
  similarity: 65%
- slug: brittle-codebase
  similarity: 55%
- slug: fear-of-breaking-changes
  similarity: 55%
- slug: inconsistent-onboarding-experience
  similarity: 55%
- slug: outdated-tests
  similarity: 55%
layout: problem
---

## Description
Past negative experiences is a situation where developers are hesitant to make changes to the codebase because of negative experiences in the past. This is a common problem in teams that have a brittle codebase and a lack of automated tests. Past negative experiences can lead to a number of problems, including a fear of change, a slowdown in development velocity, and a general sense of stagnation.

## Indicators ⟡
- Developers are hesitant to make changes to the codebase.
- The team is not willing to take risks.
- The team is not innovating.
- The team is not learning from its mistakes.

## Symptoms ▲
- **[Fear of Change](fear-of-change.md):** Developers are afraid to make changes to the codebase because they are afraid of breaking something.
- **[Slow Development Velocity](slow-development-velocity.md):** It takes a long time to get things done because developers are hesitant to make changes to the codebase.
- **[Stagnant Architecture](stagnant-architecture.md):** The architecture of the system is not evolving because developers are not willing to make changes to it.
- **[Developer Frustration and Burnout](developer-frustration-and-burnout.md):** Developers get frustrated with the lack of progress and the feeling that they are not able to make a difference.

## Root Causes ▼
- **[Brittle Codebase](brittle-codebase.md):** The codebase is fragile and prone to breaking with even small modifications.
- **[Quality Blind Spots](quality-blind-spots.md):** Without comprehensive test coverage, developers cannot verify that changes don't introduce regressions.
- **[High Coupling and Low Cohesion](high-coupling-low-cohesion.md):** Tightly coupled components make it difficult to predict the impact of changes.
- **[Deployment Risk](deployment-risk.md):** Poor deployment processes make it difficult to quickly rollback problematic changes.

## Detection Methods ○
- **Developer Surveys:** Ask developers about their confidence level when making changes to different parts of the system.
- **Change Frequency Analysis:** Monitor how often different modules are modified; consistently avoided areas may indicate fear.
- **Estimation Patterns:** Look for patterns where similar changes have wildly different estimates based on the code area involved.
- **Code Review Comments:** Watch for excessive caution or lengthy discussions about potential risks during code reviews.

## Examples
A developer makes a change to the codebase that causes a major production outage. The developer is blamed for the outage, and they are hesitant to make changes to the codebase in the future. This is a common problem in companies that have a blame culture. It is important to create a culture where it is safe to fail. This will encourage developers to take risks and innovate.
