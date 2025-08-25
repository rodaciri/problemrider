---
title: High Database Resource Utilization
description: The database server consistently operates with high CPU or memory usage,
  risking instability and slowing down all dependent services.
category:
- Code
- Performance
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

- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.621, Strength: 0.842">ⓘ</span>
<br/>  Unreleased resources lead to increased memory and CPU consumption as the database server struggles to manage the growing number of allocated but unused objects, ultimately exacerbating performance issues and risking system stability in legacy environments.
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.605, Strength: 0.751">ⓘ</span>
<br/>  High database resource utilization leads to slower query processing times, causing services consuming the API to exceed their timeout thresholds and fail to receive timely responses.
- [Unbounded Data Growth](unbounded-data-growth.md) <span class="info-tooltip" title="Confidence: 0.498, Strength: 0.850">ⓘ</span>
<br/>  Unbounded data growth leads to excessive resource consumption as the database struggles to manage increasingly large volumes of data, resulting in heightened CPU and memory usage that threatens system stability.
- [Increased Customer Support Load](increased-customer-support-load.md) <span class="info-tooltip" title="Confidence: 0.450, Strength: 0.683">ⓘ</span>
<br/>  High resource utilization in the database leads to slow query responses and application performance issues, causing users to experience frustration and seek support more frequently.
- [Negative User Feedback](negative-user-feedback.md) <span class="info-tooltip" title="Confidence: 0.383, Strength: 0.776">ⓘ</span>
<br/>  High resource utilization in the database leads to slower query response times and processing delays, resulting in user complaints about performance issues like slow loading and application freezes.
- [Interrupt Overhead](interrupt-overhead.md) <span class="info-tooltip" title="Confidence: 0.367, Strength: 0.743">ⓘ</span>
<br/>  Excessive resource utilization in the database leads to a backlog of pending operations, causing increased hardware interrupts as the system struggles to manage multiple context switches to handle the workload, ultimately degrading overall application performance.
- [Memory Leaks](memory-leaks.md) <span class="info-tooltip" title="Confidence: 0.341, Strength: 0.868">ⓘ</span>
<br/>  Inefficient memory management in applications can lead to unbounded memory consumption, ultimately increasing the load on the database server by exhausting available resources, which in turn manifests as high CPU or memory usage and threatens overall system stability.
- [Poor Caching Strategy](poor-caching-strategy.md) <span class="info-tooltip" title="Confidence: 0.336, Strength: 0.658">ⓘ</span>
<br/>  Inefficient data retrieval due to a lack of caching leads to repeated database queries, which exacerbates CPU and memory consumption, ultimately contributing to system instability and slower response times across all services.
- [Index Fragmentation](index-fragmentation.md) <span class="info-tooltip" title="Confidence: 0.305, Strength: 0.851">ⓘ</span>
<br/>  As data changes over time, disorganized database indexes lead to inefficient query processing, which in turn causes excessive CPU and memory consumption, highlighting a degradation in resource utilization.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○

- **Database Monitoring Tools:** Use specialized database monitoring tools (e.g., pgAdmin for PostgreSQL, MySQL Workbench, or third-party tools like Percona Monitoring and Management) to inspect resource usage, running queries, and configuration.
- **Cloud Provider Metrics:** If using a managed database service (like AWS RDS or Google Cloud SQL), use the cloud provider's monitoring dashboards to track CPU, memory, and I/O metrics.
- **Query Analysis:** Use the database's `EXPLAIN` or `EXPLAIN ANALYZE` commands to inspect the execution plans of slow or frequent queries and identify inefficiencies.
- **System Performance Utilities:** Use standard Linux/Windows command-line tools (`top`, `htop`, `iostat`, `vmstat`) on the database server to get a real-time view of resource consumption.


## Examples
A company's main application becomes slow every day at noon. An investigation reveals that a daily report, which runs a series of complex, unoptimized queries, is kicking off at this time and consuming all available database CPU. In another case, a web application using a connection pool is misconfigured to open far more connections than the database is tuned for. Over time, the database's memory usage climbs until it becomes unstable, even though the query workload itself is not particularly high. This is a critical issue in legacy systems where the database has been in use for many years. Over time, data volume grows, query patterns change, and indexes that were once effective may no longer be optimal, leading to a gradual increase in resource utilization.
