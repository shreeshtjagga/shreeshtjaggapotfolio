import { type ReactNode } from "react";
import { Ambient } from "./Ambient";
import { WordReveal } from "./AnimatedText";

export function PageShell({
  eyebrow,
  title,
  intro,
  tone = "mixed",
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "aqua" | "violet" | "mixed";
  children: ReactNode;
}) {
  return (
    <div className="animate-page-enter">
      <Ambient tone={tone} />
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-10 sm:pt-40">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-primary/80">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
          <WordReveal text={title} />
        </h1>
        {intro && (
          <p
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground"
            style={{ animation: "rise-in .7s var(--ease-out-soft) both", animationDelay: "260ms" }}
          >
            {intro}
          </p>
        )}
      </section>
      <main className="mx-auto max-w-7xl px-6 pb-8">{children}</main>
    </div>
  );
}
