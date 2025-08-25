---
title: Long Build and Test Times
description: A situation where it takes a long time to build and test a system.
category:
- Process
related_problems:
- slug: long-release-cycles
  similarity: 0.6
- slug: work-queue-buildup
  similarity: 0.6
- slug: extended-cycle-times
  similarity: 0.6
- slug: extended-research-time
  similarity: 0.55
- slug: maintenance-bottlenecks
  similarity: 0.55
- slug: increased-time-to-market
  similarity: 0.55
layout: problem
---

## Description
Long build and test times are a situation where it takes a long time to build and test a system. This is a common problem in large, monolithic architectures, where the entire system must be built and tested at once. Long build and test times can lead to a slowdown in development velocity, and they can also be a major source of frustration for developers.


## Indicators ⟡
- It takes a long time to get feedback on a change.
- Developers are often blocked waiting for the build to finish.
- The build is often broken.
- Developers are not able to run the tests on their local machines.


## Symptoms ▲

- [Legacy Skill Shortage](legacy-skill-shortage.md) <span class="info-tooltip" title="Confidence: 0.606, Strength: 0.837">ⓘ</span>
<br/>  The prolonged build and test times in legacy systems exacerbate the scarcity of skilled developers, as the complexity and outdated technologies deter new talent and overwhelm existing experts, leading to maintenance bottlenecks and increased dependency on a limited workforce.
- [Merge Conflicts](merge-conflicts.md) <span class="info-tooltip" title="Confidence: 0.583, Strength: 0.907">ⓘ</span>
<br/>  Frequent merge conflicts arise from extended build and test times, as developers are incentivized to work on the same code sections simultaneously to avoid delays, leading to overlapping changes that complicate version control and slow down overall development.
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.571, Strength: 0.759">ⓘ</span>
<br/>  Extended build and test times can lead to delayed updates and unresponsive services, causing API consumers to experience timeouts when they exceed their configured response thresholds due to the lack of timely system readiness.
- [Reduced Team Productivity](reduced-team-productivity.md) <span class="info-tooltip" title="Confidence: 0.539, Strength: 0.884">ⓘ</span>
<br/>  Extended build and test durations lead to frequent interruptions and delays in the development workflow, thereby diminishing the team's ability to deliver features efficiently, which manifests as reduced productivity.
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.536, Strength: 0.746">ⓘ</span>
<br/>  Frequent updates to project requirements often arise as teams seek to address inefficiencies caused by prolonged build and test cycles, leading to rework and delays that further exacerbate the original issue.
- [Slow Development Velocity](slow-development-velocity.md) <span class="info-tooltip" title="Confidence: 0.519, Strength: 0.906">ⓘ</span>
<br/>  Extended build and test times consume significant development resources, leading to delays in feature delivery and bug resolution, which ultimately results in a noticeable decline in overall productivity and development velocity.
- [Inefficient Development Environment](inefficient-development-environment.md) <span class="info-tooltip" title="Confidence: 0.492, Strength: 0.815">ⓘ</span>
<br/>  The prolonged build and test times hinder the efficiency of the development environment, as developers must contend with delays and bottlenecks, making it difficult to iterate quickly and respond to changes.
- [Flaky Tests](flaky-tests.md) <span class="info-tooltip" title="Confidence: 0.470, Strength: 0.749">ⓘ</span>
<br/>  Prolonged build and test times can exacerbate the occurrence of flaky tests, as the extended duration may lead to timing issues, uninitialized states, or inconsistent dependencies, resulting in unreliable feedback that further complicates the testing process within legacy systems.
- [Technical Architecture Limitations](technical-architecture-limitations.md) <span class="info-tooltip" title="Confidence: 0.454, Strength: 0.833">ⓘ</span>
<br/>  Inefficient system architecture often leads to excessive dependencies and complex configurations, which in turn prolong the build and test processes, making these architectural limitations a clear indicator of underlying performance issues.
- [Inability to Innovate](inability-to-innovate.md) <span class="info-tooltip" title="Confidence: 0.449, Strength: 0.862">ⓘ</span>
<br/>  Extended build and test durations consume valuable developer time, leaving insufficient resources for exploring innovative solutions or enhancements, thereby stifling progress and adaptation in legacy systems.
- [Product Direction Chaos](product-direction-chaos.md) <span class="info-tooltip" title="Confidence: 0.418, Strength: 0.870">ⓘ</span>
<br/>  Conflicting priorities from multiple stakeholders lead to inefficient planning and execution, which extends build and test cycles as teams struggle to align on requirements and deliverables.
- [Analysis Paralysis](analysis-paralysis.md) <span class="info-tooltip" title="Confidence: 0.408, Strength: 0.853">ⓘ</span>
<br/>  When build and test times are excessively long, teams may overanalyze potential solutions and alternatives during the research phase, leading to indecision and stagnation in the development process, thus reflecting a lack of progress.
- [Large Pull Requests](large-pull-requests.md) <span class="info-tooltip" title="Confidence: 0.402, Strength: 0.720">ⓘ</span>
<br/>  Extended build and test times often force developers to bundle multiple changes into larger pull requests to minimize waiting periods, resulting in reviews that lack depth and potentially overlook critical issues.
- [Author Frustration](author-frustration.md) <span class="info-tooltip" title="Confidence: 0.396, Strength: 0.937">ⓘ</span>
<br/>  Frustration arises during code reviews because prolonged build and test cycles delay feedback, leading to confusion and conflict over code quality and integration, thereby reflecting inefficiencies in the development process.
- [Monolithic Architecture Constraints](monolithic-architecture-constraints.md) <span class="info-tooltip" title="Confidence: 0.392, Strength: 0.879">ⓘ</span>
<br/>  The prolonged build and test times are often indicative of the challenges posed by large monolithic codebases, as their complexity and interdependencies hinder efficient development processes, leading to slower integration and testing cycles.
- [New Hire Frustration](new-hire-frustration.md) <span class="info-tooltip" title="Confidence: 0.392, Strength: 0.926">ⓘ</span>
<br/>  Extended build and test times hinder new hires from quickly integrating and delivering code, leading to frustration as they struggle to contribute effectively in a system that demands significant time investment before their work can be validated.
- [Increased Manual Work](increased-manual-work.md) <span class="info-tooltip" title="Confidence: 0.372, Strength: 0.683">ⓘ</span>
<br/>  The lengthy build and test processes often force developers to resort to manual workarounds for repetitive tasks, indicating inefficiencies in automation that hinder progress and productivity in legacy systems.
- [Deadline Pressure](deadline-pressure.md) <span class="info-tooltip" title="Confidence: 0.372, Strength: 0.870">ⓘ</span>
<br/>  Extended build and test times create delays in the development cycle, prompting teams to prioritize speed over quality, which manifests as deadline pressure and leads to hasty decisions and shortcuts in the software development process.
- [Complex Implementation Paths](complex-implementation-paths.md) <span class="info-tooltip" title="Confidence: 0.357, Strength: 0.842">ⓘ</span>
<br/>  Complex technical solutions, necessitated by architectural constraints or design limitations, lead to increased build and test times as they introduce more dependencies and integration challenges, thereby serving as an indicator of underlying inefficiencies in the system's design.
- [Delayed Bug Fixes](delayed-bug-fixes.md) <span class="info-tooltip" title="Confidence: 0.356, Strength: 0.830">ⓘ</span>
<br/>  Long build and test times hinder the ability to efficiently validate and deploy bug fixes, resulting in unresolved issues that persist and contribute to user frustration.
- [Rate Limiting Issues](rate-limiting-issues.md) <span class="info-tooltip" title="Confidence: 0.348, Strength: 0.807">ⓘ</span>
<br/>  Prolonged build and test times can lead to insufficient testing of rate limiting configurations, resulting in overly restrictive settings that block legitimate requests while failing to adequately protect the system from abuse.
- [Knowledge Silos](knowledge-silos.md) <span class="info-tooltip" title="Confidence: 0.339, Strength: 0.770">ⓘ</span>
<br/>  Extended build and test durations lead to team members working in isolation to troubleshoot issues, resulting in valuable knowledge becoming trapped within individuals rather than being shared across the team, thereby perpetuating inefficiencies in the development process.
- [Delayed Value Delivery](delayed-value-delivery.md) <span class="info-tooltip" title="Confidence: 0.317, Strength: 0.847">ⓘ</span>
<br/>  Extended build and test times directly delay the deployment of new features and bug fixes, causing users to experience prolonged wait times for updates, which manifests as frustration and a loss of competitive edge.
- [Inconsistent Onboarding Experience](inconsistent-onboarding-experience.md) <span class="info-tooltip" title="Confidence: 0.311, Strength: 0.765">ⓘ</span>
<br/>  The prolonged build and test times hinder knowledge transfer and mentorship opportunities, leading to inconsistent onboarding experiences as new team members rely on varying levels of availability and expertise from their colleagues.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○
- **Build and Test Time Monitoring:** Monitor the build and test times to identify which parts of the build are the slowest.
- **Developer Surveys:** Ask developers if they feel like they are able to get fast feedback on their changes.
- **Build and Test Log Analysis:** Analyze the build and test logs to identify errors and warnings.


## Examples
A company has a large, monolithic e-commerce application. It takes over an hour to build and test the application. The developers are often blocked waiting for the build to finish. The build is often broken, and it can take hours to fix it. The developers are not able to run all the tests on their local machines, so they are not able to get a complete picture of the quality of their code. As a result, the development velocity is slow, and the code quality is poor.
