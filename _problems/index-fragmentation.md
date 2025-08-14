---
title: Index Fragmentation
description: Over time, as data is inserted, updated, and deleted, database indexes
  become disorganized, reducing their efficiency.
category:
- Performance
- Database
related_problems:
- slug: unused-indexes
  similarity: 0.7
- slug: incorrect-index-type
  similarity: 0.7
- slug: inefficient-database-indexing
  similarity: 0.7
- slug: database-query-performance-issues
  similarity: 0.6
- slug: high-number-of-database-queries
  similarity: 0.6
layout: problem
---

## Description
Index fragmentation is a problem that occurs in database indexes over time as data is inserted, updated, and deleted. This can lead to a degradation in performance, as the database has to do more work to read the index. There are two types of fragmentation: internal fragmentation, where there is wasted space within the index pages, and external fragmentation, where the logical order of the index pages does not match the physical order on disk. Regularly rebuilding or reorganizing indexes can help to reduce fragmentation and improve performance.

## Indicators ⟡
- Queries that used to be fast are now slow.
- The database is using more disk space than you expect.
- The database is performing a lot of I/O operations.
- The database is using a lot of CPU.

## Symptoms ▲

- **Degraded Query Performance:** Queries that previously performed well become slower, especially those involving range scans or large data sets.
- **[Excessive Disk I/O](excessive-disk-io.md):** The database has to read more data pages from disk to retrieve the required information, even for indexed lookups.
- **Larger Index Size:** Fragmented indexes consume more disk space than necessary.
- **Slower Index Scans:** The database engine spends more time navigating the scattered index pages.
- **Reduced Cache Efficiency:** More index pages need to be loaded into memory, potentially pushing out more useful data.

## Root Causes ▼

- **Frequent Data Modifications:** High rates of `INSERT`, `UPDATE`, and `DELETE` operations on indexed columns.
- **Random Inserts:** Inserting data in a non-sequential order (e.g., using GUIDs as primary keys) can lead to page splits and fragmentation.
- **Variable-Length Data Types:** Updates to variable-length columns that cause the row size to increase can lead to row migration and fragmentation.
- **Page Splits:** When a data page or index page becomes full and new data needs to be inserted, the database splits the page, which can lead to logical and physical fragmentation.
- **Lack of Maintenance:** Infrequent or absent index rebuilds or reorganizations.

## Detection Methods ○

- **Database Management System (DBMS) Tools:** Most DBMS provide tools or views to check index fragmentation levels (e.g., `sys.dm_db_index_physical_stats` in SQL Server, `pg_stat_user_tables` and `pg_stat_user_indexes` in PostgreSQL, `ANALYZE TABLE` in MySQL).
- **Performance Monitoring:** Monitor disk I/O, query execution times, and cache hit ratios for signs of degradation.
- **Regular Audits:** Periodically review index health and performance metrics.

## Examples
An online forum's `posts` table uses a clustered index on `post_id` (an auto-incrementing integer). However, users can edit their posts, and these updates cause the data rows to expand. Over time, the index becomes fragmented, leading to slower retrieval of posts, especially when browsing older threads. In another case, a financial application frequently inserts new transactions with a `transaction_id` that is a UUID. Because UUIDs are not sequential, new inserts cause random page splits in the primary key index, leading to high fragmentation and degraded insert performance over time. Index fragmentation is a common issue in databases with high write workloads. While modern database systems are better at managing fragmentation, regular maintenance (rebuilding or reorganizing indexes) is often necessary to maintain optimal performance.