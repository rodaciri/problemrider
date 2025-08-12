# ProblemRider

ProblemRider is an application that helps software teams dig deeper into the real root causes of their problems. Rather than treating surface-level symptoms, it provides a structured catalog of common software development issues, guiding users to identify   underlying causes and understand how problems interconnect. By analyzing patterns of symptoms and root causes in legacy systems and development processes, ProblemRider enables teams to address fundamental issues instead of applying temporary fixes.

See [GEMINI.md](GEMINI.md) for more details.

## Idea

The main idea of this project is to document as many problems as possible. For this, we use state-of-the-art Large Language Models (SOTA LLMs) such as Google Gemini 2.5 Pro and Anthropic Claude Sonnet 4 to generate and interlink problems. We also manually check for incorrect connections and hallucinations, and we provide an application that makes this large problem space easy to navigate.

## Roadmap

This roadmap outlines the planned development phases for the project (and is subject to change as the project evolves).

* **Phase I – Problem Catalog Creation**
  Build an extensive, trustworthy, and accurate catalog of problems, including a high density of interconnections between related entries.

* **Phase II – Structured Search and Traversing**
  Provide an interface that allows users to browse and navigate the interconnected problem catalog using structured methods such as category filters, keyword search, and sorting as well as graph-based traversing.

* **Phase III – Exploratory Search and Matching**
  Enable exploratory search features that help users discover similar or related problems based on their own cases which includes semantic search, relevance ranking, and similarity-based matching.

* **Phase IV – Live LLM-Assisted Problem Exploration**
  Allow users to define a specific problem scope and explore additional related problems in real time using LLMs.

* **Phase V – Problem-Solving Journey Tracking**
Enable users to track their journey toward identifying and solving valuable problems, including leaving comments, recording insights, and tracing decision-making for projects aimed at addressing the problems (or, when causes cannot be solved, symptoms that are worthwhile fixing instead).

* **Phase VI – Context-Specific Solution Approaches**
  Based on a detailed analysis of the problem, provide tailored solution approaches that directly address the identified issues.



## Sponsors

Mining and identifying various problems is not feasible through manual work alone. This is why we heavily use LLMs for this endeavor. However, using state-of-the-art LLMs is expensive, which is why we thank our direct and indirect sponsors:

Here is the updated version with links added:

* **[INNOQ](https://www.innoq.com/)** (direct sponsor) for providing access to the Claude Sonnet 4 API with free usage-based tokens and for providing a working environment where these kinds of projects are possible.
* **[Google](https://ai.google.dev/gemini-api/docs/pricing#free-tier)** (indirect sponsor) for providing free (but very limited) contingents for their SOTA LLM models.


If you would like to sponsor this project by providing free access to SOTA LLM APIs, drop [Markus a message on LinkedIn](https://www.linkedin.com/markus-harrer).


## Main Contributors

* [Markus Harrer](https://markusharrer.de): Project initiator, problem digger, and app vibe coder.


## Contributing

Contributions to the underlying catalog of ProblemRider as well as the app itself are very welcome. To add a new problem pattern, please follow these steps:

1. Browse through the existing problems in the `_problems` directory.
2. Create a new file in the `_problems` directory.
3. Use the [`problem-pattern-template.md`](./problem-pattern-template.md) file as a starting point.
4. Fill out the template with a detailed description of the problem.
5. Connect as many relevant symptoms and root causes as possible to your new problem.
6. Submit a pull request.

## Disclaimer

This is an experimental project leveraging LLMs to generate interconnected problem networks. The software and content are provided “as-is,” without warranties of any kind. Use it at your own risk. 


## Licenses

* The code of ProblemRider app is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).  
* The problems / contents in the `_problems` directory is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).