---
title: Insufficient Audit Logging
description: Inadequate logging of security-relevant events makes it difficult to
  detect breaches, investigate incidents, or maintain compliance.
category:
- Security
- Logging
- Compliance
related_problems:
- slug: logging-configuration-issues
  similarity: 65%
- slug: log-injection-vulnerabilities
  similarity: 60%
- slug: authentication-bypass-vulnerabilities
  similarity: 55%
- slug: authorization-flaws
  similarity: 55%
- slug: monitoring-gaps
  similarity: 55%
layout: problem
---

## Description

Insufficient audit logging occurs when applications fail to properly log security-relevant events such as authentication attempts, authorization failures, data access, configuration changes, or administrative actions. This lack of comprehensive audit trails makes it difficult to detect security breaches, investigate incidents, maintain regulatory compliance, or establish accountability for system actions.

## Indicators ⟡

- Security incidents cannot be traced through log analysis
- Regulatory compliance audits fail due to missing log data
- Unable to determine who performed specific administrative actions
- Authentication and authorization events not logged
- Data access and modification events not tracked

## Symptoms ▲

- **Missing Security Event Logs:** Critical security events like failed logins or privilege escalations not logged
- **Insufficient Detail in Logs:** Log entries lacking essential information for investigation
- **No User Activity Tracking:** User actions and data access not recorded
- **Administrative Action Gaps:** Administrative changes not logged or attributed
- **Compliance Reporting Difficulties:** Unable to generate required compliance reports from logs

## Root Causes ▼

- **Incomplete Security Event Coverage:** Not identifying all security-relevant events that should be logged
- **Inadequate Log Detail Level:** Logging events without sufficient context or detail for analysis
- **Missing User Attribution:** Not associating actions with specific users or sessions
- **Selective Logging Implementation:** Only logging some types of events while missing others
- **Performance-Driven Log Reduction:** Reducing audit logging to improve performance
- **Lack of Compliance Requirements Understanding:** Not understanding what events need to be logged for compliance

## Detection Methods ○

- **Security Event Coverage Analysis:** Review what security events are currently being logged
- **Compliance Requirement Mapping:** Map compliance requirements to current logging capabilities
- **Incident Investigation Testing:** Test ability to investigate security incidents using available logs
- **Audit Trail Completeness Review:** Verify that complete audit trails exist for critical operations
- **User Activity Tracking Assessment:** Assess coverage of user activity logging

## Examples

A healthcare application processes patient medical records but only logs successful database queries, not failed access attempts or unauthorized data access tries. When a data breach investigation occurs, investigators cannot determine which accounts attempted to access specific patient records, when unauthorized access attempts were made, or trace the full scope of potentially compromised data. The lack of comprehensive audit logging makes it impossible to satisfy HIPAA audit requirements or properly investigate the breach. Another example involves a financial application that logs user logins but not what data users access or modify after authentication. When suspicious activity is detected in customer accounts, investigators can see when users logged in but cannot determine what financial data was viewed, modified, or exported, making it impossible to assess the impact of potential fraud or data theft.