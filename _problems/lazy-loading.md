---
title: Lazy Loading
description: The use of lazy loading in an ORM framework leads to a large number of
  unnecessary database queries, which can significantly degrade application performance.
category:
- Technical
- Performance
- Database
related_problems:
- slug: n-plus-one-query-problem
  similarity: 70%
- slug: high-number-of-database-queries
  similarity: 65%
- slug: imperative-data-fetching-logic
  similarity: 65%
- slug: slow-database-queries
  similarity: 60%
- slug: database-query-performance-issues
  similarity: 55%
layout: problem
---

## Description
Lazy loading is a design pattern that is used to defer the initialization of an object until it is actually needed. This can be a useful pattern in some cases, but it can also lead to performance problems. In the context of an object-relational mapping (ORM) framework, lazy loading can lead to the N+1 query problem. This is because the ORM will execute a separate query for each object that is lazily loaded. This can result in a large number of unnecessary database queries, which can significantly degrade application performance.

## Indicators ⟡
- The application is making a large number of small, fast queries instead of a few larger, slower queries.
- The application is slow, even though the database server is not under heavy load.
- The database logs are full of similar-looking queries.
- The application is using an ORM framework, and you are not sure if it is configured correctly.

## Symptoms ▲
- **[N+1 Query Problem](n-plus-one-query-problem.md):** Lazy loading is a major cause of the N+1 query problem.
- **[Slow Application Performance](slow-application-performance.md):** The application is slow to respond to user requests.
- **[High Number of Database Queries](high-number-of-database-queries.md):** The application is making a large number of database queries.
- **[Poor User Experience (UX) Design](poor-user-experience-ux-design.md):** The application is slow and unresponsive, which leads to a poor user experience.

## Root Causes ▼
- **Default ORM Configuration:** Many ORM frameworks use lazy loading by default.
- **Lack of ORM Knowledge:** Developers may not be aware of the performance implications of lazy loading.
- **Convenience:** Lazy loading can be a convenient way to fetch data, but it is not always the most efficient way.
- **Lack of a Data Fetching Strategy:** The team does not have a clear plan for how to fetch data from the database.

## Detection Methods ○
- **Application Performance Monitoring (APM):** APM tools can often detect and flag the N+1 query problem, which is a common symptom of lazy loading.
- **SQL Logging:** Enable SQL logging in your application or database and inspect the logs for a large number of similar-looking queries.
- **Code Review:** During code reviews, specifically look for code that is using lazy loading.
- **ORM Profiling:** Some ORM frameworks provide tools for profiling the performance of your queries.

## Examples
A web application is using an ORM framework to fetch data from the database. The application has a page that displays a list of users and their posts. The application is using lazy loading to fetch the posts for each user. This means that the application first executes a query to get the list of users. Then, for each user, it executes another query to get their posts. This results in a large number of unnecessary database queries, which makes the page slow to load. The problem could be solved by using eager loading to fetch the users and their posts in a single query.
