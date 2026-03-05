export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div className="space-y-4">
        <p>
          I&apos;m a full-stack engineer and AI consultant with 8+ years of
          experience building production systems for demanding environments in
          finance, automotive, and aerospace. I&apos;ve held versatile roles
          spanning automation, DevOps, web and mobile development, cloud
          infrastructure management, and network security. I&apos;ve been part
          of skilled teams at a $10B+ asset manager, built automation platforms
          for public companies, and shipped AI tools that achieved{" "}
          <span className="text-slate-200">enterprise-wide adoption</span>.
        </p>
        <p>
          Now, through{" "}
          <span className="text-slate-200">Ghumaan Ventures, LLC</span>, I work
          directly with small and mid-market businesses to modernize their
          operations. My clients are companies with 1&ndash;500 employees who know
          they need to leverage AI and modern technology but don&apos;t have the
          internal expertise to do it right. I bring enterprise-grade thinking
          without the enterprise price tag.
        </p>
        <p>
          I&apos;m AI-forward in everything I build. Every solution I deliver
          leverages the latest in LLMs, automation frameworks, and cloud-native
          architecture &mdash; not because it&apos;s trendy, but because it
          delivers measurably better outcomes. I stay obsessively up to speed on
          the latest tools, models, and best practices so my clients don&apos;t
          have to.
        </p>
        <p>
          Currently, I&apos;m building products and consulting with clients
          across the globe &mdash; from the diamond industry in New York to wedding
          technology in Asia &mdash; while traveling internationally as a
          digital nomad.
        </p>
      </div>
    </section>
  );
}
