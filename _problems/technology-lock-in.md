---
title: Technology Lock-In
description: A situation where it is difficult or impossible to switch to a new technology
  because of the high cost or effort involved.
category:
- Architecture
- Technology
related_problems:
- slug: technology-isolation
  similarity: 0.635
- slug: technology-stack-fragmentation
  similarity: 0.591
- slug: vendor-lock-in
  similarity: 0.582
- slug: technical-architecture-limitations
  similarity: 0.533
layout: problem
---

## Description
Technology lock-in is a situation where it is difficult or impossible to switch to a new technology because of the high cost or effort involved. This is a common problem in monolithic architectures, where the entire system is built on a single technology stack. Technology lock-in can make it difficult to innovate, and it can also lead to high costs if the technology becomes obsolete or the vendor goes out of business.

## Indicators ⟡
- The entire system is built on a single technology stack.
- It is difficult or impossible to use new technologies in the system.
- The development team is not able to keep up with the latest technology trends.
- The system is expensive to maintain because of the high cost of the technology.

## Symptoms ▲
- **[Inability to Innovate](inability-to-innovate.md):** The development team is not able to use new technologies to improve the system.
- **[Obsolete Technologies](obsolete-technologies.md):** The system is built on obsolete technologies that are no longer supported.
- **[High Maintenance Costs](high-maintenance-costs.md):** The system is expensive to maintain because of the high cost of the technology.
- **[Vendor Lock-In](vendor-lock-in.md):** The company is locked into a single vendor, which can lead to high costs and a lack of flexibility.

## Root Causes ▼
- **[Monolithic Architecture Constraints](monolithic-architecture-constraints.md):** The system is designed as a monolith, with all the components tightly coupled and built on a single technology stack.
- **[Stagnant Architecture](stagnant-architecture.md):** The system does not have a clear architecture, so it is difficult to introduce new technologies.
- **[Inexperienced Developers](inexperienced-developers.md):** Inexperienced developers may not have the skills or the experience to design a system that is not locked into a single technology.
- **[Short-Term Focus](short-term-focus.md):** The team is focused on delivering new features in the short term, and they are not thinking about the long-term health of the codebase.

## Detection Methods ○
- **Technology Stack Analysis:** Analyze the technology stack of the system to identify which technologies are being used.
- **Developer Surveys:** Ask developers if they feel like they are able to use new technologies to improve the system.
- **Cost Analysis:** Analyze the cost of the technology to identify which technologies are the most expensive.

## Examples
A company has a large, monolithic e-commerce application that is built on a proprietary technology stack. The company is not able to use new technologies, such as cloud computing and microservices, because the system is not designed for them. As a result, the company is not able to innovate as quickly as its competitors. The company is also paying a lot of money for the proprietary technology, and they are locked into a single vendor.
