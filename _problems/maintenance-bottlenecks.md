---
title: Maintenance Bottlenecks
description: A situation where a small number of developers are the only ones who
  can make changes to a critical part of the system.
category:
- Code
- Process
- Team
related_problems:
- slug: bottleneck-formation
  similarity: 0.75
- slug: maintenance-paralysis
  similarity: 0.7
- slug: legacy-skill-shortage
  similarity: 0.65
- slug: single-points-of-failure
  similarity: 0.65
- slug: review-bottlenecks
  similarity: 0.65
- slug: maintenance-overhead
  similarity: 0.65
layout: problem
---

## Description
A maintenance bottleneck occurs when a small number of developers, or even a single developer, are the only ones who have the knowledge and expertise to maintain a critical part of the system. This creates a single point of failure and can significantly slow down the pace of development. It also puts a great deal of stress on the developers who are the bottlenecks.

## Indicators ⟡
- A small number of developers are consistently assigned to work on a specific part of the system.
- Other developers are hesitant to make changes to that part of the system.
- The developers who are the bottlenecks are often overloaded with work.
- There is a lack of documentation for that part of the system.

## Symptoms ▲
- **[Slow Development Velocity](slow-development-velocity.md):** It takes a long time to get changes made to the part of the system that is a bottleneck.
- **[Knowledge Silos](knowledge-silos.md):** The knowledge about that part of the system is not shared with the rest of the team.
- **[Developer Frustration and Burnout](developer-frustration-and-burnout.md):** The developers who are the bottlenecks are often overworked and stressed.
- **[Single Points of Failure](single-points-of-failure.md):** If the developers who are the bottlenecks leave the company, the team will have a very difficult time maintaining that part of the system.

## Root Causes ▼
- **[Complex and Obscure Logic](complex-and-obscure-logic.md):** The part of the system that is a bottleneck is often very complex and difficult to understand.
- **[Information Decay](information-decay.md):** There is no documentation to help other developers understand that part of the system.
- **[Knowledge Silos](knowledge-silos.md):** The developers who are the bottlenecks do not have the time or the incentive to share their knowledge with the rest of the team.
- **[Inadequate Onboarding](inadequate-onboarding.md):** New developers are not given the time or the resources to learn about that part of the system.

## Detection Methods ○
- **Bus Factor Analysis:** Identify the key developers who are the only ones who know how to work on a critical part of the system.
- **Code Ownership Analysis:** Use tools to identify the developers who have made the most changes to a specific part of the system.
- **Developer Surveys:** Ask developers if they feel like there are any parts of the system that they are afraid to change.

## Examples
A company has a legacy billing system that was written by a single developer who has since left the company. Now, only one other developer on the team understands how the system works. This developer is constantly being pulled away from their other work to fix bugs and make changes to the billing system. The other developers on the team are afraid to touch the billing system because they don't understand it and they are afraid of breaking it. As a result, the billing system has become a major bottleneck for the company.
