---
title: Convenience-Driven Development
description: A development practice where developers choose the easiest and most convenient
  solution, rather than the best solution.
category:
- Code
- Process
related_problems:
- slug: cv-driven-development
  similarity: 0.7
- slug: brittle-codebase
  similarity: 0.6
- slug: feature-creep-without-refactoring
  similarity: 0.55
- slug: difficult-code-comprehension
  similarity: 0.55
- slug: assumption-based-development
  similarity: 0.55
- slug: increased-technical-shortcuts
  similarity: 0.55
layout: problem
---

## Description
Convenience-driven development is a development practice where developers choose the easiest and most convenient solution, rather than the best solution. This often leads to a gradual degradation of the codebase, as developers take shortcuts and make design decisions that are not in the best long-term interest of the project. Convenience-driven development is often a sign of a lack of experience or a lack of discipline on the part of the development team.

## Indicators ⟡
- The codebase is full of hacks and workarounds.
- The design of the codebase is inconsistent.
- There is a lot of duplicated code.
- The codebase is difficult to understand and maintain.

## Symptoms ▲
- [Legacy Skill Shortage](legacy-skill-shortage.md) <span class="info-tooltip" title="Confidence: 0.594, Strength: 0.874">ⓘ</span>
<br/>  The preference for convenient solutions in development often leads to neglecting best practices and thorough documentation, resulting in a workforce ill-equipped to maintain legacy systems due to a lack of familiarity with the original technologies used.
- [Reduced Team Productivity](reduced-team-productivity.md) <span class="info-tooltip" title="Confidence: 0.567, Strength: 0.878">ⓘ</span>
<br/>  The tendency to prioritize easy solutions over optimal ones leads to the accumulation of technical debt and inefficiencies, ultimately resulting in decreased output and effectiveness of the development team as they spend more time addressing the consequences of those suboptimal choices rather than delivering quality features.
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.547, Strength: 0.750">ⓘ</span>
<br/>  When developers prioritize convenience over optimal solutions, it often leads to inadequate implementations that fail to meet evolving user needs, resulting in frequent requirement changes as stakeholders attempt to rectify the shortcomings of the initial approach.
- [Reduced Innovation](reduced-innovation.md) <span class="info-tooltip" title="Confidence: 0.516, Strength: 0.814">ⓘ</span>
<br/>  The tendency to prioritize the easiest solutions leads teams to neglect exploring innovative approaches, resulting in a stagnant mindset that merely meets existing requirements instead of pursuing advancements in functionality or efficiency.
- [Unbounded Data Structures](unbounded-data-structures.md) <span class="info-tooltip" title="Confidence: 0.503, Strength: 0.790">ⓘ</span>
<br/>  The tendency to prioritize quick and easy solutions often leads to the implementation of data structures that lack constraints, resulting in unbounded growth that ultimately causes memory issues and performance degradation in legacy systems.
- [Flaky Tests](flaky-tests.md) <span class="info-tooltip" title="Confidence: 0.498, Strength: 0.807">ⓘ</span>
<br/>  Choosing the easiest solutions often leads to inadequate handling of dependencies and edge cases, resulting in unstable tests that fail intermittently and erode confidence in the testing process within legacy systems.
- [Developer Frustration and Burnout](developer-frustration-and-burnout.md) <span class="info-tooltip" title="Confidence: 0.485, Strength: 0.707">ⓘ</span>
<br/>  The tendency to prioritize quick, convenient solutions leads to accumulating technical debt and unresolved issues in the codebase, resulting in frustration and burnout as developers struggle to navigate an increasingly complex and unstable environment.
- [Inefficient Development Environment](inefficient-development-environment.md) <span class="info-tooltip" title="Confidence: 0.466, Strength: 0.762">ⓘ</span>
<br/>  The reliance on quick, convenient solutions often stems from frustration with a sluggish and cumbersome development environment, leading developers to prioritize immediate ease over long-term effectiveness, which in turn perpetuates inefficiencies in legacy systems.
- [Complex Domain Model](complex-domain-model.md) <span class="info-tooltip" title="Confidence: 0.445, Strength: 0.667">ⓘ</span>
<br/>  When developers prioritize convenient solutions over optimal ones, it often leads to a fragmented and oversimplified implementation of a complex business domain, resulting in a convoluted domain model that obscures the true requirements and logic of the system.
- [Inadequate Configuration Management](inadequate-configuration-management.md) <span class="info-tooltip" title="Confidence: 0.442, Strength: 0.896">ⓘ</span>
<br/>  The tendency to prioritize quick and easy solutions often leads to a lack of rigorous processes for tracking code and configuration changes, resulting in inadequate management practices that manifest as versioning errors and difficulties during rollbacks in legacy systems.
- [Regulatory Compliance Drift](regulatory-compliance-drift.md) <span class="info-tooltip" title="Confidence: 0.426, Strength: 0.732">ⓘ</span>
<br/>  The tendency to prioritize quick and easy solutions in development leads to inadequate updates in legacy systems, resulting in compliance gaps that fail to meet evolving regulatory standards.
- [Reduced Feature Quality](reduced-feature-quality.md) <span class="info-tooltip" title="Confidence: 0.422, Strength: 0.863">ⓘ</span>
<br/>  Choosing the easiest solutions often leads to shortcuts that compromise thorough testing and refinement, which directly results in diminished user experience and functionality of the features delivered.
- [Merge Conflicts](merge-conflicts.md) <span class="info-tooltip" title="Confidence: 0.409, Strength: 0.674">ⓘ</span>
<br/>  Frequent reliance on convenient solutions leads multiple developers to modify the same sections of code without clear ownership, resulting in merge conflicts that hinder collaboration and slow down development in legacy systems.
- [Analysis Paralysis](analysis-paralysis.md) <span class="info-tooltip" title="Confidence: 0.386, Strength: 0.818">ⓘ</span>
<br/>  When developers prioritize easy solutions over effective ones, they may become overwhelmed by their options and excessively analyze potential choices, leading to indecision and stalling progress in implementing necessary improvements to legacy systems.
- [Technical Architecture Limitations](technical-architecture-limitations.md) <span class="info-tooltip" title="Confidence: 0.383, Strength: 0.777">ⓘ</span>
<br/>  When developers prioritize ease of implementation over optimal solutions, it often leads to architectural decisions that impose constraints on performance and scalability, ultimately manifesting as limitations within the system's technical architecture.
- [Deadline Pressure](deadline-pressure.md) <span class="info-tooltip" title="Confidence: 0.380, Strength: 0.819">ⓘ</span>
<br/>  Intense pressure to meet deadlines often pushes developers to prioritize quick, convenient solutions over more robust ones, thereby indicating a reliance on expedient practices that compromise long-term software quality and maintainability in legacy systems.
- [Inadequate Test Data Management](inadequate-test-data-management.md) <span class="info-tooltip" title="Confidence: 0.376, Strength: 0.831">ⓘ</span>
<br/>  The tendency to prioritize quick and easy development solutions often results in neglecting thorough test data management, leading to the use of inadequate test data that fails to simulate real-world conditions, thereby exposing the system to untested scenarios and risks.
- [Inability to Innovate](inability-to-innovate.md) <span class="info-tooltip" title="Confidence: 0.367, Strength: 0.836">ⓘ</span>
<br/>  The tendency to prioritize the easiest solutions often leads to a backlog of quick fixes and temporary patches, which consumes the team's resources and attention, ultimately stifling their ability to explore innovative improvements and long-term strategies.
- [Mentor Burnout](mentor-burnout.md) <span class="info-tooltip" title="Confidence: 0.348, Strength: 0.874">ⓘ</span>
<br/>  The tendency to prioritize easier solutions often leads to poor architectural decisions, increasing the reliance on experienced team members for clarification and support, which ultimately contributes to their burnout from the constant need for mentoring.
- [Inefficient Code](inefficient-code.md) <span class="info-tooltip" title="Confidence: 0.341, Strength: 0.783">ⓘ</span>
<br/>  When developers prioritize ease of implementation over optimal performance in legacy systems, this often results in inefficient code that is computationally expensive and prone to performance bottlenecks, indicating a lack of thorough consideration for long-term maintainability and efficiency.
- [Capacity Mismatch](capacity-mismatch.md) <span class="info-tooltip" title="Confidence: 0.333, Strength: 0.797">ⓘ</span>
<br/>  When developers prioritize easy solutions over optimal ones, it often leads to uneven workloads and misalignment between available resources and task demands, resulting in bottlenecks and underutilization throughout the development process.
- [Slow Development Velocity](slow-development-velocity.md) <span class="info-tooltip" title="Confidence: 0.332, Strength: 0.752">ⓘ</span>
<br/>  Choosing easier solutions often leads to technical debt and inefficient code, which ultimately hampers the team's ability to deliver features and fixes swiftly, thereby manifesting as a decline in development velocity.
- [Increased Manual Work](increased-manual-work.md) <span class="info-tooltip" title="Confidence: 0.326, Strength: 0.650">ⓘ</span>
<br/>  The tendency to prioritize quick and easy solutions leads to the neglect of automation, resulting in developers being burdened with repetitive tasks that could otherwise be streamlined, thereby indicating a lack of sustainable practices in the development process.
- [Invisible Nature of Technical Debt](invisible-nature-of-technical-debt.md) <span class="info-tooltip" title="Confidence: 0.325, Strength: 0.836">ⓘ</span>
<br/>  Choosing the easiest solutions during development often leads to accumulating unaddressed issues that create technical debt, which remains obscured to non-technical stakeholders, thereby hindering necessary resource allocation for remediation.
- [Test Debt](test-debt.md) <span class="info-tooltip" title="Confidence: 0.321, Strength: 0.865">ⓘ</span>
<br/>  When developers prioritize quick and easy solutions over thorough quality assurance practices, it leads to accumulated test debt, which manifests as fragile software and hampers overall development speed in legacy systems.
- [Inexperienced Developers](inexperienced-developers.md) <span class="info-tooltip" title="Confidence: 0.314, Strength: 0.907">ⓘ</span>
<br/>  The tendency to prioritize easy solutions arises from a lack of knowledge and experience in the team, leading to shortcuts in development that compromise the quality and maintainability of legacy systems.
- [Product Direction Chaos](product-direction-chaos.md) <span class="info-tooltip" title="Confidence: 0.311, Strength: 0.779">ⓘ</span>
<br/>  When developers prioritize convenience over optimal solutions, the lack of clear direction from conflicting stakeholder priorities leads to misaligned efforts and confusion, ultimately manifesting as disorder in product development and inefficiency in legacy systems.
- [Legacy System Documentation Archaeology](legacy-system-documentation-archaeology.md) <span class="info-tooltip" title="Confidence: 0.308, Strength: 0.780">ⓘ</span>
<br/>  The tendency to prioritize quick, convenient solutions over thorough design often leads to inadequate documentation practices, resulting in critical system knowledge being relegated to obsolete formats and informal channels, thus complicating maintenance and understanding of legacy systems.
- [Poor Operational Concept](poor-operational-concept.md) <span class="info-tooltip" title="Confidence: 0.307, Strength: 0.842">ⓘ</span>
<br/>  The tendency to prioritize ease of implementation over thorough planning leads to inadequate monitoring and support structures, resulting in instability after deployment, which indicates a neglect of long-term operational needs in the development process.
- [Poor Domain Model](poor-domain-model.md) <span class="info-tooltip" title="Confidence: 0.306, Strength: 0.881">ⓘ</span>
<br/>  When developers prioritize quick and easy solutions over thorough analysis, it often results in a superficial understanding of core business concepts, which manifests as a fragile domain model that fails to accurately represent the system's requirements and leads to miscommunication among stakeholders.
- [Technology Isolation](technology-isolation.md) <span class="info-tooltip" title="Confidence: 0.304, Strength: 0.779">ⓘ</span>
<br/>  Choosing the easiest solutions often leads to outdated technology choices that don't integrate with modern systems, resulting in a gradual isolation from current technology stacks and hindering the organization's ability to innovate or attract skilled talent.
- [Feature Creep](feature-creep.md) <span class="info-tooltip" title="Confidence: 0.302, Strength: 0.796">ⓘ</span>
<br/>  When developers prioritize convenience in their solutions, it often leads to incremental additions and modifications that expand features without proper evaluation, resulting in a bloated and complex system that becomes increasingly difficult to maintain.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○
- **Code Reviews:** Look for code that is poorly designed and difficult to understand.
- **Static Analysis Tools:** Use tools to identify code smells, such as duplicated code and large classes.
- **Developer Surveys:** Ask developers if they feel like they are able to write high-quality code.

## Examples
A developer needs to add a new feature to a legacy system. The developer is under pressure to deliver the feature as quickly as possible. The developer decides to copy and paste a large block of code from another part of the system, rather than taking the time to refactor the code and create a new, reusable component. This saves the developer a few hours of work in the short term, but it adds to the technical debt of the system and makes it more difficult to maintain in the long term.
