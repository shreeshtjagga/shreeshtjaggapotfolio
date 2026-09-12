import { createFileRoute } from "@tanstack/react-router";
import { Award, ExternalLink } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { certifications, CREDLY_URL } from "@/lib/portfolio-data";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates | Shreesht Jagga" },
      {
        name: "description",
        content:
          "Certifications from AWS, Red Hat, Cisco Networking Academy, and Oracle Academy in generative AI, cloud workflows, Python, and databases.",
      },
      { property: "og:title", content: "Certificates | Shreesht Jagga" },
      {
        property: "og:description",
        content: "AWS Generative AI, Red Hat OpenShift AI, Cisco Python Essentials, Oracle Academy credentials.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/certificates" },
    ],
    links: [{ rel: "canonical", href: "/certificates" }],
  }),
  component: Certificates,
});

function Certificates() {
  return (
    <PageShell
      eyebrow="Certificates"
      title="Credentials that back the fundamentals."
      intro="Formal certifications across generative AI, cloud platforms, programming, and databases."
      tone="aqua"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {certifications.map((c, i) => (
          <Reveal key={c.title} variant="scale" delay={i * 60}>
            <article className="surface-card lift-hover group flex h-full flex-col px-5 py-6 sm:px-6 sm:py-7">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl border border-primary/25 bg-surface-2/80 p-2.5 shadow-inner backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-primary/60 group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_-4px_var(--glow)]">
                  <img
                    src={c.logo}
                    alt={`${c.issuer} logo`}
                    loading="lazy"
                    className="h-full w-full object-contain filter drop-shadow"
                  />
                </span>
                <span className="ml-auto shrink-0 text-primary/70 transition-transform duration-300 group-hover:scale-110">
                  <Award size={18} />
                </span>
              </div>
              <h2 className="mt-4 font-display text-base font-semibold leading-snug sm:text-lg">{c.title}</h2>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{c.issuer}</p>
              <div className="mt-auto pt-5">
                <a
                  href={c.credlyUrl || c.image || CREDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-border/80 bg-surface/40 px-4 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_18px_-4px_var(--glow)] sm:text-[13px]"
                >
                  {c.credlyUrl ? "Verify on Credly" : "View Certificate"}
                  <ExternalLink size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={140}>
        <div className="glass-panel mt-10 flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:p-6">
          <div className="min-w-0">
            <p className="font-display text-base font-semibold sm:text-lg">Verified badges on Credly</p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              All digital credentials, issued and verifiable.
            </p>
          </div>
          <a
            href={CREDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-primary/45 bg-primary/8 px-5 py-2.5 text-xs font-medium text-primary shadow-[0_0_16px_-6px_var(--glow)] transition-all duration-300 hover:-translate-y-0.5 sm:ml-auto sm:text-sm"
          >
            View Credly profile
            <ExternalLink size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </Reveal>
    </PageShell>
  );
}
