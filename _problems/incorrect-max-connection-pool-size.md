---
title: Incorrect Max Connection Pool Size
description: The maximum number of connections in a database connection pool is set
  incorrectly, leading to either wasted resources or connection exhaustion.
category:
- Performance
- Stability
related_problems:
- slug: misconfigured-connection-pools
  similarity: 0.919
- slug: database-connection-leaks
  similarity: 0.789
- slug: high-connection-count
  similarity: 0.753
- slug: high-database-resource-utilization
  similarity: 0.7
- slug: resource-allocation-failures
  similarity: 0.647
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

- **[Misconfigured Connection Pools](misconfigured-connection-pools.md):** Applications report errors like "Connection pool exhausted" or "No available connections" during peak load.
- **[High Connection Count](high-connection-count.md):** The database server shows a large number of open connections, many of which may be idle, consuming database resources unnecessarily.
- **Slow Connection Establishment:** Applications take a long time to acquire a database connection, even when the database itself is not under heavy load.
- **Intermittent Application Errors:** Errors related to database connectivity appear sporadically, making them hard to diagnose.
- **Increased Database Load:** Even with a seemingly low application workload, the database might show higher-than-expected resource usage due to inefficient connection handling.

## Root Causes ▼

- **Under-estimation of Concurrency:** The `max_pool_size` is set too low for the actual number of concurrent requests the application needs to handle.
- **Over-estimation of Concurrency:** The `max_pool_size` is set too high, leading to the application opening more connections than the database can efficiently handle, or more than are actually needed, wasting database resources.
- **Default Settings Used:** The default connection pool size is used without tuning for the specific application workload and database capabilities.
- **Lack of Load Testing:** The application is not tested under realistic load conditions to determine the optimal connection pool size.
- **Ignoring Database Limits:** The connection pool size is set without considering the `max_connections` limit configured on the database server.
- **[Long-Running Database Transactions](long-running-database-transactions.md):** Transactions that hold connections open for extended periods can quickly exhaust a pool, even if the `max_pool_size` is otherwise reasonable.

## Detection Methods ○

- **Application Metrics:** Monitor connection pool metrics (e.g., active connections, idle connections, wait times, connection acquisition rates, pool size) provided by the application framework or a monitoring agent.
- **Database Monitoring Tools:** Observe the number of active and idle connections on the database server and compare it to the `max_connections` setting.
- **Log Analysis:** Look for connection-related errors in application and database logs.
- **Load Testing:** Systematically increase load while monitoring connection pool and database metrics to find the optimal `max_pool_size`.

## Examples
A web application is deployed with a default connection pool size of 10. During a marketing campaign, the number of concurrent users spikes to 100. The application starts throwing "Connection pool exhausted" errors because it cannot acquire enough database connections to serve all requests. In another case, a microservice is configured with a `max_pool_size` of 200, but the database it connects to only allows a maximum of 100 connections. This leads to intermittent connection failures and wasted application resources trying to open connections that the database will reject. Proper configuration of database connection pools is crucial for the performance and stability of any application that interacts with a relational database. It requires understanding both the application's concurrency needs and the database's capacity.