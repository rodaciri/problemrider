---
title: Database Schema Design Problems
description: Poor database schema design creates performance issues, data integrity
  problems, and maintenance difficulties.
category:
- Database
- Design
- Data Modeling
related_problems:
- slug: schema-evolution-paralysis
  similarity: 0.7
- slug: database-query-performance-issues
  similarity: 0.65
- slug: data-migration-integrity-issues
  similarity: 0.6
- slug: high-number-of-database-queries
  similarity: 0.55
- slug: n-plus-one-query-problem
  similarity: 0.55
layout: problem
---

## Description

Database schema design problems occur when database structures are poorly planned, inadequately normalized or denormalized, or don't efficiently support the application's data access patterns. Poor schema design leads to performance issues, data integrity problems, complex queries, and maintenance difficulties that become more pronounced as the system scales.

## Indicators ⟡

- Queries requiring complex joins across many tables for simple operations
- Data redundancy and inconsistency across different tables
- Tables with excessive numbers of columns or very wide rows
- Frequent schema modifications needed to support new features
- Performance issues that can't be resolved through indexing alone

## Symptoms ▲

- **Complex Query Requirements:** Simple operations requiring complex multi-table joins
- **Data Redundancy Issues:** Same information stored in multiple places with inconsistencies
- **Wide Table Problems:** Tables with hundreds of columns causing performance and maintenance issues
- **Frequent Schema Changes:** Constant need to modify database structure for new requirements
- **Referential Integrity Violations:** Foreign key constraints frequently violated or absent

## Root Causes ▼

- **Inadequate Requirements Analysis:** Database designed without understanding actual usage patterns
- **Over-Normalization:** Excessive normalization creating too many tables and complex joins
- **Under-Normalization:** Insufficient normalization leading to data redundancy and inconsistency
- **Legacy Schema Evolution:** Schema growing organically without proper redesign
- **Generic Table Design:** Using overly generic structures instead of domain-specific tables
- **Lack of Performance Consideration:** Schema designed without considering query performance implications

## Detection Methods ○

- **Schema Complexity Analysis:** Analyze table structures, relationships, and normalization levels
- **Query Performance Impact Assessment:** Evaluate how schema design affects query performance
- **Data Redundancy Auditing:** Identify duplicate data storage across different tables
- **Schema Change Frequency Monitoring:** Track how often schema modifications are required
- **Referential Integrity Validation:** Check for proper foreign key relationships and constraints

## Examples

An e-commerce application uses a single "products" table with 200+ columns to store all product information, including specific attributes for different product categories. Most queries only need a few columns but must scan the entire wide table, causing performance issues. Product-specific attributes like "clothing_size" and "electronics_warranty" are stored in the same table, leading to many null values and confusion. Splitting this into a core products table with category-specific attribute tables would improve performance and maintainability. Another example involves a user management system where user profile information is stored across 15 highly normalized tables, requiring 8-table joins just to display a user profile page. While technically normalized, this creates excessive query complexity and poor performance. Selective denormalization by combining frequently accessed user data into fewer tables would improve performance without compromising data integrity.