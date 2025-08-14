---
title: Team Coordination Issues
description: A situation where multiple developers or teams have difficulty working
  together on the same codebase.
category:
- Team
- Process
related_problems:
- slug: merge-conflicts
  similarity: 0.742
- slug: duplicated-effort
  similarity: 0.713
- slug: team-dysfunction
  similarity: 0.683
- slug: poor-communication
  similarity: 0.645
- slug: duplicated-work
  similarity: 0.644
layout: problem
---

## Description
Team coordination issues arise when multiple developers or teams have to work on the same codebase and have difficulty coordinating their work. This can lead to merge conflicts, duplicated effort, and a general slowdown in the pace of development. Team coordination issues are often a sign of a monolithic architecture, where everything is tightly coupled and it is difficult to work on different parts of the system in isolation.

## Indicators ⟡
- Frequent merge conflicts.
- Developers are often blocked waiting for other developers to finish their work.
- There is a lot of duplicated effort.
- It is difficult to get a clear picture of the overall status of the project.

## Symptoms ▲
- **[Slow Development Velocity](slow-development-velocity.md):** It takes a long time to get things done because of all the coordination overhead.
- **[Merge Conflicts](merge-conflicts.md):** Developers spend a lot of time resolving merge conflicts.
- **[Lower Code Quality](lower-code-quality.md):** The code quality suffers because developers are not able to work on their own code in isolation.
- **[Developer Frustration and Burnout](developer-frustration-and-burnout.md):** Developers get frustrated with all the coordination issues and the lack of progress.

## Root Causes ▼
- **[Monolithic Architecture Constraints](monolithic-architecture-constraints.md):** The codebase is not modular, so it is difficult for developers to work on different parts of the system in isolation.
- **[Stakeholder-Developer Communication Gap](stakeholder-developer-communication-gap.md):** Developers do not have a common understanding of the system, so they have difficulty communicating with each other.
- **[Communication Breakdown](communication-breakdown.md):** There is a lack of communication between developers and teams.
- **[Product Direction Chaos](product-direction-chaos.md):** There is no one who is responsible for making sure that everyone is working together effectively.

## Detection Methods ○
- **Version Control Metrics:** Use tools to measure the number of merge conflicts and the amount of time that developers spend resolving them.
- **Developer Surveys:** Ask developers if they feel like they are able to work effectively with other developers on the team.
- **Project Management Metrics:** Track the amount of time that developers spend waiting for other developers to finish their work.

## Examples
A company has a large, monolithic e-commerce application. The front-end team and the back-end team are constantly stepping on each other's toes. The front-end team wants to make changes to the UI, but they have to wait for the back-end team to make changes to the API. The back-end team is busy working on other features, so the front-end team is often blocked. This leads to a lot of frustration and a slowdown in the pace of development.
