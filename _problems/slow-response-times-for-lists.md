---
title: Slow Response Times for Lists
description: Web pages or API endpoints that display lists of items are significantly
  slower to load than those that display single items, often due to inefficient data
  fetching.
category:
- Performance
- Database
related_problems:
- slug: slow-application-performance
  similarity: 70%
- slug: high-api-latency
  similarity: 65%
- slug: network-latency
  similarity: 60%
- slug: database-query-performance-issues
  similarity: 60%
- slug: external-service-delays
  similarity: 60%
layout: problem
---

## Description
Slow response times for lists is a common performance problem in web applications. It occurs when a page or API endpoint that displays a list of items is significantly slower to load than one that displays a single item. This is often a sign of an inefficient data fetching strategy, such as the N+1 query problem. Slow response times for lists can have a major impact on the user experience, and they can be a major source of frustration for users.

## Indicators ⟡
- A page that displays a list of items takes a long time to load.
- The application is making a large number of database queries when it is loading a list of items.
- The application is not using pagination to limit the number of items that are displayed on a single page.
- The application is not using a caching layer.

## Symptoms ▲
- **[Slow Application Performance](slow-application-performance.md):** The application is slow to respond to user requests.
- **[Poor User Experience (UX) Design](poor-user-experience-ux-design.md):** The application is slow and unresponsive, which leads to a poor user experience.
- **[Declining Business Metrics](declining-business-metrics.md):** Users are more likely to leave a website if it is slow to load.
- **[Declining Business Metrics](declining-business-metrics.md):** A slow website can have a negative impact on the conversion rate.

## Root Causes ▼
- **[N+1 Query Problem](n-plus-one-query-problem.md):** The N+1 query problem is a major cause of slow response times for lists.
- **[Unbounded Data Growth](unbounded-data-growth.md):** A lack of pagination can lead to slow response times for lists, as the application has to load all of the items in the list at once.
- **[Poor Caching Strategy](poor-caching-strategy.md):** A lack of caching can lead to slow response times for lists, as the application has to go to the database for the same data over and over again.
- **[Slow Database Queries](slow-database-queries.md):** The database queries that are used to fetch the list of items may be inefficient.
- **Large Payload:** The amount of data that is being returned for each item in the list may be too large.

## Detection Methods ○
- **Application Performance Monitoring (APM):** APM tools can often detect and flag slow response times for lists.
- **Browser Developer Tools:** Use the browser developer tools to see how long it takes to load a page.
- **Load Testing:** Use load testing to see how the application behaves under heavy load.
- **Code Review:** During code reviews, specifically look for code that is fetching a list of items from the database.

## Examples
A web application has a page that displays a list of products. The page is very slow to load. The reason for this is that the application is not using pagination, and it is trying to load all of the products in the database at once. The problem could be solved by using pagination to limit the number of products that are displayed on a single page.
