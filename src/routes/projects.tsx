import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github, Sparkles, X } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { projects, type Project } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Shreesht Jagga" },
      {
        name: "description",
        content:
          "Selected work: ReqSense AI requirements platform, DataPulse agentic analysis, NSE stock signal model, stress predictor, and an alpha-beta chess engine.",
      },
      { property: "og:title", content: "Projects — Shreesht Jagga" },
      {
        property: "og:description",
        content: "ReqSense AI, DataPulse, NSE Stock Predictor, Stress Level Predictor, Chess AI.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-border/70 bg-surface/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors duration-300 group-hover:border-primary/35 group-hover:text-foreground/85">
      {children}
    </span>
  );
}

function Actions({ p, compact = false }: { p: Project; compact?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <a
        href={p.repo}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="group/btn inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-[13px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
      >
        <Github size={14} className="transition-transform duration-300 group-hover/btn:rotate-12" />
        Source Code
      </a>
      {p.demo ? (
        <a
          href={p.demo}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-4 py-2 text-[13px] font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
        >
          <ExternalLink size={14} /> Live Demo
        </a>
      ) : null}
      {!compact && (
        <span className="ml-auto font-mono text-[11px] text-muted-foreground/70">
          Click card for details
        </span>
      )}
    </div>
  );
}

function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <PageShell
      eyebrow="Projects"
      title="Systems I designed, built, and shipped."
      intro="Each one started as a question about how something works — and ended as a running service."
      tone="mixed"
    >
      <Reveal variant="clip">
        <article
          onClick={() => setActive(featured)}
          className="group relative cursor-pointer overflow-hidden rounded-[1.75rem] border border-primary/30 p-[1px]"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70"
            style={{ background: "var(--gradient-accent)" }}
          />
          <div className="relative rounded-[1.7rem] bg-background/92 px-7 py-9 backdrop-blur-xl sm:px-10 sm:py-11">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                <Sparkles size={12} /> Featured
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">Flagship project</span>
            </div>

            <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
              <span className="text-shimmer">{featured.title}</span>
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
              {featured.oneLiner}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {featured.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            <div className="mt-8">
              <Actions p={featured} />
            </div>
          </div>
        </article>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal key={p.slug} variant="rise" delay={i * 90}>
            <TiltCard className="h-full cursor-pointer px-6 py-7">
              <div onClick={() => setActive(p)} className="flex h-full flex-col">
                <h3 className="font-display text-xl font-semibold leading-snug transition-colors duration-300 group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.oneLiner}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <div className="mt-7 pt-1">
                  <Actions p={p} compact />
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-background/80 px-4 py-6 backdrop-blur-md sm:items-center"
          onClick={() => setActive(null)}
        >
          <div
            className="glass-panel relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl px-7 py-8 sm:px-9"
            style={{ animation: "pop-in .35s var(--ease-out-soft) both" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close details"
              className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <X size={16} />
            </button>

            {active.featured && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                <Sparkles size={12} /> Featured
              </span>
            )}
            <h3 className="mt-4 pr-10 font-display text-2xl font-semibold">{active.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {active.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <ul className="mt-6 space-y-4">
              {active.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Actions p={active} compact />
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
