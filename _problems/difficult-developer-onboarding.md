---
title: "Difficult Developer Onboarding"
description: "New developers take an unusually long time to become productive due to the complexity and inconsistency of the codebase."
category: ['Maintenance', 'Process']
related_problems: ['inconsistent-codebase', 'complex-and-obscure-logic', 'unusually-long-onboarding-time', 'knowledge-gaps', 'brittle-codebase']
layout: problem
---

## Description
Difficult developer onboarding is a significant problem that can have a major impact on a team's productivity and morale. It is characterized by a long and frustrating process for new developers to get up to speed with the codebase and the development environment. This can be caused by a variety of factors, including a lack of documentation, a complex and inconsistent codebase, and a lack of a clear and well-defined onboarding process. When a new developer cannot make meaningful contributions within a reasonable timeframe, it signals that the system is overly complex, poorly documented, or that the team's knowledge-sharing practices are inadequate.

## Indicators ⟡
- New developers are not able to contribute to the codebase for several weeks or even months.
- New developers ask a lot of questions about the codebase and the development environment.
- New developers express frustration and confusion about the codebase.
- It takes months for a new developer to be trusted with a non-trivial task.
- The team's velocity noticeably drops every time a new member joins.
- Existing team members spend a large amount of time hand-holding new hires.
- The project has no formal documentation.
- The existing documentation is outdated, incomplete, or inaccurate.
- Developers frequently have to ask other team members for information about the system.

## Symptoms ▲
- **Slow Team Velocity:** The team's velocity is slowed down by the need to support new developers.
- **Reduced Team Morale:** The team becomes frustrated with the slow progress of new developers.
- **[High Turnover](high-turnover.md):** New developers may become so frustrated that they leave the team.
- **[Increased Risk of Bugs](increased-risk-of-bugs.md):** New developers, lacking a full understanding of the system, are more likely to introduce defects.
- **[Developer Frustration and Burnout](developer-frustration-and-burnout.md):** New hires may become demoralized, while senior developers may burn out from the constant need to mentor and correct mistakes.
- **[Knowledge Gaps](knowledge-gaps.md):** Knowledge remains concentrated in the minds of a few key individuals, creating bottlenecks and a single point of failure.
- [Brittle Codebase](brittle-codebase.md): It is difficult to make changes to the system without breaking something.

## Root Causes ▼
- **[Inconsistent Codebase](inconsistent-codebase.md):** The codebase is a mixture of different styles and conventions, which makes it difficult for new developers to understand.
- **[Complex and Obscure Logic](complex-and-obscure-logic.md):** The codebase is complex and difficult to understand, which makes it difficult for new developers to make changes.
- **Lack of a Formal Onboarding Process:** There is no formal process for onboarding new developers, which leaves them to fend for themselves.
- **[High Coupling and Low Cohesion](high-coupling-low-cohesion.md):** The system's components are tightly intertwined, making it impossible to understand one part in isolation.
- **Lack of a Staging Environment:** New developers have no safe environment to experiment and learn without fear of breaking production systems.
- **[Time Pressure](time-pressure.md):** The team is under pressure to deliver features and does not have time to write documentation.
- **Lack of a Documentation Culture:** The team does not value documentation and does not see it as a priority.
- **No Clear Ownership:** There is no one responsible for ensuring that the documentation is kept up-to-date.

## Detection Methods ○
- **New Developer Surveys:** Ask new developers about their onboarding experience.
- **Time to First Commit:** Track the time it takes for a new developer to make their first commit.
- **Code Review Feedback:** Look for recurring questions and comments from new developers in code reviews.
- **Onboarding Surveys:** Collect feedback from new hires about their onboarding experience.
- **Code Contribution Metrics:** Monitor the number and impact of contributions from new team members over time.
- **Pair Programming Sessions:** Observe the interactions between new and existing team members to identify knowledge gaps and communication issues.
- **Review the Project's Documentation:** Assess the quality and completeness of the existing documentation.
- **Survey the Team:** Ask developers how easy it is for them to find the information they need to do their jobs.
- **Track the Number of Questions:** Monitor the number of questions that are asked in team communication channels. A high number of questions can be a sign that the documentation is inadequate.

## Examples
A new developer joins a team and is given a laptop and a link to the codebase. There is no documentation, no onboarding process, and no one to help them get started. The new developer spends the first few weeks trying to figure out how to build the codebase and run the tests. They eventually give up and leave the team. This is a classic example of how a lack of a formal onboarding process can lead to a high turnover rate.

A new developer joins a team working on a large, monolithic application. There is no documentation, and the original developers have long since left the company. The codebase is a tangled mess of different styles and technologies. The new developer spends their first month just trying to set up their local development environment. After three months, they are still only able to work on minor bug fixes, and they are constantly asking senior developers for help. This not only frustrates the new developer but also slows down the entire team.

A developer is tasked with fixing a bug in a legacy system. There is no documentation for the system, and the original developers have long since left the company. The developer has to spend weeks reverse-engineering the code to understand how it works before they can even begin to fix the bug. This is a classic example of how a lack of documentation can significantly increase the cost of software maintenance.
