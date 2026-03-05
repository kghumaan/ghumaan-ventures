export default function CTA() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Get in touch"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div className="text-center lg:text-left">
        <h3 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
          Let&apos;s work together.
        </h3>
        <p className="mt-4 max-w-lg leading-relaxed lg:max-w-none">
          Whether you need AI automation, cloud infrastructure, a custom app, or
          just want to explore what&apos;s possible &mdash; I&apos;d love to
          hear about your project. Book a free 30-minute discovery call and
          let&apos;s talk.
        </p>
        <div className="mt-8">
          <a
            className="inline-block rounded-lg bg-teal-300 px-8 py-4 text-base font-semibold text-slate-950 transition-all hover:bg-teal-400 hover:shadow-[0_0_30px_rgba(94,234,212,0.3)] focus-visible:bg-teal-400"
            href="https://cal.com/ghumaan-ventures/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
