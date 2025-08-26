---
title: Delayed Bug Fixes
description: Known issues remain unresolved for extended periods, causing ongoing
  problems and user frustration.
category:
- Code
- Process
related_problems:
- slug: delayed-issue-resolution
  similarity: 0.8
- slug: partial-bug-fixes
  similarity: 0.7
- slug: delayed-value-delivery
  similarity: 0.65
- slug: debugging-difficulties
  similarity: 0.65
- slug: slow-incident-resolution
  similarity: 0.6
- slug: long-release-cycles
  similarity: 0.6
layout: problem
---

## Description

Delayed bug fixes occur when known issues, defects, or problems remain unresolved for extended periods despite being identified and documented. This can happen due to prioritization decisions, resource constraints, technical complexity, or avoidance behaviors. Prolonged delays in addressing bugs can lead to user frustration, workarounds that create additional complexity, and compound problems as delayed fixes become more difficult to implement.

## Indicators ⟡

- Bug reports remain open for weeks or months without resolution
- Similar bugs are reported repeatedly by different users
- Team consistently prioritizes new features over bug fixes
- Critical bugs are downgraded to lower priorities without clear justification
- Workarounds become permanent solutions instead of addressing root causes

## Symptoms ▲

*No significant relationships within the scope of legacy systems identified (yet).*

