---
title: Service Timeouts
description: Services fail to complete requests within an acceptable time limit, causing
  errors, cascading failures, and system instability.
category:
- Performance
- Stability
related_problems:
- slug: upstream-timeouts
  similarity: 0.85
- slug: high-connection-count
  similarity: 0.6
- slug: external-service-delays
  similarity: 0.6
- slug: high-api-latency
  similarity: 0.6
- slug: network-latency
  similarity: 0.6
- slug: increased-error-rates
  similarity: 0.55
layout: problem
---

## Description
Service timeouts occur when a service fails to respond to a request within a specified time period. This is a common problem in distributed systems, where services often depend on each other to fulfill requests. Timeouts can be caused by a variety of factors, including network issues, high latency in a downstream service, or a service that is simply overloaded. Properly handling timeouts is crucial for building resilient and reliable systems.

## Indicators ⟡
- You are seeing a high number of timeout errors in your logs.
- Your application is slow, and you suspect that it is due to a high number of timeouts.
- You are getting complaints from users about slow performance.
- Your monitoring system is firing alerts for timeout errors.

## Symptoms ▲

- **Error Messages:** Users or client applications receive timeout errors (e.g., HTTP 504 Gateway Timeout).
- **[Cascade Failures](cascade-failures.md):** A timeout in one service prevents another dependent service from completing its work, leading to a chain reaction of failures.
- **[Inconsistent Behavior](inconsistent-behavior.md):** A timeout may occur after a partial data modification, leaving the system in an inconsistent or corrupt state.
- **Alerting Storms:** Monitoring systems trigger numerous alerts as multiple services start timing out.
- **[Thread Pool Exhaustion](thread-pool-exhaustion.md):** Threads or processes in a client service remain blocked waiting for a response, potentially leading to resource exhaustion.

## Root Causes ▼

- **[High API Latency](high-api-latency.md):** The service being called takes too long to respond, exceeding the client's timeout threshold.
- **[Network Latency](network-latency.md):** Unreliable network connections or misconfigured network hardware (like firewalls or load balancers) can drop packets and prevent timely responses.
- **Mismatched Timeout Configurations:** The client service has a shorter timeout than the maximum possible response time of the server, leading to premature failures.
- **[Task Queues Backing Up](task-queues-backing-up.md):** The server is overwhelmed with requests and cannot process them in time, leading to long queue times and eventual timeouts.
- **[Deadlock Conditions](deadlock-conditions.md):** A service may be waiting for a resource (like a database lock) that is held by another process, which in turn is waiting for something else, creating a deadlock.

## Detection Methods ○

- **Distributed Tracing:** Use tools like Jaeger or Zipkin to trace requests across service boundaries and identify which service call is timing out.
- **Log Analysis:** Aggregate and search logs from all services to find timeout error messages and correlate them with other events.
- **Monitoring and Alerting:** Set up alerts on timeout error rates (both client-side and server-side) to detect problems proactively.
- **Chaos Engineering:** Intentionally inject delays or failures into the system to test how it behaves and ensure that timeout and retry mechanisms work as expected.

## Examples
In a microservices-based ordering system, the `Order` service calls the `Payment` service. The `Payment` service is slow, so the `Order` service times out. The user is shown a generic error, but the payment may have actually succeeded, leading to a confusing user experience and inconsistent data. In another case, a web server has a default timeout of 30 seconds. A data-intensive reporting endpoint can sometimes take longer than 30 seconds to generate a report. Users who try to access this report frequently get a 504 Gateway Timeout error. This problem is especially common in complex, distributed systems where a single user request can involve communication between dozens of services. Without careful design of timeouts and retry logic, these systems can be very fragile.