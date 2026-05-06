"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { SITE_DATA } from "@/lib/site-data";

const TM_NAV = [
  { id: "about", label: "about", cmd: "cat about.md" },
  { id: "services", label: "services", cmd: "ls services/" },
  { id: "experience", label: "experience", cmd: "git log --oneline" },
  { id: "contact", label: "contact", cmd: "./book-call" },
] as const;

function tmHash(seed: number) {
  let h = 2166136261 ^ seed;
  for (let i = 0; i < 4; i++) h = Math.imul(h, 16777619);
  return (h >>> 0).toString(16).padStart(7, "0").slice(0, 7);
}

function Caret() {
  return <span className="tm-cursor">▊</span>;
}

function Headshot({ variant }: { variant: "rail" | "mobile" }) {
  return (
    <div className={variant === "rail" ? "tm-headshot" : "tm-headshot-mobile"}>
      <Image
        src="/headshot.jpg"
        alt={SITE_DATA.name}
        width={440}
        height={440}
        className="tm-headshot-img"
        priority
      />
    </div>
  );
}

function TerminalBackground() {
  return (
    <div className="tm-bg" aria-hidden="true">
      <div className="tm-grid-dots" />
      <div className="tm-scanlines" />
      <div className="tm-vignette" />
      <div className="tm-glow" />
      <div className="tm-glow tm-glow-2" />
    </div>
  );
}

function TerminalChrome({
  children,
  title,
  action,
}: {
  children: React.ReactNode;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="tm-window">
      <div className="tm-titlebar">
        <span className="tm-dot tm-dot-r" />
        <span className="tm-dot tm-dot-y" />
        <span className="tm-dot tm-dot-g" />
        <span className="tm-title">{title}</span>
        {action && <span className="tm-titlebar-action">{action}</span>}
      </div>
      <div className="tm-window-body">{children}</div>
    </div>
  );
}

