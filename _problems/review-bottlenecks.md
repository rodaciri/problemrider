---
title: Review Bottlenecks
description: The code review process becomes a significant bottleneck, delaying the
  delivery of new features and bug fixes.
category:
- Process
- Team Dynamics
related_problems:
- slug: code-review-inefficiency
  similarity: 0.75
- slug: inadequate-code-reviews
  similarity: 0.75
- slug: review-process-breakdown
  similarity: 0.7
- slug: insufficient-code-review
  similarity: 0.7
- slug: team-members-not-engaged-in-review-process
  similarity: 0.7
- slug: maintenance-bottlenecks
  similarity: 0.65
layout: problem
---

## Description
Review bottlenecks occur when the code review process consistently slows down the development cycle. This can happen for a variety of reasons, such as having too few reviewers, large and complex pull requests, or a culture where reviews are not prioritized. When code reviews become a bottleneck, it can lead to frustration among developers, delayed releases, and a decrease in overall development velocity.

## Indicators ⟡
- Pull requests are sitting for a long time without being reviewed.
- Developers are frequently context-switching while waiting for reviews.
- The team has a low deployment frequency.
- There is a lot of pressure to approve pull requests quickly, even if they are not ready.

## Symptoms ▲
- **[Slow Development Velocity](slow-development-velocity.md):** The time it takes to get code from development to production is significantly longer than it should be.
- **[Code Review Inefficiency](code-review-inefficiency.md):** The review process takes excessive time and provides limited value.
- **[Bottleneck Formation](bottleneck-formation.md):** Code review process becomes a limiting factor for overall team throughput.
- **[Developer Frustration and Burnout](developer-frustration-and-burnout.md):** Developers are frustrated with the slow pace of development and the constant waiting.
- **[Increased Time to Market](increased-time-to-market.md):** It takes longer to deliver new features and bug fixes to customers.
- **[Reduced Innovation](reduced-innovation.md):** The team is not able to experiment and innovate as quickly as they would like.

## Root Causes ▼
- **[Large Pull Requests](large-pull-requests.md):** Large pull requests are difficult and time-consuming to review.
- **[Team Members Not Engaged in Review Process](team-members-not-engaged-in-review-process.md):** There are not enough people available to review code in a timely manner.
- **[Time Pressure](time-pressure.md):** Reviewers are under pressure to complete their own work and do not have enough time to dedicate to code reviews.
- **[Lack of Ownership and Accountability](lack-of-ownership-and-accountability.md):** There is no clear ownership of the code review process, and no one is held accountable for ensuring that reviews are completed in a timely manner.

## Detection Methods ○
- **Pull Request Lead Time:** Track the time it takes from when a pull request is created to when it is merged.
- **Reviewer Load:** Analyze the number of pull requests that are assigned to each reviewer.
- **Developer Surveys:** Ask developers about their experience with the code review process and whether they feel that it is a bottleneck.

## Examples
A team has a rule that all pull requests must be reviewed by two people. However, there are only two senior developers on the team who are qualified to review code. As a result, pull requests are often sitting for days or even weeks before they are reviewed. This is causing a lot of frustration among the junior developers, who are not able to get their code merged in a timely manner. In another example, a team has a culture where code reviews are not prioritized. Developers are expected to complete their own work before they review the code of others. This is leading to a situation where pull requests are often sitting for a long time before they are reviewed, which is slowing down the entire development process.
