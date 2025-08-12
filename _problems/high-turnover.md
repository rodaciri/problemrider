---
title: "High Turnover"
description: "New developers become frustrated and leave the team due to poor onboarding and system complexity."
category: ['Process', 'Communication', 'Business']
related_problems: ['difficult-developer-onboarding', 'developer-frustration-and-burnout', 'team-churn-impact']
layout: problem
---

## Description

High turnover occurs when developers frequently leave the team, often shortly after joining, due to frustration with system complexity, poor onboarding experiences, or challenging working conditions. This creates a vicious cycle where the remaining team members must constantly train new people instead of focusing on development work, while institutional knowledge is continuously lost. High turnover is particularly damaging to legacy systems where domain knowledge and understanding of complex codebases takes significant time to develop.

## Indicators ⟡
- New hires leave within their first 6-12 months
- Exit interviews frequently mention frustration with codebase complexity or lack of support
- Team composition changes frequently, making it difficult to maintain consistent practices
- Significant time is spent on recruitment and interviewing rather than development
- Projects are delayed because new team members need extensive training

## Symptoms ▲
- **[Team Churn Impact](team-churn-impact.md):** Frequent personnel changes degrade code quality and consistency
- **Knowledge Loss:** Critical system understanding leaves with departing developers
- **[Difficult Developer Onboarding](difficult-developer-onboarding.md):** Poor onboarding experiences contribute to early departures
- **Reduced Productivity:** Remaining team members spend time training rather than developing
- **Increased Recruitment Costs:** Constant hiring and training activities consume significant resources

## Root Causes ▼
- **System Complexity:** Legacy systems are so complex that new developers feel overwhelmed
- **Information Decay:** Lack of adequate documentation makes it difficult for new developers to understand the system
- **Inadequate Mentorship:** New hires don't receive sufficient guidance from experienced team members
- **Unrealistic Expectations:** New developers are expected to be productive too quickly given system complexity
- **Cultural Issues:** Team culture doesn't support learning, asking questions, or making mistakes
- **Compensation Issues:** Pay or benefits are not competitive enough to retain talent despite challenges

## Detection Methods ○
- **Turnover Rate Tracking:** Monitor how long new hires stay and identify patterns in departures
- **Exit Interview Analysis:** Collect and analyze feedback from departing developers
- **Time-to-Productivity Metrics:** Track how long it takes new hires to become effective contributors
- **Onboarding Satisfaction Surveys:** Regular feedback from new team members about their experience
- **Recruitment Cost Analysis:** Track the total cost of constantly replacing team members

## Examples

A financial services company has a legacy trading system built over 15 years with minimal documentation. New developers are expected to become productive within 30 days, but the system's complexity means it typically takes 6 months to understand the business logic and code architecture. Most new hires become frustrated and leave within 4 months, feeling overwhelmed by the system and unsupported by the team. The remaining senior developers are so busy training new people that they have no time to improve documentation or simplify the system, perpetuating the cycle. Over two years, the team has hired 12 developers but only retained 3, spending more time on recruitment and training than on actual development work. Another example involves a healthcare application where HIPAA compliance requirements create additional complexity for new developers. Without proper training on healthcare regulations and secure coding practices, new developers make mistakes that require extensive rework. The stress of working with sensitive data, combined with the complexity of learning both the technical system and regulatory requirements, causes many developers to seek positions in less regulated industries.