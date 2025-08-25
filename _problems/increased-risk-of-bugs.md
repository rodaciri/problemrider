---
title: Increased Risk of Bugs
description: Code complexity and lack of clarity make it more likely that developers
  will introduce defects when making changes.
category:
- Code
related_problems:
- slug: high-bug-introduction-rate
  similarity: 0.7
- slug: increased-bug-count
  similarity: 0.65
- slug: increased-cost-of-development
  similarity: 0.6
- slug: difficult-to-understand-code
  similarity: 0.6
- slug: fear-of-change
  similarity: 0.6
- slug: brittle-codebase
  similarity: 0.6
layout: problem
---

## Description

Increased risk of bugs occurs when the structure, complexity, or clarity of code makes it more likely that developers will introduce defects during development or maintenance activities. This heightened risk stems from code that is difficult to understand, test, or modify safely. Unlike direct bug introduction, this problem focuses on the systematic factors that make bug introduction more probable, creating an environment where even careful developers are likely to make mistakes.


## Indicators ⟡
- Bug rates increase when certain modules or developers are involved
- Similar types of bugs are repeatedly introduced in the same areas of code
- Code reviews frequently catch potential bugs that developers missed
- Developers express uncertainty about the correctness of their changes
- Testing reveals bugs that should have been obvious during development


## Symptoms ▲

- [Complex Domain Model](complex-domain-model.md) <span class="info-tooltip" title="Confidence: 0.459, Strength: 0.684">ⓘ</span>
<br/>  The inherent complexity of the business domain leads to convoluted code structures and logic, which increases the likelihood of misunderstandings and mistakes by developers, thereby heightening the risk of introducing bugs during modifications.
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.425, Strength: 0.634">ⓘ</span>
<br/>  Constantly updating requirements in a project often leads to increased code modifications, which, in the context of legacy systems characterized by code complexity and lack of clarity, heightens the likelihood of introducing defects during development.
- [Increased Customer Support Load](increased-customer-support-load.md) <span class="info-tooltip" title="Confidence: 0.401, Strength: 0.644">ⓘ</span>
<br/>  The complexity and ambiguity of the legacy code lead to more bugs during updates, resulting in users facing issues that prompt them to seek support, thereby indicating the underlying risk of defects in the system.
- [Poor Test Coverage](poor-test-coverage.md) <span class="info-tooltip" title="Confidence: 0.399, Strength: 0.629">ⓘ</span>
<br/>  The lack of thorough tests in critical areas of the codebase exacerbates the likelihood of defects, as developers are unaware of potential issues when modifying complex and unclear code, thereby increasing the overall risk of introducing bugs.
- [Flaky Tests](flaky-tests.md) <span class="info-tooltip" title="Confidence: 0.358, Strength: 0.643">ⓘ</span>
<br/>  The increased code complexity and ambiguity often lead to unreliable test scenarios, which in turn produce flaky tests that obscure the actual reliability of the system and increase the likelihood of undetected bugs.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○
- **Bug Pattern Analysis:** Track which areas of code or types of changes are most likely to introduce bugs
- **Developer-Specific Metrics:** Monitor bug introduction rates by individual developers to identify training needs
- **Code Complexity Correlation:** Analyze relationship between code complexity metrics and bug density
- **Change Impact Analysis:** Track which types of changes are most likely to cause problems
- **Testing Effectiveness:** Measure how many bugs are caught during development vs. production


## Examples

A legacy inventory management system has a pricing calculation module with nested conditional logic that handles dozens of special cases for different product types, customer categories, and promotional discounts. The logic is spread across multiple functions with unclear naming and no documentation explaining the business rules. When developers need to add support for a new product category, they must navigate this complex logic to understand where to make changes. Due to the complexity, they frequently miss edge cases or misunderstand existing rules, introducing bugs where certain combinations of products and promotions produce incorrect prices. Despite careful code reviews, these bugs often go undetected because reviewers also struggle to understand all the interactions within the complex pricing logic. Another example involves a user authentication system where password validation, session management, and permission checking are intertwined in a single large class. When developers need to modify any authentication behavior, they must understand the entire class and its many responsibilities. The complexity makes it easy to accidentally break unrelated functionality, such as modifying password validation logic and inadvertently affecting session timeout behavior.
