---
title: Style Arguments in Code Reviews
description: A situation where a significant amount of time in code reviews is spent
  debating trivial style issues instead of focusing on logic and design.
category:
- Process
- Code Quality
related_problems:
- slug: code-review-inefficiency
  similarity: 75%
- slug: nitpicking-culture
  similarity: 70%
- slug: superficial-code-reviews
  similarity: 65%
- slug: inadequate-code-reviews
  similarity: 65%
- slug: review-process-breakdown
  similarity: 65%
layout: problem
---

## Description
Style arguments in code reviews is a situation where a significant amount of time in code reviews is spent debating trivial style issues instead of focusing on logic and design. This is a common problem in teams that do not have a clear set of coding standards. Style arguments in code reviews can lead to a number of problems, including a decrease in productivity, an increase in frustration, and a general slowdown in the code review process.

## Indicators ⟡
- Code reviews are often contentious.
- There are a lot of comments about style in code reviews.
- Code reviews take a long time to complete.
- Developers are not happy with the code review process.

## Symptoms ▲
- **[Slow Development Velocity](slow-development-velocity.md):** It takes a long time to get code reviewed and merged because of all the arguments about style.
- **[Developer Frustration and Burnout](developer-frustration-and-burnout.md):** Developers get frustrated with all the arguments about style and the lack of progress.
- **[Lower Code Quality](lower-code-quality.md):** The code quality suffers because the code review process is not focused on logic and design.
- **[Review Process Breakdown](review-process-breakdown.md):** The code review process is not effective because it is focused on trivial style issues.

## Root Causes ▼
- **[Undefined Code Style Guidelines](undefined-code-style-guidelines.md):** The team has not agreed on a common set of coding standards and conventions.
- **Lack of Automated Enforcement (of style):** There are no tools (like linters or formatters) in place to automatically enforce the agreed-upon style.
- **[Review Process Breakdown](review-process-breakdown.md):** The code review process does not consistently enforce coding standards.
- **[Team Churn Impact](team-churn-impact.md):** Different developers bring their own personal coding styles without alignment.

## Detection Methods ○
- **Analyze Code Review Comments:** Look for a high frequency of comments related to style and formatting.
- **Team Surveys:** Ask developers if they are happy with the code review process.
- **Retrospectives:** Use retrospectives to identify problems with the code review process.

## Examples
A developer submits a pull request for a new feature. The pull request is immediately met with a flurry of comments about style. One developer wants the developer to use tabs instead of spaces. Another developer wants the developer to use a different naming convention for variables. The developer spends the next few hours arguing with the other developers about style. The pull request is eventually merged, but not before a lot of time and energy has been wasted.
