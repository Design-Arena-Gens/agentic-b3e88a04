export type Choice = {
  id: string;
  text: string;
};

export type MCQ = {
  id: string;
  question: string;
  choices: Choice[];
  answerId: string;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  reference?: string;
};

export type Section = {
  id: string;
  title: string;
  description: string;
  focus: string[];
  questions: MCQ[];
};

export const sections: Section[] = [
  {
    id: "thesis",
    title: "Agent Factory Thesis",
    description:
      "Foundational ideas behind manufacturing digital full-time equivalents (FTEs) and the vision driving the Agent Factory initiative.",
    focus: [
      "AI employees as the next wave after traditional software products",
      "Spec-driven development as the operating model",
      "Shifting from manual coding to architecting factories of agents",
    ],
    questions: [
      {
        id: "thesis-1",
        question:
          "What core shift does the Agent Factory thesis predict for the most valuable companies in the AI era?",
        choices: [
          {
            id: "a",
            text:
              "They will focus on building mobile apps optimized for app stores.",
          },
          {
            id: "b",
            text:
              "They will specialize in manufacturing AI employees powered by agents, specs, and autonomy.",
          },
          {
            id: "c",
            text:
              "They will revert to on-premise software to protect intellectual property.",
          },
          {
            id: "d",
            text:
              "They will primarily offer AI consulting services rather than products.",
          },
        ],
        answerId: "b",
        explanation:
          "The thesis states that future-leading companies will manufacture AI employees using agents, specs, skills, and cloud-native autonomy instead of selling traditional software.",
        difficulty: "easy",
        reference: "Agent Factory Thesis slide",
      },
      {
        id: "thesis-2",
        question:
          "According to the presentation, what is the purpose of the 2026 AI Commercial Playbook?",
        choices: [
          {
            id: "a",
            text:
              "To outline how to raise venture capital for AI startups.",
          },
          {
            id: "b",
            text:
              "To demonstrate how to turn AI protocols into digital employees for profitable business models.",
          },
          {
            id: "c",
            text:
              "To provide a catalog of open-source AI projects ready for deployment.",
          },
          {
            id: "d",
            text:
              "To teach the fundamentals of neural network architecture design.",
          },
        ],
        answerId: "b",
        explanation:
          "The playbook transitions from technical feasibility to business execution, showing how to monetize new AI protocols as digital FTEs.",
        difficulty: "medium",
        reference: "The 2026 AI Commercial Playbook slide",
      },
      {
        id: "thesis-3",
        question:
          "Which role does the presentation assign to educators and developers who embrace the Agent Factory approach?",
        choices: [
          {
            id: "a",
            text: "They become infrastructure engineers managing GPUs.",
          },
          {
            id: "b",
            text: "They become compliance officers for AI governance.",
          },
          {
            id: "c",
            text:
              "They become strategic architects who build and monetize digital agent factories.",
          },
          {
            id: "d",
            text: "They become sales representatives for agent platforms.",
          },
        ],
        answerId: "c",
        explanation:
          "The slides emphasize that understanding the presentation elevates participants from coding to architecting and monetizing digital agent factories.",
        difficulty: "easy",
        reference: "Start Building Your Digital Agent Factory Tonight slide",
      },
      {
        id: "thesis-4",
        question:
          "Which credential is highlighted to establish Zia Khan’s authority in presenting the Agent Factory framework?",
        choices: [
          {
            id: "a",
            text: "PhD in Machine Learning from Stanford University",
          },
          {
            id: "b",
            text: "MBA, MSE, MAC degrees from Arizona State University",
          },
          {
            id: "c",
            text: "Former CTO of OpenAI",
          },
          {
            id: "d",
            text: "Author of the GPT-4 architecture whitepaper",
          },
        ],
        answerId: "b",
        explanation:
          "Zia Khan’s credentials include MBA, MSE, and MAC degrees from ASU along with CPA and CMA certifications, underscoring leadership in AI education.",
        difficulty: "easy",
        reference: "Zia Khan leadership slide",
      },
      {
        id: "thesis-5",
        question:
          "Why does the presentation argue that spec-driven development (SDD) is essential for building digital FTEs?",
        choices: [
          {
            id: "a",
            text: "It eliminates the need for human oversight entirely.",
          },
          {
            id: "b",
            text: "It enables precise instructions that AI can convert into production-ready agents.",
          },
          {
            id: "c",
            text: "It guarantees 100% code reuse across industries.",
          },
          {
            id: "d",
            text: "It directly integrates with robotic process automation tooling.",
          },
        ],
        answerId: "b",
        explanation:
          "Spec-driven development allows detailed specifications that generative models use to produce consistent and auditable agents, forming the factory workflow.",
        difficulty: "medium",
        reference: "From manual coding to spec-driven automation slide",
      },
      {
        id: "thesis-6",
        question:
          "What is the intended outcome of mastering the Agent Factory playbook, according to the slides?",
        choices: [
          {
            id: "a",
            text: "Deploy a single chatbot for customer support.",
          },
          {
            id: "b",
            text:
              "Manufacture digital teammates that can be monetized as AI employees.",
          },
          {
            id: "c",
            text: "Transition into AI policy advisory roles.",
          },
          {
            id: "d",
            text: "Open-source all agent skills for community contributions.",
          },
        ],
        answerId: "b",
        explanation:
          "The presentation frames the goal as building digital FTEs—autonomous, monetizable employees for enterprises.",
        difficulty: "easy",
        reference: "Action Plan and Final Summary slides",
      },
    ],
  },
  {
    id: "waves",
    title: "Evolution Toward Agentic AI",
    description:
      "Explores the transition from predictive and generative AI toward agentic systems and the new developer mindset.",
    focus: [
      "Three waves of AI innovation",
      "Agents as orchestrators instead of typists",
      "Human-agent-robot collaboration",
    ],
    questions: [
      {
        id: "waves-1",
        question:
          "Which capability distinguishes agentic AI from the previous wave of generative AI?",
        choices: [
          {
            id: "a",
            text: "Generating higher-quality creative content",
          },
          {
            id: "b",
            text: "Analyzing large datasets to predict outcomes",
          },
          {
            id: "c",
            text: "Taking autonomous actions and learning iteratively",
          },
          {
            id: "d",
            text: "Reducing computing costs for inference",
          },
        ],
        answerId: "c",
        explanation:
          "Agentic AI is defined by autonomy—planning, acting, and learning in loops—progressing beyond generative content capabilities.",
        difficulty: "easy",
        reference: "The Three Waves of AI slide",
      },
      {
        id: "waves-2",
        question:
          "What shift does the presentation describe as moving 'from user interface to user intent'?",
        choices: [
          {
            id: "a",
            text: "Users code directly in low-level languages like C.",
          },
          {
            id: "b",
            text:
              "Users interact with systems by stating goals rather than manipulating interfaces.",
          },
          {
            id: "c",
            text:
              "Users design custom UI layouts for each agent they deploy.",
          },
          {
            id: "d",
            text: "Users must configure every API call manually.",
          },
        ],
        answerId: "b",
        explanation:
          "Agentic AI interprets intent and executes actions, reducing the need for traditional point-and-click interfaces.",
        difficulty: "medium",
        reference: "From User Interface to User Intent slide",
      },
      {
        id: "waves-3",
        question:
          "In the future of work model, which trio collaborates to deliver outcomes?",
        choices: [
          {
            id: "a",
            text: "Executives, analysts, and freelancers",
          },
          {
            id: "b",
            text: "People, agents, and robots",
          },
          {
            id: "c",
            text: "Customers, vendors, and auditors",
          },
          {
            id: "d",
            text: "Developers, designers, and product managers",
          },
        ],
        answerId: "b",
        explanation:
          "The slides highlight a partnership where people supply judgment, agents automate digital work, and robots handle physical tasks.",
        difficulty: "easy",
        reference: "The Future of Work: A Partnership slide",
      },
      {
        id: "waves-4",
        question:
          "How does the presentation characterize the role of developers in the age of agentic AI?",
        choices: [
          {
            id: "a",
            text: "Developers revert to manual coding to ensure precision.",
          },
          {
            id: "b",
            text: "Developers become orchestrators who design workflows and specs.",
          },
          {
            id: "c",
            text: "Developers focus solely on maintaining legacy systems.",
          },
          {
            id: "d",
            text: "Developers emphasize hardware optimization for inference.",
          },
        ],
        answerId: "b",
        explanation:
          "The slide 'From Python/Java/TypeScript… to natural-language–first' frames developers as orchestrators instead of typists.",
        difficulty: "easy",
        reference: "From Python/Java/TypeScript… slide",
      },
      {
        id: "waves-5",
        question:
          "What is highlighted as the next leap in AI, moving from understanding to action?",
        choices: [
          {
            id: "a",
            text: "Transitioning from machine learning to symbolic AI",
          },
          {
            id: "b",
            text: "Large Action Models orchestrating tasks autonomously",
          },
          {
            id: "c",
            text: "Deploying AI on edge devices with limited compute",
          },
          {
            id: "d",
            text: "Focusing on augmented reality interfaces for AI",
          },
        ],
        answerId: "b",
        explanation:
          "The presentation contrasts large language models with large action models capable of orchestration and memory.",
        difficulty: "medium",
        reference: "The Next Leap in AI slide",
      },
      {
        id: "waves-6",
        question:
          "Which description best captures the essence of an AI agent as presented?",
        choices: [
          {
            id: "a",
            text:
              "A static rule-based system for predefined customer support workflows.",
          },
          {
            id: "b",
            text:
              "A software loop that observes, decides, acts, and learns toward a goal.",
          },
          {
            id: "c",
            text:
              "A conversational chatbot limited to single-turn responses.",
          },
          {
            id: "d",
            text: "A dataset used to fine-tune large language models.",
          },
        ],
        answerId: "b",
        explanation:
          "The slides define agents as systems that continuously pursue goals through observation, decision-making, action, and learning loops.",
        difficulty: "easy",
        reference: "What is an AI Agent? slide",
      },
    ],
  },
  {
    id: "architecture",
    title: "Anatomy of Autonomous Agents",
    description:
      "Key capabilities, design patterns, and tooling required to assemble production-grade digital teammates.",
    focus: [
      "Five powers of autonomous agents",
      "Action loops and tool orchestration",
      "Role of general vs. custom agents",
    ],
    questions: [
      {
        id: "arch-1",
        question:
          "Which capability is NOT part of the 'Five Powers' outlined for autonomous agents?",
        choices: [
          { id: "a", text: "Perception (seeing and hearing)" },
          { id: "b", text: "Reasoning" },
          { id: "c", text: "Physical strength" },
          { id: "d", text: "Memory" },
        ],
        answerId: "c",
        explanation:
          "The five powers include perception, reasoning, action, and memory—physical strength is not part of the digital agent capabilities.",
        difficulty: "easy",
        reference: "Autonomous Agents: The Five Powers slide",
      },
      {
        id: "arch-2",
        question:
          "Why is tool use emphasized as a defining characteristic of AI agents in the presentation?",
        choices: [
          {
            id: "a",
            text:
              "It allows agents to request human assistance whenever they fail.",
          },
          {
            id: "b",
            text:
              "It lets agents manipulate their environment by calling APIs, databases, and devices.",
          },
          {
            id: "c",
            text: "It increases the number of tokens processed per request.",
          },
          {
            id: "d",
            text: "It improves the graphical user interface layout.",
          },
        ],
        answerId: "b",
        explanation:
          "Tool usage enables agents to take real actions beyond text generation, making them goal-directed systems.",
        difficulty: "easy",
        reference: "What makes it an agent slide",
      },
      {
        id: "arch-3",
        question:
          "What role does state and memory play in the Agent Factory framework?",
        choices: [
          {
            id: "a",
            text:
              "It enables the agent to price its services based on past invoices.",
          },
          {
            id: "b",
            text:
              "It allows agents to maintain context across steps for consistent decision-making.",
          },
          {
            id: "c",
            text: "It prevents the agent from reusing previous actions.",
          },
          {
            id: "d",
            text: "It encrypts data in transit between tools.",
          },
        ],
        answerId: "b",
        explanation:
          "Agents need working state and longer-term memory to maintain continuity in multi-step workflows, a key differentiator from single prompts.",
        difficulty: "medium",
        reference: "What makes it an agent slide",
      },
      {
        id: "arch-4",
        question:
          "Which pairing correctly matches a general agent and its purpose as described?",
        choices: [
          {
            id: "a",
            text: "Claude Code – builder agent for designing logic and specs",
          },
          {
            id: "b",
            text: "Claude Code – production agent executing a single workflow",
          },
          {
            id: "c",
            text: "OpenAI Agents SDK – platform for brainstorming ideas only",
          },
          {
            id: "d",
            text: "Goose – low-level automation framework for robotics",
          },
        ],
        answerId: "a",
        explanation:
          "The presentation positions Claude Code as a general agent used to architect logic, while custom agents run on platforms like the OpenAI Agents SDK.",
        difficulty: "medium",
        reference: "General vs. Custom agent slides",
      },
      {
        id: "arch-5",
        question:
          "What is the significance of the SKILL.md file in the Agent Factory workflow?",
        choices: [
          {
            id: "a",
            text: "It stores compiled binaries for agent execution.",
          },
          {
            id: "b",
            text: "It captures reusable instructions and logic for a specific capability.",
          },
          {
            id: "c",
            text: "It lists access credentials for third-party APIs.",
          },
          { id: "d", text: "It functions as a version control system." },
        ],
        answerId: "b",
        explanation:
          "SKILL.md holds the workflows and logic that teach an agent how to perform a capability, making it a portable, monetizable asset.",
        difficulty: "easy",
        reference: "Agent Skills slides",
      },
      {
        id: "arch-6",
        question:
          "Why does the presentation advocate for model context protocol (MCP) servers?",
        choices: [
          {
            id: "a",
            text: "They replace the need for natural language prompts.",
          },
          {
            id: "b",
            text: "They standardize how agents access external tools and data sources.",
          },
          {
            id: "c",
            text: "They allow agents to render 3D graphics in real time.",
          },
          {
            id: "d",
            text: "They guarantee zero-latency responses for every agent.",
          },
        ],
        answerId: "b",
        explanation:
          "MCP servers provide a universal protocol that lets agents securely connect to tools, databases, and APIs, ensuring interoperability.",
        difficulty: "medium",
        reference: "The Connectivity: MCP Servers slide",
      },
      {
        id: "arch-7",
        question:
          "In the agent loop diagram, which step follows after an agent takes an action?",
        choices: [
          { id: "a", text: "Goal definition" },
          { id: "b", text: "Observation of results" },
          { id: "c", text: "Human approval" },
          { id: "d", text: "Memory flush" },
        ],
        answerId: "b",
        explanation:
          "Agents observe the environment after acting, enabling them to adjust plans based on outcomes.",
        difficulty: "easy",
        reference: "Agent loop illustration",
      },
      {
        id: "arch-8",
        question:
          "What deployment pattern keeps agents in learning mode without direct production impact?",
        choices: [
          { id: "a", text: "Blue/green deployment" },
          { id: "b", text: "Shadow mode" },
          { id: "c", text: "Offline reinforcement mode" },
          { id: "d", text: "Self-healing mode" },
        ],
        answerId: "b",
        explanation:
          "Shadow mode runs agents alongside humans to compare outputs, a pattern emphasized for safe iterative learning.",
        difficulty: "medium",
        reference: "Shadow Mode slide",
      },
    ],
  },
  {
    id: "factory",
    title: "Building the Agent Factory",
    description:
      "Step-by-step blueprint for transforming specs into production agents using general agents, skills, and custom runtimes.",
    focus: [
      "Spec-driven pipelines",
      "Factory roles and hand-offs",
      "Quality assurance and guardrails",
    ],
    questions: [
      {
        id: "factory-1",
        question:
          "Which component is responsible for translating specs into production-ready agents?",
        choices: [
          {
            id: "a",
            text: "General agent alone without additional tooling",
          },
          {
            id: "b",
            text: "Custom agent runtime such as the OpenAI Agents SDK",
          },
          {
            id: "c",
            text: "Manual scripting by human developers only",
          },
          {
            id: "d",
            text: "Traditional web servers running MVC frameworks",
          },
        ],
        answerId: "b",
        explanation:
          "Custom runtimes ingest specs and skills produced by general agents, turning them into deployable digital employees.",
        difficulty: "medium",
        reference: "The Framework: OpenAI Agents SDK slide",
      },
      {
        id: "factory-2",
        question:
          "What is the primary purpose of guardrails in the Agent Factory process?",
        choices: [
          {
            id: "a",
            text: "Improve the UI/UX of agent dashboards",
          },
          {
            id: "b",
            text: "Define hard constraints on what an agent can and cannot do",
          },
          {
            id: "c",
            text: "Increase the speed of model fine-tuning",
          },
          {
            id: "d",
            text: "Automate billing for agent usage",
          },
        ],
        answerId: "b",
        explanation:
          "Guardrails enforce safety and compliance boundaries, critical for production-grade autonomous agents.",
        difficulty: "easy",
        reference: "Guardrails slide",
      },
      {
        id: "factory-3",
        question:
          "Which step ensures human judgment is available for high-stakes decisions?",
        choices: [
          {
            id: "a",
            text: "Enabling human-in-the-loop review checkpoints",
          },
          {
            id: "b",
            text: "Configuring more frequent cron jobs",
          },
          {
            id: "c",
            text: "Deploying agents exclusively to test environments",
          },
          {
            id: "d",
            text: "Migrating code to monolithic applications",
          },
        ],
        answerId: "a",
        explanation:
          "Human-in-the-loop (HITL) patterns provide oversight for sensitive actions, aligning with the slides’ emphasis on high-stakes workflows.",
        difficulty: "easy",
        reference: "Human-in-the-Loop slide",
      },
      {
        id: "factory-4",
        question:
          "Why are specs positioned as the first-class artifact in the factory pipeline?",
        choices: [
          {
            id: "a",
            text: "Specs double as legal contracts with clients.",
          },
          {
            id: "b",
            text:
              "They enable reproducible agent building by capturing requirements before automation.",
          },
          {
            id: "c",
            text: "They automatically configure cloud infrastructure.",
          },
          {
            id: "d",
            text: "They replace the need for validation and testing.",
          },
        ],
        answerId: "b",
        explanation:
          "Specs ensure clarity, traceability, and repeatability, making them the foundation of spec-driven agent manufacturing.",
        difficulty: "medium",
        reference: "Spec-driven development slides",
      },
      {
        id: "factory-5",
        question:
          "Which element of the factory is described as providing the 'real-world data access'?",
        choices: [
          { id: "a", text: "Claude Code" },
          { id: "b", text: "Agent Skills (SKILL.md)" },
          { id: "c", text: "MCP Servers" },
          { id: "d", text: "Geist UI SDK" },
        ],
        answerId: "c",
        explanation:
          "Model Context Protocol servers connect agents to external systems, making them the data access layer of the factory stack.",
        difficulty: "easy",
        reference: "The Connectivity: MCP Servers slide",
      },
      {
        id: "factory-6",
        question:
          "What is the recommended progression for building a digital employee according to the slides?",
        choices: [
          {
            id: "a",
            text: "Start coding immediately, then document requirements later.",
          },
          {
            id: "b",
            text: "Write a spec, use Claude Code to draft logic, and deploy via a custom runtime with skills and guardrails.",
          },
          {
            id: "c",
            text: "Hire contractors to manually script automations in parallel.",
          },
          {
            id: "d",
            text: "Purchase off-the-shelf RPA tools and configure dashboards.",
          },
        ],
        answerId: "b",
        explanation:
          "The action plan emphasizes spec-first work, general agent collaboration, and finalizing deployment through skills and runtimes.",
        difficulty: "medium",
        reference: "Final Summary and Action Plan slides",
      },
      {
        id: "factory-7",
        question:
          "Which artifact becomes the monetizable asset that can be licensed or sold?",
        choices: [
          { id: "a", text: "The SKILL.md file encapsulating expertise" },
          { id: "b", text: "The telemetry logs of the agent" },
          { id: "c", text: "The cloud infrastructure templates" },
          { id: "d", text: "The user interface mockups" },
        ],
        answerId: "a",
        explanation:
          "Agent skills packaged in SKILL.md provide reusable intelligence that can be licensed or sold as part of digital FTE offerings.",
        difficulty: "medium",
        reference: "Agent Skills monetization slide",
      },
      {
        id: "factory-8",
        question:
          "What is the function of the Agent Factory textbook mentioned in the slides?",
        choices: [
          {
            id: "a",
            text: "It documents historical case studies of robotics companies.",
          },
          {
            id: "b",
            text: "It provides the curriculum and reference material for building digital FTEs.",
          },
          {
            id: "c",
            text: "It contains marketing assets for promoting AI services.",
          },
          {
            id: "d",
            text: "It offers financial models for venture capital pitches.",
          },
        ],
        answerId: "b",
        explanation:
          "The textbook at agentfactory.panaversity.org is cited as the core learning resource for the agent factory methodology.",
        difficulty: "easy",
        reference: "Agent Factory Textbook link",
      },
      {
        id: "factory-9",
        question:
          "Which statement best captures the reason for using custom agent SDKs?",
        choices: [
          {
            id: "a",
            text: "They allow agents to run without cloud infrastructure.",
          },
          {
            id: "b",
            text: "They provide hardened runtimes with guardrails tailored to enterprise workflows.",
          },
          {
            id: "c",
            text: "They bundle marketing automation for agent launches.",
          },
          {
            id: "d",
            text: "They are required to train new foundation models.",
          },
        ],
        answerId: "b",
        explanation:
          "Custom SDKs provide secure, specialized execution environments needed to run digital FTEs in production.",
        difficulty: "medium",
        reference: "The Framework: OpenAI Agents SDK slide",
      },
      {
        id: "factory-10",
        question:
          "What mindset does the presentation encourage when transitioning from manual coding?",
        choices: [
          {
            id: "a",
            text: "Think like a typist and optimize per-line productivity.",
          },
          {
            id: "b",
            text: "Adopt a factory mindset focused on specs, automation, and monetization.",
          },
          {
            id: "c",
            text: "Concentrate exclusively on infrastructure provisioning.",
          },
          {
            id: "d",
            text: "Outsource development entirely to external vendors.",
          },
        ],
        answerId: "b",
        explanation:
          "The deck consistently frames the opportunity as building agent factories, elevating practitioners to strategic operators.",
        difficulty: "easy",
        reference: "From manual coding to spec-driven automation slide",
      },
    ],
  },
  {
    id: "business",
    title: "Business Models and Monetization",
    description:
      "Strategies for packaging, pricing, and distributing digital FTEs at enterprise scale.",
    focus: [
      "Distribution through OpenAI Apps",
      "Digital FTE pricing models",
      "Scaling without traditional headcount growth",
    ],
    questions: [
      {
        id: "business-1",
        question:
          "What challenge does the 'Scaling Paradox' highlight for companies building digital FTEs?",
        choices: [
          {
            id: "a",
            text: "Excessive compute costs when hosting agents on-premise",
          },
          {
            id: "b",
            text: "Difficulty reaching millions of enterprises without expanding human teams dramatically",
          },
          {
            id: "c",
            text: "Lack of available AI talent in global markets",
          },
          {
            id: "d",
            text: "Complex legal barriers to selling software internationally",
          },
        ],
        answerId: "b",
        explanation:
          "The scaling paradox notes that traditional sales and infrastructure approaches cannot reach millions of businesses without massive headcount.",
        difficulty: "medium",
        reference: "The Scaling Paradox slides",
      },
      {
        id: "business-2",
        question:
          "How does the presentation propose solving distribution for digital FTEs?",
        choices: [
          {
            id: "a",
            text: "Launching custom hardware devices for agents",
          },
          {
            id: "b",
            text: "Leveraging the OpenAI Apps ecosystem to reach hundreds of millions of users",
          },
          {
            id: "c",
            text: "Building brick-and-mortar showrooms",
          },
          {
            id: "d",
            text: "Relying on enterprise cold-calling campaigns",
          },
        ],
        answerId: "b",
        explanation:
          "The deck positions OpenAI Apps as an app-store-like marketplace delivering immediate exposure to mass audiences.",
        difficulty: "easy",
        reference: "Distribution: The OpenAI Apps Ecosystem slide",
      },
      {
        id: "business-3",
        question:
          "What is a Digital FTE according to the slides?",
        choices: [
          {
            id: "a",
            text: "A marketing persona for positioning AI products",
          },
          {
            id: "b",
            text: "An AI agent offered as the equivalent of a full-time employee working continuously",
          },
          {
            id: "c",
            text: "A payroll tool that tracks employee hours automatically",
          },
          {
            id: "d",
            text: "A blueprint for hiring human contractors internationally",
          },
        ],
        answerId: "b",
        explanation:
          "Digital FTEs are autonomous agents positioned as 24/7 employees, forming the core product offering.",
        difficulty: "easy",
        reference: "Glossary: Digital FTE slide",
      },
      {
        id: "business-4",
        question:
          "Which monetization model is recommended for capturing value from agent skills?",
        choices: [
          { id: "a", text: "Open-source donations only" },
          { id: "b", text: "Advertising revenue on agent dashboards" },
          {
            id: "c",
            text: "Licensing SKILL.md packages or bundling them into digital FTEs",
          },
          { id: "d", text: "Charging per API call irrespective of outcomes" },
        ],
        answerId: "c",
        explanation:
          "The slides emphasize licensing and digital FTE bundles as viable revenue streams for agent skills.",
        difficulty: "medium",
        reference: "Monetization slides",
      },
      {
        id: "business-5",
        question:
          "Why is workflow redesign considered more valuable than merely automating individual tasks?",
        choices: [
          {
            id: "a",
            text: "It decreases the need for cloud infrastructure.",
          },
          {
            id: "b",
            text: "It enables holistic transformation of business outcomes, not just isolated efficiency gains.",
          },
          {
            id: "c",
            text: "It complies better with accounting standards.",
          },
          {
            id: "d",
            text: "It eliminates the need for human involvement entirely.",
          },
        ],
        answerId: "b",
        explanation:
          "The core insights highlight that redesigning workflows unlocks greater value than automating disconnected tasks.",
        difficulty: "medium",
        reference: "Core Insights slide",
      },
      {
        id: "business-6",
        question:
          "What advantage does the OpenAI ecosystem provide over traditional enterprise sales cycles?",
        choices: [
          {
            id: "a",
            text: "It offers higher profit margins on hardware bundles.",
          },
          {
            id: "b",
            text: "It allows enterprises to discover and adopt agents with minimal friction and no long negotiations.",
          },
          {
            id: "c",
            text: "It supplies prebuilt financial audits for compliance.",
          },
          {
            id: "d",
            text: "It guarantees minimum annual spending commitments.",
          },
        ],
        answerId: "b",
        explanation:
          "The slide likens OpenAI Apps to an app store, letting businesses hire digital FTEs quickly without months-long sales cycles.",
        difficulty: "easy",
        reference: "Distribution slide",
      },
      {
        id: "business-7",
        question:
          "Which key workforce insight is highlighted as critical for the AI era?",
        choices: [
          {
            id: "a",
            text: "Manual data entry remains the fastest-growing skill.",
          },
          {
            id: "b",
            text: "AI fluency is the fastest-growing workforce requirement.",
          },
          {
            id: "c",
            text: "Machine maintenance will dominate white-collar roles.",
          },
          {
            id: "d",
            text: "Financial auditing will replace technical roles.",
          },
        ],
        answerId: "b",
        explanation:
          "Core insights stress AI fluency as the key requirement as work shifts to partnerships between humans and agents.",
        difficulty: "easy",
        reference: "Core Insights slide",
      },
      {
        id: "business-8",
        question:
          "What distribution benefit is compared to the early App Store moment?",
        choices: [
          {
            id: "a",
            text: "Global community hackathons for open-source agents",
          },
          {
            id: "b",
            text: "OpenAI Apps creating the Agent Economy by exposing digital FTEs to massive audiences",
          },
          {
            id: "c",
            text: "Government procurement portals standardizing agent purchases",
          },
          {
            id: "d",
            text: "Corporate training programs certifying AI employees",
          },
        ],
        answerId: "b",
        explanation:
          "The presentation draws a parallel between the App Store catalyzing mobile and OpenAI Apps catalyzing agents.",
        difficulty: "medium",
        reference: "Distribution slide",
      },
    ],
  },
  {
    id: "scaling",
    title: "Cloud-Native Scaling and Reliability",
    description:
      "Infrastructure patterns and reliability practices needed to operate digital FTEs at enterprise scale.",
    focus: [
      "Cloud-native technology stack",
      "High-availability practices",
      "Multi-tenant security",
    ],
    questions: [
      {
        id: "scaling-1",
        question:
          "Why does the presentation emphasize cloud-native technologies for deploying agents?",
        choices: [
          {
            id: "a",
            text: "They reduce the need for network security controls.",
          },
          {
            id: "b",
            text: "They enable auto-scaling, multi-tenancy, and pay-as-you-go economics.",
          },
          {
            id: "c",
            text: "They eliminate the need for documentation.",
          },
          {
            id: "d",
            text: "They guarantee 0 ms latency worldwide.",
          },
        ],
        answerId: "b",
        explanation:
          "Cloud-native infrastructure (Kubernetes, Serverless, etc.) supports elasticity, isolation, and cost efficiency for digital FTEs.",
        difficulty: "medium",
        reference: "Reliability: The Cloud Native Backbone slide",
      },
      {
        id: "scaling-2",
        question:
          "Which technology is explicitly mentioned as part of the cloud-native foundation?",
        choices: [
          { id: "a", text: "MapReduce" },
          { id: "b", text: "Kubernetes" },
          { id: "c", text: "Flash memory arrays" },
          { id: "d", text: "Quantum processors" },
        ],
        answerId: "b",
        explanation:
          "The slides cite Kubernetes, Docker, Dapr, and Serverless as core technologies for hosting agents at scale.",
        difficulty: "easy",
        reference: "Cloud Native Backbone slide",
      },
      {
        id: "scaling-3",
        question:
          "How does the presentation propose keeping digital FTEs continuously available?",
        choices: [
          {
            id: "a",
            text: "By scheduling them to work only during business hours",
          },
          {
            id: "b",
            text: "By hosting them on high-availability cloud-native infrastructure",
          },
          {
            id: "c",
            text: "By limiting agent workflows to low-traffic time windows",
          },
          {
            id: "d",
            text: "By using batch processing clusters exclusively",
          },
        ],
        answerId: "b",
        explanation:
          "High availability is achieved through resilient, auto-scaling cloud-native systems that keep agents running 24/7.",
        difficulty: "easy",
        reference: "Reliability slide",
      },
      {
        id: "scaling-4",
        question:
          "What security advantage does multi-tenancy provide for digital FTE deployments?",
        choices: [
          {
            id: "a",
            text: "It enables shared dashboards for all customers.",
          },
          {
            id: "b",
            text: "It isolates enterprise data while supporting massive scale.",
          },
          {
            id: "c",
            text: "It removes the need for encryption in transit.",
          },
          {
            id: "d",
            text: "It eliminates monitoring requirements.",
          },
        ],
        answerId: "b",
        explanation:
          "Multi-tenancy keeps data segregated per enterprise while letting infrastructure scale efficiently.",
        difficulty: "medium",
        reference: "Reliability slide",
      },
      {
        id: "scaling-5",
        question:
          "Which statement best summarizes the message of the 'Billion-Dollar Question' quotes?",
        choices: [
          {
            id: "a",
            text: "Scaling is primarily a legal compliance issue.",
          },
          {
            id: "b",
            text: "Companies must decouple growth from human headcount by relying on digital FTEs.",
          },
          {
            id: "c",
            text: "International expansion should be avoided until agents mature.",
          },
          {
            id: "d",
            text: "Marketing spend should be doubled to reach executives.",
          },
        ],
        answerId: "b",
        explanation:
          "The quote stresses that to build a unicorn, growth must come from scalable digital workers rather than large human teams.",
        difficulty: "medium",
        reference: "Scaling Paradox slide",
      },
      {
        id: "scaling-6",
        question:
          "What final call-to-action does the presentation make to its audience?",
        choices: [
          {
            id: "a",
            text: "Pause all AI initiatives until regulations stabilize.",
          },
          {
            id: "b",
            text: "Join the spec-driven revolution by learning AI-native development at Panaversity and PIAIC.",
          },
          {
            id: "c",
            text: "Focus solely on manual coding bootcamps.",
          },
          {
            id: "d",
            text: "Submit business plans for venture funding.",
          },
        ],
        answerId: "b",
        explanation:
          "The concluding slide invites the audience to join the spec-driven revolution via Panaversity.org and PIAIC.org.",
        difficulty: "easy",
        reference: "Join the Spec-Driven Revolution slide",
      },
    ],
  },
];
