---
title: Resource Contention
description: The server is overloaded, and the application is competing for limited
  resources like CPU, memory, or I/O.
category:
- Code
- Performance
related_problems:
- slug: high-client-side-resource-consumption
  similarity: 0.7
- slug: high-database-resource-utilization
  similarity: 0.7
- slug: high-resource-utilization-on-client
  similarity: 0.7
- slug: excessive-disk-io
  similarity: 0.65
- slug: memory-swapping
  similarity: 0.65
- slug: lock-contention
  similarity: 0.65
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

- [Unbounded Data Structures](unbounded-data-structures.md) <span class="info-tooltip" title="Confidence: 0.565, Strength: 0.805">ⓘ</span>
<br/>  Unbounded data structures exacerbate resource contention by continuously consuming memory without release, ultimately leading to increased server load and diminished performance as the application struggles to manage limited resources.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.553, Strength: 0.825">ⓘ</span>
<br/>  In legacy systems, the failure to properly deallocate resources leads to their accumulation, which exacerbates resource contention as the application continually competes for an already limited pool of available resources, ultimately resulting in performance degradation.
- [Developer Frustration and Burnout](developer-frustration-and-burnout.md) <span class="info-tooltip" title="Confidence: 0.407, Strength: 0.609">ⓘ</span>
<br/>  Persistent resource contention leads to slow application performance and frequent disruptions, which frustrate developers as they struggle to meet deadlines and resolve issues, ultimately causing disengagement and burnout.
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.380, Strength: 0.566">ⓘ</span>
<br/>  The server's overloaded state leads to insufficient resources for processing requests, causing delays that result in upstream services exceeding their timeout thresholds and failing to receive timely responses.
- [Reduced Team Productivity](reduced-team-productivity.md) <span class="info-tooltip" title="Confidence: 0.373, Strength: 0.621">ⓘ</span>
<br/>  When the server experiences resource contention due to limited CPU, memory, or I/O capacity, it leads to slower application performance and increased wait times for development tasks, ultimately causing a decline in the overall productivity and effectiveness of the development team.
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.339, Strength: 0.553">ⓘ</span>
<br/>  Constantly changing requirements can lead to increased workload and complexity, exacerbating resource contention as development teams struggle to manage competing priorities and limited capacity, ultimately resulting in delays and inefficiencies.
- [Increased Customer Support Load](increased-customer-support-load.md) <span class="info-tooltip" title="Confidence: 0.312, Strength: 0.545">ⓘ</span>
<br/>  As the server struggles to allocate sufficient resources due to overload, users experience slow performance and task failures, leading to an increase in support inquiries as they seek assistance for issues arising from the system's inefficiency.

## Root Causes ▼

- [Budget Overruns](budget-overruns.md) <span class="info-tooltip" title="Confidence: 0.352, Strength: 0.911">ⓘ</span>
<br/>  Insufficient funding due to escalating project costs limits investment in necessary infrastructure upgrades, leading to an overloaded server as the application struggles to operate effectively within constrained resources.
- [Bottleneck Formation](bottleneck-formation.md) <span class="info-tooltip" title="Confidence: 0.342, Strength: 0.883">ⓘ</span>
<br/>  Inefficient allocation of limited resources occurs when specific components or team members create constraints in the workflow, leading to high demand and competition for those resources, ultimately overloading the server and degrading application performance.
- [Shared Dependencies](shared-dependencies.md) <span class="info-tooltip" title="Confidence: 0.333, Strength: 0.934">ⓘ</span>
<br/>  The competition for limited server resources arises because multiple components rely on the same libraries and frameworks, leading to inefficient resource allocation and increased load due to simultaneous demands on the shared dependencies.
- [Shared Database](shared-database.md) <span class="info-tooltip" title="Confidence: 0.325, Strength: 0.901">ⓘ</span>
<br/>  The competition for limited resources arises because multiple services accessing a single database simultaneously can lead to increased load and contention, resulting in performance degradation and resource bottlenecks in the server.
- [Bikeshedding](bikeshedding.md) <span class="info-tooltip" title="Confidence: 0.320, Strength: 0.853">ⓘ</span>
<br/>  Inefficient use of developer time on trivial code issues leads to insufficient attention on optimizing resource management in legacy systems, ultimately causing server overload and contention for critical resources.
- [Resistance to Change](resistance-to-change.md) <span class="info-tooltip" title="Confidence: 0.319, Strength: 0.808">ⓘ</span>
<br/>  The reluctance to refactor outdated components results in inefficient code and architecture that cannot effectively scale, ultimately leading to increased resource competition on the server as the application struggles to handle demand.
- [Insufficient Design Skills](insufficient-design-skills.md) <span class="info-tooltip" title="Confidence: 0.318, Strength: 0.894">ⓘ</span>
<br/>  The lack of design skills leads to poorly optimized code and inefficient resource management, which increases the load on the server and results in resource contention as the application struggles to operate within constrained system capabilities.
- [Constantly Shifting Deadlines](constantly-shifting-deadlines.md) <span class="info-tooltip" title="Confidence: 0.311, Strength: 0.873">ⓘ</span>
<br/>  The ongoing pressure to accommodate new feature requests within an unrealistic timeline leads to insufficient resource allocation and prioritization, causing the application to compete for limited CPU, memory, and I/O, ultimately resulting in server overload and resource contention.

## Detection Methods ○

- **System Monitoring Tools:** Use tools like `top`, `htop`, `vmstat`, `iostat` (Linux) or Task Manager (Windows) to monitor CPU, memory, and I/O usage.
- **Application Performance Monitoring (APM):** APM tools can often show resource utilization at the application level and help pinpoint which parts of the application are resource-intensive.
- **Load Testing:** Simulate high load to identify resource bottlenecks and contention points.
- **Profiling:** Use profiling tools to identify code sections that are consuming excessive CPU or memory.


## Examples
A web server experiences slow response times during peak hours. Monitoring reveals that the CPU utilization is consistently at 100%. This indicates that the server does not have enough CPU capacity to handle the incoming requests. In another case, a database server is experiencing high I/O wait times. Investigation reveals that multiple applications are performing large, unindexed queries simultaneously, leading to disk contention. This problem is common in systems that are not properly scaled or where resource usage patterns have changed over time. It often requires a combination of capacity planning, code optimization, and infrastructure tuning to resolve.
