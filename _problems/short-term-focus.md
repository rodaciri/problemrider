---
title: "Short-Term Focus"
description: "Management prioritizes immediate feature delivery over long-term code health and architectural improvements, creating sustainability issues."
category: ['Process', 'Organizational', 'Strategic']
related_problems: ['high-technical-debt', 'time-pressure', 'inability-to-innovate']
layout: problem
---

## Description

Short-term focus occurs when organizational decision-making consistently prioritizes immediate deliverables and quick wins over long-term sustainability, code quality, and architectural health. This management approach leads to accumulating technical debt, declining system maintainability, and eventual productivity degradation as the cost of maintaining poorly designed systems increases over time.

## Indicators ⟡

- All development time is allocated to feature delivery with no time for improvement work
- Technical debt and refactoring proposals are consistently rejected or postponed
- Management measures success primarily by feature delivery speed rather than system health
- Long-term architectural planning is minimal or non-existent
- Quality improvement initiatives are seen as non-essential overhead

## Symptoms ▲

- **[High Technical Debt](high-technical-debt.md):** Technical shortcuts accumulate without being addressed
- **[Inability to Innovate](inability-to-innovate.md):** No time available for exploring better approaches or technologies
- **System Degradation:** Code quality and architecture deteriorate over time
- **[Resistance to Change](resistance-to-change.md):** Improvements are avoided because they don't deliver immediate business value
- **Increasing Development Costs:** Cost of development increases as system becomes harder to maintain

## Root Causes ▼

- **Quarterly Pressure:** Business cycles focused on short-term results and quarterly goals
- **Lack of Technical Understanding:** Management doesn't understand the long-term cost of technical debt
- **Competitive Pressure:** Market demands for rapid feature delivery to stay competitive
- **Budget Constraints:** Limited resources are dedicated entirely to revenue-generating features
- **Measurement Systems:** Success metrics focus on delivery speed rather than sustainable development
- **Risk Aversion:** Long-term investments are seen as risky compared to immediate feature delivery

## Detection Methods ○

- **Resource Allocation Analysis:** Track percentage of development time spent on improvement vs. new features
- **Technical Debt Trend Analysis:** Monitor whether technical debt is increasing or decreasing over time
- **Development Cost Tracking:** Measure whether development velocity and costs are trending in sustainable directions
- **Management Decision Analysis:** Review how improvement proposals are prioritized vs. feature requests
- **Developer Satisfaction Surveys:** Assess team satisfaction with ability to maintain code quality

## Examples

A software company consistently rejects proposals to modernize their 10-year-old authentication system because it would take 3 months with no immediate customer-visible benefits. Instead, they continue adding feature patches that work around the limitations, spending an estimated 15% of development time on authentication-related workarounds and maintenance. Over two years, this approach costs more development time than the modernization would have required while leaving the fundamental problems unresolved. Another example involves an e-commerce platform where management prioritizes adding new product features every quarter but never allocates time to address performance issues. The site becomes progressively slower, requiring increasingly complex caching strategies and infrastructure spending that ultimately costs more than architectural improvements would have cost.