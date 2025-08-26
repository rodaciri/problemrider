---
title: Fear of Conflict
description: Reviewers avoid challenging complex logic or design decisions, opting
  for easier, less confrontational feedback.
category:
- Communication
- Process
related_problems:
- slug: reviewer-anxiety
  similarity: 0.7
- slug: inadequate-code-reviews
  similarity: 0.65
- slug: author-frustration
  similarity: 0.65
- slug: nitpicking-culture
  similarity: 0.65
- slug: team-members-not-engaged-in-review-process
  similarity: 0.65
- slug: fear-of-change
  similarity: 0.65
layout: problem
---

## Description
Fear of conflict in code reviews is the reluctance of reviewers to provide critical feedback for fear of offending their colleagues or creating tension within the team. This avoidance of difficult conversations leads to a culture where politeness is prioritized over quality, and significant issues in the code are left unaddressed. It undermines the purpose of code reviews, turning them into a formality rather than a genuine quality assurance and knowledge-sharing practice.

## Indicators ⟡
- Code reviews are consistently approved with little to no discussion, even on complex changes.
- Reviewers use vague or overly positive language, avoiding direct criticism.
- Team members express concerns about code quality in private but not in public code reviews.

## Symptoms ▲
- [Poor Test Coverage](poor-test-coverage.md) <span class="info-tooltip" title="Confidence: 0.366, Strength: 0.620">ⓘ</span>
<br/>  The reluctance to challenge complex logic or design decisions leads to inadequate test coverage, as reviewers avoid addressing potential issues, resulting in critical areas of the codebase remaining untested and vulnerable.

## Root Causes ▼
- [Perfectionist Culture](perfectionist-culture.md) <span class="info-tooltip" title="Confidence: 0.372, Strength: 0.837">ⓘ</span>
<br/>  The emphasis on achieving flawless outcomes fosters an environment where reviewers hesitate to challenge complex decisions, fearing that any critique may jeopardize the perceived perfection, thereby stifling constructive feedback and prolonging development cycles in legacy systems.
- [Release Anxiety](release-anxiety.md) <span class="info-tooltip" title="Confidence: 0.318, Strength: 0.878">ⓘ</span>
<br/>  The anxiety surrounding deployments creates a high-pressure environment that discourages reviewers from questioning complex design choices, leading them to prioritize harmony over critical feedback, which ultimately hinders the identification of potential issues in legacy systems.

## Detection Methods ○
- **Observe Code Review Dynamics:** Pay attention to the tone and content of code review discussions. Look for a lack of critical feedback or a tendency to avoid difficult topics.
- **Team Surveys:** Anonymously survey team members about their comfort level with giving and receiving critical feedback.
- **Retrospectives:** Discuss the effectiveness of the code review process and whether team members feel they can be open and honest.

## Examples
A senior developer notices a significant architectural flaw in a junior developer's pull request. However, not wanting to discourage the junior developer, they approve the pull request with only a minor comment about a variable name. The architectural flaw is later discovered after it has caused significant problems in production. This fear of conflict prevents the team from having the necessary conversations to build high-quality software.
