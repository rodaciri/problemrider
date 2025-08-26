---
title: High Connection Count
description: A large number of open database connections, even if idle, can consume
  significant memory resources and lead to connection rejections.
category:
- Code
- Performance
related_problems:
- slug: incorrect-max-connection-pool-size
  similarity: 0.8
- slug: misconfigured-connection-pools
  similarity: 0.7
- slug: high-database-resource-utilization
  similarity: 0.7
- slug: high-number-of-database-queries
  similarity: 0.7
- slug: database-connection-leaks
  similarity: 0.65
- slug: service-timeouts
  similarity: 0.6
layout: problem
---

## Description
A high connection count occurs when a database is overwhelmed by a large number of open connections, both active and idle. Each connection consumes memory and other resources on the database server, and exceeding the configured limit can lead to connection rejections and application failures. This problem is often a symptom of misconfigured connection pooling, inefficient application code that fails to release connections, or sudden spikes in traffic. Properly managing connections is crucial for maintaining the stability and performance of any database-driven application.

## Indicators ⟡
- You are seeing a high number of connections in your database monitoring tools.
- Your application is slow, and you suspect that it is due to a high number of database connections.
- You are getting complaints from users about slow performance.
- You are seeing a high number of timeout errors in your logs.

## Symptoms ▲
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.560, Strength: 0.739">ⓘ</span>
<br/>  An excessive number of open database connections can exhaust available resources, leading to increased latency and ultimately causing services that rely on timely API responses to fail due to upstream timeouts.
- [Increased Customer Support Load](increased-customer-support-load.md) <span class="info-tooltip" title="Confidence: 0.511, Strength: 0.752">ⓘ</span>
<br/>  The high number of idle database connections can overwhelm system resources, leading to slow response times or failures in processing user requests, which in turn causes users to seek support more frequently due to their inability to complete tasks effectively.
- [Interrupt Overhead](interrupt-overhead.md) <span class="info-tooltip" title="Confidence: 0.390, Strength: 0.794">ⓘ</span>
<br/>  A high number of idle database connections can lead to increased network activity from the connection management process, generating excessive hardware interrupts that disrupt CPU execution and degrade overall application performance in legacy systems.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.347, Strength: 0.695">ⓘ</span>
<br/>  The presence of unreleased resources indicates a failure to properly manage the lifecycle of database connections, leading to an accumulation of open connections that strain memory resources and increase the likelihood of connection rejections in legacy systems.
- [Poor Caching Strategy](poor-caching-strategy.md) <span class="info-tooltip" title="Confidence: 0.320, Strength: 0.634">ⓘ</span>
<br/>  Inefficient data retrieval practices that result in unnecessary database fetches exacerbate the strain on memory resources and connection limits, thereby indicating a deeper issue with excessive open connections in legacy systems.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○

- **Database Monitoring Tools:** Use database-specific tools (e.g., `SHOW STATUS` in MySQL, `pg_stat_activity` in PostgreSQL) to monitor the number of active and idle connections.
- **Application Metrics:** Monitor connection pool metrics within the application (e.g., active connections, idle connections, wait times).
- **System Monitoring:** Observe the database server's memory usage and process count.
- **Log Analysis:** Look for database error logs indicating connection rejections.

## Examples
A web application experiences intermittent "Too many connections" errors during peak traffic. Investigation reveals that the application's connection pool is configured with a very high `max_idle_connections` setting, causing thousands of idle connections to accumulate on the database server. In another case, a batch job runs every hour and opens a new database connection for each record it processes, without closing them. Over time, this leads to a gradual increase in connection count until the database hits its limit. This problem is common in applications that are not designed with connection management in mind, or where default connection pool settings are used without proper tuning for the specific workload. It can be particularly problematic in microservices architectures where many services might independently open connections to the same database.
