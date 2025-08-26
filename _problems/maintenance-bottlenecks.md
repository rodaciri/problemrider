---
title: Maintenance Bottlenecks
description: A situation where a small number of developers are the only ones who
  can make changes to a critical part of the system.
category:
- Code
- Process
- Team
related_problems:
- slug: bottleneck-formation
  similarity: 0.75
- slug: maintenance-paralysis
  similarity: 0.7
- slug: legacy-skill-shortage
  similarity: 0.65
- slug: single-points-of-failure
  similarity: 0.65
- slug: review-bottlenecks
  similarity: 0.65
- slug: maintenance-overhead
  similarity: 0.65
layout: problem
---

## Description
A maintenance bottleneck occurs when a small number of developers, or even a single developer, are the only ones who have the knowledge and expertise to maintain a critical part of the system. This creates a single point of failure and can significantly slow down the pace of development. It also puts a great deal of stress on the developers who are the bottlenecks.

## Indicators ⟡
- A small number of developers are consistently assigned to work on a specific part of the system.
- Other developers are hesitant to make changes to that part of the system.
- The developers who are the bottlenecks are often overloaded with work.
- There is a lack of documentation for that part of the system.

## Symptoms ▲
- [Complex Domain Model](complex-domain-model.md) <span class="info-tooltip" title="Confidence: 0.600, Strength: 0.814">ⓘ</span>
<br/>  The reliance on a limited number of developers to manage a critical part of the system often stems from the inherent complexity of the business domain being modeled, which creates a knowledge barrier that prevents broader team engagement and contributes to maintenance bottlenecks.
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.595, Strength: 0.797">ⓘ</span>
<br/>  The limited availability of developers to implement critical changes results in delayed responses from the API, leading to upstream services timing out as they cannot handle increased demand or issues promptly.
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.560, Strength: 0.782">ⓘ</span>
<br/>  The reliance on a limited number of developers for critical system changes creates a backlog in addressing ongoing requirements, leading to frequent updates and modifications as stakeholders adapt to delays and shifting priorities.
- [Increased Customer Support Load](increased-customer-support-load.md) <span class="info-tooltip" title="Confidence: 0.554, Strength: 0.794">ⓘ</span>
<br/>  The reliance on a limited number of developers for critical system changes leads to delays in resolving issues and implementing improvements, resulting in increased user frustration and a higher volume of support inquiries.
- [Poor Test Coverage](poor-test-coverage.md) <span class="info-tooltip" title="Confidence: 0.534, Strength: 0.738">ⓘ</span>
<br/>  The reliance on a limited number of developers to maintain critical parts of the system often leads to insufficient test coverage, as these developers may prioritize immediate changes over comprehensive testing, leaving significant quality assurance gaps in the legacy code.
- [Legacy Skill Shortage](legacy-skill-shortage.md) <span class="info-tooltip" title="Confidence: 0.526, Strength: 0.795">ⓘ</span>
<br/>  The reliance on a limited number of developers who possess the necessary expertise in outdated technologies creates a critical shortage of skilled personnel, leading to significant maintenance bottlenecks and increased risk of system failure.
- [Developer Frustration and Burnout](developer-frustration-and-burnout.md) <span class="info-tooltip" title="Confidence: 0.518, Strength: 0.743">ⓘ</span>
<br/>  The reliance on a limited number of developers for critical system changes creates an overwhelming workload and pressure, leading to frustration and burnout as these individuals struggle to manage persistent issues in both the codebase and their work environment.
- [Inefficient Development Environment](inefficient-development-environment.md) <span class="info-tooltip" title="Confidence: 0.467, Strength: 0.747">ⓘ</span>
<br/>  The reliance on a limited number of developers for critical system changes leads to a bottleneck that forces the team to navigate a slow and cumbersome development environment, as the lack of diverse expertise restricts efficient collaboration and tool utilization.
- [Data Migration Integrity Issues](data-migration-integrity-issues.md) <span class="info-tooltip" title="Confidence: 0.464, Strength: 0.806">ⓘ</span>
<br/>  The limited availability of developers who understand the critical system components can lead to inadequate oversight and testing during data migration, resulting in integrity issues due to unaddressed schema mismatches and format incompatibilities.
- [Deadline Pressure](deadline-pressure.md) <span class="info-tooltip" title="Confidence: 0.445, Strength: 0.849">ⓘ</span>
<br/>  When a limited number of developers are solely responsible for maintaining critical system components, the pressure to meet deadlines intensifies, causing rushed decisions and shortcuts that compromise code quality and further exacerbate the maintenance bottleneck.
- [Flaky Tests](flaky-tests.md) <span class="info-tooltip" title="Confidence: 0.443, Strength: 0.749">ⓘ</span>
<br/>  The reliance on a limited number of developers for critical changes often leads to inadequate test coverage and inconsistent testing practices, resulting in flaky tests that further erode confidence in the system's stability.
- [Monolithic Architecture Constraints](monolithic-architecture-constraints.md) <span class="info-tooltip" title="Confidence: 0.442, Strength: 0.872">ⓘ</span>
<br/>  The concentration of expertise among a few developers in a complex, tightly-coupled codebase leads to slower maintenance and hinders the ability to implement changes, highlighting the challenges of scaling and deploying the system effectively.
- [Technical Architecture Limitations](technical-architecture-limitations.md) <span class="info-tooltip" title="Confidence: 0.424, Strength: 0.842">ⓘ</span>
<br/>  The reliance on a limited number of developers for critical system changes highlights architectural constraints that hinder broader team involvement, thereby revealing performance and maintainability issues inherent in the system's design.
- [Project Authority Vacuum](project-authority-vacuum.md) <span class="info-tooltip" title="Confidence: 0.424, Strength: 0.763">ⓘ</span>
<br/>  The reliance on a limited number of developers for critical system changes creates a lack of authority and support for necessary projects, as their unavailability hinders progress and discourages organizational commitment to securing resources.
- [Regulatory Compliance Drift](regulatory-compliance-drift.md) <span class="info-tooltip" title="Confidence: 0.419, Strength: 0.757">ⓘ</span>
<br/>  The reliance on a limited number of developers for critical system changes leads to slower updates and adaptations, resulting in legacy systems failing to keep pace with evolving regulatory requirements and creating compliance gaps.
- [Unbounded Data Structures](unbounded-data-structures.md) <span class="info-tooltip" title="Confidence: 0.405, Strength: 0.786">ⓘ</span>
<br/>  The reliance on a limited number of developers for critical system changes leads to delayed maintenance and oversight, resulting in unbounded data structures that grow unchecked, causing memory issues and performance decline.
- [Team Members Not Engaged in Review Process](team-members-not-engaged-in-review-process.md) <span class="info-tooltip" title="Confidence: 0.400, Strength: 0.792">ⓘ</span>
<br/>  The reliance on a small number of developers for critical system changes creates a feedback loop where those same individuals are repeatedly assigned code reviews, leading to disengagement and insufficient feedback, which exacerbates the maintenance bottleneck and compromises code quality.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.385, Strength: 0.660">ⓘ</span>
<br/>  The concentration of knowledge in a few developers leads to delays in maintenance tasks, resulting in resources remaining allocated and unclosed due to insufficient oversight and ongoing changes in critical system components.
- [Merge Conflicts](merge-conflicts.md) <span class="info-tooltip" title="Confidence: 0.374, Strength: 0.772">ⓘ</span>
<br/>  The limited number of developers authorized to modify critical system components leads to overlapping changes in large functions or files by multiple contributors, resulting in frequent version control conflicts that highlight the underlying maintenance bottleneck.
- [Slow Development Velocity](slow-development-velocity.md) <span class="info-tooltip" title="Confidence: 0.359, Strength: 0.801">ⓘ</span>
<br/>  The reliance on a limited number of developers for critical system changes creates a bottleneck that delays feature delivery and bug fixes, leading to a noticeable decline in overall development productivity.
- [Inability to Innovate](inability-to-innovate.md) <span class="info-tooltip" title="Confidence: 0.356, Strength: 0.808">ⓘ</span>
<br/>  The concentration of maintenance responsibilities among a few developers leads to an overwhelming workload that prevents the team from allocating time for innovative projects, thereby stifling progress and adaptability in the legacy system.
- [High Defect Rate in Production](high-defect-rate-in-production.md) <span class="info-tooltip" title="Confidence: 0.348, Strength: 0.746">ⓘ</span>
<br/>  The reliance on a limited number of developers for critical system changes often leads to rushed or incomplete updates, resulting in insufficient testing and ultimately causing a higher number of bugs to emerge in the production environment.
- [Inadequate Mentoring Structure](inadequate-mentoring-structure.md) <span class="info-tooltip" title="Confidence: 0.345, Strength: 0.694">ⓘ</span>
<br/>  The limited pool of developers able to implement changes creates a reliance on their expertise, which in turn hampers the establishment of a robust mentoring structure, resulting in insufficient training for new developers and perpetuating the bottleneck in maintenance capabilities.
- [Reduced Team Productivity](reduced-team-productivity.md) <span class="info-tooltip" title="Confidence: 0.340, Strength: 0.844">ⓘ</span>
<br/>  The limited availability of a few key developers to address maintenance tasks creates delays and backlogs, which in turn reduces the overall productivity of the entire team as they are unable to make progress on new features or fixes.
- [Reduced Innovation](reduced-innovation.md) <span class="info-tooltip" title="Confidence: 0.339, Strength: 0.779">ⓘ</span>
<br/>  The reliance on a limited number of developers for critical system changes restricts knowledge sharing and collaboration, leading teams to prioritize immediate maintenance tasks over exploring innovative solutions, thereby stifling creativity and progress.
- [Technology Isolation](technology-isolation.md) <span class="info-tooltip" title="Confidence: 0.337, Strength: 0.799">ⓘ</span>
<br/>  The reliance on a limited number of developers to maintain critical system components creates a barrier to integrating modern technologies, as their specialized knowledge prevents the organization from adopting new tools and practices, ultimately leading to an outdated technology stack that hinders talent acquisition and innovation.
- [Stakeholder-Developer Communication Gap](stakeholder-developer-communication-gap.md) <span class="info-tooltip" title="Confidence: 0.337, Strength: 0.768">ⓘ</span>
<br/>  The limited pool of developers who can implement changes creates a knowledge bottleneck that prevents effective communication with stakeholders, resulting in mismatched expectations and frequent rework.
- [Poor Caching Strategy](poor-caching-strategy.md) <span class="info-tooltip" title="Confidence: 0.335, Strength: 0.657">ⓘ</span>
<br/>  The reliance on a small group of developers for critical system changes can lead to inadequate optimizations, such as failing to implement effective caching strategies, which in turn exacerbates performance issues by causing unnecessary data fetching on every request.
- [Analysis Paralysis](analysis-paralysis.md) <span class="info-tooltip" title="Confidence: 0.333, Strength: 0.773">ⓘ</span>
<br/>  When a limited number of developers hold exclusive knowledge about critical system components, teams may engage in excessive research and discussions about potential solutions rather than implementing changes, leading to a stagnation in development progress.
- [Index Fragmentation](index-fragmentation.md) <span class="info-tooltip" title="Confidence: 0.326, Strength: 0.795">ⓘ</span>
<br/>  As the limited number of developers unable to efficiently manage database changes leads to infrequent maintenance, the resulting neglect of index optimization manifests as increasing index fragmentation, which directly impacts system performance and exacerbates the maintenance challenges.
- [Author Frustration](author-frustration.md) <span class="info-tooltip" title="Confidence: 0.324, Strength: 0.818">ⓘ</span>
<br/>  The limited availability of experienced developers to make critical system changes leads to a backlog in code reviews, causing frustration due to inconsistent feedback as authors struggle to navigate the unpredictable decision-making of a few gatekeepers.
- [Review Process Breakdown](review-process-breakdown.md) <span class="info-tooltip" title="Confidence: 0.324, Strength: 0.569">ⓘ</span>
<br/>  The concentration of knowledge and authority among a few developers leads to inadequate code review practices, as there is insufficient diversity in perspectives and expertise to effectively identify and address critical issues, thereby exacerbating maintenance challenges in legacy systems.
- [Delayed Bug Fixes](delayed-bug-fixes.md) <span class="info-tooltip" title="Confidence: 0.320, Strength: 0.767">ⓘ</span>
<br/>  The reliance on a limited number of developers for critical system changes leads to delayed resolution of known issues, as their availability is constrained, resulting in prolonged user frustration and unresolved bugs.
- [Legacy API Versioning Nightmare](legacy-api-versioning-nightmare.md) <span class="info-tooltip" title="Confidence: 0.314, Strength: 0.786">ⓘ</span>
<br/>  The concentration of knowledge among a few developers leads to inadequate API documentation and design practices, resulting in poorly managed versioning and compatibility issues that signal the underlying maintenance bottlenecks in the system.
- [Inefficient Code](inefficient-code.md) <span class="info-tooltip" title="Confidence: 0.310, Strength: 0.783">ⓘ</span>
<br/>  The reliance on a limited number of developers for system changes often leads to outdated or poorly optimized code, as these individuals may prioritize immediate fixes over long-term performance, resulting in inefficient handling of requests that highlights the underlying maintenance bottlenecks.
- [Team Dysfunction](team-dysfunction.md) <span class="info-tooltip" title="Confidence: 0.309, Strength: 0.759">ⓘ</span>
<br/>  The reliance on a limited number of developers for critical changes creates silos and impedes communication, leading to interpersonal conflicts and misaligned priorities among team members, which manifest as dysfunction and hinder collaborative problem-solving in the maintenance process.
- [Capacity Mismatch](capacity-mismatch.md) <span class="info-tooltip" title="Confidence: 0.307, Strength: 0.733">ⓘ</span>
<br/>  The limited number of developers capable of making critical system changes leads to a disparity in available development capacity versus the demand for enhancements and fixes, resulting in bottlenecks and inefficient resource utilization throughout the development process.
- [Stakeholder Dissatisfaction](stakeholder-dissatisfaction.md) <span class="info-tooltip" title="Confidence: 0.307, Strength: 0.788">ⓘ</span>
<br/>  The limited availability of developers to implement necessary changes leads to slower project delivery and reduced responsiveness to stakeholder needs, resulting in dissatisfaction with the overall development process.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○
- **Bus Factor Analysis:** Identify the key developers who are the only ones who know how to work on a critical part of the system.
- **Code Ownership Analysis:** Use tools to identify the developers who have made the most changes to a specific part of the system.
- **Developer Surveys:** Ask developers if they feel like there are any parts of the system that they are afraid to change.

## Examples
A company has a legacy billing system that was written by a single developer who has since left the company. Now, only one other developer on the team understands how the system works. This developer is constantly being pulled away from their other work to fix bugs and make changes to the billing system. The other developers on the team are afraid to touch the billing system because they don't understand it and they are afraid of breaking it. As a result, the billing system has become a major bottleneck for the company.
