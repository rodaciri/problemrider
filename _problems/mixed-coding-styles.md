---
title: Mixed Coding Styles
description: A situation where different parts of the codebase use different formatting,
  naming conventions, and design patterns.
category:
- Code Quality
- Maintenance
related_problems:
- slug: inconsistent-coding-standards
  similarity: 75%
- slug: inconsistent-codebase
  similarity: 75%
- slug: inconsistent-naming-conventions
  similarity: 65%
- slug: spaghetti-code
  similarity: 65%
- slug: undefined-code-style-guidelines
  similarity: 65%
layout: problem
---

## Description
Mixed coding styles is a situation where different parts of the codebase use different formatting, naming conventions, and design patterns. This is a common problem in long-running projects, especially those that have been worked on by many different people over the years. Mixed coding styles can lead to a number of problems, including a decrease in readability, an increase in cognitive load, and a general slowdown in development velocity.

## Indicators ⟡
- The codebase is difficult to read and understand.
- There are multiple ways to do the same thing.
- The codebase is a mixture of different styles and conventions.
- There is no style guide for the project, or it exists but is not enforced.

## Symptoms ▲
- **[Inconsistent Codebase](inconsistent-codebase.md):** The codebase is inconsistent, which makes it difficult to read and understand.
- **[Increased Cognitive Load](increased-cognitive-load.md):** Developers have to spend more time and mental energy to understand code because they cannot rely on consistent patterns.
- **[Difficult Developer Onboarding](difficult-developer-onboarding.md):** New developers take a long time to become productive because they have to learn multiple different ways of doing things.
- **[Copy-Paste Programming](copy-paste-programming.md):** Developers copy and paste code from one part of the codebase to another, but they fail to update it to match the style of the destination, leading to subtle bugs.

## Root Causes ▼
- **[Undefined Code Style Guidelines](undefined-code-style-guidelines.md):** The team has not agreed on a common set of coding standards and conventions.
- **Lack of Automated Enforcement (of style):** There are no tools (like linters or formatters) in place to automatically enforce the agreed-upon style.
- **[Review Process Breakdown](review-process-breakdown.md):** The code review process does not consistently enforce coding standards.
- **[Team Churn Impact](team-churn-impact.md):** Different developers bring their own personal coding styles without alignment.

## Detection Methods ○
- **Manual Code Inspection:** The inconsistency is often obvious from simply browsing the codebase.
- **Run a Linter or Formatter:** Run a tool like ESLint, Prettier, RuboCop, or Black on the codebase and observe the large number of reported violations.
- **Team Surveys:** Ask developers if they find the codebase easy to read and understand.
- **Analyze Code Review Comments:** Look for a high frequency of comments related to style and formatting.

## Examples
A large enterprise application has been developed by multiple teams over a decade. One module uses camelCase for variables, another uses snake_case, and a third mixes both. Indentation varies between tabs and spaces, and brace styles are inconsistent. This makes it very difficult for any single developer to work across modules efficiently. A new developer joins and submits a pull request that is rejected multiple times due to style violations that were never explicitly communicated, leading to frustration and delays.
