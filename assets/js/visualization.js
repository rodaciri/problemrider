const graph = {
  "nodes": [
    {
      "id": "abi-compatibility-issues.md",
      "title": "ABI Compatibility Issues",
      "description": "Application Binary Interface incompatibilities between different versions of libraries or system components cause runtime failures or undefined behavior.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "accumulated-decision-debt.md",
      "title": "Accumulated Decision Debt",
      "description": "Deferred decisions create compound complexity for future choices, making the system increasingly difficult to evolve.",
      "category": "Architecture",
      "size": 14
    },
    {
      "id": "accumulation-of-workarounds.md",
      "title": "Accumulation of Workarounds",
      "description": "Instead of fixing core issues, developers create elaborate workarounds that add complexity and technical debt to the system.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "algorithmic-complexity-problems.md",
      "title": "Algorithmic Complexity Problems",
      "description": "Code uses inefficient algorithms or data structures, leading to performance bottlenecks and resource waste.",
      "category": "Architecture",
      "size": 14
    },
    {
      "id": "alignment-and-padding-issues.md",
      "title": "Alignment and Padding Issues",
      "description": "Data structures have inefficient memory layout due to poor alignment and excessive padding, wasting memory and reducing cache efficiency.",
      "category": "Architecture",
      "size": 12
    },
    {
      "id": "analysis-paralysis.md",
      "title": "Analysis Paralysis",
      "description": "Teams become stuck in research phases without moving to implementation, preventing actual progress on development work.",
      "category": "Management",
      "size": 20
    },
    {
      "id": "api-versioning-conflicts.md",
      "title": "API Versioning Conflicts",
      "description": "Inconsistent or poorly managed API versioning creates compatibility issues, breaking changes, and integration failures between services.",
      "category": "Architecture",
      "size": 12
    },
    {
      "id": "approval-dependencies.md",
      "title": "Approval Dependencies",
      "description": "Work progress is frequently blocked by the need for approvals from specific individuals, creating bottlenecks and delays.",
      "category": "Dependencies",
      "size": 19
    },
    {
      "id": "architectural-mismatch.md",
      "title": "Architectural Mismatch",
      "description": "New business requirements don't fit well within existing architectural constraints, requiring extensive workarounds or compromises.",
      "category": "Architecture",
      "size": 17
    },
    {
      "id": "assumption-based-development.md",
      "title": "Assumption-Based Development",
      "description": "Developers make decisions based on assumptions about requirements or user needs rather than validating their understanding.",
      "category": "Communication",
      "size": 16
    },
    {
      "id": "atomic-operation-overhead.md",
      "title": "Atomic Operation Overhead",
      "description": "Excessive use of atomic operations creates performance bottlenecks due to memory synchronization overhead and cache coherency traffic.",
      "category": "Architecture",
      "size": 11
    },
    {
      "id": "authentication-bypass-vulnerabilities.md",
      "title": "Authentication Bypass Vulnerabilities",
      "description": "Security flaws that allow attackers to bypass authentication mechanisms and gain unauthorized access to protected resources.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "author-frustration.md",
      "title": "Author Frustration",
      "description": "Developers become frustrated with unpredictable, conflicting, or seemingly arbitrary feedback during the code review process.",
      "category": "Culture",
      "size": 18
    },
    {
      "id": "authorization-flaws.md",
      "title": "Authorization Flaws",
      "description": "Inadequate access control mechanisms allow users to perform actions or access resources beyond their intended permissions.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "automated-tooling-ineffectiveness.md",
      "title": "Automated Tooling Ineffectiveness",
      "description": "A situation where automated tooling, such as linters and formatters, is not effective because of the inconsistency of the codebase.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "avoidance-behaviors.md",
      "title": "Avoidance Behaviors",
      "description": "Complex tasks are postponed or avoided entirely due to cognitive overload, fear, or perceived difficulty.",
      "category": "Management",
      "size": 13
    },
    {
      "id": "bikeshedding.md",
      "title": "Bikeshedding",
      "description": "Reviewers focus on trivial issues like whitespace and variable names instead of more important issues like logic and design.",
      "category": "Process",
      "size": 14
    },
    {
      "id": "blame-culture.md",
      "title": "Blame Culture",
      "description": "Mistakes are punished instead of addressed constructively, discouraging risk-taking and learning",
      "category": "Management",
      "size": 20
    },
    {
      "id": "bloated-class.md",
      "title": "Bloated Class",
      "description": "A class that has grown so large that it has become difficult to understand, maintain, and test.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "bottleneck-formation.md",
      "title": "Bottleneck Formation",
      "description": "Specific team members, processes, or system components become constraints that limit the overall flow and productivity of development work.",
      "category": "Performance",
      "size": 18
    },
    {
      "id": "breaking-changes.md",
      "title": "Breaking Changes",
      "description": "API updates break existing client integrations, causing compatibility issues and forcing costly emergency fixes.",
      "category": "Architecture",
      "size": 16
    },
    {
      "id": "brittle-codebase.md",
      "title": "Brittle Codebase",
      "description": "The existing code is difficult to modify without introducing new bugs, making maintenance and feature development risky.",
      "category": "Architecture",
      "size": 20
    },
    {
      "id": "budget-overruns.md",
      "title": "Budget Overruns",
      "description": "The project costs more than originally planned due to the extra work being done, which can lead to a loss of funding and a great deal of frustration for the stakeholders.",
      "category": "Business",
      "size": 16
    },
    {
      "id": "buffer-overflow-vulnerabilities.md",
      "title": "Buffer Overflow Vulnerabilities",
      "description": "Programs write data beyond the boundaries of allocated memory buffers, leading to security vulnerabilities and system instability.",
      "category": "Code",
      "size": 12
    },
    {
      "id": "cache-invalidation-problems.md",
      "title": "Cache Invalidation Problems",
      "description": "Cached data becomes stale or inconsistent with the underlying data source, leading to incorrect application behavior and user confusion.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "capacity-mismatch.md",
      "title": "Capacity Mismatch",
      "description": "Available capacity at different stages of the development process doesn't match demand patterns, creating bottlenecks and underutilization.",
      "category": "Performance",
      "size": 17
    },
    {
      "id": "cargo-culting.md",
      "title": "Cargo Culting",
      "description": "Uncritical adoption of technical solutions without understanding their underlying principles and context",
      "category": "Architecture",
      "size": 20
    },
    {
      "id": "cascade-delays.md",
      "title": "Cascade Delays",
      "description": "Missed deadlines in one area cause delays in dependent work streams, creating a ripple effect that affects multiple projects and teams.",
      "category": "Business",
      "size": 14
    },
    {
      "id": "cascade-failures.md",
      "title": "Cascade Failures",
      "description": "A single change triggers a chain reaction of failures across multiple system components.",
      "category": "Architecture",
      "size": 11
    },
    {
      "id": "change-management-chaos.md",
      "title": "Change Management Chaos",
      "description": "Changes to systems occur without coordination, oversight, or impact assessment, leading to conflicts and unintended consequences.",
      "category": "Management",
      "size": 20
    },
    {
      "id": "changing-project-scope.md",
      "title": "Changing Project Scope",
      "description": "Frequent shifts in project direction confuse the team and prevent steady progress toward completion.",
      "category": "Management",
      "size": 19
    },
    {
      "id": "circular-dependency-problems.md",
      "title": "Circular Dependency Problems",
      "description": "Components depend on each other in circular patterns, creating initialization issues, testing difficulties, and architectural complexity.",
      "category": "Architecture",
      "size": 11
    },
    {
      "id": "circular-references.md",
      "title": "Circular References",
      "description": "Two or more objects reference each other in a way that prevents garbage collection, leading to memory leaks and resource exhaustion.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "clever-code.md",
      "title": "Clever Code",
      "description": "Code written to demonstrate technical prowess rather than clarity, making it difficult for others to understand and maintain.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "code-duplication.md",
      "title": "Code Duplication",
      "description": "Similar or identical code exists in multiple places, making maintenance difficult and introducing inconsistency risks.",
      "category": "Architecture",
      "size": 17
    },
    {
      "id": "code-review-inefficiency.md",
      "title": "Code Review Inefficiency",
      "description": "The code review process takes excessive time, provides limited value, or creates bottlenecks in the development workflow.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "cognitive-overload.md",
      "title": "Cognitive Overload",
      "description": "Developers must maintain too many complex systems or concepts in their working memory simultaneously, reducing their effectiveness.",
      "category": "Code",
      "size": 16
    },
    {
      "id": "communication-breakdown.md",
      "title": "Communication Breakdown",
      "description": "Team members fail to effectively share information, coordinate work, or collaborate, leading to duplicated effort and misaligned solutions.",
      "category": "Communication",
      "size": 20
    },
    {
      "id": "communication-risk-outside-project.md",
      "title": "Communication Risk Outside Project",
      "description": "External stakeholders are left uninformed, leading to surprises and misaligned expectations about project progress.",
      "category": "Communication",
      "size": 13
    },
    {
      "id": "communication-risk-within-project.md",
      "title": "Communication Risk Within Project",
      "description": "Misunderstandings and unclear messages reduce coordination and trust among project team members.",
      "category": "Communication",
      "size": 14
    },
    {
      "id": "competing-priorities.md",
      "title": "Competing Priorities",
      "description": "Multiple urgent projects or initiatives compete for the same limited resources, creating conflicts and inefficiencies.",
      "category": "Management",
      "size": 18
    },
    {
      "id": "competitive-disadvantage.md",
      "title": "Competitive Disadvantage",
      "description": "Users switch to competitors who offer better experience or more features due to technical shortcomings.",
      "category": "Business",
      "size": 11
    },
    {
      "id": "complex-and-obscure-logic.md",
      "title": "Complex and Obscure Logic",
      "description": "The code is hard to understand due to convoluted logic, lack of comments, or poor naming conventions.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "complex-deployment-process.md",
      "title": "Complex Deployment Process",
      "description": "The process of deploying software to production is manual, time-consuming, and error-prone, which contributes to long release cycles and a high risk of failure.",
      "category": "Operations",
      "size": 20
    },
    {
      "id": "complex-domain-model.md",
      "title": "Complex Domain Model",
      "description": "The business domain being modeled in software is inherently complex, making the system difficult to understand and implement correctly.",
      "category": "Architecture",
      "size": 19
    },
    {
      "id": "complex-implementation-paths.md",
      "title": "Complex Implementation Paths",
      "description": "Simple business requirements require complex technical solutions due to architectural constraints or design limitations.",
      "category": "Architecture",
      "size": 14
    },
    {
      "id": "configuration-chaos.md",
      "title": "Configuration Chaos",
      "description": "System configurations are inconsistent, difficult to manage, and prone to drift, causing unpredictable behavior across environments.",
      "category": "Operations",
      "size": 16
    },
    {
      "id": "configuration-drift.md",
      "title": "Configuration Drift",
      "description": "System configurations gradually diverge from intended standards over time, creating inconsistencies and reliability issues.",
      "category": "Architecture",
      "size": 14
    },
    {
      "id": "conflicting-reviewer-opinions.md",
      "title": "Conflicting Reviewer Opinions",
      "description": "Multiple reviewers provide contradictory guidance on the same code changes, creating confusion and inefficiency.",
      "category": "Communication",
      "size": 17
    },
    {
      "id": "constant-firefighting.md",
      "title": "Constant Firefighting",
      "description": "The development team is perpetually occupied with fixing bugs and addressing urgent issues, leaving little to no time for new feature development.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "constantly-shifting-deadlines.md",
      "title": "Constantly Shifting Deadlines",
      "description": "The project's end date is repeatedly pushed back to accommodate new feature requests, leading to a loss of credibility and a great deal of frustration for the development team.",
      "category": "Process",
      "size": 13
    },
    {
      "id": "context-switching-overhead.md",
      "title": "Context Switching Overhead",
      "description": "Developers must constantly switch between different tools, systems, or problem domains, reducing productivity and increasing cognitive load.",
      "category": "Process",
      "size": 20
    },
    {
      "id": "convenience-driven-development.md",
      "title": "Convenience-Driven Development",
      "description": "A development practice where developers choose the easiest and most convenient solution, rather than the best solution.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "copy-paste-programming.md",
      "title": "Copy-Paste Programming",
      "description": "Developers frequently copy and paste code rather than creating reusable components, leading to maintenance nightmares and subtle bugs.",
      "category": "Code",
      "size": 18
    },
    {
      "id": "cross-site-scripting-vulnerabilities.md",
      "title": "Cross-Site Scripting Vulnerabilities",
      "description": "Inadequate input validation and output encoding allows attackers to inject malicious scripts that execute in users' browsers.",
      "category": "Code",
      "size": 10
    },
    {
      "id": "cross-system-data-synchronization-problems.md",
      "title": "Cross-System Data Synchronization Problems",
      "description": "Maintaining data consistency between legacy and modern systems during migration creates complex synchronization challenges and potential data corruption",
      "category": "Code",
      "size": 20
    },
    {
      "id": "customer-dissatisfaction.md",
      "title": "Customer Dissatisfaction",
      "description": "Users become frustrated with system reliability, performance, or usability issues, leading to complaints and potential customer loss.",
      "category": "Business",
      "size": 14
    },
    {
      "id": "cv-driven-development.md",
      "title": "CV Driven Development",
      "description": "Choosing technologies or practices primarily to enhance personal resumes rather than solve business problems",
      "category": "Code",
      "size": 20
    },
    {
      "id": "data-migration-complexities.md",
      "title": "Data Migration Complexities",
      "description": "Complex data migration processes create risks of data loss, corruption, or extended downtime during system updates.",
      "category": "Code",
      "size": 10
    },
    {
      "id": "data-migration-integrity-issues.md",
      "title": "Data Migration Integrity Issues",
      "description": "Data loses integrity, consistency, or meaning during migration from legacy to modern systems due to schema mismatches and format incompatibilities",
      "category": "Code",
      "size": 20
    },
    {
      "id": "data-protection-risk.md",
      "title": "Data Protection Risk",
      "description": "Handling of personal or sensitive data lacks safeguards, exposing the project to legal and ethical issues",
      "category": "Process",
      "size": 20
    },
    {
      "id": "data-structure-cache-inefficiency.md",
      "title": "Data Structure Cache Inefficiency",
      "description": "Data structures are organized in ways that cause poor cache performance, leading to excessive memory access latency and reduced throughput.",
      "category": "Code",
      "size": 10
    },
    {
      "id": "database-connection-leaks.md",
      "title": "Database Connection Leaks",
      "description": "Database connections are opened but not properly closed, leading to connection pool exhaustion and application failures.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "database-query-performance-issues.md",
      "title": "Database Query Performance Issues",
      "description": "Poorly optimized database queries cause slow response times, high resource consumption, and scalability problems.",
      "category": "Architecture",
      "size": 10
    },
    {
      "id": "database-schema-design-problems.md",
      "title": "Database Schema Design Problems",
      "description": "Poor database schema design creates performance issues, data integrity problems, and maintenance difficulties.",
      "category": "Architecture",
      "size": 14
    },
    {
      "id": "deadline-pressure.md",
      "title": "Deadline Pressure",
      "description": "Intense pressure to meet deadlines leads to rushed decisions, shortcuts, and compromised quality in software development.",
      "category": "Code",
      "size": 15
    },
    {
      "id": "deadlock-conditions.md",
      "title": "Deadlock Conditions",
      "description": "Multiple threads or processes wait indefinitely for each other to release resources, causing system freeze and application unresponsiveness.",
      "category": "Code",
      "size": 15
    },
    {
      "id": "debugging-difficulties.md",
      "title": "Debugging Difficulties",
      "description": "Finding and fixing bugs becomes challenging due to complex code architecture, poor logging, or inadequate development tools.",
      "category": "Code",
      "size": 12
    },
    {
      "id": "decision-avoidance.md",
      "title": "Decision Avoidance",
      "description": "Important technical decisions are repeatedly deferred, preventing progress and creating bottlenecks in development work.",
      "category": "Process",
      "size": 16
    },
    {
      "id": "decision-paralysis.md",
      "title": "Decision Paralysis",
      "description": "Developers struggle to make choices without clear guidance, which can lead to a slowdown in development and a great deal of frustration for the development team.",
      "category": "Management",
      "size": 14
    },
    {
      "id": "declining-business-metrics.md",
      "title": "Declining Business Metrics",
      "description": "Key business indicators such as user engagement, conversion rates, revenue, and stakeholder confidence deteriorate due to technical problems.",
      "category": "Business",
      "size": 15
    },
    {
      "id": "defensive-coding-practices.md",
      "title": "Defensive Coding Practices",
      "description": "Developers write overly verbose code, excessive comments, or unnecessary defensive logic to preempt anticipated criticism during code reviews.",
      "category": "Code",
      "size": 12
    },
    {
      "id": "delayed-bug-fixes.md",
      "title": "Delayed Bug Fixes",
      "description": "Known issues remain unresolved for extended periods, causing ongoing problems and user frustration.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "delayed-decision-making.md",
      "title": "Delayed Decision Making",
      "description": "Important decisions that affect development progress are postponed or take excessive time to make, creating bottlenecks and uncertainty.",
      "category": "Management",
      "size": 10
    },
    {
      "id": "delayed-issue-resolution.md",
      "title": "Delayed Issue Resolution",
      "description": "Problems persist longer because no one feels responsible for fixing them, leading to accumulated technical debt and user frustration.",
      "category": "Code",
      "size": 16
    },
    {
      "id": "delayed-project-timelines.md",
      "title": "Delayed Project Timelines",
      "description": "Projects consistently take longer than planned, missing deadlines and extending delivery schedules beyond original estimates.",
      "category": "Process",
      "size": 16
    },
    {
      "id": "delayed-value-delivery.md",
      "title": "Delayed Value Delivery",
      "description": "Users have to wait for an extended period to receive new features or bug fixes, leading to frustration and a competitive disadvantage.",
      "category": "Business",
      "size": 14
    },
    {
      "id": "dependency-on-supplier.md",
      "title": "Dependency on Supplier",
      "description": "External vendors control critical parts of the system, reducing organizational flexibility and increasing lock-in risk.",
      "category": "Architecture",
      "size": 11
    },
    {
      "id": "dependency-version-conflicts.md",
      "title": "Dependency Version Conflicts",
      "description": "Conflicting versions of dependencies cause runtime errors, build failures, and unexpected behavior in applications.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "deployment-coupling.md",
      "title": "Deployment Coupling",
      "description": "A situation where multiple components or services must be deployed together, even if only one of them has changed.",
      "category": "Architecture",
      "size": 15
    },
    {
      "id": "deployment-environment-inconsistencies.md",
      "title": "Deployment Environment Inconsistencies",
      "description": "Differences between deployment environments cause applications to behave differently or fail when moved between environments.",
      "category": "Operations",
      "size": 14
    },
    {
      "id": "deployment-risk.md",
      "title": "Deployment Risk",
      "description": "System deployments carry high risk of failure or damage due to irreversible changes and lack of recovery mechanisms.",
      "category": "Management",
      "size": 19
    },
    {
      "id": "developer-frustration-and-burnout.md",
      "title": "Developer Frustration and Burnout",
      "description": "Developers are demotivated, disengaged, and exhausted due to persistent issues in the work environment and codebase.",
      "category": "Culture",
      "size": 18
    },
    {
      "id": "development-disruption.md",
      "title": "Development Disruption",
      "description": "The development team is constantly interrupted by urgent production issues, which disrupts planned work and reduces overall productivity.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "difficult-code-comprehension.md",
      "title": "Difficult Code Comprehension",
      "description": "A situation where developers have a hard time understanding the codebase.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "difficult-code-reuse.md",
      "title": "Difficult Code Reuse",
      "description": "It is difficult to reuse code in different contexts because it is not designed in a modular and reusable way.",
      "category": "Architecture",
      "size": 14
    },
    {
      "id": "difficult-developer-onboarding.md",
      "title": "Difficult Developer Onboarding",
      "description": "New team members take an unusually long time to become productive due to complex systems, poor documentation, and inadequate onboarding processes.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "difficult-to-test-code.md",
      "title": "Difficult to Test Code",
      "description": "Components cannot be easily tested in isolation due to tight coupling, global dependencies, or complex setup requirements.",
      "category": "Code",
      "size": 17
    },
    {
      "id": "difficult-to-understand-code.md",
      "title": "Difficult to Understand Code",
      "description": "It's hard to grasp the purpose of modules or functions without understanding many other parts of the system, slowing development and increasing errors.",
      "category": "Code",
      "size": 13
    },
    {
      "id": "difficulty-quantifying-benefits.md",
      "title": "Difficulty Quantifying Benefits",
      "description": "It is hard to measure the ROI of refactoring work compared to new features, so technical improvements often lose out in prioritization decisions.",
      "category": "Business",
      "size": 14
    },
    {
      "id": "dma-coherency-issues.md",
      "title": "DMA Coherency Issues",
      "description": "Direct Memory Access operations conflict with CPU cache coherency, leading to data corruption or inconsistent data views between CPU and DMA devices.",
      "category": "Code",
      "size": 12
    },
    {
      "id": "duplicated-effort.md",
      "title": "Duplicated Effort",
      "description": "Multiple team members unknowingly work on the same problems or implement similar solutions independently.",
      "category": "Communication",
      "size": 12
    },
    {
      "id": "duplicated-research-effort.md",
      "title": "Duplicated Research Effort",
      "description": "Multiple team members research the same topics independently, wasting time and failing to build collective knowledge.",
      "category": "Communication",
      "size": 12
    },
    {
      "id": "duplicated-work.md",
      "title": "Duplicated Work",
      "description": "Multiple team members unknowingly work on the same tasks or solve the same problems, leading to wasted effort and potential conflicts.",
      "category": "Communication",
      "size": 14
    },
    {
      "id": "eager-to-please-stakeholders.md",
      "title": "Eager to Please Stakeholders",
      "description": "The project team agrees to every new request from the stakeholders without pushing back or explaining the trade-offs, which can lead to scope creep and a number of other problems.",
      "category": "Communication",
      "size": 20
    },
    {
      "id": "endianness-conversion-overhead.md",
      "title": "Endianness Conversion Overhead",
      "description": "Frequent byte order conversions between different endianness formats create performance overhead in data processing and network communication.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "environment-variable-issues.md",
      "title": "Environment Variable Issues",
      "description": "Improper management of environment variables causes configuration problems, security vulnerabilities, and deployment failures.",
      "category": "Operations",
      "size": 11
    },
    {
      "id": "error-message-information-disclosure.md",
      "title": "Error Message Information Disclosure",
      "description": "Error messages reveal sensitive system information that can be exploited by attackers to understand system architecture and vulnerabilities.",
      "category": "Code",
      "size": 10
    },
    {
      "id": "excessive-class-size.md",
      "title": "Excessive Class Size",
      "description": "Classes become overly large and complex, making them difficult to understand, maintain, and test.",
      "category": "Architecture",
      "size": 14
    },
    {
      "id": "excessive-disk-io.md",
      "title": "Excessive Disk I/O",
      "description": "The system performs a high number of disk read/write operations, indicating inefficient data access or processing.",
      "category": "Performance",
      "size": 10
    },
    {
      "id": "excessive-logging.md",
      "title": "Excessive Logging",
      "description": "Applications generate a very high volume of logs, consuming excessive disk space and potentially impacting performance.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "excessive-object-allocation.md",
      "title": "Excessive Object Allocation",
      "description": "Code creates a large number of temporary objects, putting pressure on the garbage collector and degrading performance.",
      "category": "Code",
      "size": 12
    },
    {
      "id": "extended-cycle-times.md",
      "title": "Extended Cycle Times",
      "description": "The time from when work begins until it's completed and delivered becomes much longer than the actual work time required.",
      "category": "Process",
      "size": 13
    },
    {
      "id": "extended-research-time.md",
      "title": "Extended Research Time",
      "description": "Developers spend significant portions of their day researching rather than implementing, due to knowledge gaps or complex legacy systems.",
      "category": "Code",
      "size": 13
    },
    {
      "id": "extended-review-cycles.md",
      "title": "Extended Review Cycles",
      "description": "Code reviews require multiple rounds of feedback and revision, significantly extending the time from code submission to approval.",
      "category": "Process",
      "size": 14
    },
    {
      "id": "external-service-delays.md",
      "title": "External Service Delays",
      "description": "An API depends on other services (third-party or internal) that are slow to respond, causing the API itself to be slow.",
      "category": "Code",
      "size": 16
    },
    {
      "id": "false-sharing.md",
      "title": "False Sharing",
      "description": "Multiple CPU cores access different variables located on the same cache line, causing unnecessary cache coherency traffic and performance degradation.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "fear-of-breaking-changes.md",
      "title": "Fear of Breaking Changes",
      "description": "The team is reluctant to make changes to the codebase for fear of breaking existing functionality, which can lead to a stagnant and outdated system.",
      "category": "Code",
      "size": 15
    },
    {
      "id": "fear-of-change.md",
      "title": "Fear of Change",
      "description": "Developers are hesitant to modify existing code due to the high risk of breaking something.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "fear-of-conflict.md",
      "title": "Fear of Conflict",
      "description": "Reviewers avoid challenging complex logic or design decisions, opting for easier, less confrontational feedback.",
      "category": "Communication",
      "size": 19
    },
    {
      "id": "fear-of-failure.md",
      "title": "Fear of Failure",
      "description": "A pervasive fear of making mistakes or failing can lead to inaction, risk aversion, and a reluctance to innovate within a development team.",
      "category": "Culture",
      "size": 20
    },
    {
      "id": "feature-bloat.md",
      "title": "Feature Bloat",
      "description": "Products become overly complex with numerous features that dilute the core value proposition and confuse users.",
      "category": "Architecture",
      "size": 13
    },
    {
      "id": "feature-creep-without-refactoring.md",
      "title": "Feature Creep Without Refactoring",
      "description": "The continuous addition of new features to a codebase without taking the time to refactor and improve the design.",
      "category": "Code",
      "size": 17
    },
    {
      "id": "feature-creep.md",
      "title": "Feature Creep",
      "description": "The scope of a feature or component gradually expands over time, leading to a complex and bloated system that is difficult to maintain.",
      "category": "Architecture",
      "size": 15
    },
    {
      "id": "feature-factory.md",
      "title": "Feature Factory",
      "description": "Organization prioritizes shipping features over understanding their business impact and user value",
      "category": "Management",
      "size": 15
    },
    {
      "id": "feature-gaps.md",
      "title": "Feature Gaps",
      "description": "Important functionality is missing because developers assumed it wasn't needed, creating incomplete solutions that don't meet user needs.",
      "category": "Business",
      "size": 15
    },
    {
      "id": "feedback-isolation.md",
      "title": "Feedback Isolation",
      "description": "Development teams operate without regular input from stakeholders and users, leading to products that miss requirements and user needs.",
      "category": "Business",
      "size": 20
    },
    {
      "id": "flaky-tests.md",
      "title": "Flaky Tests",
      "description": "Tests fail randomly due to timing, setup, or dependencies, undermining trust in the test suite",
      "category": "Code",
      "size": 20
    },
    {
      "id": "frequent-changes-to-requirements.md",
      "title": "Frequent Changes to Requirements",
      "description": "The requirements for a project or feature are constantly being updated, even after development has started, leading to rework, delays, and frustration.",
      "category": "Communication",
      "size": 18
    },
    {
      "id": "frequent-hotfixes-and-rollbacks.md",
      "title": "Frequent Hotfixes and Rollbacks",
      "description": "The team is constantly deploying small fixes or rolling back releases due to insufficient testing and quality control.",
      "category": "Code",
      "size": 15
    },
    {
      "id": "garbage-collection-pressure.md",
      "title": "Garbage Collection Pressure",
      "description": "Excessive object allocation and deallocation causes frequent garbage collection cycles, creating performance pauses and reducing application throughput.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "global-state-and-side-effects.md",
      "title": "Global State and Side Effects",
      "description": "Excessive use of global variables or functions with hidden side effects makes it difficult to reason about code behavior.",
      "category": "Architecture",
      "size": 20
    },
    {
      "id": "god-object-anti-pattern.md",
      "title": "God Object Anti-Pattern",
      "description": "Single classes or components handle too many responsibilities, becoming overly complex and difficult to maintain or test.",
      "category": "Architecture",
      "size": 11
    },
    {
      "id": "gold-plating.md",
      "title": "Gold Plating",
      "description": "Developers add unnecessary features or complexity to a project because they believe it will impress the stakeholders, even if it was not requested.",
      "category": "Process",
      "size": 17
    },
    {
      "id": "gradual-performance-degradation.md",
      "title": "Gradual Performance Degradation",
      "description": "Application performance slowly deteriorates over time due to resource leaks, accumulating technical debt, or inefficient algorithms.",
      "category": "Code",
      "size": 13
    },
    {
      "id": "graphql-complexity-issues.md",
      "title": "GraphQL Complexity Issues",
      "description": "GraphQL queries become too complex or expensive to execute, causing performance problems and potential denial-of-service vulnerabilities.",
      "category": "Architecture",
      "size": 10
    },
    {
      "id": "growing-task-queues.md",
      "title": "Growing Task Queues",
      "description": "Asynchronous processing queues accumulate unprocessed tasks, indicating a bottleneck in the processing pipeline.",
      "category": "Code",
      "size": 10
    },
    {
      "id": "hardcoded-values.md",
      "title": "Hardcoded Values",
      "description": "Magic numbers and fixed strings reduce flexibility, making configuration and adaptation difficult",
      "category": "Architecture",
      "size": 20
    },
    {
      "id": "hidden-dependencies.md",
      "title": "Hidden Dependencies",
      "description": "Workarounds and patches create unexpected dependencies between system components that are not obvious from the code structure.",
      "category": "Architecture",
      "size": 17
    },
    {
      "id": "hidden-side-effects.md",
      "title": "Hidden Side Effects",
      "description": "Functions have undocumented side effects that modify state or trigger actions beyond their apparent purpose.",
      "category": "Architecture",
      "size": 14
    },
    {
      "id": "high-api-latency.md",
      "title": "High API Latency",
      "description": "The time it takes for an API to respond to a request is excessively long, leading to poor application performance and a negative user experience.",
      "category": "Performance",
      "size": 18
    },
    {
      "id": "high-bug-introduction-rate.md",
      "title": "High Bug Introduction Rate",
      "description": "A high rate of new bugs are introduced with every change to the codebase, indicating underlying quality issues.",
      "category": "Code",
      "size": 17
    },
    {
      "id": "high-client-side-resource-consumption.md",
      "title": "High Client-Side Resource Consumption",
      "description": "Client applications consume excessive CPU or memory, leading to sluggish performance and poor user experience.",
      "category": "Performance",
      "size": 10
    },
    {
      "id": "high-connection-count.md",
      "title": "High Connection Count",
      "description": "A large number of open database connections, even if idle, can consume significant memory resources and lead to connection rejections.",
      "category": "Code",
      "size": 13
    },
    {
      "id": "high-coupling-low-cohesion.md",
      "title": "High Coupling and Low Cohesion",
      "description": "Software components are overly dependent on each other and perform too many unrelated functions, making the system difficult to change and understand.",
      "category": "Architecture",
      "size": 20
    },
    {
      "id": "high-database-resource-utilization.md",
      "title": "High Database Resource Utilization",
      "description": "The database server consistently operates with high CPU or memory usage, risking instability and slowing down all dependent services.",
      "category": "Code",
      "size": 12
    },
    {
      "id": "high-defect-rate-in-production.md",
      "title": "High Defect Rate in Production",
      "description": "A large number of bugs are discovered in the live environment after a release, indicating underlying issues in the development and quality assurance process.",
      "category": "Business",
      "size": 20
    },
    {
      "id": "high-maintenance-costs.md",
      "title": "High Maintenance Costs",
      "description": "A disproportionately large amount of the development budget and effort is consumed by maintaining the existing system rather than creating new value.",
      "category": "Business",
      "size": 14
    },
    {
      "id": "high-number-of-database-queries.md",
      "title": "High Number of Database Queries",
      "description": "A single user request triggers an unexpectedly large number of database queries, leading to performance degradation and increased database load.",
      "category": "Data",
      "size": 14
    },
    {
      "id": "high-resource-utilization-on-client.md",
      "title": "High Resource Utilization on Client",
      "description": "Client applications may consume excessive CPU or memory, leading to a poor user experience, especially on less powerful devices.",
      "category": "Performance",
      "size": 10
    },
    {
      "id": "high-technical-debt.md",
      "title": "High Technical Debt",
      "description": "Accumulation of design or implementation shortcuts that lead to increased costs and effort in the long run.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "high-turnover.md",
      "title": "High Turnover",
      "description": "New developers become frustrated and leave the team due to poor onboarding and system complexity.",
      "category": "Business",
      "size": 18
    },
    {
      "id": "history-of-failed-changes.md",
      "title": "History of Failed Changes",
      "description": "A past record of failed deployments or changes creates a culture of fear and resistance to future modifications.",
      "category": "Culture",
      "size": 15
    },
    {
      "id": "immature-delivery-strategy.md",
      "title": "Immature Delivery Strategy",
      "description": "Software rollout processes are improvised, inconsistent, or inadequately planned, increasing downtime and user confusion.",
      "category": "Operations",
      "size": 13
    },
    {
      "id": "imperative-data-fetching-logic.md",
      "title": "Imperative Data Fetching Logic",
      "description": "The application code is written in a way that fetches data in a loop, rather than using a more efficient, declarative approach, leading to performance problems.",
      "category": "Architecture",
      "size": 13
    },
    {
      "id": "implementation-rework.md",
      "title": "Implementation Rework",
      "description": "Features must be rebuilt when initial understanding proves incorrect, wasting development effort and delaying delivery.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "implementation-starts-without-design.md",
      "title": "Implementation Starts Without Design",
      "description": "Development begins with unclear structure, leading to disorganized code and architectural drift",
      "category": "Architecture",
      "size": 20
    },
    {
      "id": "implicit-knowledge.md",
      "title": "Implicit Knowledge",
      "description": "Critical system knowledge exists as unwritten assumptions, tribal knowledge, and undocumented practices rather than being explicitly captured.",
      "category": "Communication",
      "size": 17
    },
    {
      "id": "improper-event-listener-management.md",
      "title": "Improper Event Listener Management",
      "description": "Event listeners are added but not removed when associated objects are destroyed, creating memory leaks and preventing garbage collection.",
      "category": "Architecture",
      "size": 13
    },
    {
      "id": "inability-to-innovate.md",
      "title": "Inability to Innovate",
      "description": "The team is so bogged down in day-to-day maintenance tasks that they have no time to think about future improvements or new approaches.",
      "category": "Management",
      "size": 12
    },
    {
      "id": "inadequate-code-reviews.md",
      "title": "Review Process Breakdown",
      "description": "Code reviews are not consistently performed, are rushed, superficial, or fail to identify critical issues, leading to lower code quality and increased risk.",
      "category": "Code",
      "size": 18
    },
    {
      "id": "inadequate-configuration-management.md",
      "title": "Inadequate Configuration Management",
      "description": "Versions of code, data, or infrastructure are not tracked properly, leading to errors or rollback issues",
      "category": "Code",
      "size": 20
    },
    {
      "id": "inadequate-error-handling.md",
      "title": "Inadequate Error Handling",
      "description": "Poor error handling mechanisms fail to gracefully manage exceptions, leading to application crashes and poor user experiences.",
      "category": "Code",
      "size": 12
    },
    {
      "id": "inadequate-initial-reviews.md",
      "title": "Inadequate Initial Reviews",
      "description": "First-round code reviews are incomplete or superficial, failing to identify important issues that are discovered in later review rounds.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "inadequate-integration-tests.md",
      "title": "Inadequate Integration Tests",
      "description": "The interactions between different modules or services are not thoroughly tested, leading to integration failures.",
      "category": "Architecture",
      "size": 12
    },
    {
      "id": "inadequate-mentoring-structure.md",
      "title": "Inadequate Mentoring Structure",
      "description": "The organization lacks a systematic approach to mentoring new developers, leading to inconsistent guidance and support.",
      "category": "Communication",
      "size": 17
    },
    {
      "id": "inadequate-onboarding.md",
      "title": "Inadequate Onboarding",
      "description": "New users struggle to understand how to use the application, leading to early abandonment.",
      "category": "Business",
      "size": 20
    },
    {
      "id": "inadequate-requirements-gathering.md",
      "title": "Inadequate Requirements Gathering",
      "description": "Insufficient analysis and documentation of requirements leads to building solutions that don't meet actual needs.",
      "category": "Process",
      "size": 17
    },
    {
      "id": "inadequate-test-data-management.md",
      "title": "Inadequate Test Data Management",
      "description": "The use of unrealistic, outdated, or insufficient test data leads to tests that do not accurately reflect real-world scenarios.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "inadequate-test-infrastructure.md",
      "title": "Inadequate Test Infrastructure",
      "description": "Missing tools, environments, or automation make thorough testing slow or impossible",
      "category": "Code",
      "size": 20
    },
    {
      "id": "inappropriate-skillset.md",
      "title": "Inappropriate Skillset",
      "description": "Team members lack essential knowledge or experience needed for their assigned roles and responsibilities.",
      "category": "Culture",
      "size": 14
    },
    {
      "id": "incomplete-knowledge.md",
      "title": "Incomplete Knowledge",
      "description": "Developers are unaware of all the locations where similar logic exists, which can lead to synchronization problems and other issues.",
      "category": "Communication",
      "size": 16
    },
    {
      "id": "incomplete-projects.md",
      "title": "Incomplete Projects",
      "description": "Features are started but never finished due to shifting priorities, leading to a great deal of wasted effort and a sense of frustration for the development team.",
      "category": "Process",
      "size": 15
    },
    {
      "id": "inconsistent-behavior.md",
      "title": "Inconsistent Behavior",
      "description": "The same business process produces different outcomes depending on where it's triggered, leading to a confusing and unpredictable user experience.",
      "category": "Code",
      "size": 16
    },
    {
      "id": "inconsistent-codebase.md",
      "title": "Inconsistent Codebase",
      "description": "The project's code lacks uniform style, coding standards, and design patterns, making it difficult to read, maintain, and onboard new developers.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "inconsistent-coding-standards.md",
      "title": "Inconsistent Coding Standards",
      "description": "Lack of uniform coding standards across the codebase creates maintenance difficulties and reduces code readability and quality.",
      "category": "Code",
      "size": 13
    },
    {
      "id": "inconsistent-execution.md",
      "title": "Inconsistent Execution",
      "description": "Manual processes lead to variations in how tasks are completed across team members and over time, creating unpredictable outcomes.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "inconsistent-knowledge-acquisition.md",
      "title": "Inconsistent Knowledge Acquisition",
      "description": "New team members learn different aspects and depths of system knowledge depending on their mentor or learning path, creating uneven skill distribution.",
      "category": "Communication",
      "size": 15
    },
    {
      "id": "inconsistent-naming-conventions.md",
      "title": "Inconsistent Naming Conventions",
      "description": "Unstructured or conflicting names make code harder to read, navigate, and maintain",
      "category": "Code",
      "size": 20
    },
    {
      "id": "inconsistent-onboarding-experience.md",
      "title": "Inconsistent Onboarding Experience",
      "description": "New team members receive dramatically different onboarding experiences depending on who is available to help them, creating unequal outcomes.",
      "category": "Communication",
      "size": 12
    },
    {
      "id": "inconsistent-quality.md",
      "title": "Inconsistent Quality",
      "description": "Some parts of the system are well-maintained while others deteriorate, creating unpredictable user experiences and maintenance challenges.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "incorrect-index-type.md",
      "title": "Incorrect Index Type",
      "description": "Using an inappropriate type of database index for a given query pattern, leading to inefficient data retrieval.",
      "category": "Performance",
      "size": 12
    },
    {
      "id": "incorrect-max-connection-pool-size.md",
      "title": "Incorrect Max Connection Pool Size",
      "description": "The maximum number of connections in a database connection pool is set incorrectly, leading to either wasted resources or connection exhaustion.",
      "category": "Code",
      "size": 13
    },
    {
      "id": "increased-bug-count.md",
      "title": "Increased Bug Count",
      "description": "Changes introduce new defects more frequently, leading to a higher defect rate in production and degraded software quality.",
      "category": "Code",
      "size": 13
    },
    {
      "id": "increased-cognitive-load.md",
      "title": "Increased Cognitive Load",
      "description": "Developers must expend excessive mental energy to understand and work with inconsistent, complex, or poorly structured code.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "increased-cost-of-development.md",
      "title": "Increased Cost of Development",
      "description": "The cost of fixing bugs and maintaining poor code is significantly higher than preventing issues initially.",
      "category": "Business",
      "size": 10
    },
    {
      "id": "increased-customer-support-load.md",
      "title": "Increased Customer Support Load",
      "description": "Users contact support more frequently due to frustration or inability to complete tasks.",
      "category": "Business",
      "size": 10
    },
    {
      "id": "increased-error-rates.md",
      "title": "Increased Error Rates",
      "description": "An unusual or sustained rise in the frequency of errors reported by an application or service.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "increased-manual-testing-effort.md",
      "title": "Increased Manual Testing Effort",
      "description": "A disproportionate amount of time is spent on manual testing due to a lack of automation.",
      "category": "Process",
      "size": 13
    },
    {
      "id": "increased-manual-work.md",
      "title": "Increased Manual Work",
      "description": "Developers spend time on repetitive tasks that should be automated, reducing time available for actual development work.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "increased-risk-of-bugs.md",
      "title": "Increased Risk of Bugs",
      "description": "Code complexity and lack of clarity make it more likely that developers will introduce defects when making changes.",
      "category": "Code",
      "size": 12
    },
    {
      "id": "increased-stress-and-burnout.md",
      "title": "Increased Stress and Burnout",
      "description": "Team members are overworked and stressed due to unrealistic expectations and time pressure, leading to decreased morale and productivity.",
      "category": "Culture",
      "size": 12
    },
    {
      "id": "increased-technical-shortcuts.md",
      "title": "Increased Technical Shortcuts",
      "description": "Pressure to deliver leads to more quick fixes and workarounds instead of proper solutions, creating future maintenance problems.",
      "category": "Code",
      "size": 15
    },
    {
      "id": "increased-time-to-market.md",
      "title": "Increased Time to Market",
      "description": "It takes longer to get new features and products to market, potentially resulting in loss of competitive advantage and revenue opportunities.",
      "category": "Business",
      "size": 10
    },
    {
      "id": "increasing-brittleness.md",
      "title": "Increasing Brittleness",
      "description": "Software systems become more fragile and prone to breaking over time, with small changes having unpredictable and widespread effects.",
      "category": "Architecture",
      "size": 13
    },
    {
      "id": "index-fragmentation.md",
      "title": "Index Fragmentation",
      "description": "Over time, as data is inserted, updated, and deleted, database indexes become disorganized, reducing their efficiency.",
      "category": "Data",
      "size": 12
    },
    {
      "id": "individual-recognition-culture.md",
      "title": "Individual Recognition Culture",
      "description": "A culture where individual accomplishments are valued more than team accomplishments.",
      "category": "Process",
      "size": 19
    },
    {
      "id": "inefficient-code.md",
      "title": "Inefficient Code",
      "description": "The code responsible for handling a request is computationally expensive or contains performance bottlenecks.",
      "category": "Performance",
      "size": 20
    },
    {
      "id": "inefficient-database-indexing.md",
      "title": "Inefficient Database Indexing",
      "description": "The database lacks appropriate indexes for common query patterns, forcing slow, full-table scans for data retrieval operations.",
      "category": "Data",
      "size": 13
    },
    {
      "id": "inefficient-development-environment.md",
      "title": "Inefficient Development Environment",
      "description": "The team is slowed down by a slow and cumbersome development environment",
      "category": "Code",
      "size": 20
    },
    {
      "id": "inefficient-frontend-code.md",
      "title": "Inefficient Frontend Code",
      "description": "Unoptimized JavaScript, excessive DOM manipulation, or complex CSS animations that are computationally expensive.",
      "category": "Code",
      "size": 13
    },
    {
      "id": "inefficient-processes.md",
      "title": "Inefficient Processes",
      "description": "Poor workflows, excessive meetings, or bureaucratic procedures waste development time and reduce team productivity.",
      "category": "Management",
      "size": 19
    },
    {
      "id": "inexperienced-developers.md",
      "title": "Inexperienced Developers",
      "description": "Development team lacks the knowledge and experience to implement best practices and maintainable solutions.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "information-decay.md",
      "title": "Information Decay",
      "description": "System documentation becomes outdated, inaccurate, or incomplete over time, making it unreliable for decision-making and system understanding.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "information-fragmentation.md",
      "title": "Information Fragmentation",
      "description": "Critical system knowledge is scattered across multiple locations and formats, making it difficult to find and maintain.",
      "category": "Communication",
      "size": 17
    },
    {
      "id": "insecure-data-transmission.md",
      "title": "Insecure Data Transmission",
      "description": "Sensitive data transmitted without proper encryption or security controls, exposing it to interception and unauthorized access.",
      "category": "Performance",
      "size": 10
    },
    {
      "id": "insufficient-audit-logging.md",
      "title": "Insufficient Audit Logging",
      "description": "Inadequate logging of security-relevant events makes it difficult to detect breaches, investigate incidents, or maintain compliance.",
      "category": "Code",
      "size": 10
    },
    {
      "id": "insufficient-code-review.md",
      "title": "Review Process Breakdown",
      "description": "Code review processes fail to catch design flaws, bugs, or quality issues due to inadequate depth, time, or expertise.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "insufficient-design-skills.md",
      "title": "Insufficient Design Skills",
      "description": "The development team lacks the necessary skills and experience to design and build well-structured, maintainable software.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "insufficient-testing.md",
      "title": "Quality Blind Spots",
      "description": "The testing process is not comprehensive enough, leading to a high defect rate in production.",
      "category": "Code",
      "size": 16
    },
    {
      "id": "insufficient-worker-capacity.md",
      "title": "Insufficient Worker Capacity",
      "description": "There are not enough worker processes or threads to handle the incoming volume of tasks in an asynchronous system, leading to growing queues.",
      "category": "Code",
      "size": 13
    },
    {
      "id": "integer-overflow-underflow.md",
      "title": "Integer Overflow and Underflow",
      "description": "Arithmetic operations produce results that exceed the maximum or minimum values representable by integer data types, leading to unexpected behavior.",
      "category": "Code",
      "size": 15
    },
    {
      "id": "integration-difficulties.md",
      "title": "Integration Difficulties",
      "description": "Connecting with modern services requires extensive workarounds due to architectural limitations or outdated integration patterns.",
      "category": "Architecture",
      "size": 10
    },
    {
      "id": "interrupt-overhead.md",
      "title": "Interrupt Overhead",
      "description": "Excessive hardware interrupts disrupt CPU execution flow, causing frequent context switches and reducing application performance.",
      "category": "Code",
      "size": 10
    },
    {
      "id": "invisible-nature-of-technical-debt.md",
      "title": "Invisible Nature of Technical Debt",
      "description": "The impact of technical debt is not visible to non-technical stakeholders, making it hard to justify addressing it and allocate resources for improvement.",
      "category": "Communication",
      "size": 16
    },
    {
      "id": "knowledge-dependency.md",
      "title": "Knowledge Dependency",
      "description": "Team members remain dependent on specific experienced individuals for knowledge and decision-making longer than appropriate for their role and tenure.",
      "category": "Communication",
      "size": 15
    },
    {
      "id": "knowledge-gaps.md",
      "title": "Knowledge Gaps",
      "description": "Lack of understanding about systems, business requirements, or technical domains leads to extended research time and suboptimal solutions.",
      "category": "Communication",
      "size": 20
    },
    {
      "id": "knowledge-sharing-breakdown.md",
      "title": "Knowledge Sharing Breakdown",
      "description": "The process of sharing knowledge and expertise among team members is ineffective, leading to information silos and reduced team learning.",
      "category": "Communication",
      "size": 16
    },
    {
      "id": "knowledge-silos.md",
      "title": "Knowledge Silos",
      "description": "Important research findings and expertise remain isolated to individual team members, preventing knowledge sharing and team learning.",
      "category": "Culture",
      "size": 20
    },
    {
      "id": "lack-of-ownership-and-accountability.md",
      "title": "Lack of Ownership and Accountability",
      "description": "No clear responsibility for maintaining code quality, documentation, or specific system components over time.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "language-barriers.md",
      "title": "Language Barriers",
      "description": "Differences in language or terminology hinder smooth communication and understanding within the team.",
      "category": "Communication",
      "size": 11
    },
    {
      "id": "large-estimates-for-small-changes.md",
      "title": "Large Estimates for Small Changes",
      "description": "The team consistently provides large time estimates for seemingly small changes, indicating underlying code complexity and risk.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "large-feature-scope.md",
      "title": "Large Feature Scope",
      "description": "Features are too large to be broken down into smaller, incremental changes, leading to long-lived branches and integration problems.",
      "category": "Code",
      "size": 13
    },
    {
      "id": "large-pull-requests.md",
      "title": "Large Pull Requests",
      "description": "Pull requests are too large to review effectively, leading to superficial reviews and missed issues.",
      "category": "Code",
      "size": 18
    },
    {
      "id": "large-risky-releases.md",
      "title": "Large, Risky Releases",
      "description": "Infrequent releases lead to large, complex deployments that are difficult to test, prone to failure, and have a significant impact on users when they go wrong.",
      "category": "Code",
      "size": 16
    },
    {
      "id": "lazy-loading.md",
      "title": "Lazy Loading",
      "description": "The use of lazy loading in an ORM framework leads to a large number of unnecessary database queries, which can significantly degrade application performance.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "legacy-api-versioning-nightmare.md",
      "title": "Legacy API Versioning Nightmare",
      "description": "Legacy systems with poorly designed APIs create versioning and backward compatibility challenges that compound over time",
      "category": "Architecture",
      "size": 20
    },
    {
      "id": "legacy-business-logic-extraction-difficulty.md",
      "title": "Legacy Business Logic Extraction Difficulty",
      "description": "Critical business rules are embedded deep within legacy code structures, making them nearly impossible to identify and extract",
      "category": "Architecture",
      "size": 20
    },
    {
      "id": "legacy-code-without-tests.md",
      "title": "Legacy Code Without Tests",
      "description": "Existing legacy systems often lack automated tests, making it challenging to add them incrementally and safely modify the code.",
      "category": "Code",
      "size": 18
    },
    {
      "id": "legacy-configuration-management-chaos.md",
      "title": "Legacy Configuration Management Chaos",
      "description": "Configuration settings are hardcoded, undocumented, or stored in proprietary formats that prevent modern deployment practices",
      "category": "Code",
      "size": 20
    },
    {
      "id": "legacy-skill-shortage.md",
      "title": "Legacy Skill Shortage",
      "description": "Critical shortage of developers with knowledge of legacy technologies creates bottlenecks and single points of failure for system maintenance",
      "category": "Management",
      "size": 20
    },
    {
      "id": "legacy-system-documentation-archaeology.md",
      "title": "Legacy System Documentation Archaeology",
      "description": "Critical system knowledge exists only in obsolete documentation formats, outdated diagrams, and departed employees' tribal knowledge",
      "category": "Communication",
      "size": 20
    },
    {
      "id": "legal-disputes.md",
      "title": "Legal Disputes",
      "description": "Conflicts over contracts, deliverables, or responsibilities escalate to legal proceedings, consuming resources and damaging relationships.",
      "category": "Dependencies",
      "size": 12
    },
    {
      "id": "limited-team-learning.md",
      "title": "Limited Team Learning",
      "description": "A situation where a team does not learn from its mistakes and does not improve over time.",
      "category": "Process",
      "size": 14
    },
    {
      "id": "load-balancing-problems.md",
      "title": "Load Balancing Problems",
      "description": "Load balancing mechanisms distribute traffic inefficiently or fail to adapt to changing conditions, causing performance issues and service instability.",
      "category": "Operations",
      "size": 11
    },
    {
      "id": "lock-contention.md",
      "title": "Lock Contention",
      "description": "Multiple threads compete for the same locks, causing threads to block and reducing parallel execution efficiency.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "log-injection-vulnerabilities.md",
      "title": "Log Injection Vulnerabilities",
      "description": "Unsanitized user input in log messages allows attackers to inject malicious content that can compromise log integrity or exploit log processing systems.",
      "category": "Code",
      "size": 10
    },
    {
      "id": "log-spam.md",
      "title": "Log Spam",
      "description": "The application or database logs are flooded with a large number of similar-looking queries, making it difficult to identify and diagnose other issues.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "logging-configuration-issues.md",
      "title": "Logging Configuration Issues",
      "description": "Improper logging configuration results in missing critical information, excessive log volume, or security vulnerabilities.",
      "category": "Code",
      "size": 10
    },
    {
      "id": "long-build-and-test-times.md",
      "title": "Long Build and Test Times",
      "description": "A situation where it takes a long time to build and test a system.",
      "category": "Process",
      "size": 14
    },
    {
      "id": "long-lived-feature-branches.md",
      "title": "Long-Lived Feature Branches",
      "description": "Code is not being reviewed and merged in a timely manner, leading to integration problems and increased risk.",
      "category": "Code",
      "size": 13
    },
    {
      "id": "long-release-cycles.md",
      "title": "Long Release Cycles",
      "description": "Releases are delayed due to prolonged manual testing phases or last-minute bug discoveries.",
      "category": "Management",
      "size": 12
    },
    {
      "id": "long-running-database-transactions.md",
      "title": "Long-Running Database Transactions",
      "description": "Database transactions remain open for extended periods, holding locks and consuming resources, which can block other operations.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "long-running-transactions.md",
      "title": "Long-Running Transactions",
      "description": "Database transactions that remain open for a long time can hold locks, consume resources, and block other operations.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "lower-code-quality.md",
      "title": "Lower Code Quality",
      "description": "Burned-out or rushed developers are more likely to make mistakes, leading to an increase in defects.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "maintenance-bottlenecks.md",
      "title": "Maintenance Bottlenecks",
      "description": "A situation where a small number of developers are the only ones who can make changes to a critical part of the system.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "maintenance-cost-increase.md",
      "title": "Maintenance Cost Increase",
      "description": "The resources required to maintain, support, and update software systems grow over time, consuming increasing portions of development budgets.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "maintenance-overhead.md",
      "title": "Maintenance Overhead",
      "description": "A disproportionate amount of time and effort is spent on maintaining the existing system, often due to duplicated code and a lack of reusable components.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "maintenance-paralysis.md",
      "title": "Maintenance Paralysis",
      "description": "Teams avoid necessary improvements because they cannot verify that changes don't break existing functionality.",
      "category": "Code",
      "size": 18
    },
    {
      "id": "manual-deployment-processes.md",
      "title": "Manual Deployment Processes",
      "description": "Releases require human intervention, increasing the chance for mistakes and inconsistencies",
      "category": "Code",
      "size": 20
    },
    {
      "id": "market-pressure.md",
      "title": "Market Pressure",
      "description": "External competitive forces or market conditions drive rushed decisions, scope changes, and unrealistic expectations.",
      "category": "Business",
      "size": 17
    },
    {
      "id": "memory-barrier-inefficiency.md",
      "title": "Memory Barrier Inefficiency",
      "description": "Excessive or incorrectly placed memory barriers disrupt CPU pipeline optimization and reduce performance in multi-threaded applications.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "memory-fragmentation.md",
      "title": "Memory Fragmentation",
      "description": "Available memory becomes divided into small, non-contiguous blocks, preventing allocation of larger objects despite sufficient total free memory.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "memory-leaks.md",
      "title": "Memory Leaks",
      "description": "Applications fail to release memory that is no longer needed, leading to gradual memory consumption and eventual performance degradation or crashes.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "memory-swapping.md",
      "title": "Memory Swapping",
      "description": "The database server runs out of physical memory and starts using disk swap space, which dramatically slows down performance.",
      "category": "Performance",
      "size": 12
    },
    {
      "id": "mental-fatigue.md",
      "title": "Mental Fatigue",
      "description": "Developers report feeling exhausted and mentally drained without accomplishing significant work, often due to cognitive overhead and inefficient workflows.",
      "category": "Culture",
      "size": 14
    },
    {
      "id": "mentor-burnout.md",
      "title": "Mentor Burnout",
      "description": "Experienced team members become overwhelmed and exhausted from excessive mentoring and knowledge transfer responsibilities.",
      "category": "Culture",
      "size": 15
    },
    {
      "id": "merge-conflicts.md",
      "title": "Merge Conflicts",
      "description": "Multiple developers frequently modify the same large functions or files, creating version control conflicts that slow development.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "micromanagement-culture.md",
      "title": "Micromanagement Culture",
      "description": "Management culture that requires approval for routine decisions, reducing team autonomy and creating unnecessary bottlenecks.",
      "category": "Culture",
      "size": 18
    },
    {
      "id": "microservice-communication-overhead.md",
      "title": "Microservice Communication Overhead",
      "description": "Excessive network communication between microservices creates latency, reduces reliability, and impacts overall system performance.",
      "category": "Architecture",
      "size": 10
    },
    {
      "id": "misaligned-deliverables.md",
      "title": "Misaligned Deliverables",
      "description": "The delivered product or feature does not match the expectations or requirements of the stakeholders.",
      "category": "Communication",
      "size": 14
    },
    {
      "id": "misconfigured-connection-pools.md",
      "title": "Misconfigured Connection Pools",
      "description": "Application connection pools are improperly set up, leading to inefficient resource utilization or connection exhaustion.",
      "category": "Code",
      "size": 13
    },
    {
      "id": "missed-deadlines.md",
      "title": "Missed Deadlines",
      "description": "Projects regularly exceed their estimated completion times and teams consistently fail to meet sprint goals and delivery commitments.",
      "category": "Business",
      "size": 17
    },
    {
      "id": "missing-end-to-end-tests.md",
      "title": "System Integration Blindness",
      "description": "Complete user flows are not tested from start to finish, allowing workflow-breaking bugs to reach production.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "missing-rollback-strategy.md",
      "title": "Deployment Risk",
      "description": "There's no tested method to undo a deployment if things go wrong, increasing risk",
      "category": "Code",
      "size": 20
    },
    {
      "id": "misunderstanding-of-oop.md",
      "title": "Misunderstanding of OOP",
      "description": "A lack of understanding of the fundamental principles of object-oriented programming can lead to the creation of poorly designed and difficult-to-maintain code.",
      "category": "Architecture",
      "size": 17
    },
    {
      "id": "mixed-coding-styles.md",
      "title": "Mixed Coding Styles",
      "description": "A situation where different parts of the codebase use different formatting, naming conventions, and design patterns.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "modernization-roi-justification-failure.md",
      "title": "Modernization ROI Justification Failure",
      "description": "Unable to build compelling business cases for legacy modernization due to hidden technical debt and unclear benefit quantification",
      "category": "Business",
      "size": 20
    },
    {
      "id": "modernization-strategy-paralysis.md",
      "title": "Modernization Strategy Paralysis",
      "description": "Teams become overwhelmed by modernization options (rewrite, refactor, replace, retire) and fail to make decisions, leaving systems in limbo",
      "category": "Management",
      "size": 20
    },
    {
      "id": "monitoring-gaps.md",
      "title": "Monitoring Gaps",
      "description": "Insufficient production monitoring and observability make it difficult to detect and diagnose issues in a timely manner, leading to longer outages and more severe consequences.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "monolithic-architecture-constraints.md",
      "title": "Monolithic Architecture Constraints",
      "description": "Large monolithic codebases become difficult to maintain, scale, and deploy as they grow in size and complexity.",
      "category": "Architecture",
      "size": 20
    },
    {
      "id": "monolithic-functions-and-classes.md",
      "title": "Monolithic Functions and Classes",
      "description": "Individual functions or classes perform too many unrelated responsibilities, making them difficult to understand and modify.",
      "category": "Architecture",
      "size": 17
    },
    {
      "id": "n-plus-one-query-problem.md",
      "title": "N+1 Query Problem",
      "description": "An application makes numerous unnecessary database calls to fetch related data where a single, more efficient query would suffice, causing significant performance degradation.",
      "category": "Data",
      "size": 18
    },
    {
      "id": "negative-brand-perception.md",
      "title": "Negative Brand Perception",
      "description": "Users associate the brand with poor quality or unreliability due to technical problems.",
      "category": "Business",
      "size": 10
    },
    {
      "id": "negative-user-feedback.md",
      "title": "Negative User Feedback",
      "description": "Users complain about slow loading times, application freezes, or other issues, indicating dissatisfaction with the application's performance or usability.",
      "category": "Business",
      "size": 12
    },
    {
      "id": "network-latency.md",
      "title": "Network Latency",
      "description": "Delays in data transmission across the network significantly increase response times and impact application performance.",
      "category": "Performance",
      "size": 19
    },
    {
      "id": "new-hire-frustration.md",
      "title": "New Hire Frustration",
      "description": "Recently hired developers experience significant frustration due to barriers preventing them from contributing effectively to the team.",
      "category": "Culture",
      "size": 13
    },
    {
      "id": "nitpicking-culture.md",
      "title": "Nitpicking Culture",
      "description": "Code reviews focus excessively on minor, insignificant details while overlooking important design and functionality issues.",
      "category": "Culture",
      "size": 18
    },
    {
      "id": "no-continuous-feedback-loop.md",
      "title": "Feedback Isolation",
      "description": "Stakeholders are not involved throughout the development process, and feedback is only gathered at the very end, leading to misaligned deliverables.",
      "category": "Communication",
      "size": 11
    },
    {
      "id": "no-formal-change-control-process.md",
      "title": "No Formal Change Control Process",
      "description": "Changes to project scope or requirements are not formally evaluated or approved, leading to uncontrolled scope creep and project delays.",
      "category": "Process",
      "size": 12
    },
    {
      "id": "null-pointer-dereferences.md",
      "title": "Null Pointer Dereferences",
      "description": "Programs attempt to access memory through null or invalid pointers, causing crashes and potential security vulnerabilities.",
      "category": "Code",
      "size": 13
    },
    {
      "id": "obsolete-technologies.md",
      "title": "Obsolete Technologies",
      "description": "The system relies on outdated tools, frameworks, or languages that make modern development practices difficult to implement.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "operational-overhead.md",
      "title": "Operational Overhead",
      "description": "A significant amount of time and resources are spent on emergency response and firefighting, rather than on planned development and innovation.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "organizational-structure-mismatch.md",
      "title": "Organizational Structure Mismatch",
      "description": "A situation where the structure of the organization does not match the architecture of the system.",
      "category": "Architecture",
      "size": 16
    },
    {
      "id": "outdated-tests.md",
      "title": "Outdated Tests",
      "description": "Tests are not updated when the code changes, leading to false positives or negatives and reduced confidence.",
      "category": "Code",
      "size": 13
    },
    {
      "id": "over-reliance-on-utility-classes.md",
      "title": "Over-Reliance on Utility Classes",
      "description": "The excessive use of utility classes with static methods can lead to a procedural style of programming and a lack of proper object-oriented design.",
      "category": "Architecture",
      "size": 14
    },
    {
      "id": "overworked-teams.md",
      "title": "Overworked Teams",
      "description": "High workloads lead to burnout, mistakes, and long-term drops in quality and productivity.",
      "category": "Culture",
      "size": 16
    },
    {
      "id": "partial-bug-fixes.md",
      "title": "Partial Bug Fixes",
      "description": "Issues appear to be resolved but resurface in different contexts because the fix was not applied to all instances of the duplicated code.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "password-security-weaknesses.md",
      "title": "Password Security Weaknesses",
      "description": "Weak password policies, inadequate storage mechanisms, and poor authentication practices create security vulnerabilities.",
      "category": "Security",
      "size": 11
    },
    {
      "id": "past-negative-experiences.md",
      "title": "Past Negative Experiences",
      "description": "A situation where developers are hesitant to make changes to the codebase because of negative experiences in the past.",
      "category": "Process",
      "size": 16
    },
    {
      "id": "perfectionist-culture.md",
      "title": "Perfectionist Culture",
      "description": "A culture of perfectionism and a reluctance to release anything that is not 100% perfect can lead to analysis paralysis and long release cycles.",
      "category": "Culture",
      "size": 20
    },
    {
      "id": "perfectionist-review-culture.md",
      "title": "Perfectionist Review Culture",
      "description": "Team culture emphasizes making code perfect through reviews rather than focusing on meaningful improvements, leading to excessive revision cycles.",
      "category": "Culture",
      "size": 16
    },
    {
      "id": "planning-credibility-issues.md",
      "title": "Planning Credibility Issues",
      "description": "Future estimates and plans are questioned or ignored due to history of inaccurate predictions and missed commitments.",
      "category": "Business",
      "size": 11
    },
    {
      "id": "planning-dysfunction.md",
      "title": "Planning Dysfunction",
      "description": "Project planning processes fail to create realistic timelines, allocate resources effectively, or account for project complexities and risks.",
      "category": "Process",
      "size": 20
    },
    {
      "id": "poor-caching-strategy.md",
      "title": "Poor Caching Strategy",
      "description": "Data that could be cached is fetched from the source on every request, adding unnecessary overhead and increasing latency.",
      "category": "Performance",
      "size": 15
    },
    {
      "id": "poor-communication.md",
      "title": "Communication Breakdown",
      "description": "Collaboration breaks down as developers become isolated and less willing to engage with peers.",
      "category": "Communication",
      "size": 14
    },
    {
      "id": "poor-contract-design.md",
      "title": "Poor Contract Design",
      "description": "Legal agreements and contracts don't reflect project realities, technical requirements, or allow for necessary flexibility during development.",
      "category": "Management",
      "size": 18
    },
    {
      "id": "poor-documentation.md",
      "title": "Information Decay",
      "description": "System documentation is outdated, incomplete, inaccurate, or difficult to find and use effectively.",
      "category": "Code",
      "size": 15
    },
    {
      "id": "poor-domain-model.md",
      "title": "Poor Domain Model",
      "description": "Core business concepts are poorly understood or reflected in the system, leading to fragile logic and miscommunication",
      "category": "Architecture",
      "size": 20
    },
    {
      "id": "poor-encapsulation.md",
      "title": "Poor Encapsulation",
      "description": "Data and the behavior that acts on that data are not bundled together in a single, cohesive unit, leading to a lack of data hiding and a high degree of coupling.",
      "category": "Architecture",
      "size": 17
    },
    {
      "id": "poor-interfaces-between-applications.md",
      "title": "Poor Interfaces Between Applications",
      "description": "Disconnected or poorly defined interfaces lead to fragile integrations and inconsistent data",
      "category": "Architecture",
      "size": 20
    },
    {
      "id": "poor-naming-conventions.md",
      "title": "Poor Naming Conventions",
      "description": "Variables, functions, classes, and other code elements are named in ways that don't clearly communicate their purpose or meaning.",
      "category": "Code",
      "size": 15
    },
    {
      "id": "poor-operational-concept.md",
      "title": "Poor Operational Concept",
      "description": "Lack of planning for monitoring, maintenance, or support leads to post-launch instability",
      "category": "Operations",
      "size": 20
    },
    {
      "id": "poor-planning.md",
      "title": "Poor Planning",
      "description": "Teams do not have clear plans or realistic estimates of the work involved, leading to project delays and resource allocation problems.",
      "category": "Management",
      "size": 16
    },
    {
      "id": "poor-project-control.md",
      "title": "Poor Project Control",
      "description": "Project progress is not monitored effectively, allowing problems to go unnoticed until recovery becomes difficult or impossible.",
      "category": "Management",
      "size": 15
    },
    {
      "id": "poor-system-environment.md",
      "title": "Poor System Environment",
      "description": "The system is deployed in an unstable, misconfigured, or unsuitable environment that causes outages, performance issues, and operational difficulties.",
      "category": "Operations",
      "size": 14
    },
    {
      "id": "poor-teamwork.md",
      "title": "Team Dysfunction",
      "description": "Team members work in isolation, resist collaboration, or lack mutual respect, reducing overall effectiveness.",
      "category": "Communication",
      "size": 14
    },
    {
      "id": "poor-test-coverage.md",
      "title": "Poor Test Coverage",
      "description": "Critical parts of the codebase are not covered by tests, creating blind spots in quality assurance.",
      "category": "Code",
      "size": 18
    },
    {
      "id": "poor-user-experience-ux-design.md",
      "title": "Poor User Experience (UX) Design",
      "description": "The application is difficult to use, confusing, or does not meet user needs.",
      "category": "Architecture",
      "size": 19
    },
    {
      "id": "poorly-defined-responsibilities.md",
      "title": "Poorly Defined Responsibilities",
      "description": "Modules or classes are not designed with a single, clear responsibility, leading to confusion and tight coupling.",
      "category": "Architecture",
      "size": 18
    },
    {
      "id": "power-struggles.md",
      "title": "Power Struggles",
      "description": "Internal conflicts between departments or managers interfere with decision-making and project progress.",
      "category": "Management",
      "size": 13
    },
    {
      "id": "premature-technology-introduction.md",
      "title": "Premature Technology Introduction",
      "description": "New frameworks, tools, or platforms are introduced without proper evaluation, adding risk and learning overhead to projects.",
      "category": "Code",
      "size": 15
    },
    {
      "id": "priority-thrashing.md",
      "title": "Priority Thrashing",
      "description": "Work priorities change frequently and unexpectedly, causing constant task switching and disrupting planned work flow.",
      "category": "Process",
      "size": 13
    },
    {
      "id": "procedural-background.md",
      "title": "Procedural Background",
      "description": "Developers with a background in procedural programming may struggle to adapt to an object-oriented way of thinking, leading to the creation of procedural-style code in an object-oriented language.",
      "category": "Architecture",
      "size": 16
    },
    {
      "id": "procedural-programming-in-oop-languages.md",
      "title": "Procedural Programming in OOP Languages",
      "description": "Code is written in a procedural style within object-oriented languages, leading to large, monolithic functions and poor encapsulation.",
      "category": "Architecture",
      "size": 20
    },
    {
      "id": "process-design-flaws.md",
      "title": "Process Design Flaws",
      "description": "Development processes are poorly designed, creating inefficiencies, bottlenecks, and obstacles to productive work.",
      "category": "Architecture",
      "size": 16
    },
    {
      "id": "procrastination-on-complex-tasks.md",
      "title": "Procrastination on Complex Tasks",
      "description": "Difficult or cognitively demanding work is consistently postponed in favor of easier, more immediately gratifying tasks.",
      "category": "Culture",
      "size": 13
    },
    {
      "id": "product-direction-chaos.md",
      "title": "Product Direction Chaos",
      "description": "Multiple stakeholders provide conflicting priorities without clear product leadership, causing team confusion and wasted effort.",
      "category": "Business",
      "size": 20
    },
    {
      "id": "project-authority-vacuum.md",
      "title": "Project Authority Vacuum",
      "description": "Critical projects lack sufficient organizational backing and executive sponsorship to overcome resistance and secure resources.",
      "category": "Management",
      "size": 16
    },
    {
      "id": "project-resource-constraints.md",
      "title": "Project Resource Constraints",
      "description": "Projects cannot obtain necessary budget, personnel, or organizational resources due to poor planning or competing priorities.",
      "category": "Management",
      "size": 17
    },
    {
      "id": "quality-blind-spots.md",
      "title": "Quality Blind Spots",
      "description": "Critical system behaviors and failure modes remain undetected due to gaps in testing coverage and verification practices.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "quality-compromises.md",
      "title": "Quality Compromises",
      "description": "Quality standards are deliberately lowered or shortcuts are taken to meet deadlines, budgets, or other constraints, creating long-term problems.",
      "category": "Code",
      "size": 16
    },
    {
      "id": "quality-degradation.md",
      "title": "Quality Degradation",
      "description": "System quality decreases over time due to accumulating technical debt, shortcuts, and insufficient quality practices.",
      "category": "Code",
      "size": 16
    },
    {
      "id": "queries-that-prevent-index-usage.md",
      "title": "Queries That Prevent Index Usage",
      "description": "The way a query is written can prevent the database from using an available index, forcing slower full-table scans or less efficient index scans.",
      "category": "Performance",
      "size": 11
    },
    {
      "id": "race-conditions.md",
      "title": "Race Conditions",
      "description": "Multiple threads access shared resources simultaneously without proper synchronization, leading to unpredictable behavior and data corruption.",
      "category": "Code",
      "size": 15
    },
    {
      "id": "rapid-prototyping-becoming-production.md",
      "title": "Rapid Prototyping Becoming Production",
      "description": "Code written quickly for prototypes or proof-of-concepts ends up in production systems without proper engineering practices.",
      "category": "Architecture",
      "size": 14
    },
    {
      "id": "rapid-system-changes.md",
      "title": "Rapid System Changes",
      "description": "Frequent modifications to system architecture, APIs, or core functionality outpace documentation and team understanding.",
      "category": "Communication",
      "size": 16
    },
    {
      "id": "rapid-team-growth.md",
      "title": "Rapid Team Growth",
      "description": "Teams expand in size quickly without adequate preparation, overwhelming existing infrastructure and support systems.",
      "category": "Management",
      "size": 14
    },
    {
      "id": "rate-limiting-issues.md",
      "title": "Rate Limiting Issues",
      "description": "Rate limiting mechanisms are misconfigured, too restrictive, or ineffective, causing legitimate requests to be blocked or failing to prevent abuse.",
      "category": "Architecture",
      "size": 10
    },
    {
      "id": "reduced-code-submission-frequency.md",
      "title": "Reduced Code Submission Frequency",
      "description": "Developers batch multiple changes together or delay submissions to avoid frequent code review cycles, reducing feedback quality and integration frequency.",
      "category": "Process",
      "size": 11
    },
    {
      "id": "reduced-feature-quality.md",
      "title": "Reduced Feature Quality",
      "description": "Less time is available for polish and refinement of delivered features, resulting in lower-quality user experiences and functionality.",
      "category": "Code",
      "size": 12
    },
    {
      "id": "reduced-individual-productivity.md",
      "title": "Reduced Individual Productivity",
      "description": "Individual developers complete fewer tasks and take longer to resolve problems despite maintaining the same work effort.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "reduced-innovation.md",
      "title": "Reduced Innovation",
      "description": "Teams become resistant to new ideas and focus only on the bare minimum to get by.",
      "category": "Business",
      "size": 11
    },
    {
      "id": "reduced-predictability.md",
      "title": "Reduced Predictability",
      "description": "Development timelines, outcomes, and system behavior become difficult to predict accurately, making planning and expectations management challenging.",
      "category": "Management",
      "size": 12
    },
    {
      "id": "reduced-review-participation.md",
      "title": "Reduced Review Participation",
      "description": "Many team members avoid participating in code reviews, concentrating review burden on a few individuals and reducing coverage.",
      "category": "Process",
      "size": 14
    },
    {
      "id": "reduced-team-flexibility.md",
      "title": "Reduced Team Flexibility",
      "description": "The team's ability to adapt to changing requirements, reassign work, or respond to unexpected challenges is significantly limited.",
      "category": "Dependencies",
      "size": 12
    },
    {
      "id": "reduced-team-productivity.md",
      "title": "Reduced Team Productivity",
      "description": "The overall output and effectiveness of the development team decreases due to various systemic issues and inefficiencies.",
      "category": "Performance",
      "size": 15
    },
    {
      "id": "refactoring-avoidance.md",
      "title": "Refactoring Avoidance",
      "description": "The development team actively avoids refactoring the codebase, even when they acknowledge it's necessary, due to fear of introducing new bugs.",
      "category": "Code",
      "size": 16
    },
    {
      "id": "regression-bugs.md",
      "title": "Regression Bugs",
      "description": "New features or fixes inadvertently break existing functionality that was previously working correctly.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "regulatory-compliance-drift.md",
      "title": "Regulatory Compliance Drift",
      "description": "Legacy systems fall behind evolving regulatory requirements, creating compliance gaps that are expensive and risky to address",
      "category": "Management",
      "size": 20
    },
    {
      "id": "release-anxiety.md",
      "title": "Release Anxiety",
      "description": "The development team is anxious and stressed about deployments due to the high risk of failure and the pressure to get it right.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "release-instability.md",
      "title": "Release Instability",
      "description": "Production releases are frequently unstable, causing disruptions for users and requiring immediate attention from the development team.",
      "category": "Code",
      "size": 18
    },
    {
      "id": "requirements-ambiguity.md",
      "title": "Requirements Ambiguity",
      "description": "System requirements are unclear, incomplete, or open to multiple interpretations, leading to misaligned implementations and rework.",
      "category": "Communication",
      "size": 16
    },
    {
      "id": "resistance-to-change.md",
      "title": "Resistance to Change",
      "description": "Teams are hesitant to refactor or improve parts of the system due to perceived risk and effort, leading to stagnation.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "resource-allocation-failures.md",
      "title": "Resource Allocation Failures",
      "description": "Objects, connections, file handles, or other system resources are allocated but never properly deallocated or closed, leading to resource exhaustion.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "resource-contention.md",
      "title": "Resource Contention",
      "description": "The server is overloaded, and the application is competing for limited resources like CPU, memory, or I/O.",
      "category": "Code",
      "size": 18
    },
    {
      "id": "resource-waste.md",
      "title": "Resource Waste",
      "description": "Available resources are not utilized effectively, leading to underutilization while other areas remain constrained or overloaded.",
      "category": "Performance",
      "size": 11
    },
    {
      "id": "rest-api-design-issues.md",
      "title": "REST API Design Issues",
      "description": "Poor REST API design violates REST principles, creates usability problems, and leads to inefficient client-server interactions.",
      "category": "Architecture",
      "size": 10
    },
    {
      "id": "review-bottlenecks.md",
      "title": "Review Bottlenecks",
      "description": "The code review process becomes a significant bottleneck, delaying the delivery of new features and bug fixes.",
      "category": "Process",
      "size": 16
    },
    {
      "id": "review-process-avoidance.md",
      "title": "Review Process Avoidance",
      "description": "Team members actively seek ways to bypass or minimize code review requirements, undermining the quality assurance process.",
      "category": "Process",
      "size": 10
    },
    {
      "id": "review-process-breakdown.md",
      "title": "Review Process Breakdown",
      "description": "Code review practices fail to identify critical issues, provide meaningful feedback, or improve code quality due to systemic process failures.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "reviewer-anxiety.md",
      "title": "Reviewer Anxiety",
      "description": "Team members feel uncertain and anxious about conducting code reviews, leading to avoidance or superficial review practices.",
      "category": "Culture",
      "size": 15
    },
    {
      "id": "reviewer-inexperience.md",
      "title": "Reviewer Inexperience",
      "description": "Reviewers lack the experience to identify deeper issues, so they focus on what they understand.",
      "category": "Code",
      "size": 19
    },
    {
      "id": "ripple-effect-of-changes.md",
      "title": "Ripple Effect of Changes",
      "description": "A small change in one part of the system requires modifications in many other seemingly unrelated parts, indicating high coupling.",
      "category": "Architecture",
      "size": 13
    },
    {
      "id": "rushed-approvals.md",
      "title": "Rushed Approvals",
      "description": "Pull requests are approved quickly without thorough examination due to time pressure or process issues.",
      "category": "Code",
      "size": 12
    },
    {
      "id": "scaling-inefficiencies.md",
      "title": "Scaling Inefficiencies",
      "description": "A situation where it is difficult or impossible to scale different parts of a system independently.",
      "category": "Architecture",
      "size": 15
    },
    {
      "id": "schema-evolution-paralysis.md",
      "title": "Schema Evolution Paralysis",
      "description": "Database schema cannot be modified to support new requirements due to extensive dependencies and lack of migration tooling",
      "category": "Code",
      "size": 20
    },
    {
      "id": "scope-change-resistance.md",
      "title": "Scope Change Resistance",
      "description": "Necessary changes to project scope are avoided or resisted due to process constraints, contract limitations, or organizational inertia.",
      "category": "Management",
      "size": 14
    },
    {
      "id": "scope-creep.md",
      "title": "Scope Creep",
      "description": "Project requirements expand continuously without proper control or impact analysis, threatening timelines, budgets, and the original objectives.",
      "category": "Process",
      "size": 20
    },
    {
      "id": "second-system-effect.md",
      "title": "Second-System Effect",
      "description": "Lessons from an old system lead to overcompensation, creating bloated or overly ambitious designs",
      "category": "Architecture",
      "size": 20
    },
    {
      "id": "secret-management-problems.md",
      "title": "Secret Management Problems",
      "description": "Inadequate handling of sensitive credentials and secrets creates security vulnerabilities and operational challenges.",
      "category": "Operations",
      "size": 10
    },
    {
      "id": "serialization-deserialization-bottlenecks.md",
      "title": "Serialization/Deserialization Bottlenecks",
      "description": "Inefficient serialization and deserialization of data creates performance bottlenecks in API communications and data persistence operations.",
      "category": "Architecture",
      "size": 10
    },
    {
      "id": "service-discovery-failures.md",
      "title": "Service Discovery Failures",
      "description": "Service discovery mechanisms fail to locate or connect to services, causing communication failures and system instability in distributed architectures.",
      "category": "Architecture",
      "size": 10
    },
    {
      "id": "service-timeouts.md",
      "title": "Service Timeouts",
      "description": "Services fail to complete requests within an acceptable time limit, causing errors, cascading failures, and system instability.",
      "category": "Code",
      "size": 13
    },
    {
      "id": "session-management-issues.md",
      "title": "Session Management Issues",
      "description": "Poor session handling creates security vulnerabilities through session hijacking, fixation, or improper lifecycle management.",
      "category": "Security",
      "size": 12
    },
    {
      "id": "shadow-systems.md",
      "title": "Shadow Systems",
      "description": "Alternative solutions developed outside official channels undermine standardization and create hidden dependencies.",
      "category": "Management",
      "size": 13
    },
    {
      "id": "shared-database.md",
      "title": "Shared Database",
      "description": "A situation where multiple services or components share a single database.",
      "category": "Architecture",
      "size": 16
    },
    {
      "id": "shared-dependencies.md",
      "title": "Shared Dependencies",
      "description": "A situation where multiple components or services share a common set of libraries and frameworks.",
      "category": "Architecture",
      "size": 16
    },
    {
      "id": "short-term-focus.md",
      "title": "Short-Term Focus",
      "description": "Management prioritizes immediate feature delivery over long-term code health and architectural improvements, creating sustainability issues.",
      "category": "Management",
      "size": 20
    },
    {
      "id": "silent-data-corruption.md",
      "title": "Silent Data Corruption",
      "description": "Data becomes corrupted without triggering errors or alerts, leading to incorrect results and loss of data integrity.",
      "category": "Code",
      "size": 12
    },
    {
      "id": "single-entry-point-design.md",
      "title": "Single Entry Point Design",
      "description": "A design where all requests to a system must go through a single object or component.",
      "category": "Architecture",
      "size": 14
    },
    {
      "id": "single-points-of-failure.md",
      "title": "Single Points of Failure",
      "description": "Progress is blocked when specific knowledge holders or system components are unavailable, creating critical dependencies.",
      "category": "Management",
      "size": 15
    },
    {
      "id": "skill-development-gaps.md",
      "title": "Skill Development Gaps",
      "description": "Team members don't develop expertise in important technologies or domains due to avoidance, specialization, or inadequate learning opportunities.",
      "category": "Team",
      "size": 14
    },
    {
      "id": "slow-application-performance.md",
      "title": "Slow Application Performance",
      "description": "User-facing features that rely on the API feel sluggish or unresponsive.",
      "category": "Performance",
      "size": 17
    },
    {
      "id": "slow-database-queries.md",
      "title": "Slow Database Queries",
      "description": "Application performance degrades due to inefficient data retrieval from the database.",
      "category": "Performance",
      "size": 16
    },
    {
      "id": "slow-development-velocity.md",
      "title": "Slow Development Velocity",
      "description": "The team consistently fails to deliver features and bug fixes at a predictable and acceptable pace, with overall productivity systematically declining.",
      "category": "Business",
      "size": 20
    },
    {
      "id": "slow-feature-development.md",
      "title": "Slow Feature Development",
      "description": "The pace of developing and delivering new features is consistently slow, often due to the complexity and fragility of the existing codebase.",
      "category": "Code",
      "size": 17
    },
    {
      "id": "slow-incident-resolution.md",
      "title": "Slow Incident Resolution",
      "description": "Problems and outages take excessive time to diagnose and resolve, prolonging business impact and user frustration.",
      "category": "Operations",
      "size": 11
    },
    {
      "id": "slow-knowledge-transfer.md",
      "title": "Slow Knowledge Transfer",
      "description": "A situation where it takes a long time for new team members to become productive.",
      "category": "Communication",
      "size": 20
    },
    {
      "id": "slow-response-times-for-lists.md",
      "title": "Slow Response Times for Lists",
      "description": "Web pages or API endpoints that display lists of items are significantly slower to load than those that display single items, often due to inefficient data fetching.",
      "category": "Data",
      "size": 14
    },
    {
      "id": "spaghetti-code.md",
      "title": "Spaghetti Code",
      "description": "Code with tangled, unstructured logic that is nearly impossible to understand, debug, or modify safely.",
      "category": "Architecture",
      "size": 15
    },
    {
      "id": "sql-injection-vulnerabilities.md",
      "title": "SQL Injection Vulnerabilities",
      "description": "Inadequate input sanitization allows attackers to inject malicious SQL code, potentially compromising database security and data integrity.",
      "category": "Data",
      "size": 10
    },
    {
      "id": "stack-overflow-errors.md",
      "title": "Stack Overflow Errors",
      "description": "Programs exceed the allocated stack space due to excessive recursion or large local variables, causing application crashes.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "staff-availability-issues.md",
      "title": "Staff Availability Issues",
      "description": "Needed roles remain unfilled or employees are overbooked, reducing execution capacity and project progress.",
      "category": "Performance",
      "size": 15
    },
    {
      "id": "stagnant-architecture.md",
      "title": "Stagnant Architecture",
      "description": "The system architecture doesn't evolve to meet changing business needs because major refactoring is consistently avoided.",
      "category": "Architecture",
      "size": 20
    },
    {
      "id": "stakeholder-confidence-loss.md",
      "title": "Stakeholder Confidence Loss",
      "description": "Business partners lose trust in the development team's ability to deliver on commitments, creating tension and reduced collaboration.",
      "category": "Business",
      "size": 11
    },
    {
      "id": "stakeholder-developer-communication-gap.md",
      "title": "Stakeholder-Developer Communication Gap",
      "description": "A persistent misunderstanding between what stakeholders expect and what the development team builds, leading to rework and dissatisfaction.",
      "category": "Communication",
      "size": 20
    },
    {
      "id": "stakeholder-dissatisfaction.md",
      "title": "Stakeholder Dissatisfaction",
      "description": "Business stakeholders become unhappy with project outcomes, development speed, or communication quality.",
      "category": "Communication",
      "size": 10
    },
    {
      "id": "stakeholder-frustration.md",
      "title": "Stakeholder Frustration",
      "description": "Business stakeholders become frustrated with development progress, quality, or communication, leading to strained relationships and reduced support.",
      "category": "Business",
      "size": 11
    },
    {
      "id": "strangler-fig-pattern-failures.md",
      "title": "Strangler Fig Pattern Failures",
      "description": "Incremental modernization using the strangler fig pattern stalls due to complex interdependencies and data consistency challenges",
      "category": "Architecture",
      "size": 20
    },
    {
      "id": "style-arguments-in-code-reviews.md",
      "title": "Style Arguments in Code Reviews",
      "description": "A situation where a significant amount of time in code reviews is spent debating trivial style issues instead of focusing on logic and design.",
      "category": "Code",
      "size": 15
    },
    {
      "id": "suboptimal-solutions.md",
      "title": "Suboptimal Solutions",
      "description": "Delivered solutions work but are inefficient, difficult to use, or don't fully address the underlying problems they were meant to solve.",
      "category": "Architecture",
      "size": 13
    },
    {
      "id": "superficial-code-reviews.md",
      "title": "Superficial Code Reviews",
      "description": "Code reviews focus only on surface-level issues like formatting and style while missing important design, logic, or security problems.",
      "category": "Code",
      "size": 13
    },
    {
      "id": "synchronization-problems.md",
      "title": "Synchronization Problems",
      "description": "Updates to one copy of duplicated logic don't get applied to other copies, causing divergent behavior across the system.",
      "category": "Code",
      "size": 16
    },
    {
      "id": "system-integration-blindness.md",
      "title": "System Integration Blindness",
      "description": "Components work correctly in isolation but fail when integrated, revealing gaps in end-to-end system understanding.",
      "category": "Architecture",
      "size": 18
    },
    {
      "id": "system-outages.md",
      "title": "System Outages",
      "description": "Service interruptions and system failures occur frequently, causing business disruption and user frustration.",
      "category": "Business",
      "size": 13
    },
    {
      "id": "system-stagnation.md",
      "title": "System Stagnation",
      "description": "Software systems remain unchanged and fail to evolve to meet new requirements, technologies, or business needs over extended periods.",
      "category": "Business",
      "size": 13
    },
    {
      "id": "tacit-knowledge.md",
      "title": "Tacit Knowledge",
      "description": "Knowledge that is difficult to transfer to another person by means of writing it down or verbalizing it.",
      "category": "Process",
      "size": 15
    },
    {
      "id": "tangled-cross-cutting-concerns.md",
      "title": "Tangled Cross-Cutting Concerns",
      "description": "A situation where cross-cutting concerns, such as logging, security, and transactions, are tightly coupled with the business logic.",
      "category": "Architecture",
      "size": 14
    },
    {
      "id": "task-queues-backing-up.md",
      "title": "Task Queues Backing Up",
      "description": "Asynchronous jobs or messages take longer to process, causing queues to grow and delaying critical operations.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "team-churn-impact.md",
      "title": "Team Churn Impact",
      "description": "Over time, as developers join and leave the team, they bring inconsistent practices and knowledge gaps that degrade code quality.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "team-confusion.md",
      "title": "Team Confusion",
      "description": "Team members are unclear about project goals, priorities, responsibilities, or processes, leading to misaligned efforts and wasted work.",
      "category": "Communication",
      "size": 17
    },
    {
      "id": "team-coordination-issues.md",
      "title": "Team Coordination Issues",
      "description": "A situation where multiple developers or teams have difficulty working together on the same codebase.",
      "category": "Process",
      "size": 16
    },
    {
      "id": "team-demoralization.md",
      "title": "Team Demoralization",
      "description": "Team members lose motivation, confidence, and enthusiasm for their work due to persistent problems or organizational issues.",
      "category": "Culture",
      "size": 15
    },
    {
      "id": "team-dysfunction.md",
      "title": "Team Dysfunction",
      "description": "Team members cannot collaborate effectively due to conflicting goals, interpersonal issues, or structural problems that prevent coordinated effort.",
      "category": "Management",
      "size": 16
    },
    {
      "id": "team-members-not-engaged-in-review-process.md",
      "title": "Team Members Not Engaged in Review Process",
      "description": "Code reviews are often assigned to the same people, or reviewers do not provide meaningful feedback, leading to a bottleneck and reduced quality.",
      "category": "Communication",
      "size": 12
    },
    {
      "id": "team-silos.md",
      "title": "Team Silos",
      "description": "Development teams or individual developers work in isolation, leading to duplicated effort, inconsistent solutions, and a lack of knowledge sharing.",
      "category": "Communication",
      "size": 20
    },
    {
      "id": "technical-architecture-limitations.md",
      "title": "Technical Architecture Limitations",
      "description": "System architecture design creates constraints that limit performance, scalability, maintainability, or development velocity.",
      "category": "Architecture",
      "size": 15
    },
    {
      "id": "technology-isolation.md",
      "title": "Technology Isolation",
      "description": "The system becomes increasingly isolated from modern technology stacks, limiting ability to attract talent and leverage new capabilities.",
      "category": "Code",
      "size": 12
    },
    {
      "id": "technology-lock-in.md",
      "title": "Technology Lock-In",
      "description": "A situation where it is difficult or impossible to switch to a new technology because of the high cost or effort involved.",
      "category": "Architecture",
      "size": 16
    },
    {
      "id": "technology-stack-fragmentation.md",
      "title": "Technology Stack Fragmentation",
      "description": "Legacy systems create isolated technology islands that prevent standardization and increase operational complexity across the organization",
      "category": "Code",
      "size": 20
    },
    {
      "id": "test-debt.md",
      "title": "Test Debt",
      "description": "The accumulated risk from inadequate or neglected quality assurance, leading to a fragile product and slow development velocity.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "testing-complexity.md",
      "title": "Testing Complexity",
      "description": "Quality assurance must verify the same functionality in multiple locations, which increases the testing effort and the risk of missing bugs.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "testing-environment-fragility.md",
      "title": "Testing Environment Fragility",
      "description": "Testing infrastructure is unreliable, difficult to maintain, and fails to accurately represent production conditions, undermining test effectiveness.",
      "category": "Operations",
      "size": 20
    },
    {
      "id": "thread-pool-exhaustion.md",
      "title": "Thread Pool Exhaustion",
      "description": "All available threads in the thread pool are consumed by long-running or blocked operations, preventing new tasks from being processed.",
      "category": "Code",
      "size": 12
    },
    {
      "id": "tight-coupling-issues.md",
      "title": "Tight Coupling Issues",
      "description": "Components are overly dependent on each other, making changes difficult and reducing system flexibility and maintainability.",
      "category": "Architecture",
      "size": 13
    },
    {
      "id": "time-pressure.md",
      "title": "Time Pressure",
      "description": "Teams are forced to take shortcuts to meet immediate deadlines, deferring proper solutions and rushing important tasks like code reviews.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "tool-limitations.md",
      "title": "Tool Limitations",
      "description": "Inadequate development tools slow down common tasks and reduce developer productivity and satisfaction.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "unbounded-data-growth.md",
      "title": "Unbounded Data Growth",
      "description": "Data structures, caches, or databases grow indefinitely without proper pruning, size limits, or archiving strategies.",
      "category": "Code",
      "size": 13
    },
    {
      "id": "unbounded-data-structures.md",
      "title": "Unbounded Data Structures",
      "description": "Data structures that grow indefinitely without proper pruning or size limits, leading to memory exhaustion and performance degradation.",
      "category": "Code",
      "size": 15
    },
    {
      "id": "unclear-documentation-ownership.md",
      "title": "Unclear Documentation Ownership",
      "description": "No clear responsibility for maintaining documentation leads to outdated, inconsistent, or missing information.",
      "category": "Communication",
      "size": 13
    },
    {
      "id": "unclear-goals-and-priorities.md",
      "title": "Unclear Goals and Priorities",
      "description": "Constantly shifting priorities and lack of clear direction lead to a sense of futility among team members.",
      "category": "Communication",
      "size": 20
    },
    {
      "id": "unclear-sharing-expectations.md",
      "title": "Unclear Sharing Expectations",
      "description": "A situation where it is not clear what information should be shared with the rest of the team.",
      "category": "Process",
      "size": 15
    },
    {
      "id": "uncontrolled-codebase-growth.md",
      "title": "Uncontrolled Codebase Growth",
      "description": "A situation where a codebase grows in size and complexity without any control or planning.",
      "category": "Code",
      "size": 14
    },
    {
      "id": "undefined-code-style-guidelines.md",
      "title": "Undefined Code Style Guidelines",
      "description": "The team lacks clear, agreed-upon coding standards, resulting in subjective stylistic feedback and inconsistent code.",
      "category": "Code",
      "size": 20
    },
    {
      "id": "uneven-work-flow.md",
      "title": "Uneven Work Flow",
      "description": "Work progresses in irregular fits and starts rather than flowing smoothly through the development process.",
      "category": "Process",
      "size": 11
    },
    {
      "id": "uneven-workload-distribution.md",
      "title": "Uneven Workload Distribution",
      "description": "Work is not distributed fairly or effectively across team members, leading to some being overloaded while others are underutilized.",
      "category": "Performance",
      "size": 13
    },
    {
      "id": "unmotivated-employees.md",
      "title": "Unmotivated Employees",
      "description": "Team members lack engagement and enthusiasm, contributing minimally to project success and affecting overall team morale.",
      "category": "Culture",
      "size": 15
    },
    {
      "id": "unoptimized-file-access.md",
      "title": "Unoptimized File Access",
      "description": "Applications read or write files inefficiently, leading to excessive disk I/O and slow performance.",
      "category": "Performance",
      "size": 12
    },
    {
      "id": "unpredictable-system-behavior.md",
      "title": "Unpredictable System Behavior",
      "description": "Changes in one part of the system have unexpected side effects in seemingly unrelated areas due to hidden dependencies.",
      "category": "Architecture",
      "size": 15
    },
    {
      "id": "unproductive-meetings.md",
      "title": "Unproductive Meetings",
      "description": "Meetings that consume significant time but yield little progress or concrete decisions.",
      "category": "Communication",
      "size": 14
    },
    {
      "id": "unrealistic-deadlines.md",
      "title": "Unrealistic Deadlines",
      "description": "Management sets aggressive deadlines that do not account for the actual effort required, leading to compromised quality and unsustainable work practices.",
      "category": "Management",
      "size": 20
    },
    {
      "id": "unrealistic-schedule.md",
      "title": "Unrealistic Schedule",
      "description": "Project timelines are based on optimistic assumptions rather than realistic estimates, leading to stress and shortcuts.",
      "category": "Management",
      "size": 17
    },
    {
      "id": "unreleased-resources.md",
      "title": "Unreleased Resources",
      "description": "Objects, connections, file handles, or other system resources are allocated but never properly deallocated or closed.",
      "category": "Code",
      "size": 13
    },
    {
      "id": "unused-indexes.md",
      "title": "Unused Indexes",
      "description": "The database has indexes that are never used by any queries, which still consume storage space and add overhead to write operations.",
      "category": "Code",
      "size": 12
    },
    {
      "id": "upstream-timeouts.md",
      "title": "Upstream Timeouts",
      "description": "Services that consume an API fail because they do not receive a response within their configured timeout window.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "user-confusion.md",
      "title": "User Confusion",
      "description": "End users encounter different behavior for what should be identical operations, leading to frustration and a loss of trust in the system.",
      "category": "Requirements",
      "size": 14
    },
    {
      "id": "user-frustration.md",
      "title": "User Frustration",
      "description": "Users become dissatisfied with system reliability, usability, or performance, leading to decreased adoption and negative feedback.",
      "category": "Business",
      "size": 12
    },
    {
      "id": "user-trust-erosion.md",
      "title": "User Trust Erosion",
      "description": "Frequent issues and emergency fixes damage user confidence in the system's reliability, leading to a decline in user engagement and satisfaction.",
      "category": "Business",
      "size": 14
    },
    {
      "id": "vendor-dependency-entrapment.md",
      "title": "Vendor Dependency Entrapment",
      "description": "Legacy systems become trapped by discontinued vendor products, forcing expensive custom support contracts or complete system replacement",
      "category": "Code",
      "size": 20
    },
    {
      "id": "vendor-dependency.md",
      "title": "Vendor Dependency",
      "description": "Excessive reliance on external vendors or suppliers creates risks when they become unavailable, change terms, or fail to meet expectations.",
      "category": "Dependencies",
      "size": 13
    },
    {
      "id": "vendor-lock-in.md",
      "title": "Vendor Lock-In",
      "description": "System is overly dependent on a specific vendor's tools or APIs, limiting future options",
      "category": "Code",
      "size": 20
    },
    {
      "id": "vendor-relationship-strain.md",
      "title": "Vendor Relationship Strain",
      "description": "Tensions and conflicts arise between the organization and external vendors due to misaligned expectations, poor communication, or contract issues.",
      "category": "Communication",
      "size": 11
    },
    {
      "id": "virtual-memory-thrashing.md",
      "title": "Virtual Memory Thrashing",
      "description": "System constantly swaps pages between physical memory and disk, causing severe performance degradation due to excessive paging activity.",
      "category": "Code",
      "size": 11
    },
    {
      "id": "wasted-development-effort.md",
      "title": "Wasted Development Effort",
      "description": "Significant development work is abandoned, reworked, or becomes obsolete due to poor planning, changing requirements, or inefficient processes.",
      "category": "Performance",
      "size": 14
    },
    {
      "id": "work-blocking.md",
      "title": "Work Blocking",
      "description": "Development tasks cannot proceed without pending approvals, creating bottlenecks and delays in the development process.",
      "category": "Management",
      "size": 15
    },
    {
      "id": "work-queue-buildup.md",
      "title": "Work Queue Buildup",
      "description": "Tasks accumulate in queues waiting for bottleneck resources or processes, creating delays and reducing overall system throughput.",
      "category": "Performance",
      "size": 17
    },
    {
      "id": "workaround-culture.md",
      "title": "Workaround Culture",
      "description": "Teams implement increasingly complex workarounds rather than fixing root issues, creating layers of technical debt.",
      "category": "Code",
      "size": 13
    }
  ],
  "links": [
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "database-schema-design-problems.md"
    },
    {
      "source": "scope-creep.md",
      "target": "change-management-chaos.md"
    },
    {
      "source": "inconsistent-codebase.md",
      "target": "cargo-culting.md"
    },
    {
      "source": "communication-risk-outside-project.md",
      "target": "time-pressure.md"
    },
    {
      "source": "deployment-coupling.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "convenience-driven-development.md",
      "target": "time-pressure.md"
    },
    {
      "source": "hardcoded-values.md",
      "target": "time-pressure.md"
    },
    {
      "source": "high-turnover.md",
      "target": "micromanagement-culture.md"
    },
    {
      "source": "slow-database-queries.md",
      "target": "n-plus-one-query-problem.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "time-pressure.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "quality-compromises.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "knowledge-gaps.md",
      "target": "context-switching-overhead.md"
    },
    {
      "source": "quality-degradation.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "stagnant-architecture.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "decision-paralysis.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "customer-dissatisfaction.md"
    },
    {
      "source": "stakeholder-developer-communication-gap.md",
      "target": "invisible-nature-of-technical-debt.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "maintenance-paralysis.md"
    },
    {
      "source": "flaky-tests.md",
      "target": "inadequate-test-data-management.md"
    },
    {
      "source": "poor-operational-concept.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "inadequate-test-infrastructure.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "modernization-strategy-paralysis.md",
      "target": "schema-evolution-paralysis.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "legacy-configuration-management-chaos.md"
    },
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "cache-invalidation-problems.md"
    },
    {
      "source": "reduced-team-flexibility.md",
      "target": "skill-development-gaps.md"
    },
    {
      "source": "single-points-of-failure.md",
      "target": "missing-rollback-strategy.md"
    },
    {
      "source": "stakeholder-developer-communication-gap.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "reduced-team-productivity.md",
      "target": "quality-degradation.md"
    },
    {
      "source": "data-protection-risk.md",
      "target": "regulatory-compliance-drift.md"
    },
    {
      "source": "procedural-programming-in-oop-languages.md",
      "target": "procedural-background.md"
    },
    {
      "source": "context-switching-overhead.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "user-frustration.md",
      "target": "poor-user-experience-ux-design.md"
    },
    {
      "source": "code-duplication.md",
      "target": "copy-paste-programming.md"
    },
    {
      "source": "feature-bloat.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "team-coordination-issues.md",
      "target": "inconsistent-knowledge-acquisition.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "operational-overhead.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "flaky-tests.md"
    },
    {
      "source": "operational-overhead.md",
      "target": "manual-deployment-processes.md"
    },
    {
      "source": "deadlock-conditions.md",
      "target": "thread-pool-exhaustion.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "flaky-tests.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "poor-interfaces-between-applications.md"
    },
    {
      "source": "cargo-culting.md",
      "target": "insufficient-design-skills.md"
    },
    {
      "source": "blame-culture.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "legacy-api-versioning-nightmare.md",
      "target": "poor-interfaces-between-applications.md"
    },
    {
      "source": "vendor-dependency-entrapment.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "workaround-culture.md",
      "target": "poor-domain-model.md"
    },
    {
      "source": "second-system-effect.md",
      "target": "gold-plating.md"
    },
    {
      "source": "lower-code-quality.md",
      "target": "time-pressure.md"
    },
    {
      "source": "poor-test-coverage.md",
      "target": "difficult-to-test-code.md"
    },
    {
      "source": "accumulation-of-workarounds.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "legacy-code-without-tests.md",
      "target": "global-state-and-side-effects.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "slow-response-times-for-lists.md"
    },
    {
      "source": "release-instability.md",
      "target": "monitoring-gaps.md"
    },
    {
      "source": "maintenance-paralysis.md",
      "target": "workaround-culture.md"
    },
    {
      "source": "reduced-individual-productivity.md",
      "target": "increased-cognitive-load.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "workaround-culture.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "bikeshedding.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "inefficient-processes.md"
    },
    {
      "source": "poor-domain-model.md",
      "target": "team-silos.md"
    },
    {
      "source": "inconsistent-behavior.md",
      "target": "schema-evolution-paralysis.md"
    },
    {
      "source": "cargo-culting.md",
      "target": "time-pressure.md"
    },
    {
      "source": "regression-bugs.md",
      "target": "flaky-tests.md"
    },
    {
      "source": "inconsistent-naming-conventions.md",
      "target": "procedural-background.md"
    },
    {
      "source": "user-trust-erosion.md",
      "target": "high-defect-rate-in-production.md"
    },
    {
      "source": "author-frustration.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "high-client-side-resource-consumption.md",
      "target": "inefficient-frontend-code.md"
    },
    {
      "source": "stakeholder-confidence-loss.md",
      "target": "modernization-roi-justification-failure.md"
    },
    {
      "source": "growing-task-queues.md",
      "target": "high-database-resource-utilization.md"
    },
    {
      "source": "unbounded-data-growth.md",
      "target": "memory-leaks.md"
    },
    {
      "source": "god-object-anti-pattern.md",
      "target": "uncontrolled-codebase-growth.md"
    },
    {
      "source": "negative-user-feedback.md",
      "target": "reduced-feature-quality.md"
    },
    {
      "source": "operational-overhead.md",
      "target": "data-protection-risk.md"
    },
    {
      "source": "hardcoded-values.md",
      "target": "copy-paste-programming.md"
    },
    {
      "source": "inadequate-test-infrastructure.md",
      "target": "cross-system-data-synchronization-problems.md"
    },
    {
      "source": "negative-user-feedback.md",
      "target": "user-trust-erosion.md"
    },
    {
      "source": "regulatory-compliance-drift.md",
      "target": "stagnant-architecture.md"
    },
    {
      "source": "vendor-lock-in.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "inconsistent-behavior.md",
      "target": "poor-domain-model.md"
    },
    {
      "source": "increased-risk-of-bugs.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "slow-feature-development.md",
      "target": "long-lived-feature-branches.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "mentor-burnout.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "high-api-latency.md"
    },
    {
      "source": "increased-customer-support-load.md",
      "target": "inconsistent-behavior.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "monolithic-functions-and-classes.md"
    },
    {
      "source": "accumulation-of-workarounds.md",
      "target": "architectural-mismatch.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "regulatory-compliance-drift.md"
    },
    {
      "source": "duplicated-research-effort.md",
      "target": "communication-risk-within-project.md"
    },
    {
      "source": "frequent-hotfixes-and-rollbacks.md",
      "target": "high-defect-rate-in-production.md"
    },
    {
      "source": "gold-plating.md",
      "target": "second-system-effect.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "technology-isolation.md"
    },
    {
      "source": "overworked-teams.md",
      "target": "staff-availability-issues.md"
    },
    {
      "source": "legacy-system-documentation-archaeology.md",
      "target": "inadequate-onboarding.md"
    },
    {
      "source": "long-lived-feature-branches.md",
      "target": "inadequate-code-reviews.md"
    },
    {
      "source": "poor-test-coverage.md",
      "target": "inadequate-test-infrastructure.md"
    },
    {
      "source": "duplicated-research-effort.md",
      "target": "information-fragmentation.md"
    },
    {
      "source": "single-points-of-failure.md",
      "target": "legacy-configuration-management-chaos.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "reduced-review-participation.md"
    },
    {
      "source": "misaligned-deliverables.md",
      "target": "product-direction-chaos.md"
    },
    {
      "source": "data-protection-risk.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "user-trust-erosion.md",
      "target": "release-instability.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "modernization-roi-justification-failure.md"
    },
    {
      "source": "flaky-tests.md",
      "target": "memory-leaks.md"
    },
    {
      "source": "inconsistent-execution.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "difficult-developer-onboarding.md"
    },
    {
      "source": "high-number-of-database-queries.md",
      "target": "lazy-loading.md"
    },
    {
      "source": "upstream-timeouts.md",
      "target": "memory-swapping.md"
    },
    {
      "source": "convenience-driven-development.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "frequent-changes-to-requirements.md",
      "target": "stakeholder-developer-communication-gap.md"
    },
    {
      "source": "poor-project-control.md",
      "target": "poor-planning.md"
    },
    {
      "source": "resource-contention.md",
      "target": "deadlock-conditions.md"
    },
    {
      "source": "reduced-feature-quality.md",
      "target": "inappropriate-skillset.md"
    },
    {
      "source": "increased-cognitive-load.md",
      "target": "clever-code.md"
    },
    {
      "source": "legacy-skill-shortage.md",
      "target": "legacy-system-documentation-archaeology.md"
    },
    {
      "source": "god-object-anti-pattern.md",
      "target": "feature-creep-without-refactoring.md"
    },
    {
      "source": "inconsistent-behavior.md",
      "target": "cache-invalidation-problems.md"
    },
    {
      "source": "legacy-code-without-tests.md",
      "target": "hidden-dependencies.md"
    },
    {
      "source": "modernization-strategy-paralysis.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "single-points-of-failure.md",
      "target": "shadow-systems.md"
    },
    {
      "source": "brittle-codebase.md",
      "target": "maintenance-paralysis.md"
    },
    {
      "source": "excessive-disk-io.md",
      "target": "memory-swapping.md"
    },
    {
      "source": "code-duplication.md",
      "target": "legacy-api-versioning-nightmare.md"
    },
    {
      "source": "legacy-skill-shortage.md",
      "target": "inadequate-onboarding.md"
    },
    {
      "source": "second-system-effect.md",
      "target": "fear-of-failure.md"
    },
    {
      "source": "poor-interfaces-between-applications.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "increased-cognitive-load.md",
      "target": "poor-naming-conventions.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "reduced-individual-productivity.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "time-pressure.md"
    },
    {
      "source": "database-schema-design-problems.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "accumulation-of-workarounds.md",
      "target": "delayed-bug-fixes.md"
    },
    {
      "source": "release-anxiety.md",
      "target": "insufficient-testing.md"
    },
    {
      "source": "uneven-work-flow.md",
      "target": "bottleneck-formation.md"
    },
    {
      "source": "poor-interfaces-between-applications.md",
      "target": "poor-encapsulation.md"
    },
    {
      "source": "data-protection-risk.md",
      "target": "data-migration-integrity-issues.md"
    },
    {
      "source": "legacy-configuration-management-chaos.md",
      "target": "legacy-skill-shortage.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "increased-manual-work.md"
    },
    {
      "source": "poor-encapsulation.md",
      "target": "misunderstanding-of-oop.md"
    },
    {
      "source": "complex-and-obscure-logic.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "inability-to-innovate.md"
    },
    {
      "source": "reduced-team-flexibility.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "complex-deployment-process.md",
      "target": "api-versioning-conflicts.md"
    },
    {
      "source": "scope-creep.md",
      "target": "communication-risk-outside-project.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "work-blocking.md"
    },
    {
      "source": "team-demoralization.md",
      "target": "incomplete-projects.md"
    },
    {
      "source": "operational-overhead.md",
      "target": "vendor-dependency-entrapment.md"
    },
    {
      "source": "regulatory-compliance-drift.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "increased-error-rates.md",
      "target": "null-pointer-dereferences.md"
    },
    {
      "source": "single-entry-point-design.md",
      "target": "convenience-driven-development.md"
    },
    {
      "source": "vendor-dependency-entrapment.md",
      "target": "accumulated-decision-debt.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "technology-stack-fragmentation.md"
    },
    {
      "source": "legacy-skill-shortage.md",
      "target": "slow-knowledge-transfer.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "individual-recognition-culture.md",
      "target": "team-dysfunction.md"
    },
    {
      "source": "implementation-rework.md",
      "target": "cargo-culting.md"
    },
    {
      "source": "legacy-api-versioning-nightmare.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "memory-swapping.md",
      "target": "inefficient-code.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "technology-stack-fragmentation.md"
    },
    {
      "source": "bikeshedding.md",
      "target": "undefined-code-style-guidelines.md"
    },
    {
      "source": "accumulation-of-workarounds.md",
      "target": "time-pressure.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "flaky-tests.md"
    },
    {
      "source": "monolithic-functions-and-classes.md",
      "target": "debugging-difficulties.md"
    },
    {
      "source": "technology-stack-fragmentation.md",
      "target": "lack-of-ownership-and-accountability.md"
    },
    {
      "source": "single-points-of-failure.md",
      "target": "mentor-burnout.md"
    },
    {
      "source": "cv-driven-development.md",
      "target": "slow-knowledge-transfer.md"
    },
    {
      "source": "thread-pool-exhaustion.md",
      "target": "deadlock-conditions.md"
    },
    {
      "source": "inconsistent-behavior.md",
      "target": "global-state-and-side-effects.md"
    },
    {
      "source": "review-bottlenecks.md",
      "target": "large-pull-requests.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "second-system-effect.md"
    },
    {
      "source": "high-database-resource-utilization.md",
      "target": "slow-database-queries.md"
    },
    {
      "source": "review-bottlenecks.md",
      "target": "time-pressure.md"
    },
    {
      "source": "long-release-cycles.md",
      "target": "inadequate-test-infrastructure.md"
    },
    {
      "source": "cascade-delays.md",
      "target": "delayed-project-timelines.md"
    },
    {
      "source": "increased-technical-shortcuts.md",
      "target": "deadline-pressure.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "system-integration-blindness.md"
    },
    {
      "source": "missing-rollback-strategy.md",
      "target": "database-schema-design-problems.md"
    },
    {
      "source": "fear-of-breaking-changes.md",
      "target": "complex-deployment-process.md"
    },
    {
      "source": "legacy-business-logic-extraction-difficulty.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "negative-user-feedback.md",
      "target": "high-api-latency.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "review-bottlenecks.md"
    },
    {
      "source": "scope-creep.md",
      "target": "gold-plating.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "second-system-effect.md"
    },
    {
      "source": "release-anxiety.md",
      "target": "poor-test-coverage.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "modernization-strategy-paralysis.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "implementation-rework.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "strangler-fig-pattern-failures.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "micromanagement-culture.md",
      "target": "work-blocking.md"
    },
    {
      "source": "implementation-starts-without-design.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "planning-credibility-issues.md",
      "target": "missed-deadlines.md"
    },
    {
      "source": "tight-coupling-issues.md",
      "target": "shared-database.md"
    },
    {
      "source": "gradual-performance-degradation.md",
      "target": "garbage-collection-pressure.md"
    },
    {
      "source": "technology-stack-fragmentation.md",
      "target": "poor-interfaces-between-applications.md"
    },
    {
      "source": "poor-documentation.md",
      "target": "unclear-documentation-ownership.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "micromanagement-culture.md"
    },
    {
      "source": "legacy-business-logic-extraction-difficulty.md",
      "target": "legacy-system-documentation-archaeology.md"
    },
    {
      "source": "delayed-bug-fixes.md",
      "target": "fear-of-change.md"
    },
    {
      "source": "missed-deadlines.md",
      "target": "frequent-changes-to-requirements.md"
    },
    {
      "source": "overworked-teams.md",
      "target": "unrealistic-schedule.md"
    },
    {
      "source": "reduced-predictability.md",
      "target": "work-queue-buildup.md"
    },
    {
      "source": "vendor-lock-in.md",
      "target": "vendor-dependency.md"
    },
    {
      "source": "communication-breakdown.md",
      "target": "developer-frustration-and-burnout.md"
    },
    {
      "source": "mental-fatigue.md",
      "target": "cognitive-overload.md"
    },
    {
      "source": "quality-blind-spots.md",
      "target": "difficult-to-test-code.md"
    },
    {
      "source": "testing-environment-fragility.md",
      "target": "test-debt.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "data-migration-integrity-issues.md"
    },
    {
      "source": "inappropriate-skillset.md",
      "target": "skill-development-gaps.md"
    },
    {
      "source": "inefficient-database-indexing.md",
      "target": "unused-indexes.md"
    },
    {
      "source": "monolithic-functions-and-classes.md",
      "target": "feature-creep.md"
    },
    {
      "source": "legacy-code-without-tests.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "single-points-of-failure.md",
      "target": "inconsistent-knowledge-acquisition.md"
    },
    {
      "source": "extended-research-time.md",
      "target": "legacy-system-documentation-archaeology.md"
    },
    {
      "source": "declining-business-metrics.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "deployment-risk.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "poor-domain-model.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "development-disruption.md",
      "target": "unproductive-meetings.md"
    },
    {
      "source": "increased-cost-of-development.md",
      "target": "brittle-codebase.md"
    },
    {
      "source": "lower-code-quality.md",
      "target": "rapid-team-growth.md"
    },
    {
      "source": "unused-indexes.md",
      "target": "schema-evolution-paralysis.md"
    },
    {
      "source": "inadequate-initial-reviews.md",
      "target": "time-pressure.md"
    },
    {
      "source": "single-points-of-failure.md",
      "target": "legacy-skill-shortage.md"
    },
    {
      "source": "inadequate-error-handling.md",
      "target": "silent-data-corruption.md"
    },
    {
      "source": "negative-brand-perception.md",
      "target": "poor-user-experience-ux-design.md"
    },
    {
      "source": "rushed-approvals.md",
      "target": "time-pressure.md"
    },
    {
      "source": "legacy-configuration-management-chaos.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "lower-code-quality.md",
      "target": "unrealistic-schedule.md"
    },
    {
      "source": "duplicated-research-effort.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "regression-bugs.md",
      "target": "partial-bug-fixes.md"
    },
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "system-integration-blindness.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "inconsistent-codebase.md"
    },
    {
      "source": "difficult-to-understand-code.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "missing-rollback-strategy.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "code-duplication.md",
      "target": "synchronization-problems.md"
    },
    {
      "source": "difficult-to-test-code.md",
      "target": "hidden-side-effects.md"
    },
    {
      "source": "stakeholder-confidence-loss.md",
      "target": "communication-risk-outside-project.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "external-service-delays.md",
      "target": "poor-caching-strategy.md"
    },
    {
      "source": "large-risky-releases.md",
      "target": "legacy-api-versioning-nightmare.md"
    },
    {
      "source": "limited-team-learning.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "reduced-team-productivity.md",
      "target": "duplicated-effort.md"
    },
    {
      "source": "quality-blind-spots.md",
      "target": "long-build-and-test-times.md"
    },
    {
      "source": "frequent-changes-to-requirements.md",
      "target": "change-management-chaos.md"
    },
    {
      "source": "increased-manual-testing-effort.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "increased-cognitive-load.md",
      "target": "accumulation-of-workarounds.md"
    },
    {
      "source": "declining-business-metrics.md",
      "target": "user-trust-erosion.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "developer-frustration-and-burnout.md"
    },
    {
      "source": "extended-cycle-times.md",
      "target": "requirements-ambiguity.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "regression-bugs.md"
    },
    {
      "source": "team-coordination-issues.md",
      "target": "poor-project-control.md"
    },
    {
      "source": "missed-deadlines.md",
      "target": "unrealistic-schedule.md"
    },
    {
      "source": "rushed-approvals.md",
      "target": "inadequate-code-reviews.md"
    },
    {
      "source": "analysis-paralysis.md",
      "target": "modernization-roi-justification-failure.md"
    },
    {
      "source": "knowledge-dependency.md",
      "target": "information-decay.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "flaky-tests.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "extended-review-cycles.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "slow-knowledge-transfer.md"
    },
    {
      "source": "inconsistent-codebase.md",
      "target": "convenience-driven-development.md"
    },
    {
      "source": "extended-review-cycles.md",
      "target": "nitpicking-culture.md"
    },
    {
      "source": "knowledge-sharing-breakdown.md",
      "target": "unmotivated-employees.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "information-decay.md"
    },
    {
      "source": "inadequate-test-data-management.md",
      "target": "data-protection-risk.md"
    },
    {
      "source": "blame-culture.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "legacy-api-versioning-nightmare.md"
    },
    {
      "source": "misaligned-deliverables.md",
      "target": "communication-risk-outside-project.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "frequent-changes-to-requirements.md"
    },
    {
      "source": "poor-domain-model.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "high-turnover.md",
      "target": "team-dysfunction.md"
    },
    {
      "source": "testing-complexity.md",
      "target": "synchronization-problems.md"
    },
    {
      "source": "modernization-roi-justification-failure.md",
      "target": "difficulty-quantifying-benefits.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "hardcoded-values.md"
    },
    {
      "source": "high-database-resource-utilization.md",
      "target": "high-number-of-database-queries.md"
    },
    {
      "source": "quality-compromises.md",
      "target": "unrealistic-deadlines.md"
    },
    {
      "source": "system-outages.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "missed-deadlines.md",
      "target": "context-switching-overhead.md"
    },
    {
      "source": "inadequate-configuration-management.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "reduced-feature-quality.md",
      "target": "increased-bug-count.md"
    },
    {
      "source": "extended-cycle-times.md",
      "target": "approval-dependencies.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "test-debt.md"
    },
    {
      "source": "user-trust-erosion.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "hardcoded-values.md"
    },
    {
      "source": "team-coordination-issues.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "wasted-development-effort.md",
      "target": "changing-project-scope.md"
    },
    {
      "source": "implementation-rework.md",
      "target": "legacy-business-logic-extraction-difficulty.md"
    },
    {
      "source": "reviewer-anxiety.md",
      "target": "blame-culture.md"
    },
    {
      "source": "stakeholder-frustration.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "manual-deployment-processes.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "increased-cost-of-development.md",
      "target": "high-bug-introduction-rate.md"
    },
    {
      "source": "increased-customer-support-load.md",
      "target": "customer-dissatisfaction.md"
    },
    {
      "source": "increased-error-rates.md",
      "target": "inappropriate-skillset.md"
    },
    {
      "source": "maintenance-paralysis.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "bloated-class.md",
      "target": "misunderstanding-of-oop.md"
    },
    {
      "source": "brittle-codebase.md",
      "target": "ripple-effect-of-changes.md"
    },
    {
      "source": "code-duplication.md",
      "target": "tangled-cross-cutting-concerns.md"
    },
    {
      "source": "reduced-review-participation.md",
      "target": "reviewer-anxiety.md"
    },
    {
      "source": "complex-and-obscure-logic.md",
      "target": "time-pressure.md"
    },
    {
      "source": "stakeholder-confidence-loss.md",
      "target": "data-migration-integrity-issues.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "increased-cognitive-load.md"
    },
    {
      "source": "single-points-of-failure.md",
      "target": "maintenance-bottlenecks.md"
    },
    {
      "source": "manual-deployment-processes.md",
      "target": "lack-of-ownership-and-accountability.md"
    },
    {
      "source": "system-stagnation.md",
      "target": "delayed-issue-resolution.md"
    },
    {
      "source": "release-anxiety.md",
      "target": "deployment-coupling.md"
    },
    {
      "source": "frequent-hotfixes-and-rollbacks.md",
      "target": "insufficient-testing.md"
    },
    {
      "source": "stakeholder-developer-communication-gap.md",
      "target": "hardcoded-values.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "increased-error-rates.md",
      "target": "cognitive-overload.md"
    },
    {
      "source": "task-queues-backing-up.md",
      "target": "inefficient-code.md"
    },
    {
      "source": "vendor-dependency-entrapment.md",
      "target": "product-direction-chaos.md"
    },
    {
      "source": "high-database-resource-utilization.md",
      "target": "n-plus-one-query-problem.md"
    },
    {
      "source": "slow-knowledge-transfer.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "quality-compromises.md"
    },
    {
      "source": "release-anxiety.md",
      "target": "missing-rollback-strategy.md"
    },
    {
      "source": "mentor-burnout.md",
      "target": "knowledge-dependency.md"
    },
    {
      "source": "insufficient-design-skills.md",
      "target": "procedural-background.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "bottleneck-formation.md"
    },
    {
      "source": "stagnant-architecture.md",
      "target": "limited-team-learning.md"
    },
    {
      "source": "legacy-system-documentation-archaeology.md",
      "target": "high-turnover.md"
    },
    {
      "source": "technology-stack-fragmentation.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "memory-swapping.md",
      "target": "high-database-resource-utilization.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "overworked-teams.md"
    },
    {
      "source": "inefficient-development-environment.md",
      "target": "resistance-to-change.md"
    },
    {
      "source": "team-coordination-issues.md",
      "target": "duplicated-work.md"
    },
    {
      "source": "language-barriers.md",
      "target": "time-pressure.md"
    },
    {
      "source": "inadequate-onboarding.md",
      "target": "tacit-knowledge.md"
    },
    {
      "source": "vendor-relationship-strain.md",
      "target": "scope-creep.md"
    },
    {
      "source": "legacy-system-documentation-archaeology.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "cascade-failures.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "memory-leaks.md",
      "target": "unreleased-resources.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "poor-domain-model.md"
    },
    {
      "source": "increased-manual-testing-effort.md",
      "target": "testing-complexity.md"
    },
    {
      "source": "operational-overhead.md",
      "target": "regulatory-compliance-drift.md"
    },
    {
      "source": "organizational-structure-mismatch.md",
      "target": "stagnant-architecture.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "gold-plating.md"
    },
    {
      "source": "user-trust-erosion.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "circular-references.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "new-hire-frustration.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "declining-business-metrics.md",
      "target": "slow-response-times-for-lists.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "complex-domain-model.md"
    },
    {
      "source": "user-trust-erosion.md",
      "target": "delayed-issue-resolution.md"
    },
    {
      "source": "long-release-cycles.md",
      "target": "increased-manual-testing-effort.md"
    },
    {
      "source": "delayed-project-timelines.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "large-estimates-for-small-changes.md",
      "target": "fear-of-change.md"
    },
    {
      "source": "brittle-codebase.md",
      "target": "poor-interfaces-between-applications.md"
    },
    {
      "source": "deployment-risk.md",
      "target": "change-management-chaos.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "refactoring-avoidance.md"
    },
    {
      "source": "procrastination-on-complex-tasks.md",
      "target": "mental-fatigue.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "skill-development-gaps.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "spaghetti-code.md"
    },
    {
      "source": "declining-business-metrics.md",
      "target": "modernization-roi-justification-failure.md"
    },
    {
      "source": "unbounded-data-structures.md",
      "target": "session-management-issues.md"
    },
    {
      "source": "planning-credibility-issues.md",
      "target": "reduced-predictability.md"
    },
    {
      "source": "external-service-delays.md",
      "target": "breaking-changes.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "quality-degradation.md",
      "target": "priority-thrashing.md"
    },
    {
      "source": "legacy-skill-shortage.md",
      "target": "high-turnover.md"
    },
    {
      "source": "team-coordination-issues.md",
      "target": "team-dysfunction.md"
    },
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "testing-environment-fragility.md"
    },
    {
      "source": "micromanagement-culture.md",
      "target": "knowledge-dependency.md"
    },
    {
      "source": "flaky-tests.md",
      "target": "global-state-and-side-effects.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "hardcoded-values.md"
    },
    {
      "source": "legacy-skill-shortage.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "increased-risk-of-bugs.md"
    },
    {
      "source": "database-schema-design-problems.md",
      "target": "data-migration-integrity-issues.md"
    },
    {
      "source": "poor-test-coverage.md",
      "target": "legacy-code-without-tests.md"
    },
    {
      "source": "poor-domain-model.md",
      "target": "insufficient-design-skills.md"
    },
    {
      "source": "incorrect-max-connection-pool-size.md",
      "target": "long-running-database-transactions.md"
    },
    {
      "source": "vendor-dependency-entrapment.md",
      "target": "technology-stack-fragmentation.md"
    },
    {
      "source": "increased-bug-count.md",
      "target": "difficult-to-understand-code.md"
    },
    {
      "source": "legacy-configuration-management-chaos.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "cascade-failures.md",
      "target": "poor-interfaces-between-applications.md"
    },
    {
      "source": "second-system-effect.md",
      "target": "scope-creep.md"
    },
    {
      "source": "api-versioning-conflicts.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "missed-deadlines.md"
    },
    {
      "source": "legacy-api-versioning-nightmare.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "review-bottlenecks.md",
      "target": "team-members-not-engaged-in-review-process.md"
    },
    {
      "source": "user-confusion.md",
      "target": "cache-invalidation-problems.md"
    },
    {
      "source": "increased-time-to-market.md",
      "target": "inefficient-processes.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "resistance-to-change.md"
    },
    {
      "source": "increased-cognitive-load.md",
      "target": "inconsistent-naming-conventions.md"
    },
    {
      "source": "release-anxiety.md",
      "target": "flaky-tests.md"
    },
    {
      "source": "data-protection-risk.md",
      "target": "inadequate-onboarding.md"
    },
    {
      "source": "poor-teamwork.md",
      "target": "individual-recognition-culture.md"
    },
    {
      "source": "schema-evolution-paralysis.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "decision-paralysis.md",
      "target": "micromanagement-culture.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "information-decay.md"
    },
    {
      "source": "reduced-team-productivity.md",
      "target": "difficult-developer-onboarding.md"
    },
    {
      "source": "long-build-and-test-times.md",
      "target": "complex-deployment-process.md"
    },
    {
      "source": "poor-domain-model.md",
      "target": "time-pressure.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "budget-overruns.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "long-release-cycles.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "inadequate-test-infrastructure.md"
    },
    {
      "source": "data-protection-risk.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "cognitive-overload.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "poor-operational-concept.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "inefficient-development-environment.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "defensive-coding-practices.md",
      "target": "conflicting-reviewer-opinions.md"
    },
    {
      "source": "high-client-side-resource-consumption.md",
      "target": "breaking-changes.md"
    },
    {
      "source": "merge-conflicts.md",
      "target": "long-lived-feature-branches.md"
    },
    {
      "source": "resistance-to-change.md",
      "target": "fear-of-change.md"
    },
    {
      "source": "maintenance-cost-increase.md",
      "target": "technical-architecture-limitations.md"
    },
    {
      "source": "regulatory-compliance-drift.md",
      "target": "legacy-business-logic-extraction-difficulty.md"
    },
    {
      "source": "insufficient-audit-logging.md",
      "target": "data-protection-risk.md"
    },
    {
      "source": "cascade-failures.md",
      "target": "missing-rollback-strategy.md"
    },
    {
      "source": "spaghetti-code.md",
      "target": "time-pressure.md"
    },
    {
      "source": "long-lived-feature-branches.md",
      "target": "large-feature-scope.md"
    },
    {
      "source": "inefficient-development-environment.md",
      "target": "lack-of-ownership-and-accountability.md"
    },
    {
      "source": "new-hire-frustration.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "cross-system-data-synchronization-problems.md"
    },
    {
      "source": "poor-domain-model.md",
      "target": "inadequate-code-reviews.md"
    },
    {
      "source": "modernization-roi-justification-failure.md",
      "target": "stakeholder-developer-communication-gap.md"
    },
    {
      "source": "insufficient-testing.md",
      "target": "system-integration-blindness.md"
    },
    {
      "source": "organizational-structure-mismatch.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "refactoring-avoidance.md",
      "target": "time-pressure.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "legacy-business-logic-extraction-difficulty.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "release-instability.md"
    },
    {
      "source": "missing-rollback-strategy.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "gradual-performance-degradation.md",
      "target": "poor-system-environment.md"
    },
    {
      "source": "negative-user-feedback.md",
      "target": "data-migration-integrity-issues.md"
    },
    {
      "source": "misaligned-deliverables.md",
      "target": "constantly-shifting-deadlines.md"
    },
    {
      "source": "manual-deployment-processes.md",
      "target": "legacy-configuration-management-chaos.md"
    },
    {
      "source": "poor-interfaces-between-applications.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "skill-development-gaps.md",
      "target": "reduced-review-participation.md"
    },
    {
      "source": "delayed-project-timelines.md",
      "target": "difficult-developer-onboarding.md"
    },
    {
      "source": "team-silos.md",
      "target": "overworked-teams.md"
    },
    {
      "source": "test-debt.md",
      "target": "blame-culture.md"
    },
    {
      "source": "cascade-delays.md",
      "target": "single-points-of-failure.md"
    },
    {
      "source": "code-review-inefficiency.md",
      "target": "review-bottlenecks.md"
    },
    {
      "source": "high-turnover.md",
      "target": "increased-stress-and-burnout.md"
    },
    {
      "source": "resource-allocation-failures.md",
      "target": "database-connection-leaks.md"
    },
    {
      "source": "operational-overhead.md",
      "target": "data-migration-integrity-issues.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "slow-database-queries.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "manual-deployment-processes.md"
    },
    {
      "source": "inadequate-configuration-management.md",
      "target": "procedural-programming-in-oop-languages.md"
    },
    {
      "source": "quality-compromises.md",
      "target": "poor-contract-design.md"
    },
    {
      "source": "fear-of-breaking-changes.md",
      "target": "legacy-api-versioning-nightmare.md"
    },
    {
      "source": "code-review-inefficiency.md",
      "target": "nitpicking-culture.md"
    },
    {
      "source": "context-switching-overhead.md",
      "target": "inefficient-development-environment.md"
    },
    {
      "source": "inadequate-test-data-management.md",
      "target": "complex-domain-model.md"
    },
    {
      "source": "slow-feature-development.md",
      "target": "poor-domain-model.md"
    },
    {
      "source": "information-decay.md",
      "target": "accumulation-of-workarounds.md"
    },
    {
      "source": "perfectionist-culture.md",
      "target": "fear-of-failure.md"
    },
    {
      "source": "resource-allocation-failures.md",
      "target": "cascade-delays.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "poor-communication.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "high-maintenance-costs.md"
    },
    {
      "source": "brittle-codebase.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "high-resource-utilization-on-client.md",
      "target": "inefficient-code.md"
    },
    {
      "source": "complex-deployment-process.md",
      "target": "stagnant-architecture.md"
    },
    {
      "source": "data-protection-risk.md",
      "target": "null-pointer-dereferences.md"
    },
    {
      "source": "architectural-mismatch.md",
      "target": "scaling-inefficiencies.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "blame-culture.md"
    },
    {
      "source": "maintenance-cost-increase.md",
      "target": "quality-degradation.md"
    },
    {
      "source": "operational-overhead.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "shared-dependencies.md"
    },
    {
      "source": "strangler-fig-pattern-failures.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "resource-allocation-failures.md",
      "target": "project-authority-vacuum.md"
    },
    {
      "source": "poor-operational-concept.md",
      "target": "resource-allocation-failures.md"
    },
    {
      "source": "inconsistent-behavior.md",
      "target": "integer-overflow-underflow.md"
    },
    {
      "source": "mentor-burnout.md",
      "target": "reduced-review-participation.md"
    },
    {
      "source": "knowledge-sharing-breakdown.md",
      "target": "individual-recognition-culture.md"
    },
    {
      "source": "database-query-performance-issues.md",
      "target": "data-migration-integrity-issues.md"
    },
    {
      "source": "tacit-knowledge.md",
      "target": "information-decay.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "spaghetti-code.md"
    },
    {
      "source": "blame-culture.md",
      "target": "fear-of-failure.md"
    },
    {
      "source": "excessive-class-size.md",
      "target": "refactoring-avoidance.md"
    },
    {
      "source": "quality-blind-spots.md",
      "target": "inefficient-development-environment.md"
    },
    {
      "source": "scaling-inefficiencies.md",
      "target": "shared-dependencies.md"
    },
    {
      "source": "second-system-effect.md",
      "target": "perfectionist-culture.md"
    },
    {
      "source": "cv-driven-development.md",
      "target": "lack-of-ownership-and-accountability.md"
    },
    {
      "source": "scope-creep.md",
      "target": "no-formal-change-control-process.md"
    },
    {
      "source": "spaghetti-code.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "team-silos.md"
    },
    {
      "source": "quality-degradation.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "frequent-hotfixes-and-rollbacks.md",
      "target": "missing-rollback-strategy.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "modernization-roi-justification-failure.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "large-estimates-for-small-changes.md"
    },
    {
      "source": "suboptimal-solutions.md",
      "target": "quality-compromises.md"
    },
    {
      "source": "reduced-team-productivity.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "reduced-predictability.md",
      "target": "extended-cycle-times.md"
    },
    {
      "source": "testing-complexity.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "difficult-code-comprehension.md"
    },
    {
      "source": "deployment-coupling.md",
      "target": "change-management-chaos.md"
    },
    {
      "source": "inconsistent-behavior.md",
      "target": "synchronization-problems.md"
    },
    {
      "source": "vendor-dependency-entrapment.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "vendor-relationship-strain.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "history-of-failed-changes.md",
      "target": "complex-deployment-process.md"
    },
    {
      "source": "team-churn-impact.md",
      "target": "inadequate-onboarding.md"
    },
    {
      "source": "release-instability.md",
      "target": "quality-degradation.md"
    },
    {
      "source": "inadequate-code-reviews.md",
      "target": "undefined-code-style-guidelines.md"
    },
    {
      "source": "hardcoded-values.md",
      "target": "legacy-business-logic-extraction-difficulty.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "perfectionist-culture.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "high-number-of-database-queries.md"
    },
    {
      "source": "increased-error-rates.md",
      "target": "overworked-teams.md"
    },
    {
      "source": "implementation-rework.md",
      "target": "information-decay.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "workaround-culture.md"
    },
    {
      "source": "deployment-coupling.md",
      "target": "complex-deployment-process.md"
    },
    {
      "source": "brittle-codebase.md",
      "target": "fear-of-breaking-changes.md"
    },
    {
      "source": "past-negative-experiences.md",
      "target": "deployment-risk.md"
    },
    {
      "source": "insufficient-worker-capacity.md",
      "target": "inefficient-code.md"
    },
    {
      "source": "legacy-business-logic-extraction-difficulty.md",
      "target": "stakeholder-developer-communication-gap.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "merge-conflicts.md"
    },
    {
      "source": "inconsistent-quality.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "team-coordination-issues.md",
      "target": "team-confusion.md"
    },
    {
      "source": "unproductive-meetings.md",
      "target": "bikeshedding.md"
    },
    {
      "source": "negative-user-feedback.md",
      "target": "poor-user-experience-ux-design.md"
    },
    {
      "source": "review-process-breakdown.md",
      "target": "rushed-approvals.md"
    },
    {
      "source": "legacy-configuration-management-chaos.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "code-duplication.md",
      "target": "monolithic-functions-and-classes.md"
    },
    {
      "source": "slow-incident-resolution.md",
      "target": "monitoring-gaps.md"
    },
    {
      "source": "inadequate-test-infrastructure.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "poor-user-experience-ux-design.md",
      "target": "strangler-fig-pattern-failures.md"
    },
    {
      "source": "gold-plating.md",
      "target": "scope-creep.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "delayed-bug-fixes.md",
      "target": "competing-priorities.md"
    },
    {
      "source": "inability-to-innovate.md",
      "target": "legacy-skill-shortage.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "legacy-system-documentation-archaeology.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "cross-system-data-synchronization-problems.md"
    },
    {
      "source": "legacy-system-documentation-archaeology.md",
      "target": "team-churn-impact.md"
    },
    {
      "source": "team-silos.md",
      "target": "blame-culture.md"
    },
    {
      "source": "maintenance-overhead.md",
      "target": "inconsistent-naming-conventions.md"
    },
    {
      "source": "duplicated-work.md",
      "target": "team-confusion.md"
    },
    {
      "source": "analysis-paralysis.md",
      "target": "fear-of-failure.md"
    },
    {
      "source": "tight-coupling-issues.md",
      "target": "technical-architecture-limitations.md"
    },
    {
      "source": "high-coupling-low-cohesion.md",
      "target": "global-state-and-side-effects.md"
    },
    {
      "source": "legacy-system-documentation-archaeology.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "poor-test-coverage.md",
      "target": "flaky-tests.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "lack-of-ownership-and-accountability.md"
    },
    {
      "source": "misaligned-deliverables.md",
      "target": "legacy-system-documentation-archaeology.md"
    },
    {
      "source": "single-points-of-failure.md",
      "target": "vendor-lock-in.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "manual-deployment-processes.md"
    },
    {
      "source": "difficult-to-test-code.md",
      "target": "accumulation-of-workarounds.md"
    },
    {
      "source": "increased-customer-support-load.md",
      "target": "poor-user-experience-ux-design.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "maintenance-overhead.md"
    },
    {
      "source": "feature-creep.md",
      "target": "schema-evolution-paralysis.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "limited-team-learning.md"
    },
    {
      "source": "context-switching-overhead.md",
      "target": "work-queue-buildup.md"
    },
    {
      "source": "vendor-dependency-entrapment.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "deadline-pressure.md",
      "target": "poor-planning.md"
    },
    {
      "source": "missed-deadlines.md",
      "target": "slow-development-velocity.md"
    },
    {
      "source": "stagnant-architecture.md",
      "target": "resistance-to-change.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "brittle-codebase.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "maintenance-overhead.md"
    },
    {
      "source": "uncontrolled-codebase-growth.md",
      "target": "convenience-driven-development.md"
    },
    {
      "source": "feature-bloat.md",
      "target": "budget-overruns.md"
    },
    {
      "source": "inadequate-configuration-management.md",
      "target": "change-management-chaos.md"
    },
    {
      "source": "implementation-rework.md",
      "target": "changing-project-scope.md"
    },
    {
      "source": "long-release-cycles.md",
      "target": "deployment-coupling.md"
    },
    {
      "source": "deadline-pressure.md",
      "target": "unrealistic-schedule.md"
    },
    {
      "source": "technology-isolation.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "implementation-rework.md",
      "target": "feature-gaps.md"
    },
    {
      "source": "missed-deadlines.md",
      "target": "unrealistic-deadlines.md"
    },
    {
      "source": "unclear-sharing-expectations.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "maintenance-overhead.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "increased-cognitive-load.md",
      "target": "decision-paralysis.md"
    },
    {
      "source": "log-spam.md",
      "target": "excessive-logging.md"
    },
    {
      "source": "vendor-relationship-strain.md",
      "target": "legal-disputes.md"
    },
    {
      "source": "maintenance-cost-increase.md",
      "target": "system-stagnation.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "feature-bloat.md"
    },
    {
      "source": "breaking-changes.md",
      "target": "change-management-chaos.md"
    },
    {
      "source": "slow-feature-development.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "inadequate-configuration-management.md",
      "target": "information-decay.md"
    },
    {
      "source": "inadequate-code-reviews.md",
      "target": "large-pull-requests.md"
    },
    {
      "source": "context-switching-overhead.md",
      "target": "priority-thrashing.md"
    },
    {
      "source": "rapid-prototyping-becoming-production.md",
      "target": "time-pressure.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "insufficient-testing.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "limited-team-learning.md"
    },
    {
      "source": "conflicting-reviewer-opinions.md",
      "target": "code-review-inefficiency.md"
    },
    {
      "source": "quality-compromises.md",
      "target": "time-pressure.md"
    },
    {
      "source": "quality-degradation.md",
      "target": "time-pressure.md"
    },
    {
      "source": "user-trust-erosion.md",
      "target": "regulatory-compliance-drift.md"
    },
    {
      "source": "decision-avoidance.md",
      "target": "perfectionist-culture.md"
    },
    {
      "source": "information-decay.md",
      "target": "team-churn-impact.md"
    },
    {
      "source": "stakeholder-developer-communication-gap.md",
      "target": "legacy-system-documentation-archaeology.md"
    },
    {
      "source": "mixed-coding-styles.md",
      "target": "team-churn-impact.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "style-arguments-in-code-reviews.md"
    },
    {
      "source": "bloated-class.md",
      "target": "uncontrolled-codebase-growth.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "release-anxiety.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "team-silos.md"
    },
    {
      "source": "hidden-dependencies.md",
      "target": "shadow-systems.md"
    },
    {
      "source": "single-points-of-failure.md",
      "target": "implicit-knowledge.md"
    },
    {
      "source": "resource-waste.md",
      "target": "process-design-flaws.md"
    },
    {
      "source": "increased-manual-work.md",
      "target": "poor-interfaces-between-applications.md"
    },
    {
      "source": "release-anxiety.md",
      "target": "fear-of-failure.md"
    },
    {
      "source": "negative-user-feedback.md",
      "target": "user-frustration.md"
    },
    {
      "source": "duplicated-research-effort.md",
      "target": "poor-communication.md"
    },
    {
      "source": "second-system-effect.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "brittle-codebase.md"
    },
    {
      "source": "god-object-anti-pattern.md",
      "target": "single-entry-point-design.md"
    },
    {
      "source": "team-coordination-issues.md",
      "target": "stakeholder-developer-communication-gap.md"
    },
    {
      "source": "strangler-fig-pattern-failures.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "test-debt.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "strangler-fig-pattern-failures.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "legacy-business-logic-extraction-difficulty.md"
    },
    {
      "source": "superficial-code-reviews.md",
      "target": "time-pressure.md"
    },
    {
      "source": "review-process-breakdown.md",
      "target": "inconsistent-naming-conventions.md"
    },
    {
      "source": "excessive-disk-io.md",
      "target": "excessive-logging.md"
    },
    {
      "source": "high-api-latency.md",
      "target": "slow-database-queries.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "delayed-value-delivery.md"
    },
    {
      "source": "regulatory-compliance-drift.md",
      "target": "legacy-configuration-management-chaos.md"
    },
    {
      "source": "modernization-strategy-paralysis.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "slow-knowledge-transfer.md"
    },
    {
      "source": "legacy-business-logic-extraction-difficulty.md",
      "target": "poor-domain-model.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "vendor-dependency-entrapment.md"
    },
    {
      "source": "difficult-to-test-code.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "slow-response-times-for-lists.md",
      "target": "poor-caching-strategy.md"
    },
    {
      "source": "inability-to-innovate.md",
      "target": "technology-lock-in.md"
    },
    {
      "source": "procrastination-on-complex-tasks.md",
      "target": "fear-of-failure.md"
    },
    {
      "source": "vendor-lock-in.md",
      "target": "insufficient-design-skills.md"
    },
    {
      "source": "incomplete-knowledge.md",
      "target": "high-turnover.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "reduced-feature-quality.md",
      "target": "increased-technical-shortcuts.md"
    },
    {
      "source": "misaligned-deliverables.md",
      "target": "assumption-based-development.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "difficult-code-reuse.md"
    },
    {
      "source": "increased-risk-of-bugs.md",
      "target": "merge-conflicts.md"
    },
    {
      "source": "missing-rollback-strategy.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "external-service-delays.md",
      "target": "upstream-timeouts.md"
    },
    {
      "source": "data-protection-risk.md",
      "target": "team-silos.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "high-bug-introduction-rate.md"
    },
    {
      "source": "increased-technical-shortcuts.md",
      "target": "premature-technology-introduction.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "inefficient-development-environment.md"
    },
    {
      "source": "mixed-coding-styles.md",
      "target": "undefined-code-style-guidelines.md"
    },
    {
      "source": "difficult-code-comprehension.md",
      "target": "information-decay.md"
    },
    {
      "source": "flaky-tests.md",
      "target": "difficult-to-test-code.md"
    },
    {
      "source": "hidden-dependencies.md",
      "target": "global-state-and-side-effects.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "scope-creep.md"
    },
    {
      "source": "vendor-lock-in.md",
      "target": "time-pressure.md"
    },
    {
      "source": "bloated-class.md",
      "target": "feature-creep-without-refactoring.md"
    },
    {
      "source": "negative-user-feedback.md",
      "target": "budget-overruns.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "fear-of-breaking-changes.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "feature-creep.md"
    },
    {
      "source": "cv-driven-development.md",
      "target": "bikeshedding.md"
    },
    {
      "source": "unrealistic-deadlines.md",
      "target": "poor-planning.md"
    },
    {
      "source": "regression-bugs.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "negative-user-feedback.md",
      "target": "inadequate-onboarding.md"
    },
    {
      "source": "regulatory-compliance-drift.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "uneven-workload-distribution.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "increased-cost-of-development.md",
      "target": "gold-plating.md"
    },
    {
      "source": "context-switching-overhead.md",
      "target": "work-blocking.md"
    },
    {
      "source": "cascade-failures.md",
      "target": "system-integration-blindness.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "delayed-bug-fixes.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "delayed-value-delivery.md"
    },
    {
      "source": "cargo-culting.md",
      "target": "decision-avoidance.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "poor-test-coverage.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "legacy-system-documentation-archaeology.md"
    },
    {
      "source": "limited-team-learning.md",
      "target": "fear-of-failure.md"
    },
    {
      "source": "long-release-cycles.md",
      "target": "complex-deployment-process.md"
    },
    {
      "source": "synchronization-problems.md",
      "target": "false-sharing.md"
    },
    {
      "source": "merge-conflicts.md",
      "target": "inconsistent-codebase.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "authentication-bypass-vulnerabilities.md",
      "target": "password-security-weaknesses.md"
    },
    {
      "source": "brittle-codebase.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "poor-interfaces-between-applications.md",
      "target": "team-silos.md"
    },
    {
      "source": "inability-to-innovate.md",
      "target": "legacy-api-versioning-nightmare.md"
    },
    {
      "source": "inadequate-code-reviews.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "legacy-system-documentation-archaeology.md",
      "target": "time-pressure.md"
    },
    {
      "source": "legacy-api-versioning-nightmare.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "poor-documentation.md",
      "target": "time-pressure.md"
    },
    {
      "source": "constant-firefighting.md",
      "target": "legacy-skill-shortage.md"
    },
    {
      "source": "unclear-goals-and-priorities.md",
      "target": "stakeholder-developer-communication-gap.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "team-churn-impact.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "dma-coherency-issues.md"
    },
    {
      "source": "vendor-dependency-entrapment.md",
      "target": "resource-allocation-failures.md"
    },
    {
      "source": "implementation-starts-without-design.md",
      "target": "cargo-culting.md"
    },
    {
      "source": "misaligned-deliverables.md",
      "target": "scope-change-resistance.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "modernization-strategy-paralysis.md",
      "target": "perfectionist-culture.md"
    },
    {
      "source": "poor-encapsulation.md",
      "target": "procedural-background.md"
    },
    {
      "source": "release-instability.md",
      "target": "deployment-coupling.md"
    },
    {
      "source": "vendor-relationship-strain.md",
      "target": "poor-contract-design.md"
    },
    {
      "source": "increased-customer-support-load.md",
      "target": "high-defect-rate-in-production.md"
    },
    {
      "source": "scope-creep.md",
      "target": "slow-development-velocity.md"
    },
    {
      "source": "flaky-tests.md",
      "target": "external-service-delays.md"
    },
    {
      "source": "review-process-breakdown.md",
      "target": "undefined-code-style-guidelines.md"
    },
    {
      "source": "accumulation-of-workarounds.md",
      "target": "resistance-to-change.md"
    },
    {
      "source": "author-frustration.md",
      "target": "style-arguments-in-code-reviews.md"
    },
    {
      "source": "cascade-failures.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "user-frustration.md",
      "target": "feature-gaps.md"
    },
    {
      "source": "release-instability.md",
      "target": "missing-rollback-strategy.md"
    },
    {
      "source": "inconsistent-naming-conventions.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "reduced-team-productivity.md",
      "target": "team-coordination-issues.md"
    },
    {
      "source": "legacy-configuration-management-chaos.md",
      "target": "procedural-programming-in-oop-languages.md"
    },
    {
      "source": "insufficient-testing.md",
      "target": "inadequate-integration-tests.md"
    },
    {
      "source": "modernization-roi-justification-failure.md",
      "target": "monitoring-gaps.md"
    },
    {
      "source": "superficial-code-reviews.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "schema-evolution-paralysis.md",
      "target": "information-decay.md"
    },
    {
      "source": "maintenance-paralysis.md",
      "target": "time-pressure.md"
    },
    {
      "source": "deployment-coupling.md",
      "target": "system-integration-blindness.md"
    },
    {
      "source": "user-trust-erosion.md",
      "target": "data-migration-integrity-issues.md"
    },
    {
      "source": "superficial-code-reviews.md",
      "target": "nitpicking-culture.md"
    },
    {
      "source": "data-protection-risk.md",
      "target": "vendor-dependency-entrapment.md"
    },
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "data-protection-risk.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "time-pressure.md"
    },
    {
      "source": "false-sharing.md",
      "target": "atomic-operation-overhead.md"
    },
    {
      "source": "increased-customer-support-load.md",
      "target": "cross-system-data-synchronization-problems.md"
    },
    {
      "source": "maintenance-cost-increase.md",
      "target": "information-decay.md"
    },
    {
      "source": "planning-credibility-issues.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "unmotivated-employees.md",
      "target": "inadequate-mentoring-structure.md"
    },
    {
      "source": "excessive-class-size.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "implementation-starts-without-design.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "knowledge-gaps.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "implementation-starts-without-design.md",
      "target": "eager-to-please-stakeholders.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "modernization-roi-justification-failure.md"
    },
    {
      "source": "excessive-disk-io.md",
      "target": "unoptimized-file-access.md"
    },
    {
      "source": "inadequate-test-data-management.md",
      "target": "deployment-environment-inconsistencies.md"
    },
    {
      "source": "inadequate-test-infrastructure.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "defensive-coding-practices.md"
    },
    {
      "source": "deployment-risk.md",
      "target": "configuration-chaos.md"
    },
    {
      "source": "customer-dissatisfaction.md",
      "target": "poor-user-experience-ux-design.md"
    },
    {
      "source": "delayed-decision-making.md",
      "target": "analysis-paralysis.md"
    },
    {
      "source": "cascade-failures.md",
      "target": "legacy-api-versioning-nightmare.md"
    },
    {
      "source": "analysis-paralysis.md",
      "target": "legacy-system-documentation-archaeology.md"
    },
    {
      "source": "complex-and-obscure-logic.md",
      "target": "clever-code.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "past-negative-experiences.md"
    },
    {
      "source": "unmotivated-employees.md",
      "target": "project-authority-vacuum.md"
    },
    {
      "source": "regression-bugs.md",
      "target": "poor-test-coverage.md"
    },
    {
      "source": "insufficient-code-review.md",
      "target": "reviewer-inexperience.md"
    },
    {
      "source": "tangled-cross-cutting-concerns.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "inconsistent-quality.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "increased-cognitive-load.md",
      "target": "context-switching-overhead.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "poor-naming-conventions.md"
    },
    {
      "source": "frequent-changes-to-requirements.md",
      "target": "scope-creep.md"
    },
    {
      "source": "inconsistent-codebase.md",
      "target": "synchronization-problems.md"
    },
    {
      "source": "user-frustration.md",
      "target": "slow-incident-resolution.md"
    },
    {
      "source": "monolithic-functions-and-classes.md",
      "target": "time-pressure.md"
    },
    {
      "source": "difficult-code-comprehension.md",
      "target": "insufficient-code-review.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "inefficient-processes.md"
    },
    {
      "source": "data-structure-cache-inefficiency.md",
      "target": "alignment-and-padding-issues.md"
    },
    {
      "source": "deployment-environment-inconsistencies.md",
      "target": "manual-deployment-processes.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "abi-compatibility-issues.md"
    },
    {
      "source": "decision-avoidance.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "difficult-code-comprehension.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "delayed-bug-fixes.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "vendor-lock-in.md",
      "target": "technology-lock-in.md"
    },
    {
      "source": "lower-code-quality.md",
      "target": "overworked-teams.md"
    },
    {
      "source": "release-instability.md",
      "target": "change-management-chaos.md"
    },
    {
      "source": "planning-credibility-issues.md",
      "target": "stakeholder-confidence-loss.md"
    },
    {
      "source": "planning-credibility-issues.md",
      "target": "changing-project-scope.md"
    },
    {
      "source": "wasted-development-effort.md",
      "target": "scope-change-resistance.md"
    },
    {
      "source": "memory-leaks.md",
      "target": "inefficient-code.md"
    },
    {
      "source": "missed-deadlines.md",
      "target": "poor-contract-design.md"
    },
    {
      "source": "user-confusion.md",
      "target": "synchronization-problems.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "increasing-brittleness.md"
    },
    {
      "source": "memory-swapping.md",
      "target": "virtual-memory-thrashing.md"
    },
    {
      "source": "slow-knowledge-transfer.md",
      "target": "tacit-knowledge.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "legacy-business-logic-extraction-difficulty.md"
    },
    {
      "source": "scope-creep.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "gradual-performance-degradation.md",
      "target": "memory-leaks.md"
    },
    {
      "source": "workaround-culture.md",
      "target": "delayed-issue-resolution.md"
    },
    {
      "source": "team-coordination-issues.md",
      "target": "organizational-structure-mismatch.md"
    },
    {
      "source": "increased-risk-of-bugs.md",
      "target": "testing-complexity.md"
    },
    {
      "source": "duplicated-effort.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "high-turnover.md",
      "target": "difficult-developer-onboarding.md"
    },
    {
      "source": "hardcoded-values.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "schema-evolution-paralysis.md",
      "target": "single-points-of-failure.md"
    },
    {
      "source": "release-instability.md",
      "target": "complex-deployment-process.md"
    },
    {
      "source": "communication-risk-within-project.md",
      "target": "assumption-based-development.md"
    },
    {
      "source": "customer-dissatisfaction.md",
      "target": "quality-compromises.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "ripple-effect-of-changes.md"
    },
    {
      "source": "context-switching-overhead.md",
      "target": "constant-firefighting.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "legacy-skill-shortage.md"
    },
    {
      "source": "review-process-breakdown.md",
      "target": "large-pull-requests.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "system-stagnation.md"
    },
    {
      "source": "planning-credibility-issues.md",
      "target": "wasted-development-effort.md"
    },
    {
      "source": "rapid-prototyping-becoming-production.md",
      "target": "project-resource-constraints.md"
    },
    {
      "source": "stakeholder-confidence-loss.md",
      "target": "slow-development-velocity.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "cascade-failures.md"
    },
    {
      "source": "data-protection-risk.md",
      "target": "buffer-overflow-vulnerabilities.md"
    },
    {
      "source": "system-outages.md",
      "target": "deployment-risk.md"
    },
    {
      "source": "hidden-dependencies.md",
      "target": "system-integration-blindness.md"
    },
    {
      "source": "slow-knowledge-transfer.md",
      "target": "inadequate-mentoring-structure.md"
    },
    {
      "source": "constant-firefighting.md",
      "target": "deployment-environment-inconsistencies.md"
    },
    {
      "source": "dependency-on-supplier.md",
      "target": "technical-architecture-limitations.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "missing-rollback-strategy.md"
    },
    {
      "source": "quality-degradation.md",
      "target": "quality-compromises.md"
    },
    {
      "source": "unmotivated-employees.md",
      "target": "misaligned-deliverables.md"
    },
    {
      "source": "gold-plating.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "technology-lock-in.md",
      "target": "shared-dependencies.md"
    },
    {
      "source": "stakeholder-confidence-loss.md",
      "target": "data-protection-risk.md"
    },
    {
      "source": "delayed-decision-making.md",
      "target": "product-direction-chaos.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "code-review-inefficiency.md"
    },
    {
      "source": "time-pressure.md",
      "target": "product-direction-chaos.md"
    },
    {
      "source": "implementation-rework.md",
      "target": "inadequate-requirements-gathering.md"
    },
    {
      "source": "inadequate-configuration-management.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "review-bottlenecks.md",
      "target": "reviewer-anxiety.md"
    },
    {
      "source": "vendor-dependency-entrapment.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "long-release-cycles.md",
      "target": "monitoring-gaps.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "high-maintenance-costs.md"
    },
    {
      "source": "technical-architecture-limitations.md",
      "target": "monolithic-functions-and-classes.md"
    },
    {
      "source": "code-review-inefficiency.md",
      "target": "poor-naming-conventions.md"
    },
    {
      "source": "customer-dissatisfaction.md",
      "target": "misaligned-deliverables.md"
    },
    {
      "source": "schema-evolution-paralysis.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "cache-invalidation-problems.md",
      "target": "race-conditions.md"
    },
    {
      "source": "frequent-hotfixes-and-rollbacks.md",
      "target": "regression-bugs.md"
    },
    {
      "source": "deployment-coupling.md",
      "target": "shared-dependencies.md"
    },
    {
      "source": "god-object-anti-pattern.md",
      "target": "convenience-driven-development.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "manual-deployment-processes.md"
    },
    {
      "source": "technology-stack-fragmentation.md",
      "target": "cargo-culting.md"
    },
    {
      "source": "high-connection-count.md",
      "target": "misconfigured-connection-pools.md"
    },
    {
      "source": "inconsistent-codebase.md",
      "target": "inconsistent-coding-standards.md"
    },
    {
      "source": "maintenance-overhead.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "time-pressure.md"
    },
    {
      "source": "architectural-mismatch.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "team-demoralization.md",
      "target": "unrealistic-deadlines.md"
    },
    {
      "source": "technology-stack-fragmentation.md",
      "target": "modernization-strategy-paralysis.md"
    },
    {
      "source": "missing-rollback-strategy.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "team-demoralization.md"
    },
    {
      "source": "new-hire-frustration.md",
      "target": "inadequate-mentoring-structure.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "high-turnover.md"
    },
    {
      "source": "delayed-bug-fixes.md",
      "target": "avoidance-behaviors.md"
    },
    {
      "source": "code-duplication.md",
      "target": "hardcoded-values.md"
    },
    {
      "source": "synchronization-problems.md",
      "target": "memory-barrier-inefficiency.md"
    },
    {
      "source": "modernization-strategy-paralysis.md",
      "target": "analysis-paralysis.md"
    },
    {
      "source": "modernization-strategy-paralysis.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "poor-operational-concept.md",
      "target": "unrealistic-deadlines.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "overworked-teams.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "data-protection-risk.md"
    },
    {
      "source": "constant-firefighting.md",
      "target": "poorly-defined-responsibilities.md"
    },
    {
      "source": "blame-culture.md",
      "target": "perfectionist-culture.md"
    },
    {
      "source": "testing-environment-fragility.md",
      "target": "project-resource-constraints.md"
    },
    {
      "source": "time-pressure.md",
      "target": "market-pressure.md"
    },
    {
      "source": "poor-operational-concept.md",
      "target": "resistance-to-change.md"
    },
    {
      "source": "extended-research-time.md",
      "target": "difficult-to-understand-code.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "inadequate-code-reviews.md"
    },
    {
      "source": "review-process-avoidance.md",
      "target": "author-frustration.md"
    },
    {
      "source": "schema-evolution-paralysis.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "context-switching-overhead.md",
      "target": "bottleneck-formation.md"
    },
    {
      "source": "declining-business-metrics.md",
      "target": "inadequate-onboarding.md"
    },
    {
      "source": "immature-delivery-strategy.md",
      "target": "deployment-coupling.md"
    },
    {
      "source": "poor-operational-concept.md",
      "target": "team-silos.md"
    },
    {
      "source": "technology-stack-fragmentation.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "mentor-burnout.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "lower-code-quality.md",
      "target": "automated-tooling-ineffectiveness.md"
    },
    {
      "source": "race-conditions.md",
      "target": "dma-coherency-issues.md"
    },
    {
      "source": "difficult-to-test-code.md",
      "target": "poor-encapsulation.md"
    },
    {
      "source": "legacy-api-versioning-nightmare.md",
      "target": "procedural-programming-in-oop-languages.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "frequent-changes-to-requirements.md"
    },
    {
      "source": "inconsistent-codebase.md",
      "target": "mixed-coding-styles.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "legacy-configuration-management-chaos.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "perfectionist-review-culture.md"
    },
    {
      "source": "assumption-based-development.md",
      "target": "requirements-ambiguity.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "flaky-tests.md"
    },
    {
      "source": "brittle-codebase.md",
      "target": "incomplete-knowledge.md"
    },
    {
      "source": "data-protection-risk.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "missing-rollback-strategy.md",
      "target": "manual-deployment-processes.md"
    },
    {
      "source": "hardcoded-values.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "poor-user-experience-ux-design.md",
      "target": "schema-evolution-paralysis.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "organizational-structure-mismatch.md"
    },
    {
      "source": "legacy-business-logic-extraction-difficulty.md",
      "target": "copy-paste-programming.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "team-silos.md"
    },
    {
      "source": "deployment-environment-inconsistencies.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "unclear-goals-and-priorities.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "poor-naming-conventions.md"
    },
    {
      "source": "fear-of-breaking-changes.md",
      "target": "history-of-failed-changes.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "mixed-coding-styles.md"
    },
    {
      "source": "difficult-code-reuse.md",
      "target": "time-pressure.md"
    },
    {
      "source": "avoidance-behaviors.md",
      "target": "fear-of-change.md"
    },
    {
      "source": "legacy-configuration-management-chaos.md",
      "target": "information-decay.md"
    },
    {
      "source": "code-review-inefficiency.md",
      "target": "superficial-code-reviews.md"
    },
    {
      "source": "large-estimates-for-small-changes.md",
      "target": "brittle-codebase.md"
    },
    {
      "source": "team-coordination-issues.md",
      "target": "rapid-system-changes.md"
    },
    {
      "source": "upstream-timeouts.md",
      "target": "resource-contention.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "declining-business-metrics.md"
    },
    {
      "source": "thread-pool-exhaustion.md",
      "target": "service-timeouts.md"
    },
    {
      "source": "style-arguments-in-code-reviews.md",
      "target": "code-review-inefficiency.md"
    },
    {
      "source": "uneven-workload-distribution.md",
      "target": "capacity-mismatch.md"
    },
    {
      "source": "implementation-starts-without-design.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "stakeholder-confidence-loss.md",
      "target": "vendor-dependency-entrapment.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "buffer-overflow-vulnerabilities.md"
    },
    {
      "source": "cascade-failures.md",
      "target": "cross-system-data-synchronization-problems.md"
    },
    {
      "source": "increased-technical-shortcuts.md",
      "target": "market-pressure.md"
    },
    {
      "source": "integer-overflow-underflow.md",
      "target": "inadequate-error-handling.md"
    },
    {
      "source": "complex-deployment-process.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "inability-to-innovate.md",
      "target": "vendor-lock-in.md"
    },
    {
      "source": "poor-interfaces-between-applications.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "assumption-based-development.md",
      "target": "feedback-isolation.md"
    },
    {
      "source": "author-frustration.md",
      "target": "code-review-inefficiency.md"
    },
    {
      "source": "implementation-rework.md",
      "target": "inadequate-initial-reviews.md"
    },
    {
      "source": "legal-disputes.md",
      "target": "poor-contract-design.md"
    },
    {
      "source": "stack-overflow-errors.md",
      "target": "memory-leaks.md"
    },
    {
      "source": "second-system-effect.md",
      "target": "insufficient-design-skills.md"
    },
    {
      "source": "extended-research-time.md",
      "target": "spaghetti-code.md"
    },
    {
      "source": "poor-test-coverage.md",
      "target": "testing-environment-fragility.md"
    },
    {
      "source": "quality-blind-spots.md",
      "target": "time-pressure.md"
    },
    {
      "source": "data-migration-complexities.md",
      "target": "tight-coupling-issues.md"
    },
    {
      "source": "cv-driven-development.md",
      "target": "poorly-defined-responsibilities.md"
    },
    {
      "source": "insufficient-testing.md",
      "target": "poor-test-coverage.md"
    },
    {
      "source": "stagnant-architecture.md",
      "target": "insufficient-design-skills.md"
    },
    {
      "source": "modernization-strategy-paralysis.md",
      "target": "modernization-roi-justification-failure.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "feature-factory.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "inconsistent-execution.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "accumulation-of-workarounds.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "implicit-knowledge.md"
    },
    {
      "source": "monolithic-functions-and-classes.md",
      "target": "poorly-defined-responsibilities.md"
    },
    {
      "source": "slow-database-queries.md",
      "target": "resource-contention.md"
    },
    {
      "source": "inefficient-development-environment.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "decision-paralysis.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "second-system-effect.md",
      "target": "time-pressure.md"
    },
    {
      "source": "negative-user-feedback.md",
      "target": "delayed-value-delivery.md"
    },
    {
      "source": "avoidance-behaviors.md",
      "target": "blame-culture.md"
    },
    {
      "source": "increased-cognitive-load.md",
      "target": "difficult-code-comprehension.md"
    },
    {
      "source": "gradual-performance-degradation.md",
      "target": "unbounded-data-structures.md"
    },
    {
      "source": "schema-evolution-paralysis.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "stagnant-architecture.md",
      "target": "time-pressure.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "feature-gaps.md",
      "target": "assumption-based-development.md"
    },
    {
      "source": "knowledge-sharing-breakdown.md",
      "target": "implicit-knowledge.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "vendor-dependency-entrapment.md"
    },
    {
      "source": "flaky-tests.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "slow-feature-development.md"
    },
    {
      "source": "user-frustration.md",
      "target": "inadequate-requirements-gathering.md"
    },
    {
      "source": "knowledge-sharing-breakdown.md",
      "target": "information-fragmentation.md"
    },
    {
      "source": "legacy-business-logic-extraction-difficulty.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "implementation-starts-without-design.md",
      "target": "analysis-paralysis.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "tacit-knowledge.md"
    },
    {
      "source": "analysis-paralysis.md",
      "target": "perfectionist-culture.md"
    },
    {
      "source": "increased-customer-support-load.md",
      "target": "insufficient-testing.md"
    },
    {
      "source": "poor-operational-concept.md",
      "target": "lack-of-ownership-and-accountability.md"
    },
    {
      "source": "defensive-coding-practices.md",
      "target": "nitpicking-culture.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "poor-interfaces-between-applications.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "fear-of-change.md"
    },
    {
      "source": "increased-manual-work.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "frequent-changes-to-requirements.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "knowledge-dependency.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "changing-project-scope.md"
    },
    {
      "source": "past-negative-experiences.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "slow-knowledge-transfer.md",
      "target": "inadequate-onboarding.md"
    },
    {
      "source": "feature-bloat.md",
      "target": "decision-avoidance.md"
    },
    {
      "source": "partial-bug-fixes.md",
      "target": "incomplete-knowledge.md"
    },
    {
      "source": "lower-code-quality.md",
      "target": "deadline-pressure.md"
    },
    {
      "source": "blame-culture.md",
      "target": "team-silos.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "data-protection-risk.md"
    },
    {
      "source": "technology-lock-in.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "task-queues-backing-up.md",
      "target": "slow-application-performance.md"
    },
    {
      "source": "missed-deadlines.md",
      "target": "legacy-skill-shortage.md"
    },
    {
      "source": "strangler-fig-pattern-failures.md",
      "target": "legacy-system-documentation-archaeology.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "schema-evolution-paralysis.md"
    },
    {
      "source": "system-stagnation.md",
      "target": "maintenance-cost-increase.md"
    },
    {
      "source": "inefficient-processes.md",
      "target": "process-design-flaws.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "individual-recognition-culture.md"
    },
    {
      "source": "increased-error-rates.md",
      "target": "external-service-delays.md"
    },
    {
      "source": "unclear-sharing-expectations.md",
      "target": "time-pressure.md"
    },
    {
      "source": "schema-evolution-paralysis.md",
      "target": "fear-of-failure.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "time-pressure.md"
    },
    {
      "source": "knowledge-dependency.md",
      "target": "team-silos.md"
    },
    {
      "source": "cv-driven-development.md",
      "target": "misaligned-deliverables.md"
    },
    {
      "source": "quality-degradation.md",
      "target": "team-demoralization.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "slow-feature-development.md"
    },
    {
      "source": "resource-waste.md",
      "target": "capacity-mismatch.md"
    },
    {
      "source": "planning-credibility-issues.md",
      "target": "cascade-delays.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "poor-domain-model.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "schema-evolution-paralysis.md"
    },
    {
      "source": "synchronization-problems.md",
      "target": "deadlock-conditions.md"
    },
    {
      "source": "brittle-codebase.md",
      "target": "cargo-culting.md"
    },
    {
      "source": "data-protection-risk.md",
      "target": "insufficient-design-skills.md"
    },
    {
      "source": "knowledge-gaps.md",
      "target": "incomplete-knowledge.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "data-migration-integrity-issues.md"
    },
    {
      "source": "cascade-failures.md",
      "target": "inadequate-integration-tests.md"
    },
    {
      "source": "quality-compromises.md",
      "target": "procrastination-on-complex-tasks.md"
    },
    {
      "source": "poor-domain-model.md",
      "target": "stakeholder-developer-communication-gap.md"
    },
    {
      "source": "extended-review-cycles.md",
      "target": "bikeshedding.md"
    },
    {
      "source": "technology-stack-fragmentation.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "manual-deployment-processes.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "difficult-to-understand-code.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "log-spam.md"
    },
    {
      "source": "cargo-culting.md",
      "target": "copy-paste-programming.md"
    },
    {
      "source": "legacy-configuration-management-chaos.md",
      "target": "hardcoded-values.md"
    },
    {
      "source": "increased-error-rates.md",
      "target": "slow-application-performance.md"
    },
    {
      "source": "increased-error-rates.md",
      "target": "resource-contention.md"
    },
    {
      "source": "blame-culture.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "regulatory-compliance-drift.md"
    },
    {
      "source": "frequent-hotfixes-and-rollbacks.md",
      "target": "release-instability.md"
    },
    {
      "source": "review-process-breakdown.md",
      "target": "team-members-not-engaged-in-review-process.md"
    },
    {
      "source": "testing-complexity.md",
      "target": "tight-coupling-issues.md"
    },
    {
      "source": "data-protection-risk.md",
      "target": "time-pressure.md"
    },
    {
      "source": "legacy-skill-shortage.md",
      "target": "budget-overruns.md"
    },
    {
      "source": "release-anxiety.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "complex-and-obscure-logic.md",
      "target": "poor-domain-model.md"
    },
    {
      "source": "maintenance-bottlenecks.md",
      "target": "inconsistent-quality.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "poor-project-control.md"
    },
    {
      "source": "poor-interfaces-between-applications.md",
      "target": "insufficient-design-skills.md"
    },
    {
      "source": "review-process-avoidance.md",
      "target": "code-review-inefficiency.md"
    },
    {
      "source": "deployment-environment-inconsistencies.md",
      "target": "legacy-configuration-management-chaos.md"
    },
    {
      "source": "modernization-strategy-paralysis.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "delayed-decision-making.md",
      "target": "knowledge-dependency.md"
    },
    {
      "source": "hidden-dependencies.md",
      "target": "hidden-side-effects.md"
    },
    {
      "source": "work-queue-buildup.md",
      "target": "bottleneck-formation.md"
    },
    {
      "source": "increased-cost-of-development.md",
      "target": "feature-creep.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "inconsistent-naming-conventions.md"
    },
    {
      "source": "legacy-configuration-management-chaos.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "technology-stack-fragmentation.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "complex-implementation-paths.md",
      "target": "stagnant-architecture.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "information-decay.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "hardcoded-values.md"
    },
    {
      "source": "poor-interfaces-between-applications.md",
      "target": "time-pressure.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "deadline-pressure.md"
    },
    {
      "source": "poor-operational-concept.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "legacy-api-versioning-nightmare.md",
      "target": "information-decay.md"
    },
    {
      "source": "operational-overhead.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "uneven-workload-distribution.md",
      "target": "inconsistent-knowledge-acquisition.md"
    },
    {
      "source": "high-database-resource-utilization.md",
      "target": "database-connection-leaks.md"
    },
    {
      "source": "complex-deployment-process.md",
      "target": "legacy-configuration-management-chaos.md"
    },
    {
      "source": "workaround-culture.md",
      "target": "fear-of-change.md"
    },
    {
      "source": "inconsistent-knowledge-acquisition.md",
      "target": "information-fragmentation.md"
    },
    {
      "source": "team-churn-impact.md",
      "target": "undefined-code-style-guidelines.md"
    },
    {
      "source": "poor-caching-strategy.md",
      "target": "unused-indexes.md"
    },
    {
      "source": "release-anxiety.md",
      "target": "manual-deployment-processes.md"
    },
    {
      "source": "memory-swapping.md",
      "target": "memory-leaks.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "unpredictable-system-behavior.md"
    },
    {
      "source": "premature-technology-introduction.md",
      "target": "time-pressure.md"
    },
    {
      "source": "stakeholder-frustration.md",
      "target": "scope-change-resistance.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "legacy-skill-shortage.md"
    },
    {
      "source": "schema-evolution-paralysis.md",
      "target": "testing-environment-fragility.md"
    },
    {
      "source": "inadequate-configuration-management.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "team-demoralization.md",
      "target": "organizational-structure-mismatch.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "data-migration-integrity-issues.md"
    },
    {
      "source": "implementation-rework.md",
      "target": "communication-risk-within-project.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "excessive-class-size.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "inconsistent-naming-conventions.md"
    },
    {
      "source": "vendor-lock-in.md",
      "target": "dependency-on-supplier.md"
    },
    {
      "source": "process-design-flaws.md",
      "target": "resistance-to-change.md"
    },
    {
      "source": "extended-review-cycles.md",
      "target": "large-pull-requests.md"
    },
    {
      "source": "operational-overhead.md",
      "target": "frequent-hotfixes-and-rollbacks.md"
    },
    {
      "source": "technology-isolation.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "reduced-team-productivity.md"
    },
    {
      "source": "insufficient-code-review.md",
      "target": "code-review-inefficiency.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "legacy-code-without-tests.md"
    },
    {
      "source": "copy-paste-programming.md",
      "target": "time-pressure.md"
    },
    {
      "source": "long-release-cycles.md",
      "target": "high-defect-rate-in-production.md"
    },
    {
      "source": "operational-overhead.md",
      "target": "poor-interfaces-between-applications.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "poor-interfaces-between-applications.md"
    },
    {
      "source": "quality-blind-spots.md",
      "target": "testing-environment-fragility.md"
    },
    {
      "source": "shared-dependencies.md",
      "target": "convenience-driven-development.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "large-feature-scope.md"
    },
    {
      "source": "team-demoralization.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "vendor-dependency-entrapment.md",
      "target": "resistance-to-change.md"
    },
    {
      "source": "analysis-paralysis.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "user-frustration.md",
      "target": "gradual-performance-degradation.md"
    },
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "time-pressure.md"
    },
    {
      "source": "knowledge-sharing-breakdown.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "legacy-skill-shortage.md",
      "target": "vendor-lock-in.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "hidden-dependencies.md"
    },
    {
      "source": "inconsistent-codebase.md",
      "target": "team-silos.md"
    },
    {
      "source": "single-points-of-failure.md",
      "target": "uneven-workload-distribution.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "feedback-isolation.md"
    },
    {
      "source": "inadequate-test-infrastructure.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "team-churn-impact.md"
    },
    {
      "source": "unbounded-data-growth.md",
      "target": "unbounded-data-structures.md"
    },
    {
      "source": "stakeholder-confidence-loss.md",
      "target": "regulatory-compliance-drift.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "extended-cycle-times.md"
    },
    {
      "source": "tangled-cross-cutting-concerns.md",
      "target": "stagnant-architecture.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "upstream-timeouts.md",
      "target": "network-latency.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "maintenance-bottlenecks.md"
    },
    {
      "source": "legacy-configuration-management-chaos.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "procrastination-on-complex-tasks.md"
    },
    {
      "source": "mental-fatigue.md",
      "target": "inefficient-development-environment.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "stagnant-architecture.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "legacy-system-documentation-archaeology.md"
    },
    {
      "source": "synchronization-problems.md",
      "target": "lock-contention.md"
    },
    {
      "source": "resource-allocation-failures.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "increased-risk-of-bugs.md",
      "target": "difficult-developer-onboarding.md"
    },
    {
      "source": "inefficient-development-environment.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "customer-dissatisfaction.md",
      "target": "quality-degradation.md"
    },
    {
      "source": "slow-feature-development.md",
      "target": "brittle-codebase.md"
    },
    {
      "source": "knowledge-sharing-breakdown.md",
      "target": "language-barriers.md"
    },
    {
      "source": "regression-bugs.md",
      "target": "time-pressure.md"
    },
    {
      "source": "declining-business-metrics.md",
      "target": "slow-development-velocity.md"
    },
    {
      "source": "declining-business-metrics.md",
      "target": "delayed-value-delivery.md"
    },
    {
      "source": "poor-planning.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "configuration-drift.md",
      "target": "manual-deployment-processes.md"
    },
    {
      "source": "operational-overhead.md",
      "target": "missing-rollback-strategy.md"
    },
    {
      "source": "constantly-shifting-deadlines.md",
      "target": "scope-creep.md"
    },
    {
      "source": "inconsistent-behavior.md",
      "target": "hardcoded-values.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "analysis-paralysis.md"
    },
    {
      "source": "misaligned-deliverables.md",
      "target": "slow-feature-development.md"
    },
    {
      "source": "superficial-code-reviews.md",
      "target": "code-review-inefficiency.md"
    },
    {
      "source": "increased-risk-of-bugs.md",
      "target": "large-pull-requests.md"
    },
    {
      "source": "single-points-of-failure.md",
      "target": "knowledge-dependency.md"
    },
    {
      "source": "duplicated-research-effort.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "poor-domain-model.md",
      "target": "database-schema-design-problems.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "regulatory-compliance-drift.md"
    },
    {
      "source": "review-process-breakdown.md",
      "target": "long-lived-feature-branches.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "operational-overhead.md"
    },
    {
      "source": "history-of-failed-changes.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "modernization-roi-justification-failure.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "technology-stack-fragmentation.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "inefficient-processes.md"
    },
    {
      "source": "vendor-relationship-strain.md",
      "target": "breaking-changes.md"
    },
    {
      "source": "missed-deadlines.md",
      "target": "poor-planning.md"
    },
    {
      "source": "incomplete-projects.md",
      "target": "strangler-fig-pattern-failures.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "development-disruption.md",
      "target": "scope-creep.md"
    },
    {
      "source": "team-demoralization.md",
      "target": "individual-recognition-culture.md"
    },
    {
      "source": "missing-rollback-strategy.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "team-confusion.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "modernization-strategy-paralysis.md",
      "target": "time-pressure.md"
    },
    {
      "source": "refactoring-avoidance.md",
      "target": "inconsistent-naming-conventions.md"
    },
    {
      "source": "increased-cost-of-development.md",
      "target": "inefficient-development-environment.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "maintenance-paralysis.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "spaghetti-code.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "vendor-lock-in.md"
    },
    {
      "source": "cv-driven-development.md",
      "target": "cargo-culting.md"
    },
    {
      "source": "insufficient-worker-capacity.md",
      "target": "external-service-delays.md"
    },
    {
      "source": "vendor-dependency.md",
      "target": "premature-technology-introduction.md"
    },
    {
      "source": "team-silos.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "inconsistent-naming-conventions.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "constant-firefighting.md"
    },
    {
      "source": "duplicated-research-effort.md",
      "target": "team-silos.md"
    },
    {
      "source": "long-build-and-test-times.md",
      "target": "inefficient-processes.md"
    },
    {
      "source": "single-entry-point-design.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "increased-cognitive-load.md",
      "target": "inconsistent-codebase.md"
    },
    {
      "source": "inconsistent-naming-conventions.md",
      "target": "inconsistent-coding-standards.md"
    },
    {
      "source": "inadequate-test-infrastructure.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "external-service-delays.md",
      "target": "slow-database-queries.md"
    },
    {
      "source": "task-queues-backing-up.md",
      "target": "network-latency.md"
    },
    {
      "source": "code-review-inefficiency.md",
      "target": "undefined-code-style-guidelines.md"
    },
    {
      "source": "data-protection-risk.md",
      "target": "poorly-defined-responsibilities.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "strangler-fig-pattern-failures.md"
    },
    {
      "source": "quality-blind-spots.md",
      "target": "outdated-tests.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "misunderstanding-of-oop.md"
    },
    {
      "source": "rest-api-design-issues.md",
      "target": "legacy-api-versioning-nightmare.md"
    },
    {
      "source": "style-arguments-in-code-reviews.md",
      "target": "team-churn-impact.md"
    },
    {
      "source": "eager-to-please-stakeholders.md",
      "target": "product-direction-chaos.md"
    },
    {
      "source": "blame-culture.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "team-dysfunction.md"
    },
    {
      "source": "increased-customer-support-load.md",
      "target": "declining-business-metrics.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "constantly-shifting-deadlines.md",
      "target": "eager-to-please-stakeholders.md"
    },
    {
      "source": "missed-deadlines.md",
      "target": "poor-project-control.md"
    },
    {
      "source": "legacy-api-versioning-nightmare.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "operational-overhead.md",
      "target": "legacy-configuration-management-chaos.md"
    },
    {
      "source": "tangled-cross-cutting-concerns.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "decision-paralysis.md",
      "target": "blame-culture.md"
    },
    {
      "source": "misconfigured-connection-pools.md",
      "target": "incorrect-max-connection-pool-size.md"
    },
    {
      "source": "high-turnover.md",
      "target": "team-demoralization.md"
    },
    {
      "source": "complex-and-obscure-logic.md",
      "target": "insufficient-design-skills.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "fear-of-breaking-changes.md"
    },
    {
      "source": "poor-domain-model.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "unpredictable-system-behavior.md"
    },
    {
      "source": "team-members-not-engaged-in-review-process.md",
      "target": "large-pull-requests.md"
    },
    {
      "source": "reduced-individual-productivity.md",
      "target": "context-switching-overhead.md"
    },
    {
      "source": "skill-development-gaps.md",
      "target": "time-pressure.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "difficulty-quantifying-benefits.md"
    },
    {
      "source": "regression-bugs.md",
      "target": "increased-risk-of-bugs.md"
    },
    {
      "source": "defensive-coding-practices.md",
      "target": "author-frustration.md"
    },
    {
      "source": "increased-time-to-market.md",
      "target": "slow-development-velocity.md"
    },
    {
      "source": "monolithic-functions-and-classes.md",
      "target": "merge-conflicts.md"
    },
    {
      "source": "frequent-hotfixes-and-rollbacks.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "uneven-work-flow.md",
      "target": "resource-allocation-failures.md"
    },
    {
      "source": "inconsistent-behavior.md",
      "target": "data-migration-integrity-issues.md"
    },
    {
      "source": "brittle-codebase.md",
      "target": "inconsistent-codebase.md"
    },
    {
      "source": "testing-complexity.md",
      "target": "legacy-system-documentation-archaeology.md"
    },
    {
      "source": "spaghetti-code.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "work-queue-buildup.md",
      "target": "resource-allocation-failures.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "monitoring-gaps.md"
    },
    {
      "source": "inconsistent-codebase.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "poor-test-coverage.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "poor-operational-concept.md",
      "target": "time-pressure.md"
    },
    {
      "source": "team-members-not-engaged-in-review-process.md",
      "target": "inadequate-code-reviews.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "insufficient-design-skills.md"
    },
    {
      "source": "knowledge-gaps.md",
      "target": "legacy-business-logic-extraction-difficulty.md"
    },
    {
      "source": "feature-creep.md",
      "target": "eager-to-please-stakeholders.md"
    },
    {
      "source": "maintenance-bottlenecks.md",
      "target": "single-entry-point-design.md"
    },
    {
      "source": "misaligned-deliverables.md",
      "target": "large-estimates-for-small-changes.md"
    },
    {
      "source": "unrealistic-deadlines.md",
      "target": "planning-credibility-issues.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "regulatory-compliance-drift.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "negative-user-feedback.md",
      "target": "increased-error-rates.md"
    },
    {
      "source": "high-coupling-low-cohesion.md",
      "target": "monolithic-functions-and-classes.md"
    },
    {
      "source": "accumulation-of-workarounds.md",
      "target": "complex-implementation-paths.md"
    },
    {
      "source": "increased-stress-and-burnout.md",
      "target": "blame-culture.md"
    },
    {
      "source": "scope-creep.md",
      "target": "frequent-changes-to-requirements.md"
    },
    {
      "source": "hardcoded-values.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "modernization-roi-justification-failure.md",
      "target": "legacy-business-logic-extraction-difficulty.md"
    },
    {
      "source": "uneven-workload-distribution.md",
      "target": "poor-planning.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "eager-to-please-stakeholders.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "implementation-rework.md"
    },
    {
      "source": "stakeholder-dissatisfaction.md",
      "target": "misaligned-deliverables.md"
    },
    {
      "source": "modernization-strategy-paralysis.md",
      "target": "fear-of-failure.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "duplicated-work.md"
    },
    {
      "source": "code-duplication.md",
      "target": "difficult-code-reuse.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "legacy-system-documentation-archaeology.md"
    },
    {
      "source": "partial-bug-fixes.md",
      "target": "code-duplication.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "difficult-to-understand-code.md"
    },
    {
      "source": "user-trust-erosion.md",
      "target": "inconsistent-behavior.md"
    },
    {
      "source": "inconsistent-execution.md",
      "target": "poor-teamwork.md"
    },
    {
      "source": "high-coupling-low-cohesion.md",
      "target": "procedural-programming-in-oop-languages.md"
    },
    {
      "source": "user-trust-erosion.md",
      "target": "data-protection-risk.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "perfectionist-review-culture.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "feature-bloat.md"
    },
    {
      "source": "reduced-team-productivity.md",
      "target": "changing-project-scope.md"
    },
    {
      "source": "review-bottlenecks.md",
      "target": "reduced-review-participation.md"
    },
    {
      "source": "inability-to-innovate.md",
      "target": "schema-evolution-paralysis.md"
    },
    {
      "source": "modernization-roi-justification-failure.md",
      "target": "accumulated-decision-debt.md"
    },
    {
      "source": "negative-brand-perception.md",
      "target": "high-defect-rate-in-production.md"
    },
    {
      "source": "bottleneck-formation.md",
      "target": "uneven-workload-distribution.md"
    },
    {
      "source": "code-review-inefficiency.md",
      "target": "large-pull-requests.md"
    },
    {
      "source": "inconsistent-naming-conventions.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "shared-database.md",
      "target": "convenience-driven-development.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "superficial-code-reviews.md"
    },
    {
      "source": "excessive-disk-io.md",
      "target": "index-fragmentation.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "lower-code-quality.md",
      "target": "tangled-cross-cutting-concerns.md"
    },
    {
      "source": "test-debt.md",
      "target": "feature-factory.md"
    },
    {
      "source": "inconsistent-execution.md",
      "target": "undefined-code-style-guidelines.md"
    },
    {
      "source": "legacy-business-logic-extraction-difficulty.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "poor-user-experience-ux-design.md",
      "target": "poor-system-environment.md"
    },
    {
      "source": "manual-deployment-processes.md",
      "target": "missing-rollback-strategy.md"
    },
    {
      "source": "high-coupling-low-cohesion.md",
      "target": "over-reliance-on-utility-classes.md"
    },
    {
      "source": "development-disruption.md",
      "target": "premature-technology-introduction.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "reduced-individual-productivity.md"
    },
    {
      "source": "service-timeouts.md",
      "target": "network-latency.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "inconsistent-quality.md"
    },
    {
      "source": "increased-customer-support-load.md",
      "target": "feature-gaps.md"
    },
    {
      "source": "missing-rollback-strategy.md",
      "target": "time-pressure.md"
    },
    {
      "source": "long-build-and-test-times.md",
      "target": "flaky-tests.md"
    },
    {
      "source": "merge-conflicts.md",
      "target": "team-coordination-issues.md"
    },
    {
      "source": "bikeshedding.md",
      "target": "nitpicking-culture.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "long-build-and-test-times.md"
    },
    {
      "source": "inadequate-configuration-management.md",
      "target": "manual-deployment-processes.md"
    },
    {
      "source": "spaghetti-code.md",
      "target": "insufficient-code-review.md"
    },
    {
      "source": "long-release-cycles.md",
      "target": "brittle-codebase.md"
    },
    {
      "source": "team-coordination-issues.md",
      "target": "unclear-sharing-expectations.md"
    },
    {
      "source": "perfectionist-culture.md",
      "target": "fear-of-conflict.md"
    },
    {
      "source": "reduced-team-productivity.md",
      "target": "wasted-development-effort.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "decision-paralysis.md"
    },
    {
      "source": "refactoring-avoidance.md",
      "target": "blame-culture.md"
    },
    {
      "source": "poor-interfaces-between-applications.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "inconsistent-execution.md",
      "target": "knowledge-sharing-breakdown.md"
    },
    {
      "source": "delayed-project-timelines.md",
      "target": "changing-project-scope.md"
    },
    {
      "source": "unrealistic-deadlines.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "large-estimates-for-small-changes.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "poor-communication.md",
      "target": "developer-frustration-and-burnout.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "high-defect-rate-in-production.md"
    },
    {
      "source": "modernization-roi-justification-failure.md",
      "target": "invisible-nature-of-technical-debt.md"
    },
    {
      "source": "team-coordination-issues.md",
      "target": "author-frustration.md"
    },
    {
      "source": "vendor-lock-in.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "misaligned-deliverables.md",
      "target": "requirements-ambiguity.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "tacit-knowledge.md"
    },
    {
      "source": "implementation-rework.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "review-bottlenecks.md"
    },
    {
      "source": "blame-culture.md",
      "target": "time-pressure.md"
    },
    {
      "source": "data-protection-risk.md",
      "target": "cross-system-data-synchronization-problems.md"
    },
    {
      "source": "scope-creep.md",
      "target": "poor-project-control.md"
    },
    {
      "source": "slow-incident-resolution.md",
      "target": "information-decay.md"
    },
    {
      "source": "deployment-environment-inconsistencies.md",
      "target": "legacy-api-versioning-nightmare.md"
    },
    {
      "source": "complex-and-obscure-logic.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "maintenance-overhead.md",
      "target": "code-duplication.md"
    },
    {
      "source": "complex-deployment-process.md",
      "target": "deployment-environment-inconsistencies.md"
    },
    {
      "source": "inconsistent-quality.md",
      "target": "lack-of-ownership-and-accountability.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "second-system-effect.md"
    },
    {
      "source": "gradual-performance-degradation.md",
      "target": "circular-references.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "micromanagement-culture.md"
    },
    {
      "source": "user-frustration.md",
      "target": "suboptimal-solutions.md"
    },
    {
      "source": "scaling-inefficiencies.md",
      "target": "shared-database.md"
    },
    {
      "source": "scope-change-resistance.md",
      "target": "poor-contract-design.md"
    },
    {
      "source": "unclear-goals-and-priorities.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "missing-rollback-strategy.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "technology-lock-in.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "fear-of-change.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "hidden-dependencies.md"
    },
    {
      "source": "implementation-starts-without-design.md",
      "target": "fear-of-failure.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "team-coordination-issues.md"
    },
    {
      "source": "delayed-project-timelines.md",
      "target": "wasted-development-effort.md"
    },
    {
      "source": "misaligned-deliverables.md",
      "target": "no-continuous-feedback-loop.md"
    },
    {
      "source": "inadequate-initial-reviews.md",
      "target": "reviewer-inexperience.md"
    },
    {
      "source": "inadequate-configuration-management.md",
      "target": "resistance-to-change.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "release-instability.md"
    },
    {
      "source": "increased-customer-support-load.md",
      "target": "user-confusion.md"
    },
    {
      "source": "n-plus-one-query-problem.md",
      "target": "imperative-data-fetching-logic.md"
    },
    {
      "source": "misaligned-deliverables.md",
      "target": "feedback-isolation.md"
    },
    {
      "source": "team-coordination-issues.md",
      "target": "communication-risk-within-project.md"
    },
    {
      "source": "inadequate-configuration-management.md",
      "target": "team-silos.md"
    },
    {
      "source": "high-resource-utilization-on-client.md",
      "target": "scaling-inefficiencies.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "cargo-culting.md"
    },
    {
      "source": "long-running-transactions.md",
      "target": "inefficient-code.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "developer-frustration-and-burnout.md"
    },
    {
      "source": "hardcoded-values.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "inadequate-test-data-management.md",
      "target": "poor-domain-model.md"
    },
    {
      "source": "slow-feature-development.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "operational-overhead.md",
      "target": "monitoring-gaps.md"
    },
    {
      "source": "poor-domain-model.md",
      "target": "copy-paste-programming.md"
    },
    {
      "source": "legacy-configuration-management-chaos.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "technology-stack-fragmentation.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "maintenance-overhead.md",
      "target": "inconsistent-codebase.md"
    },
    {
      "source": "high-coupling-low-cohesion.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "stakeholder-developer-communication-gap.md",
      "target": "requirements-ambiguity.md"
    },
    {
      "source": "tight-coupling-issues.md",
      "target": "tangled-cross-cutting-concerns.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "vendor-dependency-entrapment.md"
    },
    {
      "source": "large-risky-releases.md",
      "target": "long-release-cycles.md"
    },
    {
      "source": "high-resource-utilization-on-client.md",
      "target": "memory-leaks.md"
    },
    {
      "source": "defensive-coding-practices.md",
      "target": "code-review-inefficiency.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "maintenance-cost-increase.md"
    },
    {
      "source": "team-demoralization.md",
      "target": "project-authority-vacuum.md"
    },
    {
      "source": "team-confusion.md",
      "target": "information-decay.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "legacy-system-documentation-archaeology.md"
    },
    {
      "source": "operational-overhead.md",
      "target": "excessive-logging.md"
    },
    {
      "source": "team-silos.md",
      "target": "organizational-structure-mismatch.md"
    },
    {
      "source": "bikeshedding.md",
      "target": "reviewer-inexperience.md"
    },
    {
      "source": "team-silos.md",
      "target": "technology-stack-fragmentation.md"
    },
    {
      "source": "complex-and-obscure-logic.md",
      "target": "poorly-defined-responsibilities.md"
    },
    {
      "source": "difficult-code-comprehension.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "team-silos.md",
      "target": "information-decay.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "cascade-failures.md",
      "target": "change-management-chaos.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "lack-of-ownership-and-accountability.md"
    },
    {
      "source": "constant-firefighting.md",
      "target": "increased-bug-count.md"
    },
    {
      "source": "hidden-dependencies.md",
      "target": "accumulation-of-workarounds.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "unproductive-meetings.md"
    },
    {
      "source": "flaky-tests.md",
      "target": "time-pressure.md"
    },
    {
      "source": "mentor-burnout.md",
      "target": "inadequate-mentoring-structure.md"
    },
    {
      "source": "undefined-code-style-guidelines.md",
      "target": "team-churn-impact.md"
    },
    {
      "source": "feedback-isolation.md",
      "target": "testing-complexity.md"
    },
    {
      "source": "communication-breakdown.md",
      "target": "rapid-team-growth.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "unclear-sharing-expectations.md"
    },
    {
      "source": "poor-project-control.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "cargo-culting.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "stakeholder-developer-communication-gap.md",
      "target": "feedback-isolation.md"
    },
    {
      "source": "constantly-shifting-deadlines.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "knowledge-dependency.md",
      "target": "staff-availability-issues.md"
    },
    {
      "source": "increased-customer-support-load.md",
      "target": "partial-bug-fixes.md"
    },
    {
      "source": "bottleneck-formation.md",
      "target": "staff-availability-issues.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "cross-system-data-synchronization-problems.md"
    },
    {
      "source": "inconsistent-onboarding-experience.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "time-pressure.md",
      "target": "scope-creep.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "maintenance-cost-increase.md"
    },
    {
      "source": "perfectionist-culture.md",
      "target": "feedback-isolation.md"
    },
    {
      "source": "large-pull-requests.md",
      "target": "reduced-code-submission-frequency.md"
    },
    {
      "source": "style-arguments-in-code-reviews.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "information-decay.md",
      "target": "lack-of-ownership-and-accountability.md"
    },
    {
      "source": "insufficient-audit-logging.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "scope-creep.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "high-maintenance-costs.md"
    },
    {
      "source": "constant-firefighting.md",
      "target": "missing-rollback-strategy.md"
    },
    {
      "source": "delayed-bug-fixes.md",
      "target": "project-resource-constraints.md"
    },
    {
      "source": "manual-deployment-processes.md",
      "target": "fear-of-change.md"
    },
    {
      "source": "reduced-team-flexibility.md",
      "target": "inconsistent-knowledge-acquisition.md"
    },
    {
      "source": "environment-variable-issues.md",
      "target": "configuration-chaos.md"
    },
    {
      "source": "micromanagement-culture.md",
      "target": "approval-dependencies.md"
    },
    {
      "source": "implementation-starts-without-design.md",
      "target": "resource-allocation-failures.md"
    },
    {
      "source": "stakeholder-confidence-loss.md",
      "target": "poor-project-control.md"
    },
    {
      "source": "technology-lock-in.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "growing-task-queues.md",
      "target": "external-service-delays.md"
    },
    {
      "source": "author-frustration.md",
      "target": "nitpicking-culture.md"
    },
    {
      "source": "slow-knowledge-transfer.md",
      "target": "complex-domain-model.md"
    },
    {
      "source": "declining-business-metrics.md",
      "target": "slow-feature-development.md"
    },
    {
      "source": "customer-dissatisfaction.md",
      "target": "feature-factory.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "vendor-lock-in.md"
    },
    {
      "source": "inefficient-database-indexing.md",
      "target": "incorrect-index-type.md"
    },
    {
      "source": "reviewer-anxiety.md",
      "target": "reviewer-inexperience.md"
    },
    {
      "source": "brittle-codebase.md",
      "target": "global-state-and-side-effects.md"
    },
    {
      "source": "modernization-roi-justification-failure.md",
      "target": "product-direction-chaos.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "quality-compromises.md"
    },
    {
      "source": "increased-time-to-market.md",
      "target": "reduced-team-productivity.md"
    },
    {
      "source": "buffer-overflow-vulnerabilities.md",
      "target": "integer-overflow-underflow.md"
    },
    {
      "source": "modernization-strategy-paralysis.md",
      "target": "legacy-system-documentation-archaeology.md"
    },
    {
      "source": "delayed-decision-making.md",
      "target": "communication-risk-within-project.md"
    },
    {
      "source": "increased-cognitive-load.md",
      "target": "difficult-developer-onboarding.md"
    },
    {
      "source": "increased-cost-of-development.md",
      "target": "incomplete-projects.md"
    },
    {
      "source": "team-confusion.md",
      "target": "changing-project-scope.md"
    },
    {
      "source": "mentor-burnout.md",
      "target": "rapid-team-growth.md"
    },
    {
      "source": "release-instability.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "increased-bug-count.md",
      "target": "increased-technical-shortcuts.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "modernization-strategy-paralysis.md"
    },
    {
      "source": "procedural-programming-in-oop-languages.md",
      "target": "over-reliance-on-utility-classes.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "schema-evolution-paralysis.md"
    },
    {
      "source": "review-process-avoidance.md",
      "target": "time-pressure.md"
    },
    {
      "source": "uneven-work-flow.md",
      "target": "process-design-flaws.md"
    },
    {
      "source": "planning-credibility-issues.md",
      "target": "delayed-project-timelines.md"
    },
    {
      "source": "duplicated-research-effort.md",
      "target": "knowledge-sharing-breakdown.md"
    },
    {
      "source": "duplicated-effort.md",
      "target": "team-coordination-issues.md"
    },
    {
      "source": "legacy-business-logic-extraction-difficulty.md",
      "target": "procedural-programming-in-oop-languages.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "algorithmic-complexity-problems.md"
    },
    {
      "source": "increased-time-to-market.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "new-hire-frustration.md",
      "target": "complex-domain-model.md"
    },
    {
      "source": "stakeholder-confidence-loss.md",
      "target": "missed-deadlines.md"
    },
    {
      "source": "vendor-lock-in.md",
      "target": "technology-stack-fragmentation.md"
    },
    {
      "source": "feature-bloat.md",
      "target": "competitive-disadvantage.md"
    },
    {
      "source": "slow-feature-development.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "context-switching-overhead.md"
    },
    {
      "source": "lower-code-quality.md",
      "target": "inefficient-development-environment.md"
    },
    {
      "source": "schema-evolution-paralysis.md",
      "target": "team-silos.md"
    },
    {
      "source": "unmotivated-employees.md",
      "target": "individual-recognition-culture.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "null-pointer-dereferences.md"
    },
    {
      "source": "customer-dissatisfaction.md",
      "target": "feature-gaps.md"
    },
    {
      "source": "insufficient-testing.md",
      "target": "testing-environment-fragility.md"
    },
    {
      "source": "increased-cost-of-development.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "eager-to-please-stakeholders.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "legacy-business-logic-extraction-difficulty.md"
    },
    {
      "source": "brittle-codebase.md",
      "target": "difficult-developer-onboarding.md"
    },
    {
      "source": "code-duplication.md",
      "target": "team-silos.md"
    },
    {
      "source": "inconsistent-codebase.md",
      "target": "inadequate-code-reviews.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "modernization-strategy-paralysis.md"
    },
    {
      "source": "user-trust-erosion.md",
      "target": "customer-dissatisfaction.md"
    },
    {
      "source": "release-anxiety.md",
      "target": "fear-of-conflict.md"
    },
    {
      "source": "constant-firefighting.md",
      "target": "flaky-tests.md"
    },
    {
      "source": "vendor-lock-in.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "legacy-code-without-tests.md",
      "target": "maintenance-paralysis.md"
    },
    {
      "source": "poor-user-experience-ux-design.md",
      "target": "feature-creep.md"
    },
    {
      "source": "inefficient-development-environment.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "strangler-fig-pattern-failures.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "unmotivated-employees.md",
      "target": "blame-culture.md"
    },
    {
      "source": "legacy-system-documentation-archaeology.md",
      "target": "information-decay.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "n-plus-one-query-problem.md"
    },
    {
      "source": "tight-coupling-issues.md",
      "target": "single-entry-point-design.md"
    },
    {
      "source": "slow-feature-development.md",
      "target": "architectural-mismatch.md"
    },
    {
      "source": "work-blocking.md",
      "target": "micromanagement-culture.md"
    },
    {
      "source": "service-timeouts.md",
      "target": "high-api-latency.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "silent-data-corruption.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "cross-system-data-synchronization-problems.md"
    },
    {
      "source": "gradual-performance-degradation.md",
      "target": "unbounded-data-growth.md"
    },
    {
      "source": "increased-cost-of-development.md",
      "target": "operational-overhead.md"
    },
    {
      "source": "reduced-individual-productivity.md",
      "target": "cognitive-overload.md"
    },
    {
      "source": "insufficient-code-review.md",
      "target": "time-pressure.md"
    },
    {
      "source": "legacy-api-versioning-nightmare.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "team-coordination-issues.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "legacy-system-documentation-archaeology.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "inadequate-test-infrastructure.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "legacy-business-logic-extraction-difficulty.md"
    },
    {
      "source": "increased-manual-work.md",
      "target": "unmotivated-employees.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "resource-contention.md"
    },
    {
      "source": "modernization-roi-justification-failure.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "single-entry-point-design.md",
      "target": "stagnant-architecture.md"
    },
    {
      "source": "mental-fatigue.md",
      "target": "increased-cognitive-load.md"
    },
    {
      "source": "reduced-feature-quality.md",
      "target": "staff-availability-issues.md"
    },
    {
      "source": "accumulated-decision-debt.md",
      "target": "decision-avoidance.md"
    },
    {
      "source": "inadequate-integration-tests.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "growing-task-queues.md",
      "target": "insufficient-worker-capacity.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "uncontrolled-codebase-growth.md"
    },
    {
      "source": "operational-overhead.md",
      "target": "poor-system-environment.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "inadequate-test-infrastructure.md"
    },
    {
      "source": "legacy-skill-shortage.md",
      "target": "technology-stack-fragmentation.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "fear-of-failure.md"
    },
    {
      "source": "hardcoded-values.md",
      "target": "procedural-programming-in-oop-languages.md"
    },
    {
      "source": "increased-cognitive-load.md",
      "target": "bloated-class.md"
    },
    {
      "source": "review-process-breakdown.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "work-blocking.md",
      "target": "approval-dependencies.md"
    },
    {
      "source": "cargo-culting.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "duplicated-work.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "gradual-performance-degradation.md",
      "target": "excessive-object-allocation.md"
    },
    {
      "source": "slow-knowledge-transfer.md",
      "target": "knowledge-sharing-breakdown.md"
    },
    {
      "source": "feature-creep-without-refactoring.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "maintenance-paralysis.md"
    },
    {
      "source": "increased-manual-work.md",
      "target": "inefficient-processes.md"
    },
    {
      "source": "inconsistent-codebase.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "implementation-starts-without-design.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "knowledge-gaps.md",
      "target": "inconsistent-onboarding-experience.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "inefficient-development-environment.md"
    },
    {
      "source": "communication-breakdown.md",
      "target": "team-dysfunction.md"
    },
    {
      "source": "legacy-skill-shortage.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "lower-code-quality.md",
      "target": "development-disruption.md"
    },
    {
      "source": "maintenance-bottlenecks.md",
      "target": "information-decay.md"
    },
    {
      "source": "partial-bug-fixes.md",
      "target": "blame-culture.md"
    },
    {
      "source": "insufficient-testing.md",
      "target": "outdated-tests.md"
    },
    {
      "source": "feature-creep.md",
      "target": "change-management-chaos.md"
    },
    {
      "source": "rapid-prototyping-becoming-production.md",
      "target": "deadline-pressure.md"
    },
    {
      "source": "merge-conflicts.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "new-hire-frustration.md",
      "target": "inconsistent-onboarding-experience.md"
    },
    {
      "source": "planning-credibility-issues.md",
      "target": "modernization-roi-justification-failure.md"
    },
    {
      "source": "cargo-culting.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "flaky-tests.md",
      "target": "testing-environment-fragility.md"
    },
    {
      "source": "extended-review-cycles.md",
      "target": "conflicting-reviewer-opinions.md"
    },
    {
      "source": "cv-driven-development.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "manual-deployment-processes.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "inadequate-configuration-management.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "manual-deployment-processes.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "change-management-chaos.md"
    },
    {
      "source": "spaghetti-code.md",
      "target": "rapid-prototyping-becoming-production.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "feature-creep-without-refactoring.md"
    },
    {
      "source": "inconsistent-execution.md",
      "target": "poor-documentation.md"
    },
    {
      "source": "implementation-starts-without-design.md",
      "target": "slow-knowledge-transfer.md"
    },
    {
      "source": "merge-conflicts.md",
      "target": "monolithic-functions-and-classes.md"
    },
    {
      "source": "maintenance-paralysis.md",
      "target": "fear-of-change.md"
    },
    {
      "source": "skill-development-gaps.md",
      "target": "procrastination-on-complex-tasks.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "strangler-fig-pattern-failures.md"
    },
    {
      "source": "overworked-teams.md",
      "target": "inefficient-processes.md"
    },
    {
      "source": "unclear-goals-and-priorities.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "assumption-based-development.md",
      "target": "information-decay.md"
    },
    {
      "source": "resource-waste.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "high-turnover.md",
      "target": "overworked-teams.md"
    },
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "race-conditions.md"
    },
    {
      "source": "high-coupling-low-cohesion.md",
      "target": "poor-encapsulation.md"
    },
    {
      "source": "lower-code-quality.md",
      "target": "unmotivated-employees.md"
    },
    {
      "source": "poor-operational-concept.md",
      "target": "vendor-lock-in.md"
    },
    {
      "source": "external-service-delays.md",
      "target": "inefficient-code.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "technology-stack-fragmentation.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "race-conditions.md"
    },
    {
      "source": "reduced-team-productivity.md",
      "target": "context-switching-overhead.md"
    },
    {
      "source": "poor-documentation.md",
      "target": "rapid-system-changes.md"
    },
    {
      "source": "stagnant-architecture.md",
      "target": "past-negative-experiences.md"
    },
    {
      "source": "single-points-of-failure.md",
      "target": "skill-development-gaps.md"
    },
    {
      "source": "information-fragmentation.md",
      "target": "information-decay.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "inconsistent-naming-conventions.md"
    },
    {
      "source": "legacy-system-documentation-archaeology.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "frequent-changes-to-requirements.md",
      "target": "competing-priorities.md"
    },
    {
      "source": "feature-creep.md",
      "target": "second-system-effect.md"
    },
    {
      "source": "excessive-class-size.md",
      "target": "poor-domain-model.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "refactoring-avoidance.md"
    },
    {
      "source": "blame-culture.md",
      "target": "inadequate-onboarding.md"
    },
    {
      "source": "strangler-fig-pattern-failures.md",
      "target": "insufficient-design-skills.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "system-stagnation.md"
    },
    {
      "source": "negative-user-feedback.md",
      "target": "high-defect-rate-in-production.md"
    },
    {
      "source": "extended-research-time.md",
      "target": "complex-domain-model.md"
    },
    {
      "source": "wasted-development-effort.md",
      "target": "duplicated-work.md"
    },
    {
      "source": "slow-response-times-for-lists.md",
      "target": "slow-database-queries.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "difficult-code-comprehension.md"
    },
    {
      "source": "delayed-project-timelines.md",
      "target": "project-resource-constraints.md"
    },
    {
      "source": "single-points-of-failure.md",
      "target": "vendor-dependency.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "cargo-culting.md"
    },
    {
      "source": "inefficient-development-environment.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "excessive-class-size.md",
      "target": "complex-domain-model.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "second-system-effect.md"
    },
    {
      "source": "resource-contention.md",
      "target": "inefficient-code.md"
    },
    {
      "source": "time-pressure.md",
      "target": "unrealistic-deadlines.md"
    },
    {
      "source": "high-resource-utilization-on-client.md",
      "target": "second-system-effect.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "poor-interfaces-between-applications.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "inadequate-test-infrastructure.md"
    },
    {
      "source": "strangler-fig-pattern-failures.md",
      "target": "time-pressure.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "manual-deployment-processes.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "difficult-code-comprehension.md",
      "target": "excessive-class-size.md"
    },
    {
      "source": "uncontrolled-codebase-growth.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "high-client-side-resource-consumption.md",
      "target": "memory-leaks.md"
    },
    {
      "source": "inadequate-test-data-management.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "legacy-system-documentation-archaeology.md",
      "target": "legacy-skill-shortage.md"
    },
    {
      "source": "legacy-business-logic-extraction-difficulty.md",
      "target": "information-decay.md"
    },
    {
      "source": "legacy-configuration-management-chaos.md",
      "target": "resistance-to-change.md"
    },
    {
      "source": "legacy-system-documentation-archaeology.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "misaligned-deliverables.md",
      "target": "cargo-culting.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "development-disruption.md"
    },
    {
      "source": "short-term-focus.md",
      "target": "difficulty-quantifying-benefits.md"
    },
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "legacy-business-logic-extraction-difficulty.md"
    },
    {
      "source": "decision-paralysis.md",
      "target": "modernization-strategy-paralysis.md"
    },
    {
      "source": "dependency-version-conflicts.md",
      "target": "shared-dependencies.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "negative-user-feedback.md",
      "target": "release-instability.md"
    },
    {
      "source": "poor-user-experience-ux-design.md",
      "target": "scaling-inefficiencies.md"
    },
    {
      "source": "operational-overhead.md",
      "target": "cross-system-data-synchronization-problems.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "cross-system-data-synchronization-problems.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "difficult-code-comprehension.md"
    },
    {
      "source": "stakeholder-dissatisfaction.md",
      "target": "stakeholder-developer-communication-gap.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "cargo-culting.md"
    },
    {
      "source": "increased-technical-shortcuts.md",
      "target": "slow-development-velocity.md"
    },
    {
      "source": "planning-credibility-issues.md",
      "target": "reduced-team-productivity.md"
    },
    {
      "source": "decision-paralysis.md",
      "target": "reduced-predictability.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "poor-teamwork.md"
    },
    {
      "source": "limited-team-learning.md",
      "target": "feedback-isolation.md"
    },
    {
      "source": "development-disruption.md",
      "target": "constant-firefighting.md"
    },
    {
      "source": "information-decay.md",
      "target": "rapid-system-changes.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "schema-evolution-paralysis.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "cargo-culting.md"
    },
    {
      "source": "frequent-hotfixes-and-rollbacks.md",
      "target": "time-pressure.md"
    },
    {
      "source": "maintenance-paralysis.md",
      "target": "legacy-skill-shortage.md"
    },
    {
      "source": "declining-business-metrics.md",
      "target": "poor-user-experience-ux-design.md"
    },
    {
      "source": "stagnant-architecture.md",
      "target": "schema-evolution-paralysis.md"
    },
    {
      "source": "suboptimal-solutions.md",
      "target": "scope-change-resistance.md"
    },
    {
      "source": "team-coordination-issues.md",
      "target": "product-direction-chaos.md"
    },
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "unrealistic-deadlines.md"
    },
    {
      "source": "increased-time-to-market.md",
      "target": "review-bottlenecks.md"
    },
    {
      "source": "maintenance-bottlenecks.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "blame-culture.md",
      "target": "team-dysfunction.md"
    },
    {
      "source": "decision-paralysis.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "poor-test-coverage.md",
      "target": "time-pressure.md"
    },
    {
      "source": "increased-technical-shortcuts.md",
      "target": "unrealistic-deadlines.md"
    },
    {
      "source": "immature-delivery-strategy.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "maintenance-overhead.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "high-database-resource-utilization.md",
      "target": "long-running-transactions.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "user-trust-erosion.md"
    },
    {
      "source": "n-plus-one-query-problem.md",
      "target": "lazy-loading.md"
    },
    {
      "source": "delayed-project-timelines.md",
      "target": "competing-priorities.md"
    },
    {
      "source": "brittle-codebase.md",
      "target": "increased-technical-shortcuts.md"
    },
    {
      "source": "legacy-skill-shortage.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "poor-domain-model.md"
    },
    {
      "source": "legacy-configuration-management-chaos.md",
      "target": "accumulation-of-workarounds.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "deadline-pressure.md"
    },
    {
      "source": "user-trust-erosion.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "cargo-culting.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "feature-bloat.md",
      "target": "eager-to-please-stakeholders.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "workaround-culture.md",
      "target": "suboptimal-solutions.md"
    },
    {
      "source": "technology-stack-fragmentation.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "analysis-paralysis.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "inefficient-development-environment.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "merge-conflicts.md"
    },
    {
      "source": "service-timeouts.md",
      "target": "deadlock-conditions.md"
    },
    {
      "source": "poor-interfaces-between-applications.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "single-points-of-failure.md",
      "target": "manual-deployment-processes.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "work-queue-buildup.md"
    },
    {
      "source": "deployment-coupling.md",
      "target": "shared-database.md"
    },
    {
      "source": "hidden-dependencies.md",
      "target": "poor-encapsulation.md"
    },
    {
      "source": "schema-evolution-paralysis.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "high-api-latency.md",
      "target": "external-service-delays.md"
    },
    {
      "source": "complex-implementation-paths.md",
      "target": "feature-factory.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "wasted-development-effort.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "manual-deployment-processes.md",
      "target": "resource-allocation-failures.md"
    },
    {
      "source": "user-frustration.md",
      "target": "delayed-bug-fixes.md"
    },
    {
      "source": "approval-dependencies.md",
      "target": "micromanagement-culture.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "increased-manual-testing-effort.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "knowledge-sharing-breakdown.md"
    },
    {
      "source": "inadequate-configuration-management.md",
      "target": "time-pressure.md"
    },
    {
      "source": "system-outages.md",
      "target": "memory-leaks.md"
    },
    {
      "source": "cascade-delays.md",
      "target": "missed-deadlines.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "api-versioning-conflicts.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "increasing-brittleness.md"
    },
    {
      "source": "avoidance-behaviors.md",
      "target": "mental-fatigue.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "technical-architecture-limitations.md"
    },
    {
      "source": "legacy-system-documentation-archaeology.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "deployment-risk.md"
    },
    {
      "source": "decision-paralysis.md",
      "target": "conflicting-reviewer-opinions.md"
    },
    {
      "source": "excessive-class-size.md",
      "target": "feature-creep-without-refactoring.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "maintenance-overhead.md"
    },
    {
      "source": "single-points-of-failure.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "individual-recognition-culture.md"
    },
    {
      "source": "vendor-dependency-entrapment.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "legacy-configuration-management-chaos.md"
    },
    {
      "source": "operational-overhead.md",
      "target": "strangler-fig-pattern-failures.md"
    },
    {
      "source": "memory-leaks.md",
      "target": "improper-event-listener-management.md"
    },
    {
      "source": "cv-driven-development.md",
      "target": "gold-plating.md"
    },
    {
      "source": "changing-project-scope.md",
      "target": "stakeholder-developer-communication-gap.md"
    },
    {
      "source": "resistance-to-change.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "copy-paste-programming.md",
      "target": "inconsistent-codebase.md"
    },
    {
      "source": "high-turnover.md",
      "target": "blame-culture.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "quality-degradation.md"
    },
    {
      "source": "regulatory-compliance-drift.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "missed-deadlines.md",
      "target": "work-blocking.md"
    },
    {
      "source": "duplicated-effort.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "network-latency.md"
    },
    {
      "source": "extended-cycle-times.md",
      "target": "work-queue-buildup.md"
    },
    {
      "source": "unclear-goals-and-priorities.md",
      "target": "product-direction-chaos.md"
    },
    {
      "source": "stakeholder-confidence-loss.md",
      "target": "legacy-business-logic-extraction-difficulty.md"
    },
    {
      "source": "testing-complexity.md",
      "target": "excessive-class-size.md"
    },
    {
      "source": "reduced-individual-productivity.md",
      "target": "inconsistent-naming-conventions.md"
    },
    {
      "source": "circular-references.md",
      "target": "improper-event-listener-management.md"
    },
    {
      "source": "modernization-strategy-paralysis.md",
      "target": "team-silos.md"
    },
    {
      "source": "user-frustration.md",
      "target": "feedback-isolation.md"
    },
    {
      "source": "inefficient-database-indexing.md",
      "target": "queries-that-prevent-index-usage.md"
    },
    {
      "source": "legacy-business-logic-extraction-difficulty.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "team-churn-impact.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "difficult-developer-onboarding.md"
    },
    {
      "source": "increased-risk-of-bugs.md",
      "target": "poor-test-coverage.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "vendor-dependency-entrapment.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "blame-culture.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "legacy-business-logic-extraction-difficulty.md",
      "target": "hardcoded-values.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "legacy-business-logic-extraction-difficulty.md"
    },
    {
      "source": "implementation-rework.md",
      "target": "feedback-isolation.md"
    },
    {
      "source": "insufficient-testing.md",
      "target": "increased-manual-testing-effort.md"
    },
    {
      "source": "slow-database-queries.md",
      "target": "inefficient-database-indexing.md"
    },
    {
      "source": "inconsistent-behavior.md",
      "target": "data-protection-risk.md"
    },
    {
      "source": "inadequate-configuration-management.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "bottleneck-formation.md",
      "target": "process-design-flaws.md"
    },
    {
      "source": "cargo-culting.md",
      "target": "information-decay.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "modernization-roi-justification-failure.md"
    },
    {
      "source": "poor-domain-model.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "shadow-systems.md"
    },
    {
      "source": "increased-cost-of-development.md",
      "target": "frequent-changes-to-requirements.md"
    },
    {
      "source": "procedural-background.md",
      "target": "time-pressure.md"
    },
    {
      "source": "negative-brand-perception.md",
      "target": "declining-business-metrics.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "cargo-culting.md"
    },
    {
      "source": "feature-creep.md",
      "target": "gold-plating.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "release-anxiety.md"
    },
    {
      "source": "second-system-effect.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "maintenance-cost-increase.md"
    },
    {
      "source": "modernization-roi-justification-failure.md",
      "target": "fear-of-failure.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "inadequate-onboarding.md"
    },
    {
      "source": "misaligned-deliverables.md",
      "target": "team-confusion.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "inappropriate-skillset.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "legacy-configuration-management-chaos.md"
    },
    {
      "source": "delayed-project-timelines.md",
      "target": "scope-creep.md"
    },
    {
      "source": "maintenance-paralysis.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "inconsistent-knowledge-acquisition.md"
    },
    {
      "source": "slow-response-times-for-lists.md",
      "target": "unbounded-data-growth.md"
    },
    {
      "source": "mentor-burnout.md",
      "target": "inappropriate-skillset.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "mental-fatigue.md"
    },
    {
      "source": "code-review-inefficiency.md",
      "target": "conflicting-reviewer-opinions.md"
    },
    {
      "source": "implementation-rework.md",
      "target": "frequent-changes-to-requirements.md"
    },
    {
      "source": "increased-bug-count.md",
      "target": "brittle-codebase.md"
    },
    {
      "source": "strangler-fig-pattern-failures.md",
      "target": "frequent-changes-to-requirements.md"
    },
    {
      "source": "regulatory-compliance-drift.md",
      "target": "data-migration-integrity-issues.md"
    },
    {
      "source": "slow-feature-development.md",
      "target": "stagnant-architecture.md"
    },
    {
      "source": "increasing-brittleness.md",
      "target": "inadequate-error-handling.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "legacy-skill-shortage.md"
    },
    {
      "source": "technology-lock-in.md",
      "target": "stagnant-architecture.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "increased-manual-work.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "procedural-background.md"
    },
    {
      "source": "user-trust-erosion.md",
      "target": "poor-user-experience-ux-design.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "complex-deployment-process.md"
    },
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "poor-interfaces-between-applications.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "author-frustration.md"
    },
    {
      "source": "unreleased-resources.md",
      "target": "circular-references.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "modernization-roi-justification-failure.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "work-blocking.md"
    },
    {
      "source": "legacy-api-versioning-nightmare.md",
      "target": "team-silos.md"
    },
    {
      "source": "declining-business-metrics.md",
      "target": "budget-overruns.md"
    },
    {
      "source": "inconsistent-naming-conventions.md",
      "target": "time-pressure.md"
    },
    {
      "source": "inadequate-test-infrastructure.md",
      "target": "resource-allocation-failures.md"
    },
    {
      "source": "increased-bug-count.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "market-pressure.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "missing-end-to-end-tests.md"
    },
    {
      "source": "difficult-to-test-code.md",
      "target": "insufficient-design-skills.md"
    },
    {
      "source": "stagnant-architecture.md",
      "target": "fear-of-change.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "procedural-programming-in-oop-languages.md"
    },
    {
      "source": "modernization-strategy-paralysis.md",
      "target": "vendor-dependency-entrapment.md"
    },
    {
      "source": "global-state-and-side-effects.md",
      "target": "hidden-side-effects.md"
    },
    {
      "source": "maintenance-cost-increase.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "decision-paralysis.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "legacy-api-versioning-nightmare.md"
    },
    {
      "source": "organizational-structure-mismatch.md",
      "target": "product-direction-chaos.md"
    },
    {
      "source": "poor-user-experience-ux-design.md",
      "target": "slow-response-times-for-lists.md"
    },
    {
      "source": "single-points-of-failure.md",
      "target": "vendor-dependency-entrapment.md"
    },
    {
      "source": "review-process-breakdown.md",
      "target": "poor-communication.md"
    },
    {
      "source": "inability-to-innovate.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "slow-knowledge-transfer.md",
      "target": "poor-documentation.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "high-bug-introduction-rate.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "resource-waste.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "complex-and-obscure-logic.md",
      "target": "monolithic-functions-and-classes.md"
    },
    {
      "source": "lower-code-quality.md",
      "target": "developer-frustration-and-burnout.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "flaky-tests.md"
    },
    {
      "source": "manual-deployment-processes.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "schema-evolution-paralysis.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "poorly-defined-responsibilities.md"
    },
    {
      "source": "difficult-code-comprehension.md",
      "target": "spaghetti-code.md"
    },
    {
      "source": "difficult-to-understand-code.md",
      "target": "inconsistent-naming-conventions.md"
    },
    {
      "source": "automated-tooling-ineffectiveness.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "user-confusion.md",
      "target": "immature-delivery-strategy.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "accumulation-of-workarounds.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "incomplete-projects.md"
    },
    {
      "source": "legacy-api-versioning-nightmare.md",
      "target": "accumulation-of-workarounds.md"
    },
    {
      "source": "wasted-development-effort.md",
      "target": "team-confusion.md"
    },
    {
      "source": "obsolete-technologies.md",
      "target": "technology-lock-in.md"
    },
    {
      "source": "data-protection-risk.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "rapid-system-changes.md"
    },
    {
      "source": "high-turnover.md",
      "target": "technology-isolation.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "reduced-team-productivity.md"
    },
    {
      "source": "code-duplication.md",
      "target": "time-pressure.md"
    },
    {
      "source": "poor-interfaces-between-applications.md",
      "target": "technology-stack-fragmentation.md"
    },
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "poor-domain-model.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "log-spam.md"
    },
    {
      "source": "poor-interfaces-between-applications.md",
      "target": "information-decay.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "second-system-effect.md"
    },
    {
      "source": "memory-leaks.md",
      "target": "unbounded-data-structures.md"
    },
    {
      "source": "feature-bloat.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "stakeholder-frustration.md",
      "target": "missed-deadlines.md"
    },
    {
      "source": "misaligned-deliverables.md",
      "target": "stakeholder-developer-communication-gap.md"
    },
    {
      "source": "customer-dissatisfaction.md",
      "target": "release-instability.md"
    },
    {
      "source": "legacy-business-logic-extraction-difficulty.md",
      "target": "god-object-anti-pattern.md"
    },
    {
      "source": "incomplete-projects.md",
      "target": "constantly-shifting-deadlines.md"
    },
    {
      "source": "inefficient-processes.md",
      "target": "unproductive-meetings.md"
    },
    {
      "source": "reduced-individual-productivity.md",
      "target": "mentor-burnout.md"
    },
    {
      "source": "customer-dissatisfaction.md",
      "target": "gradual-performance-degradation.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "maintenance-bottlenecks.md"
    },
    {
      "source": "increased-cognitive-load.md",
      "target": "mixed-coding-styles.md"
    },
    {
      "source": "poor-test-coverage.md",
      "target": "poor-planning.md"
    },
    {
      "source": "increased-cost-of-development.md",
      "target": "high-number-of-database-queries.md"
    },
    {
      "source": "team-demoralization.md",
      "target": "unmotivated-employees.md"
    },
    {
      "source": "partial-bug-fixes.md",
      "target": "synchronization-problems.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "quality-compromises.md"
    },
    {
      "source": "technology-lock-in.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "refactoring-avoidance.md",
      "target": "inefficient-development-environment.md"
    },
    {
      "source": "declining-business-metrics.md",
      "target": "high-maintenance-costs.md"
    },
    {
      "source": "extended-review-cycles.md",
      "target": "perfectionist-review-culture.md"
    },
    {
      "source": "legacy-configuration-management-chaos.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "inadequate-code-reviews.md",
      "target": "inadequate-onboarding.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "hidden-dependencies.md"
    },
    {
      "source": "poor-interfaces-between-applications.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "inefficient-code.md",
      "target": "excessive-object-allocation.md"
    },
    {
      "source": "resistance-to-change.md",
      "target": "maintenance-paralysis.md"
    },
    {
      "source": "testing-complexity.md",
      "target": "hidden-dependencies.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "monitoring-gaps.md",
      "target": "time-pressure.md"
    },
    {
      "source": "inconsistent-behavior.md",
      "target": "poor-interfaces-between-applications.md"
    },
    {
      "source": "flaky-tests.md",
      "target": "race-conditions.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "blame-culture.md"
    },
    {
      "source": "blame-culture.md",
      "target": "unrealistic-deadlines.md"
    },
    {
      "source": "deadlock-conditions.md",
      "target": "resource-contention.md"
    },
    {
      "source": "difficult-to-test-code.md",
      "target": "bloated-class.md"
    },
    {
      "source": "increased-manual-testing-effort.md",
      "target": "inadequate-test-infrastructure.md"
    },
    {
      "source": "inconsistent-naming-conventions.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "increased-stress-and-burnout.md",
      "target": "delayed-project-timelines.md"
    },
    {
      "source": "increased-manual-testing-effort.md",
      "target": "high-defect-rate-in-production.md"
    },
    {
      "source": "reduced-individual-productivity.md",
      "target": "extended-research-time.md"
    },
    {
      "source": "increased-cost-of-development.md",
      "target": "budget-overruns.md"
    },
    {
      "source": "bottleneck-formation.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "poor-domain-model.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "unpredictable-system-behavior.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "inconsistent-behavior.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "cache-invalidation-problems.md"
    },
    {
      "source": "release-instability.md",
      "target": "time-pressure.md"
    },
    {
      "source": "slow-database-queries.md",
      "target": "unbounded-data-growth.md"
    },
    {
      "source": "implementation-rework.md",
      "target": "legacy-system-documentation-archaeology.md"
    },
    {
      "source": "inability-to-innovate.md",
      "target": "modernization-strategy-paralysis.md"
    },
    {
      "source": "service-timeouts.md",
      "target": "resource-allocation-failures.md"
    },
    {
      "source": "tacit-knowledge.md",
      "target": "slow-knowledge-transfer.md"
    },
    {
      "source": "architectural-mismatch.md",
      "target": "technology-lock-in.md"
    },
    {
      "source": "frequent-changes-to-requirements.md",
      "target": "unrealistic-deadlines.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "past-negative-experiences.md"
    },
    {
      "source": "misunderstanding-of-oop.md",
      "target": "procedural-background.md"
    },
    {
      "source": "complex-implementation-paths.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "inconsistent-behavior.md",
      "target": "service-timeouts.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "rapid-prototyping-becoming-production.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "constant-firefighting.md"
    },
    {
      "source": "session-management-issues.md",
      "target": "authentication-bypass-vulnerabilities.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "configuration-drift.md"
    },
    {
      "source": "scope-creep.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "secret-management-problems.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "constant-firefighting.md"
    },
    {
      "source": "system-outages.md",
      "target": "change-management-chaos.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "perfectionist-culture.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "poor-interfaces-between-applications.md"
    },
    {
      "source": "stakeholder-confidence-loss.md",
      "target": "missing-rollback-strategy.md"
    },
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "inadequate-test-infrastructure.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "monitoring-gaps.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "difficult-to-test-code.md",
      "target": "circular-dependency-problems.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "regulatory-compliance-drift.md",
      "target": "resource-allocation-failures.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "uneven-workload-distribution.md"
    },
    {
      "source": "code-duplication.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "context-switching-overhead.md",
      "target": "approval-dependencies.md"
    },
    {
      "source": "poor-domain-model.md",
      "target": "procedural-programming-in-oop-languages.md"
    },
    {
      "source": "difficult-to-test-code.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "accumulation-of-workarounds.md",
      "target": "fear-of-change.md"
    },
    {
      "source": "inconsistent-onboarding-experience.md",
      "target": "inadequate-mentoring-structure.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "feature-gaps.md"
    },
    {
      "source": "missing-rollback-strategy.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "extended-review-cycles.md"
    },
    {
      "source": "release-instability.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "inefficient-development-environment.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "poor-system-environment.md",
      "target": "configuration-drift.md"
    },
    {
      "source": "increasing-brittleness.md",
      "target": "tight-coupling-issues.md"
    },
    {
      "source": "incomplete-knowledge.md",
      "target": "difficult-developer-onboarding.md"
    },
    {
      "source": "high-api-latency.md",
      "target": "network-latency.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "clever-code.md"
    },
    {
      "source": "flaky-tests.md",
      "target": "inconsistent-behavior.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "system-integration-blindness.md"
    },
    {
      "source": "increased-customer-support-load.md",
      "target": "data-protection-risk.md"
    },
    {
      "source": "increased-cost-of-development.md",
      "target": "difficult-code-reuse.md"
    },
    {
      "source": "high-coupling-low-cohesion.md",
      "target": "difficult-code-reuse.md"
    },
    {
      "source": "analysis-paralysis.md",
      "target": "legacy-business-logic-extraction-difficulty.md"
    },
    {
      "source": "review-process-breakdown.md",
      "target": "reviewer-inexperience.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "poor-domain-model.md"
    },
    {
      "source": "increased-customer-support-load.md",
      "target": "reduced-feature-quality.md"
    },
    {
      "source": "inconsistent-execution.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "legacy-system-documentation-archaeology.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "stakeholder-confidence-loss.md",
      "target": "declining-business-metrics.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "global-state-and-side-effects.md"
    },
    {
      "source": "increased-customer-support-load.md",
      "target": "user-trust-erosion.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "increased-cognitive-load.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "cross-system-data-synchronization-problems.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "complex-domain-model.md"
    },
    {
      "source": "task-queues-backing-up.md",
      "target": "insufficient-worker-capacity.md"
    },
    {
      "source": "hardcoded-values.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "misaligned-deliverables.md",
      "target": "poor-domain-model.md"
    },
    {
      "source": "technology-stack-fragmentation.md",
      "target": "team-silos.md"
    },
    {
      "source": "inconsistent-codebase.md",
      "target": "code-review-inefficiency.md"
    },
    {
      "source": "modernization-roi-justification-failure.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "increased-stress-and-burnout.md",
      "target": "priority-thrashing.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "schema-evolution-paralysis.md"
    },
    {
      "source": "analysis-paralysis.md",
      "target": "accumulated-decision-debt.md"
    },
    {
      "source": "architectural-mismatch.md",
      "target": "stagnant-architecture.md"
    },
    {
      "source": "delayed-project-timelines.md",
      "target": "unrealistic-deadlines.md"
    },
    {
      "source": "blame-culture.md",
      "target": "lack-of-ownership-and-accountability.md"
    },
    {
      "source": "poor-communication.md",
      "target": "team-silos.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "poor-documentation.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "poor-domain-model.md"
    },
    {
      "source": "uncontrolled-codebase-growth.md",
      "target": "stagnant-architecture.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "excessive-object-allocation.md",
      "target": "integer-overflow-underflow.md"
    },
    {
      "source": "legacy-code-without-tests.md",
      "target": "time-pressure.md"
    },
    {
      "source": "implementation-rework.md",
      "target": "assumption-based-development.md"
    },
    {
      "source": "release-anxiety.md",
      "target": "large-risky-releases.md"
    },
    {
      "source": "extended-research-time.md",
      "target": "poor-documentation.md"
    },
    {
      "source": "poor-user-experience-ux-design.md",
      "target": "lazy-loading.md"
    },
    {
      "source": "test-debt.md",
      "target": "team-silos.md"
    },
    {
      "source": "inadequate-configuration-management.md",
      "target": "inadequate-onboarding.md"
    },
    {
      "source": "staff-availability-issues.md",
      "target": "single-points-of-failure.md"
    },
    {
      "source": "legacy-configuration-management-chaos.md",
      "target": "time-pressure.md"
    },
    {
      "source": "complex-deployment-process.md",
      "target": "flaky-tests.md"
    },
    {
      "source": "feature-creep-without-refactoring.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "legacy-skill-shortage.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "communication-breakdown.md",
      "target": "organizational-structure-mismatch.md"
    },
    {
      "source": "reduced-feature-quality.md",
      "target": "slow-development-velocity.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "blame-culture.md"
    },
    {
      "source": "cargo-culting.md",
      "target": "fear-of-failure.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "mentor-burnout.md",
      "target": "complex-domain-model.md"
    },
    {
      "source": "database-schema-design-problems.md",
      "target": "poor-domain-model.md"
    },
    {
      "source": "implementation-starts-without-design.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "poor-operational-concept.md",
      "target": "legacy-configuration-management-chaos.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "inadequate-code-reviews.md"
    },
    {
      "source": "high-turnover.md",
      "target": "new-hire-frustration.md"
    },
    {
      "source": "frequent-hotfixes-and-rollbacks.md",
      "target": "immature-delivery-strategy.md"
    },
    {
      "source": "system-outages.md",
      "target": "single-points-of-failure.md"
    },
    {
      "source": "maintenance-bottlenecks.md",
      "target": "inadequate-onboarding.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "legacy-api-versioning-nightmare.md"
    },
    {
      "source": "technology-stack-fragmentation.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "stakeholder-developer-communication-gap.md",
      "target": "poor-domain-model.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "high-turnover.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "legacy-configuration-management-chaos.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "second-system-effect.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "team-silos.md"
    },
    {
      "source": "extended-cycle-times.md",
      "target": "bottleneck-formation.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "high-database-resource-utilization.md",
      "target": "poor-caching-strategy.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "vendor-lock-in.md"
    },
    {
      "source": "user-confusion.md",
      "target": "inconsistent-behavior.md"
    },
    {
      "source": "brittle-codebase.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "system-stagnation.md",
      "target": "maintenance-paralysis.md"
    },
    {
      "source": "author-frustration.md",
      "target": "extended-review-cycles.md"
    },
    {
      "source": "slow-knowledge-transfer.md",
      "target": "implicit-knowledge.md"
    },
    {
      "source": "inadequate-error-handling.md",
      "target": "rapid-prototyping-becoming-production.md"
    },
    {
      "source": "service-timeouts.md",
      "target": "thread-pool-exhaustion.md"
    },
    {
      "source": "poor-domain-model.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "slow-knowledge-transfer.md",
      "target": "information-fragmentation.md"
    },
    {
      "source": "increased-technical-shortcuts.md",
      "target": "time-pressure.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "organizational-structure-mismatch.md"
    },
    {
      "source": "legacy-configuration-management-chaos.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "missed-deadlines.md",
      "target": "cascade-delays.md"
    },
    {
      "source": "quality-degradation.md",
      "target": "brittle-codebase.md"
    },
    {
      "source": "wasted-development-effort.md",
      "target": "duplicated-effort.md"
    },
    {
      "source": "legal-disputes.md",
      "target": "vendor-relationship-strain.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "strangler-fig-pattern-failures.md"
    },
    {
      "source": "review-bottlenecks.md",
      "target": "bottleneck-formation.md"
    },
    {
      "source": "constant-firefighting.md",
      "target": "modernization-strategy-paralysis.md"
    },
    {
      "source": "poor-operational-concept.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "slow-incident-resolution.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "uncontrolled-codebase-growth.md"
    },
    {
      "source": "eager-to-please-stakeholders.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "increased-manual-testing-effort.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "vendor-lock-in.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "vendor-lock-in.md",
      "target": "eager-to-please-stakeholders.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "team-silos.md"
    },
    {
      "source": "increased-risk-of-bugs.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "regulatory-compliance-drift.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "high-resource-utilization-on-client.md",
      "target": "slow-application-performance.md"
    },
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "monitoring-gaps.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "decision-paralysis.md"
    },
    {
      "source": "modernization-roi-justification-failure.md",
      "target": "modernization-strategy-paralysis.md"
    },
    {
      "source": "authentication-bypass-vulnerabilities.md",
      "target": "session-management-issues.md"
    },
    {
      "source": "secret-management-problems.md",
      "target": "legacy-configuration-management-chaos.md"
    },
    {
      "source": "inconsistent-codebase.md",
      "target": "code-duplication.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "legacy-api-versioning-nightmare.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "monitoring-gaps.md"
    },
    {
      "source": "inability-to-innovate.md",
      "target": "slow-development-velocity.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "inefficient-frontend-code.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "missing-rollback-strategy.md"
    },
    {
      "source": "user-frustration.md",
      "target": "system-outages.md"
    },
    {
      "source": "high-database-resource-utilization.md",
      "target": "inefficient-database-indexing.md"
    },
    {
      "source": "analysis-paralysis.md",
      "target": "past-negative-experiences.md"
    },
    {
      "source": "analysis-paralysis.md",
      "target": "decision-avoidance.md"
    },
    {
      "source": "quality-degradation.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "architectural-mismatch.md"
    },
    {
      "source": "knowledge-gaps.md",
      "target": "unclear-documentation-ownership.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "automated-tooling-ineffectiveness.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "cargo-culting.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "legacy-system-documentation-archaeology.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "modernization-strategy-paralysis.md",
      "target": "insufficient-design-skills.md"
    },
    {
      "source": "environment-variable-issues.md",
      "target": "hardcoded-values.md"
    },
    {
      "source": "insufficient-design-skills.md",
      "target": "time-pressure.md"
    },
    {
      "source": "missing-rollback-strategy.md",
      "target": "legacy-configuration-management-chaos.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "log-spam.md"
    },
    {
      "source": "declining-business-metrics.md",
      "target": "high-bug-introduction-rate.md"
    },
    {
      "source": "overworked-teams.md",
      "target": "project-resource-constraints.md"
    },
    {
      "source": "review-process-breakdown.md",
      "target": "style-arguments-in-code-reviews.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "release-anxiety.md",
      "target": "deployment-risk.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "poor-domain-model.md"
    },
    {
      "source": "increased-cognitive-load.md",
      "target": "development-disruption.md"
    },
    {
      "source": "communication-breakdown.md",
      "target": "individual-recognition-culture.md"
    },
    {
      "source": "incomplete-projects.md",
      "target": "scope-creep.md"
    },
    {
      "source": "brittle-codebase.md",
      "target": "refactoring-avoidance.md"
    },
    {
      "source": "deployment-environment-inconsistencies.md",
      "target": "hardcoded-values.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "hardcoded-values.md"
    },
    {
      "source": "increased-manual-testing-effort.md",
      "target": "inadequate-test-data-management.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "lazy-loading.md"
    },
    {
      "source": "work-queue-buildup.md",
      "target": "approval-dependencies.md"
    },
    {
      "source": "manual-deployment-processes.md",
      "target": "resistance-to-change.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "feature-creep-without-refactoring.md"
    },
    {
      "source": "memory-fragmentation.md",
      "target": "alignment-and-padding-issues.md"
    },
    {
      "source": "difficult-to-test-code.md",
      "target": "inadequate-test-infrastructure.md"
    },
    {
      "source": "maintenance-paralysis.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "manual-deployment-processes.md",
      "target": "team-silos.md"
    },
    {
      "source": "no-continuous-feedback-loop.md",
      "target": "stakeholder-developer-communication-gap.md"
    },
    {
      "source": "feature-creep.md",
      "target": "scope-creep.md"
    },
    {
      "source": "vendor-dependency-entrapment.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "fear-of-change.md"
    },
    {
      "source": "delayed-decision-making.md",
      "target": "approval-dependencies.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "automated-tooling-ineffectiveness.md"
    },
    {
      "source": "communication-breakdown.md",
      "target": "blame-culture.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "insufficient-code-review.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "constantly-shifting-deadlines.md"
    },
    {
      "source": "legacy-skill-shortage.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "complex-deployment-process.md",
      "target": "hardcoded-values.md"
    },
    {
      "source": "increased-bug-count.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "mentor-burnout.md",
      "target": "knowledge-sharing-breakdown.md"
    },
    {
      "source": "bottleneck-formation.md",
      "target": "capacity-mismatch.md"
    },
    {
      "source": "extended-research-time.md",
      "target": "duplicated-research-effort.md"
    },
    {
      "source": "mental-fatigue.md",
      "target": "avoidance-behaviors.md"
    },
    {
      "source": "gradual-performance-degradation.md",
      "target": "memory-fragmentation.md"
    },
    {
      "source": "tacit-knowledge.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "scope-creep.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "legacy-configuration-management-chaos.md"
    },
    {
      "source": "customer-dissatisfaction.md",
      "target": "delayed-issue-resolution.md"
    },
    {
      "source": "increased-technical-shortcuts.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "increased-manual-testing-effort.md",
      "target": "insufficient-testing.md"
    },
    {
      "source": "legacy-api-versioning-nightmare.md",
      "target": "insufficient-design-skills.md"
    },
    {
      "source": "cv-driven-development.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "quality-blind-spots.md",
      "target": "inadequate-test-infrastructure.md"
    },
    {
      "source": "testing-complexity.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "cv-driven-development.md",
      "target": "eager-to-please-stakeholders.md"
    },
    {
      "source": "stakeholder-confidence-loss.md",
      "target": "legacy-skill-shortage.md"
    },
    {
      "source": "inconsistent-execution.md",
      "target": "increased-manual-work.md"
    },
    {
      "source": "race-conditions.md",
      "target": "global-state-and-side-effects.md"
    },
    {
      "source": "operational-overhead.md",
      "target": "technology-stack-fragmentation.md"
    },
    {
      "source": "information-decay.md",
      "target": "unclear-documentation-ownership.md"
    },
    {
      "source": "bikeshedding.md",
      "target": "time-pressure.md"
    },
    {
      "source": "shared-dependencies.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "unclear-sharing-expectations.md"
    },
    {
      "source": "lower-code-quality.md",
      "target": "long-build-and-test-times.md"
    },
    {
      "source": "single-points-of-failure.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "constant-firefighting.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "review-bottlenecks.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "system-outages.md",
      "target": "system-integration-blindness.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "configuration-drift.md"
    },
    {
      "source": "code-duplication.md",
      "target": "incomplete-knowledge.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "time-pressure.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "legacy-api-versioning-nightmare.md",
      "target": "time-pressure.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "modernization-strategy-paralysis.md"
    },
    {
      "source": "user-trust-erosion.md",
      "target": "large-risky-releases.md"
    },
    {
      "source": "database-query-performance-issues.md",
      "target": "database-schema-design-problems.md"
    },
    {
      "source": "legacy-code-without-tests.md",
      "target": "complex-implementation-paths.md"
    },
    {
      "source": "delayed-decision-making.md",
      "target": "project-authority-vacuum.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "brittle-codebase.md"
    },
    {
      "source": "circular-dependency-problems.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "inefficient-database-indexing.md",
      "target": "index-fragmentation.md"
    },
    {
      "source": "mentor-burnout.md",
      "target": "difficult-developer-onboarding.md"
    },
    {
      "source": "bikeshedding.md",
      "target": "fear-of-conflict.md"
    },
    {
      "source": "authentication-bypass-vulnerabilities.md",
      "target": "vendor-dependency-entrapment.md"
    },
    {
      "source": "testing-complexity.md",
      "target": "inadequate-test-infrastructure.md"
    },
    {
      "source": "difficult-to-test-code.md",
      "target": "tangled-cross-cutting-concerns.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "extended-research-time.md"
    },
    {
      "source": "legacy-business-logic-extraction-difficulty.md",
      "target": "scope-creep.md"
    },
    {
      "source": "style-arguments-in-code-reviews.md",
      "target": "undefined-code-style-guidelines.md"
    },
    {
      "source": "reduced-individual-productivity.md",
      "target": "new-hire-frustration.md"
    },
    {
      "source": "bikeshedding.md",
      "target": "inadequate-code-reviews.md"
    },
    {
      "source": "implementation-starts-without-design.md",
      "target": "insufficient-design-skills.md"
    },
    {
      "source": "accumulation-of-workarounds.md",
      "target": "increased-technical-shortcuts.md"
    },
    {
      "source": "team-confusion.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "legacy-skill-shortage.md"
    },
    {
      "source": "large-estimates-for-small-changes.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "lower-code-quality.md",
      "target": "competing-priorities.md"
    },
    {
      "source": "reduced-team-productivity.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "testing-environment-fragility.md"
    },
    {
      "source": "frequent-hotfixes-and-rollbacks.md",
      "target": "large-risky-releases.md"
    },
    {
      "source": "feature-creep-without-refactoring.md",
      "target": "time-pressure.md"
    },
    {
      "source": "single-points-of-failure.md",
      "target": "shared-database.md"
    },
    {
      "source": "maintenance-overhead.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "cascade-failures.md",
      "target": "increasing-brittleness.md"
    },
    {
      "source": "mental-fatigue.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "frequent-hotfixes-and-rollbacks.md",
      "target": "manual-deployment-processes.md"
    },
    {
      "source": "configuration-drift.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "data-protection-risk.md",
      "target": "integer-overflow-underflow.md"
    },
    {
      "source": "vendor-lock-in.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "suboptimal-solutions.md",
      "target": "time-pressure.md"
    },
    {
      "source": "inadequate-requirements-gathering.md",
      "target": "time-pressure.md"
    },
    {
      "source": "implementation-starts-without-design.md",
      "target": "time-pressure.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "large-estimates-for-small-changes.md"
    },
    {
      "source": "poor-system-environment.md",
      "target": "deployment-environment-inconsistencies.md"
    },
    {
      "source": "lower-code-quality.md",
      "target": "team-coordination-issues.md"
    },
    {
      "source": "reduced-team-productivity.md",
      "target": "poor-teamwork.md"
    },
    {
      "source": "project-resource-constraints.md",
      "target": "competing-priorities.md"
    },
    {
      "source": "time-pressure.md",
      "target": "unrealistic-schedule.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "knowledge-dependency.md"
    },
    {
      "source": "analysis-paralysis.md",
      "target": "perfectionist-review-culture.md"
    },
    {
      "source": "scope-creep.md",
      "target": "inadequate-requirements-gathering.md"
    },
    {
      "source": "cv-driven-development.md",
      "target": "perfectionist-culture.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "unrealistic-schedule.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "implicit-knowledge.md"
    },
    {
      "source": "refactoring-avoidance.md",
      "target": "fear-of-change.md"
    },
    {
      "source": "changing-project-scope.md",
      "target": "inadequate-requirements-gathering.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "global-state-and-side-effects.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "information-fragmentation.md"
    },
    {
      "source": "inadequate-test-infrastructure.md",
      "target": "team-silos.md"
    },
    {
      "source": "fear-of-breaking-changes.md",
      "target": "fear-of-conflict.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "bloated-class.md"
    },
    {
      "source": "inability-to-innovate.md",
      "target": "modernization-roi-justification-failure.md"
    },
    {
      "source": "convenience-driven-development.md",
      "target": "slow-knowledge-transfer.md"
    },
    {
      "source": "history-of-failed-changes.md",
      "target": "deployment-risk.md"
    },
    {
      "source": "reviewer-anxiety.md",
      "target": "fear-of-conflict.md"
    },
    {
      "source": "delayed-project-timelines.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "procedural-background.md",
      "target": "misunderstanding-of-oop.md"
    },
    {
      "source": "lower-code-quality.md",
      "target": "style-arguments-in-code-reviews.md"
    },
    {
      "source": "extended-cycle-times.md",
      "target": "testing-environment-fragility.md"
    },
    {
      "source": "maintenance-overhead.md",
      "target": "suboptimal-solutions.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "context-switching-overhead.md"
    },
    {
      "source": "inefficient-development-environment.md",
      "target": "team-silos.md"
    },
    {
      "source": "vendor-lock-in.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "technology-isolation.md",
      "target": "stagnant-architecture.md"
    },
    {
      "source": "inconsistent-codebase.md",
      "target": "inconsistent-naming-conventions.md"
    },
    {
      "source": "stakeholder-confidence-loss.md",
      "target": "stakeholder-frustration.md"
    },
    {
      "source": "procedural-programming-in-oop-languages.md",
      "target": "misunderstanding-of-oop.md"
    },
    {
      "source": "extended-research-time.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "resistance-to-change.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "superficial-code-reviews.md",
      "target": "reviewer-anxiety.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "inconsistent-naming-conventions.md"
    },
    {
      "source": "reduced-team-productivity.md",
      "target": "knowledge-sharing-breakdown.md"
    },
    {
      "source": "gradual-performance-degradation.md",
      "target": "unreleased-resources.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "vendor-lock-in.md"
    },
    {
      "source": "inadequate-code-reviews.md",
      "target": "lack-of-ownership-and-accountability.md"
    },
    {
      "source": "inconsistent-quality.md",
      "target": "inconsistent-codebase.md"
    },
    {
      "source": "high-coupling-low-cohesion.md",
      "target": "ripple-effect-of-changes.md"
    },
    {
      "source": "lower-code-quality.md",
      "target": "slow-knowledge-transfer.md"
    },
    {
      "source": "increased-technical-shortcuts.md",
      "target": "unrealistic-schedule.md"
    },
    {
      "source": "memory-leaks.md",
      "target": "circular-references.md"
    },
    {
      "source": "increased-stress-and-burnout.md",
      "target": "time-pressure.md"
    },
    {
      "source": "virtual-memory-thrashing.md",
      "target": "memory-leaks.md"
    },
    {
      "source": "long-running-transactions.md",
      "target": "network-latency.md"
    },
    {
      "source": "maintenance-paralysis.md",
      "target": "legacy-code-without-tests.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "bloated-class.md"
    },
    {
      "source": "modernization-roi-justification-failure.md",
      "target": "resistance-to-change.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "legacy-code-without-tests.md"
    },
    {
      "source": "release-instability.md",
      "target": "immature-delivery-strategy.md"
    },
    {
      "source": "operational-overhead.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "increased-bug-count.md",
      "target": "time-pressure.md"
    },
    {
      "source": "difficult-code-comprehension.md",
      "target": "poor-naming-conventions.md"
    },
    {
      "source": "negative-user-feedback.md",
      "target": "user-confusion.md"
    },
    {
      "source": "long-release-cycles.md",
      "target": "perfectionist-culture.md"
    },
    {
      "source": "inconsistent-codebase.md",
      "target": "team-churn-impact.md"
    },
    {
      "source": "cargo-culting.md",
      "target": "slow-knowledge-transfer.md"
    },
    {
      "source": "upstream-timeouts.md",
      "target": "high-api-latency.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "delayed-issue-resolution.md"
    },
    {
      "source": "operational-overhead.md",
      "target": "hardcoded-values.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "maintenance-overhead.md",
      "target": "delayed-issue-resolution.md"
    },
    {
      "source": "legacy-system-documentation-archaeology.md",
      "target": "procedural-programming-in-oop-languages.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "outdated-tests.md"
    },
    {
      "source": "reduced-team-productivity.md",
      "target": "mentor-burnout.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "strangler-fig-pattern-failures.md"
    },
    {
      "source": "time-pressure.md",
      "target": "missed-deadlines.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "competing-priorities.md"
    },
    {
      "source": "extended-cycle-times.md",
      "target": "context-switching-overhead.md"
    },
    {
      "source": "long-release-cycles.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "stagnant-architecture.md",
      "target": "strangler-fig-pattern-failures.md"
    },
    {
      "source": "system-outages.md",
      "target": "poor-system-environment.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "maintenance-bottlenecks.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "maintenance-overhead.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "history-of-failed-changes.md"
    },
    {
      "source": "cascade-delays.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "synchronization-problems.md",
      "target": "incomplete-knowledge.md"
    },
    {
      "source": "analysis-paralysis.md",
      "target": "fear-of-change.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "invisible-nature-of-technical-debt.md"
    },
    {
      "source": "strangler-fig-pattern-failures.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "legacy-system-documentation-archaeology.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "inadequate-test-infrastructure.md"
    },
    {
      "source": "memory-leaks.md",
      "target": "resource-allocation-failures.md"
    },
    {
      "source": "test-debt.md",
      "target": "constant-firefighting.md"
    },
    {
      "source": "extended-review-cycles.md",
      "target": "inadequate-initial-reviews.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "integer-overflow-underflow.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "decision-paralysis.md",
      "target": "fear-of-failure.md"
    },
    {
      "source": "stakeholder-confidence-loss.md",
      "target": "cascade-delays.md"
    },
    {
      "source": "past-negative-experiences.md",
      "target": "brittle-codebase.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "increased-customer-support-load.md",
      "target": "delayed-bug-fixes.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "vendor-lock-in.md"
    },
    {
      "source": "maintenance-bottlenecks.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "unmotivated-employees.md",
      "target": "increased-manual-work.md"
    },
    {
      "source": "release-anxiety.md",
      "target": "complex-deployment-process.md"
    },
    {
      "source": "vendor-dependency-entrapment.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "manual-deployment-processes.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "single-points-of-failure.md",
      "target": "reduced-team-flexibility.md"
    },
    {
      "source": "inadequate-test-infrastructure.md",
      "target": "lack-of-ownership-and-accountability.md"
    },
    {
      "source": "missed-deadlines.md",
      "target": "scope-creep.md"
    },
    {
      "source": "high-turnover.md",
      "target": "inefficient-development-environment.md"
    },
    {
      "source": "cascade-failures.md",
      "target": "service-timeouts.md"
    },
    {
      "source": "inefficient-processes.md",
      "target": "technology-stack-fragmentation.md"
    },
    {
      "source": "second-system-effect.md",
      "target": "modernization-strategy-paralysis.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "limited-team-learning.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "cross-system-data-synchronization-problems.md"
    },
    {
      "source": "stagnant-architecture.md",
      "target": "modernization-strategy-paralysis.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "monitoring-gaps.md"
    },
    {
      "source": "database-connection-leaks.md",
      "target": "long-running-transactions.md"
    },
    {
      "source": "code-review-inefficiency.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "inconsistent-codebase.md",
      "target": "undefined-code-style-guidelines.md"
    },
    {
      "source": "scaling-inefficiencies.md",
      "target": "load-balancing-problems.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "configuration-chaos.md"
    },
    {
      "source": "modernization-roi-justification-failure.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "workaround-culture.md",
      "target": "project-resource-constraints.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "style-arguments-in-code-reviews.md"
    },
    {
      "source": "high-number-of-database-queries.md",
      "target": "n-plus-one-query-problem.md"
    },
    {
      "source": "past-negative-experiences.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "global-state-and-side-effects.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "release-anxiety.md"
    },
    {
      "source": "regulatory-compliance-drift.md",
      "target": "slow-development-velocity.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "constant-firefighting.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "inconsistent-quality.md"
    },
    {
      "source": "extended-research-time.md",
      "target": "premature-technology-introduction.md"
    },
    {
      "source": "strangler-fig-pattern-failures.md",
      "target": "poor-interfaces-between-applications.md"
    },
    {
      "source": "environment-variable-issues.md",
      "target": "testing-environment-fragility.md"
    },
    {
      "source": "regulatory-compliance-drift.md",
      "target": "data-protection-risk.md"
    },
    {
      "source": "user-trust-erosion.md",
      "target": "frequent-hotfixes-and-rollbacks.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "legacy-api-versioning-nightmare.md"
    },
    {
      "source": "priority-thrashing.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "second-system-effect.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "missed-deadlines.md",
      "target": "modernization-strategy-paralysis.md"
    },
    {
      "source": "poor-user-experience-ux-design.md",
      "target": "high-number-of-database-queries.md"
    },
    {
      "source": "inability-to-innovate.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "second-system-effect.md",
      "target": "eager-to-please-stakeholders.md"
    },
    {
      "source": "priority-thrashing.md",
      "target": "work-queue-buildup.md"
    },
    {
      "source": "stagnant-architecture.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "monolithic-functions-and-classes.md",
      "target": "procedural-programming-in-oop-languages.md"
    },
    {
      "source": "task-queues-backing-up.md",
      "target": "high-api-latency.md"
    },
    {
      "source": "shared-database.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "technology-stack-fragmentation.md",
      "target": "time-pressure.md"
    },
    {
      "source": "inconsistent-codebase.md",
      "target": "automated-tooling-ineffectiveness.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "data-protection-risk.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "slow-knowledge-transfer.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "feature-bloat.md"
    },
    {
      "source": "misaligned-deliverables.md",
      "target": "inadequate-requirements-gathering.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "partial-bug-fixes.md"
    },
    {
      "source": "configuration-drift.md",
      "target": "legacy-configuration-management-chaos.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "testing-environment-fragility.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "fear-of-breaking-changes.md"
    },
    {
      "source": "legacy-api-versioning-nightmare.md",
      "target": "stagnant-architecture.md"
    },
    {
      "source": "manual-deployment-processes.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "regulatory-compliance-drift.md",
      "target": "resistance-to-change.md"
    },
    {
      "source": "vendor-lock-in.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "hidden-side-effects.md"
    },
    {
      "source": "poor-communication.md",
      "target": "time-pressure.md"
    },
    {
      "source": "increased-bug-count.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "configuration-drift.md",
      "target": "technology-stack-fragmentation.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "convenience-driven-development.md"
    },
    {
      "source": "memory-swapping.md",
      "target": "high-connection-count.md"
    },
    {
      "source": "increased-customer-support-load.md",
      "target": "data-migration-integrity-issues.md"
    },
    {
      "source": "inconsistent-naming-conventions.md",
      "target": "high-turnover.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "stack-overflow-errors.md"
    },
    {
      "source": "regression-bugs.md",
      "target": "high-defect-rate-in-production.md"
    },
    {
      "source": "bottleneck-formation.md",
      "target": "review-bottlenecks.md"
    },
    {
      "source": "increased-cost-of-development.md",
      "target": "log-spam.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "delayed-project-timelines.md"
    },
    {
      "source": "cv-driven-development.md",
      "target": "analysis-paralysis.md"
    },
    {
      "source": "declining-business-metrics.md",
      "target": "feature-factory.md"
    },
    {
      "source": "cv-driven-development.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "implementation-rework.md",
      "target": "schema-evolution-paralysis.md"
    },
    {
      "source": "strangler-fig-pattern-failures.md",
      "target": "schema-evolution-paralysis.md"
    },
    {
      "source": "staff-availability-issues.md",
      "target": "competing-priorities.md"
    },
    {
      "source": "constant-firefighting.md",
      "target": "modernization-roi-justification-failure.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "inability-to-innovate.md",
      "target": "regulatory-compliance-drift.md"
    },
    {
      "source": "cascade-failures.md",
      "target": "unpredictable-system-behavior.md"
    },
    {
      "source": "incomplete-projects.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "bloated-class.md",
      "target": "convenience-driven-development.md"
    },
    {
      "source": "user-trust-erosion.md",
      "target": "missing-rollback-strategy.md"
    },
    {
      "source": "inadequate-configuration-management.md",
      "target": "lack-of-ownership-and-accountability.md"
    },
    {
      "source": "increased-customer-support-load.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "knowledge-sharing-breakdown.md",
      "target": "mentor-burnout.md"
    },
    {
      "source": "architectural-mismatch.md",
      "target": "accumulated-decision-debt.md"
    },
    {
      "source": "inconsistent-naming-conventions.md",
      "target": "resistance-to-change.md"
    },
    {
      "source": "deployment-environment-inconsistencies.md",
      "target": "configuration-chaos.md"
    },
    {
      "source": "extended-research-time.md",
      "target": "legacy-code-without-tests.md"
    },
    {
      "source": "eager-to-please-stakeholders.md",
      "target": "fear-of-conflict.md"
    },
    {
      "source": "inability-to-innovate.md",
      "target": "constant-firefighting.md"
    },
    {
      "source": "inconsistent-naming-conventions.md",
      "target": "team-silos.md"
    },
    {
      "source": "thread-pool-exhaustion.md",
      "target": "resource-contention.md"
    },
    {
      "source": "feature-creep.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "increased-cognitive-load.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "inadequate-test-infrastructure.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "gradual-performance-degradation.md",
      "target": "algorithmic-complexity-problems.md"
    },
    {
      "source": "long-release-cycles.md",
      "target": "deployment-risk.md"
    },
    {
      "source": "gradual-performance-degradation.md",
      "target": "defensive-coding-practices.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "maintenance-overhead.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "quality-blind-spots.md",
      "target": "legacy-business-logic-extraction-difficulty.md"
    },
    {
      "source": "refactoring-avoidance.md",
      "target": "fear-of-failure.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "reduced-feature-quality.md",
      "target": "time-pressure.md"
    },
    {
      "source": "bottleneck-formation.md",
      "target": "approval-dependencies.md"
    },
    {
      "source": "cognitive-overload.md",
      "target": "context-switching-overhead.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "premature-technology-introduction.md"
    },
    {
      "source": "legacy-skill-shortage.md",
      "target": "modernization-roi-justification-failure.md"
    },
    {
      "source": "data-protection-risk.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "delayed-issue-resolution.md",
      "target": "lack-of-ownership-and-accountability.md"
    },
    {
      "source": "wasted-development-effort.md",
      "target": "inadequate-requirements-gathering.md"
    },
    {
      "source": "obsolete-technologies.md",
      "target": "reduced-innovation.md"
    },
    {
      "source": "increased-manual-testing-effort.md",
      "target": "flaky-tests.md"
    },
    {
      "source": "regulatory-compliance-drift.md",
      "target": "vendor-dependency-entrapment.md"
    },
    {
      "source": "vendor-dependency-entrapment.md",
      "target": "legacy-skill-shortage.md"
    },
    {
      "source": "difficult-code-comprehension.md",
      "target": "inconsistent-codebase.md"
    },
    {
      "source": "increased-time-to-market.md",
      "target": "complex-deployment-process.md"
    },
    {
      "source": "difficult-to-test-code.md",
      "target": "legacy-code-without-tests.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "time-pressure.md"
    },
    {
      "source": "slow-knowledge-transfer.md",
      "target": "information-decay.md"
    },
    {
      "source": "release-instability.md",
      "target": "large-risky-releases.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "vendor-dependency-entrapment.md"
    },
    {
      "source": "development-disruption.md",
      "target": "frequent-hotfixes-and-rollbacks.md"
    },
    {
      "source": "copy-paste-programming.md",
      "target": "mixed-coding-styles.md"
    },
    {
      "source": "legacy-api-versioning-nightmare.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "delayed-project-timelines.md",
      "target": "staff-availability-issues.md"
    },
    {
      "source": "testing-complexity.md",
      "target": "legacy-business-logic-extraction-difficulty.md"
    },
    {
      "source": "complex-implementation-paths.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "service-timeouts.md",
      "target": "poor-interfaces-between-applications.md"
    },
    {
      "source": "release-instability.md",
      "target": "manual-deployment-processes.md"
    },
    {
      "source": "brittle-codebase.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "difficult-to-understand-code.md",
      "target": "cargo-culting.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "legacy-api-versioning-nightmare.md"
    },
    {
      "source": "code-review-inefficiency.md",
      "target": "reviewer-inexperience.md"
    },
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "strangler-fig-pattern-failures.md"
    },
    {
      "source": "knowledge-sharing-breakdown.md",
      "target": "time-pressure.md"
    },
    {
      "source": "legacy-business-logic-extraction-difficulty.md",
      "target": "accumulation-of-workarounds.md"
    },
    {
      "source": "legal-disputes.md",
      "target": "scope-creep.md"
    },
    {
      "source": "difficult-to-test-code.md",
      "target": "monolithic-functions-and-classes.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "legacy-system-documentation-archaeology.md"
    },
    {
      "source": "misunderstanding-of-oop.md",
      "target": "over-reliance-on-utility-classes.md"
    },
    {
      "source": "poor-interfaces-between-applications.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "inadequate-test-infrastructure.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "inconsistent-behavior.md",
      "target": "cross-system-data-synchronization-problems.md"
    },
    {
      "source": "limited-team-learning.md",
      "target": "blame-culture.md"
    },
    {
      "source": "reduced-individual-productivity.md",
      "target": "inefficient-development-environment.md"
    },
    {
      "source": "new-hire-frustration.md",
      "target": "information-decay.md"
    },
    {
      "source": "declining-business-metrics.md",
      "target": "user-confusion.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "decision-paralysis.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "inadequate-initial-reviews.md"
    },
    {
      "source": "mentor-burnout.md",
      "target": "new-hire-frustration.md"
    },
    {
      "source": "configuration-drift.md",
      "target": "rapid-system-changes.md"
    },
    {
      "source": "quality-compromises.md",
      "target": "constant-firefighting.md"
    },
    {
      "source": "inefficient-development-environment.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "unclear-documentation-ownership.md",
      "target": "time-pressure.md"
    },
    {
      "source": "quality-blind-spots.md",
      "target": "poor-test-coverage.md"
    },
    {
      "source": "power-struggles.md",
      "target": "project-authority-vacuum.md"
    },
    {
      "source": "inconsistent-codebase.md",
      "target": "copy-paste-programming.md"
    },
    {
      "source": "strangler-fig-pattern-failures.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "extended-research-time.md",
      "target": "analysis-paralysis.md"
    },
    {
      "source": "reduced-review-participation.md",
      "target": "time-pressure.md"
    },
    {
      "source": "extended-cycle-times.md",
      "target": "process-design-flaws.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "long-build-and-test-times.md"
    },
    {
      "source": "hardcoded-values.md",
      "target": "resistance-to-change.md"
    },
    {
      "source": "synchronization-problems.md",
      "target": "race-conditions.md"
    },
    {
      "source": "scaling-inefficiencies.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "review-bottlenecks.md"
    },
    {
      "source": "flaky-tests.md",
      "target": "database-connection-leaks.md"
    },
    {
      "source": "bottleneck-formation.md",
      "target": "reduced-team-flexibility.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "technology-stack-fragmentation.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "gradual-performance-degradation.md"
    },
    {
      "source": "inconsistent-naming-conventions.md",
      "target": "lack-of-ownership-and-accountability.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "modernization-roi-justification-failure.md"
    },
    {
      "source": "manual-deployment-processes.md",
      "target": "time-pressure.md"
    },
    {
      "source": "constant-firefighting.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "global-state-and-side-effects.md",
      "target": "poor-encapsulation.md"
    },
    {
      "source": "modernization-strategy-paralysis.md",
      "target": "vendor-lock-in.md"
    },
    {
      "source": "difficult-to-test-code.md",
      "target": "over-reliance-on-utility-classes.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "perfectionist-culture.md"
    },
    {
      "source": "reduced-innovation.md",
      "target": "nitpicking-culture.md"
    },
    {
      "source": "schema-evolution-paralysis.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "avoidance-behaviors.md",
      "target": "cognitive-overload.md"
    },
    {
      "source": "competing-priorities.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "slow-incident-resolution.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "testing-complexity.md",
      "target": "code-duplication.md"
    },
    {
      "source": "copy-paste-programming.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "gold-plating.md",
      "target": "cargo-culting.md"
    },
    {
      "source": "excessive-class-size.md",
      "target": "convenience-driven-development.md"
    },
    {
      "source": "scope-creep.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "scope-creep.md",
      "target": "eager-to-please-stakeholders.md"
    },
    {
      "source": "high-resource-utilization-on-client.md",
      "target": "high-api-latency.md"
    },
    {
      "source": "team-coordination-issues.md",
      "target": "power-struggles.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "poor-documentation.md"
    },
    {
      "source": "stagnant-architecture.md",
      "target": "history-of-failed-changes.md"
    },
    {
      "source": "global-state-and-side-effects.md",
      "target": "time-pressure.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "inadequate-test-data-management.md"
    },
    {
      "source": "external-service-delays.md",
      "target": "network-latency.md"
    },
    {
      "source": "poor-encapsulation.md",
      "target": "time-pressure.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "second-system-effect.md"
    },
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "missing-rollback-strategy.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "second-system-effect.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "high-turnover.md",
      "target": "modernization-roi-justification-failure.md"
    },
    {
      "source": "feature-creep.md",
      "target": "market-pressure.md"
    },
    {
      "source": "poor-operational-concept.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "inadequate-configuration-management.md",
      "target": "legacy-configuration-management-chaos.md"
    },
    {
      "source": "flaky-tests.md",
      "target": "complex-implementation-paths.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "team-coordination-issues.md"
    },
    {
      "source": "unclear-sharing-expectations.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "shared-dependencies.md",
      "target": "stagnant-architecture.md"
    },
    {
      "source": "constant-firefighting.md",
      "target": "operational-overhead.md"
    },
    {
      "source": "accumulation-of-workarounds.md",
      "target": "brittle-codebase.md"
    },
    {
      "source": "authentication-bypass-vulnerabilities.md",
      "target": "authorization-flaws.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "large-risky-releases.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "code-review-inefficiency.md"
    },
    {
      "source": "tacit-knowledge.md",
      "target": "time-pressure.md"
    },
    {
      "source": "history-of-failed-changes.md",
      "target": "blame-culture.md"
    },
    {
      "source": "manual-deployment-processes.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "constant-firefighting.md",
      "target": "regulatory-compliance-drift.md"
    },
    {
      "source": "vendor-dependency-entrapment.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "gold-plating.md",
      "target": "eager-to-please-stakeholders.md"
    },
    {
      "source": "communication-breakdown.md",
      "target": "unclear-sharing-expectations.md"
    },
    {
      "source": "team-churn-impact.md",
      "target": "modernization-strategy-paralysis.md"
    },
    {
      "source": "high-api-latency.md",
      "target": "poor-caching-strategy.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "duplicated-research-effort.md"
    },
    {
      "source": "inadequate-code-reviews.md",
      "target": "time-pressure.md"
    },
    {
      "source": "negative-brand-perception.md",
      "target": "data-protection-risk.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "manual-deployment-processes.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "high-coupling-low-cohesion.md",
      "target": "insufficient-design-skills.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "fear-of-change.md"
    },
    {
      "source": "difficult-code-comprehension.md",
      "target": "complex-domain-model.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "increased-stress-and-burnout.md"
    },
    {
      "source": "maintenance-bottlenecks.md",
      "target": "excessive-class-size.md"
    },
    {
      "source": "delayed-decision-making.md",
      "target": "team-confusion.md"
    },
    {
      "source": "inadequate-code-reviews.md",
      "target": "fear-of-conflict.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "second-system-effect.md",
      "target": "analysis-paralysis.md"
    },
    {
      "source": "missing-rollback-strategy.md",
      "target": "cross-system-data-synchronization-problems.md"
    },
    {
      "source": "data-protection-risk.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "brittle-codebase.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "configuration-chaos.md"
    },
    {
      "source": "user-frustration.md",
      "target": "unpredictable-system-behavior.md"
    },
    {
      "source": "automated-tooling-ineffectiveness.md",
      "target": "team-churn-impact.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "lower-code-quality.md"
    },
    {
      "source": "implementation-rework.md",
      "target": "extended-research-time.md"
    },
    {
      "source": "insufficient-design-skills.md",
      "target": "misunderstanding-of-oop.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "vendor-lock-in.md"
    },
    {
      "source": "reduced-code-submission-frequency.md",
      "target": "author-frustration.md"
    },
    {
      "source": "release-instability.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "complex-and-obscure-logic.md",
      "target": "scope-creep.md"
    },
    {
      "source": "workaround-culture.md",
      "target": "maintenance-paralysis.md"
    },
    {
      "source": "reduced-feature-quality.md",
      "target": "frequent-changes-to-requirements.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "slow-development-velocity.md"
    },
    {
      "source": "incorrect-max-connection-pool-size.md",
      "target": "misconfigured-connection-pools.md"
    },
    {
      "source": "tangled-cross-cutting-concerns.md",
      "target": "convenience-driven-development.md"
    },
    {
      "source": "memory-leaks.md",
      "target": "vendor-dependency.md"
    },
    {
      "source": "complex-and-obscure-logic.md",
      "target": "feature-creep.md"
    },
    {
      "source": "release-anxiety.md",
      "target": "regression-bugs.md"
    },
    {
      "source": "increased-cost-of-development.md",
      "target": "large-estimates-for-small-changes.md"
    },
    {
      "source": "unclear-goals-and-priorities.md",
      "target": "power-struggles.md"
    },
    {
      "source": "cascade-failures.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "inadequate-requirements-gathering.md",
      "target": "assumption-based-development.md"
    },
    {
      "source": "stakeholder-confidence-loss.md",
      "target": "modernization-strategy-paralysis.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "strangler-fig-pattern-failures.md"
    },
    {
      "source": "inconsistent-naming-conventions.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "regression-bugs.md",
      "target": "brittle-codebase.md"
    },
    {
      "source": "vendor-lock-in.md",
      "target": "poor-encapsulation.md"
    },
    {
      "source": "feature-bloat.md",
      "target": "scope-creep.md"
    },
    {
      "source": "missed-deadlines.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "memory-swapping.md",
      "target": "slow-database-queries.md"
    },
    {
      "source": "code-review-inefficiency.md",
      "target": "inconsistent-coding-standards.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "inability-to-innovate.md"
    },
    {
      "source": "regulatory-compliance-drift.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "synchronization-problems.md",
      "target": "code-duplication.md"
    },
    {
      "source": "inadequate-test-infrastructure.md",
      "target": "time-pressure.md"
    },
    {
      "source": "reduced-individual-productivity.md",
      "target": "unmotivated-employees.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "unrealistic-deadlines.md"
    },
    {
      "source": "increased-customer-support-load.md",
      "target": "user-frustration.md"
    },
    {
      "source": "stakeholder-frustration.md",
      "target": "extended-cycle-times.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "insufficient-code-review.md"
    },
    {
      "source": "user-trust-erosion.md",
      "target": "user-confusion.md"
    },
    {
      "source": "poor-interfaces-between-applications.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "queries-that-prevent-index-usage.md",
      "target": "incorrect-index-type.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "strangler-fig-pattern-failures.md"
    },
    {
      "source": "delayed-decision-making.md",
      "target": "power-struggles.md"
    },
    {
      "source": "review-bottlenecks.md",
      "target": "code-review-inefficiency.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "complex-and-obscure-logic.md"
    },
    {
      "source": "cross-system-data-synchronization-problems.md",
      "target": "network-latency.md"
    },
    {
      "source": "stakeholder-dissatisfaction.md",
      "target": "delayed-project-timelines.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "technology-stack-fragmentation.md"
    },
    {
      "source": "release-instability.md",
      "target": "frequent-hotfixes-and-rollbacks.md"
    },
    {
      "source": "high-number-of-database-queries.md",
      "target": "imperative-data-fetching-logic.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "information-decay.md"
    },
    {
      "source": "poor-domain-model.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "analysis-paralysis.md"
    },
    {
      "source": "inefficient-development-environment.md",
      "target": "time-pressure.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "testing-complexity.md"
    },
    {
      "source": "missed-deadlines.md",
      "target": "legal-disputes.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "legacy-business-logic-extraction-difficulty.md"
    },
    {
      "source": "vendor-lock-in.md",
      "target": "gold-plating.md"
    },
    {
      "source": "difficulty-quantifying-benefits.md",
      "target": "invisible-nature-of-technical-debt.md"
    },
    {
      "source": "negative-user-feedback.md",
      "target": "slow-application-performance.md"
    },
    {
      "source": "automated-tooling-ineffectiveness.md",
      "target": "undefined-code-style-guidelines.md"
    },
    {
      "source": "immature-delivery-strategy.md",
      "target": "manual-deployment-processes.md"
    },
    {
      "source": "shared-dependencies.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "slow-development-velocity.md"
    },
    {
      "source": "high-database-resource-utilization.md",
      "target": "poor-interfaces-between-applications.md"
    },
    {
      "source": "reduced-individual-productivity.md",
      "target": "inefficient-processes.md"
    },
    {
      "source": "insufficient-audit-logging.md",
      "target": "regulatory-compliance-drift.md"
    },
    {
      "source": "increased-customer-support-load.md",
      "target": "breaking-changes.md"
    },
    {
      "source": "regression-bugs.md",
      "target": "insufficient-testing.md"
    },
    {
      "source": "accumulation-of-workarounds.md",
      "target": "refactoring-avoidance.md"
    },
    {
      "source": "flaky-tests.md",
      "target": "algorithmic-complexity-problems.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "modernization-strategy-paralysis.md"
    },
    {
      "source": "inconsistent-naming-conventions.md",
      "target": "team-churn-impact.md"
    },
    {
      "source": "unpredictable-system-behavior.md",
      "target": "scaling-inefficiencies.md"
    },
    {
      "source": "system-outages.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "constant-firefighting.md",
      "target": "time-pressure.md"
    },
    {
      "source": "second-system-effect.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "extended-review-cycles.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "inconsistent-naming-conventions.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "maintenance-paralysis.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "second-system-effect.md",
      "target": "product-direction-chaos.md"
    },
    {
      "source": "refactoring-avoidance.md",
      "target": "short-term-focus.md"
    },
    {
      "source": "stagnant-architecture.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "obsolete-technologies.md"
    },
    {
      "source": "inadequate-test-infrastructure.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "poor-operational-concept.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "legacy-business-logic-extraction-difficulty.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "flaky-tests.md",
      "target": "inadequate-test-infrastructure.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "regulatory-compliance-drift.md"
    },
    {
      "source": "feature-gaps.md",
      "target": "inadequate-requirements-gathering.md"
    },
    {
      "source": "mentor-burnout.md",
      "target": "information-fragmentation.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "single-entry-point-design.md"
    },
    {
      "source": "frequent-hotfixes-and-rollbacks.md",
      "target": "monitoring-gaps.md"
    },
    {
      "source": "legal-disputes.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "monolithic-functions-and-classes.md",
      "target": "fear-of-breaking-changes.md"
    },
    {
      "source": "premature-technology-introduction.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "reduced-team-productivity.md",
      "target": "duplicated-work.md"
    },
    {
      "source": "increased-manual-testing-effort.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "complex-implementation-paths.md",
      "target": "second-system-effect.md"
    },
    {
      "source": "inconsistent-behavior.md",
      "target": "inadequate-test-data-management.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "legacy-code-without-tests.md"
    },
    {
      "source": "user-trust-erosion.md",
      "target": "partial-bug-fixes.md"
    },
    {
      "source": "declining-business-metrics.md",
      "target": "negative-user-feedback.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "system-stagnation.md",
      "target": "technology-lock-in.md"
    },
    {
      "source": "increased-stress-and-burnout.md",
      "target": "uneven-work-flow.md"
    },
    {
      "source": "maintenance-cost-increase.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "api-versioning-conflicts.md",
      "target": "breaking-changes.md"
    },
    {
      "source": "inconsistent-naming-conventions.md",
      "target": "undefined-code-style-guidelines.md"
    },
    {
      "source": "convenience-driven-development.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "hardcoded-values.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "vendor-dependency-entrapment.md"
    },
    {
      "source": "modernization-strategy-paralysis.md",
      "target": "legacy-business-logic-extraction-difficulty.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "brittle-codebase.md"
    },
    {
      "source": "constant-firefighting.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "high-connection-count.md",
      "target": "incorrect-max-connection-pool-size.md"
    },
    {
      "source": "deployment-environment-inconsistencies.md",
      "target": "inefficient-development-environment.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "history-of-failed-changes.md"
    },
    {
      "source": "difficult-to-test-code.md",
      "target": "second-system-effect.md"
    },
    {
      "source": "unclear-sharing-expectations.md",
      "target": "product-direction-chaos.md"
    },
    {
      "source": "increased-customer-support-load.md",
      "target": "system-outages.md"
    },
    {
      "source": "deadline-pressure.md",
      "target": "scope-creep.md"
    },
    {
      "source": "implementation-starts-without-design.md",
      "target": "misunderstanding-of-oop.md"
    },
    {
      "source": "poor-documentation.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "quality-blind-spots.md",
      "target": "flaky-tests.md"
    },
    {
      "source": "schema-evolution-paralysis.md",
      "target": "planning-dysfunction.md"
    },
    {
      "source": "implementation-rework.md",
      "target": "requirements-ambiguity.md"
    },
    {
      "source": "flaky-tests.md",
      "target": "resource-contention.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "single-points-of-failure.md"
    },
    {
      "source": "delayed-decision-making.md",
      "target": "decision-avoidance.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "change-management-chaos.md"
    },
    {
      "source": "duplicated-effort.md",
      "target": "team-confusion.md"
    },
    {
      "source": "reduced-individual-productivity.md",
      "target": "mental-fatigue.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "strangler-fig-pattern-failures.md"
    },
    {
      "source": "long-build-and-test-times.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "uncontrolled-codebase-growth.md",
      "target": "feature-creep-without-refactoring.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "frequent-hotfixes-and-rollbacks.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "technology-stack-fragmentation.md"
    },
    {
      "source": "increasing-brittleness.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "accumulation-of-workarounds.md",
      "target": "analysis-paralysis.md"
    },
    {
      "source": "complex-implementation-paths.md",
      "target": "architectural-mismatch.md"
    },
    {
      "source": "strangler-fig-pattern-failures.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "high-bug-introduction-rate.md",
      "target": "inefficient-development-environment.md"
    },
    {
      "source": "decision-avoidance.md",
      "target": "analysis-paralysis.md"
    },
    {
      "source": "excessive-disk-io.md",
      "target": "inefficient-database-indexing.md"
    },
    {
      "source": "team-churn-impact.md",
      "target": "high-turnover.md"
    },
    {
      "source": "missing-rollback-strategy.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "reduced-team-productivity.md",
      "target": "team-demoralization.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "brittle-codebase.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "vendor-dependency-entrapment.md"
    },
    {
      "source": "integer-overflow-underflow.md",
      "target": "poor-domain-model.md"
    },
    {
      "source": "gold-plating.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "data-protection-risk.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "user-confusion.md",
      "target": "inconsistent-quality.md"
    },
    {
      "source": "slow-feature-development.md",
      "target": "legacy-api-versioning-nightmare.md"
    },
    {
      "source": "shared-database.md",
      "target": "stagnant-architecture.md"
    },
    {
      "source": "cargo-culting.md",
      "target": "inexperienced-developers.md"
    },
    {
      "source": "difficult-to-test-code.md",
      "target": "global-state-and-side-effects.md"
    },
    {
      "source": "release-instability.md",
      "target": "legacy-configuration-management-chaos.md"
    },
    {
      "source": "team-churn-impact.md",
      "target": "knowledge-silos.md"
    },
    {
      "source": "hardcoded-values.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "slow-response-times-for-lists.md",
      "target": "n-plus-one-query-problem.md"
    },
    {
      "source": "increased-manual-work.md",
      "target": "regulatory-compliance-drift.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "scaling-inefficiencies.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "increased-bug-count.md"
    },
    {
      "source": "large-risky-releases.md",
      "target": "deployment-coupling.md"
    },
    {
      "source": "schema-evolution-paralysis.md",
      "target": "fear-of-change.md"
    },
    {
      "source": "poor-test-coverage.md",
      "target": "tool-limitations.md"
    },
    {
      "source": "ripple-effect-of-changes.md",
      "target": "hidden-dependencies.md"
    },
    {
      "source": "release-anxiety.md",
      "target": "inadequate-test-infrastructure.md"
    },
    {
      "source": "growing-task-queues.md",
      "target": "inefficient-code.md"
    },
    {
      "source": "release-anxiety.md",
      "target": "high-defect-rate-in-production.md"
    },
    {
      "source": "legacy-api-versioning-nightmare.md",
      "target": "legacy-business-logic-extraction-difficulty.md"
    },
    {
      "source": "assumption-based-development.md",
      "target": "time-pressure.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "second-system-effect.md"
    },
    {
      "source": "network-latency.md",
      "target": "endianness-conversion-overhead.md"
    },
    {
      "source": "deployment-risk.md",
      "target": "cross-system-data-synchronization-problems.md"
    },
    {
      "source": "changing-project-scope.md",
      "target": "unclear-goals-and-priorities.md"
    },
    {
      "source": "complex-deployment-process.md",
      "target": "manual-deployment-processes.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "past-negative-experiences.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "perfectionist-review-culture.md"
    },
    {
      "source": "debugging-difficulties.md",
      "target": "implicit-knowledge.md"
    },
    {
      "source": "slow-feature-development.md",
      "target": "complex-implementation-paths.md"
    },
    {
      "source": "blame-culture.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "cascade-delays.md",
      "target": "resource-contention.md"
    },
    {
      "source": "defensive-coding-practices.md",
      "target": "blame-culture.md"
    },
    {
      "source": "reduced-code-submission-frequency.md",
      "target": "code-review-inefficiency.md"
    },
    {
      "source": "high-connection-count.md",
      "target": "long-running-transactions.md"
    },
    {
      "source": "slow-application-performance.md",
      "target": "imperative-data-fetching-logic.md"
    },
    {
      "source": "reviewer-anxiety.md",
      "target": "code-review-inefficiency.md"
    },
    {
      "source": "reduced-individual-productivity.md",
      "target": "flaky-tests.md"
    },
    {
      "source": "high-coupling-low-cohesion.md",
      "target": "poorly-defined-responsibilities.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "inefficient-development-environment.md"
    },
    {
      "source": "poor-interfaces-between-applications.md",
      "target": "implementation-starts-without-design.md"
    },
    {
      "source": "short-term-focus.md",
      "target": "invisible-nature-of-technical-debt.md"
    },
    {
      "source": "missed-deadlines.md",
      "target": "reduced-team-productivity.md"
    },
    {
      "source": "superficial-code-reviews.md",
      "target": "reviewer-inexperience.md"
    },
    {
      "source": "mental-fatigue.md",
      "target": "context-switching-overhead.md"
    },
    {
      "source": "review-process-breakdown.md",
      "target": "time-pressure.md"
    },
    {
      "source": "test-debt.md",
      "target": "assumption-based-development.md"
    },
    {
      "source": "flaky-tests.md",
      "target": "environment-variable-issues.md"
    },
    {
      "source": "user-trust-erosion.md",
      "target": "regression-bugs.md"
    },
    {
      "source": "merge-conflicts.md",
      "target": "inconsistent-naming-conventions.md"
    },
    {
      "source": "high-defect-rate-in-production.md",
      "target": "missing-rollback-strategy.md"
    },
    {
      "source": "inefficient-code.md",
      "target": "algorithmic-complexity-problems.md"
    },
    {
      "source": "difficult-developer-onboarding.md",
      "target": "incomplete-knowledge.md"
    },
    {
      "source": "hardcoded-values.md",
      "target": "undefined-code-style-guidelines.md"
    },
    {
      "source": "review-bottlenecks.md",
      "target": "lack-of-ownership-and-accountability.md"
    },
    {
      "source": "quality-compromises.md",
      "target": "project-resource-constraints.md"
    },
    {
      "source": "user-confusion.md",
      "target": "cross-system-data-synchronization-problems.md"
    },
    {
      "source": "team-coordination-issues.md",
      "target": "poor-teamwork.md"
    },
    {
      "source": "budget-overruns.md",
      "target": "data-migration-integrity-issues.md"
    },
    {
      "source": "manual-deployment-processes.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "decision-paralysis.md",
      "target": "cognitive-overload.md"
    },
    {
      "source": "review-process-breakdown.md",
      "target": "fear-of-conflict.md"
    },
    {
      "source": "modernization-strategy-paralysis.md",
      "target": "stakeholder-developer-communication-gap.md"
    },
    {
      "source": "inconsistent-behavior.md",
      "target": "code-duplication.md"
    },
    {
      "source": "rapid-system-changes.md",
      "target": "market-pressure.md"
    },
    {
      "source": "release-anxiety.md",
      "target": "release-instability.md"
    },
    {
      "source": "negative-brand-perception.md",
      "target": "incomplete-projects.md"
    },
    {
      "source": "resistance-to-change.md",
      "target": "team-demoralization.md"
    },
    {
      "source": "declining-business-metrics.md",
      "target": "high-defect-rate-in-production.md"
    },
    {
      "source": "configuration-drift.md",
      "target": "configuration-chaos.md"
    },
    {
      "source": "difficult-to-test-code.md",
      "target": "hardcoded-values.md"
    },
    {
      "source": "inconsistent-execution.md",
      "target": "implicit-knowledge.md"
    },
    {
      "source": "regulatory-compliance-drift.md",
      "target": "poor-operational-concept.md"
    },
    {
      "source": "delayed-value-delivery.md",
      "target": "second-system-effect.md"
    },
    {
      "source": "skill-development-gaps.md",
      "target": "avoidance-behaviors.md"
    },
    {
      "source": "legacy-business-logic-extraction-difficulty.md",
      "target": "time-pressure.md"
    },
    {
      "source": "bottleneck-formation.md",
      "target": "technical-architecture-limitations.md"
    },
    {
      "source": "slow-incident-resolution.md",
      "target": "debugging-difficulties.md"
    },
    {
      "source": "cv-driven-development.md",
      "target": "fear-of-failure.md"
    },
    {
      "source": "negative-brand-perception.md",
      "target": "customer-dissatisfaction.md"
    },
    {
      "source": "misaligned-deliverables.md",
      "target": "communication-breakdown.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "architectural-mismatch.md"
    },
    {
      "source": "stakeholder-confidence-loss.md",
      "target": "delayed-project-timelines.md"
    },
    {
      "source": "inefficient-development-environment.md",
      "target": "resource-allocation-failures.md"
    },
    {
      "source": "review-bottlenecks.md",
      "target": "extended-review-cycles.md"
    },
    {
      "source": "mixed-coding-styles.md",
      "target": "review-process-breakdown.md"
    },
    {
      "source": "implementation-starts-without-design.md",
      "target": "unrealistic-deadlines.md"
    },
    {
      "source": "fear-of-breaking-changes.md",
      "target": "high-bug-introduction-rate.md"
    },
    {
      "source": "code-review-inefficiency.md",
      "target": "code-review-inefficiency.md"
    },
    {
      "source": "work-queue-buildup.md",
      "target": "capacity-mismatch.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "inconsistent-naming-conventions.md"
    },
    {
      "source": "modernization-strategy-paralysis.md",
      "target": "decision-avoidance.md"
    },
    {
      "source": "high-technical-debt.md",
      "target": "increased-technical-shortcuts.md"
    },
    {
      "source": "data-migration-integrity-issues.md",
      "target": "deployment-risk.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "refactoring-avoidance.md"
    },
    {
      "source": "scope-creep.md",
      "target": "product-direction-chaos.md"
    },
    {
      "source": "fear-of-change.md",
      "target": "missing-rollback-strategy.md"
    },
    {
      "source": "analysis-paralysis.md",
      "target": "modernization-strategy-paralysis.md"
    },
    {
      "source": "shared-database.md",
      "target": "monolithic-architecture-constraints.md"
    },
    {
      "source": "log-spam.md",
      "target": "n-plus-one-query-problem.md"
    },
    {
      "source": "vendor-dependency-entrapment.md",
      "target": "vendor-lock-in.md"
    },
    {
      "source": "customer-dissatisfaction.md",
      "target": "breaking-changes.md"
    },
    {
      "source": "refactoring-avoidance.md",
      "target": "test-debt.md"
    },
    {
      "source": "author-frustration.md",
      "target": "conflicting-reviewer-opinions.md"
    },
    {
      "source": "declining-business-metrics.md",
      "target": "slow-application-performance.md"
    },
    {
      "source": "user-frustration.md",
      "target": "requirements-ambiguity.md"
    },
    {
      "source": "high-database-resource-utilization.md",
      "target": "high-connection-count.md"
    },
    {
      "source": "complex-and-obscure-logic.md",
      "target": "procedural-programming-in-oop-languages.md"
    },
    {
      "source": "inconsistent-behavior.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "flaky-tests.md",
      "target": "knowledge-gaps.md"
    },
    {
      "source": "testing-complexity.md",
      "target": "rapid-system-changes.md"
    },
    {
      "source": "increased-manual-testing-effort.md",
      "target": "difficult-to-test-code.md"
    },
    {
      "source": "knowledge-silos.md",
      "target": "poor-communication.md"
    },
    {
      "source": "modernization-roi-justification-failure.md",
      "target": "resource-allocation-failures.md"
    },
    {
      "source": "cargo-culting.md",
      "target": "constant-firefighting.md"
    },
    {
      "source": "large-risky-releases.md",
      "target": "complex-deployment-process.md"
    },
    {
      "source": "team-coordination-issues.md",
      "target": "individual-recognition-culture.md"
    },
    {
      "source": "difficult-code-reuse.md",
      "target": "poor-encapsulation.md"
    },
    {
      "source": "complex-deployment-process.md",
      "target": "deployment-risk.md"
    },
    {
      "source": "integration-difficulties.md",
      "target": "hardcoded-values.md"
    },
    {
      "source": "bikeshedding.md",
      "target": "inadequate-configuration-management.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "history-of-failed-changes.md"
    },
    {
      "source": "inconsistent-naming-conventions.md",
      "target": "copy-paste-programming.md"
    },
    {
      "source": "high-maintenance-costs.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "service-timeouts.md",
      "target": "task-queues-backing-up.md"
    },
    {
      "source": "refactoring-avoidance.md",
      "target": "quality-blind-spots.md"
    },
    {
      "source": "service-timeouts.md",
      "target": "database-connection-leaks.md"
    },
    {
      "source": "increased-time-to-market.md",
      "target": "missed-deadlines.md"
    },
    {
      "source": "gold-plating.md",
      "target": "product-direction-chaos.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "development-disruption.md"
    },
    {
      "source": "developer-frustration-and-burnout.md",
      "target": "high-technical-debt.md"
    },
    {
      "source": "slow-development-velocity.md",
      "target": "cv-driven-development.md"
    },
    {
      "source": "abi-compatibility-issues.md",
      "target": "dependency-version-conflicts.md"
    },
    {
      "source": "increased-bug-count.md",
      "target": "superficial-code-reviews.md"
    },
    {
      "source": "ripple-effect-of-changes.md",
      "target": "high-coupling-low-cohesion.md"
    },
    {
      "source": "negative-brand-perception.md",
      "target": "regulatory-compliance-drift.md"
    },
    {
      "source": "changing-project-scope.md",
      "target": "market-pressure.md"
    },
    {
      "source": "competitive-disadvantage.md",
      "target": "incomplete-projects.md"
    },
    {
      "source": "increased-stress-and-burnout.md",
      "target": "unrealistic-deadlines.md"
    }
  ]
};

