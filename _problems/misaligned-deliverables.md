---
title: Misaligned Deliverables
description: The delivered product or feature does not match the expectations or requirements
  of the stakeholders.
category:
- Process
- Communication
related_problems:
- slug: stakeholder-developer-communication-gap
  similarity: 75%
- slug: product-direction-chaos
  similarity: 65%
- slug: stakeholder-frustration
  similarity: 60%
- slug: slow-feature-development
  similarity: 60%
- slug: inconsistent-behavior
  similarity: 60%
layout: problem
---

## Description
Misaligned deliverables are a classic symptom of a breakdown in communication between a development team and its stakeholders. This occurs when the final product does not match the expectations of the business or the needs of the users. This misalignment can be caused by a variety of factors, from ambiguous requirements and a lack of a strong product owner to a failure to involve stakeholders throughout the development process. The result is wasted effort, a product that fails to deliver value, and a loss of trust between the team and the business.

## Indicators ⟡
- The team is constantly having to rework features after they have been delivered.
- The team is not getting regular feedback from stakeholders.
- The team is not using a prototype or mockup to clarify requirements.
- The team is not getting feedback from users throughout the development process.

## Symptoms ▲

- **"That's Not What I Asked For":** Stakeholders express surprise or disappointment during demos or upon release, stating the delivered functionality is not what they envisioned.
- **Frequent Rework Post-Delivery:** Significant changes or re-implementations are required after a feature is considered "done" because it doesn't meet the actual need.
- **Low User Adoption/Satisfaction:** Users are reluctant to use the new feature or product, or provide negative feedback, because it doesn't solve their real problems.
- **Wasted Effort:** Development time and resources are spent building something that ultimately provides little value.
- **Blame Game:** Tensions rise between development teams and stakeholders as each side feels misunderstood or unheard.

## Root Causes ▼

- **Lack of Clear Requirements:** The initial requirements were ambiguous, incomplete, or not properly understood by the development team.
- **[Stakeholder-Developer Communication Gap](stakeholder-developer-communication-gap.md):** Poor communication channels or infrequent interactions lead to a divergence of understanding over time.
- **Assumptions Instead of Clarification:** Developers make assumptions about functionality or user needs rather than seeking clarification from stakeholders.
- **[Feedback Isolation](feedback-isolation.md):** Stakeholders are not involved throughout the development process, and feedback is only gathered at the very end.
- **Changing Priorities Without Communication:** Business priorities shift, but these changes are not effectively communicated to the development team, who continue building to old requirements.
- **Technical Constraints Not Communicated:** Developers fail to communicate technical limitations or trade-offs that impact the feasibility of certain requirements.

## Detection Methods ○

- **Regular Demos and Feedback Sessions:** Frequent, iterative demonstrations of working software to stakeholders to gather early and continuous feedback.
- **User Acceptance Testing (UAT):** Involve end-users or key stakeholders in testing the software to ensure it meets their needs before release.
- **Prototyping and Mockups:** Use visual aids early in the process to validate understanding of requirements.
- **Clear Acceptance Criteria:** Ensure every user story or task has well-defined, measurable acceptance criteria that are agreed upon by both developers and stakeholders.
- **Post-Mortems/Retrospectives:** Analyze projects where deliverables were misaligned to identify communication breakdowns or process failures.

## Examples
A company invests heavily in a new internal reporting tool. The development team builds a highly performant system with complex data visualizations. However, upon release, the business users find it unusable because it lacks a simple export-to-Excel function, which was a critical, but unstated, requirement for their daily workflow. In another case, a mobile app feature is designed to allow users to upload photos. The developers implement a basic upload function. However, the stakeholders expected advanced image editing capabilities (cropping, filters) which were never explicitly documented, leading to a significant gap between expectation and delivery. This problem is a classic example of a communication failure in software development. It is particularly costly as it often results in significant rework and delays, impacting both budget and morale.