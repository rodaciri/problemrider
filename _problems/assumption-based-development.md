---
title: Assumption-Based Development
description: Developers make decisions based on assumptions about requirements or
  user needs rather than validating their understanding.
category:
- Communication
- Process
- Requirements
related_problems:
- slug: convenience-driven-development
  similarity: 0.55
- slug: inexperienced-developers
  similarity: 0.5
- slug: decision-avoidance
  similarity: 0.5
- slug: feedback-isolation
  similarity: 0.5
- slug: decision-paralysis
  similarity: 0.5
- slug: inadequate-requirements-gathering
  similarity: 0.5
layout: problem
---

## Description

Assumption-based development occurs when developers make decisions about functionality, user interface design, business logic, or technical approach based on their assumptions about what users need or what stakeholders want, rather than validating these assumptions through direct communication or research. While some assumptions are inevitable in development, excessive reliance on assumptions leads to solutions that don't match actual needs and require costly rework.


## Indicators ⟡

- Developers proceed with implementation without asking clarifying questions
- Design decisions are made without consulting users or stakeholders
- Business logic is implemented based on developer interpretation of requirements
- Edge cases and error conditions are handled based on developer assumptions
- User interface designs are created without user input or testing


## Symptoms ▲

*No significant relationships within the scope of legacy systems identified (yet).*

## Root Causes ▼

