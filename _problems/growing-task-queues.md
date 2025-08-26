---
title: Growing Task Queues
description: Asynchronous processing queues accumulate unprocessed tasks, indicating
  a bottleneck in the processing pipeline.
category:
- Code
- Performance
related_problems:
- slug: insufficient-worker-capacity
  similarity: 0.85
- slug: task-queues-backing-up
  similarity: 0.85
- slug: work-queue-buildup
  similarity: 0.7
- slug: unbounded-data-growth
  similarity: 0.5
- slug: increased-error-rates
  similarity: 0.5
- slug: thread-pool-exhaustion
  similarity: 0.5
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
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.434, Strength: 0.641">ⓘ</span>
<br/>  The accumulation of unprocessed tasks in the asynchronous processing queues leads to longer response times for API calls, causing services to exceed their timeout configurations and fail to receive timely responses.
- [Reduced Team Productivity](reduced-team-productivity.md) <span class="info-tooltip" title="Confidence: 0.422, Strength: 0.680">ⓘ</span>
<br/>  The accumulation of unprocessed tasks in asynchronous processing queues creates delays in project timelines, leading to frustration and reduced morale among team members, ultimately manifesting as decreased productivity due to the team's inability to effectively manage workload and meet deadlines.
- [Increased Customer Support Load](increased-customer-support-load.md) <span class="info-tooltip" title="Confidence: 0.421, Strength: 0.680">ⓘ</span>
<br/>  The accumulation of unprocessed tasks in asynchronous processing queues directly leads to user frustration and increased support inquiries, as customers struggle to complete actions in the system, highlighting the inefficiencies within the legacy processing pipeline.
- [Unbounded Data Structures](unbounded-data-structures.md) <span class="info-tooltip" title="Confidence: 0.420, Strength: 0.669">ⓘ</span>
<br/>  The accumulation of unprocessed tasks in asynchronous processing queues can lead to unbounded data structures, as the system's failure to efficiently manage task completion results in continuous growth of queued data, ultimately causing memory exhaustion and performance issues in legacy systems.
- [Unbounded Data Growth](unbounded-data-growth.md) <span class="info-tooltip" title="Confidence: 0.419, Strength: 0.706">ⓘ</span>
<br/>  The accumulation of unprocessed tasks in asynchronous queues often leads to unbounded data growth due to the inability to efficiently manage or purge stale data, exacerbating the backlog and overwhelming system resources in legacy environments.
- [Slow Development Velocity](slow-development-velocity.md) <span class="info-tooltip" title="Confidence: 0.409, Strength: 0.726">ⓘ</span>
<br/>  The accumulation of unprocessed tasks in asynchronous queues leads to delays in feature delivery and bug fixes, as developers are increasingly diverted to address the backlog rather than progressing on new work, thereby signaling a critical bottleneck in the system’s processing capabilities.
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.395, Strength: 0.633">ⓘ</span>
<br/>  Constantly changing requirements often lead to rework and task reassignment, which exacerbate the backlog in processing queues as developers are pulled away from completing existing tasks to accommodate new demands, highlighting inefficiencies in the processing pipeline.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.348, Strength: 0.629">ⓘ</span>
<br/>  Accumulating unprocessed tasks in asynchronous processing queues often leads to unreleased system resources, as the continuous influx of tasks overwhelms the processing capacity, preventing the proper deallocation of objects and connections that are held by pending operations.
- [Analysis Paralysis](analysis-paralysis.md) <span class="info-tooltip" title="Confidence: 0.319, Strength: 0.667">ⓘ</span>
<br/>  The accumulation of unprocessed tasks in asynchronous processing queues leads to teams overanalyzing requirements in an attempt to avoid further delays, ultimately causing stagnation in development efforts.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○

- **Queue Monitoring:** Use the monitoring tools provided by the message queue system (e.g., RabbitMQ Management, Kafka Metrics, AWS SQS/SNS metrics) to track queue size, message rates, and consumer lag.
- **Worker Process Monitoring:** Monitor the CPU, memory, and I/O usage of worker processes.
- **Distributed Tracing:** Trace asynchronous operations to identify bottlenecks within the worker processing logic or external dependencies.
- **Log Analysis:** Look for errors or warnings in worker logs that indicate processing failures or retries.

## Examples
An e-commerce site uses a message queue to process order confirmations and send emails. During a flash sale, the number of orders spikes, and the email queue grows rapidly. Customers complain about not receiving their order confirmations for hours, because the email sending workers cannot keep up. In another case, a data processing pipeline uses a queue to handle image resizing tasks. A new, very large image format is introduced, and the image resizing workers, which were previously efficient, now take much longer per image, causing the queue to back up. This problem is common in event-driven architectures and microservices where asynchronous processing is heavily utilized. It highlights the importance of proper capacity planning and robust error handling for background tasks.