## Root Causes ▼
- [Insufficient Design Skills](insufficient-design-skills.md) <span class="info-tooltip" title="Confidence: 0.491, Strength: 0.942">ⓘ</span>
<br/>  The lack of necessary design skills leads to poorly structured code, making it difficult for developers to identify and fix bugs efficiently, resulting in prolonged delays in addressing known issues.
- [High API Latency](high-api-latency.md) <span class="info-tooltip" title="Confidence: 0.490, Strength: 0.939">ⓘ</span>
<br/>  Excessive API latency slows down the development and testing processes, causing unresolved issues to accumulate and delaying the implementation of necessary bug fixes.
- [Poor Encapsulation](poor-encapsulation.md) <span class="info-tooltip" title="Confidence: 0.482, Strength: 0.908">ⓘ</span>
<br/>  Poor encapsulation leads to complex interdependencies within the codebase, making it difficult to isolate and resolve bugs efficiently, which ultimately results in prolonged delays in fixing known issues.
- [Large Estimates for Small Changes](large-estimates-for-small-changes.md) <span class="info-tooltip" title="Confidence: 0.478, Strength: 0.856">ⓘ</span>
<br/>  The tendency to provide large time estimates for small changes reflects the underlying code complexity and risk in legacy systems, leading to prolonged uncertainty and delays in addressing known issues, which ultimately frustrates users.
- [Slow Response Times for Lists](slow-response-times-for-lists.md) <span class="info-tooltip" title="Confidence: 0.472, Strength: 0.942">ⓘ</span>
<br/>  The slow loading times for pages displaying lists hinder developers' ability to reproduce and diagnose issues effectively, leading to prolonged delays in fixing known bugs.
- [Budget Overruns](budget-overruns.md) <span class="info-tooltip" title="Confidence: 0.472, Strength: 0.910">ⓘ</span>
<br/>  Budget overruns divert resources and prioritization away from resolving known issues, leading to prolonged delays in bug fixes and increasing user frustration in legacy systems.
- [Bottleneck Formation](bottleneck-formation.md) <span class="info-tooltip" title="Confidence: 0.465, Strength: 0.904">ⓘ</span>
<br/>  The presence of specific constraints within the development process slows down the resolution of issues, leading to prolonged bug fixes that frustrate users in legacy systems.
- [External Service Delays](external-service-delays.md) <span class="info-tooltip" title="Confidence: 0.463, Strength: 0.927">ⓘ</span>
<br/>  The slow response times of dependent services hinder the timely resolution of known issues, as the API cannot effectively process and implement bug fixes without reliable data and functionality from these external sources.
- [Constantly Shifting Deadlines](constantly-shifting-deadlines.md) <span class="info-tooltip" title="Confidence: 0.459, Strength: 0.874">ⓘ</span>
<br/>  Frequent changes to project timelines to prioritize new features over existing issues result in insufficient resources allocated to bug fixes, prolonging their resolution and exacerbating user dissatisfaction.
- [Monitoring Gaps](monitoring-gaps.md) <span class="info-tooltip" title="Confidence: 0.455, Strength: 0.862">ⓘ</span>
<br/>  Insufficient production monitoring hinders the timely detection and diagnosis of issues, resulting in unresolved bugs that prolong user frustration and operational disruptions.
- [Misunderstanding of OOP](misunderstanding-of-oop.md) <span class="info-tooltip" title="Confidence: 0.455, Strength: 0.912">ⓘ</span>
<br/>  A lack of understanding of object-oriented programming principles leads to poorly structured code that complicates bug identification and resolution, resulting in prolonged delays in fixing known issues.
- [Incomplete Projects](incomplete-projects.md) <span class="info-tooltip" title="Confidence: 0.453, Strength: 0.860">ⓘ</span>
<br/>  The failure to complete projects diverts resources and focus away from fixing existing bugs, leading to unresolved issues that persist and exacerbate user frustration in legacy systems.
- [Inconsistent Behavior](inconsistent-behavior.md) <span class="info-tooltip" title="Confidence: 0.453, Strength: 0.875">ⓘ</span>
<br/>  In legacy systems, the presence of inconsistent behavior in business processes complicates the identification and replication of bugs, leading to delays in fixes as developers struggle to ascertain the root causes of issues that manifest differently in various contexts.
- [Work Queue Buildup](work-queue-buildup.md) <span class="info-tooltip" title="Confidence: 0.434, Strength: 0.854">ⓘ</span>
<br/>  The accumulation of tasks in queues leads to resource bottlenecks, preventing timely attention to bug fixes and exacerbating unresolved issues that frustrate users.
- [Long-Running Transactions](long-running-transactions.md) <span class="info-tooltip" title="Confidence: 0.431, Strength: 0.851">ⓘ</span>
<br/>  Extended open database transactions can lock critical resources, delaying necessary bug fixes as developers are unable to access or modify affected components, leading to unresolved issues and increased user frustration.
- [Decision Paralysis](decision-paralysis.md) <span class="info-tooltip" title="Confidence: 0.431, Strength: 0.864">ⓘ</span>
<br/>  The inability of developers to make timely decisions due to a lack of clear guidance leads to stagnation in the bug-fixing process, resulting in unresolved issues that perpetuate user frustration.
- [Increasing Brittleness](increasing-brittleness.md) <span class="info-tooltip" title="Confidence: 0.430, Strength: 0.818">ⓘ</span>
<br/>  As software systems age and become more fragile, even minor bug fixes can lead to unintended consequences, resulting in hesitance to address known issues promptly and prolonging user frustration.
- [User Confusion](user-confusion.md) <span class="info-tooltip" title="Confidence: 0.422, Strength: 0.871">ⓘ</span>
<br/>  User confusion stemming from inconsistent system behavior distracts development teams from prioritizing and addressing known issues, thereby prolonging the resolution of bugs.
- [Release Instability](release-instability.md) <span class="info-tooltip" title="Confidence: 0.420, Strength: 0.857">ⓘ</span>
<br/>  Frequent instability in production releases diverts the development team's attention away from resolving known issues, leading to prolonged delays in bug fixes and increased user frustration.
- [Lazy Loading](lazy-loading.md) <span class="info-tooltip" title="Confidence: 0.411, Strength: 0.858">ⓘ</span>
<br/>  The excessive database queries caused by lazy loading overwhelm system resources, leading to application performance issues that hinder the timely identification and resolution of bugs, thereby prolonging user frustration.
- [Knowledge Gaps](knowledge-gaps.md) <span class="info-tooltip" title="Confidence: 0.411, Strength: 0.803">ⓘ</span>
<br/>  Insufficient understanding of the legacy system's intricacies prolongs the diagnosis and resolution of issues, resulting in delays in fixing bugs and increasing user frustration.
- [Tangled Cross-Cutting Concerns](tangled-cross-cutting-concerns.md) <span class="info-tooltip" title="Confidence: 0.411, Strength: 0.888">ⓘ</span>
<br/>  The tight coupling of cross-cutting concerns with business logic leads to complex interdependencies that complicate debugging and fixing known issues, resulting in prolonged resolution times and user dissatisfaction.
- [Bikeshedding](bikeshedding.md) <span class="info-tooltip" title="Confidence: 0.407, Strength: 0.863">ⓘ</span>
<br/>  The tendency to get bogged down in trivial details during code reviews diverts attention away from critical bug fixes, leading to unresolved issues and prolonged user frustration in legacy systems.
- [Incomplete Knowledge](incomplete-knowledge.md) <span class="info-tooltip" title="Confidence: 0.403, Strength: 0.833">ⓘ</span>
<br/>  Developers’ lack of awareness about all instances of similar logic in legacy code hinders their ability to identify and fix bugs comprehensively, leading to prolonged delays in resolving known issues.
- [Slow Knowledge Transfer](slow-knowledge-transfer.md) <span class="info-tooltip" title="Confidence: 0.402, Strength: 0.887">ⓘ</span>
<br/>  The prolonged time it takes for new team members to acquire essential knowledge of the legacy codebase leads to delays in identifying and resolving existing bugs, thereby perpetuating unresolved issues and user dissatisfaction.
- [Debugging Difficulties](debugging-difficulties.md) <span class="info-tooltip" title="Confidence: 0.400, Strength: 0.848">ⓘ</span>
<br/>  The complexity of the code architecture, combined with inadequate logging and outdated development tools, hinders the ability to effectively identify and resolve bugs, leading to prolonged delays in fixing known issues.
- [Unclear Sharing Expectations](unclear-sharing-expectations.md) <span class="info-tooltip" title="Confidence: 0.399, Strength: 0.880">ⓘ</span>
<br/>  The lack of clarity in information-sharing protocols leads to critical updates and bug fix priorities being overlooked or miscommunicated among team members, resulting in unresolved issues that prolong user frustration.
- [Perfectionist Culture](perfectionist-culture.md) <span class="info-tooltip" title="Confidence: 0.399, Strength: 0.865">ⓘ</span>
<br/>  A culture that prioritizes flawless releases over timely updates leads to prolonged deliberation on bug fixes, resulting in unresolved issues that persistently frustrate users.
- [Operational Overhead](operational-overhead.md) <span class="info-tooltip" title="Confidence: 0.398, Strength: 0.796">ⓘ</span>
<br/>  The excessive time and resources diverted to emergency responses in legacy systems hinder the capacity for planned maintenance and bug resolution, leading to prolonged unresolved issues and user dissatisfaction.
- [Brittle Codebase](brittle-codebase.md) <span class="info-tooltip" title="Confidence: 0.397, Strength: 0.849">ⓘ</span>
<br/>  The difficulty in modifying the existing code without risking new bugs leads to hesitance in addressing known issues, resulting in prolonged unresolved bugs and user dissatisfaction.
- [Data Migration Complexities](data-migration-complexities.md) <span class="info-tooltip" title="Confidence: 0.395, Strength: 0.820">ⓘ</span>
<br/>  The complexities involved in data migration often lead to prolonged system downtimes and increased risk of data corruption, diverting resources and attention away from resolving existing bugs, which ultimately results in delayed fixes and continued user frustration.
- [Testing Complexity](testing-complexity.md) <span class="info-tooltip" title="Confidence: 0.394, Strength: 0.816">ⓘ</span>
<br/>  The increased testing effort required to verify functionality across multiple locations in legacy systems leads to longer quality assurance cycles, resulting in unresolved issues and prolonged delays in bug fixes.
- [High Technical Debt](high-technical-debt.md) <span class="info-tooltip" title="Confidence: 0.390, Strength: 0.843">ⓘ</span>
<br/>  The accumulation of design and implementation shortcuts creates complex interdependencies and increases the time and resources required to resolve issues, leading to prolonged delays in fixing known bugs.
- [Past Negative Experiences](past-negative-experiences.md) <span class="info-tooltip" title="Confidence: 0.385, Strength: 0.834">ⓘ</span>
<br/>  Developers' reluctance to modify the codebase due to previous adverse outcomes leads to prolonged resolution times for known issues, perpetuating user frustration and system inefficiencies.
- [High Number of Database Queries](high-number-of-database-queries.md) <span class="info-tooltip" title="Confidence: 0.384, Strength: 0.826">ⓘ</span>
<br/>  The excessive number of database queries per user request leads to performance bottlenecks that slow down the development team's ability to address and fix existing bugs in a timely manner, ultimately prolonging unresolved issues and user dissatisfaction.
- [Task Queues Backing Up](task-queues-backing-up.md) <span class="info-tooltip" title="Confidence: 0.382, Strength: 0.802">ⓘ</span>
<br/>  The backlog of asynchronous job processing in legacy systems leads to critical tasks, such as bug fixes, being delayed due to resource contention and prioritization issues, ultimately prolonging unresolved issues and user dissatisfaction.
- [Deadlock Conditions](deadlock-conditions.md) <span class="info-tooltip" title="Confidence: 0.376, Strength: 0.814">ⓘ</span>
<br/>  Indefinite resource contention due to deadlock conditions prevents developers from accessing necessary components to resolve bugs, leading to prolonged periods of unresolved issues and user frustration.
- **Large, Risky Releases**
- [Legal Disputes](legal-disputes.md) <span class="info-tooltip" title="Confidence: 0.370, Strength: 0.831">ⓘ</span>
<br/>  Legal disputes divert critical resources and attention away from software maintenance efforts, leading to prolonged resolution times for existing bugs in legacy systems.
- [Complex Deployment Process](complex-deployment-process.md) <span class="info-tooltip" title="Confidence: 0.369, Strength: 0.788">ⓘ</span>
<br/>  The manual and error-prone nature of the deployment process leads to prolonged release cycles, which in turn delays the implementation of bug fixes, leaving known issues unresolved and continuing to frustrate users.
- [Slow Application Performance](slow-application-performance.md) <span class="info-tooltip" title="Confidence: 0.368, Strength: 0.808">ⓘ</span>
<br/>  Slow application performance hampers developers' ability to efficiently diagnose and resolve issues, leading to prolonged bug resolution times and increased user dissatisfaction.
- [Log Spam](log-spam.md) <span class="info-tooltip" title="Confidence: 0.362, Strength: 0.803">ⓘ</span>
<br/>  The overwhelming volume of repetitive log entries obscures critical error messages, hindering developers' ability to quickly identify and address underlying issues, which in turn prolongs the resolution of known bugs.
- [Approval Dependencies](approval-dependencies.md) <span class="info-tooltip" title="Confidence: 0.359, Strength: 0.826">ⓘ</span>
<br/>  The need for approvals from specific individuals creates bottlenecks in the bug-fixing process, leading to unresolved issues and prolonged user frustration in legacy systems.
- [Gold Plating](gold-plating.md) <span class="info-tooltip" title="Confidence: 0.357, Strength: 0.877">ⓘ</span>
<br/>  The tendency to add unnecessary features increases the complexity of the codebase, leading to more bugs and longer resolution times as developers must navigate through extraneous elements instead of focusing on critical fixes.
- [Buffer Overflow Vulnerabilities](buffer-overflow-vulnerabilities.md) <span class="info-tooltip" title="Confidence: 0.356, Strength: 0.823">ⓘ</span>
<br/>  The presence of buffer overflow vulnerabilities complicates debugging and fixing processes in legacy systems, as developers must first address critical security risks before they can allocate resources to resolve less severe but persistent bugs, resulting in prolonged delays in bug fixes.
- [Long Build and Test Times](long-build-and-test-times.md) <span class="info-tooltip" title="Confidence: 0.356, Strength: 0.830">ⓘ</span>
<br/>  Extended build and test times slow down the deployment of bug fixes, leading to prolonged unresolved issues and increased user frustration in legacy systems.
- [Eager to Please Stakeholders](eager-to-please-stakeholders.md) <span class="info-tooltip" title="Confidence: 0.355, Strength: 0.830">ⓘ</span>
<br/>  The tendency to accommodate every stakeholder request without assessing the impact on existing priorities leads to an overloaded backlog that delays the resolution of known bugs, as the team becomes preoccupied with new features instead of addressing critical issues.
- [Customer Dissatisfaction](customer-dissatisfaction.md) <span class="info-tooltip" title="Confidence: 0.350, Strength: 0.764">ⓘ</span>
<br/>  Customer dissatisfaction leads to prioritization of new features over bug fixes in legacy systems, resulting in unresolved issues that perpetuate user frustration and diminish system reliability.
- [Hidden Side Effects](hidden-side-effects.md) <span class="info-tooltip" title="Confidence: 0.348, Strength: 0.769">ⓘ</span>
<br/>  Undocumented side effects complicate the debugging process by obscuring the true behavior of functions, leading to prolonged identification and resolution of known issues.
- [Increased Time to Market](increased-time-to-market.md) <span class="info-tooltip" title="Confidence: 0.348, Strength: 0.761">ⓘ</span>
<br/>  The lengthy development cycles required to introduce new features in legacy systems often divert resources and attention away from addressing existing bugs, leading to prolonged unresolved issues and heightened user frustration.
- [Poor System Environment](poor-system-environment.md) <span class="info-tooltip" title="Confidence: 0.345, Strength: 0.781">ⓘ</span>
<br/>  An unstable and misconfigured system environment complicates the debugging process and prolongs resolution times, as developers are unable to reliably replicate issues or access the necessary resources to implement effective fixes.
- [Difficult Code Comprehension](difficult-code-comprehension.md) <span class="info-tooltip" title="Confidence: 0.340, Strength: 0.776">ⓘ</span>
<br/>  The inability of developers to easily understand the codebase leads to prolonged debugging efforts and inefficiencies, resulting in unresolved issues that frustrate users.
- [Unrealistic Deadlines](unrealistic-deadlines.md) <span class="info-tooltip" title="Confidence: 0.339, Strength: 0.795">ⓘ</span>
<br/>  Aggressive deadlines pressure developers to prioritize speed over thoroughness, resulting in incomplete bug fixes that linger unresolved, ultimately frustrating users of the legacy system.
- [Misconfigured Connection Pools](misconfigured-connection-pools.md) <span class="info-tooltip" title="Confidence: 0.337, Strength: 0.837">ⓘ</span>
<br/>  Improperly configured connection pools lead to frequent resource exhaustion, causing application performance bottlenecks that delay the identification and resolution of existing bugs.
- [Increased Manual Testing Effort](increased-manual-testing-effort.md) <span class="info-tooltip" title="Confidence: 0.336, Strength: 0.803">ⓘ</span>
<br/>  The excessive reliance on manual testing in legacy systems significantly slows down the identification and resolution of bugs, leading to prolonged delays in fixing known issues and increasing user frustration.
- [Missed Deadlines](missed-deadlines.md) <span class="info-tooltip" title="Confidence: 0.335, Strength: 0.739">ⓘ</span>
<br/>  Consistent failure to meet project deadlines leads to resource reallocation and prioritization of new features over bug fixes, resulting in unresolved issues persisting longer than necessary and increasing user frustration.
- [Organizational Structure Mismatch](organizational-structure-mismatch.md) <span class="info-tooltip" title="Confidence: 0.333, Strength: 0.826">ⓘ</span>
<br/>  The misalignment between the organization's structure and the system architecture leads to unclear ownership and accountability for bug fixes, resulting in delays as teams struggle to coordinate efforts across silos in a legacy environment.
- [Team Silos](team-silos.md) <span class="info-tooltip" title="Confidence: 0.332, Strength: 0.746">ⓘ</span>
<br/>  Isolated development efforts lead to duplicated bug fixes and inconsistent prioritization, resulting in unresolved issues persisting longer than necessary and increasing user frustration.
- [Reduced Predictability](reduced-predictability.md) <span class="info-tooltip" title="Confidence: 0.325, Strength: 0.716">ⓘ</span>
<br/>  Unpredictable development timelines and outcomes in legacy systems lead to inefficient prioritization and resource allocation, resulting in unresolved issues persisting longer than necessary.
- [Review Bottlenecks](review-bottlenecks.md) <span class="info-tooltip" title="Confidence: 0.324, Strength: 0.812">ⓘ</span>
<br/>  The prolonged duration of the code review process prevents timely resolution of identified issues, leading to unresolved bugs and continued user dissatisfaction in legacy systems.
- [Maintenance Bottlenecks](maintenance-bottlenecks.md) <span class="info-tooltip" title="Confidence: 0.320, Strength: 0.767">ⓘ</span>
<br/>  The reliance on a limited number of developers to implement changes in critical system components leads to significant delays in addressing known issues, as their availability and workload directly restrict the speed and frequency of necessary bug fixes.
- [Code Review Inefficiency](code-review-inefficiency.md) <span class="info-tooltip" title="Confidence: 0.314, Strength: 0.747">ⓘ</span>
<br/>  Inefficient code review processes prolong the identification and resolution of bugs in legacy systems, leading to unresolved issues that frustrate users and hinder system performance.
- [Single Points of Failure](single-points-of-failure.md) <span class="info-tooltip" title="Confidence: 0.312, Strength: 0.723">ⓘ</span>
<br/>  The inability to address known issues promptly arises from reliance on specific individuals or components whose absence halts progress, thus creating critical delays in bug resolution within legacy systems.
- [Slow Incident Resolution](slow-incident-resolution.md) <span class="info-tooltip" title="Confidence: 0.312, Strength: 0.775">ⓘ</span>
<br/>  Inefficient diagnosis and prolonged resolution times for incidents in legacy systems hinder the timely identification and fixing of known bugs, leading to unresolved issues that frustrate users.
- [Difficult to Understand Code](difficult-to-understand-code.md) <span class="info-tooltip" title="Confidence: 0.311, Strength: 0.755">ⓘ</span>
<br/>  The complexity and lack of clarity in the codebase hinder developers' ability to quickly identify and resolve existing issues, leading to prolonged bug fix delays and user dissatisfaction.
- [Information Decay](information-decay.md) <span class="info-tooltip" title="Confidence: 0.311, Strength: 0.736">ⓘ</span>
<br/>  Outdated and inaccurate documentation hampers developers' ability to quickly identify, understand, and resolve known issues, leading to prolonged delays in implementing necessary bug fixes.
- [Style Arguments in Code Reviews](style-arguments-in-code-reviews.md) <span class="info-tooltip" title="Confidence: 0.307, Strength: 0.789">ⓘ</span>
<br/>  Excessive time spent on trivial style debates during code reviews diverts attention from critical bug fixes, leading to prolonged resolution times and increased user frustration in legacy systems.
- [Feature Creep](feature-creep.md) <span class="info-tooltip" title="Confidence: 0.307, Strength: 0.776">ⓘ</span>
<br/>  The ongoing expansion of system features increases complexity, making it harder for development teams to prioritize and resolve existing bugs, which leads to prolonged delays in fixes and heightened user dissatisfaction.
- [Mixed Coding Styles](mixed-coding-styles.md) <span class="info-tooltip" title="Confidence: 0.306, Strength: 0.800">ⓘ</span>
<br/>  Inconsistent coding styles create ambiguity and increase the difficulty of understanding and modifying the code, leading to longer resolution times for bugs and ultimately resulting in unresolved issues and user frustration.
- [Resource Allocation Failures](resource-allocation-failures.md) <span class="info-tooltip" title="Confidence: 0.303, Strength: 0.760">ⓘ</span>
<br/>  Inefficient management of system resources leads to performance degradation and crashes, making it difficult for development teams to address and resolve existing bugs in a timely manner.
- [High Maintenance Costs](high-maintenance-costs.md) <span class="info-tooltip" title="Confidence: 0.300, Strength: 0.693">ⓘ</span>
<br/>  The excessive allocation of resources to maintain outdated components diverts attention and effort away from addressing known bugs, leading to prolonged unresolved issues and user dissatisfaction.

## Detection Methods ○

- **Bug Age Analysis:** Track how long bugs remain open before resolution
- **Bug Recurrence Monitoring:** Identify bugs that are reported multiple times
- **Priority vs Resolution Time:** Compare bug priority ratings with actual resolution timelines
- **User Complaint Correlation:** Connect delayed bug fixes to customer support issues
- **Technical Debt Impact Assessment:** Measure how delayed fixes contribute to system complexity

## Examples

A web application has a known bug where user sessions occasionally expire without warning, forcing users to re-enter form data. The bug was reported six months ago and affects roughly 5% of users daily, but it's been consistently deprioritized because it's "not critical" and the development team is focused on launching new features to attract more users. Customer support receives several complaints about this issue every week, and users have started saving their work in external documents before submitting forms. The longer the bug remains unfixed, the more complex the fix becomes because the session management code has been modified for other features, making the original fix more risky to implement. Another example involves a legacy reporting system where certain reports occasionally generate incorrect totals due to a race condition in the calculation logic. The bug is known and understood, but it occurs in a complex part of the system that the team avoids working on. Rather than fixing the root cause, the team has implemented multiple workarounds and manual verification steps that require additional developer time every month, ultimately costing more effort than fixing the original bug would have required.
