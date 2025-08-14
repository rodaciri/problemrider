---
title: Database Query Performance Issues
description: Poorly optimized database queries cause slow response times, high resource
  consumption, and scalability problems.
category:
- Performance
- Technical
- Design
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

- **Slow Query Execution:** Queries taking seconds or minutes instead of milliseconds
- **High Database CPU Usage:** Database servers experiencing high CPU utilization
- **Application Timeouts:** Applications timing out while waiting for database responses
- **Connection Pool Exhaustion:** Database connection pools depleted by slow-running queries
- **Memory Consumption Issues:** Queries consuming excessive database memory resources

## Root Causes ▼

- **Missing Database Indexes:** Queries requiring table scans due to lack of appropriate indexes
- **Inefficient Query Structure:** Poorly written SQL with unnecessary joins or subqueries
- **Large Result Set Processing:** Queries returning more data than necessary
- **[Database Schema Design Problems](database-schema-design-problems.md):** Poor table structure or normalization affecting query performance
- **Outdated Query Statistics:** Database optimizer using stale statistics for query planning
- **Lack of Query Optimization:** Queries not reviewed or optimized for performance

## Detection Methods ○

- **Query Performance Monitoring:** Monitor database query execution times and resource usage
- **Query Execution Plan Analysis:** Analyze query execution plans for inefficient operations
- **Database Performance Profiling:** Profile database performance under different load conditions
- **Slow Query Log Analysis:** Review database slow query logs for problematic queries
- **Index Usage Analysis:** Analyze which indexes are used and which queries lack proper indexing

## Examples

An e-commerce application's product search query performs a full table scan across a products table with 10 million records because it searches product descriptions using a LIKE clause without proper text indexing. Each search takes 15 seconds and consumes significant database resources, making the search feature unusable during peak traffic. Adding a full-text index and restructuring the query reduces search time to under 100ms. Another example involves a reporting query that joins five large tables without proper indexes on join columns. The query takes 45 minutes to execute and locks database resources, preventing other operations from completing. Analysis shows the query is performing nested loop joins instead of more efficient hash joins due to missing indexes on foreign key columns.