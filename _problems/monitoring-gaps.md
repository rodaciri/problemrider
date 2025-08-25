---
title: Monitoring Gaps
description: Insufficient production monitoring and observability make it difficult
  to detect and diagnose issues in a timely manner, leading to longer outages and
  more severe consequences.
category:
- Code
- Process
related_problems:
- slug: quality-blind-spots
  similarity: 0.7
- slug: feature-gaps
  similarity: 0.6
- slug: poor-operational-concept
  similarity: 0.6
- slug: knowledge-gaps
  similarity: 0.55
- slug: system-integration-blindness
  similarity: 0.55
- slug: maintenance-bottlenecks
  similarity: 0.55
layout: problem
---

## Description
Monitoring gaps are blind spots in a system's observability. They are areas of the system that are not being monitored, or are not being monitored effectively. Monitoring gaps can make it difficult to detect and diagnose problems in production, which can lead to longer outages and more severe consequences. They are a common problem in complex, distributed systems, where it can be difficult to get a complete picture of the system's health.


## Indicators ⟡
- The first sign of a problem is often a customer complaint.
- It takes a long time to diagnose the root cause of a problem.
- The team is often surprised by the system's behavior.
- There is a lack of visibility into the system's key performance indicators (KPIs).


## Symptoms ▲

- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.712, Strength: 0.905">ⓘ</span>
<br/>  Insufficient observability prevents timely detection of production issues, leading to prolonged response times that exceed configured timeouts for services relying on the affected API, thus indicating the presence of monitoring gaps.
- [Poor Test Coverage](poor-test-coverage.md) <span class="info-tooltip" title="Confidence: 0.698, Strength: 0.924">ⓘ</span>
<br/>  Insufficient production monitoring leads to a lack of visibility into the codebase, which in turn results in critical areas remaining untested, as teams cannot identify which parts need coverage without effective oversight.
- [Flaky Tests](flaky-tests.md) <span class="info-tooltip" title="Confidence: 0.622, Strength: 0.903">ⓘ</span>
<br/>  Insufficient production monitoring leads to a lack of visibility into system behavior, causing tests to fail unpredictably due to unobserved timing or setup issues, thereby eroding confidence in the reliability of the test suite as an indicator of underlying system instability.
- [Reduced Team Productivity](reduced-team-productivity.md) <span class="info-tooltip" title="Confidence: 0.598, Strength: 0.917">ⓘ</span>
<br/>  Insufficient production monitoring leads to undiagnosed issues that cause prolonged outages, which in turn frustrate the development team and hinder their productivity as they spend more time reacting to crises rather than proactively improving the system.
- [Monolithic Architecture Constraints](monolithic-architecture-constraints.md) <span class="info-tooltip" title="Confidence: 0.574, Strength: 0.926">ⓘ</span>
<br/>  The lack of effective monitoring in a complex, monolithic codebase obscures the detection of performance bottlenecks and failure points, resulting in increased difficulty in managing and troubleshooting the system as it scales.
- [Regulatory Compliance Drift](regulatory-compliance-drift.md) <span class="info-tooltip" title="Confidence: 0.571, Strength: 0.871">ⓘ</span>
<br/>  Insufficient monitoring in legacy systems leads to a lack of visibility into compliance-related metrics, making it difficult to identify and address regulatory requirements, which results in compliance drift as regulations evolve without adequate oversight.
- [Legacy Skill Shortage](legacy-skill-shortage.md) <span class="info-tooltip" title="Confidence: 0.545, Strength: 0.894">ⓘ</span>
<br/>  Insufficient monitoring capabilities hinder the identification of issues, which in turn exacerbates the reliance on a dwindling pool of developers familiar with outdated technologies, creating a cycle of increased maintenance challenges and operational risks.
- [Analysis Paralysis](analysis-paralysis.md) <span class="info-tooltip" title="Confidence: 0.541, Strength: 0.914">ⓘ</span>
<br/>  Insufficient production monitoring hinders teams from quickly identifying issues, leading to an overreliance on prolonged research efforts that stall implementation and progress.
- [Inadequate Mentoring Structure](inadequate-mentoring-structure.md) <span class="info-tooltip" title="Confidence: 0.526, Strength: 0.874">ⓘ</span>
<br/>  The lack of effective monitoring tools hinders experienced developers from sharing critical operational knowledge with new hires, resulting in a mentoring gap that perpetuates the inability to quickly diagnose and resolve production issues.
- [Cross-System Data Synchronization Problems](cross-system-data-synchronization-problems.md) <span class="info-tooltip" title="Confidence: 0.501, Strength: 0.860">ⓘ</span>
<br/>  Insufficient production monitoring hampers the ability to track and resolve data inconsistencies during migrations, making cross-system synchronization issues more prevalent and indicative of underlying observability failures.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.500, Strength: 0.792">ⓘ</span>
<br/>  Insufficient monitoring leads to a lack of visibility into resource allocation and usage, resulting in unreleased resources that accumulate unnoticed, ultimately exacerbating system performance issues and increasing the risk of outages.
- [Stakeholder-Developer Communication Gap](stakeholder-developer-communication-gap.md) <span class="info-tooltip" title="Confidence: 0.476, Strength: 0.889">ⓘ</span>
<br/>  Insufficient monitoring and observability hinder the team's ability to gather accurate feedback on system performance, leading to misaligned stakeholder expectations and resulting in rework, which highlights the critical impact of inadequate production oversight.
- [Negative User Feedback](negative-user-feedback.md) <span class="info-tooltip" title="Confidence: 0.458, Strength: 0.900">ⓘ</span>
<br/>  Insufficient production monitoring prevents timely identification of performance issues, leading to user complaints about slow loading times and application freezes, which serve as indicators of deeper systemic failures in the legacy system.
- [Delayed Bug Fixes](delayed-bug-fixes.md) <span class="info-tooltip" title="Confidence: 0.455, Strength: 0.862">ⓘ</span>
<br/>  Insufficient monitoring leads to a lack of visibility into system performance, causing unresolved issues to persist longer than necessary, which in turn results in delayed bug fixes and ongoing user frustration.
- [Memory Barrier Inefficiency](memory-barrier-inefficiency.md) <span class="info-tooltip" title="Confidence: 0.455, Strength: 0.914">ⓘ</span>
<br/>  Insufficient monitoring leads to a lack of visibility into application performance, allowing inefficient memory barrier placements to go undetected, which exacerbates performance issues in multi-threaded environments and prolongs the identification of root causes during outages.
- [Unclear Documentation Ownership](unclear-documentation-ownership.md) <span class="info-tooltip" title="Confidence: 0.444, Strength: 0.861">ⓘ</span>
<br/>  Insufficient production monitoring hampers the ability to identify ownership and accountability for documentation, resulting in outdated or missing information that complicates issue detection and resolution in legacy systems.
- [Product Direction Chaos](product-direction-chaos.md) <span class="info-tooltip" title="Confidence: 0.441, Strength: 0.891">ⓘ</span>
<br/>  Insufficient production monitoring hinders the ability to prioritize and align stakeholder input effectively, leading to confusion and misdirection among teams as they struggle to address critical issues without clear visibility into system performance.
- [Inefficient Code](inefficient-code.md) <span class="info-tooltip" title="Confidence: 0.441, Strength: 0.906">ⓘ</span>
<br/>  Insufficient monitoring fails to provide visibility into system performance, making it difficult to identify and address inefficient code, which in turn exacerbates delays and increases the likelihood of outages.
- [Reduced Feature Quality](reduced-feature-quality.md) <span class="info-tooltip" title="Confidence: 0.435, Strength: 0.920">ⓘ</span>
<br/>  Insufficient production monitoring leads to undetected issues that prolong resolution times, which in turn forces teams to prioritize immediate fixes over thorough feature refinement, ultimately degrading the quality of user experiences and functionality.
- [Inconsistent Onboarding Experience](inconsistent-onboarding-experience.md) <span class="info-tooltip" title="Confidence: 0.434, Strength: 0.866">ⓘ</span>
<br/>  Insufficient observability in legacy systems leads to a lack of standardized procedures and knowledge sharing, resulting in new team members receiving varied onboarding experiences that reflect the unmonitored gaps in system understanding and operational practices.
- [Capacity Mismatch](capacity-mismatch.md) <span class="info-tooltip" title="Confidence: 0.432, Strength: 0.894">ⓘ</span>
<br/>  Insufficient production monitoring prevents timely identification of demand patterns, leading to a mismatch between available capacity and actual needs, which manifests as bottlenecks and underutilization in the development process.
- [Poor Project Control](poor-project-control.md) <span class="info-tooltip" title="Confidence: 0.432, Strength: 0.896">ⓘ</span>
<br/>  Insufficient production monitoring hinders the ability to track project progress effectively, resulting in undetected issues that escalate into critical failures, thereby serving as a clear indicator of underlying gaps in observability.
- [Monolithic Functions and Classes](monolithic-functions-and-classes.md) <span class="info-tooltip" title="Confidence: 0.409, Strength: 0.841">ⓘ</span>
<br/>  The presence of overly complex functions and classes hinders the ability to implement effective monitoring tools, as the lack of clear boundaries and responsibilities makes it challenging to identify specific areas for observation and logging, ultimately contributing to insufficient production monitoring and delayed issue detection.
- [Legacy System Documentation Archaeology](legacy-system-documentation-archaeology.md) <span class="info-tooltip" title="Confidence: 0.400, Strength: 0.896">ⓘ</span>
<br/>  Insufficient production monitoring capabilities hinder the timely identification of system issues, often resulting in reliance on outdated documentation and tribal knowledge, which further obscures the understanding of system behavior and complicates diagnostics.
- [Team Dysfunction](team-dysfunction.md) <span class="info-tooltip" title="Confidence: 0.399, Strength: 0.862">ⓘ</span>
<br/>  Insufficient production monitoring hinders the team's ability to quickly identify and respond to issues, leading to frustration and misalignment among team members as they struggle to coordinate efforts without clear visibility into system performance.
- [System Integration Blindness](system-integration-blindness.md) <span class="info-tooltip" title="Confidence: 0.398, Strength: 0.903">ⓘ</span>
<br/>  Insufficient production monitoring leads to a lack of visibility into the interactions between system components, causing issues that only manifest when these components are integrated, thereby indicating the presence of monitoring gaps.
- [Regression Bugs](regression-bugs.md) <span class="info-tooltip" title="Confidence: 0.394, Strength: 0.875">ⓘ</span>
<br/>  Insufficient monitoring prevents timely detection of unintended consequences from new changes, allowing regression bugs to persist undetected and escalate system issues in legacy environments.
- [Difficult to Test Code](difficult-to-test-code.md) <span class="info-tooltip" title="Confidence: 0.393, Strength: 0.933">ⓘ</span>
<br/>  The inability to effectively monitor and observe production systems leads to a lack of insight into component behavior, making it harder to isolate and test code, as undetected issues in tightly coupled components can propagate and obscure the root causes of failures.
- [Team Coordination Issues](team-coordination-issues.md) <span class="info-tooltip" title="Confidence: 0.389, Strength: 0.899">ⓘ</span>
<br/>  Insufficient production monitoring hinders visibility into system performance and issues, resulting in unclear responsibilities and priorities among developers, which complicates collaboration and exacerbates coordination challenges within the team.
- [Slow Development Velocity](slow-development-velocity.md) <span class="info-tooltip" title="Confidence: 0.387, Strength: 0.861">ⓘ</span>
<br/>  Inadequate production monitoring leads to undetected issues that accumulate over time, causing increased technical debt and rework, which ultimately hampers the team's ability to deliver features and fixes efficiently.
- [High Defect Rate in Production](high-defect-rate-in-production.md) <span class="info-tooltip" title="Confidence: 0.387, Strength: 0.843">ⓘ</span>
<br/>  Insufficient production monitoring hinders timely detection of issues, allowing bugs to accumulate undetected, which manifests as a high defect rate in the live environment post-release, indicating flaws in both the development and quality assurance processes.
- [Improper Event Listener Management](improper-event-listener-management.md) <span class="info-tooltip" title="Confidence: 0.384, Strength: 0.887">ⓘ</span>
<br/>  The lack of effective production monitoring obscures the detection of memory leaks caused by improperly managed event listeners, leading to undiagnosed performance degradation and system instability in legacy systems.
- [Stakeholder Dissatisfaction](stakeholder-dissatisfaction.md) <span class="info-tooltip" title="Confidence: 0.374, Strength: 0.907">ⓘ</span>
<br/>  Insufficient production monitoring leads to undetected issues and prolonged outages, which in turn frustrate business stakeholders due to delays and reduced quality in project outcomes, serving as a clear indicator of the underlying monitoring deficiencies.
- [Feature Creep](feature-creep.md) <span class="info-tooltip" title="Confidence: 0.369, Strength: 0.912">ⓘ</span>
<br/>  Insufficient production monitoring prevents timely identification of issues, leading to unregulated changes and expansions in system features, which in turn complicates maintenance and exacerbates the original monitoring deficiencies.
- [Difficult Developer Onboarding](difficult-developer-onboarding.md) <span class="info-tooltip" title="Confidence: 0.368, Strength: 0.877">ⓘ</span>
<br/>  Insufficient monitoring hinders the ability to identify and document system intricacies, resulting in a steep learning curve for new developers who struggle to navigate complex legacy systems without clear guidance or timely insights into operational issues.
- [Inadequate Test Data Management](inadequate-test-data-management.md) <span class="info-tooltip" title="Confidence: 0.368, Strength: 0.902">ⓘ</span>
<br/>  Insufficient production monitoring limits the ability to gather accurate insights into system performance, which in turn leads to inadequate test data management as teams rely on outdated or unrealistic scenarios that do not reflect actual operational conditions, resulting in undetected issues during testing.
- [Inadequate Configuration Management](inadequate-configuration-management.md) <span class="info-tooltip" title="Confidence: 0.366, Strength: 0.923">ⓘ</span>
<br/>  Insufficient production monitoring hinders the ability to track changes and configurations accurately, resulting in unrecorded versions of code or infrastructure that lead to errors and complicate troubleshooting efforts.
- [Information Fragmentation](information-fragmentation.md) <span class="info-tooltip" title="Confidence: 0.365, Strength: 0.936">ⓘ</span>
<br/>  The lack of effective monitoring leads to critical system knowledge being dispersed across various locations and formats, as teams struggle to document and share insights without a centralized observability framework, thus exacerbating the difficulty in diagnosing issues promptly.
- [Unclear Goals and Priorities](unclear-goals-and-priorities.md) <span class="info-tooltip" title="Confidence: 0.354, Strength: 0.838">ⓘ</span>
<br/>  Insufficient production monitoring prevents teams from effectively assessing system performance and identifying critical issues, leading to reactive decision-making and a lack of focus, which manifests as unclear goals and priorities.
- [Rate Limiting Issues](rate-limiting-issues.md) <span class="info-tooltip" title="Confidence: 0.346, Strength: 0.891">ⓘ</span>
<br/>  Insufficient monitoring hinders the ability to detect misconfigurations or performance issues in rate limiting mechanisms, resulting in undiagnosed request blocking and abuse that exacerbate overall system instability.
- [Gold Plating](gold-plating.md) <span class="info-tooltip" title="Confidence: 0.343, Strength: 0.878">ⓘ</span>
<br/>  The lack of effective monitoring leads developers to overcompensate by adding unnecessary features in an attempt to mask issues and impress stakeholders, thereby obscuring underlying problems and exacerbating system complexity.
- [Logging Configuration Issues](logging-configuration-issues.md) <span class="info-tooltip" title="Confidence: 0.342, Strength: 0.889">ⓘ</span>
<br/>  Insufficient production monitoring leads to inadequate logging configuration, resulting in missing critical information and excessive log volume that fail to provide the observability needed for timely issue detection and diagnosis in legacy systems.
- [Unpredictable System Behavior](unpredictable-system-behavior.md) <span class="info-tooltip" title="Confidence: 0.340, Strength: 0.841">ⓘ</span>
<br/>  Insufficient monitoring prevents timely detection of issues, leading to unpredictable behavior as interdependencies within the system go unnoticed, causing changes in one area to trigger unforeseen consequences elsewhere.
- [Insufficient Audit Logging](insufficient-audit-logging.md) <span class="info-tooltip" title="Confidence: 0.339, Strength: 0.931">ⓘ</span>
<br/>  The lack of comprehensive monitoring leads to inadequate logging of security events, as without proper observability in legacy systems, critical activities go unrecorded, hindering the ability to detect breaches and respond to incidents effectively.
- [Maintenance Paralysis](maintenance-paralysis.md) <span class="info-tooltip" title="Confidence: 0.338, Strength: 0.902">ⓘ</span>
<br/>  Insufficient production monitoring limits teams' ability to assess the impact of changes, leading to a reluctance to implement necessary improvements due to fear of inadvertently breaking existing functionality.
- [Invisible Nature of Technical Debt](invisible-nature-of-technical-debt.md) <span class="info-tooltip" title="Confidence: 0.333, Strength: 0.882">ⓘ</span>
<br/>  Insufficient production monitoring obscures the visibility of technical debt, preventing non-technical stakeholders from recognizing its impact, which hinders resource allocation for necessary improvements in legacy systems.
- [Excessive Class Size](excessive-class-size.md) <span class="info-tooltip" title="Confidence: 0.333, Strength: 0.932">ⓘ</span>
<br/>  Insufficient production monitoring leads to a lack of visibility into system complexities, causing classes to grow excessively large and convoluted as developers implement quick fixes without proper oversight, ultimately hindering maintainability and exacerbating detection issues.
- [Difficulty Quantifying Benefits](difficulty-quantifying-benefits.md) <span class="info-tooltip" title="Confidence: 0.329, Strength: 0.895">ⓘ</span>
<br/>  Insufficient monitoring and observability hinder the ability to collect data on system performance and issues, making it challenging to quantify the benefits of technical improvements versus new features, thus leading to a lack of prioritization for necessary refactoring work.
- [Vendor Dependency Entrapment](vendor-dependency-entrapment.md) <span class="info-tooltip" title="Confidence: 0.323, Strength: 0.888">ⓘ</span>
<br/>  Insufficient monitoring and observability in legacy systems hinder the early detection of vendor product discontinuations, resulting in unexpected dependencies that force organizations into costly support contracts or system replacements as they struggle to maintain operational continuity.
- [Hidden Dependencies](hidden-dependencies.md) <span class="info-tooltip" title="Confidence: 0.323, Strength: 0.818">ⓘ</span>
<br/>  Insufficient monitoring leads to a lack of visibility into system interactions, allowing hidden dependencies created by workarounds and patches to go undetected, which exacerbates the difficulty in diagnosing and resolving issues promptly.
- [Poor Operational Concept](poor-operational-concept.md) <span class="info-tooltip" title="Confidence: 0.315, Strength: 0.916">ⓘ</span>
<br/>  Insufficient production monitoring hampers the ability to identify operational issues early, resulting in a reactive approach to maintenance that ultimately reflects a lack of strategic planning and support, leading to increased instability post-launch.
- [Inadequate Requirements Gathering](inadequate-requirements-gathering.md) <span class="info-tooltip" title="Confidence: 0.309, Strength: 0.914">ⓘ</span>
<br/>  Insufficient production monitoring limits the visibility into system performance and user requirements, resulting in a failure to identify gaps in understanding that subsequently lead to the development of solutions misaligned with actual needs.
- [Cache Invalidation Problems](cache-invalidation-problems.md) <span class="info-tooltip" title="Confidence: 0.308, Strength: 0.928">ⓘ</span>
<br/>  Insufficient monitoring leads to a lack of visibility into cache states, resulting in undetected stale data issues that compromise application performance and user experience.
- [Inappropriate Skillset](inappropriate-skillset.md) <span class="info-tooltip" title="Confidence: 0.305, Strength: 0.858">ⓘ</span>
<br/>  The lack of adequate production monitoring hampers the team's ability to identify and respond to system issues effectively, resulting in reliance on insufficiently skilled personnel who are unable to interpret data or trends, thereby exacerbating the impact of undetected problems.
- [Delayed Issue Resolution](delayed-issue-resolution.md) <span class="info-tooltip" title="Confidence: 0.302, Strength: 0.876">ⓘ</span>
<br/>  Insufficient production monitoring leads to undetected issues, causing delays in resolution as teams lack visibility and accountability, which in turn results in the accumulation of technical debt and increased user frustration.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○
- **Monitoring Coverage Analysis:** Analyze your monitoring tools to identify gaps in your coverage.
- **Incident Post-Mortems:** Review your incident post-mortems to identify cases where a lack of monitoring made it difficult to diagnose a problem.
- **Developer Interviews:** Ask developers about their experience with monitoring. Their feedback can be a valuable source of information.
- **Chaos Engineering:** Intentionally inject failures into your system to see how it behaves and to identify gaps in your monitoring.


## Examples
A company is running a microservices-based application. The application is complex, and it is difficult to get a complete picture of its health. The team does not have a good monitoring strategy, and they are not using the right tools. As a result, they are often surprised by production issues, and it takes them a long time to diagnose the root cause of problems. This has led to a number of long outages, which have had a significant impact on the business.
