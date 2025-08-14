---
title: Maintenance Overhead
description: A disproportionate amount of time and effort is spent on maintaining
  the existing system, often due to duplicated code and a lack of reusable components.
category:
- Maintenance
- Process
related_problems:
- slug: high-maintenance-costs
  similarity: 0.8
- slug: operational-overhead
  similarity: 0.7
- slug: maintenance-cost-increase
  similarity: 0.7
- slug: maintenance-paralysis
  similarity: 0.65
- slug: context-switching-overhead
  similarity: 0.65
layout: problem
---

## Description
Maintenance overhead is the excessive effort required to keep a software system operational and up-to-date. This is a common problem in legacy systems, where years of accumulated technical debt and design compromises have made the codebase difficult to work with. When maintenance overhead is high, the development team is forced to spend most of its time on non-productive tasks, such as fixing bugs, applying security patches, and making minor tweaks to existing functionality. This leaves little time for innovation and new feature development, which can have a significant impact on the business.

## Indicators ⟡
- The team's backlog is dominated by maintenance tasks.
- It takes a long time to make even simple changes to the system.
- The team is constantly context-switching between different maintenance tasks.
- There is a high rate of regression bugs, where a change to one part of the system breaks something else.

## Symptoms ▲
- **[Slow Development Velocity](slow-development-velocity.md):** The team's ability to deliver new features is severely hampered by the high maintenance overhead.
- **[High Maintenance Costs](high-maintenance-costs.md):** The cost of maintaining the system is inflated due to the high effort required for each task.
- **[Developer Frustration and Burnout](developer-frustration-and-burnout.md):** Developers can become demoralized by the constant grind of maintenance work.
- **[Reduced Innovation](reduced-innovation.md):** The team has no time or energy to think about long-term improvements or new ideas.

## Root Causes ▼
- **[Code Duplication](code-duplication.md):** When the same code is duplicated in multiple places, it has to be maintained in multiple places, which increases the maintenance overhead.
- **[High Technical Debt](high-technical-debt.md):** The accumulation of technical debt is a major contributor to maintenance overhead.
- **[Quality Blind Spots](quality-blind-spots.md):** Without a comprehensive suite of automated tests, it is difficult and time-consuming to make changes to the system with confidence.
- **[Obsolete Technologies](obsolete-technologies.md):** The use of outdated technologies can make it difficult and expensive to find developers with the right skills and to integrate with modern systems.
- **[Inconsistent Codebase](inconsistent-codebase.md):** A poorly organized codebase is difficult to understand and navigate, which increases the time it takes to perform maintenance tasks.
- **[High Coupling and Low Cohesion](high-coupling-low-cohesion.md):** Tightly coupled components require changes in multiple places, while components with mixed responsibilities are harder to understand and maintain.

## Detection Methods ○
- **Time Tracking:** Track the amount of time that the team spends on maintenance tasks versus new development. A high ratio is a clear sign of a problem.
- **Bug Density:** Measure the number of bugs per line of code. A high bug density is a sign that the codebase is difficult to maintain.
- **Code Churn:** Analyze the history of the codebase to see which files are being modified most frequently. High churn in certain files can indicate that they are a source of high maintenance overhead.
- **Developer Surveys:** Ask developers about their experience with maintenance work. Their feedback can be a valuable source of information.

## Examples
A team is responsible for maintaining a large, monolithic application. The application is written in an old version of a programming language, and it has a lot of duplicated code. The team spends most of its time fixing bugs and making small changes to the application. They have very little time for new feature development. As a result, the application is falling behind its competitors, and the business is starting to lose market share.
