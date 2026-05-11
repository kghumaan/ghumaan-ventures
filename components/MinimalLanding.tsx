import Image from "next/image";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/kvghumaan/",
  github: "https://github.com/kghumaan",
  email: "kv@ghumaanventures.com",
  cal: "https://cal.com/ghumaan-ventures/30min",
  resume: "/resume.pdf",
  lobstir: "https://lobstir.ai",
  phera: "https://phera.io",
  pwp: "https://www.pwpartners.com",
  ares: "https://www.aresmgmt.com",
  gm: "https://www.gm.com",
};

function Link({
  href,
  children,
  external = true,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="underline decoration-neutral-400 underline-offset-2 hover:text-neutral-900 hover:decoration-neutral-700"
    >
      {children}
    </a>
  );
}

export default function MinimalLanding() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-neutral-800 md:py-20">
      <header className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <h1 className="text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
          KV Ghumaan
        </h1>
        <div className="flex items-center gap-3 text-sm">
          <Image
            src="/headshot.jpg"
            alt="KV Ghumaan"
            width={56}
            height={56}
            className="h-12 w-12 rounded-full border border-neutral-300 object-cover"
            priority
          />
          <span className="text-neutral-600">
            (<Link href={LINKS.linkedin}>LinkedIn</Link>,{" "}
            <Link href={LINKS.github}>GitHub</Link>,{" "}
            <Link href={`mailto:${LINKS.email}`} external={false}>
              Email
            </Link>
            )
          </span>
        </div>
      </header>

      <p className="mt-10 text-lg font-semibold text-neutral-900">
        Founder &amp; Engineer
      </p>

      <div className="mt-10 space-y-6 leading-relaxed">
        <p className="italic">
          I&apos;m building AI agents, cloud infrastructure, and modern software
          through Ghumaan Ventures — for founders, small teams, and mid-market
          businesses.
        </p>

        <p>
          <strong>Building &amp; shipping.</strong>
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <Link href={LINKS.lobstir}>Lobstir</Link> — multi-tenant AI agent
            orchestration platform built on the OpenClaw security model
          </li>
          <li>
            <Link href={LINKS.phera}>Phera</Link> — AI-forward destination
            wedding platform with WhatsApp automation for the Indian market
          </li>
          <li>
            Terracor — mobile app for the diamond industry serving the Asian
            market (active consulting engagement)
          </li>
        </ul>

        <p>
          <strong>Background.</strong> 8+ years shipping production systems in
          finance and automotive, including a $10B+ asset manager and a global
          investment bank where I shipped AI tools with firm-wide adoption.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Director, DevOps at <Link href={LINKS.pwp}>Perella Weinberg
            Partners</Link> — architected &quot;Nexus&quot;, an HR identity
            lifecycle platform that replaced a proposed $500K / 18-month project
            in 6 months
          </li>
          <li>
            Senior Engineer, DevOps at{" "}
            <Link href={LINKS.ares}>Ares Management</Link> — built a Python
            automation platform powering 20+ internal integrations; migrated to
            AKS with 90% downtime reduction and 2× deploys
          </li>
          <li>
            Software Engineer at <Link href={LINKS.gm}>General Motors</Link> —
            3D vehicle configurator for the 2020 Corvette Z06
          </li>
          <li>
            Full <Link href={LINKS.resume}>resume</Link>
          </li>
        </ul>

        <p>
          <strong>Consulting.</strong> I help small and mid-market businesses
          (1–500 employees) modernize their operations and ship new products.
          Enterprise-grade thinking, without the enterprise price tag.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>AI &amp; business automation — agents, chatbots, document and workflow automation</li>
          <li>Cloud infrastructure &amp; migration — Azure, AWS, Kubernetes, Terraform, CI/CD</li>
          <li>Full-stack web &amp; mobile — TypeScript, Next.js, Python, React Native</li>
          <li>Data engineering &amp; analytics — Snowflake, Databricks, PowerBI, SQL</li>
        </ul>

        <p>
          <strong>Where you can find me.</strong>{" "}
          <Link href={LINKS.linkedin}>LinkedIn</Link>,{" "}
          <Link href={LINKS.github}>GitHub</Link>,{" "}
          <Link href={`mailto:${LINKS.email}`} external={false}>
            Email
          </Link>
          , <Link href={LINKS.cal}>book a 30-minute discovery call</Link>.
        </p>
      </div>
    </main>
  );
}
