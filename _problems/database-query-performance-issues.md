---
title: Database Query Performance Issues
description: Poorly optimized database queries cause slow response times, high resource
  consumption, and scalability problems.
category:
- Architecture
- Code
- Performance
related_problems:
- slug: slow-database-queries
  similarity: 0.8
- slug: high-number-of-database-queries
  similarity: 0.75
- slug: inefficient-database-indexing
  similarity: 0.7
- slug: high-database-resource-utilization
  similarity: 0.7
- slug: n-plus-one-query-problem
  similarity: 0.65
- slug: queries-that-prevent-index-usage
  similarity: 0.65
layout: problem
---

## Description

Database query performance issues occur when SQL queries are inefficiently written, poorly optimized, or execute against inadequately structured databases, resulting in slow response times, high CPU and memory usage, and scalability bottlenecks. These issues often become more pronounced as data volumes grow and user loads increase.


## Indicators ⟡

- Database queries taking significantly longer than expected to execute
- High CPU usage on database servers during query execution
- Applications timing out while waiting for database responses
- Database connection pools exhausted due to slow queries
- Query execution plans showing full table scans or inefficient operations


## Symptoms ▲

- [Increased Customer Support Load](increased-customer-support-load.md) <span class="info-tooltip" title="Confidence: 0.560, Strength: 0.809">ⓘ</span>
<br/>  Slow database query performance leads to delays in task completion for users, resulting in increased frustration and a higher volume of support requests as they seek assistance for issues stemming from unresponsive or inefficient system interactions.
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.497, Strength: 0.702">ⓘ</span>
<br/>  Slow response times from poorly optimized database queries lead to upstream services exceeding their timeout thresholds, resulting in failed API calls.
- [Inefficient Development Environment](inefficient-development-environment.md) <span class="info-tooltip" title="Confidence: 0.406, Strength: 0.801">ⓘ</span>
<br/>  The slow and cumbersome development environment results from the team's inability to efficiently test and iterate on queries, as performance issues in the database hinder rapid feedback and debugging, effectively indicating underlying query optimization problems.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.328, Strength: 0.602">ⓘ</span>
<br/>  Poorly optimized queries can lead to excessive resource allocation that isn't released, as prolonged processing times prevent timely deallocation of objects and connections, thereby indicating underlying performance issues in the system.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○

- **Query Performance Monitoring:** Monitor database query execution times and resource usage
- **Query Execution Plan Analysis:** Analyze query execution plans for inefficient operations
- **Database Performance Profiling:** Profile database performance under different load conditions
- **Slow Query Log Analysis:** Review database slow query logs for problematic queries
- **Index Usage Analysis:** Analyze which indexes are used and which queries lack proper indexing


## Examples

An e-commerce application's product search query performs a full table scan across a products table with 10 million records because it searches product descriptions using a LIKE clause without proper text indexing. Each search takes 15 seconds and consumes significant database resources, making the search feature unusable during peak traffic. Adding a full-text index and restructuring the query reduces search time to under 100ms. Another example involves a reporting query that joins five large tables without proper indexes on join columns. The query takes 45 minutes to execute and locks database resources, preventing other operations from completing. Analysis shows the query is performing nested loop joins instead of more efficient hash joins due to missing indexes on foreign key columns.
