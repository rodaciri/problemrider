---
title: DMA Coherency Issues
description: Direct Memory Access operations conflict with CPU cache coherency, leading
  to data corruption or inconsistent data views between CPU and DMA devices.
category:
- Code
- Data
- Performance
related_problems:
- slug: false-sharing
  similarity: 0.55
layout: problem
---

## Description

DMA coherency issues occur when Direct Memory Access devices and the CPU have different views of the same memory data due to cache coherency problems. DMA devices can read and write memory directly without going through the CPU cache, while the CPU may have cached copies of the same data. This can lead to data corruption, lost updates, or inconsistent system behavior when cached and non-cached views of memory diverge.

## Indicators ⟡

- Data corruption occurs intermittently in DMA-based operations
- System behavior varies based on CPU cache state or timing
- Network or disk I/O operations show data inconsistency
- Performance issues related to excessive cache flushing or invalidation
- Problems appear more frequently under high system load or specific timing conditions

## Symptoms ▲

- **Data Corruption:** DMA operations overwrite cached data or vice versa
- **Inconsistent Data Views:** CPU and DMA device see different values for the same memory locations
- **[Race Conditions](race-conditions.md):** Timing-dependent behavior between CPU and DMA operations
- **[Unpredictable System Behavior](unpredictable-system-behavior.md):** System behavior varies based on cache coherency timing
- **Performance Degradation:** Excessive cache management overhead to maintain coherency

## Root Causes ▼

- **Cache Coherency Protocol Failures:** Hardware or software cache coherency mechanisms fail
- **DMA Buffer Management:** Improper management of DMA buffers and cache coherency
- **Memory Barrier Issues:** Missing or incorrect memory barriers around DMA operations
- **Platform-Specific Issues:** Different platforms handle DMA coherency differently
- **Driver Implementation Problems:** Device drivers don't properly manage cache coherency
- **Shared Memory Access Patterns:** CPU and DMA device access shared memory without coordination

## Detection Methods ○

- **DMA Operation Monitoring:** Monitor DMA transfers and their interaction with CPU cache
- **Data Integrity Verification:** Compare expected vs actual data after DMA operations
- **Cache Coherency Testing:** Test under different cache states and loading conditions
- **Hardware Performance Monitoring:** Use hardware counters to detect coherency issues
- **Memory Access Pattern Analysis:** Analyze patterns of CPU and DMA memory access
- **Platform-Specific Testing:** Test on different hardware platforms with varying coherency models

## Examples

A network card receives packets via DMA into system memory buffers that the CPU has previously cached. The CPU reads packet headers from its cache while the DMA operation overwrites the same memory with new packet data. The CPU processes stale cached header information while the actual packet data in memory is different, leading to incorrect packet processing and network protocol violations. Another example involves a graphics driver that uses DMA to transfer vertex data to a GPU while the CPU simultaneously updates the same vertex buffer. Without proper cache synchronization, the GPU receives partially cached and partially updated vertex data, causing rendering artifacts and corrupted 3D models.