const width = Math.min(1200, window.innerWidth * 0.9);
const height = window.innerHeight - 60; // Account for header

const categoryColors = {
    // 15 core categories with vibrant, distinct colors
    'Architecture': '#3498db',     // Blue
    'Business': '#e74c3c',        // Red
    'Code': '#f39c12',            // Orange  
    'Communication': '#9b59b6',   // Purple
    'Culture': '#e67e22',         // Dark Orange
    'Database': '#2ecc71',        // Green
    'Dependencies': '#16a085',    // Teal
    'Management': '#e91e63',      // Pink
    'Operations': '#34495e',      // Dark Blue-Gray
    'Performance': '#f1c40f',     // Yellow
    'Process': '#27ae60',         // Dark Green
    'Requirements': '#8e44ad',    // Dark Purple  
    'Security': '#c0392b',        // Dark Red
    'Team': '#1abc9c',            // Turquoise
    'Testing': '#ff6b35',         // Red-Orange
    
    // Legacy categories for backward compatibility
    'Technical': '#3498db',
    'Strategic': '#e74c3c',
    'Project Management': '#e91e63',
    'User Experience': '#8e44ad',
    'Frontend': '#f39c12',
    'Quality': '#ff6b35',
    'Maintenance': '#27ae60',
    'Design': '#3498db',
    'Team Dynamics': '#1abc9c',
    'Delivery': '#34495e',
    'Reliability': '#c0392b',
    'Stability': '#16a085'
};

