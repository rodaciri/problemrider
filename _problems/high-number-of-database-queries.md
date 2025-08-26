---
title: High Number of Database Queries
description: A single user request triggers an unexpectedly large number of database
  queries, leading to performance degradation and increased database load.
category:
- Data
- Performance
related_problems:
- slug: slow-database-queries
  similarity: 0.75
- slug: database-query-performance-issues
  similarity: 0.75
- slug: n-plus-one-query-problem
  similarity: 0.75
- slug: lazy-loading
  similarity: 0.7
- slug: high-database-resource-utilization
  similarity: 0.7
- slug: imperative-data-fetching-logic
  similarity: 0.7
layout: problem
---

## Description
A high number of database queries is a common performance problem in database-driven applications. It occurs when a single user request triggers an unexpectedly large number of database queries. This can happen for a variety of reasons, such as the N+1 query problem, a lack of caching, or a poorly designed data access layer. A high number of database queries can lead to a number of problems, including slow application performance, high database resource utilization, and a poor user experience.

## Indicators ⟡
- The application is slow, even though the database server is not under heavy load.
- The database logs are full of similar-looking queries.
- The application is making a lot of small, fast queries instead of a few larger, slower queries.
- The application is not using a caching layer.

## Symptoms ▲
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.664, Strength: 0.850">ⓘ</span>
<br/>  The excessive database queries slow down response times, causing API consumers to exceed their timeout thresholds and fail to receive timely responses.
- [Increased Customer Support Load](increased-customer-support-load.md) <span class="info-tooltip" title="Confidence: 0.599, Strength: 0.849">ⓘ</span>
<br/>  The excessive database queries slow down application responsiveness, leading to user frustration and an increased frequency of support requests as users struggle to complete their tasks.
- [Frequent Changes to Requirements](frequent-changes-to-requirements.md) <span class="info-tooltip" title="Confidence: 0.598, Strength: 0.803">ⓘ</span>
<br/>  The high number of database queries can cause performance issues that prompt stakeholders to change requirements frequently, as they seek to mitigate the impact of slow response times and user dissatisfaction, ultimately resulting in rework and delays in the legacy system's development cycle.
- [Queries That Prevent Index Usage](queries-that-prevent-index-usage.md) <span class="info-tooltip" title="Confidence: 0.578, Strength: 0.930">ⓘ</span>
<br/>  Inefficiently written queries that bypass available indexes not only increase the execution time of individual requests but also compound the overall number of queries executed, thereby exacerbating the performance degradation and load on the database in legacy systems.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.557, Strength: 0.830">ⓘ</span>
<br/>  The excessive number of database queries often leads to the failure to release resources, as each query may create new connections or objects that are not properly closed, resulting in resource leakage that compounds the performance issues.
- [Interrupt Overhead](interrupt-overhead.md) <span class="info-tooltip" title="Confidence: 0.508, Strength: 0.879">ⓘ</span>
<br/>  The excessive number of database queries generates a high volume of data traffic and processing demands, leading to increased interrupt requests that disrupt CPU execution and result in frequent context switches, thereby indicating underlying performance issues.
- [Negative User Feedback](negative-user-feedback.md) <span class="info-tooltip" title="Confidence: 0.473, Strength: 0.897">ⓘ</span>
<br/>  The excessive number of database queries directly contributes to slower response times and application performance issues, which in turn leads users to express dissatisfaction through complaints about slow loading and freezing, thereby serving as an indicator of underlying inefficiencies in the system.
- [Review Process Breakdown](review-process-breakdown.md) <span class="info-tooltip" title="Confidence: 0.442, Strength: 0.699">ⓘ</span>
<br/>  The failure to effectively review and improve code quality exacerbates inefficient query designs and logic, resulting in an excessive number of database queries that degrade performance and increase system load.
- [Monolithic Architecture Constraints](monolithic-architecture-constraints.md) <span class="info-tooltip" title="Confidence: 0.429, Strength: 0.900">ⓘ</span>
<br/>  The high number of database queries often stems from the tightly coupled nature of a large, monolithic codebase, where interdependent components lead to inefficient data access patterns and excessive query generation, thus indicating the underlying architectural constraints that hinder maintainability and scalability.
- [Large Pull Requests](large-pull-requests.md) <span class="info-tooltip" title="Confidence: 0.427, Strength: 0.781">ⓘ</span>
<br/>  The high number of database queries often requires extensive changes to the codebase to optimize data handling, resulting in large pull requests that are cumbersome to review and increase the likelihood of overlooking critical issues.
- [Delayed Bug Fixes](delayed-bug-fixes.md) <span class="info-tooltip" title="Confidence: 0.384, Strength: 0.826">ⓘ</span>
<br/>  The excessive database queries strain system resources, making it difficult for developers to address and resolve existing issues in a timely manner, thereby prolonging user frustration.
- [Complex Implementation Paths](complex-implementation-paths.md) <span class="info-tooltip" title="Confidence: 0.376, Strength: 0.824">ⓘ</span>
<br/>  The need for complex technical solutions to meet simple business requirements often leads to inefficient data retrieval processes, resulting in a high number of database queries as the system struggles to accommodate these convoluted implementation paths.
- [Inefficient Database Indexing](inefficient-database-indexing.md) <span class="info-tooltip" title="Confidence: 0.364, Strength: 0.927">ⓘ</span>
<br/>  The lack of appropriate indexes leads to full-table scans, causing each user request to generate an excessive number of queries as the system struggles to efficiently retrieve data, thereby indicating underlying performance issues.
- [Rate Limiting Issues](rate-limiting-issues.md) <span class="info-tooltip" title="Confidence: 0.354, Strength: 0.864">ⓘ</span>
<br/>  The excessive number of database queries per user request overwhelms the system, leading to misconfigured or ineffective rate limiting that fails to manage the load and results in legitimate requests being blocked or not adequately controlling abusive behavior.
- [Unoptimized File Access](unoptimized-file-access.md) <span class="info-tooltip" title="Confidence: 0.353, Strength: 0.892">ⓘ</span>
<br/>  The excessive number of database queries can lead to increased reliance on file-based data retrieval or temporary storage, resulting in unoptimized file access that compounds performance issues in legacy systems.
- [Quality Blind Spots](quality-blind-spots.md) <span class="info-tooltip" title="Confidence: 0.352, Strength: 0.809">ⓘ</span>
<br/>  The excessive database queries often arise from unoptimized code paths that were not adequately tested, indicating quality blind spots in the system's verification processes that fail to identify inefficient data access patterns.
- [Garbage Collection Pressure](garbage-collection-pressure.md) <span class="info-tooltip" title="Confidence: 0.343, Strength: 0.865">ⓘ</span>
<br/>  The excessive number of database queries generates a high volume of temporary objects in memory, leading to increased allocation and deallocation cycles that exert pressure on the garbage collector, which in turn results in frequent performance pauses and reduced throughput in the application.
- [Inefficient Code](inefficient-code.md) <span class="info-tooltip" title="Confidence: 0.335, Strength: 0.854">ⓘ</span>
<br/>  Inefficient code often leads to excessive database queries as it fails to optimize data retrieval processes, resulting in performance bottlenecks that manifest as an increased number of queries for a single user request in legacy systems.
- [Team Coordination Issues](team-coordination-issues.md) <span class="info-tooltip" title="Confidence: 0.327, Strength: 0.859">ⓘ</span>
<br/>  Coordination issues among developers can arise when they lack a unified understanding of the codebase's query patterns, leading to inefficient implementations that exacerbate the excessive database queries triggered by user requests.
- [High Defect Rate in Production](high-defect-rate-in-production.md) <span class="info-tooltip" title="Confidence: 0.325, Strength: 0.843">ⓘ</span>
<br/>  The unexpected increase in database queries often leads to performance bottlenecks that hinder testing and debugging efforts, resulting in a higher likelihood of undetected bugs making it to production.
- [Unused Indexes](unused-indexes.md) <span class="info-tooltip" title="Confidence: 0.322, Strength: 0.801">ⓘ</span>
<br/>  The presence of unused indexes indicates inefficient query patterns that lead to excessive database queries, as the system may generate numerous queries that do not leverage existing indexes, resulting in performance issues and unnecessary overhead.
- [Feature Creep](feature-creep.md) <span class="info-tooltip" title="Confidence: 0.308, Strength: 0.864">ⓘ</span>
<br/>  The expansion of features often leads to more complex interactions between system components, resulting in excessive database queries for each user request as additional data is accessed or processed, thereby serving as an indicator of underlying inefficiencies in the system's architecture and performance.
- [Delayed Value Delivery](delayed-value-delivery.md) <span class="info-tooltip" title="Confidence: 0.308, Strength: 0.876">ⓘ</span>
<br/>  The excessive database queries caused by inefficient request handling result in slower processing times for feature updates and bug fixes, leading to delays in delivering value to users.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○
- **Application Performance Monitoring (APM):** APM tools can often detect and flag a high number of database queries.
- **SQL Logging:** Enable SQL logging in your application or database and inspect the logs for a large number of queries being executed in a short period of time.
- **Code Review:** During code reviews, specifically look for code that is making a large number of database queries.
- **Load Testing:** Use load testing to see how the application behaves under heavy load.

## Examples
A web application has a page that displays a list of products. For each product, it also displays the name of the category that the product belongs to. The application first executes a query to get the list of products. Then, for each product, it executes another query to get the name of the category. This results in a large number of database queries, which makes the page slow to load. The problem could be solved by using a single query that joins the products and categories tables.
