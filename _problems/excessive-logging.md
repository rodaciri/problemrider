---
title: Excessive Logging
description: Applications generate a very high volume of logs, consuming excessive
  disk space and potentially impacting performance.
category:
- Performance
- Maintenance
related_problems:
- slug: log-spam
  similarity: 0.753
- slug: logging-configuration-issues
  similarity: 0.712
- slug: increased-error-rates
  similarity: 0.668
- slug: high-database-resource-utilization
  similarity: 0.635
- slug: slow-database-queries
  similarity: 0.621
layout: problem
---

## Description
Excessive logging can have a significant impact on application performance and maintainability. When an application logs too much information, it can consume a large amount of disk space, slow down the application, and make it difficult to find important information in the logs. A well-designed logging strategy should be focused on logging only the information that is necessary for debugging and monitoring. This requires a deep understanding of the application and its use cases.

## Indicators ⟡
- Log files are growing at an unexpectedly high rate.
- You are paying a lot of money for log storage and analysis.
- It is difficult to find important information in your logs because of the noise.
- Your application is slow, and you suspect that logging is a contributing factor.

## Symptoms ▲

- **Rapid Disk Space Consumption:** Log files grow very quickly, filling up disk partitions and potentially causing application outages.
- **[Excessive Disk I/O](excessive-disk-io.md):** Constant writing to disk for logging purposes can lead to increased disk I/O and slower application performance.
- **Slow Log Analysis:** The sheer volume of logs makes it difficult and time-consuming to search, filter, and analyze logs for debugging or monitoring.
- **Increased Network Traffic:** If logs are shipped to a centralized logging system, excessive logging can consume significant network bandwidth.
- **Higher Cloud Costs:** Increased storage and network transfer costs for logging services.

## Root Causes ▼

- **Overly Verbose Logging Levels:** Applications are configured to log at a very low level (e.g., `DEBUG` or `TRACE`) in production environments.
- **Logging Sensitive Data:** Sensitive information (e.g., entire request/response bodies, user data) is logged unnecessarily.
- **Inefficient Logging Framework Usage:** The logging framework is used in a way that is not performant (e.g., synchronous logging in a high-throughput path).
- **Uncontrolled Loop Logging:** Logging statements are placed inside tight loops, generating a massive number of log entries.
- **Lack of Log Rotation/Retention Policies:** Log files are not regularly rotated, compressed, or deleted, leading to unbounded growth.
- **Debugging Left in Production:** Debugging statements or temporary logging added during development are not removed before deployment to production.

## Detection Methods ○

- **Disk Usage Monitoring:** Monitor disk space consumption on servers where logs are stored.
- **I/O Monitoring:** Use system monitoring tools to track disk write operations related to logging.
- **Log Volume Analysis:** Use log aggregation tools to analyze the volume of logs generated per application or service.
- **Code Review:** Look for logging statements that are overly verbose or placed in performance-critical sections.
- **Configuration Review:** Check logging configurations to ensure appropriate logging levels are set for different environments.

## Examples
A microservice processes millions of events per day. A developer, while debugging an issue, sets the logging level to `DEBUG` and forgets to revert it before deploying to production. Within hours, the server's disk space is completely consumed by log files, causing the service to crash. In another case, an application logs the entire JSON payload of every incoming API request at an `INFO` level. This leads to massive log files and significant network traffic when these logs are shipped to a centralized logging system, even though only a small part of the payload is relevant for most debugging. While logging is crucial for observability, excessive logging can become a performance and cost burden, requiring a balance between providing enough information and avoiding unnecessary overhead.