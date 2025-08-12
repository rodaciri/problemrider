---
title: "Poor Contract Design"
description: "Legal agreements and contracts don't reflect project realities, technical requirements, or allow for necessary flexibility during development."
category: ['Legal', 'Risk Management', 'Project Management']
related_problems: ['vendor-dependency-entrapment', 'scope-creep', 'unrealistic-deadlines']
layout: problem
---

## Description

Poor contract design occurs when legal agreements governing software development projects are written without sufficient understanding of technical realities, development processes, or the need for flexibility during implementation. These contracts often contain unrealistic deliverables, inflexible terms, inadequate change management provisions, or misaligned incentives that create problems during project execution.

## Indicators ⟡

- Contract terms don't match technical feasibility or development best practices
- No provisions for handling scope changes or requirement evolution
- Payment schedules don't align with development milestones or deliverable completion
- Contract penalties discourage necessary changes or quality improvements
- Legal terms contradict technical or operational requirements

## Symptoms ▲

- **[Vendor Relationship Strain](vendor-relationship-strain.md):** Tensions arise between parties due to unrealistic contract expectations
- **[Scope Change Resistance](scope-change-resistance.md):** Necessary changes are avoided due to contract constraints
- **[Quality Compromises](quality-compromises.md):** Quality is sacrificed to meet contract terms rather than user needs
- **[Legal Disputes](legal-disputes.md):** Contract ambiguities lead to disagreements and potential litigation
- **[Missed Deadlines](missed-deadlines.md):** Contract constraints prevent efficient project execution

## Root Causes ▼

- **Legal-Technical Disconnect:** Legal teams don't understand technical development realities
- **Template Contract Usage:** Standard contracts used without customization for software development
- **Insufficient Stakeholder Involvement:** Technical stakeholders not involved in contract negotiation
- **Risk Misallocation:** Risks assigned to parties who cannot effectively manage them
- **Fixed-Price Mentality:** Contracts assume software development is predictable and fixed-scope

## Detection Methods ○

- **Contract Review Analysis:** Evaluate contract terms against software development best practices
- **Change Request Frequency:** Monitor how often contract changes are needed during projects
- **Dispute Pattern Analysis:** Track recurring sources of disagreement between contracting parties
- **Delivery Success Correlation:** Compare project success rates with different contract structures
- **Stakeholder Satisfaction Assessment:** Measure satisfaction with contract terms from both technical and legal perspectives

## Examples

A software development contract specifies exact screen layouts and database schemas as fixed deliverables, with penalty clauses for any deviations. During development, user testing reveals usability issues that require interface changes, but the contract structure discourages making necessary improvements because any changes trigger renegotiation and potential penalties. The result is a delivered system that meets contract specifications but fails to meet user needs. Another example involves a maintenance contract with fixed response times for all issues, regardless of severity or complexity. This creates perverse incentives where vendors provide quick but superficial fixes to meet contract terms rather than addressing root causes of problems.