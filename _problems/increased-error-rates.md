---
title: Increased Error Rates
description: An unusual or sustained rise in the frequency of errors reported by an
  application or service.
category:
- Code
related_problems:
- slug: high-bug-introduction-rate
  similarity: 0.6
- slug: increased-bug-count
  similarity: 0.6
- slug: service-timeouts
  similarity: 0.55
- slug: upstream-timeouts
  similarity: 0.55
- slug: inadequate-error-handling
  similarity: 0.55
- slug: high-connection-count
  similarity: 0.55
layout: problem
---

## Description
An increased error rate is a clear sign that something is wrong with an application. This can be caused by a variety of factors, from a recent deployment that introduced a bug to a problem with a downstream service. A sudden spike in the error rate should be treated as a serious issue, as it can have a significant impact on the user experience and the stability of the system. A robust monitoring and alerting system is essential for detecting and responding to increased error rates in a timely manner.


## Indicators ⟡
- You are seeing a high number of errors in your logs.
- Your monitoring system is firing alerts for error thresholds being exceeded.
- You are getting complaints from users about errors.
- Your application is slow or unavailable.


## Symptoms ▲

- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.529, Strength: 0.719">ⓘ</span>
<br/>  The rise in error rates often leads to increased response times for requests, causing downstream services to exceed their timeout thresholds and fail to receive timely responses, thereby indicating a deterioration in system performance.
- [Increased Customer Support Load](increased-customer-support-load.md) <span class="info-tooltip" title="Confidence: 0.505, Strength: 0.763">ⓘ</span>
<br/>  A rise in error rates often leads to user frustration and task failures, prompting users to seek support more frequently as they struggle to navigate the application or service effectively.
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.457, Strength: 0.682">ⓘ</span>
<br/>  Constantly updated requirements in legacy systems often lead to confusion among development teams, resulting in misalignment with original specifications and increased chances of errors as teams struggle to adapt their work to shifting expectations.
- [Interrupt Overhead](interrupt-overhead.md) <span class="info-tooltip" title="Confidence: 0.408, Strength: 0.779">ⓘ</span>
<br/>  Excessive hardware interrupts can lead to frequent context switches and degraded performance, which may manifest as an increase in error rates as the application struggles to manage its processing workload effectively.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.352, Strength: 0.661">ⓘ</span>
<br/>  The rise in error rates often correlates with unreleased resources, as the accumulation of unclosed connections and allocated objects can exhaust system limits, leading to failures and increased error reporting in legacy applications.
- [Slow Development Velocity](slow-development-velocity.md) <span class="info-tooltip" title="Confidence: 0.312, Strength: 0.666">ⓘ</span>
<br/>  The sustained rise in error rates typically leads to increased time spent on troubleshooting and fixing issues, which in turn hampers the team's ability to deliver new features and improvements at a consistent pace, thereby indicating declining productivity in legacy systems.
- [Unbounded Data Growth](unbounded-data-growth.md) <span class="info-tooltip" title="Confidence: 0.306, Strength: 0.711">ⓘ</span>
<br/>  The sustained rise in error rates often arises from unbounded data growth, as excessive data can overwhelm legacy application limits, leading to performance degradation and increased likelihood of failures.
- [Frequent Hotfixes and Rollbacks](frequent-hotfixes-and-rollbacks.md) <span class="info-tooltip" title="Confidence: 0.302, Strength: 0.673">ⓘ</span>
<br/>  The constant need for small fixes and rollbacks indicates inadequate testing and quality control processes, which directly contributes to the rise in error rates as unaddressed issues accumulate in the legacy system's codebase.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○

- **Application Performance Monitoring (APM):** APM tools track error rates and can often pinpoint the exact line of code or service causing the error.
- **Log Aggregation and Analysis:** Centralized logging systems (e.g., ELK stack, Splunk) allow for easy searching, filtering, and visualization of error logs.
- **Metrics and Alerting:** Monitor error rates (e.g., HTTP 5xx errors, exception counts) and set up alerts for spikes.
- **Synthetic Monitoring:** Automated tests that simulate user interactions can detect errors before real users are affected.
- **User Feedback Channels:** Actively monitor customer support tickets, social media, and other feedback channels.


## Examples
After a new release, an e-commerce checkout service starts returning a high percentage of 500 errors. Investigation reveals a change in the payment gateway API, which the new code did not account for, leading to invalid requests. In another case, a microservice that processes image uploads suddenly sees a spike in errors. Upon investigation, it's found that the disk where uploaded images are stored has run out of space, causing file write operations to fail. Increased error rates are often the first symptom of a deeper underlying problem. Rapid detection and diagnosis are crucial to minimize impact on users and business operations.
