---
title: Stakeholder-Developer Communication Gap
description: A persistent misunderstanding between what stakeholders expect and what
  the development team builds, leading to rework and dissatisfaction.
category:
- Communication
- Process
related_problems:
- slug: misaligned-deliverables
  similarity: 0.75
- slug: no-continuous-feedback-loop
  similarity: 0.75
- slug: stakeholder-dissatisfaction
  similarity: 0.7
- slug: stakeholder-frustration
  similarity: 0.65
- slug: communication-breakdown
  similarity: 0.65
layout: problem
---

## Description
A communication gap between stakeholders and developers is a common source of project failure. When these two groups do not communicate effectively, it leads to misunderstandings about requirements, priorities, and constraints. This can result in a product that doesn't meet the business's needs, significant rework, and frustration on both sides. Bridging this gap requires establishing clear channels of communication, fostering a shared language, and creating a culture of collaboration.

## Indicators ⟡
- The team is constantly having to rework features after they have been delivered.
- The team is not getting regular feedback from stakeholders.
- The team is not using a prototype or mockup to clarify requirements.
- The team is not getting feedback from users throughout the development process.

## Symptoms ▲

- **"That's Not What I Asked For":** During demos or reviews, stakeholders are surprised by the functionality and state that it does not match their expectations.
- **Frequent Rework:** The development team has to rebuild or significantly alter features after they have already been implemented.
- **Ambiguous User Stories or Tickets:** Development tasks are poorly defined, lacking clear acceptance criteria and context.
- **Developers Making Assumptions:** In the absence of clear requirements, developers are forced to make their own assumptions about what the business wants.
- **Mutual Frustration:** Stakeholders feel that the developers are not listening to them, while developers feel that the stakeholders are constantly changing their minds.

## Root Causes ▼

- **Lack of a Shared Language:** Stakeholders and developers use different terminology and jargon, leading to misunderstandings.
- **[Feedback Isolation](feedback-isolation.md):** The team and stakeholders only communicate at the beginning and end of a development cycle, leaving no opportunity to clarify requirements or adjust course in between.
- **Product Direction Chaos:** There is no dedicated person to act as a bridge between the business and the development team.
- **Lack of Clear Requirements:** The project lacks a well-defined and agreed-upon set of requirements from the outset.
- **Geographical or Organizational Silos:** The development team is physically or organizationally separated from the business stakeholders, making communication more difficult.

## Detection Methods ○

- **Regular Demos and Feedback Sessions:** Hold frequent sessions where the development team demos their work to stakeholders and gets immediate feedback.
- **User Story Mapping:** Use collaborative techniques like user story mapping to build a shared understanding of the project's goals and scope.
- **Prototyping and Mockups:** Create low-fidelity prototypes or mockups to get feedback on the user interface and workflow before writing any code.
- **Embedded Team Members:** If possible, have a business stakeholder or product owner be a full-time member of the development team.

## Examples
A stakeholder tells a developer that they need a way to "export data to Excel." The developer builds a feature that exports a CSV file. When they demo it, the stakeholder is unhappy because they expected a fully formatted `.xlsx` file with charts and formulas. The developer had to rebuild the feature because the initial requirement was ambiguous. In another case, a project is managed through a ticketing system. A stakeholder enters a ticket that says, "The user profile page should be improved." The developer, unsure what this means, makes some minor cosmetic changes. The stakeholder is disappointed because they were actually expecting a major overhaul of the page's functionality. This is a fundamental problem in software development. Bridging the gap between the business and technology is one of the most critical factors for project success. It is especially challenging in legacy modernization projects where the original business rules may be poorly documented or understood.