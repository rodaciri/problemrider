---
title: "Scope Creep"
description: "The project's extend expands continuously without proper control or impact analysis, threatening timelines, budgets, and the original objectives."
category: ['Process', 'Project Management']
related_problems: ['scope-creep', 'no-formal-change-control-process']
layout: problem
---

## Description
Scope creep is the insidious expansion of a project's goals and deliverables beyond what was originally planned, without a corresponding adjustment in time, budget, or resources. It often happens gradually, through a series of seemingly small additions or changes that, over time, significantly bloat the project. This uncontrolled growth can derail timelines, exhaust budgets, and lead to a product that is unfocused and overly complex. Effective project management requires vigilance against scope creep and a formal process for managing any proposed changes.

## Indicators ⟡
- The project's scope is constantly expanding.
- The team is frequently missing deadlines.
- The team is constantly **[Context-Switching](context-switching-overhead.md)**.
- There is a lot of rework.

## Symptoms ▲

- **[Constantly Shifting Deadlines](constantly-shifting-deadlines.md):** The project's end date is repeatedly pushed back to accommodate new feature requests.
- **[Budget Overruns](budget-overruns.md):** The project costs more than originally planned due to the extra work being done.
- **[Gold Plating](gold-plating.md):** Developers add unnecessary features or complexity because they believe it will impress the stakeholders, even if it was not requested.
- **[Feature Bloat](feature-bloat.md):** The concept of a "Minimum Viable Product" is lost, and the project becomes a collection of loosely related features.
- **[Developer Frustration and Burnout](developer-frustration-and-burnout.md):** The development team is overworked and stressed from trying to keep up with the constant stream of new requests.

## Root Causes ▼

- **[Scope Creep](scope-creep.md):** The project started without a well-defined scope or a clear understanding of what was in and out of scope.
- **[Change Management Chaos](change-management-chaos.md):** There is no process for evaluating new requests, assessing their impact, and getting formal approval before they are added to the project plan.
- **[Eager to Please Stakeholders](eager-to-please-stakeholders.md):** The project team agrees to every new request from the stakeholders without pushing back or explaining the trade-offs.
- **[Product Direction Chaos](product-direction-chaos.md):** There is no single person who is responsible for managing the product backlog and protecting the team from scope creep.
- **[Knowledge Gaps](knowledge-gaps.md):** The team does not have a clear understanding of the business goals of the project, so they are unable to distinguish between essential and non-essential features.

## Detection Methods ○

- **Track Change Requests:** Keep a log of all new feature requests and changes to existing requirements.
- **Velocity Tracking:** In an agile team, a decrease in velocity can be a sign that the team is being burdened with unplanned work (see [Slow Development Velocity](slow-development-velocity.md)).
- **Compare Plan vs. Actuals:** Regularly compare the project's progress against the original plan to see how much the scope has changed.
- **Stakeholder Feedback:** If stakeholders are constantly asking "Is it done yet?", it may be a sign that their expectations are not aligned with the project's reality.

## Examples
A team is building a simple internal dashboard for the sales team. Initially, the only requirement is to display a list of customers. Then, a stakeholder asks if they can also see the total revenue for each customer. Then, another stakeholder asks for a chart of revenue over time. Soon, the simple dashboard has become a complex business intelligence tool, and the project is months behind schedule. In another case, a project is in its final week of development. A senior executive sees a demo and says, "This is great, but it would be perfect if we could just add one more thing..." The team, wanting to please the executive, agrees to the change, which ends up delaying the launch by a month. This is a very common problem in software projects, and it is one of the main reasons why they fail. It is especially prevalent in organizations that have a weak project management discipline.