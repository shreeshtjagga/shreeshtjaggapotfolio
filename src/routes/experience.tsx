import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, ExternalLink, GraduationCap, MapPin, Trophy } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { timeline, CANTILEVER_LOGO } from "@/lib/portfolio-data";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Education & Experience | Shreesht Jagga" },
      {
        name: "description",
        content:
          "B.Tech in Data Science at Geethanjali College of Engineering and Technology, and a machine learning internship at Cantilever Labs.",
      },
      { property: "og:title", content: "Education & Experience | Shreesht Jagga" },
      {
        property: "og:description",
        content: "Timeline of study and applied machine learning work.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: Experience,
});

function Experience() {
  return (
    <PageShell
      eyebrow="Education & Experience"
      title="A timeline of study and applied work."
      intro="Classroom fundamentals on one side, real inference pipelines on the other."
      tone="violet"
    >
      <div className="relative pl-6 sm:pl-10 md:pl-12">
        <div
          aria-hidden
          className="absolute left-[9px] top-2 bottom-2 w-px sm:left-[17px]"
          style={{
            background:
              "linear-gradient(180deg, transparent, oklch(0.82 0.145 190 / 60%), oklch(0.68 0.17 295 / 50%), transparent)",
          }}
        />
        <div className="space-y-6 sm:space-y-8">
          {timeline.map((entry, i) => {
            const Icon =
              entry.kind === "education"
                ? GraduationCap
                : entry.kind === "award"
                  ? Trophy
                  : Briefcase;
            return (
              <Reveal key={entry.title} variant="slide-right" delay={i * 80}>
                <div className="relative">
                  <span className="absolute -left-6 top-5 grid h-5 w-5 place-items-center rounded-full border border-primary/45 bg-background text-primary shadow-[0_0_12px_-4px_var(--glow)] sm:-left-10 sm:h-9 sm:w-9 md:-left-12">
                    <Icon size={12} className="sm:hidden" />
                    <Icon size={16} className="hidden sm:block" />
                  </span>

                  <article className="surface-card lift-hover p-5 sm:p-7 md:p-8">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-primary sm:px-3 sm:py-1 sm:text-[11px]">
                        {entry.kind === "education"
                          ? "Education"
                          : entry.kind === "award"
                            ? "Achievement"
                            : "Experience"}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">{entry.period}</span>
                    </div>

                    <h2 className="mt-3 font-display text-lg font-semibold sm:text-xl md:text-2xl">
                      {entry.title}
                    </h2>
                    <div className="mt-2 flex items-center gap-2.5">
                      {entry.org === "Cantilever Labs" && (
                        <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl border border-primary/25 bg-surface-2/80 p-1.5 shadow-inner backdrop-blur-md">
                          <img
                            src={CANTILEVER_LOGO}
                            alt="Cantilever Labs logo"
                            loading="lazy"
                            className="h-full w-full object-contain filter drop-shadow"
                          />
                        </span>
                      )}
                      <p className="text-xs font-medium text-foreground/85 sm:text-sm">{entry.org}</p>
                    </div>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin size={12} /> {entry.location}
                    </p>

                    <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                      {entry.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="flex gap-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {entry.link && (
                      <a
                        href={entry.link}
                        target="_blank"
                        rel="noreferrer"
                        className="group mt-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/40 px-3.5 py-1.5 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary sm:mt-6 sm:px-4 sm:py-2 sm:text-[13px]"
                      >
                        {entry.linkLabel}
                        <ExternalLink
                          size={13}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </a>
                    )}
                  </article>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}
