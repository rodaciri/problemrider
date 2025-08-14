---
title: Complex Deployment Process
description: The process of deploying software to production is manual, time-consuming,
  and error-prone, which contributes to long release cycles and a high risk of failure.
category:
- Process
- Deployment
related_problems:
- slug: manual-deployment-processes
  similarity: 75%
- slug: immature-delivery-strategy
  similarity: 70%
- slug: deployment-risk
  similarity: 65%
- slug: inadequate-configuration-management
  similarity: 60%
- slug: deployment-coupling
  similarity: 60%
layout: problem
---

## Description
A complex deployment process is a major obstacle to the continuous delivery of value. When the process of deploying software is manual, time-consuming, and error-prone, it is difficult to release new features quickly and safely. This can lead to long release cycles, large and risky releases, and a great deal of anxiety for the development team. A complex deployment process is often a sign of a legacy system that has not been designed for continuous delivery. It can also be a sign of a lack of investment in automation and tooling.

## Indicators ⟡
- The deployment process is not documented.
- The deployment process requires a lot of manual steps.
- The deployment process is different for different environments.
- The deployment process is not automated.

## Symptoms ▲
- **[Long Release Cycles](long-release-cycles.md):** It takes a long time to deploy a new version of the software.
- **[Large, Risky Releases](large-risky-releases.md):** Releases are infrequent, large, and complex.
- **[Release Anxiety](release-anxiety.md):** The development team is anxious and stressed about deployments.
- **[Release Instability](release-instability.md):** Releases frequently fail and require a rollback.

## Root Causes ▼
- **Lack of Automation:** The deployment process is not automated, which makes it slow, error-prone, and difficult to repeat.
- **Lack of a Deployment Pipeline:** There is no clear, defined process for deploying software.
- **[Deployment Environment Inconsistencies](deployment-environment-inconsistencies.md):** There is no realistic environment for testing changes before they are deployed to production.
- **[Inadequate Configuration Management](inadequate-configuration-management.md):** The configuration of the system is not managed in a consistent and repeatable way.
- **[Deployment Risk](deployment-risk.md):** There is no plan for what to do when a deployment fails.

## Detection Methods ○
- **Deployment Time:** Measure the time it takes to deploy a new version of the software.
- **Deployment Frequency:** Measure how often the team deploys to production.
- **Deployment Failure Rate:** Track the percentage of deployments that fail.
- **Deployment Process Mapping:** Map out the steps in the deployment process to identify bottlenecks and areas for improvement.

## Examples
A company has a very complex and manual deployment process. It takes two days to deploy a new version of the software. The process is not documented, and it is different for every environment. The team is very anxious about deployments, and they often fail. When a deployment fails, it can take hours to roll it back. As a result, the company is only able to release new software once a month. This is a major competitive disadvantage, and it is a major source of frustration for the development team.
