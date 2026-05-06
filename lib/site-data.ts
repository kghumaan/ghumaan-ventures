export type Service = {
  title: string;
  description: string;
  tags: string[];
};

export type ExperienceEntry = {
  date: string;
  title: string;
  company: string;
  url: string | null;
  description: string;
  tags: string[];
};

export type SiteData = {
  name: string;
  role: string;
  tagline: string;
  email: string;
  cal: string;
  github: string;
  linkedin: string;
  about: string[];
  services: Service[];
  experience: ExperienceEntry[];
};

export const SITE_DATA: SiteData = {
  name: "KV Ghumaan",
  role: "Founder & Engineer",
  tagline: "Building Lobstir and Phera. Available for select consulting.",
  email: "kv@ghumaanventures.com",
  cal: "https://cal.com/ghumaan-ventures/30min",
  github: "https://github.com/kghumaan",
  linkedin: "https://www.linkedin.com/in/kv-ghumaan-132863a3/",

  about: [
    "I'm a full-stack engineer and founder with 8+ years shipping production systems in finance and automotive. I help founders and small teams design and build products, and I've worn most hats along the way: automation, DevOps, web and mobile, cloud infra, network security. That's included a $10B+ asset manager and a global investment bank, where I shipped AI tools that hit firm-wide adoption.",
    "Through Ghumaan Ventures, I help small and mid-market businesses (1–500 employees) modernize their operations and ship new products. They know they need AI and modern tooling but don't have the internal expertise to do it right. Enterprise-grade thinking, without the enterprise price tag.",
    "Every system I ship leans on LLMs, agents, or modern automation where they actually move the needle, not because it's trendy but because it works. I stay current on the tools and models so my clients don't have to.",
  ],

  services: [
    {
      title: "AI & Business Automation",
      description:
        "I find the repetitive, manual work your team hates and build AI-powered systems that handle it. Chatbots, document processing, workflow automation, AI agents — designed to create real operational value.",
      tags: ["Claude", "OpenAI", "n8n", "Agents", "Chatbots"],
    },
    {
      title: "Cloud Infrastructure & Migration",
      description:
        "Move to the cloud without the chaos. I design, build, and optimize cloud environments — from initial migration to CI/CD pipelines to cost optimization that typically saves 20–40%.",
      tags: ["Azure", "AWS", "Kubernetes", "Terraform", "CI/CD"],
    },
    {
      title: "Full-Stack Web Development",
      description:
        "Custom web applications, SaaS platforms, internal tools, and dashboards — from concept to production. Clean architecture, modern frameworks, and code that ships.",
      tags: ["TypeScript", "Next.js", "Python", "FastAPI", "PostgreSQL"],
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile apps for iOS and Android. From consumer-facing products to enterprise mobile solutions and app store deployment.",
      tags: ["React Native", "iOS", "Android", "Swift"],
    },
    {
      title: "Data Engineering & Analytics",
      description:
        "Turn your data mess into decisions. I build pipelines, warehouses, and BI dashboards — plus the data architecture that makes AI actually work.",
      tags: ["Snowflake", "Databricks", "PowerBI", "Python", "SQL Server"],
    },
  ],

  experience: [
    {
      date: "2025 — Present",
      title: "Founder & Principal Consultant",
      company: "Ghumaan Ventures, LLC",
      url: null,
      description:
        "Building AI-powered systems and modern software for small and mid-market businesses. Current work spans Lobstir (lobstir.ai), a multi-tenant AI agent orchestration platform built on the OpenClaw security model, and Phera (phera.io), an AI-forward destination wedding platform with WhatsApp automation for the Indian market. Active consulting engagement: Terracor, a mobile application for the diamond industry serving the Asian market.",
      tags: [
        "TypeScript",
        "React Native",
        "Python",
        "Azure",
        "Supabase",
        "WhatsApp API",
        "OpenAI",
        "Claude API",
        "Docker",
      ],
    },
    {
      date: "2024 — 2025",
      title: "Director, DevOps Engineer",
      company: "Perella Weinberg Partners",
      url: "https://www.pwpartners.com",
      description:
        "Architected \"Nexus\", an end-to-end identity lifecycle platform for HR that eliminated a proposed $500K/18-month external project, delivering in 6 months. Maintained \"TeamsGPT\", a self-hosted AI chatbot with hundreds of daily conversations. Partnered with the network security team to privatize all network access and ensure industry best practices for authentication and network traffic.",
      tags: [
        "Azure Functions",
        "Cosmos DB",
        "Event Hubs",
        "Redis",
        "Azure OpenAI",
        "Bicep",
        "Python",
      ],
    },
    {
      date: "2019 — 2024",
      title: "Senior Engineer, DevOps",
      company: "Ares Management",
      url: "https://www.aresmgmt.com",
      description:
        "Built \"Ares-Middleware\", a Python automation platform powering integrations across 20+ internal systems spanning HR, Corporate Finance, and Investment teams. Tech-led a team of 4 engineers across the globe. Migrated platform from on-premises to Azure Kubernetes Service, achieving 90% reduction in downtime and 2x deployment speed. Built data lake ingesting gigabytes of daily data for executive PowerBI dashboards.",
      tags: [
        "Python",
        "Azure",
        "AKS",
        "Helm",
        "Terraform",
        "Azure Data Factory",
        "PowerBI",
        "Docker",
      ],
    },
    {
      date: "2018 — 2019",
      title: "Software Engineer",
      company: "General Motors",
      url: "https://www.gm.com",
      description:
        "Developed 3D vehicle configuration web application for the 2020 Corvette Z06, enhancing the digital shopping experience and driving online sales. Engineered backend Java services with WebSockets and Redis for real-time user interactions.",
      tags: [
        "Java",
        "JavaScript",
        "WebSockets",
        "Redis",
        "Node.js",
        "3D Visualization",
      ],
    },
  ],
};
