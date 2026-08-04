import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, ExternalLink, GraduationCap, MapPin } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { timeline } from "@/lib/portfolio-data";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Education & Experience — Shreesht Jagga" },
      {
        name: "description",
        content:
          "B.Tech in Data Science at Geethanjali College of Engineering and Technology, and a machine learning internship at Cantilever Labs.",
      },
      { property: "og:title", content: "Education & Experience — Shreesht Jagga" },
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
      <div className="relative pl-8 sm:pl-12">
        <div
          aria-hidden
          className="absolute left-[11px] top-2 bottom-2 w-px sm:left-[19px]"
          style={{
            background:
              "linear-gradient(180deg, transparent, oklch(0.82 0.145 190 / 55%), oklch(0.68 0.17 295 / 45%), transparent)",
          }}
        />
        <div className="space-y-10">
          {timeline.map((entry, i) => {
            const Icon = entry.kind === "education" ? GraduationCap : Briefcase;
            return (
              <Reveal key={entry.title} variant="slide-right" delay={i * 120}>
                <div className="relative">
                  <span className="absolute -left-8 top-6 grid h-6 w-6 place-items-center rounded-full border border-primary/45 bg-background text-primary sm:-left-12 sm:h-10 sm:w-10">
                    <Icon size={14} className="sm:hidden" />
                    <Icon size={17} className="hidden sm:block" />
                  </span>

                  <article className="surface-card lift-hover px-6 py-7 sm:px-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-primary/30 bg-primary/8 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                        {entry.kind === "education" ? "Education" : "Experience"}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">{entry.period}</span>
                    </div>

                    <h2 className="mt-4 font-display text-xl font-semibold sm:text-2xl">
                      {entry.title}
                    </h2>
                    <p className="mt-1 text-sm text-foreground/85">{entry.org}</p>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin size={12} /> {entry.location}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {entry.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {entry.link && (
                      <a
                        href={entry.link}
                        target="_blank"
                        rel="noreferrer"
                        className="group mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-[13px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                      >
                        {entry.linkLabel}
                        <ExternalLink
                          size={14}
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
