---
title: Over-Reliance on Utility Classes
description: The excessive use of utility classes with static methods can lead to
  a procedural style of programming and a lack of proper object-oriented design.
category:
- Design
- Quality
related_problems:
- slug: misunderstanding-of-oop
  similarity: 0.7
- slug: procedural-programming-in-oop-languages
  similarity: 0.7
- slug: procedural-background
  similarity: 0.65
- slug: excessive-class-size
  similarity: 0.65
- slug: monolithic-functions-and-classes
  similarity: 0.6
layout: problem
---

## Description
An over-reliance on utility classes is a common design problem in object-oriented programming. It occurs when a team creates a large number of utility classes with static methods. This can lead to a procedural style of programming and a lack of proper object-oriented design. An over-reliance on utility classes is often a sign of a misunderstanding of the principles of object-oriented programming.

## Indicators ⟡
- The codebase is full of utility classes.
- The codebase is full of static methods.
- The codebase is not using inheritance or polymorphism.
- The codebase is difficult to understand and maintain.

## Symptoms ▲
- **[Procedural Programming in OOP Languages](procedural-programming-in-oop-languages.md):** The codebase is written in a procedural style, even though it is an object-oriented language.
- **[Misunderstanding of OOP](misunderstanding-of-oop.md):** The team does not have a good understanding of the principles of object-oriented programming.
- **[High Coupling and Low Cohesion](high-coupling-low-cohesion.md):** The components of the system are tightly coupled and have low cohesion.
- **[Difficult to Test Code](difficult-to-test-code.md):** It is difficult to test code that is not well-encapsulated.

## Root Causes ▼
- **Lack of Understanding of OOP:** A lack of understanding of the principles of object-oriented programming can lead to an over-reliance on utility classes.
- **Procedural Background:** Developers with a background in procedural programming may be more comfortable with a procedural style of programming.
- **Convenience:** It can be convenient to create a utility class with a static method, but it is not always the best design choice.
- **Lack of a Design Culture:** The organization does not value good design, and there is no incentive for developers to write well-designed code.

## Detection Methods ○
- **Code Reviews:** Code reviews are a great way to identify an over-reliance on utility classes.
- **Static Analysis:** Use static analysis tools to identify classes with a large number of static methods.
- **Dependency Analysis:** Analyze the dependencies between the components of the system to identify areas of high coupling.
- **Code Coverage:** Measure the code coverage of your tests. A low code coverage may be a sign of an over-reliance on utility classes.

## Examples
A company has a codebase that is full of utility classes. The classes have names like `StringUtils`, `DateUtils`, and `FileUtils`. The classes contain a large number of static methods. The codebase is difficult to understand and maintain. The company eventually has to hire a team of experienced object-oriented developers to rewrite the entire system.
