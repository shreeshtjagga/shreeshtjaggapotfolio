import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github, Sparkles, X } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { projects, type Project } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Shreesht Jagga" },
      {
        name: "description",
        content:
          "Selected work: ReqSense AI requirements platform, DataPulse agentic analysis, NSE stock signal model, stress predictor, and an alpha-beta chess engine.",
      },
      { property: "og:title", content: "Projects | Shreesht Jagga" },
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
        className="group/btn inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/40 px-4 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary sm:text-[13px]"
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
          className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:text-[13px]"
        >
          <ExternalLink size={14} /> Live Demo
        </a>
      ) : null}
      {!compact && (
        <span className="ml-auto font-mono text-[11px] text-muted-foreground/70 hidden sm:inline">
          Click card for details
        </span>
      )}
    </div>
  );
}

function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setActive(null);
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [active]);

  return (
    <>
      <PageShell
        eyebrow="Projects"
        title="Systems I designed, built, and shipped."
        intro="Each project started with curiosity about how something works and turned into a running service."
        tone="mixed"
      >
        <Reveal variant="scale">
          <article
            onClick={() => setActive(featured)}
            className="surface-card lift-hover group relative cursor-pointer overflow-hidden p-6 sm:p-8 md:p-10"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-25 transition-opacity duration-500 group-hover:opacity-45 pointer-events-none"
              style={{ background: "var(--gradient-accent)" }}
            />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary shadow-[0_0_16px_-6px_var(--glow)]">
                  <Sparkles size={12} className="pulse-live" /> Featured
                </span>
                <span className="font-mono text-xs text-muted-foreground">Flagship project</span>
              </div>

              <h2 className="mt-4 font-display text-2xl font-semibold sm:text-3xl md:text-4xl">
                <span className="text-shimmer">{featured.title}</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {featured.oneLiner}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {featured.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div className="mt-7">
                <Actions p={featured} />
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {rest.map((p, i) => (
            <Reveal key={p.slug} variant="rise" delay={i * 70}>
              <TiltCard className="h-full cursor-pointer p-5 sm:p-6 md:p-7">
                <div onClick={() => setActive(p)} className="flex h-full flex-col">
                  <h3 className="font-display text-lg font-semibold leading-snug transition-colors duration-300 group-hover:text-primary sm:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">{p.oneLiner}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  <div className="mt-auto pt-6">
                    <Actions p={p} compact />
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </PageShell>

      {/* Project detail modal portal attached to document body */}
      {mounted &&
        active &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            className="fixed inset-0 z-[100] flex items-end justify-center bg-background/85 p-3 backdrop-blur-md sm:items-center sm:p-6 h-[100dvh] w-screen"
            onClick={() => setActive(null)}
          >
            <div
              className="glass-panel relative max-h-[88dvh] w-full max-w-2xl overflow-y-auto rounded-3xl p-6 sm:p-8"
              style={{ animation: "pop-in .3s var(--ease-out-soft) both" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close details"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-border/70 bg-surface/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <X size={16} />
              </button>

              {active.featured && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  <Sparkles size={12} /> Featured
                </span>
              )}
              <h3 className="mt-3 pr-10 font-display text-xl sm:text-2xl font-semibold">{active.title}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {active.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <ul className="mt-5 space-y-3">
                {active.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-2">
                <Actions p={active} compact />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
