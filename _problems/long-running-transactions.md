---
title: Long-Running Transactions
description: Database transactions that remain open for a long time can hold locks,
  consume resources, and block other operations.
category:
- Code
- Data
- Performance
related_problems:
- slug: long-running-database-transactions
  similarity: 0.95
- slug: database-connection-leaks
  similarity: 0.6
- slug: high-database-resource-utilization
  similarity: 0.6
- slug: high-connection-count
  similarity: 0.6
- slug: unreleased-resources
  similarity: 0.55
- slug: slow-database-queries
  similarity: 0.55
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

- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.674, Strength: 0.880">ⓘ</span>
<br/>  Long-running transactions can cause prolonged database locks that delay responses to API requests, leading to upstream services timing out when they do not receive timely feedback.
- [Unbounded Data Growth](unbounded-data-growth.md) <span class="info-tooltip" title="Confidence: 0.629, Strength: 0.884">ⓘ</span>
<br/>  Long-running transactions can prevent timely data deletion or archiving, leading to unbounded growth of data structures as they remain locked and unable to release resources for necessary cleanup operations.
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.627, Strength: 0.852">ⓘ</span>
<br/>  Long-running transactions can lead to an accumulation of unprocessed changes and dependencies in the system, causing stakeholders to frequently modify requirements as they encounter delays and uncertainty about the state of the project, thus indicating a need for more efficient transaction management.
- [Unbounded Data Structures](unbounded-data-structures.md) <span class="info-tooltip" title="Confidence: 0.627, Strength: 0.927">ⓘ</span>
<br/>  Long-running transactions can prevent timely data cleanup, allowing unbounded data structures to accumulate unchecked, which leads to memory exhaustion and increased performance degradation in legacy systems.
- [Data Migration Integrity Issues](data-migration-integrity-issues.md) <span class="info-tooltip" title="Confidence: 0.574, Strength: 0.867">ⓘ</span>
<br/>  Long-running transactions can prevent timely data updates and schema changes, leading to integrity issues during migration as outdated or incomplete data is transferred, reflecting inconsistencies between legacy and modern system structures.
- [Delayed Value Delivery](delayed-value-delivery.md) <span class="info-tooltip" title="Confidence: 0.569, Strength: 0.891">ⓘ</span>
<br/>  Extended database transactions can lead to resource contention and locking issues, which in turn slow down development and deployment processes, ultimately causing users to experience delays in receiving new features or bug fixes.
- [Poor Caching Strategy](poor-caching-strategy.md) <span class="info-tooltip" title="Confidence: 0.554, Strength: 0.850">ⓘ</span>
<br/>  Long-running transactions can lead to excessive resource consumption and locking, causing the system to bypass caching mechanisms and repeatedly fetch data from the source, thereby exacerbating latency issues.
- [Flaky Tests](flaky-tests.md) <span class="info-tooltip" title="Confidence: 0.546, Strength: 0.877">ⓘ</span>
<br/>  Long-running transactions can lead to resource contention and timing issues in legacy systems, causing tests to fail intermittently as they struggle to access locked resources or complete within expected timeframes.
- [Slow Development Velocity](slow-development-velocity.md) <span class="info-tooltip" title="Confidence: 0.544, Strength: 0.883">ⓘ</span>
<br/>  Long-running transactions can lead to resource contention and locking issues that impede concurrent operations, causing delays in feature delivery and bug fixes, which ultimately manifests as a decline in overall development productivity.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.542, Strength: 0.849">ⓘ</span>
<br/>  Long-running transactions can lead to unreleased resources because as these transactions hold locks and consume system resources, they prevent timely deallocation or closure of objects and connections, resulting in resource leaks that compound the performance issues within legacy systems.
- [Cache Invalidation Problems](cache-invalidation-problems.md) <span class="info-tooltip" title="Confidence: 0.500, Strength: 0.890">ⓘ</span>
<br/>  Long-running transactions can prevent timely updates to the underlying data, causing cached data to become outdated and leading to inconsistencies in application behavior, which serves as an indicator of resource contention and potential data integrity issues.
- [Interrupt Overhead](interrupt-overhead.md) <span class="info-tooltip" title="Confidence: 0.441, Strength: 0.903">ⓘ</span>
<br/>  Long-running transactions can lead to increased resource consumption and contention, causing the system to generate excessive hardware interrupts as it attempts to manage CPU resources and context switches, which in turn degrades overall application performance.
- [Delayed Bug Fixes](delayed-bug-fixes.md) <span class="info-tooltip" title="Confidence: 0.431, Strength: 0.851">ⓘ</span>
<br/>  Extended open transactions can lead to resource contention and reduced system responsiveness, which in turn hampers the ability to address and resolve known issues promptly, creating a backlog of unresolved bugs that frustrate users.
- [Incorrect Max Connection Pool Size](incorrect-max-connection-pool-size.md) <span class="info-tooltip" title="Confidence: 0.411, Strength: 0.899">ⓘ</span>
<br/>  Long-running transactions can exhaust the available connections in the pool as they hold onto resources longer than necessary, causing subsequent requests to fail or hang, which indicates that the connection pool size is improperly configured to handle the transaction load.
- [Cross-System Data Synchronization Problems](cross-system-data-synchronization-problems.md) <span class="info-tooltip" title="Confidence: 0.407, Strength: 0.836">ⓘ</span>
<br/>  Long-running transactions can lead to data inconsistencies during synchronization between legacy and modern systems, as the prolonged lock on database resources can prevent timely updates and result in stale or conflicting data being propagated.
- [Rate Limiting Issues](rate-limiting-issues.md) <span class="info-tooltip" title="Confidence: 0.405, Strength: 0.866">ⓘ</span>
<br/>  Long-running transactions can lead to resource contention and delays, which in turn can trigger misconfigured rate limiting mechanisms to erroneously block legitimate requests as they struggle to process within the constrained time frame.
- [Vendor Dependency Entrapment](vendor-dependency-entrapment.md) <span class="info-tooltip" title="Confidence: 0.397, Strength: 0.864">ⓘ</span>
<br/>  Extended database transactions often lead to resource contention and operational bottlenecks, which can push organizations to rely on outdated vendor solutions that are no longer supported, thus entrenching them in expensive custom contracts or necessitating complete system overhauls.
- [Stagnant Architecture](stagnant-architecture.md) <span class="info-tooltip" title="Confidence: 0.397, Strength: 0.827">ⓘ</span>
<br/>  Long-running transactions often arise from outdated system architecture that fails to accommodate optimizations or updates, leading to inefficiencies that are perpetuated by a reluctance to refactor and adapt to evolving business requirements.
- [Team Coordination Issues](team-coordination-issues.md) <span class="info-tooltip" title="Confidence: 0.387, Strength: 0.876">ⓘ</span>
<br/>  Extended database transactions can lead to resource contention and lock conflicts, causing delays and frustrations that hinder collaboration among developers working on interdependent components of the legacy codebase.
- [Index Fragmentation](index-fragmentation.md) <span class="info-tooltip" title="Confidence: 0.378, Strength: 0.899">ⓘ</span>
<br/>  Extended transaction durations can lead to a backlog of uncommitted changes, resulting in frequent insertions, updates, and deletions that fragment indexes, thereby signaling inefficiencies in the database's performance.
- [Poor Operational Concept](poor-operational-concept.md) <span class="info-tooltip" title="Confidence: 0.369, Strength: 0.884">ⓘ</span>
<br/>  Ineffective planning for monitoring and support can result in prolonged transaction durations, as insufficient oversight fails to identify and address resource contention issues, thereby allowing transactions to remain open longer than necessary and causing operational instability.
- [Memory Leaks](memory-leaks.md) <span class="info-tooltip" title="Confidence: 0.368, Strength: 0.896">ⓘ</span>
<br/>  Long-running transactions can lead to memory leaks as they prevent the timely release of resources, causing applications to retain unnecessary memory allocations that accumulate over time, resulting in performance degradation and instability.
- [Maintenance Paralysis](maintenance-paralysis.md) <span class="info-tooltip" title="Confidence: 0.362, Strength: 0.880">ⓘ</span>
<br/>  Long-running transactions create a resource bottleneck that leads to a lack of confidence in making changes, as teams cannot test or validate improvements without risking disruptions to ongoing operations.
- [Network Latency](network-latency.md) <span class="info-tooltip" title="Confidence: 0.349, Strength: 0.886">ⓘ</span>
<br/>  Extended open transactions can lead to increased contention for database resources, causing delays in data processing that manifest as network latency, which in turn exacerbates application performance issues in legacy systems.
- [Delayed Issue Resolution](delayed-issue-resolution.md) <span class="info-tooltip" title="Confidence: 0.348, Strength: 0.867">ⓘ</span>
<br/>  Long-running transactions lead to resource contention and blocked processes, creating a backlog of unresolved issues that exacerbate technical debt and frustrate users due to a lack of timely fixes.
- [Inefficient Code](inefficient-code.md) <span class="info-tooltip" title="Confidence: 0.342, Strength: 0.897">ⓘ</span>
<br/>  Inefficient code can lead to long-running transactions by causing excessive processing time before transaction completion, thus holding database locks longer and blocking other operations.
- [Incorrect Index Type](incorrect-index-type.md) <span class="info-tooltip" title="Confidence: 0.323, Strength: 0.886">ⓘ</span>
<br/>  Inefficient data retrieval caused by an inappropriate index type can lead to prolonged query execution times, resulting in long-running transactions that hold locks and hinder resource availability for other operations.
- [Feature Creep](feature-creep.md) <span class="info-tooltip" title="Confidence: 0.320, Strength: 0.913">ⓘ</span>
<br/>  Long-running transactions can lead to extended development cycles and increased complexity as new features are added to work around or mitigate the impact of resource contention, thus indicating a system that is becoming increasingly bloated and harder to maintain.
- [Memory Fragmentation](memory-fragmentation.md) <span class="info-tooltip" title="Confidence: 0.313, Strength: 0.893">ⓘ</span>
<br/>  Long-running transactions can lead to prolonged resource allocation and a lack of timely memory release, causing available memory to become fragmented as smaller blocks are left behind, which hinders the system's ability to allocate larger contiguous memory segments.
- [Quality Degradation](quality-degradation.md) <span class="info-tooltip" title="Confidence: 0.313, Strength: 0.891">ⓘ</span>
<br/>  Extended transactions can lead to resource contention and delayed processing, which in turn creates a backlog of unresolved issues and technical debt, ultimately resulting in diminished system performance and quality over time.
- [Maintenance Overhead](maintenance-overhead.md) <span class="info-tooltip" title="Confidence: 0.309, Strength: 0.866">ⓘ</span>
<br/>  Long-running transactions often lead to increased complexity in the system, resulting in duplicated code and a lack of reusable components as developers implement workarounds to handle blocking issues, thus driving up maintenance overhead.
- [Excessive Object Allocation](excessive-object-allocation.md) <span class="info-tooltip" title="Confidence: 0.307, Strength: 0.891">ⓘ</span>
<br/>  Long-running transactions can lead to excessive object allocation as the prolonged holding of database locks prevents timely resource release, causing the application to continually create temporary objects that the garbage collector must then manage, ultimately degrading overall system performance.
- [Inefficient Database Indexing](inefficient-database-indexing.md) <span class="info-tooltip" title="Confidence: 0.304, Strength: 0.878">ⓘ</span>
<br/>  Long-running transactions can exacerbate the impact of inefficient database indexing by prolonging the duration of locks held on data, which in turn forces subsequent queries to wait longer for access, revealing the underlying issue of poor indexing that leads to slower data retrieval.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○

- **Database Monitoring Tools:** Use database-specific commands (e.g., `pg_stat_activity` in PostgreSQL, `SHOW PROCESSLIST` in MySQL) to identify active transactions and their duration.
- **Transaction Log Monitoring:** Monitor the size and growth rate of transaction logs.
- **Lock Monitoring:** Use database tools to identify currently held locks and which transactions are holding them.
- **Application Logging:** Add logging to the application to track the start and end times of transactions.


## Examples
An e-commerce application has a checkout process that starts a database transaction at the beginning of the process. If the user abandons the checkout halfway through, the transaction remains open until the session times out, holding locks on inventory tables and preventing other users from purchasing those items. In another case, a nightly batch job for data synchronization wraps its entire operation in a single transaction. If the job processes millions of records, this single transaction can run for hours, consuming significant resources and potentially blocking other database operations. This problem is often a result of insufficient understanding of database transaction semantics or poor application design. It can lead to severe performance bottlenecks and data consistency issues, especially in high-concurrency environments.
