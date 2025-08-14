---
title: Memory Swapping
description: The database server runs out of physical memory and starts using disk
  swap space, which dramatically slows down performance.
category:
- Performance
related_problems:
- slug: resource-contention
  similarity: 0.772
- slug: virtual-memory-thrashing
  similarity: 0.656
- slug: high-database-resource-utilization
  similarity: 0.655
- slug: excessive-disk-io
  similarity: 0.605
- slug: slow-database-queries
  similarity: 0.602
layout: problem
---

## Description
Memory swapping is a process where the operating system moves a block of memory (a "page") from RAM to disk to free up RAM for other processes. While this allows the system to continue functioning when it is low on memory, it comes at a significant performance cost, as accessing data from disk is much slower than accessing it from RAM. Frequent memory swapping is a strong indicator that a system does not have enough physical memory for its workload, and it can lead to a dramatic decrease in application performance.

## Indicators ⟡
- The server is slow, even when there are no obvious signs of high CPU usage.
- The server is using a lot of disk I/O, even when there is no heavy database load.
- The server is unresponsive or sluggish.
- You are getting complaints from users about slow performance.

## Symptoms ▲

- **Dramatic Performance Degradation:** Database operations become extremely slow, often by orders of magnitude.
- **High I/O Wait Times:** System monitoring shows a significant amount of time spent waiting for disk I/O, even for operations that should be CPU-bound.
- **Disk Activity Spikes:** The disk activity lights or metrics show constant, heavy usage, even when the database workload is not particularly high.
- **[Upstream Timeouts](upstream-timeouts.md):** Applications connecting to the database start experiencing timeouts due to the extreme slowness.
- **System Unresponsiveness:** The entire server may become unresponsive or very sluggish.

## Root Causes ▼

- **Insufficient RAM:** The server simply does not have enough physical memory to accommodate the database's working set and other processes.
- **[Inefficient Code](inefficient-code.md):** The database software or other applications running on the server have memory leaks, gradually consuming available RAM.
- **Poor Database Configuration:** The database is configured to use more memory than is physically available (e.g., `shared_buffers`, `work_mem` in PostgreSQL, `innodb_buffer_pool_size` in MySQL).
- **[High Connection Count](high-connection-count.md):** A very large number of active database connections, each consuming memory, can exhaust RAM.
- **[Slow Database Queries](slow-database-queries.md):** Complex queries or operations (e.g., large sorts, hash joins) that require significant memory can push the system into swapping.

## Detection Methods ○

- **System Monitoring Tools:** Use `free -h`, `vmstat`, `top`, or `htop` (Linux) to observe `swap` usage and `si`/`so` (swap in/out) rates.
- **Database Monitoring Tools:** Many database-specific monitoring tools will report memory usage and swap activity.
- **Cloud Provider Metrics:** If using a cloud-managed database, check the cloud provider's metrics for swap usage.
- **Alerting:** Set up alerts for high swap usage or high I/O wait times on database servers.

## Examples
A PostgreSQL database server, initially provisioned with 8GB of RAM, starts experiencing severe slowdowns after a year of operation. Investigation reveals that the `shared_buffers` setting was increased to 6GB, and the `work_mem` for many concurrent queries now exceeds the remaining physical memory, forcing the system to swap heavily. In another case, a Java application running on the same server as a MySQL database has a memory leak. Over several days, the Java application consumes more and more RAM, eventually pushing the MySQL database into heavy swapping, leading to application outages. This problem is particularly insidious because it can develop gradually as data volumes grow or application usage increases. It often indicates a fundamental resource bottleneck that needs to be addressed by adding more RAM, optimizing database configuration, or reducing memory consumption.