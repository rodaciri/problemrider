---
title: N+1 Query Problem
description: An application makes numerous unnecessary database calls to fetch related
  data where a single, more efficient query would suffice, causing significant performance
  degradation.
category:
- Performance
- Database
related_problems:
- slug: high-number-of-database-queries
  similarity: 0.75
- slug: lazy-loading
  similarity: 0.7
- slug: imperative-data-fetching-logic
  similarity: 0.7
- slug: database-query-performance-issues
  similarity: 0.65
- slug: slow-database-queries
  similarity: 0.65
layout: problem
---

## Description
The N+1 query problem is a common performance issue that occurs when an application makes a query to retrieve a list of items, and then makes an additional query for each of those items to retrieve related data. This results in a large number of small, inefficient queries, which can significantly slow down the application. This problem is often introduced by object-relational mapping (ORM) frameworks if they are not used carefully. Solving the N+1 problem typically involves fetching all the required data in a single, more efficient query.

## Indicators ⟡
- A page that displays a list of items is slow to load.
- The database is under heavy load, even though the application is not doing much work.
- You see a large number of similar-looking queries in your database logs.
- Your application is making a lot of small, fast queries instead of a few larger, slower queries.

## Symptoms ▲

- **High Number of Database Queries:** A single application request results in a surprisingly large number of simple, repetitive database queries being executed.
- **[Slow Database Queries](slow-database-queries.md):** Individual queries might be fast, but their sheer number leads to overall slowness.
- **[Slow Application Performance](slow-application-performance.md):** The cumulative effect of many queries significantly degrades the application's responsiveness.
- **Slow Response Times for Lists/Collections:** API endpoints or pages that display a list of items are significantly slower than those that display a single item.
- **[High Database Resource Utilization](high-database-resource-utilization.md):** The database server experiences high load due to the sheer volume of small queries, even if each individual query is fast.
- **Log Spam:** Application or database logs are filled with a large number of similar-looking queries.

## Root Causes ▼

- **Lazy Loading:** Object-Relational Mapping (ORM) frameworks often use a "lazy loading" strategy by default. When you access a related collection of objects, the ORM executes a new query for each item in the main collection.
- **Imperative Data Fetching Logic:** The code is written in a way that iterates over a collection and fetches related data inside the loop, rather than fetching all the necessary data upfront.
- **Lack of ORM Knowledge:** Developers may not be aware of the N+1 problem or may not know how to use their ORM's features (e.g., eager loading, joins) to avoid it.
- **Separation of Concerns:** Code may be structured in a way that a high-level function retrieves a list of items, and then passes each item to another function that is responsible for fetching its related data, hiding the fact that this is happening in a loop.

## Detection Methods ○

- **Application Performance Monitoring (APM):** APM tools can often detect and flag N+1 query patterns automatically.
- **SQL Logging:** Enable SQL logging in your application or database and inspect the logs for a large number of identical queries being executed in a short period of time.
- **Code Review:** During code reviews, specifically look for loops that contain database queries or calls to data-fetching functions.
- **Specialized Libraries:** Some libraries and tools (like `bullet` for Ruby on Rails) are designed specifically to detect the N+1 query anti-pattern during development.

## Examples
A blog application displays a list of the 10 most recent posts on its homepage. For each post, it also displays the author's name. The code first executes one query to get the 10 posts (`SELECT * FROM posts ORDER BY created_at DESC LIMIT 10`). Then, it loops through these 10 posts and, for each one, executes a new query to get the author's name (`SELECT name FROM authors WHERE id = ?`). This results in 1 (for the posts) + 10 (for the authors) = 11 total queries.

**Problematic code**  

This piece of code shows the problematic N+1 pattern:

```python
posts = Post.objects.all().limit(10)
for post in posts:
  # This line triggers a new query for every single post!
  print(f"{post.title} by {post.author.name}")
```

**Corrected version**  
The corrected version uses eager loading. This will fetch all posts and their authors in just two queries (or one with a join):

```python
posts = Post.objects.select_related('author').all().limit(10)
for post in posts:
  print(f"{post.title} by {post.author.name}")
```

This is an extremely common problem in applications that use ORMs, especially in legacy codebases where performance was not a primary concern during initial development.