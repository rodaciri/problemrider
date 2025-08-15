---
title: Operational Overhead
description: A significant amount of time and resources are spent on emergency response
  and firefighting, rather than on planned development and innovation.
category:
- Code
- Process
related_problems:
- slug: maintenance-overhead
  similarity: 0.7
- slug: budget-overruns
  similarity: 0.65
- slug: context-switching-overhead
  similarity: 0.65
- slug: constant-firefighting
  similarity: 0.65
- slug: development-disruption
  similarity: 0.6
- slug: poor-operational-concept
  similarity: 0.6
layout: problem
---

## Description
Operational overhead is the indirect cost of running a software system. This includes the cost of things like monitoring, logging, alerting, and on-call support. When operational overhead is high, it can be a major drain on the resources of a company. It can also be a major source of stress and frustration for the development team. High operational overhead is often a symptom of a complex and unstable system. It is a sign that the team is spending too much time on reactive work and not enough time on proactive work.

## Indicators ⟡
- The on-call team is constantly being paged.
- The development team is spending a lot of time on operational tasks.
- The cost of monitoring and logging is high.
- There is a general sense of chaos and urgency in the team's daily work.

## Symptoms ▲
- **[Constant Firefighting](constant-firefighting.md):** The team is constantly in a state of crisis, lurching from one emergency to the next.
- **[Developer Frustration and Burnout](developer-frustration-and-burnout.md):** The constant stress and pressure of on-call support can lead to exhaustion and demoralization.
- **[Slow Development Velocity](slow-development-velocity.md):** The team's ability to deliver new features is severely hampered by the high operational overhead.
- **[Increased Cost of Development](increased-cost-of-development.md):** The cost of running the system is inflated due to the high operational overhead.

## Root Causes ▼
- **[Complex and Obscure Logic](complex-and-obscure-logic.md):** A complex and obscure codebase is difficult to monitor and debug, which can lead to high operational overhead.
- **Lack of Automated Tests:** Without a comprehensive suite of automated tests, it is difficult to make changes to the system with confidence, which can lead to a high rate of production issues.
- **[Monitoring Gaps](monitoring-gaps.md):** A lack of effective monitoring can make it difficult to detect problems in production before they impact users.
- **[Excessive Logging](excessive-logging.md):** Insufficient or excessive logging can make it difficult to diagnose problems in production.
- **Lack of a Staging Environment:** Without a realistic staging environment, it is difficult to test changes in a production-like setting before they are released.

## Detection Methods ○
- **On-Call Load:** Track the number of pages that the on-call team receives.
- **Time Spent on Operational Tasks:** Track the amount of time that the development team spends on operational tasks.
- **Cost of Monitoring and Logging:** Track the cost of your monitoring and logging tools.
- **Mean Time to Resolution (MTTR):** Measure the average time it takes to resolve a production issue.

## Examples
A company is running a large, distributed system. The system is complex and difficult to understand. The on-call team is constantly being paged to deal with production issues. The development team is spending a lot of time on operational tasks, such as debugging production issues and adding more logging. As a result, the team is making very little progress on new features, and the cost of running the system is high.