function TerminalHero() {
  const d = SITE_DATA;

  const sequence = useMemo(
    () => [
      { prompt: "$", cmd: "whoami --verbose", delay: 350 },
      { prompt: "$", cmd: "cat ./status.json", delay: 400 },
    ],
    []
  );

  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (step >= sequence.length) {
      setDone(true);
      return;
    }
    const cur = sequence[step];
    let i = 0;
    setTyped("");
    const tick = setInterval(() => {
      i++;
      setTyped(cur.cmd.slice(0, i));
      if (i >= cur.cmd.length) {
        clearInterval(tick);
        setTimeout(() => setStep((s) => s + 1), cur.delay);
      }
    }, 50);
    return () => clearInterval(tick);
  }, [step, sequence]);

  return (
    <header className="tm-hero" id="top">
      <TerminalChrome
        title="~/ghumaan-ventures — zsh — 120×40"
        action={<span className="tm-titlebar-meta">⌘K to nav</span>}
      >
        <div className="tm-line">
          <span className="tm-prompt">kv@ghumaan</span>
          <span className="tm-sep">:</span>
          <span className="tm-path">~</span>
          <span className="tm-sep">$</span>
          <span className="tm-cmd">
            {step === 0 ? typed : sequence[0].cmd}
          </span>
          {step === 0 && typed.length < sequence[0].cmd.length && <Caret />}
        </div>

        {step >= 1 && (
          <div className="tm-output">
            <div className="tm-kv">
              <span className="tm-k">name</span>
              <span className="tm-eq">=</span>
              <span className="tm-v-accent">&quot;{d.name}&quot;</span>
            </div>
            <div className="tm-kv">
              <span className="tm-k">role</span>
              <span className="tm-eq">=</span>
              <span className="tm-v">&quot;{d.role}&quot;</span>
            </div>
            <div className="tm-kv">
              <span className="tm-k">company</span>
              <span className="tm-eq">=</span>
              <span className="tm-v">&quot;Ghumaan Ventures, LLC&quot;</span>
            </div>
            <div className="tm-kv">
              <span className="tm-k">building</span>
              <span className="tm-eq">=</span>
              <span className="tm-v">
                [
                <a
                  className="tm-link tm-link-accent"
                  href="https://lobstir.ai"
                  target="_blank"
                  rel="noreferrer"
                >
                  &quot;lobstir.ai&quot;
                </a>
                ,{" "}
                <a
                  className="tm-link tm-link-accent"
                  href="https://phera.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  &quot;phera.io&quot;
                </a>
                ]
              </span>
            </div>
            <div className="tm-kv">
              <span className="tm-k">stack</span>
              <span className="tm-eq">=</span>
              <span className="tm-v">
                [&quot;TypeScript&quot;, &quot;Python&quot;, &quot;Cloud&quot;,
                &quot;AI&quot;]
              </span>
            </div>
          </div>
        )}

        {step >= 1 && (
          <div className="tm-line tm-line-spaced">
            <span className="tm-prompt">kv@ghumaan</span>
            <span className="tm-sep">:</span>
            <span className="tm-path">~</span>
            <span className="tm-sep">$</span>
            <span className="tm-cmd">
              {step === 1 ? typed : sequence[1].cmd}
            </span>
            {step === 1 && typed.length < sequence[1].cmd.length && <Caret />}
          </div>
        )}

        {done && (
          <div className="tm-output">
            <div className="tm-json">
              <div>{"{"}</div>
              <div className="tm-json-row">
                <span className="tm-json-key">&quot;availability&quot;</span>:{" "}
                <span className="tm-json-val tm-status-ok">
                  <span className="tm-status-dot" />
                  &quot;accepting select consulting · Q2 2026&quot;
                </span>
                ,
              </div>
              <div className="tm-json-row">
                <span className="tm-json-key">&quot;location&quot;</span>:{" "}
                <span className="tm-json-val">
                  &quot;global · remote-first&quot;
                </span>
                ,
              </div>
              <div className="tm-json-row">
                <span className="tm-json-key">&quot;focus&quot;</span>:{" "}
                <span className="tm-json-val">
                  &quot;AI agents, automation, cloud infra&quot;
                </span>
                ,
              </div>
              <div className="tm-json-row">
                <span className="tm-json-key">&quot;reachable_via&quot;</span>:{" "}
                <span className="tm-json-val">
                  [&quot;email&quot;, &quot;linkedin&quot;, &quot;cal.com&quot;]
                </span>
              </div>
              <div>{"}"}</div>
            </div>
            <div className="tm-line tm-line-spaced">
              <span className="tm-prompt">kv@ghumaan</span>
              <span className="tm-sep">:</span>
              <span className="tm-path">~</span>
              <span className="tm-sep">$</span>
              <Caret />
            </div>
          </div>
        )}
      </TerminalChrome>

      <div className="tm-hero-actions">
        <a
          className="tm-btn-primary"
          href={d.cal}
          target="_blank"
          rel="noreferrer"
        >
          <span className="tm-bracket">[</span> ./book-call{" "}
          <span className="tm-bracket">]</span>
        </a>
        <a
          className="tm-btn-ghost"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <span className="tm-bracket">[</span> cat resume.pdf{" "}
          <span className="tm-bracket">]</span>
        </a>
      </div>
    </header>
  );
}

function TerminalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="tm-section" id={id}>
      <div className="tm-section-rule">
        <a
          className="tm-section-anchor"
          href={`#${id}`}
          aria-label={`Link to ${id}`}
        >
          #
        </a>
        <span className="tm-section-tag">
          ─── {title} ───────────────────────────────────────────────────────────────
        </span>
      </div>
      <div className="tm-section-body">{children}</div>
    </section>
  );
}

function TerminalAbout() {
  return (
    <TerminalSection id="about" title="$ cat about.md">
      <div className="tm-prose">
        {SITE_DATA.about.map((p, i) => (
          <p key={i}>
            <span className="tm-comment-inline">{`> `}</span>
            {p}
          </p>
        ))}
      </div>
    </TerminalSection>
  );
}