const color = (category) => categoryColors[category] || '#6c757d';

const simulation = d3.forceSimulation(graph.nodes)
    .force("link", d3.forceLink(graph.links).id(d => d.id).distance(100))
    .force("charge", d3.forceManyBody().strength(-1000))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("x", d3.forceX(width / 2).strength(0.1))
    .force("y", d3.forceY(height / 2).strength(0.1))
    .force("collision", d3.forceCollide().radius(30));

const svg = d3.select("#visualization-container").append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(d3.zoom()
        .extent([[0, 0], [width, height]])
        .scaleExtent([0.1, 8])
        .on("zoom", function(event) {
            container.attr("transform", event.transform);
        }));

// Container for all elements that should be zoomed/panned
const container = svg.append("g");

// Arrowhead marker with dynamic position
svg.append('defs').append('marker')
    .attr('id', 'arrowhead')
    .attr('viewBox', '-0 -5 10 10')
    .attr('refX', 35)
    .attr('refY', 0)
    .attr('orient', 'auto')
    .attr('markerWidth', 8)
    .attr('markerHeight', 8)
    .attr('xoverflow','visible')
    .append('svg:path')
    .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
    .attr('fill', '#999')
    .style('stroke','none');

const link = container.append('g')
    .attr('class', 'link')
    .selectAll('line')
    .data(graph.links)
    .enter().append('line')
    .attr('stroke-width', function(d) { return Math.sqrt(d.value || 1); })
    .attr('marker-end', 'url(#arrowhead)');

