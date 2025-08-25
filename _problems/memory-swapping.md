---
title: Memory Swapping
description: The database server runs out of physical memory and starts using disk
  swap space, which dramatically slows down performance.
category:
- Performance
related_problems:
- slug: virtual-memory-thrashing
  similarity: 0.7
- slug: excessive-disk-io
  similarity: 0.7
- slug: high-database-resource-utilization
  similarity: 0.65
- slug: resource-contention
  similarity: 0.65
- slug: slow-application-performance
  similarity: 0.6
- slug: database-query-performance-issues
  similarity: 0.6
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

- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.536, Strength: 0.749">ⓘ</span>
<br/>  When the database server resorts to disk swap space due to insufficient physical memory, the increased latency in data retrieval can lead to upstream services timing out, as they cannot receive timely responses during peak load conditions.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.509, Strength: 0.782">ⓘ</span>
<br/>  The failure to properly deallocate system resources leads to increased memory consumption, which exacerbates the server's physical memory limitations and triggers a reliance on disk swap space, resulting in significantly degraded performance.
- [Inefficient Development Environment](inefficient-development-environment.md) <span class="info-tooltip" title="Confidence: 0.481, Strength: 0.735">ⓘ</span>
<br/>  The slow and cumbersome development environment is a symptom of memory swapping, as the decreased server performance due to excessive disk usage leads to longer build and test cycles, directly impacting developer productivity and efficiency.
- [Negative User Feedback](negative-user-feedback.md) <span class="info-tooltip" title="Confidence: 0.440, Strength: 0.868">ⓘ</span>
<br/>  When the database server exhausts its physical memory and resorts to disk swapping, the resulting significant decrease in performance manifests as slow loading times and application freezes, leading users to express dissatisfaction with the system's usability.
- [Interrupt Overhead](interrupt-overhead.md) <span class="info-tooltip" title="Confidence: 0.419, Strength: 0.890">ⓘ</span>
<br/>  When the database server resorts to disk swap space due to insufficient physical memory, it increases the frequency of hardware interrupts as the system struggles to manage memory access, leading to excessive context switching that further degrades application performance.
- [Poor Caching Strategy](poor-caching-strategy.md) <span class="info-tooltip" title="Confidence: 0.412, Strength: 0.722">ⓘ</span>
<br/>  Inefficient data retrieval from the source on every request increases memory pressure, exacerbating the reliance on disk swap space and highlighting the system's inadequate caching strategy as a key factor in performance degradation.
- [Unbounded Data Growth](unbounded-data-growth.md) <span class="info-tooltip" title="Confidence: 0.353, Strength: 0.763">ⓘ</span>
<br/>  The continuous accumulation of data without effective management leads to excessive memory consumption, ultimately forcing the system to rely on slower disk swap space, which manifests as degraded performance.
- [Inefficient Code](inefficient-code.md) <span class="info-tooltip" title="Confidence: 0.328, Strength: 0.790">ⓘ</span>
<br/>  Inefficient code exacerbates memory swapping by consuming excessive CPU resources and memory, leading to increased disk I/O as the server relies on swap space, which further degrades performance in legacy systems.
- [Queries That Prevent Index Usage](queries-that-prevent-index-usage.md) <span class="info-tooltip" title="Confidence: 0.327, Strength: 0.800">ⓘ</span>
<br/>  Inefficient query design that prevents index usage increases the workload on the database server, exacerbating the memory consumption and leading to reliance on disk swapping, which in turn severely degrades overall performance.
- [Inefficient Database Indexing](inefficient-database-indexing.md) <span class="info-tooltip" title="Confidence: 0.316, Strength: 0.829">ⓘ</span>
<br/>  The lack of appropriate indexes leads to inefficient query execution, which increases CPU and memory usage, exacerbating memory constraints and resulting in the reliance on disk swap space, thereby significantly degrading performance.
- [Memory Barrier Inefficiency](memory-barrier-inefficiency.md) <span class="info-tooltip" title="Confidence: 0.313, Strength: 0.868">ⓘ</span>
<br/>  When a database server resorts to disk swap space due to insufficient physical memory, it can lead to inefficient memory barriers that hinder CPU pipeline optimization, thereby indicating performance degradation in multi-threaded applications.
- [Memory Leaks](memory-leaks.md) <span class="info-tooltip" title="Confidence: 0.301, Strength: 0.826">ⓘ</span>
<br/>  When applications fail to release unused memory, it leads to increased memory consumption, which ultimately forces the database server to rely on disk swap space, resulting in significant performance degradation.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○

- **System Monitoring Tools:** Use `free -h`, `vmstat`, `top`, or `htop` (Linux) to observe `swap` usage and `si`/`so` (swap in/out) rates.
- **Database Monitoring Tools:** Many database-specific monitoring tools will report memory usage and swap activity.
- **Cloud Provider Metrics:** If using a cloud-managed database, check the cloud provider's metrics for swap usage.
- **Alerting:** Set up alerts for high swap usage or high I/O wait times on database servers.


## Examples
A PostgreSQL database server, initially provisioned with 8GB of RAM, starts experiencing severe slowdowns after a year of operation. Investigation reveals that the `shared_buffers` setting was increased to 6GB, and the `work_mem` for many concurrent queries now exceeds the remaining physical memory, forcing the system to swap heavily. In another case, a Java application running on the same server as a MySQL database has a memory leak. Over several days, the Java application consumes more and more RAM, eventually pushing the MySQL database into heavy swapping, leading to application outages. This problem is particularly insidious because it can develop gradually as data volumes grow or application usage increases. It often indicates a fundamental resource bottleneck that needs to be addressed by adding more RAM, optimizing database configuration, or reducing memory consumption.
