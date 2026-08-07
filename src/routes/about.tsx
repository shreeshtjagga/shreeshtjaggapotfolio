import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { aboutHighlights, RESUME_URL } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shreesht Jagga" },
      {
        name: "description",
        content:
          "About Shreesht Jagga: final-year Data Science undergraduate with strong foundations in algorithms, probability, statistics, and applied machine learning.",
      },
      { property: "og:title", content: "About — Shreesht Jagga" },
      {
        property: "og:description",
        content: "Background, focus areas, and the story behind the work of Shreesht Jagga.",
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
      title="Engineering intuition, built from first principles."
      intro="I like understanding systems all the way down — writing neural nets from scratch, then shipping them behind a backend that holds up under load."
      tone="aqua"
    >
      <div className="grid gap-12 lg:grid-cols-[320px_1fr]">
        <Reveal variant="scale">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-primary/25 bg-surface/60">
              <div className="grid h-full place-items-center px-6 text-center">
                <div>
                  <div
                    aria-hidden
                    className="mx-auto h-20 w-20 rounded-full border border-dashed border-primary/45"
                    style={{ animation: "spin-slow 18s linear infinite" }}
                  />
                  <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-primary/80">
                    [ADD PROFILE PHOTO]
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Drop your photo here to replace this frame.
                  </p>
                </div>
              </div>
            </div>
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2.25rem] blur-2xl"
              style={{ background: "var(--gradient-accent)", opacity: 0.16 }}
            />
          </div>
        </Reveal>

        <div>
          {aboutHighlights.map((line, i) => (
            <Reveal key={i} delay={i * 120} className="mb-5">
              <p className="text-[15px] leading-[1.85] text-muted-foreground">{line}</p>
            </Reveal>
          ))}




          <Reveal delay={260}>
            <div className="glass-panel mt-10 flex flex-col gap-4 rounded-2xl px-6 py-6 sm:flex-row sm:items-center">
              <div className="min-w-0">
                <p className="font-display text-lg">Where I've studied and worked</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Geethanjali College of Engineering and Technology · Cantilever Labs
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3 sm:ml-auto">
                <Link
                  to="/experience"
                  className="group inline-flex items-center gap-2 rounded-full border border-primary/45 px-4 py-2 text-sm text-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_-8px_var(--glow)]"
                >
                  See the timeline
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={RESUME_URL}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Download size={15} /> Resume
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </PageShell>
  );
}
