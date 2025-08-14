---
title: Load Balancing Problems
description: Load balancing mechanisms distribute traffic inefficiently or fail to
  adapt to changing conditions, causing performance issues and service instability.
category:
- Infrastructure
- Performance
- Scalability
related_problems:
- slug: thread-pool-exhaustion
  similarity: 0.567
- slug: resource-contention
  similarity: 0.565
- slug: network-latency
  similarity: 0.565
- slug: microservice-communication-overhead
  similarity: 0.558
- slug: capacity-mismatch
  similarity: 0.55
layout: problem
---

## Description

Load balancing problems occur when traffic distribution mechanisms fail to efficiently route requests across available service instances, leading to uneven load distribution, performance degradation, and potential service failures. Poor load balancing can result in some instances being overwhelmed while others remain underutilized, reducing overall system efficiency and reliability.

## Indicators ⟡

- Uneven resource utilization across service instances
- Some service instances showing high load while others are idle
- Response times vary significantly across requests
- Load balancer health checks failing intermittently
- Connection pooling issues or connection exhaustion

## Symptoms ▲

- **Uneven Load Distribution:** Some service instances overwhelmed while others underutilized
- **Performance Inconsistency:** Response times vary dramatically based on which instance handles requests
- **Hot Spotting:** Certain instances receive disproportionate traffic loads
- **Connection Pool Exhaustion:** Load balancer or clients exhaust available connections
- **Health Check Flapping:** Service instances rapidly switching between healthy and unhealthy states

## Root Causes ▼

- **Inappropriate Load Balancing Algorithm:** Using round-robin when weighted or least-connections would be better
- **Health Check Misconfiguration:** Health checks too aggressive or not reflecting actual service capacity
- **Session Affinity Issues:** Sticky sessions causing uneven distribution
- **Instance Capacity Differences:** Treating instances with different capacities equally
- **Network Latency Variations:** Not accounting for varying network conditions between instances
- **Load Balancer Scaling Issues:** Load balancer itself becoming a bottleneck

## Detection Methods ○

- **Load Distribution Monitoring:** Monitor request distribution and resource utilization across instances
- **Response Time Analysis:** Analyze response time variations across different service instances
- **Health Check Monitoring:** Monitor health check success rates and timing
- **Connection Pool Monitoring:** Track connection pool utilization and exhaustion events
- **Load Balancer Performance Metrics:** Monitor load balancer CPU, memory, and throughput

## Examples

An API gateway uses simple round-robin load balancing across service instances, but the instances have different hardware specifications - some are high-memory instances optimized for data processing while others are CPU-optimized. The round-robin approach sends equal traffic to all instances, causing the CPU-optimized instances to struggle with memory-intensive requests while memory-optimized instances handle CPU-light requests inefficiently. Implementing weighted load balancing based on instance capabilities improves overall system performance by 60%. Another example involves a web application where session affinity causes user sessions to stick to specific servers. Popular users with high activity create hot spots on certain servers while others remain underutilized. When popular user sessions concentrate on the same server, it becomes overwhelmed and starts failing, affecting user experience.