const node = container.append('g')
    .attr('class', 'nodes')
    .selectAll('g')
    .data(graph.nodes)
    .enter().append('g')
    .attr('class', 'node')
    .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

// Variables to handle selection and opacity
let selectedNode = null;
const nonActiveOpacity = 0.2;

node.append('circle')
    .attr('r', function(d) { return d.size || 10; })
    .attr('fill', function(d) { return color(d.category); });

node.append('text')
    .text(function(d) { return d.title; })
    .attr('dy', -15);
    
const tooltip = d3.select(".tooltip");

// Update event handlers and add 'click' handler.
node.on("mouseover", (event, d) => {
    tooltip.transition().style("opacity", 1);
    tooltip.html(`<strong>${d.title}</strong><br/><em>${d.category}</em><br/>${d.description}`)
        .style("left", (event.pageX + 15) + "px")
        .style("top", (event.pageY - 28) + "px");
    
    // Only apply hover effect if no node is selected
    if (!selectedNode) {
        node.style('opacity', otherNode => (otherNode.id === d.id ? 1 : nonActiveOpacity));
        link.style('stroke-opacity', l => (l.source === d || l.target === d) ? 1 : nonActiveOpacity);
        link.style('stroke', l => (l.source === d || l.target === d) ? '#6c757d' : '#adb5bd');
    }
})
.on("mouseout", () => {
    tooltip.transition().style("opacity", 0);
    // On mouse out, apply style according to selection (or reset if none)
    updateStyles();
})
.on("click", (event, d) => {
    event.stopPropagation(); // Prevent click from propagating to background (SVG)
    // If clicking the already selected node, deselect. Otherwise, select.
    selectedNode = (selectedNode && selectedNode.id === d.id) ? null : d;
    updateStyles();
})
.on("dblclick", (event, d) => {
    event.stopPropagation();
    openModal(d);
});

