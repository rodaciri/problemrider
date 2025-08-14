---
title: Long Build and Test Times
description: A situation where it takes a long time to build and test a system.
category:
- Process
- Productivity
related_problems:
- slug: inefficient-development-environment
  similarity: 0.624
- slug: testing-environment-fragility
  similarity: 0.613
- slug: tool-limitations
  similarity: 0.604
- slug: deadline-pressure
  similarity: 0.586
- slug: slow-development-velocity
  similarity: 0.585
layout: problem
---

## Description
Long build and test times are a situation where it takes a long time to build and test a system. This is a common problem in large, monolithic architectures, where the entire system must be built and tested at once. Long build and test times can lead to a slowdown in development velocity, and they can also be a major source of frustration for developers.

## Indicators ⟡
- It takes a long time to get feedback on a change.
- Developers are often blocked waiting for the build to finish.
- The build is often broken.
- Developers are not able to run the tests on their local machines.

## Symptoms ▲
- **[Slow Development Velocity](slow-development-velocity.md):** It takes a long time to get things done because of the long build and test times.
- **[Developer Frustration and Burnout](developer-frustration-and-burnout.md):** Developers get frustrated with the long build and test times and the lack of progress.
- **[Lower Code Quality](lower-code-quality.md):** The code quality suffers because developers are not able to get fast feedback on their changes.
- **[Quality Blind Spots](quality-blind-spots.md):** Developers are not able to run all the tests on their local machines, so they are not able to get a complete picture of the quality of their code.

## Root Causes ▼
- **[Monolithic Architecture Constraints](monolithic-architecture-constraints.md):** The system is designed as a monolith, with all the components tightly coupled and built at once.
- **[Inefficient Processes](inefficient-processes.md):** The build scripts are not optimized, so they take a long time to run.
- **[Flaky Tests](flaky-tests.md):** The test suite is slow, so it takes a long time to run.
- **[Complex Deployment Process](complex-deployment-process.md):** There is no CI system in place, so developers have to run the build and tests manually.

## Detection Methods ○
- **Build and Test Time Monitoring:** Monitor the build and test times to identify which parts of the build are the slowest.
- **Developer Surveys:** Ask developers if they feel like they are able to get fast feedback on their changes.
- **Build and Test Log Analysis:** Analyze the build and test logs to identify errors and warnings.

## Examples
A company has a large, monolithic e-commerce application. It takes over an hour to build and test the application. The developers are often blocked waiting for the build to finish. The build is often broken, and it can take hours to fix it. The developers are not able to run all the tests on their local machines, so they are not able to get a complete picture of the quality of their code. As a result, the development velocity is slow, and the code quality is poor.
