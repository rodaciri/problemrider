---
title: High Client-Side Resource Consumption
description: Client applications consume excessive CPU or memory, leading to sluggish
  performance and poor user experience.
category:
- Performance
related_problems:
- slug: high-resource-utilization-on-client
  similarity: 0.976
- slug: inefficient-frontend-code
  similarity: 0.783
- slug: slow-application-performance
  similarity: 0.69
- slug: resource-contention
  similarity: 0.663
- slug: high-api-latency
  similarity: 0.595
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

- **Slow UI Responsiveness:** The user interface feels sluggish, with delays in animations, scrolling, or input processing.
- **Browser/App Freezes or Crashes:** The application becomes unresponsive or crashes, especially on less powerful devices.
- **High Fan Noise/Battery Drain:** Users of laptops or mobile devices notice increased fan activity or rapid battery depletion.
- **Device Overheating:** The user's device becomes noticeably hot to the touch.
- **Reduced Multitasking Capability:** The client application consumes so many resources that other applications on the device slow down or become unusable.

## Root Causes ▼

- **[Inefficient Frontend Code](inefficient-frontend-code.md):** Unoptimized JavaScript, excessive DOM manipulation, or complex CSS animations that are computationally expensive.
- **Large Asset Sizes:** Unoptimized images, videos, or other media files that consume significant memory when loaded.
- **[Memory Leaks](memory-leaks.md):** JavaScript code that continuously allocates memory without releasing it, leading to gradual memory growth.
- **Excessive Network Activity:** Frequent, unoptimized network requests that keep the CPU busy processing data.
- **Unoptimized Third-Party Libraries:** Heavy or inefficient third-party libraries that add significant overhead.
- **Continuous Polling:** The client constantly polls a server for updates instead of using more efficient real-time communication methods.

## Detection Methods ○

- **Browser Developer Tools:** Use the Performance, Memory, and Network tabs in browser developer tools to profile CPU usage, memory consumption, and network activity.
- **Real User Monitoring (RUM):** RUM tools can collect performance metrics from actual user sessions, including CPU and memory usage.
- **Device-Specific Monitoring:** Use tools provided by operating systems (e.g., Activity Monitor on macOS, Task Manager on Windows, Android Studio Profiler, Xcode Instruments) to monitor resource usage.
- **Code Review:** Look for common anti-patterns like large loops, excessive event listeners, or unoptimized rendering logic.

## Examples
A single-page application (SPA) becomes very slow after a user has been interacting with it for a long time. Profiling reveals a memory leak where old DOM elements are not being garbage collected, leading to continuous memory growth. In another case, a website uses a large, unoptimized background video on its homepage. On mobile devices, this causes the browser to consume a significant amount of CPU and battery, making the phone hot and draining the battery quickly. This problem is increasingly common with the rise of complex web applications and mobile apps that run directly on user devices. Optimizing client-side performance is crucial for delivering a smooth and enjoyable user experience.