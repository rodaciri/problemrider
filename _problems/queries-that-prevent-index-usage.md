---
title: "Queries That Prevent Index Usage"
description: "The way a query is written can prevent the database from using an available index, forcing slower full-table scans or less efficient index scans."
category: ['Performance']
related_problems: ['inefficient-database-indexing', 'slow-database-queries', 'database-query-performance-issues']
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

- **Slow Query Execution:** Queries that should be fast due to existing indexes are unexpectedly slow.
- **Full Table Scans in Execution Plans:** `EXPLAIN` or `EXPLAIN ANALYZE` output shows the database performing full table scans (`Sequential Scan` in PostgreSQL, `Full Table Scan` in MySQL) instead of index scans.
- **High CPU Usage for Specific Queries:** The database engine spends more CPU processing data that could have been quickly located via an index.
- **Increased I/O Operations:** More data pages are read from disk than necessary.

## Root Causes ▼

- **Functions on Indexed Columns:** Applying a function to an indexed column in the `WHERE` clause (e.g., `WHERE YEAR(order_date) = 2023`) prevents the index from being used.
- **Implicit Type Conversion:** The database performs an implicit type conversion on an indexed column, making the index unusable (e.g., comparing a string column to a number).
- **Wildcard at the Beginning of `LIKE` Clause:** Using a wildcard at the beginning of a `LIKE` pattern (e.g., `WHERE name LIKE '%smith'`) prevents the use of a standard B-tree index.
- **`OR` Conditions:** Complex `OR` conditions can sometimes prevent index usage, especially if not all parts of the `OR` are indexed or if the optimizer deems a full scan more efficient.
- **Negative Conditions:** Using `NOT`, `!=`, or `NOT IN` can sometimes lead to full table scans if the optimizer estimates that a large portion of the table would match the condition.
- **Data Skew:** If an indexed column has highly skewed data (e.g., a boolean column where 99% of values are `true`), the optimizer might decide that using the index is less efficient than a full scan.
- **Suboptimal Join Conditions:** Incorrect or missing join conditions can lead to inefficient query plans.

## Detection Methods ○

- **Query Execution Plan Analysis:** This is the primary method. Always use `EXPLAIN` or `EXPLAIN ANALYZE` to understand how the database is executing your queries. Look for `Seq Scan` or `Full Table Scan` on large tables where an index is expected.
- **Database Slow Query Logs:** Configure your database to log slow queries and regularly review these logs.
- **Automated Query Performance Tools:** Many APM tools or database monitoring solutions can identify inefficient queries and suggest improvements.
- **Code Review:** Developers should be aware of common patterns that prevent index usage during code reviews.

## Examples
A user search feature queries a `users` table with `WHERE LOWER(email) = 'john.doe@example.com'`. Even though `email` is indexed, the `LOWER()` function prevents the index from being used, leading to a full table scan. Rewriting it as `WHERE email ILIKE 'john.doe@example.com'` (if case-insensitive search is needed and supported by the database) or ensuring the application handles case sensitivity before the query can fix this. In another case, a report query uses `WHERE product_code LIKE '%ABC%'`. An index on `product_code` exists, but the leading wildcard prevents its use. If the search pattern is always a suffix, a reverse index could be used, or the query rewritten if possible. This problem highlights the importance of understanding how database optimizers work and writing queries that allow them to leverage existing indexes effectively. It's a common source of performance bottlenecks, especially in applications with complex reporting or search functionalities.