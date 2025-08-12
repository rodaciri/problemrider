---
title: "Resource Contention"
description: "The server is overloaded, and the application is competing for limited resources like CPU, memory, or I/O."
category: ['Performance', 'Stability']
related_problems: ['inefficient-code']
layout: problem
---

## Description
Resource contention occurs when multiple processes or threads compete for the same limited resources, such as CPU, memory, or I/O. This competition can lead to performance degradation, as processes are forced to wait for resources to become available. In severe cases, it can lead to deadlocks or other forms of system instability. Understanding and managing resource contention is a key aspect of building scalable and performant systems.

## Indicators ⟡
- The server is slow, even when there are no obvious signs of high CPU usage.
- The server is using a lot of disk I/O, even when there is no heavy database load.
- The server is unresponsive or sluggish.
- You are getting complaints from users about slow performance.

## Symptoms ▲

- **High Resource Utilization:** Monitoring tools show consistently high CPU, memory, or I/O usage on the server.
- **Degraded Performance:** The application becomes slow and unresponsive, even if individual components are optimized.
- **Increased Latency:** Requests take longer to process due to waiting for available resources.
- **Queue Buildup:** Request queues or thread pools become full, leading to rejected requests.
- **Application Crashes:** In severe cases, resource exhaustion can lead to application crashes or instability.

## Root Causes ▼

- **Insufficient Capacity:** The server or infrastructure simply does not have enough resources to handle the current workload.
- **[Inefficient Code](inefficient-code.md):** The application or other processes on the server are not using resources efficiently (e.g., memory leaks, unoptimized loops).
- **Thundering Herd Problem:** Many processes or threads simultaneously try to acquire a limited resource, leading to contention and slowdowns.
- **[Deadlock Conditions](deadlock-conditions.md):** In multi-threaded applications, excessive locking can cause threads to wait for each other, leading to reduced concurrency.
- **External Factors:** Other applications or processes running on the same server are consuming resources.

## Detection Methods ○

- **System Monitoring Tools:** Use tools like `top`, `htop`, `vmstat`, `iostat` (Linux) or Task Manager (Windows) to monitor CPU, memory, and I/O usage.
- **Application Performance Monitoring (APM):** APM tools can often show resource utilization at the application level and help pinpoint which parts of the application are resource-intensive.
- **Load Testing:** Simulate high load to identify resource bottlenecks and contention points.
- **Profiling:** Use profiling tools to identify code sections that are consuming excessive CPU or memory.

## Examples
A web server experiences slow response times during peak hours. Monitoring reveals that the CPU utilization is consistently at 100%. This indicates that the server does not have enough CPU capacity to handle the incoming requests. In another case, a database server is experiencing high I/O wait times. Investigation reveals that multiple applications are performing large, unindexed queries simultaneously, leading to disk contention. This problem is common in systems that are not properly scaled or where resource usage patterns have changed over time. It often requires a combination of capacity planning, code optimization, and infrastructure tuning to resolve.