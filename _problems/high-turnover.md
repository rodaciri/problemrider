---
title: High Turnover
description: New developers become frustrated and leave the team due to poor onboarding
  and system complexity.
category:
- Business
- Communication
- Process
related_problems:
- slug: difficult-developer-onboarding
  similarity: 0.7
- slug: new-hire-frustration
  similarity: 0.65
- slug: team-churn-impact
  similarity: 0.65
- slug: mentor-burnout
  similarity: 0.6
- slug: high-bug-introduction-rate
  similarity: 0.6
- slug: inconsistent-onboarding-experience
  similarity: 0.6
layout: problem
---

## Description

High turnover occurs when developers frequently leave the team, often shortly after joining, due to frustration with system complexity, poor onboarding experiences, or challenging working conditions. This creates a vicious cycle where the remaining team members must constantly train new people instead of focusing on development work, while institutional knowledge is continuously lost. High turnover is particularly damaging to legacy systems where domain knowledge and understanding of complex codebases takes significant time to develop.

## Indicators ⟡
- New hires leave within their first 6-12 months
- Exit interviews frequently mention frustration with codebase complexity or lack of support
- Team composition changes frequently, making it difficult to maintain consistent practices
- Significant time is spent on recruitment and interviewing rather than development
- Projects are delayed because new team members need extensive training

