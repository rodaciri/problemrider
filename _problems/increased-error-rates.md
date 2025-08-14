---
title: Increased Error Rates
description: An unusual or sustained rise in the frequency of errors reported by an
  application or service.
category:
- Quality
- Stability
related_problems:
- slug: high-bug-introduction-rate
  similarity: 60%
- slug: increased-bug-count
  similarity: 60%
- slug: service-timeouts
  similarity: 60%
- slug: upstream-timeouts
  similarity: 55%
- slug: inadequate-error-handling
  similarity: 55%
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

- **Alerts Triggering:** Monitoring systems fire alerts for error thresholds being exceeded.
- **[Negative User Feedback](negative-user-feedback.md):** Users report seeing error messages or encountering unexpected behavior.
- **Service Degradation/Outage:** High error rates can lead to partial or complete service unavailability.
- **Log File Flooding:** Error logs grow rapidly, making it difficult to find root causes.
- **Reduced Throughput:** The system processes fewer successful requests due to errors.
- **Cascading Failures:** Errors in one service can trigger errors in dependent services.

## Root Causes ▼

- **Deployment Issues:** A recent code deployment introduced a bug or misconfiguration.
- **[External Service Delays](external-service-delays.md):** A dependency (e.g., database, third-party API) is experiencing issues.
- **[Resource Contention](resource-contention.md):** The application or server is running out of CPU, memory, disk space, or network capacity.
- **Network Problems:** Connectivity issues, packet loss, or high latency between services.
- **Invalid Input/Bad Data:** The application is receiving unexpected or malformed data.
- **Concurrency Issues:** Race conditions or deadlocks in multi-threaded or distributed systems.
- **Security Attacks:** Malicious attempts to exploit vulnerabilities can lead to errors.

## Detection Methods ○

- **Application Performance Monitoring (APM):** APM tools track error rates and can often pinpoint the exact line of code or service causing the error.
- **Log Aggregation and Analysis:** Centralized logging systems (e.g., ELK stack, Splunk) allow for easy searching, filtering, and visualization of error logs.
- **Metrics and Alerting:** Monitor error rates (e.g., HTTP 5xx errors, exception counts) and set up alerts for spikes.
- **Synthetic Monitoring:** Automated tests that simulate user interactions can detect errors before real users are affected.
- **User Feedback Channels:** Actively monitor customer support tickets, social media, and other feedback channels.

## Examples
After a new release, an e-commerce checkout service starts returning a high percentage of 500 errors. Investigation reveals a change in the payment gateway API, which the new code did not account for, leading to invalid requests. In another case, a microservice that processes image uploads suddenly sees a spike in errors. Upon investigation, it's found that the disk where uploaded images are stored has run out of space, causing file write operations to fail. Increased error rates are often the first symptom of a deeper underlying problem. Rapid detection and diagnosis are crucial to minimize impact on users and business operations.