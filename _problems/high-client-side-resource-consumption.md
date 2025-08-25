---
title: High Client-Side Resource Consumption
description: Client applications consume excessive CPU or memory, leading to sluggish
  performance and poor user experience.
category:
- Performance
related_problems:
- slug: high-resource-utilization-on-client
  similarity: 0.95
- slug: inefficient-frontend-code
  similarity: 0.8
- slug: high-database-resource-utilization
  similarity: 0.7
- slug: slow-application-performance
  similarity: 0.7
- slug: resource-contention
  similarity: 0.7
- slug: memory-leaks
  similarity: 0.65
layout: problem
---

## Description
High client-side resource consumption can lead to a poor user experience. This can manifest as a sluggish user interface, a high level of battery consumption on mobile devices, or a general feeling of unresponsiveness. Common causes of high resource consumption include inefficient JavaScript, large, unoptimized assets, and excessive DOM manipulation. A focus on client-side performance is essential for creating a fast and responsive user experience.


## Indicators ⟡
- Your application is slow, even on a powerful device.
- Your application is draining the battery on your mobile device.
- Your computer's fan is running at high speed when you use your application.
- You are getting complaints from users about slow performance.


## Symptoms ▲

- [Developer Frustration and Burnout](developer-frustration-and-burnout.md) <span class="info-tooltip" title="Confidence: 0.436, Strength: 0.652">ⓘ</span>
<br/>  Excessive resource consumption in client applications leads to performance bottlenecks that frustrate developers, as they struggle to troubleshoot and optimize a codebase burdened by inefficiencies, ultimately contributing to their disengagement and burnout.
- [Unbounded Data Structures](unbounded-data-structures.md) <span class="info-tooltip" title="Confidence: 0.391, Strength: 0.659">ⓘ</span>
<br/>  The unbounded growth of data structures leads to increased memory usage and CPU cycles as they consume resources without limits, directly contributing to sluggish performance and excessive resource consumption in client applications.
- [Increased Customer Support Load](increased-customer-support-load.md) <span class="info-tooltip" title="Confidence: 0.388, Strength: 0.650">ⓘ</span>
<br/>  Excessive CPU or memory usage in client applications leads to performance degradation, causing users to encounter frequent obstacles that prompt them to seek assistance from support, thereby increasing the support load.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.360, Strength: 0.685">ⓘ</span>
<br/>  Excessive resource consumption often results from the failure to properly deallocate allocated resources, leading to memory leaks and increased CPU usage as the system struggles to manage the growing load of unreleased objects and connections.
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.345, Strength: 0.551">ⓘ</span>
<br/>  Excessive resource consumption on the client side can lead to delayed processing of API requests, causing the services to exceed their timeout thresholds and fail to respond in a timely manner.

## Root Causes ▼

- [Bottleneck Formation](bottleneck-formation.md) <span class="info-tooltip" title="Confidence: 0.379, Strength: 0.912">ⓘ</span>
<br/>  Inefficient resource allocation and processing delays caused by bottlenecks in the development workflow lead to poorly optimized client applications, resulting in excessive CPU and memory consumption during execution.
- [Atomic Operation Overhead](atomic-operation-overhead.md) <span class="info-tooltip" title="Confidence: 0.343, Strength: 0.903">ⓘ</span>
<br/>  The excessive use of atomic operations leads to frequent memory synchronization and increased cache coherency traffic, which in turn depletes CPU and memory resources on client applications, resulting in sluggish performance and a poor user experience.
- [Slow Response Times for Lists](slow-response-times-for-lists.md) <span class="info-tooltip" title="Confidence: 0.330, Strength: 0.929">ⓘ</span>
<br/>  Inefficient data fetching for multiple items increases loading times, causing client applications to consume more CPU and memory as they struggle to render the delayed content, ultimately degrading performance and user experience.
- [Insufficient Design Skills](insufficient-design-skills.md) <span class="info-tooltip" title="Confidence: 0.328, Strength: 0.945">ⓘ</span>
<br/>  The lack of design skills leads to inefficient algorithms and poor resource management in the application, resulting in excessive CPU and memory usage that degrades performance and user experience.
- [Work Queue Buildup](work-queue-buildup.md) <span class="info-tooltip" title="Confidence: 0.325, Strength: 0.908">ⓘ</span>
<br/>  The accumulation of tasks in queues leads to increased processing demands on client applications as they struggle to handle delayed requests, resulting in excessive CPU and memory usage that ultimately degrades performance and user experience.
- [Lazy Loading](lazy-loading.md) <span class="info-tooltip" title="Confidence: 0.309, Strength: 0.890">ⓘ</span>
<br/>  The use of lazy loading in an ORM framework generates excessive database queries that require significant client-side processing and memory allocation, leading to high resource consumption and degraded application performance.
- [Misconfigured Connection Pools](misconfigured-connection-pools.md) <span class="info-tooltip" title="Confidence: 0.306, Strength: 0.857">ⓘ</span>
<br/>  Improperly configured connection pools lead to frequent and unnecessary requests to backend services, resulting in increased CPU and memory usage on client applications as they struggle to manage excessive connections and timeouts, ultimately degrading performance and user experience.
- [High Technical Debt](high-technical-debt.md) <span class="info-tooltip" title="Confidence: 0.306, Strength: 0.856">ⓘ</span>
<br/>  The accumulation of design or implementation shortcuts leads to inefficient code and architecture that require more CPU and memory resources to execute, resulting in sluggish performance in client applications.

## Detection Methods ○

- **Browser Developer Tools:** Use the Performance, Memory, and Network tabs in browser developer tools to profile CPU usage, memory consumption, and network activity.
- **Real User Monitoring (RUM):** RUM tools can collect performance metrics from actual user sessions, including CPU and memory usage.
- **Device-Specific Monitoring:** Use tools provided by operating systems (e.g., Activity Monitor on macOS, Task Manager on Windows, Android Studio Profiler, Xcode Instruments) to monitor resource usage.
- **Code Review:** Look for common anti-patterns like large loops, excessive event listeners, or unoptimized rendering logic.


## Examples
A single-page application (SPA) becomes very slow after a user has been interacting with it for a long time. Profiling reveals a memory leak where old DOM elements are not being garbage collected, leading to continuous memory growth. In another case, a website uses a large, unoptimized background video on its homepage. On mobile devices, this causes the browser to consume a significant amount of CPU and battery, making the phone hot and draining the battery quickly. This problem is increasingly common with the rise of complex web applications and mobile apps that run directly on user devices. Optimizing client-side performance is crucial for delivering a smooth and enjoyable user experience.
