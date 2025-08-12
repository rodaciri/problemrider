---
title: "Incorrect Index Type"
description: "Using an inappropriate type of database index for a given query pattern, leading to inefficient data retrieval."
category: ['Performance']
related_problems: ['queries-that-prevent-index-usage', 'inefficient-database-indexing', 'slow-database-queries', 'database-query-performance-issues']
layout: problem
---

## Description
Choosing the correct type of index is crucial for database performance. Different types of indexes are optimized for different types of data and queries. For example, a B-tree index is well-suited for range queries, while a hash index is better for equality lookups. Using the wrong type of index can lead to a significant degradation in performance, as the database will not be able to use the index effectively. A deep understanding of the different types of indexes and their use cases is essential for any developer who works with databases.

## Indicators ⟡
- Queries are slow, even though they are using an index.
- The database is not using an index that you expect it to use.
- The database is using a full table scan, even though an index is available.
- The database is using a less efficient index than you expect it to use.

## Symptoms ▲

- **Slow Queries:** Queries that should be fast with an index are still performing poorly.
- **Full Table Scans:** Query execution plans show full table scans or less efficient index scans instead of optimal index usage.
- **High CPU/I/O for Indexed Queries:** The database engine consumes more resources than expected for queries that are supposedly indexed.
- **[Queries That Prevent Index Usage](queries-that-prevent-index-usage.md):** The database optimizer chooses not to use an existing index, or uses it inefficiently.

## Root Causes ▼

- **Misunderstanding of Index Types:** Developers or DBAs are not fully aware of the different types of indexes available (e.g., B-tree, hash, bitmap, full-text) and their optimal use cases.
- **Cardinality Mismatch:** Using an index type that is inefficient for the data's cardinality (e.g., a B-tree index on a column with very few unique values).
- **Workload Mismatch:** The chosen index type is not suitable for the primary workload (e.g., an index optimized for equality lookups used for range queries).
- **Lack of Analysis:** Indexes are created without analyzing the actual query patterns and data distribution.
- **Default Indexing:** Relying on default index types without considering specific performance needs.

## Detection Methods ○

- **Query Execution Plan Analysis:** This is the most crucial method. Use `EXPLAIN` or `EXPLAIN ANALYZE` to see which indexes are being used and how efficiently. Look for `Seq Scan` or `Full Table Scan` where an index should be used, or `Index Scan` that is still very slow.
- **Database Indexing Advisors:** Some database systems provide tools that suggest optimal index types based on query workload.
- **Performance Benchmarking:** Test queries with different index types to compare their performance.
- **Schema Review:** Periodically review the database schema and index definitions in conjunction with application query patterns.

## Examples
A database has a `users` table with a `status` column that can only be 'active' or 'inactive'. An index is created on this `status` column using a standard B-tree index. Queries filtering by `status` are still slow because the B-tree index is inefficient for low-cardinality columns where a full table scan might be faster or a bitmap index would be more appropriate. In another case, a search feature uses `LIKE '%keyword%'` queries on a `product_description` column. A standard B-tree index on this column is ineffective for leading wildcard searches. A full-text index would be the correct type for this use case. Choosing the correct index type is as important as having an index. A poorly chosen index can be worse than no index at all, as it adds overhead to write operations without providing significant query performance benefits. This is a common issue in legacy systems where indexing strategies may not have evolved with changing data access patterns.