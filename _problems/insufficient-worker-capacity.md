---
title: Insufficient Worker Capacity
description: There are not enough worker processes or threads to handle the incoming
  volume of tasks in an asynchronous system, leading to growing queues.
category:
- Performance
- Stability
related_problems:
- slug: growing-task-queues
  similarity: 0.819
- slug: task-queues-backing-up
  similarity: 0.773
- slug: capacity-mismatch
  similarity: 0.608
- slug: work-queue-buildup
  similarity: 0.585
- slug: thread-pool-exhaustion
  similarity: 0.58
layout: problem
---

## Description
Insufficient worker capacity is a common problem in systems that use a worker model for asynchronous processing. When there are not enough workers to handle the volume of tasks being produced, the task queue will back up, leading to delays in processing and a potential for data loss. This can be caused by a variety of factors, from a sudden spike in traffic to a gradual increase in the workload over time. Properly sizing the worker pool is essential for ensuring the stability and performance of the system.

## Indicators ⟡
- The number of messages in your queue is growing.
- The time it takes to process a message is increasing.
- Your workers are constantly running at high CPU or memory usage.
- You are getting alerts from your monitoring system about the queue size.

## Symptoms ▲

- **[Growing Task Queues](growing-task-queues.md):** The number of pending messages or tasks in a queue continuously increases.
- **Delayed Processing:** Tasks take an unusually long time to be processed, leading to missed deadlines for asynchronous operations.
- **Resource Exhaustion on Existing Workers:** Current worker processes may show high CPU or memory usage, indicating they are working at their limit but still can't keep up.
- **Application Unresponsiveness:** Features that rely on the asynchronous processing become slow or appear broken to the user.
- **Alerts for Queue Backlog:** Monitoring systems trigger alerts when queue sizes exceed predefined thresholds.

## Root Causes ▼

- **Under-provisioned Infrastructure:** The number of worker instances, CPU cores, or memory allocated to workers is too low for the expected workload.
- **[Inefficient Code](inefficient-code.md):** The code executed by individual workers is slow or resource-intensive, meaning each worker can process fewer tasks per unit of time.
- **[External Service Delays](external-service-delays.md):** Workers are blocked waiting for slow responses from external services or databases, reducing their effective processing rate.
- **Spiky Workload:** The system is designed for average load but cannot handle sudden, large bursts of incoming tasks.
- **Configuration Limits:** Software configuration (e.g., thread pool size, maximum concurrent jobs) limits the number of tasks that can be processed simultaneously.
- **Dead Letters/Poison Messages:** Malformed messages cause workers to crash or get stuck, reducing the effective worker count.

## Detection Methods ○

- **Queue Monitoring:** Track queue size, message rates, and consumer lag using the message queue system's monitoring tools.
- **Worker Resource Monitoring:** Monitor CPU, memory, and network I/O of worker instances. Look for consistently high utilization.
- **Application Performance Monitoring (APM):** Trace individual task processing times to identify where delays are occurring within the worker logic.
- **Load Testing:** Simulate peak load conditions to identify the point at which worker capacity becomes a bottleneck.
- **Log Analysis:** Look for logs indicating worker failures, retries, or tasks taking an unusually long time.

## Examples
An image processing service uses a queue for incoming image upload requests. Initially, one worker instance is sufficient. As user traffic grows, the queue starts to build up, and images take hours to process. Adding more worker instances immediately reduces the queue size and processing time. In another case, a batch processing system is configured to run with 4 worker threads. A new report generation task is introduced that is very CPU-intensive. When multiple report requests come in simultaneously, the 4 threads are fully utilized, and subsequent report requests sit in the queue, waiting for a thread to become free. This problem is fundamental to scalable, asynchronous systems. It highlights the need for continuous monitoring and dynamic scaling strategies to match processing capacity with demand, especially in cloud-native environments.