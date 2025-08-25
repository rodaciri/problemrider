---
title: Constantly Shifting Deadlines
description: The project's end date is repeatedly pushed back to accommodate new feature
  requests, leading to a loss of credibility and a great deal of frustration for the
  development team.
category:
- Process
related_problems:
- slug: missed-deadlines
  similarity: 0.75
- slug: delayed-project-timelines
  similarity: 0.75
- slug: frequent-changes-to-requirements
  similarity: 0.75
- slug: unrealistic-deadlines
  similarity: 0.7
- slug: changing-project-scope
  similarity: 0.65
- slug: eager-to-please-stakeholders
  similarity: 0.65
layout: problem
---

## Description
Constantly shifting deadlines are a common problem in software development. They occur when the project's end date is repeatedly pushed back to accommodate new feature requests, a lack of clear requirements, or other unforeseen circumstances. This can lead to a number of problems, including a loss of credibility for the development team, a great deal of frustration for the stakeholders, and a decline in team morale. Constantly shifting deadlines are often a sign of a poorly managed project.


## Indicators ⟡
- The project's end date is constantly changing.
- The team is frequently missing deadlines.
- The team is constantly context-switching.
- There is a lot of rework.


## Symptoms ▲

- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.695, Strength: 0.892">ⓘ</span>
<br/>  The frequent delays in project timelines lead to rushed development cycles, resulting in incomplete or unstable API implementations that cause consuming services to exceed their timeout thresholds and fail.
- [Legacy Skill Shortage](legacy-skill-shortage.md) <span class="info-tooltip" title="Confidence: 0.692, Strength: 0.929">ⓘ</span>
<br/>  The continuous extension of project timelines to accommodate new feature requests diverts attention and resources away from maintaining legacy systems, resulting in a critical shortage of developers skilled in those technologies, which in turn hinders system upkeep and exacerbates the delays.
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.690, Strength: 0.892">ⓘ</span>
<br/>  The constant need to accommodate new feature requests results in ongoing updates to requirements, which in turn causes delays and rework, reflecting the instability of project timelines in legacy systems.
- [Developer Frustration and Burnout](developer-frustration-and-burnout.md) <span class="info-tooltip" title="Confidence: 0.681, Strength: 0.894">ⓘ</span>
<br/>  The frequent extension of project deadlines due to new feature requests creates an unstable work environment, leading to increased pressure and stress on developers, which manifests as frustration and burnout as they struggle to meet shifting expectations without adequate resources or support.
- [Complex Domain Model](complex-domain-model.md) <span class="info-tooltip" title="Confidence: 0.663, Strength: 0.884">ⓘ</span>
<br/>  The repeated extension of deadlines due to new feature requests exacerbates the difficulties in managing a complex domain model, as each addition increases the intricacy of the system, leading to further misunderstandings and implementation challenges that ultimately erode the team's ability to deliver on time.
- [Increased Customer Support Load](increased-customer-support-load.md) <span class="info-tooltip" title="Confidence: 0.628, Strength: 0.883">ⓘ</span>
<br/>  The frequent delays in project completion lead to incomplete or unstable features being released, causing users to struggle with functionality and seek support more often, thereby indicating underlying issues with project management and software quality.
- [Flaky Tests](flaky-tests.md) <span class="info-tooltip" title="Confidence: 0.612, Strength: 0.892">ⓘ</span>
<br/>  The pressure to meet ever-changing deadlines often leads to rushed development practices and inadequate testing, resulting in unstable code that manifests as flaky tests, which in turn erodes confidence in the overall quality of the legacy system.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.590, Strength: 0.856">ⓘ</span>
<br/>  The constant pressure to accommodate new feature requests without adequate time for thorough testing and refactoring often leads to developers neglecting the proper management of system resources, resulting in unreleased resources that indicate underlying project mismanagement and technical debt.
- [Regulatory Compliance Drift](regulatory-compliance-drift.md) <span class="info-tooltip" title="Confidence: 0.574, Strength: 0.905">ⓘ</span>
<br/>  The frequent postponement of project deadlines to incorporate new features undermines timely updates to legacy systems, resulting in regulatory compliance drift as the systems fail to adapt to evolving requirements, thus exposing the organization to costly compliance risks.
- [Poor Caching Strategy](poor-caching-strategy.md) <span class="info-tooltip" title="Confidence: 0.570, Strength: 0.905">ⓘ</span>
<br/>  The continuous pressure to meet shifting deadlines results in hasty development practices, which often neglect optimal data management techniques, such as caching, leading to inefficient resource usage and increased latency in legacy systems.
- [Project Authority Vacuum](project-authority-vacuum.md) <span class="info-tooltip" title="Confidence: 0.560, Strength: 0.915">ⓘ</span>
<br/>  The lack of strong organizational backing for critical projects exacerbates the constant shifts in deadlines, as the absence of executive sponsorship fails to prioritize resource allocation and establish clear project direction, leading to ongoing feature requests that derail timelines.
- [Reduced Team Productivity](reduced-team-productivity.md) <span class="info-tooltip" title="Confidence: 0.540, Strength: 0.954">ⓘ</span>
<br/>  Constantly shifting deadlines create a chaotic development environment that disrupts workflow stability, resulting in unclear priorities and increased stress, which in turn leads to decreased team productivity and effectiveness.
- [Inefficient Development Environment](inefficient-development-environment.md) <span class="info-tooltip" title="Confidence: 0.524, Strength: 0.914">ⓘ</span>
<br/>  The repeated extension of the project's timeline due to new feature requests creates a reactive development environment that prioritizes immediate changes over optimizing processes, resulting in a slow and cumbersome setup that hinders the team's overall efficiency.
- [Reduced Innovation](reduced-innovation.md) <span class="info-tooltip" title="Confidence: 0.524, Strength: 0.937">ⓘ</span>
<br/>  Constantly shifting deadlines create an environment of uncertainty and pressure, leading teams to prioritize immediate task completion over innovative solutions, ultimately stifling creativity and reducing the drive to explore new ideas.
- [Monolithic Architecture Constraints](monolithic-architecture-constraints.md) <span class="info-tooltip" title="Confidence: 0.515, Strength: 0.929">ⓘ</span>
<br/>  The constant pressure to accommodate new feature requests leads to an increasingly complex and unwieldy codebase, making it difficult to manage and deploy, which in turn reinforces the cycle of shifting deadlines as teams struggle to keep up with the growing technical debt.
- [Negative User Feedback](negative-user-feedback.md) <span class="info-tooltip" title="Confidence: 0.507, Strength: 0.927">ⓘ</span>
<br/>  The repeated delays in project timelines prevent the development team from adequately addressing performance issues and optimizing the application, leading to user dissatisfaction reflected in negative feedback.
- [Interrupt Overhead](interrupt-overhead.md) <span class="info-tooltip" title="Confidence: 0.494, Strength: 0.927">ⓘ</span>
<br/>  Frequent changes to project scope lead to rushed development cycles and inefficient resource allocation, which in turn results in excessive hardware interrupts and context switching as teams scramble to meet shifting requirements, ultimately degrading application performance.
- [Cross-System Data Synchronization Problems](cross-system-data-synchronization-problems.md) <span class="info-tooltip" title="Confidence: 0.487, Strength: 0.854">ⓘ</span>
<br/>  The constant delays in project timelines lead to rushed and incomplete requirements, exacerbating the complexities of data synchronization between legacy and modern systems, which in turn manifests as frequent synchronization issues and potential data corruption.
- [Team Members Not Engaged in Review Process](team-members-not-engaged-in-review-process.md) <span class="info-tooltip" title="Confidence: 0.485, Strength: 0.919">ⓘ</span>
<br/>  The repeated postponement of project deadlines diminishes team morale and urgency, resulting in disengagement during the review process, where lack of accountability leads to inadequate feedback and ultimately hampers code quality in legacy systems.
- [Undefined Code Style Guidelines](undefined-code-style-guidelines.md) <span class="info-tooltip" title="Confidence: 0.484, Strength: 0.794">ⓘ</span>
<br/>  The lack of clear coding standards emerges as a symptom of frequently extended project timelines, as the pressure to accommodate new features leads to rushed development and prioritization of immediate deliverables over establishing consistent guidelines, resulting in subjective feedback and inconsistent code quality.
- [Review Process Breakdown](review-process-breakdown.md) <span class="info-tooltip" title="Confidence: 0.475, Strength: 0.736">ⓘ</span>
<br/>  The continuous extension of deadlines leads to rushed development cycles, undermining the code review process and resulting in inadequate feedback and unresolved critical issues, which ultimately reflects the strain caused by shifting priorities in legacy systems.
- [Legacy API Versioning Nightmare](legacy-api-versioning-nightmare.md) <span class="info-tooltip" title="Confidence: 0.470, Strength: 0.940">ⓘ</span>
<br/>  The continuous postponement of project deadlines to accommodate new feature requests exacerbates the challenges of maintaining legacy systems, as the resulting lack of time and resources leads to inadequate API management, creating versioning issues that further complicate development efforts.
- [Stakeholder-Developer Communication Gap](stakeholder-developer-communication-gap.md) <span class="info-tooltip" title="Confidence: 0.462, Strength: 0.896">ⓘ</span>
<br/>  The ongoing extension of project timelines due to shifting requirements fosters a communication breakdown between stakeholders and developers, as unclear expectations lead to misaligned priorities and increased rework in legacy systems.
- [Deadline Pressure](deadline-pressure.md) <span class="info-tooltip" title="Confidence: 0.460, Strength: 0.917">ⓘ</span>
<br/>  The repeated postponement of project deadlines creates a continuous state of urgency, forcing the development team to prioritize speed over thoroughness, which manifests as rushed decisions and reduced software quality.
- [Delayed Bug Fixes](delayed-bug-fixes.md) <span class="info-tooltip" title="Confidence: 0.459, Strength: 0.874">ⓘ</span>
<br/>  The ongoing extension of project deadlines to accommodate new features diverts resources and attention away from fixing existing bugs, resulting in prolonged unresolved issues that serve as a clear indicator of the project's mismanagement and the strain on the development team.
- [Analysis Paralysis](analysis-paralysis.md) <span class="info-tooltip" title="Confidence: 0.446, Strength: 0.926">ⓘ</span>
<br/>  The frequent changes to project deadlines create a sense of uncertainty and pressure, causing teams to overanalyze requirements and potential features instead of making timely decisions, which in turn stifles progress and implementation in the development process.
- [Inconsistent Onboarding Experience](inconsistent-onboarding-experience.md) <span class="info-tooltip" title="Confidence: 0.443, Strength: 0.873">ⓘ</span>
<br/>  The frequent changes to project timelines create a chaotic environment that undermines structured onboarding processes, leading to inconsistent training and support for new team members as existing staff are preoccupied with shifting priorities.
- [Inability to Innovate](inability-to-innovate.md) <span class="info-tooltip" title="Confidence: 0.443, Strength: 0.933">ⓘ</span>
<br/>  The consistent postponement of project deadlines forces the team to prioritize immediate tasks over strategic innovation, resulting in a cycle where ongoing maintenance consumes resources and stifles the ability to explore new solutions or enhancements.
- [Reduced Feature Quality](reduced-feature-quality.md) <span class="info-tooltip" title="Confidence: 0.439, Strength: 0.934">ⓘ</span>
<br/>  Frequent deadline extensions force the development team to rush through feature implementation, resulting in inadequate time for testing and refinement, which directly leads to a decline in the quality of user experiences and functionality.
- [Author Frustration](author-frustration.md) <span class="info-tooltip" title="Confidence: 0.429, Strength: 0.919">ⓘ</span>
<br/>  The continual postponement of project deadlines creates an environment of uncertainty that leads to inconsistent and ambiguous feedback during code reviews, as developers struggle to prioritize their work amidst shifting expectations, ultimately amplifying their frustration.
- [Quality Blind Spots](quality-blind-spots.md) <span class="info-tooltip" title="Confidence: 0.424, Strength: 0.864">ⓘ</span>
<br/>  Frequent deadline extensions force teams to prioritize rapid feature implementation over thorough testing, leading to undetected critical behaviors and failure modes in the legacy system.
- [Unmotivated Employees](unmotivated-employees.md) <span class="info-tooltip" title="Confidence: 0.423, Strength: 0.895">ⓘ</span>
<br/>  The continuous postponement of project deadlines undermines the team's sense of accomplishment and predictability, leading to disengagement and low morale as employees feel their efforts are futile in an environment where priorities constantly shift.
- [Poor Project Control](poor-project-control.md) <span class="info-tooltip" title="Confidence: 0.413, Strength: 0.937">ⓘ</span>
<br/>  The inability to effectively monitor project progress leads to an underestimation of the impact of new feature requests, causing deadlines to shift constantly, which in turn erodes team morale and stakeholder trust as issues accumulate without timely intervention.
- [Capacity Mismatch](capacity-mismatch.md) <span class="info-tooltip" title="Confidence: 0.408, Strength: 0.885">ⓘ</span>
<br/>  The frequent postponement of project timelines due to new feature requests disrupts the established workflow, resulting in a mismatch between the actual available capacity and the fluctuating demand, which manifests as bottlenecks and underutilization in legacy systems.
- [High Defect Rate in Production](high-defect-rate-in-production.md) <span class="info-tooltip" title="Confidence: 0.401, Strength: 0.862">ⓘ</span>
<br/>  The continuous extension of release timelines to incorporate new features often forces rushed development cycles and inadequate testing, resulting in a high number of bugs surfacing in production as a direct indicator of compromised quality assurance practices.
- [Unpredictable System Behavior](unpredictable-system-behavior.md) <span class="info-tooltip" title="Confidence: 0.398, Strength: 0.888">ⓘ</span>
<br/>  The frequent adjustments to project timelines lead to hurried and poorly considered changes in the codebase, which in turn create hidden dependencies that result in unpredictable system behavior.
- [Micromanagement Culture](micromanagement-culture.md) <span class="info-tooltip" title="Confidence: 0.390, Strength: 0.740">ⓘ</span>
<br/>  The repeated delays in project timelines create an environment of uncertainty and urgency that prompts management to micromanage routine decisions, as they feel compelled to exert greater control to mitigate risks associated with evolving requirements in legacy systems.
- [Inadequate Configuration Management](inadequate-configuration-management.md) <span class="info-tooltip" title="Confidence: 0.389, Strength: 0.941">ⓘ</span>
<br/>  The frequent changes in project deadlines create a chaotic development environment where insufficient time for proper version control leads to inadequate tracking of code and configurations, resulting in errors and complications during implementation.
- [CV Driven Development](cv-driven-development.md) <span class="info-tooltip" title="Confidence: 0.383, Strength: 0.705">ⓘ</span>
<br/>  The repeated extension of project timelines fosters an environment where developers prioritize trendy technologies for personal gain, diverting focus from critical business needs and exacerbating the instability of legacy systems.
- [Technical Architecture Limitations](technical-architecture-limitations.md) <span class="info-tooltip" title="Confidence: 0.381, Strength: 0.916">ⓘ</span>
<br/>  Frequent deadline extensions force the development team to continuously adapt to new feature requests, often leading to rushed implementations that expose and exacerbate architectural constraints, ultimately hindering performance and maintainability.
- [Inefficient Code](inefficient-code.md) <span class="info-tooltip" title="Confidence: 0.380, Strength: 0.873">ⓘ</span>
<br/>  The repeated extensions of the project timeline often lead to rushed development and a lack of thorough optimization, resulting in inefficient code that reflects the pressure to continually accommodate new feature requests without proper performance considerations.
- [Feedback Isolation](feedback-isolation.md) <span class="info-tooltip" title="Confidence: 0.371, Strength: 0.803">ⓘ</span>
<br/>  The need to accommodate new feature requests, resulting in constantly shifting deadlines, often leads to a lack of structured feedback loops, as development teams are unable to engage stakeholders consistently, thus creating products that fail to align with user needs.
- [Implementation Rework](implementation-rework.md) <span class="info-tooltip" title="Confidence: 0.362, Strength: 0.829">ⓘ</span>
<br/>  The continuous postponement of project deadlines leads to an unstable requirements landscape, resulting in frequent misunderstandings that necessitate rework on features, thereby amplifying development delays and further eroding team morale.
- [Stakeholder Dissatisfaction](stakeholder-dissatisfaction.md) <span class="info-tooltip" title="Confidence: 0.359, Strength: 0.913">ⓘ</span>
<br/>  Frequent deadline extensions to accommodate new features create delays that frustrate the development team and lead to unmet stakeholder expectations, resulting in dissatisfaction with project outcomes and perceived communication gaps.
- [Team Dysfunction](team-dysfunction.md) <span class="info-tooltip" title="Confidence: 0.353, Strength: 0.908">ⓘ</span>
<br/>  The repeated extension of project deadlines due to new feature requests creates an unstable environment that fosters misalignment and frustration among team members, as they struggle to adapt to shifting priorities and lack a unified direction, ultimately leading to dysfunction in collaboration.
- [Inconsistent Knowledge Acquisition](inconsistent-knowledge-acquisition.md) <span class="info-tooltip" title="Confidence: 0.348, Strength: 0.905">ⓘ</span>
<br/>  The constant pressure to meet shifting deadlines results in rushed onboarding processes and fragmented training, leading to inconsistent knowledge acquisition among team members, which ultimately hinders effective collaboration and maintenance of the legacy system.
- [Product Direction Chaos](product-direction-chaos.md) <span class="info-tooltip" title="Confidence: 0.348, Strength: 0.901">ⓘ</span>
<br/>  The frequent delays in project timelines arise from the absence of clear product leadership, as conflicting priorities from multiple stakeholders create confusion, leading to an ongoing cycle of shifting deadlines and diminished team morale.
- [Unclear Documentation Ownership](unclear-documentation-ownership.md) <span class="info-tooltip" title="Confidence: 0.343, Strength: 0.850">ⓘ</span>
<br/>  The frequent delays in project timelines create an environment where documentation is deprioritized, resulting in unclear ownership and maintenance, which in turn leads to outdated and inconsistent information that hinders effective development and project coherence.
- [Unrealistic Schedule](unrealistic-schedule.md) <span class="info-tooltip" title="Confidence: 0.342, Strength: 0.890">ⓘ</span>
<br/>  The project’s end date being frequently extended to accommodate new feature requests reveals that the timelines are overly optimistic, as they fail to account for the complexity and resource constraints inherent in legacy systems, resulting in heightened stress and compromised quality.
- [Information Fragmentation](information-fragmentation.md) <span class="info-tooltip" title="Confidence: 0.338, Strength: 0.926">ⓘ</span>
<br/>  The repeated postponement of project deadlines necessitates the introduction of new features without adequate documentation or communication, resulting in critical system knowledge becoming fragmented across various locations and formats, which hinders efficient maintenance and exacerbates the sense of chaos within the development process.
- [Slow Development Velocity](slow-development-velocity.md) <span class="info-tooltip" title="Confidence: 0.336, Strength: 0.926">ⓘ</span>
<br/>  The continuous shifting of deadlines causes development teams to become reactive rather than proactive, resulting in disorganization, decreased focus, and ultimately slower development velocity as they struggle to manage an ever-changing set of priorities.
- [Stakeholder Frustration](stakeholder-frustration.md) <span class="info-tooltip" title="Confidence: 0.332, Strength: 0.925">ⓘ</span>
<br/>  The continuous alteration of project timelines due to new feature requests undermines the development team's ability to deliver consistent progress, which in turn frustrates stakeholders who expect timely updates and reliable outcomes.
- [Garbage Collection Pressure](garbage-collection-pressure.md) <span class="info-tooltip" title="Confidence: 0.325, Strength: 0.908">ⓘ</span>
<br/>  Frequent shifts in project deadlines lead to rushed development cycles where new features are added without proper optimization, resulting in excessive object allocation and deallocation that increases garbage collection pressure, indicating underlying issues with code quality and system performance.
- [Fear of Failure](fear-of-failure.md) <span class="info-tooltip" title="Confidence: 0.325, Strength: 0.889">ⓘ</span>
<br/>  The constant pressure of shifting deadlines creates an environment where the development team feels compelled to avoid taking risks or making decisions, as any misstep could further delay the project, thereby fostering a pervasive fear of failure that stifles innovation and productivity.
- [Inadequate Requirements Gathering](inadequate-requirements-gathering.md) <span class="info-tooltip" title="Confidence: 0.323, Strength: 0.931">ⓘ</span>
<br/>  The repeated postponement of project deadlines often results from the rushed or incomplete analysis of requirements, as teams prioritize immediate feature requests over thorough documentation, ultimately leading to solutions that fail to address the actual needs and further perpetuating the cycle of frustration and shifting timelines.
- [Rate Limiting Issues](rate-limiting-issues.md) <span class="info-tooltip" title="Confidence: 0.323, Strength: 0.925">ⓘ</span>
<br/>  The ongoing pressure to meet constantly shifting deadlines can lead to rushed or poorly considered implementations of rate limiting mechanisms, resulting in misconfigurations that block legitimate requests and fail to effectively manage system abuse, thus indicating deeper issues in project management and software quality.
- [Technology Isolation](technology-isolation.md) <span class="info-tooltip" title="Confidence: 0.321, Strength: 0.898">ⓘ</span>
<br/>  The continual postponement of project deadlines to accommodate evolving feature requests hinders timely technology updates, resulting in an aging system that becomes detached from current technology trends, thereby limiting the ability to attract skilled talent and integrate modern capabilities.
- [Inadequate Test Data Management](inadequate-test-data-management.md) <span class="info-tooltip" title="Confidence: 0.320, Strength: 0.884">ⓘ</span>
<br/>  The continuous pressure to meet shifting deadlines often results in rushed testing processes, leading to inadequate test data management that fails to capture real-world scenarios and exacerbates quality issues in legacy systems.
- [Market Pressure](market-pressure.md) <span class="info-tooltip" title="Confidence: 0.318, Strength: 0.898">ⓘ</span>
<br/>  External competitive forces create urgency for new features, prompting constant adjustments to project timelines, which ultimately reflect the instability and misalignment within the legacy system's development process.
- [Assumption-Based Development](assumption-based-development.md) <span class="info-tooltip" title="Confidence: 0.318, Strength: 0.868">ⓘ</span>
<br/>  The repeated rescheduling of project timelines forces developers to rely on unvalidated assumptions about requirements, as they attempt to accommodate changing priorities without sufficient clarity, leading to a cycle of misalignment and frustration in legacy systems.
- [Hidden Dependencies](hidden-dependencies.md) <span class="info-tooltip" title="Confidence: 0.315, Strength: 0.843">ⓘ</span>
<br/>  The continuous postponement of project deadlines forces the team to implement quick fixes and workarounds, which inadvertently creates hidden dependencies among system components that complicate future development and maintenance.
- [Resource Contention](resource-contention.md) <span class="info-tooltip" title="Confidence: 0.311, Strength: 0.873">ⓘ</span>
<br/>  The constant shifting of deadlines forces developers to implement quick fixes and last-minute features in the legacy system, leading to inefficient resource utilization and increased server overload as the application struggles to manage competing demands for CPU, memory, and I/O.
- [Data Migration Integrity Issues](data-migration-integrity-issues.md) <span class="info-tooltip" title="Confidence: 0.310, Strength: 0.895">ⓘ</span>
<br/>  Frequent deadline extensions lead to rushed data migration efforts, resulting in inadequate testing and poor handling of schema mismatches, which in turn causes integrity issues as teams scramble to meet evolving project requirements.
- [Unproductive Meetings](unproductive-meetings.md) <span class="info-tooltip" title="Confidence: 0.310, Strength: 0.898">ⓘ</span>
<br/>  The frequent need to reassess priorities and feature requests due to shifting deadlines leads to prolonged discussions in meetings, resulting in little actionable output and highlighting a lack of clear direction in project management.
- [Merge Conflicts](merge-conflicts.md) <span class="info-tooltip" title="Confidence: 0.310, Strength: 0.892">ⓘ</span>
<br/>  The frequent changes in project requirements lead to overlapping work among developers on critical components, resulting in merge conflicts that highlight the strain on the development process caused by the instability of deadlines.
- [Memory Leaks](memory-leaks.md) <span class="info-tooltip" title="Confidence: 0.307, Strength: 0.911">ⓘ</span>
<br/>  The frequent changes in project scope and deadlines often lead to rushed development cycles, causing developers to neglect proper memory management practices, which results in memory leaks that signal underlying issues with project stability and quality.
- [Mentor Burnout](mentor-burnout.md) <span class="info-tooltip" title="Confidence: 0.304, Strength: 0.923">ⓘ</span>
<br/>  The continual postponement of project deadlines forces experienced team members to take on additional mentoring roles for less experienced staff, leading to burnout as they struggle to balance their own workload with the demands of knowledge transfer in an already strained development environment.
- [Vendor Dependency Entrapment](vendor-dependency-entrapment.md) <span class="info-tooltip" title="Confidence: 0.304, Strength: 0.898">ⓘ</span>
<br/>  The constant push for new features under shifting deadlines often leads to reliance on outdated vendor products, resulting in a cycle of vendor dependency that forces costly custom support or replacement due to the inability to meet evolving project demands.
- [Inconsistent Naming Conventions](inconsistent-naming-conventions.md) <span class="info-tooltip" title="Confidence: 0.303, Strength: 0.878">ⓘ</span>
<br/>  Frequent deadline changes force developers to prioritize speed over best practices, leading to inconsistent naming conventions that undermine code clarity and maintainability.
- [Poor Contract Design](poor-contract-design.md) <span class="info-tooltip" title="Confidence: 0.303, Strength: 0.951">ⓘ</span>
<br/>  The inability of contracts to accommodate evolving project needs leads to unrealistic timelines, causing deadlines to shift repeatedly as new features are requested without proper alignment to the existing agreements.
- [Invisible Nature of Technical Debt](invisible-nature-of-technical-debt.md) <span class="info-tooltip" title="Confidence: 0.301, Strength: 0.901">ⓘ</span>
<br/>  The continual extension of project timelines due to last-minute feature requests obscures the accumulation of technical debt, as non-technical stakeholders fail to recognize its long-term impact on system stability and resource allocation, thus perpetuating a cycle of deferred maintenance and ongoing deadline shifts.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○
- **Track Project Milestones:** Keep a log of all project milestones and see how often they are being missed.
- **Velocity Tracking:** In an agile team, a decrease in velocity can be a sign that the team is being burdened with unplanned work.
- **Compare Plan vs. Actuals:** Regularly compare the project's progress against the original plan to see how much the scope has changed.
- **Stakeholder Feedback:** If stakeholders are constantly asking "Is it done yet?", it may be a sign that their expectations are not aligned with the project's reality.


## Examples
A team is building a new website. The project has a deadline of three months. However, the scope of the project is constantly expanding. The team is constantly being asked to add new features to the website. As a result, the team is not able to meet the original deadline. The deadline is pushed back a number of times, and the project is eventually delivered six months late. The stakeholders are not happy, and the development team is burned out.
