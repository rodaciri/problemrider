---
title: Password Security Weaknesses
description: Weak password policies, inadequate storage mechanisms, and poor authentication
  practices create security vulnerabilities.
category:
- Security
related_problems:
- slug: authentication-bypass-vulnerabilities
  similarity: 0.55
- slug: secret-management-problems
  similarity: 0.55
- slug: authorization-flaws
  similarity: 0.55
layout: problem
---

## Description

Password security weaknesses occur when systems implement inadequate password policies, use insecure storage methods, or have poor password management practices. These vulnerabilities make user accounts susceptible to brute force attacks, dictionary attacks, credential stuffing, and unauthorized access through compromised or weak passwords.


## Indicators ⟡

- Systems allow weak or easily guessable passwords
- Passwords stored in plain text or using weak hashing algorithms
- No account lockout mechanisms for failed login attempts
- Password reset processes that are easily exploitable
- Default or shared passwords used across systems or accounts


## Symptoms ▲

- [Insufficient Audit Logging](insufficient-audit-logging.md) <span class="info-tooltip" title="Confidence: 0.425, Strength: 0.850">ⓘ</span>
<br/>  In legacy systems, weak password policies and poor authentication practices often lead to a lack of comprehensive audit logging, as inadequate security measures fail to capture and record relevant security events, hindering breach detection and incident investigation.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○

- **Password Policy Analysis:** Review password requirements and enforcement mechanisms
- **Password Storage Audit:** Examine how passwords are hashed and stored in databases
- **Brute Force Testing:** Test system resistance to automated password attacks
- **Password Reset Security Testing:** Analyze password reset process for vulnerabilities
- **Default Credential Scanning:** Check for systems using default or common passwords


## Examples

A web application stores user passwords using MD5 hashing without salt. When the database is compromised, attackers use rainbow tables to quickly reverse the MD5 hashes and recover original passwords for most users. The application also allows passwords as simple as "123456" and doesn't implement any account lockout after failed login attempts, making brute force attacks trivial. Another example involves a corporate system that ships with default administrator credentials "admin/admin" and many installations never change these defaults. Attackers use automated scanners to find systems with default credentials and gain administrative access. The password reset functionality sends new passwords via email in plain text, creating another vulnerability where email interception can compromise accounts.
