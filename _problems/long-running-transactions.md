---
title: Long-Running Transactions
description: Database transactions that remain open for a long time can hold locks,
  consume resources, and block other operations.
category:
- Technical
- Performance
- Database
- Stability
related_problems:
- slug: long-running-database-transactions
  similarity: 95%
- slug: slow-database-queries
  similarity: 70%
- slug: high-database-resource-utilization
  similarity: 65%
- slug: resource-contention
  similarity: 65%
- slug: high-connection-count
  similarity: 65%
layout: problem
---

## Description
Long-running transactions are database transactions that remain open for an extended period of time. This can be caused by a variety of factors, from inefficient queries and a lack of proper indexing to application logic that holds transactions open while performing other tasks. Long-running transactions can cause a number of problems, including holding locks on database resources, preventing other queries from executing, and increasing the risk of deadlocks. They are a common source of performance and stability issues in database-driven applications.

## Indicators ⟡
- The database is slow, even when there are no obvious signs of high CPU or memory usage.
- You are seeing a high number of deadlocks in your database logs.
- You are getting complaints from users about slow performance.
- You are seeing a high number of timeout errors in your logs.

## Symptoms ▲

- **Blocked Queries:** Other queries or transactions are stuck waiting for locks held by the long-running transaction.
- **[High Database Resource Utilization](high-database-resource-utilization.md):** The database server shows high CPU, memory, or I/O usage due to the prolonged activity.
- **Transaction Log Growth:** The transaction log (WAL in PostgreSQL, redo log in MySQL) grows rapidly, potentially filling up disk space.
- **Deadlocks:** Increased likelihood of deadlocks occurring as transactions contend for resources.
- **Stale Data for Readers:** In some isolation levels, readers might see stale data if a long-running write transaction is holding locks.
- **Application Unresponsiveness:** The application appears to hang or is very slow when trying to perform operations that are blocked by the long transaction.

## Root Causes ▼

- **[Inefficient Code](inefficient-code.md):** The application code performs too many operations within a single transaction, or includes external calls that introduce delays.
- **Missing Commits/Rollbacks:** Transactions are started but not explicitly committed or rolled back, leaving them open indefinitely.
- **User Interaction within Transaction:** A transaction is left open while waiting for user input, which can take a long time.
- **Large Data Operations:** Batch jobs or data migrations that process a huge amount of data within a single transaction.
- **[Network Latency](network-latency.md):** Delays in network communication between the application and the database can prolong transaction duration.
- **Database Configuration:** Suboptimal database settings related to transaction timeouts or auto-commit behavior.

## Detection Methods ○

- **Database Monitoring Tools:** Use database-specific commands (e.g., `pg_stat_activity` in PostgreSQL, `SHOW PROCESSLIST` in MySQL) to identify active transactions and their duration.
- **Transaction Log Monitoring:** Monitor the size and growth rate of transaction logs.
- **Lock Monitoring:** Use database tools to identify currently held locks and which transactions are holding them.
- **Application Logging:** Add logging to the application to track the start and end times of transactions.

## Examples
An e-commerce application has a checkout process that starts a database transaction at the beginning of the process. If the user abandons the checkout halfway through, the transaction remains open until the session times out, holding locks on inventory tables and preventing other users from purchasing those items. In another case, a nightly batch job for data synchronization wraps its entire operation in a single transaction. If the job processes millions of records, this single transaction can run for hours, consuming significant resources and potentially blocking other database operations. This problem is often a result of insufficient understanding of database transaction semantics or poor application design. It can lead to severe performance bottlenecks and data consistency issues, especially in high-concurrency environments.