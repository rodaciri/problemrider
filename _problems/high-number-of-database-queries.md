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
- **[Slow Application Performance](slow-application-performance.md):** The application is slow to respond to user requests.
- **[High Database Resource Utilization](high-database-resource-utilization.md):** The database server is under heavy load, even though the application is not doing much work.
- **[Poor User Experience (UX) Design](poor-user-experience-ux-design.md):** The application is slow and unresponsive, which leads to a poor user experience.
- **[Increased Cost of Development](increased-cost-of-development.md):** The high database load may require more powerful and expensive hardware.

## Root Causes ▼
- **[N+1 Query Problem](n-plus-one-query-problem.md):** The N+1 query problem is a major cause of a high number of database queries.
- **[Lack of Caching:]**(poor-caching-strategy.md) A lack of caching can lead to a high number of database queries, as the application has to go to the database for the same data over and over again.
- **Poorly Designed Data Access Layer:** A poorly designed data access layer can make it difficult to fetch data efficiently.
- **Lack of a Bulk API:** The absence of a bulk API can force the application to make a large number of individual requests to the database.
- **Chatty Application:** The application is making a large number of small requests to the database, rather than a few larger requests.

## Detection Methods ○
- **Application Performance Monitoring (APM):** APM tools can often detect and flag a high number of database queries.
- **SQL Logging:** Enable SQL logging in your application or database and inspect the logs for a large number of queries being executed in a short period of time.
- **Code Review:** During code reviews, specifically look for code that is making a large number of database queries.
- **Load Testing:** Use load testing to see how the application behaves under heavy load.

## Examples
A web application has a page that displays a list of products. For each product, it also displays the name of the category that the product belongs to. The application first executes a query to get the list of products. Then, for each product, it executes another query to get the name of the category. This results in a large number of database queries, which makes the page slow to load. The problem could be solved by using a single query that joins the products and categories tables.
