---
title: Network Latency
description: Delays in data transmission across the network significantly increase
  response times and impact application performance.
category:
- Performance
related_problems:
- slug: high-api-latency
  similarity: 75%
- slug: service-timeouts
  similarity: 75%
- slug: external-service-delays
  similarity: 65%
- slug: upstream-timeouts
  similarity: 65%
- slug: slow-application-performance
  similarity: 65%
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

- **Slow Application Performance:** User-facing applications feel sluggish, especially those involving remote data access or cross-service communication.
- **[High API Latency](high-api-latency.md):** API calls take longer to complete, even if the processing on the server-side is fast.
- **[Service Timeouts](service-timeouts.md):** Services or clients time out waiting for responses from remote systems.
- **Reduced Throughput:** The amount of data that can be transferred over the network per unit of time decreases.
- **User Complaints:** Users report slow experiences, particularly when accessing the application from geographically distant locations.

## Root Causes ▼

- **Geographical Distance:** The physical distance between the client and the server, or between communicating services, inherently introduces latency.
- **Congested Network:** Too much traffic on the network causes packets to be delayed or dropped.
- **Poor Network Infrastructure:** Outdated or misconfigured routers, switches, or firewalls introduce delays.
- **Suboptimal Routing:** Data packets take a longer, less efficient path to their destination.
- **Excessive Hops:** Too many intermediate network devices (routers, proxies, load balancers) between the source and destination.
- **Inefficient Protocols:** Using chatty or unoptimized network protocols for communication.

## Detection Methods ○

- **Ping/Traceroute:** Use `ping` to measure round-trip time to a host and `traceroute` (or `tracert` on Windows) to identify the path and latency at each hop.
- **Network Monitoring Tools:** Use tools like Wireshark, tcpdump, or network performance monitoring solutions to analyze network traffic and identify bottlenecks.
- **Distributed Tracing:** Trace requests across services to see how much time is spent in network communication versus actual processing.
- **Real User Monitoring (RUM):** RUM tools can measure network latency experienced by actual users from different locations.
- **Cloud Provider Metrics:** If using cloud services, monitor network I/O and latency metrics provided by the cloud provider.

## Examples
A company has its main application servers in North America, but a significant portion of its user base is in Europe. European users consistently report slow application performance, even though server-side metrics show low latency. Network traces reveal high latency between Europe and North America. In another case, two microservices, `Service A` and `Service B`, are deployed in different virtual networks within the same cloud region. A misconfigured network security group or routing table causes traffic between them to be routed through an on-premise data center, introducing significant latency. Network latency is a fundamental constraint in distributed systems. While it cannot be eliminated, it can be mitigated through strategies like content delivery networks (CDNs), edge computing, optimizing network paths, and designing applications to be less sensitive to latency.