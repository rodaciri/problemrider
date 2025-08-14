---
title: Cascade Failures
description: A single change triggers a chain reaction of failures across multiple
  system components.
category:
- Technical
- Design
- Performance
related_problems:
- slug: poor-system-environment
  similarity: 65%
- slug: single-points-of-failure
  similarity: 65%
- slug: inadequate-integration-tests
  similarity: 60%
- slug: unpredictable-system-behavior
  similarity: 60%
- slug: tight-coupling-issues
  similarity: 60%
layout: problem
---

## Description

Cascade failures occur when a single change, bug, or failure in one component causes a domino effect of failures throughout interconnected system components. These failures spread rapidly through the system because components are tightly coupled or share critical resources, making it difficult to contain problems to their source. Cascade failures are particularly dangerous because they can transform minor issues into system-wide outages and make recovery extremely difficult.

## Indicators ⟡
- Single component failures result in multiple system areas becoming unavailable
- Small changes frequently cause widespread test failures
- System outages affect seemingly unrelated functionality
- Recovery from failures requires restarting multiple components or the entire system
- Error messages from one component trigger errors in many other components

## Symptoms ▲
- **System-wide Outages:** What starts as a localized problem becomes a complete system failure
- **[Unpredictable System Behavior](unpredictable-system-behavior.md):** Changes have far-reaching and unexpected consequences
- **Difficult Recovery:** Restoring one failed component doesn't restore system functionality
- **Error Message Floods:** Single failures generate hundreds or thousands of error messages across multiple components
- **Extended Downtime:** Recovery takes much longer because multiple components must be addressed

## Root Causes ▼
- **[High Coupling and Low Cohesion](high-coupling-low-cohesion.md):** Components are so interconnected that failures in one immediately affect others
- **Shared Resource Dependencies:** Multiple components depend on the same critical resource without failover mechanisms
- **Synchronous Communication Chains:** Long chains of synchronous calls where failure anywhere breaks the entire chain
- **Lack of Circuit Breakers:** No mechanisms to isolate failing components and prevent failure propagation
- **Shared Database Transactions:** Multiple components participate in the same transactions, so failure anywhere rolls back everything
- **Single Points of Failure:** Critical shared components have no redundancy or backup mechanisms

## Detection Methods ○
- **Dependency Mapping:** Visualize component dependencies to identify potential cascade paths
- **Failure Simulation:** Chaos engineering approaches that deliberately fail components to test cascade behavior
- **Monitoring Correlation:** Track how often failures in one component coincide with failures in others
- **Recovery Time Analysis:** Measure how long different types of failures take to recover from
- **Error Pattern Analysis:** Identify patterns where single root causes generate multiple error types

## Examples

An e-commerce system has a shared user authentication service that all other components depend on. When a database connection pool in the authentication service becomes exhausted, it stops responding to requests. This causes the product catalog service to fail because it can't verify user permissions, the shopping cart service fails because it can't identify users, the payment service times out waiting for user verification, and the recommendation engine crashes because it can't access user preferences. What started as a simple connection pool configuration issue has taken down the entire platform. Recovery requires not only fixing the authentication service but also restarting all the other services that crashed while trying to reach it. Another example involves a data processing pipeline where each stage passes results to the next stage synchronously. When the third stage encounters a corrupted data record and crashes, it causes the second stage to time out waiting for a response, which causes the first stage to exhaust memory with queued items, ultimately requiring the entire pipeline to be restarted and all in-flight data to be reprocessed.