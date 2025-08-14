---
title: Inconsistent Behavior
description: The same business process produces different outcomes depending on where
  it's triggered, leading to a confusing and unpredictable user experience.
category:
- Quality
- User Experience
related_problems:
- slug: inconsistent-execution
  similarity: 80%
- slug: user-confusion
  similarity: 65%
- slug: inconsistent-quality
  similarity: 65%
- slug: unpredictable-system-behavior
  similarity: 65%
- slug: change-management-chaos
  similarity: 60%
layout: problem
---

## Description
Inconsistent behavior is a common problem in software systems. It occurs when the same business process produces different outcomes depending on where it is triggered. This can lead to a number of problems, including a confusing and unpredictable user experience, a loss of trust in the system, and a great deal of frustration for the development team. Inconsistent behavior is often a sign of a poorly designed system with a high degree of code duplication.

## Indicators ⟡
- The system behaves differently in different parts of the application.
- The team is constantly getting bug reports about inconsistent behavior.
- The team is not sure how the system is supposed to behave.
- The team is not able to reproduce bugs that are reported by users.

## Symptoms ▲
- **[User Confusion](user-confusion.md):** End users are confused by the system's inconsistent behavior.
- **[User Trust Erosion](user-trust-erosion.md):** Users lose trust in the system when it behaves in an unpredictable way.
- **[Increased Customer Support Load](increased-customer-support-load.md):** The support team has to spend a lot of time dealing with bug reports about inconsistent behavior.
- **[Debugging Difficulties](debugging-difficulties.md):** It is difficult to debug problems when the system behaves in an inconsistent way.

## Root Causes ▼
- **[Code Duplication](code-duplication.md):** The same code is duplicated in multiple places, and the different copies have diverged over time.
- **[Synchronization Problems](synchronization-problems.md):** Changes made to one copy of the code are not propagated to the other copies.
- **[Global State and Side Effects](global-state-and-side-effects.md):** There is no single source of truth for the system's business logic.
- **Lack of a Clear Specification:** The system's behavior is not well-defined, which leads to inconsistencies in the implementation.

## Detection Methods ○
- **Integration Testing:** Use integration testing to verify that the system behaves consistently across different parts of the application.
- **User Acceptance Testing:** Get feedback from users about the system's behavior.
- **Code Audits:** Audit the codebase to identify duplicated code and other potential sources of inconsistent behavior.
- **Log Analysis:** Analyze the logs to identify inconsistencies in the system's behavior.

## Examples
An e-commerce website has two different checkout flows: one for regular customers and one for guest customers. The two flows are similar, but there are subtle differences in the way they handle shipping and payment information. This leads to confusion for users, and it is a frequent source of customer support calls. The problem could be solved by creating a single, unified checkout flow that is used by both regular and guest customers.