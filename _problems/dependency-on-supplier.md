---
title: "Dependency on Supplier"
description: "External vendors control critical parts of the system, reducing organizational flexibility and increasing lock-in risk."
category: ['Vendor Management', 'Risk Management', 'Architecture']
related_problems: ['vendor-dependency-entrapment', 'single-points-of-failure', 'technology-lock-in']
layout: problem
---

## Description

Dependency on supplier occurs when an organization becomes overly reliant on external vendors for critical system components, services, or expertise, creating strategic vulnerabilities and reducing autonomy. This dependency can manifest as technical lock-in, knowledge dependency, or operational reliance that makes it difficult or expensive to change suppliers or bring capabilities in-house.

## Indicators ⟡

- Critical system functionality depends on vendor-specific technologies or services
- Organization lacks internal expertise to maintain or modify vendor-supplied components
- Switching costs to alternative suppliers are prohibitively high
- Vendor has significant control over roadmap, pricing, or service levels
- Organization cannot operate effectively if vendor relationship ends

## Symptoms ▲

- **[Vendor Lock-In](vendor-lock-in.md):** High switching costs prevent changing suppliers despite problems
- **Reduced Negotiating Power:** Dependency weakens organization's position in vendor negotiations
- **Innovation Constraints:** Development options limited by vendor capabilities and roadmap
- **Cost Escalation:** Vendor can increase prices knowing switching is difficult
- **Service Quality Degradation:** Service levels decline because vendor knows client has few alternatives

## Root Causes ▼

- **Build vs Buy Imbalance:** Over-reliance on external solutions without considering strategic implications
- **Insufficient Vendor Management:** Inadequate oversight and management of vendor relationships
- **[Technical Architecture Limitations](technical-architecture-limitations.md):** Architecture choices that create vendor dependencies
- **Knowledge Transfer Failures:** Failure to acquire necessary knowledge from vendors
- **Short-term Cost Focus:** Prioritizing immediate cost savings over long-term flexibility

## Detection Methods ○

- **Vendor Dependency Mapping:** Identify and assess all critical vendor dependencies
- **Switching Cost Analysis:** Calculate costs and effort required to change vendors for critical services
- **Vendor Performance Monitoring:** Track vendor performance and relationship health over time
- **Alternative Supplier Assessment:** Evaluate availability and viability of alternative suppliers
- **Internal Capability Gap Analysis:** Assess organization's ability to reduce vendor dependencies

## Examples

A company builds their entire customer management system on a proprietary platform from a specific vendor. Over five years, they develop hundreds of custom integrations and workflows specific to that platform. When the vendor significantly increases licensing costs and reduces support quality, the company discovers that migrating to an alternative would require rebuilding most of their system at a cost of millions of dollars and years of effort. Another example involves an organization that outsources all database administration to a vendor, failing to maintain any internal database expertise. When performance problems arise, they cannot diagnose issues independently and must rely entirely on the vendor's availability and expertise, leading to extended downtime and high support costs.