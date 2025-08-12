---
title: "Rushed Approvals"
description: "Pull requests are approved quickly without thorough examination due to time pressure or process issues."
category: ['Process', 'Quality', 'Culture']
related_problems: ['superficial-code-reviews', 'inadequate-code-reviews', 'time-pressure']
layout: problem
---

## Description

Rushed approvals occur when code reviews are completed hastily without adequate examination of the changes, often due to time pressure, process dysfunction, or cultural issues that prioritize speed over quality. These superficial reviews fail to catch bugs, miss opportunities for knowledge sharing, and allow poor design decisions to accumulate in the codebase. Rushed approvals defeat the primary purposes of code review and can be more harmful than no review at all because they create false confidence in code quality.

## Indicators ⟡
- Pull requests are approved within minutes of submission regardless of size or complexity
- Review comments are minimal or generic ("LGTM", "Ship it") without specific feedback
- Reviews focus only on obvious syntax issues while missing logic or design problems
- Reviewers approve changes in areas of code they're not familiar with
- Review approval times are consistently short across all types of changes

## Symptoms ▲
- **[Review Process Breakdown](review-process-breakdown.md):** Reviews lack depth and miss important issues
- **[Review Process Breakdown](review-process-breakdown.md):** Code review process fails to maintain quality standards
- **Reduced Code Quality:** Poor design decisions and bugs slip through due to insufficient review
- **Missed Learning Opportunities:** Knowledge sharing doesn't occur because reviews are too brief
- **False Quality Confidence:** Teams believe code is thoroughly reviewed when it actually isn't

## Root Causes ▼
- **[Time Pressure](time-pressure.md):** Aggressive deadlines force reviewers to prioritize speed over thoroughness
- **Review Process Bottlenecks:** Too few reviewers for the volume of code changes creates pressure to approve quickly
- **Lack of Review Standards:** No clear expectations about what constitutes an adequate review
- **Cultural Issues:** Team culture that rewards fast approval over thoughtful feedback
- **Reviewer Fatigue:** Reviewers become overwhelmed by volume and stop providing thorough feedback
- **Inadequate Review Tools:** Poor tooling makes thorough reviews difficult or time-consuming

## Detection Methods ○
- **Review Time Analysis:** Track how long reviewers spend examining code relative to change complexity
- **Review Comment Quality:** Analyze the depth and specificity of review feedback
- **Bug Correlation:** Compare bug rates in rushed reviews versus thorough reviews
- **Review Coverage:** Assess whether reviewers examine all changed files and understand the changes
- **Developer Feedback:** Survey team members about review thoroughness and quality

## Examples

A development team is under pressure to release a major feature before a competitor's product launch. Pull requests that normally would require 30-60 minutes of careful review are being approved in 2-3 minutes with comments like "looks good" or "LGTM." A complex pull request implementing new payment processing logic is approved by three reviewers within 5 minutes, despite containing subtle bugs in error handling and edge case management. None of the reviewers took time to understand the payment flow or verify that the implementation correctly handles all the business requirements. The rushed approval allows critical payment bugs to reach production, causing transaction failures and customer complaints that could have been prevented with proper review. Another example involves a security-sensitive authentication module where rushed reviews miss a SQL injection vulnerability because reviewers only glance at the code without tracing the data flow or understanding the security implications. The vulnerability is discovered months later during a security audit, requiring emergency patches and exposing the system to potential attacks that could have been prevented by thorough code review.