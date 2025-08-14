Here is a corrected and polished version of your introduction text, keeping it precise but clear. I fixed grammar, typos, style consistency, and made some sentences flow better.

---

# Project Information

## Goal

The primary goal of this project is to create a catalog of typical problems found in legacy systems, along with their symptoms and root causes.

This catalog is intended to be especially valuable for software maintainers and architects who need to perform legacy system analysis and modernization tasks.

# Scope
The scope of the problem area ends at the requirements and management level (for example, political causes like tariff wars are out of scope) and does not include very detailed technological issues (for example, CPU-level problems are out of scope).

## Layout

* The `_problems` directory contains the relevant content, including the problems and their descriptions.
* The `problem-pattern-template.md` file defines the format for each pattern.

## Linking

* When documenting a problem, link its symptoms and root causes to other existing problems whenever possible. Do this by directly linking the title of those problems within the text, not by adding links at the end.
* Use simple Markdown links with relative paths.

## Guiding Principle

The core task is to continuously expand the catalog by analyzing additional problems related to legacy systems and interconnecting existing problems when they are linked by cause or effect.

If you identify a symptom or root cause in an existing pattern, create a separate problem entry for it. Each root cause and symptom should have a brief, descriptive title and an accompanying explanation so that the work can be continued in the future.

Follow title case rules for titles, where nouns, pronouns, verbs, adjectives, and adverbs are capitalized (to be more precise: use New York Times Manual of Style).

Markdown file names should be in lowercase and use hyphens as separators.

When linking one problem to another, the linked title must match exactly (including upper and lower case) the title of the problem it leads to and the complete title only is the link text (no additions to the title). However, it is fine to include a context-specific description of the linked problem to explain why the symptom or cause is connected to it.

## Tech Stack

* The main idea is to publish the content as a Jekyll-based website on GitHub Pages.
* A prototype exists for a graph-based view using a Python script to generate a D3-based network of problems.

## Developing Locally

### Jekyll Site Prototype

To build the site and run it locally, use the following command:

`bundle exec jekyll serve`

The site will be available at [http://localhost:4000](http://localhost:4000).

### Graph Visualization Prototype

Run the `scripts/create_visualization.py` with Python to generate the D3 graph visualization.

### Helper Scripts

The `scripts/` directory contains more utility scripts for maintaining the catalog:

* `calculate_related_problems.py`: Generates semantic similarity scores for related_problems sections using sentence-transformers. Updates all problem files with automatically calculated relationships based on content similarity.
* `backlog_refinement.py`: Takes ideas withing the file `scripts/backlog/candidates.md` and sorts them into different files depending on already existing or similar problems.
* `check_links.py`: Checks for broken markdown links in the `_problems` directory. Use `--fix` flag to automatically remove broken links while preserving the title and description text.
* `convert_titles.py`: Converts titles to proper title case using New York Times Manual of Style rules. Works on YAML front matter titles, H1 headers, and markdown link text. Use `--fix` flag to actually modify files.
