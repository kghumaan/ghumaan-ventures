const experiences = [
  {
    date: "2025 - Present",
    title: "Founder & Principal Consultant",
    company: "Ghumaan Ventures, LLC",
    url: "#",
    description:
      "Building AI-powered systems and modern software for small and mid-market businesses across industries. Current engagements include an Android application for the diamond industry serving the Asian market, and Phera - an AI-forward destination wedding platform with WhatsApp automation for the Indian market.",
    tags: [
      "Python",
      "React Native",
      "TypeScript",
      "Azure",
      "Supabase",
      "WhatsApp API",
      "OpenAI",
      "Claude API",
    ],
  },
  {
    date: "2024 - 2025",
    title: "Director, DevOps Engineer",
    company: "Perella Weinberg Partners",
    url: "https://www.pwpartners.com",
    description:
      'Architected "Nexus", an end-to-end identity lifecycle platform that eliminated a proposed $500K/18-month external project, delivering in 6 months. Built "TeamsGPT", a self-hosted AI chatbot achieving 80% user adoption with hundreds of daily conversations. Partnered with SOX auditors and Big 4 firms to ensure regulatory compliance across all automation.',
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
    date: "2019 - 2024",
    title: "Senior Engineer, DevOps",
    company: "Ares Management",
    url: "https://www.aresmgmt.com",
    description:
      'Led "Ares-Middleware", a Python automation platform hosting thousands of integrations across HR, Financial Systems, and Investment teams. Managed a team of 4 engineers. Migrated platform from on-premises to Azure Kubernetes Service achieving 90% reduction in downtime and 2x deployment speed. Built data lake ingesting gigabytes of daily data for executive PowerBI dashboards.',
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
    date: "2018 - 2019",
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
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {experiences.map((exp) => (
            <li key={exp.date} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label={exp.date}
                >
                  {exp.date}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <a
                      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${exp.title} at ${exp.company} (opens in a new tab)`}
                    >
                      <span>
                        {exp.title} · {exp.company}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    {exp.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {exp.tags.map((tag) => (
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
        <div className="mt-12">
          <a
            className="group inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              View Full R&eacute;sum&eacute;
              <span className="inline-block transition-transform group-hover:translate-x-2">
                {" "}
                &rarr;
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
