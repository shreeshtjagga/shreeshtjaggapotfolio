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
      <section className="mx-auto max-w-7xl px-4 pt-28 pb-8 sm:px-6 sm:pt-36 md:pt-40 md:pb-10">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary/80">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          <WordReveal text={title} />
        </h1>
        {intro && (
          <p
            className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg"
            style={{ animation: "rise-in .6s var(--ease-out-soft) both", animationDelay: "200ms" }}
          >
            {intro}
          </p>
        )}
      </section>
      <main className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">{children}</main>
    </div>
  );
}
