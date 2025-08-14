---
title: Database Connection Leaks
description: Database connections are opened but not properly closed, leading to connection
  pool exhaustion and application failures.
category:
- Technical
- Database
- Resource Management
related_problems:
- slug: incorrect-max-connection-pool-size
  similarity: 0.789
- slug: misconfigured-connection-pools
  similarity: 0.73
- slug: high-connection-count
  similarity: 0.729
- slug: resource-allocation-failures
  similarity: 0.725
- slug: unreleased-resources
  similarity: 0.694
layout: problem
---

## Description

Database connection leaks occur when applications open database connections but fail to properly close them when they are no longer needed. This leads to the gradual depletion of the connection pool, eventually causing new database operations to fail when no connections are available. Connection leaks are particularly problematic in high-traffic applications and can cause complete service outages that require application restarts to resolve.

## Indicators ⟡

- Application fails to execute database queries with "connection pool exhausted" errors
- Database monitoring shows steadily increasing number of active connections
- Application performance degrades over time as available connections diminish
- Database operations timeout or fail after the application has been running for a period
- Connection pool metrics show high utilization with low throughput

## Symptoms ▲

- **Connection Pool Exhaustion:** All available database connections are consumed and not returned to the pool
- **[Service Timeouts](service-timeouts.md):** Database operations timeout waiting for available connections
- **[Resource Allocation Failures](resource-allocation-failures.md):** New database operations fail due to unavailable connections
- **Application Blocking:** Threads block indefinitely waiting for database connections
- **Cascading Failures:** Database connectivity issues cause failures in dependent application components

## Root Causes ▼

- **Missing Connection Cleanup:** Database connections are opened but not closed in finally blocks or using-statements
- **Exception Handling Gaps:** Exceptions prevent connection cleanup code from executing
- **Connection Pool Configuration:** Incorrect pool configuration such as inadequate maximum pool size or timeout settings
- **[Long-Running Transactions](long-running-transactions.md):** Transactions hold connections for extended periods without committing or rolling back
- **Resource Management Patterns:** Improper use of connection management patterns or frameworks
- **Asynchronous Operation Issues:** Connections acquired in async operations are not properly released in all code paths

## Detection Methods ○

- **Connection Pool Monitoring:** Monitor database connection pool usage, active connections, and pool exhaustion events
- **Database Connection Tracking:** Track database connection lifecycle from creation to closure
- **Application Performance Monitoring:** Monitor database operation response times and failure rates
- **Resource Leak Detection:** Use profiling tools to identify unreleased database connections
- **Load Testing:** Run sustained load tests to identify connection leak patterns
- **Database Server Monitoring:** Monitor active connections at the database server level

## Examples

A web application opens database connections in a try block to execute queries but only closes them in the main execution path, not in the exception handling paths. When database queries fail due to temporary network issues, the connections remain open and are never returned to the pool. After several hours of intermittent database errors, the connection pool is exhausted and the application can no longer serve any requests that require database access. Another example involves a batch processing system that opens database connections inside loops but closes them outside the loop. When the loop processes thousands of records, thousands of connections are opened but only one is closed, quickly exhausting the connection pool and causing the batch process to fail.