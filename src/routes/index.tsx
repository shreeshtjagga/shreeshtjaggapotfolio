import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Ambient } from "@/components/site/Ambient";
import { SplitText } from "@/components/site/AnimatedText";
import { Typewriter } from "@/components/site/motion-bits";
import { profile, RESUME_URL } from "@/lib/portfolio-data";
import heroMark from "@/assets/hero-mark.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shreesht Jagga Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Shreesht Jagga — B.Tech Data Science student building applied ML systems, high-performance backends, and agentic AI platforms.",
      },
      { property: "og:title", content: "Shreesht Jagga Portfolio" },
      {
        property: "og:description",
        content:
          "Portfolio of Shreesht Jagga — B.Tech Data Science student building applied ML systems, high-performance backends, and agentic AI platforms.",
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
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group grid h-11 w-11 place-items-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_24px_-6px_var(--glow)]"
              >
                <Icon size={18} className="transition-transform duration-300 group-hover:rotate-[8deg]" />
              </a>
            ))}
            <Link
              to="/contact"
              aria-label="Email"
              className="group grid h-11 w-11 place-items-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_24px_-6px_var(--glow)]"
            >
              <Mail size={18} className="transition-transform duration-300 group-hover:rotate-[8deg]" />
            </Link>

          </div>
        </div>

        {/* Hero visual */}
        <div
          className="relative min-w-0"
          style={{ animation: "rise-in .9s var(--ease-out-soft) both", animationDelay: "300ms" }}
        >
          <img
            src={heroMark}
            alt="Minimal hexagon and connected-node mark representing machine learning and data systems"
            width={1024}
            height={1024}
            className="robot-float relative z-10 mx-auto w-full max-w-[560px] select-none object-contain opacity-95 mix-blend-screen"
          />
          <div
            aria-hidden
            className="absolute inset-6 -z-10 rounded-full blur-[90px]"
            style={{ background: "var(--gradient-accent)", opacity: 0.18 }}
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
