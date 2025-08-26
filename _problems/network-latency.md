---
title: Network Latency
description: Delays in data transmission across the network significantly increase
  response times and impact application performance.
category:
- Performance
related_problems:
- slug: high-api-latency
  similarity: 0.8
- slug: slow-application-performance
  similarity: 0.65
- slug: lazy-loading
  similarity: 0.65
- slug: external-service-delays
  similarity: 0.6
- slug: excessive-disk-io
  similarity: 0.6
- slug: service-timeouts
  similarity: 0.6
layout: problem
---

## Description
Network latency is the time it takes for data to travel from one point to another on a network. While some latency is unavoidable, high network latency can have a significant impact on application performance, especially in distributed systems where services communicate over the network. This can manifest as slow response times, timeouts, and a generally sluggish user experience. Understanding and mitigating the impact of network latency is a key consideration in the design of distributed systems.

## Indicators ⟡
- Your application is slow, but your servers are not under heavy load.
- You see a high number of timeout errors in your logs.
- Your application's performance is inconsistent.
- You are getting complaints from users about slow performance.

## Symptoms ▲
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.550, Strength: 0.754">ⓘ</span>
<br/>  In legacy systems, increased delays in data transmission lead to prolonged response times that exceed the configured timeout thresholds of API-consuming services, resulting in failures to receive timely responses and indicating underlying network latency issues.
- [Inefficient Development Environment](inefficient-development-environment.md) <span class="info-tooltip" title="Confidence: 0.350, Strength: 0.605">ⓘ</span>
<br/>  The slow and cumbersome development environment indicates network latency, as delays in data transmission hinder developers' ability to efficiently access resources and tools, ultimately reducing productivity and increasing response times.

## Root Causes ▼
- [Long-Running Transactions](long-running-transactions.md) <span class="info-tooltip" title="Confidence: 0.349, Strength: 0.886">ⓘ</span>
<br/>  Long-running transactions occupy database resources and locks, thereby delaying the completion of data requests and causing increased wait times that contribute to overall network latency.
- [Misunderstanding of OOP](misunderstanding-of-oop.md) <span class="info-tooltip" title="Confidence: 0.313, Strength: 0.898">ⓘ</span>
<br/>  Poorly designed code resulting from a lack of understanding of object-oriented programming principles can lead to inefficient data handling and excessive processing overhead, which exacerbates delays in data transmission and ultimately increases network latency.
- [External Service Delays](external-service-delays.md) <span class="info-tooltip" title="Confidence: 0.307, Strength: 0.931">ⓘ</span>
<br/>  Delays in data transmission are exacerbated when an API relies on external services that respond slowly, creating a cascading effect that increases overall network latency and degrades application performance.

## Detection Methods ○

- **Ping/Traceroute:** Use `ping` to measure round-trip time to a host and `traceroute` (or `tracert` on Windows) to identify the path and latency at each hop.
- **Network Monitoring Tools:** Use tools like Wireshark, tcpdump, or network performance monitoring solutions to analyze network traffic and identify bottlenecks.
- **Distributed Tracing:** Trace requests across services to see how much time is spent in network communication versus actual processing.
- **Real User Monitoring (RUM):** RUM tools can measure network latency experienced by actual users from different locations.
- **Cloud Provider Metrics:** If using cloud services, monitor network I/O and latency metrics provided by the cloud provider.

## Examples
A company has its main application servers in North America, but a significant portion of its user base is in Europe. European users consistently report slow application performance, even though server-side metrics show low latency. Network traces reveal high latency between Europe and North America. In another case, two microservices, `Service A` and `Service B`, are deployed in different virtual networks within the same cloud region. A misconfigured network security group or routing table causes traffic between them to be routed through an on-premise data center, introducing significant latency. Network latency is a fundamental constraint in distributed systems. While it cannot be eliminated, it can be mitigated through strategies like content delivery networks (CDNs), edge computing, optimizing network paths, and designing applications to be less sensitive to latency.
