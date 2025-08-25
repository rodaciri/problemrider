---
title: Incorrect Max Connection Pool Size
description: The maximum number of connections in a database connection pool is set
  incorrectly, leading to either wasted resources or connection exhaustion.
category:
- Code
- Performance
related_problems:
- slug: misconfigured-connection-pools
  similarity: 0.85
- slug: high-connection-count
  similarity: 0.8
- slug: database-connection-leaks
  similarity: 0.65
- slug: high-number-of-database-queries
  similarity: 0.6
- slug: high-database-resource-utilization
  similarity: 0.6
- slug: database-query-performance-issues
  similarity: 0.6
layout: problem
---

## Description
Setting the maximum size of a connection pool is a delicate balancing act. If the size is too small, the application may be starved for connections, leading to timeouts and poor performance. If the size is too large, it can overwhelm the database with too many connections, leading to a degradation in performance and stability. The optimal size for a connection pool depends on a variety of factors, including the number of application instances, the number of threads in each instance, and the capacity of the database.


## Indicators ⟡
- You are seeing a high number of connection errors in your logs.
- Your application is slow, and you suspect that it is due to a high number of database connections.
- You are getting complaints from users about slow performance.
- You are seeing a high number of timeout errors in your logs.


## Symptoms ▲

*No significant relationships within the scope of legacy systems identified (yet).*

## Root Causes ▼

- [Long-Running Transactions](long-running-transactions.md) <span class="info-tooltip" title="Confidence: 0.411, Strength: 0.899">ⓘ</span>
<br/>  Long-running transactions can occupy database connections for extended periods, preventing other requests from being processed, which can lead to an incorrect configuration of the maximum connection pool size as the system struggles to manage the limited available connections effectively.
- [High API Latency](high-api-latency.md) <span class="info-tooltip" title="Confidence: 0.382, Strength: 0.884">ⓘ</span>
<br/>  Excessive API latency leads to prolonged open connections in the pool as requests take longer to complete, causing the maximum connection pool size to be incorrectly exceeded or underutilized based on the application's demand.
- [Thread Pool Exhaustion](thread-pool-exhaustion.md) <span class="info-tooltip" title="Confidence: 0.357, Strength: 0.901">ⓘ</span>
<br/>  The exhaustion of available threads due to long-running or blocked operations prevents timely release of database connections, resulting in an insufficient number of connections being available for new tasks, which ultimately leads to incorrect configuration of the connection pool size.
- [Slow Response Times for Lists](slow-response-times-for-lists.md) <span class="info-tooltip" title="Confidence: 0.349, Strength: 0.903">ⓘ</span>
<br/>  Inefficient data fetching for lists increases the number of simultaneous requests to the database, leading to an excessive demand on the connection pool that exceeds its incorrectly configured maximum size, resulting in connection exhaustion or resource wastage.
- [Lazy Loading](lazy-loading.md) <span class="info-tooltip" title="Confidence: 0.348, Strength: 0.878">ⓘ</span>
<br/>  The use of lazy loading generates excessive database queries that rapidly consume available connections, leading to an incorrect configuration of the maximum connection pool size and ultimately resulting in resource wastage or connection exhaustion.
- [Algorithmic Complexity Problems](algorithmic-complexity-problems.md) <span class="info-tooltip" title="Confidence: 0.334, Strength: 0.827">ⓘ</span>
<br/>  Inefficient algorithms and data structures lead to increased response times and resource consumption, causing the connection pool to reach its maximum limit more quickly and ultimately resulting in connection exhaustion or resource wastage.
- [Resource Allocation Failures](resource-allocation-failures.md) <span class="info-tooltip" title="Confidence: 0.323, Strength: 0.864">ⓘ</span>
<br/>  Improper deallocation of system resources results in a shortage of available connections, causing the connection pool to be set incorrectly, either over-allocating or exhausting connections in legacy systems.
- [Database Connection Leaks](database-connection-leaks.md) <span class="info-tooltip" title="Confidence: 0.323, Strength: 0.829">ⓘ</span>
<br/>  Improperly closed database connections accumulate over time, resulting in a depletion of available connections in the pool, which, when combined with an incorrectly set maximum size, can trigger resource exhaustion or application failures.

## Detection Methods ○

- **Application Metrics:** Monitor connection pool metrics (e.g., active connections, idle connections, wait times, connection acquisition rates, pool size) provided by the application framework or a monitoring agent.
- **Database Monitoring Tools:** Observe the number of active and idle connections on the database server and compare it to the `max_connections` setting.
- **Log Analysis:** Look for connection-related errors in application and database logs.
- **Load Testing:** Systematically increase load while monitoring connection pool and database metrics to find the optimal `max_pool_size`.


## Examples
A web application is deployed with a default connection pool size of 10. During a marketing campaign, the number of concurrent users spikes to 100. The application starts throwing "Connection pool exhausted" errors because it cannot acquire enough database connections to serve all requests. In another case, a microservice is configured with a `max_pool_size` of 200, but the database it connects to only allows a maximum of 100 connections. This leads to intermittent connection failures and wasted application resources trying to open connections that the database will reject. Proper configuration of database connection pools is crucial for the performance and stability of any application that interacts with a relational database. It requires understanding both the application's concurrency needs and the database's capacity.
