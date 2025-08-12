---
title: "Long-Running Database Transactions"
description: "Database transactions remain open for extended periods, holding locks and consuming resources, which can block other operations."
category: ['Performance', 'Stability']
related_problems: ['long-running-transactions']
layout: problem
---

## Description
Long-running database transactions are a specific type of long-running transaction that occurs at the database level. These transactions can be particularly problematic, as they can hold locks on database resources for an extended period of time, preventing other queries from executing and potentially leading to deadlocks. They are often caused by inefficient queries, a lack of proper indexing, or application logic that holds transactions open while performing other tasks. Minimizing the duration of database transactions is a key principle of good database design.

## Indicators ⟡
- The database is slow, even when there are no obvious signs of high CPU or memory usage.
- You are seeing a high number of deadlocks in your database logs.
- You are getting complaints from users about slow performance.
- You are seeing a high number of timeout errors in your logs.

## Symptoms ▲

- **Blocked Queries/Operations:** Other database queries or operations are stuck waiting for locks held by the long-running transaction.
- **Increased Database Resource Usage:** The database server shows higher CPU, memory, or I/O usage than normal, even for a seemingly low workload.
- **Transaction Log Growth:** The transaction log (or write-ahead log) grows rapidly, potentially consuming excessive disk space.
- **Application Timeouts:** Applications experience timeouts when trying to access data locked by the long-running transaction.
- **Deadlocks:** In some cases, long-running transactions can contribute to or directly cause deadlocks.

## Root Causes ▼

- **Inefficient Application Logic:** The application performs complex, time-consuming operations (e.g., network calls, heavy computations) within an active database transaction.
- **Missing `COMMIT`/`ROLLBACK`:** Transactions are started but not explicitly committed or rolled back due to application errors or oversight.
- **Large Batch Operations:** Very large data imports, updates, or deletions are performed within a single transaction, taking a long time to complete.
- **User Interaction Within Transaction:** A transaction is opened and then waits for user input, which can take an indefinite amount of time.
- **Network Latency:** High latency between the application and the database can prolong the duration of a transaction.

## Detection Methods ○

- **Database Monitoring Tools:** Use database-specific tools (e.g., `pg_stat_activity` in PostgreSQL, `SHOW PROCESSLIST` in MySQL, `sys.dm_tran_active_transactions` in SQL Server) to identify active transactions, their duration, and what they are waiting on.
- **Transaction Log Monitoring:** Monitor the size and growth rate of the database transaction logs.
- **Application Logging:** Add logging to the application to track the start and end times of database transactions.
- **Alerting:** Set up alerts for transactions that exceed a certain duration.

## Examples
An e-commerce application processes an order. It starts a database transaction, updates the inventory, then calls a third-party payment gateway. If the payment gateway is slow, the database transaction remains open, holding a lock on the inventory table. This blocks other users from placing orders for the same product. In another case, a batch job that imports millions of records into a database wraps the entire import in a single transaction. If the import fails halfway through, the transaction is rolled back, but the rollback itself takes hours, during which time the database is heavily impacted. This problem is particularly critical in high-concurrency systems where even short-lived locks can have a significant impact. It often requires careful design of transaction boundaries and asynchronous processing for long-running tasks.