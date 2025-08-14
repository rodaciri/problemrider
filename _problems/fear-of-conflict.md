---
title: Fear of Conflict
description: Reviewers avoid challenging complex logic or design decisions, opting
  for easier, less confrontational feedback.
category:
- Process
- Communication
related_problems:
- slug: reviewer-anxiety
  similarity: 0.723
- slug: author-frustration
  similarity: 0.678
- slug: team-members-not-engaged-in-review-process
  similarity: 0.671
- slug: defensive-coding-practices
  similarity: 0.658
- slug: conflicting-reviewer-opinions
  similarity: 0.624
layout: problem
---

## Description
Fear of conflict in code reviews is the reluctance of reviewers to provide critical feedback for fear of offending their colleagues or creating tension within the team. This avoidance of difficult conversations leads to a culture where politeness is prioritized over quality, and significant issues in the code are left unaddressed. It undermines the purpose of code reviews, turning them into a formality rather than a genuine quality assurance and knowledge-sharing practice.

## Indicators ⟡
- Code reviews are consistently approved with little to no discussion, even on complex changes.
- Reviewers use vague or overly positive language, avoiding direct criticism.
- Team members express concerns about code quality in private but not in public code reviews.

## Symptoms ▲
- [Review Process Breakdown](review-process-breakdown.md): Reviews fail to identify and address critical flaws.
- [Review Process Breakdown](review-process-breakdown.md): Feedback is limited to safe, non-controversial topics like style.
- **Accumulation of Technical Debt:** Poor design choices and suboptimal implementations are allowed to accumulate in the codebase.
- **Lack of Growth:** Developers do not receive the constructive feedback they need to improve their skills.

## Root Causes ▼
- **Lack of Psychological Safety:** The team culture does not support open and honest communication, and there is a fear of negative repercussions for speaking up.
- **No Clear Guidelines for Feedback:** The team has not established norms for providing and receiving constructive criticism.
- **Desire to Maintain Harmony:** Team members prioritize getting along over ensuring the quality of their work.
- **Past Negative Experiences:** Previous instances of conflict or harsh feedback have made team members hesitant to engage in critical discussions.

## Detection Methods ○
- **Observe Code Review Dynamics:** Pay attention to the tone and content of code review discussions. Look for a lack of critical feedback or a tendency to avoid difficult topics.
- **Team Surveys:** Anonymously survey team members about their comfort level with giving and receiving critical feedback.
- **Retrospectives:** Discuss the effectiveness of the code review process and whether team members feel they can be open and honest.

## Examples
A senior developer notices a significant architectural flaw in a junior developer's pull request. However, not wanting to discourage the junior developer, they approve the pull request with only a minor comment about a variable name. The architectural flaw is later discovered after it has caused significant problems in production. This fear of conflict prevents the team from having the necessary conversations to build high-quality software.