---
title: REST API Design Issues
description: Poor REST API design violates REST principles, creates usability problems,
  and leads to inefficient client-server interactions.
category:
- Architecture
- Requirements
related_problems:
- slug: database-schema-design-problems
  similarity: 0.55
- slug: api-versioning-conflicts
  similarity: 0.55
- slug: poor-user-experience-ux-design
  similarity: 0.5
- slug: legacy-api-versioning-nightmare
  similarity: 0.5
- slug: poor-interfaces-between-applications
  similarity: 0.5
layout: problem
---

## Description

REST API design issues occur when APIs violate REST architectural principles, use inconsistent conventions, or create poor developer experiences through unclear resource modeling, inappropriate HTTP method usage, or inconsistent response formats. Poor REST design makes APIs difficult to understand, integrate with, and maintain, leading to increased development time and integration errors.


## Indicators ⟡

- API endpoints don't follow consistent naming conventions
- HTTP methods used inappropriately for operations
- Response formats inconsistent across different endpoints
- Resource relationships poorly modeled or unclear
- API documentation doesn't match actual implementation


## Symptoms ▲

- [Upstream Timeouts](upstream-timeouts.md) <span class="info-tooltip" title="Confidence: 0.532, Strength: 0.722">ⓘ</span>
<br/>  Inefficient client-server interactions due to poor API design can lead to prolonged response times, causing consuming services to exceed their timeout thresholds and fail to receive the necessary data.
- [Inefficient Code](inefficient-code.md) <span class="info-tooltip" title="Confidence: 0.367, Strength: 0.836">ⓘ</span>
<br/>  Inefficient code often arises from poorly designed APIs that lead to excessive data processing or unnecessary resource usage, as clients may need to handle more data than required or make multiple round trips due to lack of clear endpoints, thus indicating flaws in the API's structure and efficiency.
- [Poor Caching Strategy](poor-caching-strategy.md) <span class="info-tooltip" title="Confidence: 0.335, Strength: 0.717">ⓘ</span>
<br/>  Inefficient client-server interactions in poorly designed APIs often lead to the failure to implement effective caching strategies, resulting in redundant data retrieval for each request and subsequently increasing response times and server load.

## Root Causes ▼

*No significant relationships within the scope of legacy systems identified (yet).*

## Detection Methods ○

- **API Design Review:** Review API endpoints against REST principles and consistency guidelines
- **Developer Experience Testing:** Test API integration experience with real developers
- **API Documentation Analysis:** Compare documentation with actual API behavior
- **HTTP Method Audit:** Audit appropriate usage of HTTP methods across all endpoints
- **Response Format Consistency Check:** Verify consistent response structures and error handling


## Examples

An inventory management API uses mixed conventions where some endpoints follow REST patterns (`GET /products/{id}`) while others use RPC-style endpoints (`POST /getProductsByCategory`). The inconsistency confuses developers and leads to integration errors. Additionally, some endpoints return product data with different field names (`product_id` vs `productId` vs `id`) making client code complex and error-prone. Standardizing the API design to consistent REST conventions and response formats reduces integration time by 50%. Another example involves an e-commerce API where the checkout process requires multiple non-idempotent POST requests to the same endpoint, making it impossible to safely retry failed requests. Customers experience duplicate orders when network issues cause retry attempts. Redesigning the checkout API with proper resource modeling and idempotent operations resolves the duplicate order problem.
