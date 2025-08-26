---
title: Long-Running Database Transactions
description: Database transactions remain open for extended periods, holding locks
  and consuming resources, which can block other operations.
category:
- Code
- Performance
related_problems:
- slug: long-running-transactions
  similarity: 0.95
- slug: high-connection-count
  similarity: 0.55
- slug: high-database-resource-utilization
  similarity: 0.55
- slug: slow-database-queries
  similarity: 0.55
- slug: database-connection-leaks
  similarity: 0.55
- slug: resource-contention
  similarity: 0.55
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
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.446, Strength: 0.674">ⓘ</span>
<br/>  Extended database transactions can lead to delays in data availability, prompting frequent requirement changes as stakeholders react to incomplete or outdated information, thereby indicating inefficiencies in the system's responsiveness.
- [Delayed Value Delivery](delayed-value-delivery.md) <span class="info-tooltip" title="Confidence: 0.394, Strength: 0.733">ⓘ</span>
<br/>  Extended open database transactions consume critical resources and create locks that hinder the timely processing of updates and deployments, resulting in delayed delivery of new features and fixes to users.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.340, Strength: 0.641">ⓘ</span>
<br/>  Extended open database transactions lead to unreleased resources as they maintain locks and connections, causing the system to allocate resources without proper deallocation, ultimately indicating inefficient transaction management.
- [Unbounded Data Growth](unbounded-data-growth.md) <span class="info-tooltip" title="Confidence: 0.335, Strength: 0.609">ⓘ</span>
<br/>  Extended database transactions can lead to unbounded data growth as they prevent timely data deletion and archiving processes, resulting in an accumulation of stale data that further exacerbates resource consumption and operational inefficiencies.
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.307, Strength: 0.506">ⓘ</span>
<br/>  Extended open database transactions lead to resource contention and increased latency, causing dependent services to exceed their response time limits and fail to complete successfully.

## Root Causes ▼
- [Deadlock Conditions](deadlock-conditions.md) <span class="info-tooltip" title="Confidence: 0.303, Strength: 0.861">ⓘ</span>
<br/>  Extended database transactions can occur when deadlock conditions lead to processes waiting indefinitely for each other to release locks, thereby prolonging transaction durations and resource consumption.

## Detection Methods ○

- **Database Monitoring Tools:** Use database-specific tools (e.g., `pg_stat_activity` in PostgreSQL, `SHOW PROCESSLIST` in MySQL, `sys.dm_tran_active_transactions` in SQL Server) to identify active transactions, their duration, and what they are waiting on.
- **Transaction Log Monitoring:** Monitor the size and growth rate of the database transaction logs.
- **Application Logging:** Add logging to the application to track the start and end times of database transactions.
- **Alerting:** Set up alerts for transactions that exceed a certain duration.

## Examples
An e-commerce application processes an order. It starts a database transaction, updates the inventory, then calls a third-party payment gateway. If the payment gateway is slow, the database transaction remains open, holding a lock on the inventory table. This blocks other users from placing orders for the same product. In another case, a batch job that imports millions of records into a database wraps the entire import in a single transaction. If the import fails halfway through, the transaction is rolled back, but the rollback itself takes hours, during which time the database is heavily impacted. This problem is particularly critical in high-concurrency systems where even short-lived locks can have a significant impact. It often requires careful design of transaction boundaries and asynchronous processing for long-running tasks.
