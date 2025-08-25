---
title: High API Latency
description: The time it takes for an API to respond to a request is excessively long,
  leading to poor application performance and a negative user experience.
category:
- Performance
related_problems:
- slug: network-latency
  similarity: 0.8
- slug: external-service-delays
  similarity: 0.75
- slug: slow-application-performance
  similarity: 0.7
- slug: slow-response-times-for-lists
  similarity: 0.6
- slug: high-resource-utilization-on-client
  similarity: 0.6
- slug: excessive-disk-io
  similarity: 0.6
layout: problem
---

## Description
High API latency is a common problem in distributed systems, where services often depend on each other to fulfill requests. When an API takes a long time to respond, it can have a cascading effect, causing delays in downstream services and a poor user experience. High API latency can be caused by a variety of factors, from inefficient code and slow database queries to network issues and a lack of proper caching. A systematic approach to performance analysis is required to identify and address the root causes of high API latency.


## Indicators ⟡
- Your application is slow, but your servers are not under heavy load.
- You see a high number of timeout errors in your logs.
- Your application's performance is inconsistent.
- You are getting complaints from users about slow performance.


## Symptoms ▲

- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.742, Strength: 0.935">ⓘ</span>
<br/>  Excessive response times from the API lead to upstream services exceeding their configured timeout limits, resulting in failures to receive timely responses and indicating underlying latency issues in the system.
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.675, Strength: 0.888">ⓘ</span>
<br/>  Excessive API latency can lead to slow feedback loops for stakeholders, prompting frequent requirement changes as teams attempt to adapt to perceived needs, thereby creating a cycle of rework and delays in response to performance issues.
- [Inefficient Development Environment](inefficient-development-environment.md) <span class="info-tooltip" title="Confidence: 0.671, Strength: 0.952">ⓘ</span>
<br/>  The slow and cumbersome development environment exacerbates high API latency by hindering the team's ability to efficiently test, debug, and optimize code, leading to prolonged response times and a degraded application performance.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.638, Strength: 0.900">ⓘ</span>
<br/>  Excessive API latency can result from unreleased resources, as lingering objects and connections consume memory and processing power, leading to increased response times and degraded application performance.
- [Poor Caching Strategy](poor-caching-strategy.md) <span class="info-tooltip" title="Confidence: 0.550, Strength: 0.902">ⓘ</span>
<br/>  Inefficiently fetching data from the source on every request instead of utilizing caching increases the response time for the API, thereby contributing directly to the overall latency and degrading the application's performance.
- [Interrupt Overhead](interrupt-overhead.md) <span class="info-tooltip" title="Confidence: 0.526, Strength: 0.926">ⓘ</span>
<br/>  Excessive hardware interrupts increase CPU context switching, which delays API response times, thereby indicating underlying issues with resource management that exacerbate latency in legacy systems.
- [Negative User Feedback](negative-user-feedback.md) <span class="info-tooltip" title="Confidence: 0.511, Strength: 0.925">ⓘ</span>
<br/>  Excessive response times from the API lead to users experiencing slow loading and application freezes, resulting in complaints that directly reflect their frustration with the application's degraded performance.
- [Undefined Code Style Guidelines](undefined-code-style-guidelines.md) <span class="info-tooltip" title="Confidence: 0.510, Strength: 0.848">ⓘ</span>
<br/>  Inconsistent code resulting from a lack of defined coding standards can lead to inefficiencies and bugs in the API implementation, contributing to the excessive response times that degrade application performance.
- [Slow Development Velocity](slow-development-velocity.md) <span class="info-tooltip" title="Confidence: 0.498, Strength: 0.913">ⓘ</span>
<br/>  Excessive API latency hinders the team's ability to test and iterate quickly on features and fixes, causing delays in development cycles and resulting in a noticeable decline in overall productivity.
- [Delayed Bug Fixes](delayed-bug-fixes.md) <span class="info-tooltip" title="Confidence: 0.490, Strength: 0.939">ⓘ</span>
<br/>  Excessive response times hinder the development team's ability to efficiently diagnose and address issues, resulting in unresolved bugs that contribute to user frustration.
- [Deadline Pressure](deadline-pressure.md) <span class="info-tooltip" title="Confidence: 0.478, Strength: 0.927">ⓘ</span>
<br/>  Excessive response times from the API create urgency to deliver quick fixes and shortcuts, resulting in rushed development practices that further degrade software quality and performance.
- [Legacy API Versioning Nightmare](legacy-api-versioning-nightmare.md) <span class="info-tooltip" title="Confidence: 0.477, Strength: 0.950">ⓘ</span>
<br/>  Poorly designed APIs in legacy systems lead to increased complexity in versioning and backward compatibility, which in turn causes inefficiencies and delays in processing requests, ultimately manifesting as excessive response times.
- [Delayed Value Delivery](delayed-value-delivery.md) <span class="info-tooltip" title="Confidence: 0.438, Strength: 0.936">ⓘ</span>
<br/>  Extended response times from the API hinder the timely deployment of new features and bug fixes, causing delays in value delivery to users and reflecting the underlying latency issues within the legacy system's architecture.
- [Inadequate Test Data Management](inadequate-test-data-management.md) <span class="info-tooltip" title="Confidence: 0.424, Strength: 0.927">ⓘ</span>
<br/>  Unrealistic or insufficient test data can lead to undetected performance bottlenecks in legacy systems, causing prolonged response times in API calls, which ultimately manifests as high latency and degrades overall application performance.
- [Inefficient Code](inefficient-code.md) <span class="info-tooltip" title="Confidence: 0.420, Strength: 0.937">ⓘ</span>
<br/>  Excessive API response times often stem from inefficient code, as performance bottlenecks and computationally expensive operations within the codebase directly increase processing time, thereby degrading overall application performance and user experience.
- [High Defect Rate in Production](high-defect-rate-in-production.md) <span class="info-tooltip" title="Confidence: 0.414, Strength: 0.912">ⓘ</span>
<br/>  Excessive API latency can lead to rushed development and inadequate testing processes, resulting in a higher defect rate in production as developers may overlook critical issues that surface only under real-world performance conditions.
- [Index Fragmentation](index-fragmentation.md) <span class="info-tooltip" title="Confidence: 0.398, Strength: 0.923">ⓘ</span>
<br/>  In legacy systems, high API latency can result from index fragmentation, as disorganized indexes lead to slower data retrieval times, directly impacting the response time of API requests and degrading overall application performance.
- [Team Coordination Issues](team-coordination-issues.md) <span class="info-tooltip" title="Confidence: 0.395, Strength: 0.926">ⓘ</span>
<br/>  Inefficient communication and collaboration among developers can lead to poorly optimized code and fragmented architecture, exacerbating response times and ultimately resulting in excessive latency for API calls.
- [Quality Blind Spots](quality-blind-spots.md) <span class="info-tooltip" title="Confidence: 0.393, Strength: 0.836">ⓘ</span>
<br/>  In legacy systems, insufficient testing coverage often leads to unaddressed performance bottlenecks, resulting in excessive response times for API calls, thus indicating that undetected quality issues are contributing to high latency.
- [Incorrect Max Connection Pool Size](incorrect-max-connection-pool-size.md) <span class="info-tooltip" title="Confidence: 0.382, Strength: 0.884">ⓘ</span>
<br/>  Excessive API latency can be exacerbated by an incorrectly configured maximum connection pool size, as insufficient connections may lead to bottlenecks in database access, causing delays in processing requests and ultimately degrading overall application performance.
- [Inefficient Database Indexing](inefficient-database-indexing.md) <span class="info-tooltip" title="Confidence: 0.379, Strength: 0.943">ⓘ</span>
<br/>  The excessive API latency is exacerbated by the lack of appropriate database indexing, which forces the application to perform slow, full-table scans for data retrieval, directly increasing response times and degrading overall performance.
- [Memory Leaks](memory-leaks.md) <span class="info-tooltip" title="Confidence: 0.366, Strength: 0.923">ⓘ</span>
<br/>  Excessive response times can lead to prolonged processing within the application, causing memory to be held longer than necessary and resulting in memory leaks that further exacerbate performance issues.
- [Unused Indexes](unused-indexes.md) <span class="info-tooltip" title="Confidence: 0.346, Strength: 0.887">ⓘ</span>
<br/>  The presence of unused indexes can lead to increased overhead during write operations, which may exacerbate response times for data retrieval, ultimately contributing to elevated API latency in legacy systems.
- [Cascade Delays](cascade-delays.md) <span class="info-tooltip" title="Confidence: 0.345, Strength: 0.937">ⓘ</span>
<br/>  Excessively long API response times lead to unfulfilled requests and incomplete data processing, which in turn cause missed deadlines in dependent work streams and create a cascading effect of delays across projects and teams.
- [Unoptimized File Access](unoptimized-file-access.md) <span class="info-tooltip" title="Confidence: 0.334, Strength: 0.938">ⓘ</span>
<br/>  Inefficient file access increases the time taken to retrieve or store data, which exacerbates response times for API calls, thereby highlighting underlying latency issues in the system.
- [Inconsistent Codebase](inconsistent-codebase.md) <span class="info-tooltip" title="Confidence: 0.329, Strength: 0.924">ⓘ</span>
<br/>  The excessive response times from the API can often be traced back to an inconsistent codebase, where lack of standardization leads to inefficient code execution, difficult debugging, and prolonged development cycles that hinder performance optimization.
- [Context Switching Overhead](context-switching-overhead.md) <span class="info-tooltip" title="Confidence: 0.325, Strength: 0.911">ⓘ</span>
<br/>  Excessive API latency forces developers to frequently toggle between debugging tools and legacy systems to diagnose performance issues, thereby increasing cognitive load and reducing overall productivity as they struggle to identify and resolve the root causes of delays.
- [Maintenance Overhead](maintenance-overhead.md) <span class="info-tooltip" title="Confidence: 0.323, Strength: 0.934">ⓘ</span>
<br/>  Excessive response times often stem from complex, inefficient code structures that require frequent updates and manual fixes, resulting in increased maintenance efforts as developers grapple with unclear dependencies and duplicated logic.
- [Integration Difficulties](integration-difficulties.md) <span class="info-tooltip" title="Confidence: 0.318, Strength: 0.891">ⓘ</span>
<br/>  The excessive response times in the API reveal underlying architectural limitations that complicate integration with modern services, necessitating cumbersome workarounds that highlight the inefficiencies of the legacy system.
- [Feedback Isolation](feedback-isolation.md) <span class="info-tooltip" title="Confidence: 0.316, Strength: 0.767">ⓘ</span>
<br/>  Insufficient stakeholder feedback often leads to inadequate performance optimization efforts, causing prolonged response times in legacy systems as developers lack crucial insights into user interactions and system bottlenecks.
- [Incorrect Index Type](incorrect-index-type.md) <span class="info-tooltip" title="Confidence: 0.313, Strength: 0.892">ⓘ</span>
<br/>  Inefficient data retrieval due to the use of an inappropriate index type can significantly increase the time it takes for an API to respond, making it a key indicator of underlying performance issues in legacy systems.
- [Rate Limiting Issues](rate-limiting-issues.md) <span class="info-tooltip" title="Confidence: 0.305, Strength: 0.929">ⓘ</span>
<br/>  Excessive API latency can lead to inconsistent response times that trigger rate limiting mechanisms to misinterpret legitimate traffic as abusive, thereby exacerbating the latency issue and degrading overall system performance in legacy environments.
- [Long-Lived Feature Branches](long-lived-feature-branches.md) <span class="info-tooltip" title="Confidence: 0.301, Strength: 0.934">ⓘ</span>
<br/>  Delayed code reviews and merges create a backlog of unintegrated features, which can exacerbate response times in legacy systems, thereby indicating underlying performance issues reflected in slow API responses.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○

- **Application Performance Monitoring (APM):** Use APM tools to trace requests, measure the duration of each operation (e.g., database calls, external service calls), and pinpoint the exact source of the delay.
- **Logging:** Add detailed logging to track the time taken at different stages of the request lifecycle.
- **Metrics and Alerting:** Monitor key metrics like p95/p99 response times and set up alerts to be notified of performance degradations.
- **Load Testing:** Use load testing tools to simulate traffic and identify how latency is affected by concurrent users.


## Examples
An e-commerce site's "product details" API endpoint becomes progressively slower as the number of products grows. Investigation with an APM tool reveals that the endpoint is making a slow, unindexed query to fetch product reviews. In another case, a mobile application's startup time is poor because it makes multiple blocking API calls to fetch initial configuration data. The latency of these calls, especially on slower mobile networks, adds up significantly. This is a common problem in distributed systems and microservices architectures where a single user action can trigger a chain of API calls across multiple services.
