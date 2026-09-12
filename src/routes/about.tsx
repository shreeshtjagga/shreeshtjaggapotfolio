import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { aboutHighlights } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Shreesht Jagga" },
      {
        name: "description",
        content:
          "About Shreesht Jagga: final-year Data Science undergraduate building applied machine learning systems, data pipelines, and backend architectures.",
      },
      { property: "og:title", content: "About | Shreesht Jagga" },
      {
        property: "og:description",
        content: "Background, expertise, and focus areas of Shreesht Jagga.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <PageShell
      eyebrow="About"
      title="Hi, I'm Shreesht."
      intro="I'm a Data Science student passionate about building reliable software, thoughtful machine learning systems, and backend platforms that solve real problems."
      tone="aqua"
    >
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr]">
        <Reveal variant="scale">
          <div className="relative group mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-primary/30 bg-surface/60 shadow-[var(--shadow-soft)] transition-all duration-500 group-hover:border-primary/60 group-hover:shadow-[var(--shadow-glow)]">
              <img
                src="/avatar.png"
                alt="Shreesht Jagga Profile Portrait"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/avatar.svg";
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40"
              />
            </div>
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-3xl blur-2xl transition-opacity duration-500 opacity-20 group-hover:opacity-35"
              style={{ background: "var(--gradient-accent)" }}
            />
          </div>
        </Reveal>

        <div>
          {aboutHighlights.map((line, i) => (
            <Reveal key={i} delay={i * 80} className="mb-4 sm:mb-5">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px] sm:leading-[1.8]">{line}</p>
            </Reveal>
          ))}

          <Reveal delay={200}>
            <div className="glass-panel mt-8 flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:p-6">
              <div className="min-w-0">
                <p className="font-display text-base font-semibold sm:text-lg">Where I've studied and worked</p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  Geethanjali College of Engineering and Technology · Cantilever Labs
                </p>
              </div>
              <div className="flex shrink-0 sm:ml-auto">
                <Link
                  to="/experience"
                  className="group inline-flex items-center gap-2 rounded-full border border-primary/45 bg-primary/8 px-4 py-2 text-xs font-medium text-primary shadow-[0_0_16px_-6px_var(--glow)] transition-all duration-300 hover:-translate-y-0.5 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  See the timeline
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </PageShell>
  );
}
