---
title: Hardcoded Values
description: Magic numbers and fixed strings reduce flexibility, making configuration
  and adaptation difficult
category:
- Architecture
- Code
related_problems:
- slug: legacy-configuration-management-chaos
  similarity: 0.55
- slug: brittle-codebase
  similarity: 0.5
layout: problem
---

## Description

Hardcoded values are literal numbers, strings, or other constants embedded directly in source code rather than being defined as configurable parameters, constants, or external configuration. This practice reduces system flexibility by making it difficult to modify behavior without changing and redeploying code. The problem is particularly problematic in systems that need to adapt to different environments, handle varying business rules, or accommodate changing requirements over time.

## Indicators ⟡

- Code that contains unexplained numeric literals or "magic numbers" without context
- String values like URLs, file paths, or messages embedded directly in business logic
- Different versions of similar code that vary only by hardcoded values
- Requests for "simple" configuration changes that require code modifications
- Difficulty setting up the same application in different environments
- Business rules that are scattered throughout the codebase as literal values
- Test files that duplicate production code just to change embedded values

## Symptoms ▲
- [Legacy Skill Shortage](legacy-skill-shortage.md) <span class="info-tooltip" title="Confidence: 0.525, Strength: 0.788">ⓘ</span>
<br/>  The reliance on hardcoded values in legacy systems often necessitates specialized knowledge for modification, leading to a critical shortage of developers familiar with these outdated practices, which in turn creates bottlenecks in system maintenance.
- [Monolithic Architecture Constraints](monolithic-architecture-constraints.md) <span class="info-tooltip" title="Confidence: 0.329, Strength: 0.728">ⓘ</span>
<br/>  Hardcoded values limit the ability to modularize and adapt components, leading to increased interdependencies that make the codebase rigid and challenging to maintain, thereby manifesting as difficulties in scaling and deploying the entire system.
- [Inadequate Configuration Management](inadequate-configuration-management.md) <span class="info-tooltip" title="Confidence: 0.312, Strength: 0.741">ⓘ</span>
<br/>  The presence of hardcoded values limits the ability to track and manage different configurations effectively, resulting in inadequate configuration management that manifests as errors or difficulties during version control and rollback processes in legacy systems.
- [Inconsistent Naming Conventions](inconsistent-naming-conventions.md) <span class="info-tooltip" title="Confidence: 0.310, Strength: 0.654">ⓘ</span>
<br/>  The use of hardcoded values often leads to inconsistent naming conventions, as developers may resort to arbitrary or unclear identifiers when trying to manage fixed strings and numbers, further complicating code comprehension and maintenance in legacy systems.
- [Difficult to Test Code](difficult-to-test-code.md) <span class="info-tooltip" title="Confidence: 0.305, Strength: 0.790">ⓘ</span>
<br/>  Hardcoded values create tight coupling and global dependencies within the code, making it difficult to isolate components for testing, as any change in one area can impact multiple parts of the system, leading to complex setup requirements.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○

- Use static analysis tools to identify magic numbers and repeated string literals
- Code reviews that specifically look for unexplained literal values in business logic
- Analyze deployment processes to identify values that need to change between environments
- Review configuration change requests to identify patterns of hardcoded dependencies
- Examine test code for workarounds needed due to inflexible hardcoded values
- Survey operations and business teams about limitations in system configuration
- Audit codebase for repeated literal values that should be centralized as constants
- Monitor development time spent on changes that should be simple configuration updates

## Examples

An e-commerce application has shipping cost calculations hardcoded throughout the codebase with values like `if (weight > 50) shippingCost = 15.99` and timeout values like `setTimeout(checkStatus, 30000)`. When the business wants to offer promotions, adjust shipping rates for different regions, or optimize performance by changing timeout values, each change requires code modifications, testing, and deployment. A particularly problematic situation arises when they need to support international customers - the hardcoded USD currency symbols, US zip code validation patterns, and English error messages are scattered across dozens of files. What should be simple business configuration changes become multi-week development projects, and supporting multiple markets requires maintaining separate code branches with different hardcoded values.
