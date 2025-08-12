---
title: "Constant Firefighting"
description: "The development team is perpetually occupied with fixing bugs and addressing urgent issues, leaving little to no time for new feature development."
category: ['Process', 'Maintenance', 'Quality']
related_problems: ['high-defect-rate-in-production', 'frequent-hotfixes-and-rollbacks', 'developer-frustration-and-burnout']
layout: problem
---

## Description
Constant firefighting, also known as "reactive development," is a state where a development team is so consumed by urgent, unplanned work that they have little or no time for planned, proactive work. The team is constantly in a state of crisis, lurching from one emergency to the next. This is a highly inefficient and stressful way to work, and it is a clear sign that the system is unstable and the development process is broken.

## Indicators ⟡
- The majority of the team's time is spent on unplanned work.
- The team is frequently context-switching between different urgent tasks.
- There is a sense of chaos and urgency in the team's daily work.
- The team is consistently missing its deadlines for planned work.

## Symptoms ▲
- **[Slow Development Velocity](slow-development-velocity.md):** The team's ability to deliver new features is severely hampered by the constant interruptions of firefighting.
- **[High Defect Rate in Production](high-defect-rate-in-production.md):** The rushed, reactive nature of firefighting often leads to low-quality fixes that introduce new bugs.
- **[Quality Compromises](quality-compromises.md):** Quality standards are lowered to quickly address urgent issues.
- **[Developer Frustration and Burnout](developer-frustration-and-burnout.md):** The constant stress and pressure of firefighting can lead to exhaustion and demoralization.
- **[Reduced Innovation](reduced-innovation.md):** The team has no time or energy to think about long-term improvements or new ideas.

## Root Causes ▼
- **[High Technical Debt](high-technical-debt.md):** A fragile and complex codebase is a breeding ground for bugs and other urgent issues.
- **[Quality Blind Spots](quality-blind-spots.md):** A lack of automated tests means that bugs are not caught early and are often only discovered in production.
- **[Deployment Environment Inconsistencies](deployment-environment-inconsistencies.md):** Without a realistic staging environment, the team is unable to test changes thoroughly before deploying them to production.
- **[Poorly Defined Responsibilities](poorly-defined-responsibilities.md):** When it is not clear who is responsible for what, it is easy for things to fall through the cracks and become urgent problems.
- **[Time Pressure](time-pressure.md):** A relentless focus on short-term deadlines can lead to a culture of cutting corners and taking risks, which in turn leads to more firefighting.

## Detection Methods ○
- **Track Unplanned Work:** Measure the percentage of the team's time that is spent on unplanned work. If this number is consistently high, it is a clear sign of a problem.
- **Analyze Bug Reports:** Look for patterns in the bug reports. Are the same problems recurring over and over again? This is a sign that the team is not addressing the root causes of the problems.
- **Team Retrospectives:** Ask the team about their experience with firefighting. Are they feeling overwhelmed? Do they feel like they are making progress?
- **Monitor Key Metrics:** Track metrics like mean time to recovery (MTTR) and change failure rate. A high MTTR and a high change failure rate are both indicators of a team that is struggling with firefighting.

## Examples
A team is responsible for maintaining a critical business application. The application is old and has a lot of technical debt. The team spends most of its time fixing production issues. They are constantly being pulled off of their planned work to deal with emergencies. As a result, they are never able to make any progress on the long-term improvements that would make the application more stable. The team is stuck in a vicious cycle of firefighting, and they are becoming increasingly burned out.
