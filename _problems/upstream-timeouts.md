---
title: Upstream Timeouts
description: Services that consume an API fail because they do not receive a response
  within their configured timeout window.
category:
- Performance
- Stability
related_problems:
- slug: service-timeouts
  similarity: 0.861
- slug: high-api-latency
  similarity: 0.753
- slug: network-latency
  similarity: 0.648
- slug: external-service-delays
  similarity: 0.646
- slug: increased-error-rates
  similarity: 0.626
layout: problem
---

## Description
Upstream timeouts are a common issue in distributed systems where a service fails to get a response from another service (an "upstream" service) it depends on within a specified time limit. This isn't just a simple error; it's a failure of one part of the system to meet the performance expectations of another. These timeouts can cascade, causing failures in downstream services and ultimately impacting the end-user experience. Understanding and mitigating upstream timeouts is crucial for building resilient and reliable microservices architectures.

## Indicators ⟡
- You are seeing a high number of timeout errors in your logs.
- Your application is slow, and you suspect that it is due to a high number of timeouts.
- You are getting complaints from users about slow performance.
- Your monitoring system is firing alerts for timeout errors.

## Symptoms ▲

- **Error Spikes:** Monitoring tools show a sudden increase in errors related to timeouts.
- **Service Degradation:** Downstream services that depend on the timing-out API become slow or unavailable.
- **Alerts for Unhealthy Services:** Automated health checks for downstream services fail due to timeout errors.
- **Inconsistent Data:** Timeouts can lead to partial data processing, resulting in data inconsistencies.
- **User-Facing Errors:** Users may see generic error messages like "Something went wrong" when a timeout occurs in a service chain.

## Root Causes ▼

- **[High API Latency](high-api-latency.md):** The API being called is taking too long to respond.
- **[Network Latency](network-latency.md):** Network problems between the calling service and the API can cause delays.
- **Aggressive Timeout Settings:** The timeout configured in the calling service is too short for the API's normal response time.
- **[Resource Contention](resource-contention.md):** The service making the call is itself overloaded and cannot process the response in time.
- **Load Balancer or Proxy Issues:** A misconfigured load balancer or proxy between the services can introduce delays or drop connections.

## Detection Methods ○

- **Distributed Tracing:** Use distributed tracing to follow a request across multiple services and pinpoint where the timeout is occurring.
- **Log Analysis:** Centralized logging can be used to correlate timeout errors in one service with slow responses in another.
- **Metrics and Alerting:** Monitor timeout metrics in both the calling service and the API. Set up alerts for unusual spikes.
- **Chaos Engineering:** Intentionally inject delays into services to test how the system behaves and ensure that timeouts are handled gracefully.

## Examples
A `UserService` calls an `AuthService` to authenticate a user. The `AuthService` is experiencing high latency. The `UserService` has a 2-second timeout for the call to the `AuthService`. When the `AuthService` takes longer than 2 seconds to respond, the `UserService` times out and returns an error to the user. In another case, a data processing pipeline consists of several services that call each other in sequence. One of the services in the middle of the pipeline is slow. This causes all subsequent services in the pipeline to time out, even though they are not the root cause of the problem. This is a common problem in microservices architectures, where a single user request can trigger a cascade of calls to multiple services. A timeout in any one of these services can cause the entire request to fail.