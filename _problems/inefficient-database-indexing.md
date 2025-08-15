---
title: Inefficient Database Indexing
description: The database lacks appropriate indexes for common query patterns, forcing
  slow, full-table scans for data retrieval operations.
category:
- Database
- Performance
related_problems:
- slug: incorrect-index-type
  similarity: 0.85
- slug: queries-that-prevent-index-usage
  similarity: 0.75
- slug: unused-indexes
  similarity: 0.7
- slug: database-query-performance-issues
  similarity: 0.7
- slug: slow-database-queries
  similarity: 0.7
- slug: lazy-loading
  similarity: 0.7
layout: problem
---

## Description
Inefficient database indexing is a common cause of slow database queries. This can be caused by a variety of factors, from a lack of indexes on frequently queried columns to the use of the wrong type of index for the data. An effective indexing strategy is essential for ensuring that the database can retrieve data quickly and efficiently. This requires a deep understanding of the data, the queries that are being run, and the different types of indexes that are available.

## Indicators ⟡
- Queries are slow, even though they are running against a small amount of data.
- The database is using a full table scan, even though an index is available.
- The database is using a less efficient index than you expect it to use.
- The database is not using an index that you expect it to use.

## Symptoms ▲

- **Slow Queries:** Specific queries, especially those with `WHERE` clauses on unindexed columns, are consistently slow, even on tables that are not excessively large.
- **High I/O Operations:** Database monitoring tools show a high number of disk read operations, as the database has to scan large portions of tables from disk.
- **Inconsistent Query Performance:** A query might be fast when the requested data is in the database's cache but becomes extremely slow when it needs to be read from disk.
- **CPU Overhead:** The database engine consumes more CPU to scan and filter through large amounts of data in memory.
- **Failure to Scale:** Application performance degrades non-linearly as the amount of data in a table grows.

## Root Causes ▼

- **Missing Indexes:** The most common cause is simply that no indexes exist on the columns used in `WHERE` clauses, `JOIN` conditions, or `ORDER BY` clauses.
- **[Incorrect Index Type](incorrect-index-type.md):** Using the wrong type of index (e.g., a B-tree index on a column with very low cardinality) can be ineffective.
- **[Unused Indexes](unused-indexes.md):** The database has indexes that are never used by any queries, which still consume storage space and add overhead to write operations.
- **[Index Fragmentation](index-fragmentation.md):** Over time, as data is inserted, updated, and deleted, indexes can become fragmented, reducing their efficiency.
- **[Queries That Prevent Index Usage](queries-that-prevent-index-usage.md):** The way a query is written can prevent the database from using an available index (e.g., using a function on an indexed column).

## Detection Methods ○

- **Query Execution Plan Analysis:** Use the `EXPLAIN` or `EXPLAIN ANALYZE` command to see how the database is executing a query. Look for "Sequential Scan" or "Table Scan" on large tables, which indicates a missing index.
- **Database Indexing Advisors:** Many database systems have built-in tools or advisors that can analyze query history and suggest new indexes.
- **Monitoring Tools:** Use database monitoring tools to identify queries with high I/O and check if they are using appropriate indexes.
- **Manual Schema Review:** Manually inspect the database schema and compare the indexes with the most frequent and important query patterns in the application code.

## Examples
A user search feature in an application is very slow. The `users` table is indexed on the `id` column, but users are searched by their `email` address. Running `EXPLAIN` on the search query confirms that the database is performing a full table scan on the `users` table. Adding an index on the `email` column resolves the issue. In another case, a query like `SELECT * FROM orders WHERE YEAR(order_date) = 2023;` is slow even though there is an index on `order_date`. The use of the `YEAR()` function prevents the database from using the index directly. The query could be rewritten as `SELECT * FROM orders WHERE order_date >= '2023-01-01' AND order_date < '2024-01-01';` to allow the index to be used. This is a very common problem in legacy applications where new features and query patterns have been added over time without a corresponding review of the database indexing strategy.