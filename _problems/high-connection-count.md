---
title: High Connection Count
description: A large number of open database connections, even if idle, can consume
  significant memory resources and lead to connection rejections.
category:
- Performance
- Stability
related_problems:
- slug: high-database-resource-utilization
  similarity: 0.779
- slug: misconfigured-connection-pools
  similarity: 0.741
- slug: database-connection-leaks
  similarity: 0.739
- slug: incorrect-max-connection-pool-size
  similarity: 0.739
- slug: long-running-transactions
  similarity: 0.677
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

- **Connection Rejections:** The database starts rejecting new connections, leading to application errors.
- **[Memory Swapping](memory-swapping.md):** The database server's memory consumption rises, potentially leading to swapping.
- **Slow Connection Establishment:** It takes longer for new connections to be established.
- **Database Instability:** The database server may become unresponsive or crash under extreme load.
- **Application Errors:** Applications report errors like "Too many connections" or "Connection refused." 

## Root Causes ▼

- **[Misconfigured Connection Pools](misconfigured-connection-pools.md):** Application connection pools are not properly configured, leading to too many idle connections or connections not being released.
- **Application Not Releasing Connections:** Code errors prevent database connections from being closed after use.
- **Spiky Workload:** Sudden bursts of traffic cause a rapid increase in connection demand that exceeds the database's capacity.
- **[Long-Running Transactions](long-running-transactions.md):** Transactions that remain open for extended periods hold onto connections.
- **Insufficient Database Max Connections:** The `max_connections` setting in the database is too low for the application's needs.
- **DDoS Attack:** A malicious attack floods the database with connection requests.

## Detection Methods ○

- **Database Monitoring Tools:** Use database-specific tools (e.g., `SHOW STATUS` in MySQL, `pg_stat_activity` in PostgreSQL) to monitor the number of active and idle connections.
- **Application Metrics:** Monitor connection pool metrics within the application (e.g., active connections, idle connections, wait times).
- **System Monitoring:** Observe the database server's memory usage and process count.
- **Log Analysis:** Look for database error logs indicating connection rejections.

## Examples
A web application experiences intermittent "Too many connections" errors during peak traffic. Investigation reveals that the application's connection pool is configured with a very high `max_idle_connections` setting, causing thousands of idle connections to accumulate on the database server. In another case, a batch job runs every hour and opens a new database connection for each record it processes, without closing them. Over time, this leads to a gradual increase in connection count until the database hits its limit. This problem is common in applications that are not designed with connection management in mind, or where default connection pool settings are used without proper tuning for the specific workload. It can be particularly problematic in microservices architectures where many services might independently open connections to the same database.