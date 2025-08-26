---
title: Unused Indexes
description: The database has indexes that are never used by any queries, which still
  consume storage space and add overhead to write operations.
category:
- Code
- Performance
related_problems:
- slug: inefficient-database-indexing
  similarity: 0.7
- slug: index-fragmentation
  similarity: 0.7
- slug: queries-that-prevent-index-usage
  similarity: 0.7
- slug: incorrect-index-type
  similarity: 0.7
- slug: database-query-performance-issues
  similarity: 0.65
- slug: high-number-of-database-queries
  similarity: 0.65
layout: problem
---

## Description
Unused indexes are database indexes that are not being utilized by any queries. While indexes are crucial for speeding up data retrieval, unused ones still consume disk space and, more importantly, add overhead to write operations (INSERT, UPDATE, DELETE) because the database must update the index every time the underlying data changes. Regularly identifying and removing unused indexes is a key part of database maintenance and performance tuning, as it reclaims storage and reduces unnecessary processing.

## Indicators ⟡
- The database is using a lot of disk space, even though the data set is small.
- Write operations are slow, even though the database is not under heavy load.
- Backups and restores are taking a long time.
- The database is using a lot of memory, even when it is not under heavy load.

## Symptoms ▲
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.343, Strength: 0.581">ⓘ</span>
<br/>  The presence of unused database indexes can lead to unreleased resources, as the overhead from maintaining these indexes can cause connections and other resources to remain open longer than necessary, preventing proper deallocation and resulting in resource leakage within legacy systems.

## Root Causes ▼
- [Misunderstanding of OOP](misunderstanding-of-oop.md) <span class="info-tooltip" title="Confidence: 0.373, Strength: 0.870">ⓘ</span>
<br/>  A lack of understanding of object-oriented programming principles often leads to inefficient database schema design, resulting in unnecessary indexes that are never utilized by queries, thereby causing wasted storage and increased write operation overhead.
- [High API Latency](high-api-latency.md) <span class="info-tooltip" title="Confidence: 0.346, Strength: 0.887">ⓘ</span>
<br/>  The excessive time taken for API responses can lead developers to overlook or ignore optimizing database queries, resulting in the creation of unused indexes that unnecessarily consume resources and hinder overall system performance.
- [Lazy Loading](lazy-loading.md) <span class="info-tooltip" title="Confidence: 0.341, Strength: 0.854">ⓘ</span>
<br/>  The reliance on lazy loading in the ORM framework results in numerous small, inefficient queries that bypass the need for certain indexes, leading to their accumulation and eventual redundancy in the database.
- [High Number of Database Queries](high-number-of-database-queries.md) <span class="info-tooltip" title="Confidence: 0.322, Strength: 0.801">ⓘ</span>
<br/>  The excessive number of database queries leads to the creation of numerous indexes in an attempt to optimize performance, but as these queries often do not utilize the additional indexes, they become redundant and contribute to unnecessary storage consumption and overhead.
- [Shared Database](shared-database.md) <span class="info-tooltip" title="Confidence: 0.310, Strength: 0.880">ⓘ</span>
<br/>  The presence of multiple services or components sharing a single database often leads to the creation of indexes that are tailored for specific queries from some services, while remaining unused by others, resulting in unnecessary storage consumption and overhead in write operations.
- [Slow Response Times for Lists](slow-response-times-for-lists.md) <span class="info-tooltip" title="Confidence: 0.302, Strength: 0.854">ⓘ</span>
<br/>  Inefficient data fetching for list displays can lead developers to create unnecessary indexes in an attempt to optimize performance, which ultimately remain unused and contribute to wasted storage and overhead during write operations.
- [Insufficient Design Skills](insufficient-design-skills.md) <span class="info-tooltip" title="Confidence: 0.301, Strength: 0.844">ⓘ</span>
<br/>  The lack of experience in the development team leads to poorly designed database schemas that result in unnecessary indexes being created without proper analysis of query patterns, causing these unused indexes to accumulate and burden the system.

## Detection Methods ○

- **Database Monitoring Tools:** Most modern database systems provide statistics on index usage (e.g., `pg_stat_user_indexes` in PostgreSQL, `sys.dm_db_index_usage_stats` in SQL Server, `information_schema.statistics` in MySQL combined with query logs).
- **Query Execution Plan Analysis:** Regularly analyze `EXPLAIN` plans for common queries to ensure they are using the most efficient indexes.
- **Automated Index Advisors:** Some database management systems or third-party tools offer automated index recommendations and usage analysis.
- **Periodic Database Audits:** Schedule regular reviews of database schema and index usage.

## Examples
A legacy e-commerce application has an `orders` table with an index on `customer_id` that was created years ago for a specific reporting query. That report has since been deprecated, but the index remains, adding overhead to every new order placed without providing any query performance benefit. In another case, a developer creates an index on `(column_A, column_B)` but later creates another index on `(column_A)`. The database's query optimizer might prefer the smaller `(column_A)` index for queries only involving `column_A`, rendering the composite index partially unused for those queries. Unused indexes are a form of technical debt in database management. While they don't directly cause application errors, they silently degrade write performance, waste resources, and complicate database maintenance, especially in large-scale systems.
