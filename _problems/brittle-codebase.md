---
title: Brittle Codebase
description: The existing code is difficult to modify without introducing new bugs,
  making maintenance and feature development risky.
category:
- Architecture
- Code
related_problems:
- slug: inconsistent-codebase
  similarity: 0.75
- slug: increasing-brittleness
  similarity: 0.7
- slug: difficult-code-comprehension
  similarity: 0.65
- slug: spaghetti-code
  similarity: 0.65
- slug: uncontrolled-codebase-growth
  similarity: 0.65
- slug: complex-and-obscure-logic
  similarity: 0.65
layout: problem
---

## Description
A brittle codebase is one that is difficult and risky to change. When a small change in one part of the codebase leads to unexpected failures in other parts, it is a sign of a brittle codebase. This is often caused by a lack of automated tests, a high degree of coupling between components, and a general lack of good design principles. A brittle codebase is a major source of technical debt, and it can significantly slow down the pace of development.


## Indicators ⟡
- Developers express fear or hesitation when asked to modify certain parts of the system.
- Estimates for small changes are consistently much larger than expected.
- The team avoids refactoring, even when they know it is needed.
- Onboarding new developers takes an unusually long time because the codebase is so hard to understand.


## Symptoms ▲

- [Legacy Skill Shortage](legacy-skill-shortage.md) <span class="info-tooltip" title="Confidence: 0.697, Strength: 0.884">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing bugs results in a reliance on a dwindling pool of experienced developers familiar with outdated technologies, thereby creating maintenance bottlenecks and increasing the risk of system failure when those few experts are unavailable.
- [Poor Test Coverage](poor-test-coverage.md) <span class="info-tooltip" title="Confidence: 0.653, Strength: 0.860">ⓘ</span>
<br/>  The difficulty in modifying the code often leads developers to avoid adding tests for fear of breaking existing functionality, resulting in critical areas lacking proper coverage and further entrenching the code's fragility.
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.653, Strength: 0.858">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing new bugs leads to a heightened sensitivity to changes, causing constant requirement updates as stakeholders seek to adapt to the limitations of the fragile system, ultimately resulting in frequent rework and delays.
- [Inefficient Development Environment](inefficient-development-environment.md) <span class="info-tooltip" title="Confidence: 0.639, Strength: 0.870">ⓘ</span>
<br/>  A slow and cumbersome development environment often arises from a complex and fragile code structure, where the difficulty of making changes leads to prolonged build times and inefficient workflows, ultimately signaling the underlying issues of a brittle codebase.
- [Developer Frustration and Burnout](developer-frustration-and-burnout.md) <span class="info-tooltip" title="Confidence: 0.635, Strength: 0.846">ⓘ</span>
<br/>  The difficulty in modifying a fragile codebase without introducing new bugs leads to increased stress and frustration among developers, as they face constant challenges and setbacks in their work, ultimately resulting in demotivation and burnout.
- [Complex Domain Model](complex-domain-model.md) <span class="info-tooltip" title="Confidence: 0.625, Strength: 0.824">ⓘ</span>
<br/>  The difficulty in modifying the codebase without introducing bugs stems from a convoluted representation of the complex business domain, where intricate relationships and rules lead to an entangled code structure that hinders clarity and maintainability.
- [Flaky Tests](flaky-tests.md) <span class="info-tooltip" title="Confidence: 0.542, Strength: 0.845">ⓘ</span>
<br/>  The presence of flaky tests indicates a brittle codebase, as the frequent failures stemming from unpredictable timing, setup issues, or dependency conflicts reflect the underlying instability and complexity of the code, which hampers reliable testing and increases the risk of introducing new bugs during modifications.
- [Inadequate Mentoring Structure](inadequate-mentoring-structure.md) <span class="info-tooltip" title="Confidence: 0.526, Strength: 0.888">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing new bugs creates a high-stakes environment that discourages new developers from seeking guidance, resulting in a lack of systematic mentoring and support, which exacerbates the brittleness of the codebase.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.518, Strength: 0.761">ⓘ</span>
<br/>  The difficulty in modifying the code leads to inadequate handling of resource management, resulting in unreleased resources as developers avoid altering complex sections of the code for fear of introducing new bugs.
- [Monolithic Architecture Constraints](monolithic-architecture-constraints.md) <span class="info-tooltip" title="Confidence: 0.502, Strength: 0.886">ⓘ</span>
<br/>  The difficulty in modifying a large, monolithic codebase without introducing bugs highlights the brittleness of the underlying code, as the tightly coupled components create interdependencies that complicate maintenance and hinder the safe implementation of new features.
- [Reduced Feature Quality](reduced-feature-quality.md) <span class="info-tooltip" title="Confidence: 0.474, Strength: 0.916">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing new bugs leads to rushed development cycles, limiting the time available for thorough testing and refinement, which directly results in diminished quality of the features delivered to users.
- [Analysis Paralysis](analysis-paralysis.md) <span class="info-tooltip" title="Confidence: 0.472, Strength: 0.897">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing bugs leads teams to overanalyze potential changes, causing delays in implementation and hindering development progress.
- [Team Members Not Engaged in Review Process](team-members-not-engaged-in-review-process.md) <span class="info-tooltip" title="Confidence: 0.466, Strength: 0.874">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing new bugs leads to team members becoming disengaged during the review process, as they may feel that their feedback is futile in addressing the underlying fragility, resulting in a lack of diverse perspectives and reduced quality assurance.
- [Inefficient Code](inefficient-code.md) <span class="info-tooltip" title="Confidence: 0.422, Strength: 0.868">ⓘ</span>
<br/>  The presence of performance bottlenecks indicates that the code has become overly complex and convoluted, making it challenging to optimize without risking unintended side effects, thus serving as a warning sign of a fragile and unmanageable codebase.
- [Unbounded Data Structures](unbounded-data-structures.md) <span class="info-tooltip" title="Confidence: 0.420, Strength: 0.872">ⓘ</span>
<br/>  The difficulty in modifying the codebase leads to inadequate management of data structures, resulting in them growing unchecked and causing memory issues, which serves as a clear indicator of the underlying fragility in the system's architecture.
- [Regulatory Compliance Drift](regulatory-compliance-drift.md) <span class="info-tooltip" title="Confidence: 0.415, Strength: 0.880">ⓘ</span>
<br/>  The difficulty in modifying the existing code without introducing new bugs leads to a reluctance to implement necessary updates, causing the system to lag behind evolving regulatory requirements and creating compliance gaps that are costly and risky to rectify.
- [Monolithic Functions and Classes](monolithic-functions-and-classes.md) <span class="info-tooltip" title="Confidence: 0.413, Strength: 0.791">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing new bugs stems from the presence of overly complex and monolithic functions and classes, which combine multiple responsibilities and create intertwined dependencies that hinder understanding and safe modifications, thus serving as a clear indicator of the codebase's fragility.
- [Procedural Programming in OOP Languages](procedural-programming-in-oop-languages.md) <span class="info-tooltip" title="Confidence: 0.401, Strength: 0.736">ⓘ</span>
<br/>  The use of procedural programming within object-oriented languages leads to a lack of modularity and encapsulation, resulting in large, interdependent code blocks that make the codebase fragile and prone to errors during modification.
- [Inability to Innovate](inability-to-innovate.md) <span class="info-tooltip" title="Confidence: 0.400, Strength: 0.899">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing new bugs leads to an overwhelming focus on urgent maintenance tasks, which in turn stifles the team's ability to explore innovative solutions or enhancements.
- [Delayed Bug Fixes](delayed-bug-fixes.md) <span class="info-tooltip" title="Confidence: 0.397, Strength: 0.849">ⓘ</span>
<br/>  The difficulty in modifying the codebase without introducing new bugs leads to a backlog of unresolved issues, as developers hesitate to implement fixes that could worsen the stability of the system.
- [Poor Project Control](poor-project-control.md) <span class="info-tooltip" title="Confidence: 0.393, Strength: 0.885">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing new bugs leads to a lack of confidence in testing and monitoring, resulting in project progress being overlooked and issues remaining hidden until they escalate beyond manageable recovery.
- [Inconsistent Onboarding Experience](inconsistent-onboarding-experience.md) <span class="info-tooltip" title="Confidence: 0.391, Strength: 0.857">ⓘ</span>
<br/>  The difficulty in modifying the codebase leads to a reliance on individual team members' varying expertise and workarounds, resulting in inconsistent onboarding experiences as new hires struggle to navigate a system that is fragile and poorly documented.
- [Reduced Innovation](reduced-innovation.md) <span class="info-tooltip" title="Confidence: 0.390, Strength: 0.920">ⓘ</span>
<br/>  The difficulty in modifying a fragile codebase without introducing bugs leads teams to avoid experimentation and innovation, resulting in a narrow focus on maintaining only essential functionality.
- [Team Dysfunction](team-dysfunction.md) <span class="info-tooltip" title="Confidence: 0.384, Strength: 0.876">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing bugs creates frustration and misalignment among team members, as they struggle to achieve their objectives in a chaotic environment, thereby leading to ineffective collaboration and communication.
- [Strangler Fig Pattern Failures](strangler-fig-pattern-failures.md) <span class="info-tooltip" title="Confidence: 0.384, Strength: 0.902">ⓘ</span>
<br/>  The difficulty in modifying the codebase without introducing new bugs leads to stalled incremental modernization efforts, as the complex interdependencies and data consistency challenges become more pronounced when attempting to replace or integrate legacy components.
- [Undefined Code Style Guidelines](undefined-code-style-guidelines.md) <span class="info-tooltip" title="Confidence: 0.370, Strength: 0.661">ⓘ</span>
<br/>  The lack of clear coding standards leads to inconsistent code, which exacerbates the fragility of the codebase, making it harder to modify and increasing the likelihood of introducing bugs during maintenance and development.
- [High Defect Rate in Production](high-defect-rate-in-production.md) <span class="info-tooltip" title="Confidence: 0.369, Strength: 0.776">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing new bugs leads to a high defect rate in production, as the fragile structure of the codebase increases the likelihood of unforeseen interactions and errors during development and testing.
- [Data Migration Integrity Issues](data-migration-integrity-issues.md) <span class="info-tooltip" title="Confidence: 0.365, Strength: 0.878">ⓘ</span>
<br/>  The difficulty in modifying the codebase increases the likelihood of errors during data migrations, as outdated or fragile code can fail to correctly handle schema transformations and format conversions, leading to integrity issues in the migrated data.
- [Mentor Burnout](mentor-burnout.md) <span class="info-tooltip" title="Confidence: 0.360, Strength: 0.904">ⓘ</span>
<br/>  The difficulty in modifying the fragile codebase leads to an increased reliance on experienced team members for guidance and troubleshooting, resulting in mentor burnout as they are tasked with constantly mitigating the risks associated with potential bugs during maintenance and feature development.
- [Reduced Team Productivity](reduced-team-productivity.md) <span class="info-tooltip" title="Confidence: 0.348, Strength: 0.946">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing new bugs leads to hesitation and caution among developers, resulting in slower progress and decreased productivity as they spend more time troubleshooting and validating changes rather than delivering new features.
- [Feature Creep](feature-creep.md) <span class="info-tooltip" title="Confidence: 0.346, Strength: 0.872">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing new bugs leads developers to continuously expand feature requirements instead of refactoring existing components, resulting in an increasingly complex and bloated system that further exacerbates maintenance challenges.
- [Inappropriate Skillset](inappropriate-skillset.md) <span class="info-tooltip" title="Confidence: 0.346, Strength: 0.882">ⓘ</span>
<br/>  The difficulty in modifying the codebase without introducing bugs often leads to team members relying on outdated practices or lacking necessary expertise, as they struggle to navigate the complexities of the system, thereby highlighting gaps in their skillset.
- [Unoptimized File Access](unoptimized-file-access.md) <span class="info-tooltip" title="Confidence: 0.343, Strength: 0.917">ⓘ</span>
<br/>  Inefficient file access often arises from a complex and fragile code structure that hinders developers from implementing optimized solutions, thereby serving as an indicator of the underlying difficulty in maintaining and enhancing the codebase.
- [Inconsistent Naming Conventions](inconsistent-naming-conventions.md) <span class="info-tooltip" title="Confidence: 0.339, Strength: 0.804">ⓘ</span>
<br/>  Unstructured or conflicting naming conventions create confusion and reduce code readability, leading to increased difficulty in understanding and modifying the code, which exacerbates the risk of introducing bugs during maintenance and feature development.
- [Vendor Lock-In](vendor-lock-in.md) <span class="info-tooltip" title="Confidence: 0.335, Strength: 0.832">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing bugs leads to a reliance on specific vendor tools and APIs, as developers seek stability in familiar solutions, thereby limiting future options and reinforcing the challenges of maintaining an adaptable system.
- [Blame Culture](blame-culture.md) <span class="info-tooltip" title="Confidence: 0.333, Strength: 0.874">ⓘ</span>
<br/>  The difficulty in modifying the codebase without introducing new bugs fosters a fear of failure, leading to a culture where mistakes are punished rather than analyzed, thereby stifling innovation and learning in the maintenance process.
- [Technical Architecture Limitations](technical-architecture-limitations.md) <span class="info-tooltip" title="Confidence: 0.331, Strength: 0.882">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing new bugs stems from a rigid architecture that enforces outdated design patterns, thus limiting the system's adaptability and highlighting the underlying brittleness of the codebase.
- [Inadequate Configuration Management](inadequate-configuration-management.md) <span class="info-tooltip" title="Confidence: 0.321, Strength: 0.896">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing new bugs leads to a lack of proper version tracking and documentation, as developers may avoid thorough updates or changes, resulting in inadequate configuration management that manifests as errors or rollback issues.
- [Complex Implementation Paths](complex-implementation-paths.md) <span class="info-tooltip" title="Confidence: 0.320, Strength: 0.886">ⓘ</span>
<br/>  The difficulty in modifying the existing codebase without introducing bugs often leads to convoluted technical solutions for straightforward business requirements, as developers resort to complex implementation paths to work around the limitations of the brittle architecture.
- [Large Feature Scope](large-feature-scope.md) <span class="info-tooltip" title="Confidence: 0.318, Strength: 0.843">ⓘ</span>
<br/>  The difficulty in modifying a brittle codebase leads to features being developed as large, monolithic units, which cannot be easily broken down into smaller changes, thus causing prolonged integration challenges and increasing the risk of introducing bugs.
- [Slow Development Velocity](slow-development-velocity.md) <span class="info-tooltip" title="Confidence: 0.317, Strength: 0.927">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing new bugs leads to prolonged testing and debugging cycles, resulting in a decline in overall development productivity and an inability to deliver features and fixes in a timely manner.
- [Vendor Dependency Entrapment](vendor-dependency-entrapment.md) <span class="info-tooltip" title="Confidence: 0.313, Strength: 0.836">ⓘ</span>
<br/>  The difficulty in modifying the fragile codebase often leads organizations to rely on discontinued vendor products, as the risks of altering existing systems heighten their dependence on outdated solutions, resulting in costly support contracts or the need for a complete system overhaul.
- [Context Switching Overhead](context-switching-overhead.md) <span class="info-tooltip" title="Confidence: 0.312, Strength: 0.858">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing bugs forces developers to frequently switch between various tools and systems to understand and navigate the fragile code structure, leading to increased cognitive load and decreased productivity.
- [Lower Code Quality](lower-code-quality.md) <span class="info-tooltip" title="Confidence: 0.308, Strength: 0.876">ⓘ</span>
<br/>  The difficulty in modifying a brittle codebase often leads to rushed development and burnout among developers, resulting in lower code quality as they make more mistakes under pressure, which serves as an indicator of the underlying fragility of the system.
- [Decision Avoidance](decision-avoidance.md) <span class="info-tooltip" title="Confidence: 0.308, Strength: 0.902">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing new bugs leads developers to avoid making critical technical decisions, as they fear that any change could exacerbate existing issues, resulting in stagnation and bottlenecks in development.
- [Invisible Nature of Technical Debt](invisible-nature-of-technical-debt.md) <span class="info-tooltip" title="Confidence: 0.303, Strength: 0.872">ⓘ</span>
<br/>  The difficulty in modifying the code without introducing new bugs obscures the extent of technical debt, resulting in a lack of visibility for non-technical stakeholders, which hinders the prioritization and allocation of resources for necessary improvements.
- [Inconsistent Coding Standards](inconsistent-coding-standards.md) <span class="info-tooltip" title="Confidence: 0.301, Strength: 0.862">ⓘ</span>
<br/>  The presence of inconsistent coding standards leads to a fragile codebase by creating ambiguity in code interpretation, which complicates modifications and increases the likelihood of introducing errors during maintenance and feature development.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○

- **Code Coverage Tools:** Use tools to measure test coverage. Low coverage is a strong indicator of brittleness.
- **Static Analysis Tools:** Tools that measure code complexity (e.g., cyclomatic complexity), coupling, and other metrics can highlight problematic areas.
- **Bug Tracking Metrics:** Monitor the rate of regression bugs introduced after new features or changes.
- **Developer Surveys/Interviews:** Ask developers about their experience working with the codebase and their confidence in making changes.
- **Code Review Feedback:** Look for recurring comments about code being hard to understand or risky to change.


## Examples

A team needs to update a small piece of business logic in a legacy system. The change is estimated to take a few hours, but because the code is so tightly coupled and lacks tests, the team spends two weeks trying to implement the change and fix all the new bugs it introduces. For example, a function that calculates a user's discount also updates their loyalty points and sends an email. Changing the discount calculation logic unexpectedly breaks the email sending feature because the function has too many responsibilities. This problem is a hallmark of aging, unmaintained software systems. It often arises from a lack of discipline in software engineering practices, especially testing and design principles, over a long period.
