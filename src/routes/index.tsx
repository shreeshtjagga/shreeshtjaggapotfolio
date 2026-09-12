import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { Ambient } from "@/components/site/Ambient";
import { SplitText } from "@/components/site/AnimatedText";
import { Typewriter } from "@/components/site/motion-bits";
import { profile, RESUME_URL } from "@/lib/portfolio-data";
import heroMark from "@/assets/hero-mark.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shreesht Jagga | Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Shreesht Jagga, B.Tech Data Science student building applied ML systems, high-performance backends, and agentic AI platforms.",
      },
      { property: "og:title", content: "Shreesht Jagga | Portfolio" },
      {
        property: "og:description",
        content:
          "Portfolio of Shreesht Jagga, B.Tech Data Science student building applied ML systems, high-performance backends, and agentic AI platforms.",
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
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 pt-28 pb-12 sm:px-6 sm:pt-36 md:pt-40 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-16">
        <div className="min-w-0">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary shadow-[0_0_20px_-6px_var(--glow)]"
            style={{ animation: "rise-in .5s var(--ease-out-soft) both" }}
          >
            <span className="h-2 w-2 rounded-full bg-primary pulse-live" />
            Open to SWE / ML roles
          </div>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.2rem]">
            <SplitText text="Shreesht" delay={80} />
            <br />
            <SplitText text="Jagga" delay={360} charClassName="text-gradient" />
          </h1>

          <p
            className="mt-4 font-mono text-sm text-muted-foreground sm:text-base md:text-lg"
            style={{ animation: "rise-in .6s var(--ease-out-soft) both", animationDelay: "600ms" }}
          >
            <Typewriter phrases={[...profile.rotatingRoles]} />
          </p>

          <p
            className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
            style={{ animation: "rise-in .6s var(--ease-out-soft) both", animationDelay: "750ms" }}
          >
            {profile.tagline}
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            style={{ animation: "rise-in .6s var(--ease-out-soft) both", animationDelay: "900ms" }}
          >
            <Link
              to="/projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[image:var(--gradient-accent)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_var(--glow)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_var(--glow)] sm:px-6 sm:py-3"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-border/80 bg-surface/40 px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary sm:px-6 sm:py-3"
            >
              Contact Me
            </Link>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/40 px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary sm:py-3"
            >
              <FileText size={15} /> Resume
            </a>
          </div>

          <div
            className="mt-8 flex items-center gap-3 sm:mt-10"
            style={{ animation: "rise-in .6s var(--ease-out-soft) both", animationDelay: "1050ms" }}
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
                className="group grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-surface/30 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_24px_-6px_var(--glow)] sm:h-11 sm:w-11"
              >
                <Icon size={18} className="transition-transform duration-300 group-hover:rotate-[8deg]" />
              </a>
            ))}
            <Link
              to="/contact"
              aria-label="Email"
              className="group grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-surface/30 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_24px_-6px_var(--glow)] sm:h-11 sm:w-11"
            >
              <Mail size={18} className="transition-transform duration-300 group-hover:rotate-[8deg]" />
            </Link>
          </div>
        </div>

        {/* Hero visual */}
        <div
          className="relative mx-auto w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[500px]"
          style={{ animation: "rise-in .8s var(--ease-out-soft) both", animationDelay: "200ms" }}
        >
          <img
            src={heroMark}
            alt="Minimal hexagon and connected-node mark representing machine learning and data systems"
            width={1024}
            height={1024}
            className="robot-float relative z-10 mx-auto w-full select-none object-contain opacity-95 mix-blend-screen drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          />
          <div
            aria-hidden
            className="absolute inset-4 -z-10 rounded-full blur-[70px] sm:blur-[90px]"
            style={{ background: "var(--gradient-accent)", opacity: 0.25 }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 sm:grid-cols-3">
          {[
            { k: "Focus", v: "Applied ML & Backend Systems" },
            { k: "Based in", v: profile.location },
            { k: "Currently", v: profile.subRole },
          ].map((s) => (
            <div key={s.k} className="bg-background/60 px-5 py-5 backdrop-blur-sm sm:px-6 sm:py-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary/80">{s.k}</p>
              <p className="mt-1.5 text-sm font-medium text-foreground/90">{s.v}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
