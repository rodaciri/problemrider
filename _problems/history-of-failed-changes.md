---
title: "History of Failed Changes"
description: "A past record of failed deployments or changes creates a culture of fear and resistance to future modifications."
category: ['Process', 'Culture']
related_problems: ['fear-of-breaking-changes', 'release-anxiety', 'resistance-to-change']
layout: problem
---

## Description
A history of failed changes can create a lasting negative impact on a team's culture and development velocity. When past deployments have resulted in significant outages or rollbacks, developers become hesitant to make further changes, leading to a culture of fear and risk aversion. This can stifle innovation and make it difficult to address technical debt or introduce new features.

## Indicators ⟡
- Developers are reluctant to take on tasks that involve modifying critical parts of the system.
- The team has a very slow and cumbersome change approval process.
- There is a general sentiment that "if it ain't broke, don't fix it."
- The team has a history of long and stressful release cycles.

## Symptoms ▲
- **[Fear of Change](fear-of-change.md):** Developers are afraid to make changes, even when they are necessary.
- **[Slow Development Velocity](slow-development-velocity.md):** The time it takes to release new features is significantly longer than it should be.
- **[Stagnant Architecture](stagnant-architecture.md):** The system's architecture is not evolving to meet new requirements.
- **[High Technical Debt](high-technical-debt.md):** The team is not addressing technical debt, which makes the system harder to maintain over time.

## Root Causes ▼
- **[Quality Blind Spots](quality-blind-spots.md):** A lack of automated tests makes it difficult to catch regressions before they reach production.
- **[Complex Deployment Process](complex-deployment-process.md):** A manual or overly complex deployment process increases the risk of human error.
- **[Deployment Risk](deployment-risk.md):** The absence of a clear and tested rollback plan makes it difficult to recover from failed deployments.
- **[Blame Culture](blame-culture.md):** A culture that punishes individuals for failed changes creates fear and discourages risk-taking.

## Detection Methods ○
- **Deployment Frequency:** Track how often the team deploys changes to production. A low deployment frequency can be a sign of fear.
- **Lead Time for Changes:** Measure the time it takes from a code commit to a production deployment.
- **Change Failure Rate:** Track the percentage of deployments that result in a failure.
- **Developer Surveys:** Ask developers about their confidence in the deployment process and their willingness to make changes.

## Examples
A team at a financial services company experienced a major outage after a recent deployment. The incident caused significant financial losses and reputational damage. As a result, the company implemented a lengthy and bureaucratic change approval process. Now, even the smallest change requires multiple levels of approval and can take weeks to deploy. The developers are so afraid of causing another outage that they avoid making any changes unless they are absolutely necessary. This has led to a stagnant product and a frustrated development team.
