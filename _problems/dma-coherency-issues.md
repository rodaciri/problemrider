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
- [Merge Conflicts](merge-conflicts.md) <span class="info-tooltip" title="Confidence: 0.434, Strength: 0.710">ⓘ</span>
<br/>  Frequent merge conflicts arise from developers needing to repeatedly adjust code affected by data inconsistencies caused by direct memory access operations, indicating underlying issues with how the system manages CPU cache coherency.
- [Poor Caching Strategy](poor-caching-strategy.md) <span class="info-tooltip" title="Confidence: 0.359, Strength: 0.712">ⓘ</span>
<br/>  The reliance on fetching data from the source on every request instead of utilizing cached data indicates a failure to maintain coherent views between the CPU and DMA devices, as the system avoids cache usage to prevent potential data corruption caused by inconsistent states.
- [Data Migration Integrity Issues](data-migration-integrity-issues.md) <span class="info-tooltip" title="Confidence: 0.332, Strength: 0.837">ⓘ</span>
<br/>  Conflicts between Direct Memory Access operations and CPU cache coherency can lead to data inconsistencies, which manifest as integrity issues during migration from legacy systems, as the corrupted data fails to align with expected schemas and formats.
- [Interrupt Overhead](interrupt-overhead.md) <span class="info-tooltip" title="Confidence: 0.300, Strength: 0.740">ⓘ</span>
<br/>  Frequent hardware interrupts occur as a result of the system's attempts to resolve data inconsistencies caused by Direct Memory Access operations, leading to excessive context switching and degraded application performance in legacy systems.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○

- **DMA Operation Monitoring:** Monitor DMA transfers and their interaction with CPU cache
- **Data Integrity Verification:** Compare expected vs actual data after DMA operations
- **Cache Coherency Testing:** Test under different cache states and loading conditions
- **Hardware Performance Monitoring:** Use hardware counters to detect coherency issues
- **Memory Access Pattern Analysis:** Analyze patterns of CPU and DMA memory access
- **Platform-Specific Testing:** Test on different hardware platforms with varying coherency models

## Examples

A network card receives packets via DMA into system memory buffers that the CPU has previously cached. The CPU reads packet headers from its cache while the DMA operation overwrites the same memory with new packet data. The CPU processes stale cached header information while the actual packet data in memory is different, leading to incorrect packet processing and network protocol violations. Another example involves a graphics driver that uses DMA to transfer vertex data to a GPU while the CPU simultaneously updates the same vertex buffer. Without proper cache synchronization, the GPU receives partially cached and partially updated vertex data, causing rendering artifacts and corrupted 3D models.
