---
title: Slow Database Queries
description: Application performance degrades due to inefficient data retrieval from
  the database.
category:
- Performance
related_problems:
- slug: database-query-performance-issues
  similarity: 80%
- slug: high-number-of-database-queries
  similarity: 75%
- slug: high-database-resource-utilization
  similarity: 75%
- slug: slow-application-performance
  similarity: 70%
- slug: lazy-loading
  similarity: 70%
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

- High latency for API endpoints that rely on database access.
- Increased server response times, leading to a poor user experience.
- Timeouts or errors in services that depend on the database.
- High CPU or memory usage on the database server.
- Slow-loading pages or application features.

## Root Causes ▼

- **[Inefficient Database Indexing](inefficient-database-indexing.md):** The database has to scan large portions of tables to find the requested data.
- **Complex queries:** Queries with multiple joins, subqueries, or aggregations can be resource-intensive.
- **Unoptimized queries:** The query planner may not be able to find an efficient execution plan for the query.
- **Large data sets:** As tables grow, queries that were once fast can become slow.
- **[Resource Contention](resource-contention.md):** Multiple services or queries competing for the same resources can cause delays.
- **[N+1 Query Problem](n-plus-one-query-problem.md):** A common problem in applications that use an ORM, where one query is executed to retrieve a list of items, and then N additional queries are executed to retrieve related data for each item.

## Detection Methods ○

- **Database query logging:** Enable logging of slow queries in the database configuration.
- **Application performance monitoring (APM) tools:** Use tools like New Relic, Datadog, or Prometheus to monitor query performance and identify bottlenecks.
- **Database-specific tools:** Use tools like `EXPLAIN` in PostgreSQL or `EXPLAIN PLAN` in Oracle to analyze query execution plans.
- **Code reviews:** Look for common anti-patterns like N+1 queries or inefficient query logic.
- **Load testing:** Simulate high traffic to identify queries that do not scale well.

## Examples
A web application's user profile page takes a long time to load. Upon investigation, it is discovered that the page is making a separate database query for each of the user's friends to retrieve their profile pictures. In another case, a reporting dashboard that aggregates data from multiple tables is timing out because the queries are not using the correct indexes. This problem is common in applications that have a large amount of data or complex data models. It is often exacerbated by a lack of database expertise on the development team.