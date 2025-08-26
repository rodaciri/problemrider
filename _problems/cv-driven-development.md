---
title: CV Driven Development
description: Choosing technologies or practices primarily to enhance personal resumes
  rather than solve business problems
category:
- Code
- Communication
- Process
related_problems:
- slug: convenience-driven-development
  similarity: 0.7
- slug: increased-technical-shortcuts
  similarity: 0.55
- slug: cargo-culting
  similarity: 0.55
- slug: decision-avoidance
  similarity: 0.55
- slug: premature-technology-introduction
  similarity: 0.55
- slug: technology-isolation
  similarity: 0.5
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

*No significant relationships within the scope of legacy systems identified (yet).*

## Root Causes ▼
- [Decision Paralysis](decision-paralysis.md) <span class="info-tooltip" title="Confidence: 0.435, Strength: 0.758">ⓘ</span>
<br/>  When developers face indecision due to a lack of clear guidelines, they may resort to selecting technologies that enhance their resumes instead of addressing actual business needs, thereby prioritizing personal advancement over practical solutions in legacy systems.
- [Insufficient Design Skills](insufficient-design-skills.md) <span class="info-tooltip" title="Confidence: 0.428, Strength: 0.775">ⓘ</span>
<br/>  The development team's lack of design skills leads them to prioritize trendy technologies over effective solutions, resulting in a focus on enhancing personal resumes rather than addressing the actual needs of the legacy systems.
- [Constantly Shifting Deadlines](constantly-shifting-deadlines.md) <span class="info-tooltip" title="Confidence: 0.383, Strength: 0.705">ⓘ</span>
<br/>  The pressure of repeatedly pushed back deadlines prompts developers to prioritize trendy technologies that enhance their resumes over pragmatic solutions, diverting focus from addressing the core business problems inherent in legacy systems.
- [Incomplete Knowledge](incomplete-knowledge.md) <span class="info-tooltip" title="Confidence: 0.383, Strength: 0.721">ⓘ</span>
<br/>  Developers' lack of awareness of existing similar logic across the system leads them to prioritize trendy technologies for resume enhancement, rather than addressing the actual business needs, resulting in fragmented solutions that exacerbate synchronization issues in legacy systems.

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