// Click on background to deselect all
svg.on('click', function() {
    selectedNode = null;
    updateStyles();
});

const categories = [...new Set(graph.nodes.map(d => d.category))].sort();
const legend = d3.select(".legend");

categories.forEach(category => {
    const legendItem = legend.append("div").attr("class", "legend-item");
    legendItem.append("div")
        .attr("class", "legend-color")
        .style("background-color", color(category));
    legendItem.append("span").text(category);
});

simulation
    .on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("transform", d => `translate(${d.x}, ${d.y})`);
    });

// Central function to update node and link opacity
function updateStyles() {
    if (selectedNode) {
        // If a node is selected
        node.style('opacity', d => (d.id === selectedNode.id ? 1 : nonActiveOpacity));
        link.style('stroke-opacity', l => (l.source.id === selectedNode.id || l.target.id === selectedNode.id) ? 1 : nonActiveOpacity);
        link.style('stroke', l => (l.source.id === selectedNode.id || l.target.id === selectedNode.id) ? '#6c757d' : '#adb5bd');
    } else {
        // If no node is selected, everything returns to normal
        node.style('opacity', 1);
        link.style('stroke-opacity', 0.6);
        link.style('stroke', '#adb5bd');
    }
}

function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}

// Modal functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

function openModal(nodeData) {
    modalTitle.textContent = nodeData.title;
    modalCategory.textContent = nodeData.category;
    modalBody.innerHTML = '<div class="loading">Loading problem details...</div>';
    modal.style.display = 'block';
    
    // Update URL hash when opening modal
    window.history.replaceState(null, null, '#' + nodeData.id);
    
    // Fetch the generated HTML file content
    const problemPath = nodeData.id.replace('.md', '.html');
    fetch(`problems/${problemPath}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(content => {
            displayHtmlContent(content, nodeData);
        })
        .catch(error => {
            console.error('Error fetching problem content:', error);
            modalBody.innerHTML = `
                <div class="error">
                    <h3>Error Loading Content</h3>
                    <p>Could not load the full problem description.</p>
                    <div class="modal-description">${nodeData.description}</div>
                </div>
            `;
        });
}

function displayHtmlContent(content, nodeData) {
    // Parse the Jekyll-generated HTML to extract the main content
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    
    // Find the main content area - Jekyll typically puts content in .page-content or main
    let mainContent = doc.querySelector('.page-content main') || 
                     doc.querySelector('main') || 
                     doc.querySelector('.page-content') ||
                     doc.querySelector('article');
    
    if (!mainContent) {
        // Fallback: try to find content by looking for common patterns
        mainContent = doc.querySelector('div[class*="content"]') || doc.body;
    }
    
    let html = '';
    if (mainContent) {
        html = mainContent.innerHTML;
        
        // Convert relative markdown links to problem-link spans for modal navigation
        html = html.replace(/href="([^"]*\.md)"/g, function(match, mdFile) {
            const filename = mdFile.split('/').pop();
            return `class="problem-link" data-problem="${filename}"`;
        });
        
        // Also handle relative problem links
        html = html.replace(/href="\/problems\/([^"]*)\.html"/g, function(match, problemName) {
            return `class="problem-link" data-problem="${problemName}.md"`;
        });
        
        // Remove any Jekyll-specific elements we don't want
        html = html.replace(/<div class="page-header">.*?<\/div>/gs, '');
    } else {
        html = '<p>Could not extract content from the page.</p>';
    }
    
    modalBody.innerHTML = `
        <div class="modal-description">${nodeData.description}</div>
        ${html}
    `;
    
    // Add click handlers for problem links
    const problemLinks = modalBody.querySelectorAll('.problem-link');
    problemLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const problemFile = this.getAttribute('data-problem');
            const targetNode = graph.nodes.find(n => n.id === problemFile);
            if (targetNode) {
                openModal(targetNode);
            }
        });
    });
    
    // Convert regular links to open in new tab
    const externalLinks = modalBody.querySelectorAll('a:not(.problem-link)');
    externalLinks.forEach(link => {
        link.setAttribute('target', '_blank');
    });
}

function closeModal() {
    modal.style.display = 'none';
    // Clear URL hash when closing modal
    window.history.replaceState(null, null, window.location.pathname);
}

// Event listeners
modalClose.onclick = closeModal;
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};

// Escape key to close modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Function to highlight and center a specific node
function focusNode(nodeId) {
    const targetNode = graph.nodes.find(n => n.id === nodeId);
    if (!targetNode) return false;
    
    // Center the node
    const scale = d3.zoomTransform(svg.node()).k || 1;
    const x = -targetNode.x * scale + width / 2;
    const y = -targetNode.y * scale + height / 2;
    
    svg.transition()
        .duration(750)
        .call(d3.zoom().transform, d3.zoomIdentity.translate(x, y).scale(scale));
    
    // Highlight the node temporarily
    const nodeElement = node.filter(d => d.id === nodeId).select('circle');
    const originalColor = nodeElement.attr('fill');
    
    nodeElement
        .transition()
        .duration(200)
        .attr('fill', '#ff6b6b')
        .attr('r', function(d) { return (d.size || 10) * 1.5; })
        .transition()
        .duration(1000)
        .attr('fill', originalColor)
        .attr('r', function(d) { return d.size || 10; });
    
    return true;
}

// Handle URL fragments on page load
function handleUrlFragment() {
    const hash = window.location.hash.substring(1); // Remove the #
    if (hash) {
        // Wait for the simulation to settle before focusing
        setTimeout(() => {
            if (!focusNode(hash)) {
                console.warn('Node not found for hash:', hash);
            }
        }, 1000);
    }
}

// Initialize URL fragment handling after simulation starts
simulation.on('end', handleUrlFragment);

// Also handle hash changes during navigation
window.addEventListener('hashchange', handleUrlFragment);