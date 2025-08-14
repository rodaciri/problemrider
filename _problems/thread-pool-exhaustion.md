---
title: "Thread Pool Exhaustion"
description: "All available threads in the thread pool are consumed by long-running or blocked operations, preventing new tasks from being processed."
category: ['Technical', 'Performance', 'Concurrency']
related_problems: ['deadlock-conditions', 'service-timeouts', 'resource-contention']
layout: problem
---

## Description

Thread pool exhaustion occurs when all available threads in an application's thread pool are consumed by long-running, blocked, or stuck operations, leaving no threads available to process new incoming requests or tasks. This creates a situation where the application appears to hang or become unresponsive, even though the underlying system has available CPU and memory resources. Thread pool exhaustion is common in server applications and can cause complete service outages.

## Indicators ⟡

- Application stops responding to new requests while appearing to run normally
- Thread pool monitoring shows all threads in use with none available for new tasks
- New operations queue up indefinitely without being processed
- CPU usage may be low despite the application appearing busy
- Response times increase dramatically or operations timeout

## Symptoms ▲

- **Application Unresponsiveness:** Server stops processing new requests or tasks
- **[Service Timeouts](service-timeouts.md):** Operations timeout because no threads are available to process them
- **Request Queue Buildup:** Incoming requests accumulate in queues without being processed
- **[Deadlock Conditions](deadlock-conditions.md):** All threads may be blocked waiting for resources held by other threads
- **Cascading System Failures:** Thread exhaustion in one component affects dependent components

## Root Causes ▼

- **Long-Running Operations:** Threads are consumed by operations that take much longer than expected
- **Blocking I/O Operations:** Threads block on synchronous I/O operations without proper timeout handling
- **[Deadlock Conditions](deadlock-conditions.md):** Threads become permanently blocked in circular wait conditions
- **Inadequate Thread Pool Sizing:** Thread pool is configured with too few threads for the expected workload
- **[Resource Contention](resource-contention.md):** Threads block waiting for limited external resources like database connections
- **Infinite Loops or Hangs:** Individual threads become stuck in infinite loops or unresponsive states

## Detection Methods ○

- **Thread Pool Monitoring:** Monitor thread pool utilization, active threads, and queue depths
- **Thread Dump Analysis:** Analyze thread dumps to identify what threads are doing when exhaustion occurs
- **Application Performance Monitoring:** Track response times and throughput to identify thread pool bottlenecks
- **Resource Usage Monitoring:** Monitor CPU, memory, and I/O usage during thread pool exhaustion
- **Load Testing:** Test application under various load conditions to identify thread pool limits
- **Timeout Configuration Analysis:** Review timeout settings for operations that consume thread pool threads

## Examples

A web service processes file uploads by reading the entire file content into memory within the request thread. When users upload very large files, these operations take several minutes to complete, consuming request-handling threads for extended periods. During peak usage, all available request threads become occupied with file upload processing, preventing the server from handling any other HTTP requests including simple health checks. Another example involves an application that makes synchronous calls to external web services without timeout configuration. When the external services become slow or unresponsive, all thread pool threads become blocked waiting for responses that may never come, effectively freezing the entire application until the external services recover or connections timeout at the TCP level.