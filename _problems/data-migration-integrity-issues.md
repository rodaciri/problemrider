---
title: Data Migration Integrity Issues
description: Data loses integrity, consistency, or meaning during migration from legacy
  to modern systems due to schema mismatches and format incompatibilities
category:
- Technical
- Data Management
- Migration
related_problems:
- slug: cross-system-data-synchronization-problems
  similarity: 75%
- slug: data-migration-complexities
  similarity: 70%
- slug: database-schema-design-problems
  similarity: 60%
- slug: schema-evolution-paralysis
  similarity: 60%
- slug: legacy-configuration-management-chaos
  similarity: 55%
layout: problem
---

## Description

Data migration integrity issues occur when transferring data from legacy systems to modern platforms results in data corruption, loss of relationships, semantic meaning changes, or consistency violations. These problems arise from fundamental differences between legacy and modern data models, encoding formats, constraint systems, and business rule implementations. Unlike simple data transfer challenges, these issues threaten the fundamental trustworthiness and usability of the migrated data in the new system.

## Indicators ⟡

- Legacy data models that don't map cleanly to modern database schemas or data structures
- Discovery of implicit business rules embedded in legacy data formats or constraints
- Character encoding inconsistencies between legacy and target systems
- Complex relationships in legacy data that have no equivalent in the target system design
- Data validation rules that differ significantly between source and target systems
- Legacy systems using proprietary data formats or custom serialization methods
- Missing or incomplete data dictionaries for legacy system fields and their meanings

## Symptoms ▲

- **[High Defect Rate in Production](high-defect-rate-in-production.md):** Data inconsistencies discovered after migration completion that require manual correction
- **[Unpredictable System Behavior](unpredictable-system-behavior.md):** Business processes that fail because migrated data doesn't meet expected formats or constraints
- **[Inconsistent Behavior](inconsistent-behavior.md):** Reports and analytics that produce different results in the new system compared to the legacy system
- **[Database Schema Design Problems](database-schema-design-problems.md):** Data relationships that are broken or missing after migration, affecting referential integrity
- **[Data Protection Risk](data-protection-risk.md):** Character corruption or encoding issues that make text data unreadable or searchable
- **[Database Query Performance Issues](database-query-performance-issues.md):** Numeric precision loss or format changes that affect calculations and business logic
- **[Regulatory Compliance Drift](regulatory-compliance-drift.md):** Regulatory compliance issues due to data audit trail corruption or incomplete migration
- **[Negative User Feedback](negative-user-feedback.md):** User complaints about missing, incorrect, or corrupted information in the new system
- **[User Trust Erosion](user-trust-erosion.md):** Loss of confidence in system reliability due to data corruption incidents
- **[Increased Customer Support Load](increased-customer-support-load.md):** Support tickets flooding in due to data discrepancies and errors
- **[Operational Overhead](operational-overhead.md):** Manual effort required to identify and correct data integrity issues
- **[Budget Overruns](budget-overruns.md):** Cost escalation from extensive data cleanup and re-migration efforts
- **[Delayed Value Delivery](delayed-value-delivery.md):** Project delays while data integrity problems are resolved
- **[Stakeholder Confidence Loss](stakeholder-confidence-loss.md):** Business stakeholders losing trust in the migration project

## Root Causes ▼

- **[Legacy System Documentation Archaeology](legacy-system-documentation-archaeology.md):** Insufficient analysis of legacy data structure, constraints, and implicit business rules
- **[Poor Domain Model](poor-domain-model.md):** Schema design that prioritizes modern best practices over preserving legacy data semantics
- **[Quality Blind Spots](quality-blind-spots.md):** Inadequate testing with realistic production data volumes and edge cases
- **[Time Pressure](time-pressure.md):** Time pressure that leads to shortcuts in data mapping and validation processes
- **[Knowledge Gaps](knowledge-gaps.md):** Lack of expertise in both legacy and target system data models among migration team
- **[Information Decay](information-decay.md):** Complex legacy data formats that have evolved organically over many years without documentation
- **[Tool Limitations](tool-limitations.md):** Automated migration tools that cannot handle edge cases or complex data transformations
- **[Testing Environment Fragility](testing-environment-fragility.md):** Insufficient validation and reconciliation processes to verify migration accuracy
- **[Legacy Business Logic Extraction Difficulty](legacy-business-logic-extraction-difficulty.md):** Business rules embedded in data formats that are not properly understood
- **[Hardcoded Values](hardcoded-values.md):** Legacy systems using magic numbers and constants that affect data interpretation
- **[Complex and Obscure Logic](complex-and-obscure-logic.md):** Data transformation logic that is too complex to replicate accurately
- **[High Coupling and Low Cohesion](high-coupling-low-cohesion.md):** Legacy data models with tightly coupled fields and implicit dependencies
- **[Procedural Programming in OOP Languages](procedural-programming-in-oop-languages.md):** Legacy data handling code that doesn't translate well to modern paradigms
- **[Accumulation of Workarounds](accumulation-of-workarounds.md):** Years of data patches and fixes that create complex edge cases
- **[Obsolete Technologies](obsolete-technologies.md):** Legacy encoding formats and data types that have no modern equivalents

## Detection Methods ○

- Implement comprehensive data validation and reconciliation testing before and after migration
- Perform statistical analysis comparing record counts, data distributions, and relationship integrity
- Use data profiling tools to identify inconsistencies between source and target data
- Conduct user acceptance testing with real business scenarios on migrated data
- Implement automated data quality checks to monitor ongoing data integrity
- Compare business report outputs between legacy and new systems for consistency
- Monitor application error logs for data-related validation failures after migration
- Conduct regular audits of critical business data for accuracy and completeness

## Examples

A financial institution migrates customer account data from a mainframe system to a modern database. The legacy system stored account balances as packed decimal fields with implicit currency information based on branch location, while customer names were stored in EBCDIC encoding with embedded formatting codes. During migration, decimal precision is lost due to floating-point conversion, causing penny discrepancies in thousands of accounts. Customer names become corrupted due to encoding issues, and the implicit currency logic is lost, causing international accounts to display incorrect balances. The migration appears successful with correct record counts, but the data integrity issues surface weeks later when customers report incorrect statements and regulatory reports fail audit requirements. The bank must halt operations to perform emergency data reconciliation and re-migration, costing millions in downtime and regulatory penalties.