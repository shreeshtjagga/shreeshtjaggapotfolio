import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Award, X } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { certifications } from "@/lib/portfolio-data";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates — Shreesht Jagga" },
      {
        name: "description",
        content:
          "Certifications from Cisco Networking Academy, Oracle Academy, and AWS in Python, database design, SQL, and generative AI.",
      },
      { property: "og:title", content: "Certificates — Shreesht Jagga" },
      {
        property: "og:description",
        content: "Cisco Python Essentials, Oracle Academy database credentials, AWS generative AI.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/certificates" },
    ],
    links: [{ rel: "canonical", href: "/certificates" }],
  }),
  component: Certificates,
});

type Cert = (typeof certifications)[number];

function Certificates() {
  const [active, setActive] = useState<Cert | null>(null);

  return (
    <PageShell
      eyebrow="Certificates"
      title="Credentials that back the fundamentals."
      intro="Formal certifications across programming, databases, and generative AI."
      tone="aqua"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} variant="scale" delay={i * 80}>
            <article className="surface-card lift-hover group flex h-full flex-col px-6 py-7">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-border/70 bg-foreground/90 p-2.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-105">
                  <img
                    src={c.logo}
                    alt={`${c.issuer} logo`}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="ml-auto shrink-0 text-primary/70">
                  <Award size={18} />
                </span>
              </div>
              <h2 className="mt-5 font-display text-lg font-semibold leading-snug">{c.title}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.issuer}</p>
              <button
                type="button"
                onClick={() => setActive(c)}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-[13px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
              >
                View Certificate
              </button>
            </article>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[60] grid place-items-center bg-background/85 px-4 backdrop-blur-md"
          onClick={() => setActive(null)}
        >
          <div
            className="glass-panel relative w-full max-w-xl rounded-3xl px-7 py-8"
            style={{ animation: "pop-in .35s var(--ease-out-soft) both" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close certificate"
              className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <X size={16} />
            </button>
            <h3 className="pr-10 font-display text-xl font-semibold">{active.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{active.issuer}</p>
            <div className="mt-6 grid aspect-[4/3] place-items-center rounded-2xl border border-dashed border-primary/35 bg-surface/40 text-center">
              <div className="px-6">
                <img
                  src={active.logo}
                  alt={`${active.issuer} logo`}
                  className="mx-auto h-16 w-auto object-contain"
                />
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-primary/80">
                  [ADD CERTIFICATE IMAGE]
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Replace this frame with the actual certificate image or PDF.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
