---
title: High Resource Utilization on Client
description: Client applications may consume excessive CPU or memory, leading to a
  poor user experience, especially on less powerful devices.
category:
- Performance
- User Experience
related_problems:
- slug: high-client-side-resource-consumption
  similarity: 0.987
- slug: inefficient-frontend-code
  similarity: 0.753
- slug: slow-application-performance
  similarity: 0.646
- slug: resource-contention
  similarity: 0.614
- slug: excessive-disk-io
  similarity: 0.574
layout: problem
---

## Description
High resource utilization on the client-side can lead to a poor user experience. This can manifest as a sluggish user interface, a high level of battery consumption on mobile devices, or a general feeling of unresponsiveness. Common causes of high resource utilization include inefficient JavaScript, large, unoptimized assets, and excessive DOM manipulation. A focus on client-side performance is essential for creating a fast and responsive user experience.

## Indicators ⟡
- Your application is slow, even on a powerful device.
- Your application is draining the battery on your mobile device.
- Your computer's fan is running at high speed when you use your application.
- You are getting complaints from users about slow performance.

## Symptoms ▲

- **Slow Application Performance:** The client application feels sluggish, unresponsive, or freezes.
- **Device Overheating:** Mobile devices or laptops may become unusually warm.
- **Battery Drain:** Mobile devices experience significantly reduced battery life.
- **Fan Noise:** Computers' fans spin up frequently and loudly.
- **Browser/OS Warnings:** The operating system or browser may warn the user that a script or application is consuming too many resources.
- **Crashes/Freezes:** The client application or even the entire device may crash or freeze.

## Root Causes ▼

- **[Inefficient Code](inefficient-code.md):** Unoptimized JavaScript, excessive DOM manipulation, or complex CSS animations.
- **Large Asset Sizes:** Unoptimized images, videos, or other media files that consume significant memory and processing power to render.
- **[Memory Leaks](memory-leaks.md):** The client-side application fails to release memory, leading to gradual memory consumption.
- **Excessive Network Activity:** Frequent, unoptimized API calls or data polling that keeps the CPU busy.
- **Blocking Operations:** Long-running synchronous operations that block the main thread, making the UI unresponsive.
- **Third-Party Library Overhead:** Over-reliance on large or inefficient third-party libraries.

## Detection Methods ○

- **Browser Developer Tools:** Use the Performance, Memory, and Network tabs in browser developer tools to profile client-side activity.
- **Real User Monitoring (RUM):** RUM tools can collect client-side performance metrics from actual users.
- **Device Monitoring Tools:** Use OS-level tools (e.g., Activity Monitor on macOS, Task Manager on Windows, Android Studio Profiler) to monitor CPU and memory usage of the client application.
- **User Feedback:** Pay attention to user complaints about performance, battery life, or device overheating.

## Examples
A complex web application with many interactive elements becomes very slow and causes the user's laptop fan to spin up. Profiling with browser developer tools reveals that a JavaScript function is constantly re-rendering a large part of the DOM in an inefficient loop. In another case, a mobile game has unoptimized textures and models. When played on an older phone, the game frequently lags and causes the device to become very hot, draining the battery quickly. This problem is increasingly common as applications become more feature-rich and run on a wider variety of devices. Optimizing client-side performance is crucial for a good user experience, especially on mobile and lower-end hardware.