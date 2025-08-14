---
title: Growing Task Queues
description: Asynchronous processing queues accumulate unprocessed tasks, indicating
  a bottleneck in the processing pipeline.
category:
- Performance
- Stability
related_problems:
- slug: task-queues-backing-up
  similarity: 0.855
- slug: insufficient-worker-capacity
  similarity: 0.84
- slug: work-queue-buildup
  similarity: 0.671
- slug: capacity-mismatch
  similarity: 0.594
- slug: thread-pool-exhaustion
  similarity: 0.567
layout: problem
---

## Description
A growing task queue is a clear sign that a system is not able to keep up with its workload. When tasks are produced faster than they are consumed, the queue will grow, leading to delays in processing and a potential for data loss. This can be caused by a variety of factors, from a sudden spike in traffic to a gradual increase in the workload over time. A robust monitoring and alerting system is essential for detecting and responding to a growing task queue in a timely manner.

## Indicators ⟡
- The time it takes to process a task is gradually increasing.
- The number of worker processes is not sufficient to handle the load.
- You are seeing an increase in the number of tasks that are being retried.
- You are getting alerts from your monitoring system about the queue size.

## Symptoms ▲

- **Delayed Processing:** Tasks submitted to the queue take an unusually long time to be processed.
- **Increased Latency for Asynchronous Operations:** Operations that rely on the queue (e.g., email sending, report generation) experience significant delays.
- **Queue Size Alerts:** Monitoring systems trigger alerts when the number of pending messages in a queue exceeds a defined threshold.
- **Resource Exhaustion on Workers:** Worker processes consuming from the queue may show high CPU or memory usage, but are not processing tasks fast enough.
- **Data Staleness:** Information derived from asynchronous processing becomes outdated because it's not being updated in a timely manner.

## Root Causes ▼

- **[Insufficient Worker Capacity](insufficient-worker-capacity.md):** There are not enough worker processes or threads to handle the incoming volume of tasks.
- **[Inefficient Code](inefficient-code.md):** The code executed by the workers is slow or resource-intensive, causing each task to take too long to process.
- **[External Service Delays](external-service-delays.md):** Workers are waiting on slow external services, blocking them from processing subsequent tasks.
- **[High Database Resource Utilization](high-database-resource-utilization.md):** Workers are contending for database resources, slowing down their ability to complete tasks.
- **Message Spikes:** Sudden, unexpected bursts of messages overwhelm the processing capacity.
- **Dead Letters/Poison Messages:** Malformed or unprocessable messages get stuck in the queue, blocking subsequent messages or causing workers to crash.

## Detection Methods ○

- **Queue Monitoring:** Use the monitoring tools provided by the message queue system (e.g., RabbitMQ Management, Kafka Metrics, AWS SQS/SNS metrics) to track queue size, message rates, and consumer lag.
- **Worker Process Monitoring:** Monitor the CPU, memory, and I/O usage of worker processes.
- **Distributed Tracing:** Trace asynchronous operations to identify bottlenecks within the worker processing logic or external dependencies.
- **Log Analysis:** Look for errors or warnings in worker logs that indicate processing failures or retries.

## Examples
An e-commerce site uses a message queue to process order confirmations and send emails. During a flash sale, the number of orders spikes, and the email queue grows rapidly. Customers complain about not receiving their order confirmations for hours, because the email sending workers cannot keep up. In another case, a data processing pipeline uses a queue to handle image resizing tasks. A new, very large image format is introduced, and the image resizing workers, which were previously efficient, now take much longer per image, causing the queue to back up. This problem is common in event-driven architectures and microservices where asynchronous processing is heavily utilized. It highlights the importance of proper capacity planning and robust error handling for background tasks.