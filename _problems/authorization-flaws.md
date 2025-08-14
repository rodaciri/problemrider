---
title: Authorization Flaws
description: Inadequate access control mechanisms allow users to perform actions or
  access resources beyond their intended permissions.
category:
- Security
- Technical
related_problems:
- slug: authentication-bypass-vulnerabilities
  similarity: 75%
- slug: password-security-weaknesses
  similarity: 55%
- slug: insufficient-audit-logging
  similarity: 55%
- slug: session-management-issues
  similarity: 50%
layout: problem
---

## Description

Authorization flaws occur when access control mechanisms fail to properly restrict user actions and resource access according to their intended permissions. These vulnerabilities allow users to perform unauthorized operations, access restricted data, or escalate their privileges beyond what should be permitted, potentially compromising system security and data integrity.

## Indicators ⟡

- Users can access resources or perform actions outside their assigned roles
- Horizontal privilege escalation allows access to other users' data
- Vertical privilege escalation allows users to gain administrative privileges
- Access control decisions made on client-side rather than server-side
- Inconsistent permission enforcement across different system components

## Symptoms ▲

- **Horizontal Privilege Escalation:** Users accessing other users' data at the same permission level
- **Vertical Privilege Escalation:** Users gaining higher-level privileges than assigned
- **Resource Access Violations:** Unauthorized access to files, databases, or system resources
- **Function-Level Access Control Bypass:** Users executing administrative or restricted functions
- **Inconsistent Permission Enforcement:** Different system components applying different access rules
- **[Authentication Bypass Vulnerabilities](authentication-bypass-vulnerabilities.md):** Authorization flaws can sometimes lead to or be exploited by authentication bypasses

## Root Causes ▼

- **Missing Access Control Checks:** Protected resources lacking proper authorization validation
- **Insecure Direct Object References:** Using user-controllable parameters to access objects without authorization
- **Client-Side Access Control:** Relying on client-side restrictions instead of server-side enforcement
- **Role-Based Access Control Failures:** Improper role assignment or role hierarchy implementation
- **Path Traversal Vulnerabilities:** Inadequate validation allowing access to unauthorized file system locations
- **Function-Level Access Control Gaps:** Administrative functions accessible to non-administrative users

## Detection Methods ○

- **Access Control Testing:** Test all protected resources and functions for proper authorization
- **Privilege Escalation Testing:** Attempt to escalate privileges through various attack vectors
- **Role-Based Access Testing:** Verify that role assignments properly restrict access
- **Direct Object Reference Testing:** Test manipulation of object identifiers to access unauthorized resources
- **Function-Level Authorization Review:** Review all administrative and sensitive functions for proper access control

## Examples

A project management application allows users to view project details by accessing URLs like `/project/123`. Users discover they can change the project ID to access any project in the system, including confidential projects they shouldn't see. The application authenticates users but fails to verify that they have permission to access the specific project requested, allowing anyone to view any project data. Another example involves a content management system where regular users can access administrative functions by directly navigating to admin URLs. While the UI hides admin menu items from regular users, the server-side doesn't check user roles before executing administrative operations, allowing privilege escalation through direct URL manipulation.