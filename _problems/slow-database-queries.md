---
title: Slow Database Queries
description: Application performance degrades due to inefficient data retrieval from
  the database.
category:
- Performance
related_problems:
- slug: database-query-performance-issues
  similarity: 0.8
- slug: high-number-of-database-queries
  similarity: 0.75
- slug: slow-application-performance
  similarity: 0.7
- slug: high-database-resource-utilization
  similarity: 0.7
- slug: imperative-data-fetching-logic
  similarity: 0.7
- slug: lazy-loading
  similarity: 0.7
layout: problem
---

## Description
Slow database queries are a primary cause of poor application performance. When a query takes too long to execute, it can hold up application threads, block other queries, and lead to a frustrating user experience. These slow queries are often the result of inefficient query design, missing or improper indexes, or a database schema that is not optimized for the types of queries being run. Identifying and optimizing slow queries is a critical task in a healthy and performant application.


## Indicators ⟡
- The application is slow, and you suspect that it is due to slow database queries.
- You are seeing a high number of slow queries in your database logs.
- The database is using a lot of CPU or memory.
- You are getting complaints from users about slow performance.


## Symptoms ▲

- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.511, Strength: 0.697">ⓘ</span>
<br/>  Inefficient data retrieval leads to prolonged query execution times, causing API responses to exceed configured timeouts, which in turn results in service failures in dependent systems.
- [Poor Caching Strategy](poor-caching-strategy.md) <span class="info-tooltip" title="Confidence: 0.304, Strength: 0.649">ⓘ</span>
<br/>  The constant fetching of data from the source rather than utilizing caching not only exacerbates query response times but also highlights underlying inefficiencies in data retrieval processes, indicating that the system is not optimized for performance.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○

- **Database query logging:** Enable logging of slow queries in the database configuration.
- **Application performance monitoring (APM) tools:** Use tools like New Relic, Datadog, or Prometheus to monitor query performance and identify bottlenecks.
- **Database-specific tools:** Use tools like `EXPLAIN` in PostgreSQL or `EXPLAIN PLAN` in Oracle to analyze query execution plans.
- **Code reviews:** Look for common anti-patterns like N+1 queries or inefficient query logic.
- **Load testing:** Simulate high traffic to identify queries that do not scale well.


## Examples
A web application's user profile page takes a long time to load. Upon investigation, it is discovered that the page is making a separate database query for each of the user's friends to retrieve their profile pictures. In another case, a reporting dashboard that aggregates data from multiple tables is timing out because the queries are not using the correct indexes. This problem is common in applications that have a large amount of data or complex data models. It is often exacerbated by a lack of database expertise on the development team.
