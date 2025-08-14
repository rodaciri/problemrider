---
title: High Database Resource Utilization
description: The database server consistently operates with high CPU or memory usage,
  risking instability and slowing down all dependent services.
category:
- Performance
- Stability
related_problems:
- slug: high-resource-utilization-on-client
  similarity: 0.75
- slug: high-client-side-resource-consumption
  similarity: 0.7
- slug: slow-database-queries
  similarity: 0.7
- slug: high-number-of-database-queries
  similarity: 0.7
- slug: high-connection-count
  similarity: 0.7
- slug: database-query-performance-issues
  similarity: 0.7
layout: problem
---

## Description
High database resource utilization can be a major cause of poor application performance and stability. This can be caused by a variety of factors, from inefficient queries and a lack of proper indexing to a high number of connections and long-running transactions. When the database is under stress, it can lead to a degradation in performance, timeouts, and even a complete failure of the system. A robust monitoring and alerting system is essential for detecting and responding to high database resource utilization in a timely manner.

## Indicators ⟡
- Your database server is constantly running at high CPU or memory usage.
- You are seeing a high number of slow queries in your database logs.
- Your application is slow, and you suspect that it is due to a high number of database connections.
- You are getting complaints from users about slow performance.

## Symptoms ▲

- **High CPU Usage Alerts:** Monitoring systems frequently trigger alerts for sustained high CPU on the database server.
- **[Memory Swapping](memory-swapping.md):** The database server runs out of physical memory and starts using disk swap space, which dramatically slows down performance.
- **Slow Query Log Growth:** The log of slow queries grows rapidly, indicating that many queries are taking longer than the configured threshold.
- **Connection Rejections:** The database starts rejecting new connections because it has reached its maximum connection limit or is too overloaded to accept them.
- **Overall System Slowness:** All applications and services that depend on the database experience performance degradation, not just a single feature.

## Root Causes ▼

- **[Slow Database Queries](slow-database-queries.md):** A large number of queries are performing full table scans, using complex joins, or are otherwise unoptimized, consuming excessive CPU cycles.
- **[Inefficient Database Indexing](inefficient-database-indexing.md):** The absence of appropriate indexes forces the database to do more work to locate data, leading to higher CPU and I/O usage.
- **[High Connection Count](high-connection-count.md):** A large number of open connections, even if idle, can consume significant memory resources.
- **Poorly Configured Database:** The database's memory allocation, parallelism settings, or other configuration parameters are not tuned for the workload.
- **[Long-Running Transactions](long-running-transactions.md):** Transactions that remain open for a long time can hold locks and consume resources, blocking other operations.
- **[N+1 Query Problem](n-plus-one-query-problem.md):** Excessive number of database queries consuming CPU and memory resources.
- **[Database Connection Leaks](database-connection-leaks.md):** Unclosed connections consuming memory and connection pool resources.

## Detection Methods ○

- **Database Monitoring Tools:** Use specialized database monitoring tools (e.g., pgAdmin for PostgreSQL, MySQL Workbench, or third-party tools like Percona Monitoring and Management) to inspect resource usage, running queries, and configuration.
- **Cloud Provider Metrics:** If using a managed database service (like AWS RDS or Google Cloud SQL), use the cloud provider's monitoring dashboards to track CPU, memory, and I/O metrics.
- **Query Analysis:** Use the database's `EXPLAIN` or `EXPLAIN ANALYZE` commands to inspect the execution plans of slow or frequent queries and identify inefficiencies.
- **System Performance Utilities:** Use standard Linux/Windows command-line tools (`top`, `htop`, `iostat`, `vmstat`) on the database server to get a real-time view of resource consumption.

## Examples
A company's main application becomes slow every day at noon. An investigation reveals that a daily report, which runs a series of complex, unoptimized queries, is kicking off at this time and consuming all available database CPU. In another case, a web application using a connection pool is misconfigured to open far more connections than the database is tuned for. Over time, the database's memory usage climbs until it becomes unstable, even though the query workload itself is not particularly high. This is a critical issue in legacy systems where the database has been in use for many years. Over time, data volume grows, query patterns change, and indexes that were once effective may no longer be optimal, leading to a gradual increase in resource utilization.