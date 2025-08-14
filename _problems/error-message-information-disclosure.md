---
title: Error Message Information Disclosure
description: Error messages reveal sensitive system information that can be exploited
  by attackers to understand system architecture and vulnerabilities.
category:
- Security
- Error Handling
- Information Disclosure
related_problems:
- slug: buffer-overflow-vulnerabilities
  similarity: 0.582
- slug: inadequate-error-handling
  similarity: 0.57
- slug: log-injection-vulnerabilities
  similarity: 0.526
- slug: stack-overflow-errors
  similarity: 0.519
- slug: poor-system-environment
  similarity: 0.512
layout: problem
---

## Description

Error message information disclosure occurs when applications reveal sensitive technical information through error messages, stack traces, or debug output that can help attackers understand system architecture, database schemas, file paths, or internal application logic. This information can be used to craft more targeted attacks or identify specific vulnerabilities.

## Indicators ⟡

- Database error messages revealing table names, column names, or query structure
- Stack traces exposing internal file paths, class names, or system architecture
- Error messages containing system configuration details or version information
- Debug information displayed to end users in production environments
- Error responses revealing existence or non-existence of resources

## Symptoms ▲

- **Database Schema Exposure:** Database error messages revealing table and column names
- **System Path Disclosure:** File system paths exposed through error messages
- **Stack Trace Information Leakage:** Full stack traces visible to end users
- **Version Information Exposure:** Software versions and library details revealed in errors
- **Internal Logic Revelation:** Error messages exposing business logic or validation rules

## Root Causes ▼

- **Development Error Handling in Production:** Debug-level error handling not changed for production
- **Generic Exception Display:** Displaying full exception details to end users
- **Insufficient Error Message Sanitization:** Not filtering sensitive information from error responses
- **Missing Custom Error Pages:** Using default framework error pages that expose system details
- **Inadequate Error Classification:** Not distinguishing between internal and user-facing errors
- **Debug Mode Enabled in Production:** Development debugging features active in production

## Detection Methods ○

- **Error Message Security Review:** Review all error messages for sensitive information disclosure
- **Production Error Testing:** Test error conditions in production-like environments
- **Error Response Analysis:** Analyze error responses for information that could aid attackers
- **Security Testing for Information Disclosure:** Test various error conditions for information leakage
- **Error Handling Code Audit:** Review error handling code for appropriate information filtering

## Examples

A web application's login form displays detailed database error messages when SQL queries fail, revealing the complete database schema including table names like "users", "admin_accounts", and "payment_info" along with column names like "password_hash" and "credit_card_number". Attackers can use this information to craft SQL injection attacks targeting specific tables and columns. Another example involves a file upload service that displays full Java stack traces when file processing fails, revealing internal application architecture, library versions, and file system paths like "/opt/app/uploads/processing/temp/". This information helps attackers understand the system structure and identify potential attack vectors like directory traversal or dependency-specific vulnerabilities.