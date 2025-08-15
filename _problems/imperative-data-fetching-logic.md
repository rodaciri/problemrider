---
title: Imperative Data Fetching Logic
description: The application code is written in a way that fetches data in a loop,
  rather than using a more efficient, declarative approach, leading to performance
  problems.
category:
- Architecture
- Database
- Performance
related_problems:
- slug: lazy-loading
  similarity: 0.75
- slug: high-number-of-database-queries
  similarity: 0.7
- slug: slow-database-queries
  similarity: 0.7
- slug: n-plus-one-query-problem
  similarity: 0.7
- slug: inefficient-code
  similarity: 0.65
- slug: inefficient-database-indexing
  similarity: 0.6
layout: problem
---

## Description
Imperative data fetching logic is a common performance problem in database-driven applications. It occurs when the application code is written in a way that fetches data in a loop, rather than using a more efficient, declarative approach. This can lead to a number of problems, including the N+1 query problem, slow application performance, and a high number of database queries. Imperative data fetching logic is often a sign of a lack of experience with declarative programming or a lack of a clear data fetching strategy.

## Indicators ⟡
- The application code contains loops that fetch data from the database.
- The application is making a large number of small, fast queries instead of a few larger, slower queries.
- The application is slow, even though the database server is not under heavy load.
- The database logs are full of similar-looking queries.

## Symptoms ▲
- **[N+1 Query Problem](n-plus-one-query-problem.md):** Imperative data fetching logic is a major cause of the N+1 query problem.
- **[Slow Application Performance](slow-application-performance.md):** The application is slow to respond to user requests.
- **[High Number of Database Queries](high-number-of-database-queries.md):** The application is making a large number of database queries.
- **[Difficult to Read Code:]**(complex-and-obscure-logic.md) Imperative data fetching logic can be difficult to read and understand.

## Root Causes ▼
- **Lack of Experience with Declarative Programming:** Developers may not be familiar with declarative programming techniques, such as those used in SQL and ORM frameworks.
- **Lack of a Data Fetching Strategy:** The team does not have a clear plan for how to fetch data from the database.
- **Convenience:** It can be convenient to write imperative data fetching logic, but it is not always the most efficient way.
- **Lack of a Bulk API:** The absence of a bulk API can force the application to make a large number of individual requests to the database.

## Detection Methods ○
- **Code Review:** During code reviews, specifically look for loops that contain database queries.
- **Application Performance Monitoring (APM):** APM tools can often detect and flag the N+1 query problem, which is a common symptom of imperative data fetching logic.
- **SQL Logging:** Enable SQL logging in your application or database and inspect the logs for a large number of similar-looking queries.
- **Static Analysis:** Use static analysis tools to identify loops that contain database queries.

## Examples
A web application has a page that displays a list of products and their prices. The application first executes a query to get the list of products. Then, for each product, it executes another query to get the price. This is an example of imperative data fetching logic. The problem could be solved by using a single query that joins the products and prices tables. This would be a more efficient and declarative way to fetch the data.
