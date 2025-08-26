---
title: Queries That Prevent Index Usage
description: The way a query is written can prevent the database from using an available
  index, forcing slower full-table scans or less efficient index scans.
category:
- Performance
related_problems:
- slug: inefficient-database-indexing
  similarity: 0.75
- slug: incorrect-index-type
  similarity: 0.7
- slug: unused-indexes
  similarity: 0.7
- slug: database-query-performance-issues
  similarity: 0.65
- slug: slow-database-queries
  similarity: 0.6
- slug: index-fragmentation
  similarity: 0.55
layout: problem
---

## Description
Even when appropriate indexes exist, certain query patterns can prevent the database from using them effectively, leading to slow performance. This can happen when functions are applied to indexed columns, when data types don't match, or when the query optimizer is otherwise unable to see that an index could satisfy the query. Writing queries that are "index-friendly" is a crucial skill for developers working with databases, as it can have a dramatic impact on application performance.

## Indicators ⟡
- Queries are slow, even though they are using an index.
- The database is not using an index that you expect it to use.
- The database is using a full table scan, even though an index is available.
- The database is using a less efficient index than you expect it to use.

## Symptoms ▲

*No significant relationships within the scope of legacy systems identified (yet).*

## Root Causes ▼
- [High Number of Database Queries](high-number-of-database-queries.md) <span class="info-tooltip" title="Confidence: 0.578, Strength: 0.930">ⓘ</span>
<br/>  An unexpectedly high number of database queries can lead to inefficient query structures that bypass index utilization, as the complexity and volume of requests may force the system to resort to full-table scans instead of leveraging available indexes for optimized performance in legacy systems.
- [Slow Application Performance](slow-application-performance.md) <span class="info-tooltip" title="Confidence: 0.533, Strength: 0.824">ⓘ</span>
<br/>  The sluggishness of user-facing features often leads developers to write complex queries without optimizing for index usage, resulting in full-table scans that further degrade application performance.
- [Imperative Data Fetching Logic](imperative-data-fetching-logic.md) <span class="info-tooltip" title="Confidence: 0.514, Strength: 0.871">ⓘ</span>
<br/>  Inefficient data-fetching logic that processes records in a loop often leads to dynamically constructed queries which lack the necessary structure to leverage existing indexes, resulting in full-table scans or suboptimal index usage.
- [Slow Response Times for Lists](slow-response-times-for-lists.md) <span class="info-tooltip" title="Confidence: 0.511, Strength: 0.917">ⓘ</span>
<br/>  Inefficient data fetching for lists often leads to complex query structures that bypass available indexes, resulting in slower execution times due to reliance on full-table scans instead of optimized index lookups.
- [Log Spam](log-spam.md) <span class="info-tooltip" title="Confidence: 0.492, Strength: 0.822">ⓘ</span>
<br/>  The excessive logging of similar queries obscures performance analysis, making it challenging to identify inefficient query structures that fail to utilize available indexes, thereby perpetuating slower database operations.
- [Lazy Loading](lazy-loading.md) <span class="info-tooltip" title="Confidence: 0.485, Strength: 0.828">ⓘ</span>
<br/>  The reliance on lazy loading in ORM frameworks generates numerous individual queries that often bypass available indexes, leading to inefficient database access patterns and full-table scans that degrade performance.
- **Excessive Disk I/O**
- [Index Fragmentation](index-fragmentation.md) <span class="info-tooltip" title="Confidence: 0.396, Strength: 0.686">ⓘ</span>
<br/>  Index fragmentation leads to inefficient data retrieval paths, causing queries to bypass available indexes in favor of slower full-table scans due to the disorganization of index structures, ultimately hindering performance in legacy systems.
- [Algorithmic Complexity Problems](algorithmic-complexity-problems.md) <span class="info-tooltip" title="Confidence: 0.382, Strength: 0.674">ⓘ</span>
<br/>  Inefficient algorithms and data structures can generate poorly structured queries that fail to leverage existing indexes, resulting in unnecessary full-table scans and degraded performance in legacy systems.
- [Unoptimized File Access](unoptimized-file-access.md) <span class="info-tooltip" title="Confidence: 0.368, Strength: 0.704">ⓘ</span>
<br/>  Inefficient file access patterns can lead to excessive locking or contention in legacy systems, which in turn forces developers to write queries that avoid index usage to mitigate performance issues, thus compounding the problem of slow database operations.
- [GraphQL Complexity Issues](graphql-complexity-issues.md) <span class="info-tooltip" title="Confidence: 0.363, Strength: 0.670">ⓘ</span>
<br/>  Complex and inefficient GraphQL queries often lead to non-optimal query structures that bypass available indexes, resulting in slower performance due to full-table scans in legacy systems.
- [Memory Swapping](memory-swapping.md) <span class="info-tooltip" title="Confidence: 0.327, Strength: 0.800">ⓘ</span>
<br/>  When the database server resorts to disk swap space due to insufficient physical memory, it exacerbates performance issues, leading to inefficient query execution plans that prevent optimal index usage.

## Detection Methods ○

- **Query Execution Plan Analysis:** This is the primary method. Always use `EXPLAIN` or `EXPLAIN ANALYZE` to understand how the database is executing your queries. Look for `Seq Scan` or `Full Table Scan` on large tables where an index is expected.
- **Database Slow Query Logs:** Configure your database to log slow queries and regularly review these logs.
- **Automated Query Performance Tools:** Many APM tools or database monitoring solutions can identify inefficient queries and suggest improvements.
- **Code Review:** Developers should be aware of common patterns that prevent index usage during code reviews.

## Examples
A user search feature queries a `users` table with `WHERE LOWER(email) = 'john.doe@example.com'`. Even though `email` is indexed, the `LOWER()` function prevents the index from being used, leading to a full table scan. Rewriting it as `WHERE email ILIKE 'john.doe@example.com'` (if case-insensitive search is needed and supported by the database) or ensuring the application handles case sensitivity before the query can fix this. In another case, a report query uses `WHERE product_code LIKE '%ABC%'`. An index on `product_code` exists, but the leading wildcard prevents its use. If the search pattern is always a suffix, a reverse index could be used, or the query rewritten if possible. This problem highlights the importance of understanding how database optimizers work and writing queries that allow them to leverage existing indexes effectively. It's a common source of performance bottlenecks, especially in applications with complex reporting or search functionalities.
