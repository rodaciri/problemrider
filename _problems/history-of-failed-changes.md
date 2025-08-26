---
title: History of Failed Changes
description: A past record of failed deployments or changes creates a culture of fear
  and resistance to future modifications.
category:
- Culture
- Process
related_problems:
- slug: fear-of-breaking-changes
  similarity: 0.65
- slug: past-negative-experiences
  similarity: 0.65
- slug: fear-of-change
  similarity: 0.65
- slug: resistance-to-change
  similarity: 0.65
- slug: fear-of-failure
  similarity: 0.6
- slug: perfectionist-culture
  similarity: 0.6
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
- [Developer Frustration and Burnout](developer-frustration-and-burnout.md) <span class="info-tooltip" title="Confidence: 0.457, Strength: 0.681">ⓘ</span>
<br/>  A history of failed deployments cultivates a culture of apprehension that leads to increased pressure and uncertainty among developers, resulting in frustration and burnout as they navigate a challenging environment filled with unresolved issues and a lack of confidence in making changes.
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.453, Strength: 0.670">ⓘ</span>
<br/>  A history of failed deployments fosters a lack of trust in the stability of the existing system, prompting stakeholders to frequently modify requirements in an attempt to mitigate risk and adapt, which in turn leads to increased rework and project delays.
- [Reduced Innovation](reduced-innovation.md) <span class="info-tooltip" title="Confidence: 0.449, Strength: 0.838">ⓘ</span>
<br/>  A history of failed deployments instills a fear of risk in teams, leading them to prioritize minimal compliance over innovative solutions, thereby stifling creativity and adaptation in legacy systems.
- [Regulatory Compliance Drift](regulatory-compliance-drift.md) <span class="info-tooltip" title="Confidence: 0.432, Strength: 0.714">ⓘ</span>
<br/>  A history of failed deployments fosters a culture of risk aversion, leading to reluctance in updating legacy systems, which in turn results in those systems becoming misaligned with current regulatory requirements and creating compliance gaps.
- [Legacy Skill Shortage](legacy-skill-shortage.md) <span class="info-tooltip" title="Confidence: 0.422, Strength: 0.665">ⓘ</span>
<br/>  A history of failed deployments fosters a culture of fear that discourages developers from engaging with legacy systems, leading to a critical shortage of skilled personnel capable of maintaining these technologies, which in turn exacerbates the risk of future failures.
- [Inefficient Development Environment](inefficient-development-environment.md) <span class="info-tooltip" title="Confidence: 0.418, Strength: 0.698">ⓘ</span>
<br/>  A history of failed deployments fosters a culture of caution, leading to an inefficient and cumbersome development environment as teams avoid making swift changes for fear of repeating past mistakes.
- [Flaky Tests](flaky-tests.md) <span class="info-tooltip" title="Confidence: 0.389, Strength: 0.695">ⓘ</span>
<br/>  The history of failed deployments fosters a lack of confidence in the system, leading to the introduction of unreliable tests that fail intermittently, further eroding trust and complicating future changes.
- [Project Authority Vacuum](project-authority-vacuum.md) <span class="info-tooltip" title="Confidence: 0.340, Strength: 0.686">ⓘ</span>
<br/>  A history of failed deployments instills a culture of fear that undermines leadership support and resource allocation for critical projects, leading to an authority vacuum that further hinders necessary changes in legacy systems.
- [Monolithic Architecture Constraints](monolithic-architecture-constraints.md) <span class="info-tooltip" title="Confidence: 0.329, Strength: 0.690">ⓘ</span>
<br/>  The history of failed deployments fosters a culture of fear that leads to overly cautious development practices, resulting in a large, rigid codebase that becomes increasingly difficult to maintain and adapt, thereby indicating systemic issues in the software's architecture.

## Root Causes ▼
- [Large Estimates for Small Changes](large-estimates-for-small-changes.md) <span class="info-tooltip" title="Confidence: 0.338, Strength: 0.857">ⓘ</span>
<br/>  The tendency to provide large time estimates for small changes stems from the complex and fragile nature of the legacy code, which fosters a culture of fear and resistance to modifications due to the heightened risk of failure seen in past deployments.

## Detection Methods ○
- **Deployment Frequency:** Track how often the team deploys changes to production. A low deployment frequency can be a sign of fear.
- **Lead Time for Changes:** Measure the time it takes from a code commit to a production deployment.
- **Change Failure Rate:** Track the percentage of deployments that result in a failure.
- **Developer Surveys:** Ask developers about their confidence in the deployment process and their willingness to make changes.

## Examples
A team at a financial services company experienced a major outage after a recent deployment. The incident caused significant financial losses and reputational damage. As a result, the company implemented a lengthy and bureaucratic change approval process. Now, even the smallest change requires multiple levels of approval and can take weeks to deploy. The developers are so afraid of causing another outage that they avoid making any changes unless they are absolutely necessary. This has led to a stagnant product and a frustrated development team.
