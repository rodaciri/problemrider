---
title: Team Members Not Engaged in Review Process
description: Code reviews are often assigned to the same people, or reviewers do not
  provide meaningful feedback, leading to a bottleneck and reduced quality.
category:
- Process
- Communication
related_problems:
- slug: inadequate-code-reviews
  similarity: 0.75
- slug: insufficient-code-review
  similarity: 0.7
- slug: reduced-review-participation
  similarity: 0.7
- slug: review-process-breakdown
  similarity: 0.7
- slug: review-bottlenecks
  similarity: 0.7
layout: problem
---

## Description
When team members are disengaged from the code review process, it ceases to be an effective tool for quality assurance and knowledge sharing. This problem manifests as reviewers providing rubber-stamp approvals without careful examination, or a small, overburdened subset of the team performing all the reviews. This lack of engagement can lead to a decline in code quality, the spread of bad practices, and a missed opportunity for mentorship and collective code ownership. Fostering a culture where everyone feels responsible for the quality of the codebase is essential for a healthy development team.

## Indicators ⟡
- The same people are always assigned to review code.
- Reviewers are not providing meaningful feedback.
- Code reviews are a bottleneck in the development process.
- The team does not have a culture of shared code ownership.

## Symptoms ▲

- **Bottleneck in Code Reviews:** Pull requests sit unreviewed for extended periods, waiting for specific individuals.
- **[Review Process Breakdown](review-process-breakdown.md):** Reviewers provide minimal or generic feedback, missing critical issues.
- **Uneven Distribution of Work:** A few team members are overburdened with review responsibilities.
- **Lack of Learning Opportunities:** Developers, especially junior ones, miss out on learning from diverse feedback and reviewing others' code.
- **Reduced Code Quality:** Important bugs, design flaws, or performance issues are not caught during reviews.
- **Demotivation:** Reviewers feel unappreciated or burnt out, while authors feel their work isn't getting proper attention.

## Root Causes ▼

- **Lack of Time/Prioritization:** Reviewers are too busy with their own development tasks and don't prioritize reviews.
- **Lack of Training/Skills:** Reviewers may not know how to conduct effective code reviews or provide constructive feedback.
- **Fear of Conflict:** Reviewers avoid giving critical feedback to maintain harmony.
- **Lack of Ownership/Accountability:** No clear expectations or accountability for review participation.
- **Tooling Issues:** The code review tool is cumbersome or difficult to use, discouraging participation.
- **[Large Pull Requests](large-pull-requests.md):** Overly large pull requests are daunting to review, leading to procrastination or superficial checks.
- **Culture of Individual Contribution:** The team culture emphasizes individual coding output over collaborative quality assurance.

## Detection Methods ○

- **Code Review Metrics:** Track metrics like review turnaround time, number of comments per review, and distribution of reviews among team members.
- **Team Surveys/Interviews:** Ask team members about their perceptions of the code review process, workload, and effectiveness.
- **Retrospectives:** Discuss code review challenges and identify recurring patterns of disengagement.
- **Observation:** Observe team dynamics during stand-ups or discussions about pull requests.

## Examples
A team has a policy that every pull request needs two approvals. However, only two senior developers consistently review code. This creates a bottleneck, and pull requests often wait days for review, delaying releases. In another case, a junior developer submits a pull request, and the assigned reviewer simply approves it without any comments, even though there are several clear areas for improvement in the code's design and test coverage. This problem often indicates underlying issues in team culture, workload management, or process definition. An engaged code review process is vital for maintaining code quality, fostering knowledge sharing, and building a cohesive team.