function TerminalServices() {
  return (
    <TerminalSection id="services" title="$ ls services/">
      <div className="tm-services">
        {SITE_DATA.services.map((s, i) => (
          <div key={s.title} className="tm-service">
            <div className="tm-service-head">
              <span className="tm-service-idx">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="tm-service-name">{s.title}</span>
              <span className="tm-service-ext">.md</span>
            </div>
            <p className="tm-service-desc">{s.description}</p>
            <div className="tm-service-tags">
              {s.tags.map((t) => (
                <span key={t} className="tm-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </TerminalSection>
  );
}

function TerminalExperience() {
  return (
    <TerminalSection id="experience" title="$ git log --pretty=oneline">
      <div className="tm-exp-list">
        {SITE_DATA.experience.map((e, i) => (
          <div key={i} className="tm-exp">
            <div className="tm-exp-meta">
              <span className="tm-exp-hash">{tmHash(i + 17)}</span>
              <span className="tm-exp-date">({e.date})</span>
            </div>
            <h3 className="tm-exp-title">
              {e.url ? (
                <a href={e.url} target="_blank" rel="noreferrer">
                  {e.title}{" "}
                  <span className="tm-exp-co">@ {e.company}</span>
                  <span className="tm-exp-arrow">↗</span>
                </a>
              ) : (
                <>
                  {e.title} <span className="tm-exp-co">@ {e.company}</span>
                </>
              )}
            </h3>
            <p className="tm-exp-desc">{e.description}</p>
            <div className="tm-service-tags">
              {e.tags.map((t) => (
                <span key={t} className="tm-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <a
        href="/resume.pdf"
        className="tm-resume-link"
        target="_blank"
        rel="noreferrer"
      >
        $ open resume.pdf →
      </a>
    </TerminalSection>
  );
}

function TerminalCTA() {
  return (
    <section className="tm-cta" id="contact">
      <TerminalChrome title="contact.sh — bash">
        <div className="tm-line">
          <span className="tm-comment">#!/bin/bash</span>
        </div>
        <div className="tm-line">
          <span className="tm-comment"># Let&apos;s work together.</span>
        </div>
        <div className="tm-line tm-line-spaced">
          <span className="tm-prompt">$</span>{" "}
          <span className="tm-cmd">
            echo{" "}
            <span className="tm-string">
              &quot;Whether you need AI automation, cloud infra,&quot;
            </span>
          </span>
        </div>
        <div className="tm-line">
          <span className="tm-prompt">$</span>{" "}
          <span className="tm-cmd">
            echo{" "}
            <span className="tm-string">
              &quot;a custom app, or just want to explore — let&apos;s
              talk.&quot;
            </span>
          </span>
        </div>
        <div className="tm-line tm-line-spaced">
          <span className="tm-prompt">$</span>{" "}
          <span className="tm-cmd">
            open{" "}
            <a
              className="tm-link tm-link-accent"
              href={SITE_DATA.cal}
              target="_blank"
              rel="noreferrer"
            >
              https://cal.com/ghumaan-ventures/30min
            </a>
          </span>
          <Caret />
        </div>
        <div className="tm-cta-actions">
          <a
            className="tm-btn-primary"
            href={SITE_DATA.cal}
            target="_blank"
            rel="noreferrer"
          >
            <span className="tm-bracket">[</span> book 30min discovery call{" "}
            <span className="tm-bracket">]</span>
          </a>
        </div>
      </TerminalChrome>
    </section>
  );
}

function TerminalFooter() {
  const d = SITE_DATA;
  return (
    <footer className="tm-footer">
      <div>
        <span className="tm-comment">
          # © 2026 Ghumaan Ventures, LLC · built w/ next.js · deployed on vercel
        </span>
      </div>
      <div className="tm-footer-links">
        <a href={d.github} target="_blank" rel="noreferrer">
          github
        </a>
        <span className="tm-sep">·</span>
        <a href={d.linkedin} target="_blank" rel="noreferrer">
          linkedin
        </a>
        <span className="tm-sep">·</span>
        <a href={`mailto:${d.email}`}>email</a>
      </div>
    </footer>
  );
}

function TerminalStatusBar() {
  const [time, setTime] = useState<Date | null>(null);
  useEffect(() => {
    const initial = setTimeout(() => setTime(new Date()), 0);
    const id = setInterval(() => setTime(new Date()), 60000);
    return () => {
      clearTimeout(initial);
      clearInterval(id);
    };
  }, []);
  return (
    <div className="tm-statusbar">
      <span>
        <span className="tm-bullet" />
        kv@ghumaan-ventures.com
      </span>
      <span className="tm-statusbar-mid">~/ghumaan-ventures — main</span>
      <span>
        {time
          ? `${time.toISOString().slice(0, 10)} ${time
              .toTimeString()
              .slice(0, 5)} UTC · v2.0.0`
          : "v2.0.0"}
      </span>
    </div>
  );
}

function TerminalNavRail() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const ids = ["top", ...TM_NAV.map((n) => n.id)];
    const observers: IntersectionObserver[] = [];
    const visible = new Set<string>();
    const onChange = () => {
      const ordered = ids.filter((id) => visible.has(id));
      if (ordered.length) setActive(ordered[0]);
    };
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const ob = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) visible.add(id);
            else visible.delete(id);
          });
          onChange();
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      ob.observe(el);
      observers.push(ob);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="tm-nav" aria-label="Section navigation">
      <Headshot variant="rail" />
      <ul>
        {TM_NAV.map((n) => (
          <li key={n.id}>
            <a
              href={`#${n.id}`}
              className={`tm-nav-item ${active === n.id ? "is-active" : ""}`}
            >
              <span className="tm-nav-marker">
                {active === n.id ? "▸" : " "}
              </span>
              <span className="tm-nav-label">{n.label}</span>
              <span className="tm-nav-cmd">{n.cmd}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

type PaletteItem = {
  id: string;
  label: string;
  hint: string;
  action: () => void;
};

function TerminalPalette({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [idx, setIdx] = useState(0);

  const items: PaletteItem[] = useMemo(
    () => [
      ...TM_NAV.map((n) => ({
        id: `nav:${n.id}`,
        label: `Go to ${n.label}`,
        hint: n.cmd,
        action: () => {
          const el = document.getElementById(n.id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        },
      })),
      {
        id: "cal",
        label: "Book a discovery call",
        hint: "cal.com/ghumaan-ventures",
        action: () => window.open(SITE_DATA.cal, "_blank"),
      },
      {
        id: "resume",
        label: "Open résumé",
        hint: "resume.pdf",
        action: () => window.open("/resume.pdf", "_blank"),
      },
      {
        id: "gh",
        label: "GitHub",
        hint: "github.com/kghumaan",
        action: () => window.open(SITE_DATA.github, "_blank"),
      },
      {
        id: "li",
        label: "LinkedIn",
        hint: "linkedin.com/in/kv-ghumaan",
        action: () => window.open(SITE_DATA.linkedin, "_blank"),
      },
      {
        id: "email",
        label: "Email",
        hint: SITE_DATA.email,
        action: () => {
          window.location.href = `mailto:${SITE_DATA.email}`;
        },
      },
    ],
    []
  );

  const filtered = q
    ? items.filter((i) =>
        (i.label + " " + i.hint).toLowerCase().includes(q.toLowerCase())
      )
    : items;

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => {
      setQ("");
      setIdx(0);
      inputRef.current?.focus();
    }, 30);
    return () => clearTimeout(t);
  }, [open]);

  const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
    setIdx(0);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setIdx((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const it = filtered[idx];
      if (it) {
        it.action();
        setOpen(false);
      }
    }
  };

  if (!open) return null;
  return (
    <div className="tm-palette-overlay" onClick={() => setOpen(false)}>
      <div className="tm-palette" onClick={(e) => e.stopPropagation()}>
        <div className="tm-palette-input-row">
          <span className="tm-palette-prompt">$</span>
          <input
            ref={inputRef}
            value={q}
            onChange={onQueryChange}
            onKeyDown={onKey}
            className="tm-palette-input"
            placeholder="search commands..."
            spellCheck={false}
            autoComplete="off"
          />
          <span className="tm-palette-hint">esc</span>
        </div>
        <ul className="tm-palette-list">
          {filtered.length === 0 && (
            <li className="tm-palette-empty">no matches</li>
          )}
          {filtered.map((it, i) => (
            <li
              key={it.id}
              className={`tm-palette-item ${i === idx ? "is-active" : ""}`}
              onMouseEnter={() => setIdx(i)}
              onClick={() => {
                it.action();
                setOpen(false);
              }}
            >
              <span className="tm-palette-marker">
                {i === idx ? "▸" : " "}
              </span>
              <span className="tm-palette-label">{it.label}</span>
              <span className="tm-palette-meta">{it.hint}</span>
            </li>
          ))}
        </ul>
        <div className="tm-palette-foot">
          <span>
            <kbd>↑</kbd>
            <kbd>↓</kbd> nav
          </span>
          <span>
            <kbd>↵</kbd> run
          </span>
          <span>
            <kbd>esc</kbd> close
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TerminalLanding() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="terminal-variant" data-variant="terminal">
      <TerminalBackground />
      <div className="tm-content">
        <TerminalStatusBar />
        <div className="tm-layout">
          <TerminalNavRail />
          <div className="tm-main">
            <Headshot variant="mobile" />
            <TerminalHero />
            <TerminalAbout />
            <TerminalServices />
            <TerminalExperience />
            <TerminalCTA />
            <TerminalFooter />
          </div>
        </div>
      </div>
      <TerminalPalette open={paletteOpen} setOpen={setPaletteOpen} />
    </div>
  );
}