## Symptoms ▲
- [Legacy Skill Shortage](legacy-skill-shortage.md) <span class="info-tooltip" title="Confidence: 0.547, Strength: 0.770">ⓘ</span>
<br/>  The high turnover of developers, driven by poor onboarding and system complexity, results in a legacy skill shortage as fewer knowledgeable individuals remain to maintain and support outdated technologies, creating significant operational risks.
- [Complex Domain Model](complex-domain-model.md) <span class="info-tooltip" title="Confidence: 0.533, Strength: 0.740">ⓘ</span>
<br/>  The inherent complexity of the domain model leads to a steep learning curve for new developers, resulting in frustration and confusion during onboarding, which ultimately contributes to their decision to leave the team.
- [Reduced Team Productivity](reduced-team-productivity.md) <span class="info-tooltip" title="Confidence: 0.516, Strength: 0.790">ⓘ</span>
<br/>  High turnover leads to reduced team productivity as new developers struggle to navigate the complex legacy systems without adequate onboarding, resulting in knowledge gaps and increased time spent on resolving issues rather than delivering features.
- [Regulatory Compliance Drift](regulatory-compliance-drift.md) <span class="info-tooltip" title="Confidence: 0.505, Strength: 0.744">ⓘ</span>
<br/>  High turnover leads to a loss of institutional knowledge and continuity, resulting in increased difficulty for remaining developers to understand and adapt legacy systems to meet evolving regulatory requirements, thereby creating compliance gaps that indicate the challenges faced by the team.
- [Flaky Tests](flaky-tests.md) <span class="info-tooltip" title="Confidence: 0.485, Strength: 0.758">ⓘ</span>
<br/>  High turnover leads to flaky tests as new developers, unfamiliar with the complex legacy system, struggle to implement reliable test cases, resulting in inconsistent test outcomes that further erode confidence and increase frustration.
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.477, Strength: 0.684">ⓘ</span>
<br/>  Frequent changes to requirements arise as frustrated new developers, unfamiliar with complex legacy systems, struggle to grasp the existing functionality and inadvertently prompt shifts in project scope, highlighting the underlying issue of high turnover.
- [Developer Frustration and Burnout](developer-frustration-and-burnout.md) <span class="info-tooltip" title="Confidence: 0.470, Strength: 0.680">ⓘ</span>
<br/>  High turnover is driven by new developers experiencing frustration and burnout from inadequate onboarding and the complexity of the legacy system, which creates a demotivating environment that signals underlying issues with team integration and codebase manageability.
- [Data Migration Integrity Issues](data-migration-integrity-issues.md) <span class="info-tooltip" title="Confidence: 0.464, Strength: 0.806">ⓘ</span>
<br/>  High turnover leads to a lack of experienced developers who can effectively address and resolve complex data migration challenges, resulting in increased instances of integrity issues due to insufficient understanding of legacy system nuances and data schemas.
- [Increased Customer Support Load](increased-customer-support-load.md) <span class="info-tooltip" title="Confidence: 0.425, Strength: 0.655">ⓘ</span>
<br/>  High turnover leads to inexperienced developers who struggle to understand complex legacy systems, resulting in increased user frustration and a higher volume of support requests as customers encounter unresolved issues.
- [Inefficient Development Environment](inefficient-development-environment.md) <span class="info-tooltip" title="Confidence: 0.412, Strength: 0.658">ⓘ</span>
<br/>  The slow and cumbersome development environment frustrates new developers during onboarding, leading to decreased productivity and heightened dissatisfaction, which ultimately contributes to their decision to leave the team.
- [Unmotivated Employees](unmotivated-employees.md) <span class="info-tooltip" title="Confidence: 0.406, Strength: 0.675">ⓘ</span>
<br/>  High turnover leads to unmotivated employees as the constant influx of new developers, faced with a steep learning curve and inadequate onboarding, creates a demoralizing environment that discourages engagement and collaboration among remaining team members.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.396, Strength: 0.610">ⓘ</span>
<br/>  High turnover leads to incomplete knowledge transfer and insufficient understanding of the legacy system, resulting in developers neglecting to properly manage and deallocate system resources, which manifests as unreleased resources.
- [Interrupt Overhead](interrupt-overhead.md) <span class="info-tooltip" title="Confidence: 0.370, Strength: 0.757">ⓘ</span>
<br/>  High turnover leads to insufficiently trained developers who struggle with complex legacy systems, resulting in inefficient handling of hardware resources and increased interrupt overhead as they attempt to manage and troubleshoot performance issues without adequate experience.
- [Cross-System Data Synchronization Problems](cross-system-data-synchronization-problems.md) <span class="info-tooltip" title="Confidence: 0.368, Strength: 0.721">ⓘ</span>
<br/>  High turnover results in a lack of experienced developers who can effectively navigate and resolve the complexities of cross-system data synchronization, leading to increased errors and frustrations that further exacerbate onboarding challenges for newcomers.
- [Reduced Innovation](reduced-innovation.md) <span class="info-tooltip" title="Confidence: 0.347, Strength: 0.725">ⓘ</span>
<br/>  High turnover leads to a lack of experienced developers who can drive innovation, resulting in teams becoming risk-averse and focusing solely on maintaining outdated systems, thus stifling creativity and progress.
- [Unbounded Data Growth](unbounded-data-growth.md) <span class="info-tooltip" title="Confidence: 0.332, Strength: 0.653">ⓘ</span>
<br/>  Frustrated new developers struggle to manage an increasingly complex system, leading to decision-making shortcuts that neglect necessary data management practices, resulting in unbounded growth of data structures and caches as they lack the experience and support to implement effective pruning and archiving strategies.
- [Monolithic Architecture Constraints](monolithic-architecture-constraints.md) <span class="info-tooltip" title="Confidence: 0.325, Strength: 0.716">ⓘ</span>
<br/>  The difficulty in maintaining and understanding a large, complex codebase leads to frustration among new developers during onboarding, ultimately contributing to high turnover as they struggle to navigate the system’s intricacies.
- [Legacy API Versioning Nightmare](legacy-api-versioning-nightmare.md) <span class="info-tooltip" title="Confidence: 0.308, Strength: 0.786">ⓘ</span>
<br/>  The frustration new developers experience during onboarding is exacerbated by the complex and poorly versioned APIs of legacy systems, making it difficult for them to understand and contribute to the codebase, ultimately leading to higher turnover rates.
- [Deadline Pressure](deadline-pressure.md) <span class="info-tooltip" title="Confidence: 0.303, Strength: 0.707">ⓘ</span>
<br/>  The intense pressure to meet deadlines, stemming from a lack of adequate onboarding and the complexities of the legacy system, forces remaining developers to make hasty decisions and take shortcuts, which ultimately perpetuates high turnover as new hires become disillusioned with the work environment.
- [Team Members Not Engaged in Review Process](team-members-not-engaged-in-review-process.md) <span class="info-tooltip" title="Confidence: 0.303, Strength: 0.690">ⓘ</span>
<br/>  High turnover leads to a lack of experienced team members who can effectively engage in the review process, resulting in an over-reliance on a few individuals for feedback and diminishing code quality as newer developers struggle to navigate the complexities of the legacy system without proper guidance.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○
- **Turnover Rate Tracking:** Monitor how long new hires stay and identify patterns in departures
- **Exit Interview Analysis:** Collect and analyze feedback from departing developers
- **Time-to-Productivity Metrics:** Track how long it takes new hires to become effective contributors
- **Onboarding Satisfaction Surveys:** Regular feedback from new team members about their experience
- **Recruitment Cost Analysis:** Track the total cost of constantly replacing team members

## Examples

A financial services company has a legacy trading system built over 15 years with minimal documentation. New developers are expected to become productive within 30 days, but the system's complexity means it typically takes 6 months to understand the business logic and code architecture. Most new hires become frustrated and leave within 4 months, feeling overwhelmed by the system and unsupported by the team. The remaining senior developers are so busy training new people that they have no time to improve documentation or simplify the system, perpetuating the cycle. Over two years, the team has hired 12 developers but only retained 3, spending more time on recruitment and training than on actual development work. Another example involves a healthcare application where HIPAA compliance requirements create additional complexity for new developers. Without proper training on healthcare regulations and secure coding practices, new developers make mistakes that require extensive rework. The stress of working with sensitive data, combined with the complexity of learning both the technical system and regulatory requirements, causes many developers to seek positions in less regulated industries.
