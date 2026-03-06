const services = [
  {
    title: "AI & Business Automation",
    description:
      "I find the repetitive, manual work your team hates and build AI-powered systems that handle it. Chatbots, document processing, workflow automation, AI agents - designed to create real operational value.",
    tags: [
      "Claude",
      "OpenAI",
      "Grok",
      "Qwen",
      "n8n",
      "Zapier",
      "Chatbots",
      "Agents",
    ],
  },
  {
    title: "Cloud Infrastructure & Migration",
    description:
      "Move to the cloud without the chaos. I design, build, and optimize cloud environments - from initial migration to CI/CD pipelines to cost optimization that typically saves 20-40%.",
    tags: [
      "Azure",
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
    ],
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Custom web applications, SaaS platforms, internal tools, and dashboards - from concept to production. Clean architecture, modern frameworks, and code that ships.",
    tags: [
      "Python",
      "FastAPI",
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android. From consumer-facing products to enterprise mobile solutions and app store deployment.",
    tags: ["iOS", "Android", "React Native", "Swift", "Kotlin", "Flutter"],
  },
  {
    title: "Data Engineering & Analytics",
    description:
      "Turn your data mess into decisions. I build pipelines, warehouses, and BI dashboards - plus the data architecture that makes AI actually work.",
    tags: [
      "Snowflake",
      "Databricks",
      "Apache Kafka",
      "PowerBI",
      "SQL Server",
      "Python",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Services"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Services
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {services.map((service) => (
            <li key={service.title} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                <div className="z-10 sm:col-span-8">
                  <h3 className="font-medium leading-snug text-slate-200">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    {service.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {service.tags.map((tag) => (
                      <li key={tag} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {tag}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
