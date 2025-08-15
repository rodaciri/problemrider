---
title: Breaking Changes
description: API updates break existing client integrations, causing compatibility
  issues and forcing costly emergency fixes.
category:
- Architecture
- Code
- Testing
related_problems:
- slug: api-versioning-conflicts
  similarity: 0.65
- slug: rapid-system-changes
  similarity: 0.65
- slug: regression-bugs
  similarity: 0.6
- slug: increasing-brittleness
  similarity: 0.55
- slug: fear-of-breaking-changes
  similarity: 0.55
- slug: brittle-codebase
  similarity: 0.55
layout: problem
---

## Description

Breaking changes occur when modifications to APIs, interfaces, or system behaviors cause existing client integrations to fail or behave incorrectly. These changes violate backward compatibility expectations and force clients to update their code, often unexpectedly and on short notice. Breaking changes can severely damage relationships with integration partners, cause production outages, and create emergency support situations.

## Indicators ⟡

- Client applications stop working after API updates
- Integration partners report sudden failures in their systems
- Support tickets spike immediately following API releases
- Client developers express frustration about unexpected changes
- Emergency rollbacks are needed to restore client functionality

## Symptoms ▲

- **[Customer Dissatisfaction](customer-dissatisfaction.md):** Clients become frustrated with unreliable integrations and unexpected breakages
- **[High Client-Side Resource Consumption](high-client-side-resource-consumption.md):** Clients must dedicate resources to handle breaking changes and emergency fixes
- **[API Versioning Conflicts](api-versioning-conflicts.md):** Multiple API versions must be maintained to support different client needs
- **[Increased Customer Support Load](increased-customer-support-load.md):** Support team handles more integration-related issues
- **[External Service Delays](external-service-delays.md):** Client systems experience downtime while addressing breaking changes
- **[Vendor Relationship Strain](vendor-relationship-strain.md):** Trust erodes between API provider and integration partners

## Root Causes ▼

- **Poor Change Management:** No systematic process for assessing the impact of API modifications
- **Quality Blind Spots:** Changes aren't tested against existing client integrations before release
- **Inadequate Communication:** API changes aren't communicated to clients with sufficient notice or detail
- **Versioning Strategy Gaps:** No clear strategy for maintaining backward compatibility across API versions
- **Development Pressure:** Rush to ship new features overrides consideration of compatibility impact
- **Documentation Lag:** API documentation doesn't accurately reflect current behavior or planned changes
- **Client Usage Ignorance:** No understanding of how clients actually use the API in practice

## Detection Methods ○

- **Integration Test Monitoring:** Automated tests that verify API compatibility with existing client patterns
- **Client Usage Analytics:** Monitor how different API endpoints and parameters are actually used
- **Version Compatibility Testing:** Test new API versions against existing client code and integration patterns
- **Client Feedback Channels:** Establish communication channels for clients to report compatibility issues
- **Change Impact Assessment:** Systematic evaluation of how proposed changes affect existing integrations
- **Breaking Change Alerts:** Automated detection of changes that could break existing client code

## Examples

An e-commerce API changes the data structure of product information responses, moving the price field from a simple number to a complex object with currency and tax information. Hundreds of client applications that parse the price field directly break immediately, causing shopping cart failures and order processing issues across multiple retail websites. The API provider must maintain both old and new response formats while clients scramble to update their code. Another example involves a payment processing API that changes authentication requirements without sufficient notice, causing all client transactions to fail during peak shopping hours, resulting in millions of dollars in lost sales and emergency support calls.