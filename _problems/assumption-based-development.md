---
title: Assumption-Based Development
description: Developers make decisions based on assumptions about requirements or
  user needs rather than validating their understanding.
category:
- Process
- Requirements
- Communication
related_problems:
- slug: convenience-driven-development
  similarity: 55%
- slug: inexperienced-developers
  similarity: 50%
- slug: decision-avoidance
  similarity: 50%
- slug: feedback-isolation
  similarity: 50%
- slug: decision-paralysis
  similarity: 50%
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

- **[Misaligned Deliverables](misaligned-deliverables.md):** Final products don't match what stakeholders actually needed
- **[Implementation Rework](implementation-rework.md):** Significant portions of work must be redone when assumptions prove incorrect
- **User Adoption Problems:** Users struggle to adopt solutions built on incorrect assumptions
- **Feature Gaps:** Important functionality is missing because developers assumed it wasn't needed
- **Usability Issues:** User interfaces are difficult to use because they don't match actual workflows

## Root Causes ▼

- **Stakeholder Unavailability:** Key stakeholders are not available to answer questions
- **[Time Pressure](time-pressure.md):** Pressure to deliver quickly discourages taking time to validate assumptions
- **Communication Barriers:** Difficulty communicating with business stakeholders or users
- **Developer Overconfidence:** Developers believe they understand user needs without validation
- **Inadequate Requirements Process:** No systematic process for clarifying and validating requirements

## Detection Methods ○

- **Assumption Documentation:** Track what assumptions developers are making during development
- **Stakeholder Validation Frequency:** Monitor how often developers check assumptions with stakeholders
- **Rework Analysis:** Analyze how much rework is caused by incorrect assumptions
- **User Feedback Correlation:** Compare user feedback with original developer assumptions
- **Requirements Clarity Assessment:** Evaluate how clear and specific requirements are before development begins

## Examples

A development team builds a customer search feature assuming that users will search primarily by company name, so they optimize the search interface and algorithms for company name searches. When they deploy the feature, they discover that users actually search most frequently by contact person names and email addresses, making the search interface frustrating to use and the search results poor quality. The search feature must be redesigned and rebuilt to support the actual search patterns. Another example involves developers building a reporting system who assume that users want to see data in real-time, so they implement complex real-time data processing. However, users actually prefer to work with stable daily snapshots of data for consistency in their analysis, and the real-time updates make it difficult to create reproducible reports. The real-time complexity adds no value and creates maintenance overhead for functionality users don't want.