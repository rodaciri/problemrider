---
title: N+1 Query Problem
description: An application makes numerous unnecessary database calls to fetch related
  data where a single, more efficient query would suffice, causing significant performance
  degradation.
category:
- Data
- Performance
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
- slug: inefficient-database-indexing
  similarity: 0.55
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
- [Unbounded Data Structures](unbounded-data-structures.md) <span class="info-tooltip" title="Confidence: 0.390, Strength: 0.654">ⓘ</span>
<br/>  Excessive database calls due to inefficient querying can lead to the accumulation of unbounded data structures in memory, as each call generates more data without proper management, ultimately exhausting resources and degrading performance in legacy systems.
- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.382, Strength: 0.582">ⓘ</span>
<br/>  Excessive database calls lead to slower response times, causing services that depend on timely API responses to exceed their configured timeouts, thereby indicating underlying inefficiencies in data retrieval.
- [Inefficient Development Environment](inefficient-development-environment.md) <span class="info-tooltip" title="Confidence: 0.382, Strength: 0.656">ⓘ</span>
<br/>  The excessive database calls due to inefficient querying lead to slow response times, which in turn frustrates developers and hinders their productivity within the development environment, making the performance issues more apparent.
- [Increased Customer Support Load](increased-customer-support-load.md) <span class="info-tooltip" title="Confidence: 0.354, Strength: 0.619">ⓘ</span>
<br/>  Excessive database calls lead to slower application response times, frustrating users as they struggle to complete tasks efficiently, which in turn results in a higher volume of support requests.
- [Unreleased Resources](unreleased-resources.md) <span class="info-tooltip" title="Confidence: 0.319, Strength: 0.609">ⓘ</span>
<br/>  Excessive database calls from inefficient querying can lead to a backlog of open connections and unreleased resources as the system struggles to manage the high volume of requests, indicating performance issues rooted in the query design.
- [Slow Development Velocity](slow-development-velocity.md) <span class="info-tooltip" title="Confidence: 0.317, Strength: 0.638">ⓘ</span>
<br/>  The excessive database calls lead to slower response times and increased debugging complexity, ultimately hindering the team's ability to efficiently implement new features and resolve issues, thereby reducing overall development velocity.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

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
