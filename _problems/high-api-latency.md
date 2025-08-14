---
title: High API Latency
description: The time it takes for an API to respond to a request is excessively long,
  leading to poor application performance and a negative user experience.
category:
- Performance
related_problems:
- slug: slow-application-performance
  similarity: 0.831
- slug: network-latency
  similarity: 0.785
- slug: external-service-delays
  similarity: 0.779
- slug: upstream-timeouts
  similarity: 0.753
- slug: service-timeouts
  similarity: 0.693
layout: problem
---

## Description
High API latency is a common problem in distributed systems, where services often depend on each other to fulfill requests. When an API takes a long time to respond, it can have a cascading effect, causing delays in downstream services and a poor user experience. High API latency can be caused by a variety of factors, from inefficient code and slow database queries to network issues and a lack of proper caching. A systematic approach to performance analysis is required to identify and address the root causes of high API latency.

## Indicators ⟡
- Your application is slow, but your servers are not under heavy load.
- You see a high number of timeout errors in your logs.
- Your application's performance is inconsistent.
- You are getting complaints from users about slow performance.

## Symptoms ▲

- **[Slow Application Performance](slow-application-performance.md):** User-facing features that rely on the API feel sluggish or unresponsive.
- **[Upstream Timeouts](upstream-timeouts.md):** Services that consume the API fail because they do not receive a response within their configured timeout window.
- **[Negative User Feedback](negative-user-feedback.md):** Users complain about slow loading times or application freezes.
- **[High Resource Utilization on Client](high-resource-utilization-on-client.md):** Client applications may consume more CPU or memory while waiting for API responses.
- **[Task Queues Backing Up](task-queues-backing-up.md):** Asynchronous jobs that depend on the API take longer to process, causing queues to grow.

## Root Causes ▼

- **[Slow Database Queries](slow-database-queries.md):** The API endpoint triggers inefficient database operations that take a long time to execute.
- **Inefficient Code:** The code responsible for handling the request is computationally expensive or contains performance bottlenecks.
- **External Service Delays:** The API depends on other services (third-party or internal) that are slow to respond.
- **Network Latency:** High network latency between the client, the API server, and its dependencies (like databases or other services) adds to the total response time.
- **Resource Contention:** The server is overloaded, and the API is competing for limited resources like CPU, memory, or I/O.
- **[Poor Caching Strategy](poor-caching-strategy.md):** Data that could be cached is fetched from the source on every request, adding unnecessary overhead.

## Detection Methods ○

- **Application Performance Monitoring (APM):** Use APM tools to trace requests, measure the duration of each operation (e.g., database calls, external service calls), and pinpoint the exact source of the delay.
- **Logging:** Add detailed logging to track the time taken at different stages of the request lifecycle.
- **Metrics and Alerting:** Monitor key metrics like p95/p99 response times and set up alerts to be notified of performance degradations.
- **Load Testing:** Use load testing tools to simulate traffic and identify how latency is affected by concurrent users.

## Examples
An e-commerce site's "product details" API endpoint becomes progressively slower as the number of products grows. Investigation with an APM tool reveals that the endpoint is making a slow, unindexed query to fetch product reviews. In another case, a mobile application's startup time is poor because it makes multiple blocking API calls to fetch initial configuration data. The latency of these calls, especially on slower mobile networks, adds up significantly. This is a common problem in distributed systems and microservices architectures where a single user action can trigger a chain of API calls across multiple services.