- [Misunderstanding of OOP](misunderstanding-of-oop.md) <span class="info-tooltip" title="Confidence: 0.443, Strength: 0.908">ⓘ</span>
<br/>  A lack of understanding of object-oriented programming principles leads to incorrect assumptions about system requirements and user needs, resulting in decisions that are not based on validated insights, thereby compromising the integrity and maintainability of legacy systems.
- [Feature Gaps](feature-gaps.md) <span class="info-tooltip" title="Confidence: 0.411, Strength: 0.843">ⓘ</span>
<br/>  Missing functionality arises when developers rely on unvalidated assumptions about user needs, leading to incomplete solutions that fail to address actual requirements, thereby perpetuating a cycle of misunderstanding and inadequate system performance in legacy environments.
- [Approval Dependencies](approval-dependencies.md) <span class="info-tooltip" title="Confidence: 0.399, Strength: 0.784">ⓘ</span>
<br/>  The need for approvals from specific individuals creates delays in the development process, forcing developers to rely on assumptions about requirements or user needs instead of obtaining necessary clarifications, which can lead to misaligned outcomes in legacy systems.
- [Requirements Ambiguity](requirements-ambiguity.md) <span class="info-tooltip" title="Confidence: 0.385, Strength: 0.806">ⓘ</span>
<br/>  Unclear and ambiguous requirements lead developers to make unfounded assumptions about user needs, resulting in implementations that diverge from actual expectations and necessitate costly rework in legacy systems.
- [User Confusion](user-confusion.md) <span class="info-tooltip" title="Confidence: 0.383, Strength: 0.873">ⓘ</span>
<br/>  End users experiencing inconsistent behavior in similar operations fail to provide clear feedback on their actual needs, leading developers to rely on unverified assumptions about user requirements instead of engaging in thorough validation.
- [Inconsistent Behavior](inconsistent-behavior.md) <span class="info-tooltip" title="Confidence: 0.377, Strength: 0.835">ⓘ</span>
<br/>  In legacy systems, unpredictable outcomes from the same business process lead developers to rely on unvalidated assumptions about user needs, as they lack consistent data and feedback to accurately inform their decisions.
- [Incomplete Knowledge](incomplete-knowledge.md) <span class="info-tooltip" title="Confidence: 0.348, Strength: 0.863">ⓘ</span>
<br/>  Developers' lack of awareness of all instances of similar logic across legacy systems leads them to make unvalidated assumptions about requirements, resulting in decisions that may not align with actual user needs or system behavior.
- [Decision Paralysis](decision-paralysis.md) <span class="info-tooltip" title="Confidence: 0.343, Strength: 0.858">ⓘ</span>
<br/>  A lack of clear guidance leads developers to make assumptions about requirements to avoid decision paralysis, ultimately resulting in misaligned development efforts and increased risks in legacy systems.
- [Budget Overruns](budget-overruns.md) <span class="info-tooltip" title="Confidence: 0.341, Strength: 0.923">ⓘ</span>
<br/>  Limited funding leads to rushed decision-making and inadequate requirement validation, causing developers to rely on unverified assumptions about user needs, which ultimately drives up project costs and extends timelines.
- [Constantly Shifting Deadlines](constantly-shifting-deadlines.md) <span class="info-tooltip" title="Confidence: 0.318, Strength: 0.868">ⓘ</span>
<br/>  Frequent deadline extensions create an environment of uncertainty where developers rely on unvalidated assumptions about requirements to keep pace with changing priorities, ultimately undermining the stability and clarity needed for effective legacy system development.
- [Insufficient Design Skills](insufficient-design-skills.md) <span class="info-tooltip" title="Confidence: 0.315, Strength: 0.913">ⓘ</span>
<br/>  The development team's lack of necessary design skills leads to an over-reliance on assumptions about user requirements, as they are unable to effectively analyze, communicate, and validate those needs, ultimately resulting in poorly structured software that does not align with actual user expectations.
- [Poorly Defined Responsibilities](poorly-defined-responsibilities.md) <span class="info-tooltip" title="Confidence: 0.311, Strength: 0.666">ⓘ</span>
<br/>  The lack of clearly defined responsibilities in legacy systems leads developers to make assumptions about requirements, as ambiguous module interactions prevent accurate understanding of user needs and system functionality.
- [Unrealistic Deadlines](unrealistic-deadlines.md) <span class="info-tooltip" title="Confidence: 0.311, Strength: 0.803">ⓘ</span>
<br/>  Aggressive deadlines pressure developers to make quick decisions based on assumptions about user needs instead of thoroughly validating requirements, resulting in flawed implementations that compromise the integrity of legacy systems.
- [Perfectionist Culture](perfectionist-culture.md) <span class="info-tooltip" title="Confidence: 0.309, Strength: 0.848">ⓘ</span>
<br/>  A culture that prioritizes perfection over timely delivery fosters a reluctance to seek user feedback, resulting in developers relying on unvalidated assumptions about requirements, which ultimately undermines the software's alignment with actual user needs.
- [Incomplete Projects](incomplete-projects.md) <span class="info-tooltip" title="Confidence: 0.306, Strength: 0.838">ⓘ</span>
<br/>  The tendency to prioritize incomplete features leads developers to make unfounded assumptions about user needs, as they lack the necessary feedback and validation that would come from fully developed and deployed functionalities.

## Detection Methods ○

- **Assumption Documentation:** Track what assumptions developers are making during development
- **Stakeholder Validation Frequency:** Monitor how often developers check assumptions with stakeholders
- **Rework Analysis:** Analyze how much rework is caused by incorrect assumptions
- **User Feedback Correlation:** Compare user feedback with original developer assumptions
- **Requirements Clarity Assessment:** Evaluate how clear and specific requirements are before development begins


## Examples

A development team builds a customer search feature assuming that users will search primarily by company name, so they optimize the search interface and algorithms for company name searches. When they deploy the feature, they discover that users actually search most frequently by contact person names and email addresses, making the search interface frustrating to use and the search results poor quality. The search feature must be redesigned and rebuilt to support the actual search patterns. Another example involves developers building a reporting system who assume that users want to see data in real-time, so they implement complex real-time data processing. However, users actually prefer to work with stable daily snapshots of data for consistency in their analysis, and the real-time updates make it difficult to create reproducible reports. The real-time complexity adds no value and creates maintenance overhead for functionality users don't want.
