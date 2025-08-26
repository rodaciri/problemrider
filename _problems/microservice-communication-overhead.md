---
title: Microservice Communication Overhead
description: Excessive network communication between microservices creates latency,
  reduces reliability, and impacts overall system performance.
category:
- Architecture
- Performance
related_problems:
- slug: interrupt-overhead
  similarity: 0.55
- slug: service-discovery-failures
  similarity: 0.5
- slug: endianness-conversion-overhead
  similarity: 0.5
- slug: operational-overhead
  similarity: 0.5
layout: problem
---

## Description

Microservice communication overhead occurs when the network communication between services becomes a significant source of latency and reliability issues. Excessive inter-service calls, chatty communication patterns, and inefficient protocols can degrade system performance and create cascading failure points in distributed architectures.

## Indicators ⟡

- High network latency between service calls
- Large number of inter-service API calls for single user operations
- Network bandwidth consumption significantly impacts application performance
- Service response times dominated by network communication time
- Frequent timeout errors in service-to-service communication

## Symptoms ▲
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.609, Strength: 0.793">ⓘ</span>
<br/>  Excessive network communication between microservices leads to increased latency, causing services that rely on timely API responses to exceed their timeout thresholds and fail, thereby indicating the underlying communication inefficiency.
- [Interrupt Overhead](interrupt-overhead.md) <span class="info-tooltip" title="Confidence: 0.422, Strength: 0.821">ⓘ</span>
<br/>  Excessive network communication between microservices leads to increased context-switching and hardware interrupts as the system struggles to manage high traffic loads, thereby serving as an indicator of underlying performance bottlenecks.
- [Increased Customer Support Load](increased-customer-support-load.md) <span class="info-tooltip" title="Confidence: 0.413, Strength: 0.733">ⓘ</span>
<br/>  Increased latency and reduced reliability from excessive network communication between microservices lead to user frustration and task completion difficulties, resulting in a higher volume of customer support inquiries.
- [Inefficient Code](inefficient-code.md) <span class="info-tooltip" title="Confidence: 0.340, Strength: 0.825">ⓘ</span>
<br/>  Excessive network communication between microservices can lead to inefficient code as the increased latency forces developers to implement complex logic or workarounds to manage the delays, ultimately creating performance bottlenecks in the system.
- [Capacity Mismatch](capacity-mismatch.md) <span class="info-tooltip" title="Confidence: 0.307, Strength: 0.782">ⓘ</span>
<br/>  Excessive network communication leads to increased latency, causing demand for processing resources to fluctuate unpredictably, which in turn creates mismatched capacity across the development process, resulting in bottlenecks and underutilization.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○

- **Inter-Service Communication Monitoring:** Track frequency, latency, and volume of service-to-service calls
- **Network Performance Analysis:** Monitor network bandwidth usage and latency between services
- **Service Dependency Mapping:** Visualize communication patterns and identify chatty interactions
- **Protocol Efficiency Analysis:** Compare different communication protocols and formats
- **End-to-End Latency Tracing:** Trace request flows to identify communication bottlenecks

## Examples

An e-commerce checkout process requires 15 separate API calls across 8 different microservices: user service for authentication, inventory service for availability, pricing service for calculations, tax service for tax calculation, shipping service for rates, payment service for processing, notification service for emails, and order service for persistence. Each call adds 50ms of network latency, making total checkout time 750ms plus processing time. Redesigning the checkout flow with a dedicated checkout orchestration service that batches calls and caches frequently accessed data reduces the external API calls to 3 and improves checkout performance by 80%. Another example involves a social media feed service that makes individual API calls to fetch user profiles for each post author. A feed with 50 posts requires 50 separate user service calls, each taking 20ms, adding 1 second of latency just for profile data. Implementing batch profile fetching reduces this to a single 30ms call.
