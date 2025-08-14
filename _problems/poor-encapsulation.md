---
title: Poor Encapsulation
description: Data and the behavior that acts on that data are not bundled together
  in a single, cohesive unit, leading to a lack of data hiding and a high degree of
  coupling.
category:
- Design
- Quality
related_problems:
- slug: misunderstanding-of-oop
  similarity: 0.546
- slug: over-reliance-on-utility-classes
  similarity: 0.533
- slug: procedural-programming-in-oop-languages
  similarity: 0.511
layout: problem
---

## Description
Poor encapsulation is a common design problem in object-oriented programming. It occurs when data and the behavior that acts on that data are not bundled together in a single, cohesive unit. This can lead to a number of problems, including a lack of data hiding, a high degree of coupling, and a system that is difficult to understand and maintain. Poor encapsulation is often a sign of a lack of understanding of the principles of object-oriented design.

## Indicators ⟡
- Classes have a large number of public fields.
- Classes have a large number of getters and setters.
- Data is passed around between a large number of different objects.
- It is difficult to understand how data is being used in the system.

## Symptoms ▲
- **[High Coupling and Low Cohesion](high-coupling-low-cohesion.md):** The components of the system are tightly coupled and have low cohesion.
- **[Global State and Side Effects](global-state-and-side-effects.md):** The lack of encapsulation can lead to the use of global state and side effects, which can make the system difficult to reason about.
- **[Difficult to Test Code](difficult-to-test-code.md):** It is difficult to test code that is not well-encapsulated.
- **[Difficult Code Reuse](difficult-code-reuse.md):** It is difficult to reuse code that is not well-encapsulated.

## Root Causes ▼
- **[Misunderstanding of OOP](misunderstanding-of-oop.md):** A lack of understanding of the principles of object-oriented programming can lead to poor encapsulation.
- **[Procedural Background](procedural-background.md):** Developers with a background in procedural programming may struggle to adapt to an object-oriented way of thinking.
- **[Time Pressure](time-pressure.md):** A focus on short-term deadlines can lead to a neglect of good design principles.
- **Lack of a Design Culture:** The organization does not value good design, and there is no incentive for developers to write well-encapsulated code.

## Detection Methods ○
- **Code Reviews:** Code reviews are a great way to identify problems with encapsulation.
- **Static Analysis:** Use static analysis tools to identify classes with a large number of public fields or getters and setters.
- **Dependency Analysis:** Analyze the dependencies between the components of the system to identify areas of high coupling.
- **Code Coverage:** Measure the code coverage of your tests. A low code coverage may be a sign of poor encapsulation.

## Examples
A class has a public field that is accessed by a large number of other classes. This is an example of poor encapsulation. The problem could be solved by making the field private and providing a public method for accessing it. This would hide the implementation details of the class and would make it easier to change the class in the future without breaking other parts of the system.
