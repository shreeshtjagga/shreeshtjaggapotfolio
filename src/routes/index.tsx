import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Ambient } from "@/components/site/Ambient";
import { SplitText } from "@/components/site/AnimatedText";
import { Typewriter } from "@/components/site/motion-bits";
import { profile, RESUME_URL } from "@/lib/portfolio-data";
import heroVisual from "@/assets/hero-visual.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shreesht Jagga — Machine Learning & Data Science" },
      {
        name: "description",
        content:
          "Portfolio of Shreesht Jagga — final-year B.Tech Data Science student building applied ML systems, high-performance backends, and agentic AI platforms.",
      },
      { property: "og:title", content: "Shreesht Jagga — Machine Learning & Data Science" },
      {
        property: "og:description",
        content:
          "Applied ML, agentic AI platforms, and high-performance backend systems. Projects, skills, and experience.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="animate-page-enter">
      <Ambient tone="mixed" />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-32 pb-16 sm:pt-40 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div className="min-w-0">
          <p
            className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-primary"
            style={{ animation: "rise-in .6s var(--ease-out-soft) both" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Open to SWE / ML roles
          </p>

          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.03] sm:text-6xl lg:text-[4.2rem]">
            <SplitText text="Shreesht" delay={120} />
            <br />
            <SplitText text="Jagga" delay={420} charClassName="text-gradient" />
          </h1>

          <p
            className="mt-5 font-mono text-sm text-muted-foreground sm:text-base"
            style={{ animation: "rise-in .7s var(--ease-out-soft) both", animationDelay: "780ms" }}
          >
            <Typewriter phrases={[...profile.rotatingRoles]} />
          </p>

          <p
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground"
            style={{ animation: "rise-in .7s var(--ease-out-soft) both", animationDelay: "900ms" }}
          >
            {profile.tagline}
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-3"
            style={{ animation: "rise-in .7s var(--ease-out-soft) both", animationDelay: "1020ms" }}
          >
            <Link
              to="/projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-16px_var(--glow)]"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-border px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
            >
              Contact Me
            </Link>
            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <Download size={15} /> Download Resume
            </a>
          </div>

          <div
            className="mt-10 flex items-center gap-3"
            style={{ animation: "rise-in .7s var(--ease-out-soft) both", animationDelay: "1140ms" }}
          >
            {[
              { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: profile.github, icon: Github, label: "GitHub" },
              { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="group grid h-11 w-11 place-items-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_24px_-6px_var(--glow)]"
              >
                <Icon size={18} className="transition-transform duration-300 group-hover:rotate-[8deg]" />
              </a>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div
          className="relative min-w-0"
          style={{ animation: "rise-in .9s var(--ease-out-soft) both", animationDelay: "300ms" }}
        >
          <div className="glass-panel relative aspect-square w-full overflow-hidden rounded-[2rem] sm:aspect-[4/3] lg:aspect-square">
            <img
              src={heroVisual}
              alt="Abstract retro-futuristic 3D composition in aqua and violet"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-primary/20"
            />
          </div>
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[3rem] opacity-50 blur-3xl"
            style={{ background: "var(--gradient-accent)", opacity: 0.14 }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 sm:grid-cols-3">
          {[
            { k: "Focus", v: "Applied ML & Backend Systems" },
            { k: "Based in", v: profile.location },
            { k: "Currently", v: profile.subRole },
          ].map((s) => (
            <div key={s.k} className="bg-background/60 px-6 py-6 backdrop-blur-sm">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary/75">{s.k}</p>
              <p className="mt-2 text-sm text-foreground/90">{s.v}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
