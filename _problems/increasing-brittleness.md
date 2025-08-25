---
title: Increasing Brittleness
description: Software systems become more fragile and prone to breaking over time,
  with small changes having unpredictable and widespread effects.
category:
- Architecture
- Code
- Management
related_problems:
- slug: brittle-codebase
  similarity: 0.7
- slug: quality-degradation
  similarity: 0.65
- slug: rapid-system-changes
  similarity: 0.6
- slug: tight-coupling-issues
  similarity: 0.6
- slug: unpredictable-system-behavior
  similarity: 0.6
- slug: increased-bug-count
  similarity: 0.6
layout: problem
---

## Description

Increasing brittleness occurs when software systems become progressively more fragile and unstable over time, where seemingly minor changes can cause unexpected failures or break unrelated functionality. This brittleness develops as technical debt accumulates, dependencies become more complex, and the system architecture degrades without proper maintenance. Brittle systems are difficult to modify safely and often exhibit unpredictable behavior.


## Indicators ⟡

- Small changes frequently cause unexpected failures in unrelated system areas
- The number of bugs increases even when new features aren't being added
- System behavior becomes increasingly unpredictable
- More time is spent debugging than developing new functionality
- Changes that worked in development fail in production for unclear reasons


## Symptoms ▲

- [Legacy Skill Shortage](legacy-skill-shortage.md) <span class="info-tooltip" title="Confidence: 0.662, Strength: 0.886">ⓘ</span>
<br/>  As software systems become increasingly fragile due to their complexity and interdependencies, the diminishing number of developers familiar with outdated technologies exacerbates maintenance challenges, leading to a reliance on a few individuals whose expertise is critical, thus indicating the heightened brittleness of the system.
- [Complex Domain Model](complex-domain-model.md) <span class="info-tooltip" title="Confidence: 0.644, Strength: 0.844">ⓘ</span>
<br/>  The inherent complexity of the business domain leads to convoluted code structures and dependencies, which increases the fragility of the system as small changes can trigger unexpected interactions, thereby serving as a clear indicator of the system's declining robustness.
- [Poor Test Coverage](poor-test-coverage.md) <span class="info-tooltip" title="Confidence: 0.640, Strength: 0.854">ⓘ</span>
<br/>  Poor test coverage in critical areas of the codebase highlights the increasing brittleness of software systems, as the lack of validation prevents developers from confidently making changes, leading to unanticipated failures and reinforcing the cycle of fragility.
- [Reduced Team Productivity](reduced-team-productivity.md) <span class="info-tooltip" title="Confidence: 0.616, Strength: 0.882">ⓘ</span>
<br/>  As software systems become more fragile, the complexity and risk associated with making changes increase, leading to confusion and delays in the development process, which ultimately reduces team productivity.
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.597, Strength: 0.807">ⓘ</span>
<br/>  Frequent updates to requirements reveal the underlying brittleness of the software, as the system's fragility makes it unable to adapt smoothly to change without extensive rework and unintended consequences.
- [Developer Frustration and Burnout](developer-frustration-and-burnout.md) <span class="info-tooltip" title="Confidence: 0.584, Strength: 0.803">ⓘ</span>
<br/>  As software systems become increasingly fragile, developers face constant challenges in making even minor changes, leading to frustration and burnout from the relentless struggle against unpredictable issues in the codebase.
- [Increased Customer Support Load](increased-customer-support-load.md) <span class="info-tooltip" title="Confidence: 0.568, Strength: 0.792">ⓘ</span>
<br/>  As software systems become increasingly fragile, even minor updates can lead to unexpected failures, resulting in users encountering more issues and requiring frequent support, thereby reflecting the growing instability of the system.
- [Flaky Tests](flaky-tests.md) <span class="info-tooltip" title="Confidence: 0.566, Strength: 0.844">ⓘ</span>
<br/>  As software systems become more fragile, changes in one part can introduce unintended side effects that cause tests to fail intermittently, reflecting the underlying instability and lack of reliability in the codebase.
- [Data Migration Integrity Issues](data-migration-integrity-issues.md) <span class="info-tooltip" title="Confidence: 0.562, Strength: 0.878">ⓘ</span>
<br/>  As software systems become increasingly fragile, the complexities and interdependencies that arise make it difficult to ensure that data maintains its integrity, leading to issues during migration where mismatched schemas and incompatible formats exacerbate the risk of data loss or misinterpretation.
- [Unbounded Data Structures](unbounded-data-structures.md) <span class="info-tooltip" title="Confidence: 0.557, Strength: 0.832">ⓘ</span>
<br/>  The presence of unbounded data structures indicates increasing brittleness as their uncontrolled growth exacerbates system complexity, making it difficult to implement changes without risking instability and unintended side effects.
- [Analysis Paralysis](analysis-paralysis.md) <span class="info-tooltip" title="Confidence: 0.534, Strength: 0.918">ⓘ</span>
<br/>  As software systems become increasingly fragile due to accumulated complexity and interdependencies, teams may hesitate to implement changes, fearing unintended consequences, which leads to prolonged research phases and a lack of progress in development.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.518, Strength: 0.742">ⓘ</span>
<br/>  As software systems become more fragile over time, the failure to properly manage resource allocation and deallocation leads to unreleased resources, which further complicates maintenance and increases the likelihood of unexpected system failures.
- [Monolithic Architecture Constraints](monolithic-architecture-constraints.md) <span class="info-tooltip" title="Confidence: 0.514, Strength: 0.864">ⓘ</span>
<br/>  As software systems grow in size and complexity, the tightly coupled nature of a monolithic architecture leads to increased interdependencies that amplify fragility, making even minor changes difficult to implement without triggering unforeseen issues throughout the system.
- [Merge Conflicts](merge-conflicts.md) <span class="info-tooltip" title="Confidence: 0.513, Strength: 0.831">ⓘ</span>
<br/>  Frequent merge conflicts arise as multiple developers attempt to modify the same fragile code sections, highlighting the system's brittleness as small changes lead to unpredictable integration issues.
- [Technical Architecture Limitations](technical-architecture-limitations.md) <span class="info-tooltip" title="Confidence: 0.512, Strength: 0.865">ⓘ</span>
<br/>  As software systems become increasingly fragile, the constraints imposed by outdated architecture limit the ability to adapt or enhance the system without introducing further instability, thus serving as a clear indicator of underlying brittleness.
- [Inconsistent Onboarding Experience](inconsistent-onboarding-experience.md) <span class="info-tooltip" title="Confidence: 0.508, Strength: 0.871">ⓘ</span>
<br/>  The increasing fragility of the software system leads to a reliance on individual team members' knowledge and interpretations, resulting in inconsistent onboarding experiences that reflect the system's unpredictability and lack of standardization.
- [Regulatory Compliance Drift](regulatory-compliance-drift.md) <span class="info-tooltip" title="Confidence: 0.504, Strength: 0.831">ⓘ</span>
<br/>  As legacy systems become increasingly fragile, their inability to accommodate changes leads to outdated compliance measures that fail to adapt to new regulatory standards, resulting in costly compliance gaps.
- [Review Process Breakdown](review-process-breakdown.md) <span class="info-tooltip" title="Confidence: 0.491, Strength: 0.715">ⓘ</span>
<br/>  The failure of code review practices to effectively identify issues and enhance quality indicates increasing brittleness in legacy systems, as the fragility of the codebase makes it difficult for reviewers to provide meaningful feedback or detect subtle defects resulting from small changes.
- [Reduced Innovation](reduced-innovation.md) <span class="info-tooltip" title="Confidence: 0.486, Strength: 0.866">ⓘ</span>
<br/>  As software systems become increasingly fragile due to their complexity and interdependencies, teams often prioritize stability over experimentation, leading to a reluctance to innovate and a focus on minimal changes that avoid breaking existing functionality.
- [Inability to Innovate](inability-to-innovate.md) <span class="info-tooltip" title="Confidence: 0.472, Strength: 0.898">ⓘ</span>
<br/>  As software systems become more fragile due to accumulated complexity and interdependencies, the constant need to address emergent issues and fix broken functionalities consumes resources and focus, leaving no bandwidth for teams to pursue innovation or strategic improvements.
- [Cross-System Data Synchronization Problems](cross-system-data-synchronization-problems.md) <span class="info-tooltip" title="Confidence: 0.448, Strength: 0.814">ⓘ</span>
<br/>  As software systems become increasingly fragile, the complex interdependencies and outdated architectures lead to challenges in maintaining data consistency during migrations, making synchronization problems a clear indicator of underlying brittleness.
- [Unpredictable System Behavior](unpredictable-system-behavior.md) <span class="info-tooltip" title="Confidence: 0.434, Strength: 0.925">ⓘ</span>
<br/>  The fragility of legacy systems leads to tightly coupled components, where minor modifications inadvertently trigger a cascade of failures in unrelated areas, thus reflecting the underlying brittleness through unpredictable behavior.
- [Delayed Bug Fixes](delayed-bug-fixes.md) <span class="info-tooltip" title="Confidence: 0.430, Strength: 0.818">ⓘ</span>
<br/>  As software systems become increasingly fragile, the complexity and interdependencies among components make it more difficult and time-consuming to isolate and fix bugs, resulting in unresolved issues that persist and frustrate users.
- [Legacy API Versioning Nightmare](legacy-api-versioning-nightmare.md) <span class="info-tooltip" title="Confidence: 0.429, Strength: 0.894">ⓘ</span>
<br/>  Poorly designed APIs in legacy systems lead to complex versioning issues, which increase brittleness as minor updates can inadvertently disrupt existing functionalities, highlighting the fragility of the overall system architecture.
- [Inadequate Configuration Management](inadequate-configuration-management.md) <span class="info-tooltip" title="Confidence: 0.429, Strength: 0.894">ⓘ</span>
<br/>  In legacy systems, the failure to properly track versions of code, data, or infrastructure exacerbates fragility, as undocumented changes can introduce unforeseen dependencies and conflicts, resulting in unpredictable behavior and reinforcing the system's brittleness.
- [Author Frustration](author-frustration.md) <span class="info-tooltip" title="Confidence: 0.423, Strength: 0.921">ⓘ</span>
<br/>  As software systems grow increasingly fragile, the unpredictability of small changes leads to inconsistent and conflicting feedback during code reviews, causing frustration among developers who struggle to navigate the resulting complexity.
- [Knowledge Silos](knowledge-silos.md) <span class="info-tooltip" title="Confidence: 0.420, Strength: 0.807">ⓘ</span>
<br/>  Isolated expertise within team members leads to inconsistent understanding of the system's architecture and dependencies, causing small changes to trigger unexpected failures and increasing the overall fragility of the software.
- [Team Dysfunction](team-dysfunction.md) <span class="info-tooltip" title="Confidence: 0.411, Strength: 0.867">ⓘ</span>
<br/>  As software systems become increasingly fragile, the complexity and unpredictability of changes can lead to frustration and misalignment among team members, resulting in dysfunctional collaboration and a lack of coordinated effort.
- [Inefficient Code](inefficient-code.md) <span class="info-tooltip" title="Confidence: 0.399, Strength: 0.861">ⓘ</span>
<br/>  Inefficient code often emerges in brittle systems as developers implement quick fixes or convoluted workarounds to accommodate frequent changes, leading to performance bottlenecks that signal deeper structural fragility within the software.
- [Team Coordination Issues](team-coordination-issues.md) <span class="info-tooltip" title="Confidence: 0.396, Strength: 0.871">ⓘ</span>
<br/>  As software becomes increasingly fragile, the unpredictable consequences of even minor changes lead to confusion and misalignment among developers, making effective collaboration on the same codebase challenging and highlighting the brittleness of the system.
- [Reduced Feature Quality](reduced-feature-quality.md) <span class="info-tooltip" title="Confidence: 0.393, Strength: 0.831">ⓘ</span>
<br/>  As software systems become increasingly fragile, the complexity and risk associated with making changes lead to rushed implementations, which compromises the time available for thorough testing and refinement, ultimately resulting in diminished feature quality.
- [Poor Operational Concept](poor-operational-concept.md) <span class="info-tooltip" title="Confidence: 0.371, Strength: 0.930">ⓘ</span>
<br/>  A lack of planning for monitoring and maintenance in legacy systems exacerbates fragility, as the absence of proactive support mechanisms allows small changes to trigger unpredictable failures, thereby highlighting the underlying brittleness of the software.
- [Regression Bugs](regression-bugs.md) <span class="info-tooltip" title="Confidence: 0.370, Strength: 0.836">ⓘ</span>
<br/>  As systems become increasingly fragile due to complex interdependencies and outdated architecture, the introduction of new features or fixes often disrupts existing functionality, manifesting as regression bugs that reveal the underlying brittleness of the software.
- [Unclear Documentation Ownership](unclear-documentation-ownership.md) <span class="info-tooltip" title="Confidence: 0.366, Strength: 0.806">ⓘ</span>
<br/>  The lack of clear responsibility for maintaining documentation often leads to outdated and inconsistent information, which hinders effective understanding and modification of the software, thereby exacerbating its fragility and making small changes more prone to unintended consequences.
- [Inadequate Test Data Management](inadequate-test-data-management.md) <span class="info-tooltip" title="Confidence: 0.360, Strength: 0.852">ⓘ</span>
<br/>  The reliance on unrealistic or outdated test data in legacy systems highlights increasing brittleness, as it fails to expose fragile code paths and interactions, resulting in a false sense of stability and unaddressed vulnerabilities.
- [Lower Code Quality](lower-code-quality.md) <span class="info-tooltip" title="Confidence: 0.351, Strength: 0.800">ⓘ</span>
<br/>  As legacy systems become increasingly fragile, the pressure on developers to make rapid changes without comprehensive testing leads to lower code quality, resulting in more defects that further exacerbate the system's brittleness.
- [Memory Fragmentation](memory-fragmentation.md) <span class="info-tooltip" title="Confidence: 0.350, Strength: 0.808">ⓘ</span>
<br/>  As software systems age and accumulate untested changes, their increasing complexity can lead to inefficient memory usage patterns, resulting in fragmentation that hinders allocation and reflects the underlying brittleness of the system.
- [Technology Isolation](technology-isolation.md) <span class="info-tooltip" title="Confidence: 0.350, Strength: 0.848">ⓘ</span>
<br/>  As a legacy system becomes more fragile due to its rigid architecture and accumulation of technical debt, it increasingly relies on outdated technologies, resulting in technology isolation that hinders the integration of modern tools and the recruitment of skilled developers.
- [Inconsistent Knowledge Acquisition](inconsistent-knowledge-acquisition.md) <span class="info-tooltip" title="Confidence: 0.346, Strength: 0.870">ⓘ</span>
<br/>  As the software system becomes more fragile due to its complexity and interdependencies, new team members struggle to acquire consistent knowledge, leading to uneven skill distribution that further exacerbates the system's brittleness when changes are made.
- [Fear of Failure](fear-of-failure.md) <span class="info-tooltip" title="Confidence: 0.342, Strength: 0.886">ⓘ</span>
<br/>  As software systems grow increasingly fragile, developers become acutely aware that even minor changes can lead to significant failures, fostering a culture of risk aversion and fear of making changes that could disrupt functionality.
- [Mentor Burnout](mentor-burnout.md) <span class="info-tooltip" title="Confidence: 0.340, Strength: 0.874">ⓘ</span>
<br/>  As software systems grow increasingly fragile, the burden of maintaining and transferring knowledge about complex, intertwined codebases falls disproportionately on experienced team members, leading to mentor burnout as they struggle to manage the chaos and uncertainty introduced by even minor changes.
- [Monolithic Functions and Classes](monolithic-functions-and-classes.md) <span class="info-tooltip" title="Confidence: 0.328, Strength: 0.785">ⓘ</span>
<br/>  Monolithic functions and classes contribute to increasing brittleness by intertwining multiple responsibilities, which complicates changes and increases the likelihood of unintended side effects, making the system more fragile over time.
- [Maintenance Paralysis](maintenance-paralysis.md) <span class="info-tooltip" title="Confidence: 0.327, Strength: 0.911">ⓘ</span>
<br/>  As software systems become increasingly fragile, the fear of unintended consequences from minor changes leads teams to avoid necessary updates, thereby manifesting as a reluctance to enhance or maintain the system.
- [ABI Compatibility Issues](abi-compatibility-issues.md) <span class="info-tooltip" title="Confidence: 0.325, Strength: 0.825">ⓘ</span>
<br/>  As software systems age and become more brittle, changes to one component can lead to ABI incompatibilities with others, resulting in runtime failures that highlight the fragility of the overall architecture.
- [Vendor Lock-In](vendor-lock-in.md) <span class="info-tooltip" title="Confidence: 0.322, Strength: 0.846">ⓘ</span>
<br/>  Overreliance on a specific vendor's tools or APIs often arises from a fragile software architecture that cannot easily adapt to changes, making it difficult to switch providers without risking system stability, thus highlighting increasing brittleness as the underlying issue.
- [Duplicated Research Effort](duplicated-research-effort.md) <span class="info-tooltip" title="Confidence: 0.322, Strength: 0.820">ⓘ</span>
<br/>  As the system's fragility increases, team members often lack confidence in making changes or understanding existing functionalities, leading them to independently research the same topics rather than collaborating, which indicates a breakdown in shared knowledge and effective communication.
- [Stagnant Architecture](stagnant-architecture.md) <span class="info-tooltip" title="Confidence: 0.319, Strength: 0.761">ⓘ</span>
<br/>  The lack of architectural evolution, due to an aversion to major refactoring, leads to an accumulation of technical debt and complexity, making the system increasingly fragile and prone to failure with even minor changes.
- [Stakeholder Frustration](stakeholder-frustration.md) <span class="info-tooltip" title="Confidence: 0.319, Strength: 0.888">ⓘ</span>
<br/>  As the software system's fragility increases, even minor changes can lead to unexpected issues, causing delays and quality concerns that frustrate stakeholders and diminish their confidence in the development process.
- [Poor Contract Design](poor-contract-design.md) <span class="info-tooltip" title="Confidence: 0.317, Strength: 0.885">ⓘ</span>
<br/>  As software systems become more fragile, the inflexibility and misalignment of legal agreements often lead to constraints that inhibit necessary adaptations, making poor contract design a clear symptom of underlying brittleness in the system.
- [Unclear Goals and Priorities](unclear-goals-and-priorities.md) <span class="info-tooltip" title="Confidence: 0.310, Strength: 0.775">ⓘ</span>
<br/>  As software systems become increasingly fragile, frequent changes without clear objectives can result in confusion and misalignment among team members, signaling the growing brittleness of the system.
- [Inadequate Integration Tests](inadequate-integration-tests.md) <span class="info-tooltip" title="Confidence: 0.309, Strength: 0.844">ⓘ</span>
<br/>  The lack of thorough integration testing exposes the fragile interdependencies within legacy systems, making it difficult to identify and manage the cascading effects of changes, thereby revealing the underlying brittleness of the software.
- [Long Release Cycles](long-release-cycles.md) <span class="info-tooltip" title="Confidence: 0.308, Strength: 0.836">ⓘ</span>
<br/>  Delays in release cycles often arise from the need for extensive manual testing and debugging, which are necessitated by the fragility of the software, where even minor changes can trigger unexpected failures, highlighting the system's brittleness.
- [Poor Domain Model](poor-domain-model.md) <span class="info-tooltip" title="Confidence: 0.308, Strength: 0.924">ⓘ</span>
<br/>  A poorly understood domain model leads to fragile logic and miscommunication, which makes the system more susceptible to breaking with minor changes, thereby indicating the overall increasing brittleness of the software.
- [Large Pull Requests](large-pull-requests.md) <span class="info-tooltip" title="Confidence: 0.306, Strength: 0.703">ⓘ</span>
<br/>  As software systems become more fragile, the complexity and interconnectedness of the code increase, resulting in larger pull requests that overwhelm reviewers and lead to superficial assessments, thereby masking underlying issues and further entrenching brittleness.
- [Legacy System Documentation Archaeology](legacy-system-documentation-archaeology.md) <span class="info-tooltip" title="Confidence: 0.305, Strength: 0.804">ⓘ</span>
<br/>  The presence of critical system knowledge in obsolete documentation and outdated formats indicates increasing brittleness, as it reflects the system's reliance on fragile, undocumented assumptions that make small changes riskier and more likely to cause widespread failures.
- [Team Churn Impact](team-churn-impact.md) <span class="info-tooltip" title="Confidence: 0.305, Strength: 0.863">ⓘ</span>
<br/>  The frequent turnover of developers leads to inconsistent coding practices and knowledge gaps, which exacerbate the fragility of the software, making it more susceptible to breaking with even minor changes.
- [Dependency Version Conflicts](dependency-version-conflicts.md) <span class="info-tooltip" title="Confidence: 0.303, Strength: 0.861">ⓘ</span>
<br/>  As software systems age and accumulate complexity, the reliance on outdated or incompatible libraries leads to dependency conflicts, which serve as a clear indicator of the underlying brittleness that makes the system vulnerable to breaking with even minor changes.
- [Complex Implementation Paths](complex-implementation-paths.md) <span class="info-tooltip" title="Confidence: 0.303, Strength: 0.739">ⓘ</span>
<br/>  As software systems become more fragile over time, the increasing brittleness leads to a reliance on convoluted technical solutions for simple business requirements, revealing the underlying architectural constraints and design limitations that exacerbate system instability.
- [Difficulty Quantifying Benefits](difficulty-quantifying-benefits.md) <span class="info-tooltip" title="Confidence: 0.302, Strength: 0.817">ⓘ</span>
<br/>  As software systems become more fragile over time, the unpredictable impact of changes makes it difficult to quantify the benefits of technical improvements, leading to a devaluation of refactoring efforts in favor of new features.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○

- **Failure Rate Tracking:** Monitor the frequency of system failures and their relationship to recent changes
- **Change Impact Analysis:** Assess how often changes affect unrelated system areas
- **Bug Trend Analysis:** Track bug reports over time, particularly regression bugs
- **System Stability Metrics:** Measure system uptime, error rates, and performance consistency
- **Change Risk Assessment:** Evaluate the perceived risk associated with making system modifications


## Examples

An e-commerce platform experiences a critical failure in its product recommendation engine after a seemingly unrelated change to the user authentication system. Investigation reveals that the authentication change modified a shared caching layer that the recommendation engine relied on, even though this dependency wasn't documented anywhere. This type of unexpected failure happens increasingly often - a database schema change breaks the reporting system, a UI update causes checkout failures, and a performance optimization triggers inventory tracking bugs. The development team spends more time investigating and fixing these cascade failures than implementing new features. Another example involves a financial trading system where adding a new data validation rule causes existing trades to fail processing due to subtle changes in data flow timing. The system has become so interconnected and fragile that any change risks triggering failures in distant parts of the system, making development extremely slow and risky.
