---
title: Review Process Avoidance
description: Team members actively seek ways to bypass or minimize code review requirements,
  undermining the quality assurance process.
category:
- Process
- Team Dynamics
- Quality Assurance
related_problems:
- slug: reduced-review-participation
  similarity: 0.7
- slug: review-process-breakdown
  similarity: 0.7
- slug: inadequate-code-reviews
  similarity: 0.65
- slug: insufficient-code-review
  similarity: 0.65
- slug: rushed-approvals
  similarity: 0.65
layout: problem
---

## Description

Review process avoidance occurs when team members actively look for ways to bypass, minimize, or circumvent code review requirements due to frustration with the review process itself. This can include making changes directly in production, using emergency deployment procedures for non-urgent changes, committing directly to main branches, or finding technical loopholes to avoid review. This behavior undermines the quality assurance benefits that code reviews are meant to provide.

## Indicators ⟡

- Increased use of "hotfix" or emergency deployment procedures for non-critical changes
- Direct commits to main branches that bypass review requirements
- Changes made during off-hours to avoid review oversight
- Frequent requests to modify review requirements or make exceptions
- Team members express desire to "just skip the review this time"

## Symptoms ▲

- **Quality Assurance Erosion:** Important changes bypass quality checks, increasing risk of defects
- **Process Inconsistency:** Some changes receive review while others don't, creating uneven quality standards
- **Team Trust Issues:** Avoidance behaviors create tension between team members about process adherence
- **Risk Increase:** Unreviewed changes have higher likelihood of introducing bugs or security issues
- **Process Authority Undermining:** Review requirements lose credibility when frequently bypassed

## Root Causes ▼

- **[Author Frustration](author-frustration.md):** Negative review experiences drive desire to avoid the process entirely
- **[Code Review Inefficiency](code-review-inefficiency.md):** Lengthy, unproductive reviews make avoidance seem reasonable
- **[Time Pressure](time-pressure.md):** Deadlines create pressure to skip quality processes
- **Review Process Rigidity:** Inflexible processes don't accommodate legitimate urgent needs
- **Lack of Process Value Perception:** Team members don't see sufficient benefit from reviews to justify the effort

## Detection Methods ○

- **Review Bypass Tracking:** Monitor commits, deployments, or changes that circumvent normal review processes
- **Emergency Procedure Usage Analysis:** Track frequency and justification of emergency deployment usage
- **Process Compliance Assessment:** Measure what percentage of changes actually go through required review
- **Team Behavior Surveys:** Collect feedback on motivations for avoiding review processes  
- **Quality Impact Correlation:** Analyze whether bypassed changes have higher defect rates

## Examples

A developer becomes frustrated after spending three weeks getting a simple bug fix through the review process due to extensive style debates and conflicting feedback. When they encounter their next urgent bug, they deploy the fix using the emergency hotfix process to avoid review, even though the issue isn't actually critical. This sets a precedent, and soon multiple team members are using emergency procedures for convenience rather than true emergencies. Another example involves a team member who discovers they can make small changes directly in the deployment configuration that bypasses code review requirements. They begin making increasingly significant changes through this route, including business logic modifications that should receive review, because they want to avoid the time and frustration of the normal review process.