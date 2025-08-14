---
title: Inadequate Requirements Gathering
description: Insufficient analysis and documentation of requirements leads to building
  solutions that don't meet actual needs.
category:
- Process
- Analysis
- Planning
related_problems:
- slug: requirements-ambiguity
  similarity: 0.702
- slug: poor-planning
  similarity: 0.69
- slug: poor-operational-concept
  similarity: 0.666
- slug: stakeholder-developer-communication-gap
  similarity: 0.632
- slug: knowledge-gaps
  similarity: 0.626
layout: problem
---

## Description

Inadequate requirements gathering occurs when teams begin development without sufficiently understanding, analyzing, or documenting what needs to be built. This can involve rushing through requirements analysis, failing to engage the right stakeholders, missing edge cases, or not validating assumptions about user needs. Poor requirements gathering leads to solutions that don't address the actual problems, requiring costly rework and potentially failing to deliver business value.

## Indicators ⟡

- Development begins with vague or high-level requirements
- Key stakeholders are not involved in requirements definition
- Requirements documents are incomplete or ambiguous
- Edge cases and error conditions are not considered
- User workflows and business processes are not thoroughly understood

## Symptoms ▲

- **[Implementation Rework](implementation-rework.md):** Features must be rebuilt when requirements become clearer
- **[Wasted Development Effort](wasted-development-effort.md):** Significant work doesn't address actual needs
- **[Misaligned Deliverables](misaligned-deliverables.md):** Final product doesn't match stakeholder expectations
- **[User Frustration](user-frustration.md):** End users find the system difficult or inappropriate to use
- **[Scope Creep](scope-creep.md):** Missing requirements surface during development as scope additions

## Root Causes ▼

- **[Time Pressure](time-pressure.md):** Pressure to start development quickly skips thorough analysis
- **Stakeholder Unavailability:** Key business users not available for requirements sessions
- **Analysis Skills Gap:** Team lacks expertise in requirements analysis techniques
- **[Assumption-Based Development](assumption-based-development.md):** Developers make assumptions rather than validating requirements
- **Complex Business Domain:** Business processes are complex and poorly understood

## Detection Methods ○

- **Requirements Quality Assessment:** Evaluate completeness, clarity, and testability of requirements
- **Stakeholder Coverage Analysis:** Assess whether all relevant stakeholders contributed to requirements
- **Change Request Frequency:** Track how often requirements change during development
- **User Acceptance Testing Results:** Measure how well delivered solutions meet user expectations
- **Rework Percentage:** Calculate percentage of development effort spent on rework due to requirement issues

## Examples

A development team is asked to build a customer support ticketing system and receives high-level requirements like "track customer issues" and "assign tickets to support agents." Without deeper analysis, they build a basic system with ticket creation, assignment, and status updates. When they demo the system, support managers reveal they need complex routing rules based on customer tiers, integration with multiple communication channels, SLA tracking, escalation procedures, and reporting capabilities that weren't mentioned in the original requirements. The basic system they built cannot accommodate these needs and must be significantly redesigned. Another example involves an e-commerce team building a product recommendation engine based on the requirement to "show related products." They implement a simple algorithm based on product categories, but later discover the business actually needs personalized recommendations based on user behavior, purchase history, seasonal trends, and inventory levels. The simple category-based approach provides little business value and must be completely replaced with a more sophisticated system.