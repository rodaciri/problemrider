---
title: Testing Complexity
description: Quality assurance must verify the same functionality in multiple locations,
  which increases the testing effort and the risk of missing bugs.
category:
- Code
- Testing
related_problems:
- slug: difficult-to-test-code
  similarity: 0.7
- slug: insufficient-testing
  similarity: 0.65
- slug: complex-and-obscure-logic
  similarity: 0.6
- slug: test-debt
  similarity: 0.6
- slug: inconsistent-quality
  similarity: 0.6
- slug: quality-blind-spots
  similarity: 0.6
layout: problem
---

## Description
Testing complexity is a common problem in software systems with a high degree of code duplication. It occurs when quality assurance (QA) must verify the same functionality in multiple locations. This increases the testing effort and the risk of missing bugs. Testing complexity is often a sign of a poorly designed system with a high degree of code duplication.


## Indicators ⟡
- The QA team is spending a lot of time testing the same functionality over and over again.
- The QA team is not able to keep up with the pace of development.
- The QA team is missing a lot of bugs.
- The QA team is not happy with the quality of the system.


## Symptoms ▲

- [Poor Test Coverage](poor-test-coverage.md) <span class="info-tooltip" title="Confidence: 0.674, Strength: 0.879">ⓘ</span>
<br/>  In legacy systems, the increased effort required to verify functionality across multiple locations often leads to inadequate test coverage in critical areas, as teams may prioritize testing the most visible features while neglecting less accessible code, ultimately exposing the system to undetected bugs.
- [Increased Customer Support Load](increased-customer-support-load.md) <span class="info-tooltip" title="Confidence: 0.639, Strength: 0.897">ⓘ</span>
<br/>  The increased testing effort required in legacy systems often leads to overlooked bugs, which in turn frustrates users and results in a higher volume of support inquiries as they struggle to navigate unresolved issues.
- [Complex Domain Model](complex-domain-model.md) <span class="info-tooltip" title="Confidence: 0.616, Strength: 0.847">ⓘ</span>
<br/>  The inherent complexity of the business domain leads to a convoluted system design, which necessitates extensive testing across multiple areas, thereby heightening the likelihood of bugs being overlooked due to the increased testing burden.
- [Flaky Tests](flaky-tests.md) <span class="info-tooltip" title="Confidence: 0.585, Strength: 0.866">ⓘ</span>
<br/>  The increased testing effort across multiple locations leads to inconsistent test environments and dependencies, resulting in flaky tests that obscure the reliability of the quality assurance process in legacy systems.
- [Legacy Skill Shortage](legacy-skill-shortage.md) <span class="info-tooltip" title="Confidence: 0.584, Strength: 0.836">ⓘ</span>
<br/>  The increased testing complexity in legacy systems necessitates a deep understanding of outdated technologies, which exacerbates the shortage of skilled developers, as fewer professionals are equipped to handle the intricate validation required across multiple functionalities.
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.558, Strength: 0.754">ⓘ</span>
<br/>  The need to verify consistent functionality across multiple locations in legacy systems often leads to an increased reliance on evolving requirements, as stakeholders frequently adjust expectations based on earlier testing outcomes, resulting in continuous changes that complicate the testing process further.
- [Data Migration Integrity Issues](data-migration-integrity-issues.md) <span class="info-tooltip" title="Confidence: 0.550, Strength: 0.842">ⓘ</span>
<br/>  The increased testing complexity stemming from the need to verify functionality across multiple locations leads to oversight during data migration, resulting in integrity issues caused by untested schema mismatches and format incompatibilities.
- [Technical Architecture Limitations](technical-architecture-limitations.md) <span class="info-tooltip" title="Confidence: 0.526, Strength: 0.852">ⓘ</span>
<br/>  The need to verify the same functionality across multiple locations within a rigid and constrained system architecture leads to increased complexity in testing processes, highlighting limitations in performance and maintainability that exacerbate the risk of undetected bugs.
- [Large Pull Requests](large-pull-requests.md) <span class="info-tooltip" title="Confidence: 0.522, Strength: 0.763">ⓘ</span>
<br/>  The need to verify the same functionality in multiple locations results in extensive changes bundled into large pull requests, making it difficult for reviewers to thoroughly assess the code and increasing the likelihood of overlooked bugs.
- [Reduced Team Productivity](reduced-team-productivity.md) <span class="info-tooltip" title="Confidence: 0.491, Strength: 0.786">ⓘ</span>
<br/>  In legacy systems, the need to verify the same functionality across multiple locations leads to increased testing efforts, which diverts resources and focus from development tasks, thereby causing a noticeable decline in team productivity as they struggle to manage overlapping responsibilities.
- [Analysis Paralysis](analysis-paralysis.md) <span class="info-tooltip" title="Confidence: 0.487, Strength: 0.895">ⓘ</span>
<br/>  The increased testing effort required to verify functionality across multiple locations in legacy systems leads to teams overanalyzing potential issues, resulting in delays and stagnation in implementation as they become overwhelmed by the complexity of the testing process.
- [Review Process Breakdown](review-process-breakdown.md) <span class="info-tooltip" title="Confidence: 0.471, Strength: 0.705">ⓘ</span>
<br/>  The increased testing complexity in legacy systems leads to insufficient time and focus during code reviews, resulting in a breakdown of the review process where critical issues are overlooked and feedback is ineffective.
- [Monolithic Architecture Constraints](monolithic-architecture-constraints.md) <span class="info-tooltip" title="Confidence: 0.449, Strength: 0.902">ⓘ</span>
<br/>  The increased testing effort required in large, complex codebases leads to challenges in maintaining, scaling, and deploying the software effectively, as the interdependencies and tightly coupled components make it difficult to isolate and verify functionality across multiple locations, thereby highlighting the underlying complexity.
- [Deadline Pressure](deadline-pressure.md) <span class="info-tooltip" title="Confidence: 0.419, Strength: 0.885">ⓘ</span>
<br/>  The extensive testing requirements arising from the need to verify functionality across multiple locations create a bottleneck that, under tight deadlines, pressures developers to make hasty decisions and skip thorough quality checks, ultimately compromising software integrity.
- [Inefficient Development Environment](inefficient-development-environment.md) <span class="info-tooltip" title="Confidence: 0.413, Strength: 0.831">ⓘ</span>
<br/>  The increased testing effort required to verify functionality across multiple locations in legacy software systems leads to a slower and more cumbersome development environment, as developers must navigate complex and redundant processes, ultimately hindering their efficiency and responsiveness to issues.
- [Delayed Bug Fixes](delayed-bug-fixes.md) <span class="info-tooltip" title="Confidence: 0.394, Strength: 0.816">ⓘ</span>
<br/>  The increased testing effort required to verify functionality across multiple locations often leads to unaddressed issues, as the complexity and time constraints hinder timely bug resolution, resulting in prolonged user frustration.
- [Author Frustration](author-frustration.md) <span class="info-tooltip" title="Confidence: 0.393, Strength: 0.906">ⓘ</span>
<br/>  The increased testing effort required to verify functionality across multiple locations often leads to inconsistent feedback during code reviews, causing developers to feel frustrated as they struggle to reconcile conflicting evaluations and address overlooked issues in the legacy system.
- [Cross-System Data Synchronization Problems](cross-system-data-synchronization-problems.md) <span class="info-tooltip" title="Confidence: 0.376, Strength: 0.800">ⓘ</span>
<br/>  The increased testing effort required to ensure functionality across multiple locations in legacy systems often leads to inadequate verification of data handling processes, resulting in synchronization challenges and potential data corruption during migration to modern systems.
- [Inconsistent Onboarding Experience](inconsistent-onboarding-experience.md) <span class="info-tooltip" title="Confidence: 0.373, Strength: 0.827">ⓘ</span>
<br/>  The increased testing complexity leads to a fragmented knowledge base among team members, resulting in varied onboarding experiences as new hires struggle to navigate inconsistent documentation and practices established from multiple verification points.
- [Inadequate Configuration Management](inadequate-configuration-management.md) <span class="info-tooltip" title="Confidence: 0.368, Strength: 0.882">ⓘ</span>
<br/>  The inability to properly track versions of code and configurations exacerbates testing complexity by making it difficult to ensure that all instances are evaluated consistently, leading to increased chances of overlooked bugs during quality assurance.
- [Rate Limiting Issues](rate-limiting-issues.md) <span class="info-tooltip" title="Confidence: 0.364, Strength: 0.911">ⓘ</span>
<br/>  The increased testing complexity in legacy systems often leads to insufficient verification of rate limiting configurations, resulting in either overly restrictive settings that block legitimate traffic or ineffective rules that fail to mitigate abuse, highlighting the need for more thorough testing protocols.
- [Team Members Not Engaged in Review Process](team-members-not-engaged-in-review-process.md) <span class="info-tooltip" title="Confidence: 0.357, Strength: 0.789">ⓘ</span>
<br/>  The increased testing complexity leads to team members being overwhelmed by the volume of functionality to review, resulting in disengagement and insufficient feedback during code reviews, which in turn exacerbates the risk of undetected bugs in the legacy system.
- [Mentor Burnout](mentor-burnout.md) <span class="info-tooltip" title="Confidence: 0.352, Strength: 0.897">ⓘ</span>
<br/>  The increased testing effort required to verify functionality in multiple locations strains experienced team members, leading to burnout as they take on the additional burden of mentoring less experienced colleagues who are overwhelmed by the complexities of the legacy system.
- [Poor Domain Model](poor-domain-model.md) <span class="info-tooltip" title="Confidence: 0.345, Strength: 0.927">ⓘ</span>
<br/>  The lack of a well-defined understanding of core business concepts leads to inconsistent implementations across the system, making it difficult for quality assurance to comprehensively test functionality and increasing the likelihood of undetected bugs.
- [Undefined Code Style Guidelines](undefined-code-style-guidelines.md) <span class="info-tooltip" title="Confidence: 0.340, Strength: 0.721">ⓘ</span>
<br/>  The lack of clear coding standards in legacy systems leads to inconsistent implementations across multiple locations, complicating the verification process and heightening the risk of overlooked defects during quality assurance testing.
- [Reduced Feature Quality](reduced-feature-quality.md) <span class="info-tooltip" title="Confidence: 0.335, Strength: 0.839">ⓘ</span>
<br/>  The increased testing effort required to verify functionality across multiple locations in legacy systems leaves less time for thorough refinement, leading to the delivery of features that are less polished and of lower quality.
- [Code Duplication](code-duplication.md) <span class="info-tooltip" title="Confidence: 0.335, Strength: 0.843">ⓘ</span>
<br/>  The presence of similar or identical code in multiple locations arises from the need to replicate functionality for testing purposes, leading to increased complexity in quality assurance efforts and a higher likelihood of overlooking bugs.
- [Difficult Developer Onboarding](difficult-developer-onboarding.md) <span class="info-tooltip" title="Confidence: 0.323, Strength: 0.837">ⓘ</span>
<br/>  The increased testing complexity due to verifying functionality across multiple locations creates a chaotic environment that hinders clear documentation and knowledge transfer, resulting in longer onboarding times for new developers.
- [Knowledge Silos](knowledge-silos.md) <span class="info-tooltip" title="Confidence: 0.316, Strength: 0.836">ⓘ</span>
<br/>  The increased testing complexity in legacy systems leads to knowledge silos, as team members become focused on their specific areas of functionality without sharing critical insights, resulting in fragmented understanding and potential oversight of bugs across the system.
- [Team Coordination Issues](team-coordination-issues.md) <span class="info-tooltip" title="Confidence: 0.310, Strength: 0.876">ⓘ</span>
<br/>  In legacy systems, the need to verify the same functionality across multiple locations complicates the testing process, leading to fragmented communication and misalignment among developers, which manifests as coordination issues when they attempt to manage overlapping responsibilities and ensure consistent quality.
- [Inconsistent Naming Conventions](inconsistent-naming-conventions.md) <span class="info-tooltip" title="Confidence: 0.310, Strength: 0.853">ⓘ</span>
<br/>  The presence of unstructured or conflicting names complicates code navigation and understanding, making it more challenging for quality assurance to verify functionality across multiple locations, thereby exacerbating the effort and risk associated with extensive testing.
- [Poor Operational Concept](poor-operational-concept.md) <span class="info-tooltip" title="Confidence: 0.306, Strength: 0.884">ⓘ</span>
<br/>  The increased testing complexity due to verifying functionality across multiple locations often results in inadequate planning for ongoing monitoring and maintenance, leading to post-launch instability as critical oversight is overshadowed by the sheer volume of testing required.
- [Maintenance Paralysis](maintenance-paralysis.md) <span class="info-tooltip" title="Confidence: 0.303, Strength: 0.878">ⓘ</span>
<br/>  The increased effort required for verifying functionality across multiple locations leads teams to hesitate in making necessary improvements, as they fear that any changes could introduce new bugs they cannot adequately test for, thereby paralyzing maintenance efforts.
- [Inadequate Test Data Management](inadequate-test-data-management.md) <span class="info-tooltip" title="Confidence: 0.301, Strength: 0.874">ⓘ</span>
<br/>  The need to verify functionality across multiple locations in legacy systems often leads to rushed or incomplete test data management, resulting in unrealistic testing scenarios that fail to uncover bugs, thereby exacerbating the challenges of comprehensive quality assurance.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○
- **Test Case Analysis:** Analyze your test cases to identify duplicated tests.
- **Code Coverage Analysis:** Analyze your code coverage to identify areas of the system that are not being tested.
- **QA Team Feedback:** Listen to feedback from the QA team to identify areas of the system that are difficult to test.
- **Bug Triage:** Analyze your bug triage process to identify bugs that are being missed by the QA team.


## Examples
An e-commerce website has a checkout flow that is duplicated in two different places. The QA team has to test the checkout flow in both places to make sure that it is working correctly. This is a waste of time and effort, and it increases the risk of missing bugs. The problem could be solved by creating a single, reusable checkout flow that is used in both places.
