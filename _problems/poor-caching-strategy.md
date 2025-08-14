---
title: Poor Caching Strategy
description: Data that could be cached is fetched from the source on every request,
  adding unnecessary overhead and increasing latency.
category:
- Performance
related_problems:
- slug: cache-invalidation-problems
  similarity: 0.705
- slug: high-number-of-database-queries
  similarity: 0.591
- slug: slow-response-times-for-lists
  similarity: 0.575
- slug: data-structure-cache-inefficiency
  similarity: 0.558
- slug: resource-contention
  similarity: 0.549
layout: problem
---

## Description
A poor caching strategy can be as bad as having no caching at all. This problem encompasses a range of issues, from caching too much or too little data, to using inappropriate cache eviction policies, to not having a clear strategy for cache invalidation. An ineffective caching strategy can lead to stale data being served to users, or a low cache hit rate that negates the performance benefits of caching. A well-designed caching strategy is a critical component of any high-performance application.

## Indicators ⟡
- The application is slow, even though the database is not under heavy load.
- The application is making a lot of unnecessary requests to the database or other services.
- The cache hit rate is low.
- Users are seeing stale data.

## Symptoms ▲

- **[High API Latency](high-api-latency.md):** Even for frequently accessed data, response times remain high.
- **[High Database Resource Utilization](high-database-resource-utilization.md):** Databases or other services are hit with repetitive requests for the same data.
- **High Network Traffic:** Unnecessary data transfer between client and server, or between services.
- **Stale Data (if caching is too aggressive):** Users see outdated information if the cache is not invalidated correctly.
- **Cache Misses:** Monitoring shows a high rate of cache misses, indicating data is not being served from the cache as expected.

## Root Causes ▼

- **No Caching Implemented:** The application simply doesn't use any caching mechanisms.
- **Incorrect Cache Key:** The cache key is not granular enough, leading to cache collisions or not caching unique data effectively.
- **Ineffective Cache Invalidation:** Cached data is not being updated or removed when the source data changes.
- **Insufficient Cache Size:** The cache is too small to hold a meaningful amount of data, leading to frequent evictions.
- **Caching the Wrong Data:** Data that changes frequently or is rarely accessed is being cached, providing little benefit.
- **Lack of Cache-Control Headers:** For web applications, improper HTTP cache-control headers prevent browsers or CDNs from caching content effectively.

## Detection Methods ○

- **Network Monitoring:** Analyze network traffic to see if the same data is being repeatedly fetched.
- **Backend System Metrics:** Monitor the load on databases or other services to identify repetitive queries.
- **Cache Hit/Miss Ratios:** If a caching solution is in place, monitor its hit/miss ratio to assess its effectiveness.
- **Application Profiling:** Use profiling tools to identify time spent fetching data from the source that could have been served from a cache.
- **HTTP Header Analysis:** For web applications, inspect HTTP response headers to ensure proper cache-control directives are being sent.

## Examples
An e-commerce website displays product categories. Each time a user navigates to the homepage, the list of categories is fetched directly from the database, even though it rarely changes. This adds unnecessary load to the database and increases page load time. In another case, a microservice retrieves configuration data from a central configuration service on every API call. This data changes infrequently, but there is no local cache, leading to constant network calls and increased latency. This problem is often overlooked in the initial development phases but becomes critical as an application scales. A well-implemented caching strategy can significantly reduce latency and load on backend systems.