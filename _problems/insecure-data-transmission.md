---
title: Insecure Data Transmission
description: Sensitive data transmitted without proper encryption or security controls,
  exposing it to interception and unauthorized access.
category:
- Performance
- Security
related_problems:
- slug: silent-data-corruption
  similarity: 0.55
layout: problem
---

## Description

Insecure data transmission occurs when sensitive information is sent over networks without adequate encryption or security controls, making it vulnerable to interception, eavesdropping, and man-in-the-middle attacks. This includes transmitting data over unencrypted channels, using weak encryption methods, or failing to properly validate secure connections.

## Indicators ⟡

- Sensitive data transmitted over HTTP instead of HTTPS
- Applications accepting invalid or self-signed SSL certificates
- Weak encryption algorithms or protocols used for data transmission
- Authentication credentials sent in plain text
- Personal or financial information transmitted without encryption

## Symptoms ▲

- **Unencrypted Data Transmission:** Sensitive data sent over plain HTTP or other unencrypted protocols
- **Weak Encryption Usage:** Using outdated or weak cryptographic protocols like SSL 2.0 or weak ciphers
- **Certificate Validation Bypass:** Applications ignoring SSL certificate validation errors
- **Mixed Content Issues:** HTTPS pages loading resources over HTTP
- **Credential Exposure:** Login credentials transmitted without proper encryption

## Root Causes ▼

- **Missing HTTPS Implementation:** Web applications not implementing SSL/TLS encryption
- **Weak Cryptographic Standards:** Using outdated encryption protocols or weak cipher suites
- **Certificate Validation Issues:** Applications not properly validating SSL certificates
- **Development Environment Configuration:** Using insecure settings from development in production
- **Third-Party Integration Issues:** External services or APIs not supporting secure transmission
- **Legacy System Constraints:** Older systems unable to support modern encryption standards

## Detection Methods ○

- **Network Traffic Analysis:** Monitor network communications for unencrypted sensitive data
- **SSL/TLS Configuration Testing:** Test encryption implementation and certificate validation
- **Mixed Content Detection:** Identify HTTPS pages loading HTTP resources
- **Protocol Analysis:** Analyze which encryption protocols and cipher suites are used
- **Certificate Validation Testing:** Test application behavior with invalid certificates

## Examples

An e-commerce website collects credit card information over HTTPS but submits it to the payment processor over HTTP. While the initial form appears secure to users, the actual payment data is transmitted in plain text, making it vulnerable to interception. Network analysis reveals that credit card numbers, expiration dates, and CVV codes are visible to anyone monitoring network traffic. Another example involves a mobile banking application that validates SSL certificates during development but disables certificate validation in production to avoid connectivity issues with load balancers. This makes the application vulnerable to man-in-the-middle attacks where attackers can intercept and modify banking transactions by presenting fake certificates that the application accepts without validation.