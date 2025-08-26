---
title: Time Pressure
description: Teams are forced to take shortcuts to meet immediate deadlines, deferring
  proper solutions and rushing important tasks like code reviews.
category:
- Code
- Process
related_problems:
- slug: deadline-pressure
  similarity: 0.75
- slug: increased-stress-and-burnout
  similarity: 0.7
- slug: constant-firefighting
  similarity: 0.65
- slug: increased-technical-shortcuts
  similarity: 0.65
- slug: unrealistic-deadlines
  similarity: 0.65
- slug: constantly-shifting-deadlines
  similarity: 0.65
layout: problem
---

## Description
Time pressure is a pervasive problem in software development where the emphasis on speed and meeting deadlines leads to compromises in quality. When teams are constantly rushed, they are more likely to take shortcuts, skip important steps like testing and thorough code reviews, and make suboptimal design decisions. This can lead to an accumulation of technical debt, a decrease in code quality, and an increase in the number of bugs.

## Indicators ⟡
- The team is consistently working overtime to meet deadlines.
- Features are frequently descoped or rushed at the end of a release cycle.
- There is a general feeling of being in a constant state of "firefighting".

## Symptoms ▲
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.522, Strength: 0.718">ⓘ</span>
<br/>  The constant pressure to meet tight deadlines often leads to an inadequate understanding of project scope, resulting in frequent updates to requirements as teams scramble to adapt, ultimately creating a cycle of rework and compounding technical debt in legacy systems.
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.446, Strength: 0.632">ⓘ</span>
<br/>  The rush to meet deadlines leads to inadequate testing and optimization of API calls, resulting in services failing to receive timely responses, which indicates underlying issues in the codebase that have been neglected due to time constraints.
- [Developer Frustration and Burnout](developer-frustration-and-burnout.md) <span class="info-tooltip" title="Confidence: 0.429, Strength: 0.641">ⓘ</span>
<br/>  The constant urgency to deliver under tight deadlines leads developers to bypass essential practices, resulting in a deteriorating codebase and work environment that fosters frustration and burnout as they grapple with the consequences of compromised quality and increased technical debt.
- [Review Process Breakdown](review-process-breakdown.md) <span class="info-tooltip" title="Confidence: 0.389, Strength: 0.633">ⓘ</span>
<br/>  The urgent need to meet deadlines leads teams to prioritize speed over thoroughness, resulting in a weakened review process that fails to catch critical issues and maintain code quality, highlighting the detrimental effects of inadequate time allocation on system integrity.
- [Increased Customer Support Load](increased-customer-support-load.md) <span class="info-tooltip" title="Confidence: 0.359, Strength: 0.619">ⓘ</span>
<br/>  The rush to meet deadlines often results in inadequate testing and poor code quality, leading to user frustration and an increased volume of support requests as customers encounter unresolved issues.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○
- **Track Overtime Hours:** Monitor the number of hours the team is working beyond their normal schedule.
- **Analyze Bug Reports:** Look for an increase in the number of bugs, especially those that could have been prevented with more time for testing and review.
- **Team Retrospectives:** Discuss the impact of deadlines on the team's ability to produce high-quality work.

## Examples
A team is under pressure to deliver a new feature by the end of the quarter. To meet the deadline, they decide to skip writing unit tests and to perform only a cursory manual test. The feature is delivered on time, but it is full of bugs that are only discovered by users in production. The team then has to spend the next several weeks fixing the bugs, which ultimately delays the next feature release.
