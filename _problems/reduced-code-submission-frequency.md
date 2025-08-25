---
title: Reduced Code Submission Frequency
description: Developers batch multiple changes together or delay submissions to avoid
  frequent code review cycles, reducing feedback quality and integration frequency.
category:
- Process
- Team
related_problems:
- slug: reduced-review-participation
  similarity: 0.6
- slug: inadequate-code-reviews
  similarity: 0.6
- slug: review-bottlenecks
  similarity: 0.6
- slug: large-pull-requests
  similarity: 0.6
- slug: fear-of-change
  similarity: 0.6
- slug: review-process-avoidance
  similarity: 0.6
layout: problem
---

## Description

Reduced code submission frequency occurs when developers intentionally batch multiple changes together or delay submitting code for review to avoid the overhead and frustration of frequent review cycles. While this might seem efficient from an individual perspective, it leads to larger, more complex changes that are harder to review effectively, increases integration risks, and reduces the collaborative benefits of frequent feedback.


## Indicators ⟡

- Developers submit large pull requests containing multiple unrelated changes
- Days or weeks pass between code submissions from active developers
- Team members mention waiting to "finish everything" before submitting for review
- Pull request sizes are consistently larger than team guidelines recommend
- Developers express reluctance to submit work-in-progress or incremental changes


## Symptoms ▲

- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.502, Strength: 0.747">ⓘ</span>
<br/>  The tendency to delay code submissions fosters an environment where requirements can shift frequently, as developers are less engaged in the iterative feedback process, resulting in unclear priorities and increased rework as adaptations to these changes become necessary.
- [Reduced Team Productivity](reduced-team-productivity.md) <span class="info-tooltip" title="Confidence: 0.495, Strength: 0.779">ⓘ</span>
<br/>  The delay in code submissions leads to longer integration cycles and diminished feedback, which stifles collaboration and slows down the development process, ultimately manifesting as decreased overall productivity within the team.
- [Poor Test Coverage](poor-test-coverage.md) <span class="info-tooltip" title="Confidence: 0.438, Strength: 0.661">ⓘ</span>
<br/>  The tendency to batch changes and delay submissions leads to insufficient regular testing and feedback cycles, resulting in critical areas of the codebase lacking test coverage, which hinders overall quality assurance in legacy systems.
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.418, Strength: 0.619">ⓘ</span>
<br/>  The infrequent code submissions lead to a backlog of unreviewed changes that can introduce compatibility issues or bugs, causing delays in response times from services that rely on the API, which in turn results in upstream timeouts as these services fail to receive timely responses.
- [Increased Customer Support Load](increased-customer-support-load.md) <span class="info-tooltip" title="Confidence: 0.407, Strength: 0.670">ⓘ</span>
<br/>  The infrequent code submissions lead to prolonged periods without updates or enhancements, resulting in unresolved issues that frustrate users and increase their reliance on support services.
- [Flaky Tests](flaky-tests.md) <span class="info-tooltip" title="Confidence: 0.343, Strength: 0.703">ⓘ</span>
<br/>  The infrequent code submissions lead to prolonged periods without integration and feedback, causing tests to become outdated or unrepresentative, which manifests as flaky tests that fail unpredictably due to unresolved timing and dependency issues.
- [Reduced Feature Quality](reduced-feature-quality.md) <span class="info-tooltip" title="Confidence: 0.324, Strength: 0.771">ⓘ</span>
<br/>  When developers delay code submissions to minimize review cycles, it limits opportunities for timely feedback and iterative improvements, ultimately leading to less polished features and diminished overall quality in user experience.
- [Team Members Not Engaged in Review Process](team-members-not-engaged-in-review-process.md) <span class="info-tooltip" title="Confidence: 0.314, Strength: 0.718">ⓘ</span>
<br/>  The infrequent submission of code leads to a lack of engagement in the review process, as developers become accustomed to batching changes, resulting in a repetitive assignment of reviewers who may not feel compelled to provide thorough feedback, thus creating a cycle of reduced integration and quality.
- [Developer Frustration and Burnout](developer-frustration-and-burnout.md) <span class="info-tooltip" title="Confidence: 0.314, Strength: 0.645">ⓘ</span>
<br/>  The practice of batching code changes and delaying submissions leads to reduced feedback and integration opportunities, causing frustration and burnout as developers feel overwhelmed and unsupported in navigating a legacy codebase riddled with persistent issues.

## Root Causes ▼

- [Procedural Background](procedural-background.md) <span class="info-tooltip" title="Confidence: 0.303, Strength: 0.935">ⓘ</span>
<br/>  Developers' difficulties in adopting an object-oriented mindset lead them to produce less modular and more complex code, which in turn results in longer preparation times for submissions and a tendency to batch changes to avoid cumbersome reviews, ultimately decreasing the frequency of code submissions.

## Detection Methods ○

- **Submission Frequency Tracking:** Monitor how often individual developers submit code for review
- **Pull Request Size Analysis:** Track the size and complexity of code submissions over time
- **Developer Behavior Surveys:** Collect feedback on reasons for batching changes or delaying submissions
- **Integration Frequency Measurement:** Assess how often code is integrated into main branches
- **Collaboration Pattern Analysis:** Evaluate whether reduced submissions correlate with decreased team collaboration


## Examples

A developer working on a new feature becomes frustrated after their first small pull request goes through four rounds of review with extensive style debates. For their next change, they decide to implement the entire feature, write all tests, update documentation, and handle three related bug fixes before submitting anything for review. The resulting 800-line pull request is difficult for reviewers to analyze comprehensively, contains multiple unrelated changes that should be evaluated separately, and takes two weeks to review instead of the few days each individual change would have required. Another example involves a team member who stops submitting daily progress because previous reviews focused heavily on minor formatting issues. They begin working for a week at a time before submitting, creating integration conflicts with teammates' work and making it harder for the team to provide early feedback on design decisions that are difficult to change later in the development process.
