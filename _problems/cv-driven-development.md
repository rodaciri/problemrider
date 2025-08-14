---
title: CV Driven Development
description: Choosing technologies or practices primarily to enhance personal resumes
  rather than solve business problems
category:
- Process
- Technical
- Communication
related_problems:
- slug: convenience-driven-development
  similarity: 70%
- slug: increased-technical-shortcuts
  similarity: 55%
- slug: cargo-culting
  similarity: 55%
- slug: decision-avoidance
  similarity: 55%
- slug: premature-technology-introduction
  similarity: 55%
layout: problem
---

## Description

CV Driven Development occurs when technical decisions are made primarily to add impressive technologies, frameworks, or methodologies to developers' resumes rather than to address actual business needs or technical requirements. This leads to the adoption of trendy, complex, or cutting-edge solutions that may be inappropriate for the project's scale, team expertise, or long-term maintenance needs. The practice prioritizes individual career advancement over project success and sustainable software development.

## Indicators ⟡

- Technology proposals focus heavily on novelty or trendiness rather than business value
- Developers emphasize learning opportunities over project requirements during technical discussions
- Frequent requests to use the latest versions of frameworks or experimental technologies
- Resistance to using proven, stable, but "boring" technologies for appropriate use cases
- Technical decisions coincide with developers' job search periods or performance reviews
- Team members explicitly mention resume building when proposing new technologies
- Disproportionate interest in conference-worthy or blog-worthy technical solutions
- Preference for complex architectures when simpler solutions would suffice

## Symptoms ▲

- **[Complex Implementation Paths](complex-implementation-paths.md):** Technology stack becomes unnecessarily complex for the project's requirements
- **[Slow Development Velocity](slow-development-velocity.md):** Increased development time due to learning curves for new technologies
- **[High Maintenance Costs](high-maintenance-costs.md):** Higher maintenance burden from adopting immature or bleeding-edge tools
- **[Knowledge Silos](knowledge-silos.md):** Knowledge gaps when original implementers leave the team
- **Difficulty Onboarding New Hires:** Difficulty finding developers familiar with the chosen technology stack
- **[Gold Plating](gold-plating.md):** Projects become showcases for multiple unproven technologies simultaneously
- **[High Technical Debt](high-technical-debt.md):** Technical debt accumulates from experimental implementations
- **[Slow Application Performance](slow-application-performance.md):** Performance or reliability issues from using inappropriate tools
- **[Budget Overruns](budget-overruns.md):** Budget overruns due to extended development and maintenance cycles
- **[Stakeholder-Developer Communication Gap](stakeholder-developer-communication-gap.md):** Business stakeholders struggle to understand technical complexity relative to delivered value
- **[Developer Frustration and Burnout](developer-frustration-and-burnout.md):** Team stress from working with unfamiliar or inappropriate technologies
- **[Delayed Value Delivery](delayed-value-delivery.md):** Project delays while team learns new technologies
- **[High Defect Rate in Production](high-defect-rate-in-production.md):** Bugs from inexperience with chosen technologies
- **[Competitive Disadvantage](competitive-disadvantage.md):** Lost market opportunities due to overengineered solutions

## Root Causes ▼

- **[Misaligned Deliverables](misaligned-deliverables.md):** Individual career incentives misaligned with project success metrics
- **[Planning Dysfunction](planning-dysfunction.md):** Lack of clear technical decision-making processes or governance
- **[Unclear Goals and Priorities](unclear-goals-and-priorities.md):** Absence of business value assessment in technology adoption decisions
- **[Poorly Defined Responsibilities](poorly-defined-responsibilities.md):** Developer performance evaluations that reward technology adoption over project outcomes
- **[Slow Knowledge Transfer](slow-knowledge-transfer.md):** Insufficient senior technical leadership to guide appropriate technology choices
- **[Fear of Failure](fear-of-failure.md):** Market pressure on developers to stay current with trending technologies
- **[Fear of Failure](fear-of-failure.md):** Fear of skill obsolescence driving premature adoption of new tools
- **[Lack of Ownership and Accountability](lack-of-ownership-and-accountability.md):** Weak project ownership or accountability for long-term maintenance
- **[Gold Plating](gold-plating.md):** Organizational culture that celebrates technical complexity over simplicity
- **[Knowledge Gaps](knowledge-gaps.md):** Inadequate consideration of team skill levels and project constraints
- **[Eager to Please Stakeholders](eager-to-please-stakeholders.md):** Developers trying to impress with cutting-edge technology choices
- **[Perfectionist Culture](perfectionist-culture.md):** Cultural preference for impressive over practical solutions
- **[Bikeshedding](bikeshedding.md):** Excessive focus on technology choices rather than business problems
- **[Analysis Paralysis](analysis-paralysis.md):** Over-analysis of technology options leading to complex choices
- **[Cargo Culting](cargo-culting.md):** Adopting practices from other contexts without understanding appropriateness

## Detection Methods ○

- Review technical decision documentation for business justification versus technology benefits
- Monitor correlation between individual developers' technology proposals and their career goals
- Assess whether technology choices align with team expertise and project timelines
- Track maintenance effort and bug rates in areas using newer versus established technologies
- Evaluate if technical complexity matches the actual problem complexity being solved
- Interview departing team members about their motivation for technical choices
- Compare project technology stack against industry standards for similar projects
- Monitor recruitment difficulty for roles requiring the chosen technology stack
- Analyze whether technology adoption follows industry hype cycles rather than project needs
- Review retrospectives for mentions of technology-related challenges or regrets

## Examples

A senior developer on a small e-commerce project insists on implementing the backend using a cutting-edge functional programming language, a complex event-sourcing architecture, and the latest NoSQL database, despite the team having no prior experience with these technologies. The project requirements are straightforward: user authentication, product catalog, and order processing. When questioned, the developer mentions wanting to speak about these technologies at conferences and update their LinkedIn profile. The result is a six-month delay in delivery, significant cost overruns, and a system that only one person can maintain. After the developer leaves for a new role highlighting their "modern architecture experience," the remaining team struggles to fix bugs or add features, ultimately requiring a complete rewrite using more conventional technologies.