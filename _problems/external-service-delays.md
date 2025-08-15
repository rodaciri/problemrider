---
title: External Service Delays
description: An API depends on other services (third-party or internal) that are slow
  to respond, causing the API itself to be slow.
category:
- Code
- Performance
related_problems:
- slug: high-api-latency
  similarity: 0.75
- slug: slow-application-performance
  similarity: 0.65
- slug: upstream-timeouts
  similarity: 0.65
- slug: network-latency
  similarity: 0.6
- slug: service-timeouts
  similarity: 0.6
- slug: delayed-value-delivery
  similarity: 0.6
layout: problem
---

## Description
External service delays are a common problem in distributed systems, where services often depend on third-party APIs to fulfill requests. When an external service is slow to respond, it can have a cascading effect, causing delays in downstream services and a poor user experience. External service delays can be caused by a variety of factors, from network issues and a lack of proper caching to a problem with the third-party service itself. A robust monitoring and alerting system is essential for detecting and responding to external service delays in a timely manner.

## Indicators ⟡
- Your application is slow, but your servers are not under heavy load.
- You see a high number of timeout errors in your logs.
- Your application's performance is inconsistent.
- You are getting complaints from users about slow performance.

## Symptoms ▲

- **[High API Latency](high-api-latency.md):** The primary symptom is that the API is slow, but the cause is external.
- **[Increased Error Rates](increased-error-rates.md):** The API may return errors if it is unable to communicate with the external service in a timely manner.
- **Inconsistent Performance:** The API's performance may be erratic, depending on the performance of the external service.
- **Blame Shifting:** It can be difficult to determine whether the problem is with the API or the external service, leading to finger-pointing between teams.
- **Cascading Failures:** If the external service is down, it can cause the API to fail as well, which can then cause other services that depend on the API to fail.

## Root Causes ▼

- **Slow External Service:** The external service is itself slow due to any of the other problems listed in this catalog. (e.g., [Slow Database Queries](slow-database-queries.md), [Inefficient Code](inefficient-code.md))
- **[Network Latency](network-latency.md):** There is high network latency between the API and the external service.
- **Shared Infrastructure:** The API and the external service may be running on shared infrastructure, and the external service may be consuming a disproportionate amount of resources.
- **[Upstream Timeouts](upstream-timeouts.md):** The API does not have a timeout configured for calls to the external service, so it waits indefinitely for a response.
- **[Poor Caching Strategy](poor-caching-strategy.md):** The API calls the external service on every request, even for data that could be cached.

## Detection Methods ○

- **Distributed Tracing:** Use distributed tracing to follow a request from the API to the external service and identify where the time is being spent.
- **Metrics and Alerting:** Monitor the latency of calls to the external service. Set up alerts for when the latency exceeds a certain threshold.
- **Status Pages:** Check the status page of the external service to see if they are reporting any issues.
- **Service Level Agreements (SLAs):** If there is an SLA in place for the external service, monitor the service's performance against the SLA.

## Examples
An e-commerce application uses a third-party service to process payments. The payment service is slow, which causes the checkout process to be slow. In a microservice architecture, a single slow service can cause a cascading failure that affects the entire application. This is a common problem in modern applications, which are often built by composing together a variety of different services. While this approach has many benefits, it also introduces new challenges, such as the need to deal with external service delays.