import { createFileRoute } from "@tanstack/react-router";
import { Award, ExternalLink, Eye, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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

type CertificateItem = (typeof certifications)[number];

function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedCert(null);
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedCert]);

  return (
    <PageShell
      eyebrow="Certificates"
      title="Credentials that back the fundamentals."
      intro="Formal certifications across generative AI, cloud platforms, programming, and databases."
      tone="aqua"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {certifications.map((c, i) => {
          const isImageCert = Boolean(c.image && c.image.endsWith(".png"));

          return (
            <Reveal key={c.title} variant="scale" delay={i * 50}>
              <article className="surface-card lift-hover group flex h-full flex-col overflow-hidden p-5 sm:p-6">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl border border-primary/25 bg-surface-2/80 p-2.5 shadow-inner backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-primary/60 group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_-4px_var(--glow)]">
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

                {/* Certificate Preview Card for Oracle real images */}
                {isImageCert && (
                  <button
                    type="button"
                    onClick={() => setSelectedCert(c)}
                    className="group/img relative mt-4 block w-full overflow-hidden rounded-xl border border-border/70 bg-black/40 text-left transition-all duration-300 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label={`Preview ${c.title} Certificate`}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-2/30">
                      <img
                        src={c.image}
                        alt={`${c.title} Certificate`}
                        loading="lazy"
                        className="h-full w-full object-contain object-center transition-transform duration-500 ease-out group-hover/img:scale-[1.03]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/img:opacity-100">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/50 bg-background/90 px-3 py-1.5 text-xs font-semibold text-primary shadow-lg">
                          <Eye size={14} /> Quick View
                        </span>
                      </div>
                    </div>
                  </button>
                )}

                <h2 className="mt-4 font-display text-base font-semibold leading-snug sm:text-lg">{c.title}</h2>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{c.issuer}</p>

                <div className="mt-auto pt-5">
                  {c.credlyUrl ? (
                    <a
                      href={c.credlyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-border/80 bg-surface/40 px-4 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_18px_-4px_var(--glow)] sm:text-[13px]"
                    >
                      Verify on Credly
                      <ExternalLink size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setSelectedCert(c)}
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/45 bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/20 hover:border-primary/70 hover:shadow-[0_0_18px_-4px_var(--glow)] sm:text-[13px]"
                    >
                      <Eye size={13} />
                      View Certificate
                    </button>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
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

      {/* Responsive Certificate Lightbox Modal */}
      {mounted &&
        selectedCert &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCert.title} Certificate`}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 animate-page-enter"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/90 backdrop-blur-md transition-opacity"
              onClick={() => setSelectedCert(null)}
              aria-hidden="true"
            />

            {/* Modal Card */}
            <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface/95 shadow-2xl backdrop-blur-xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-border/60 px-4 py-3 sm:px-6 sm:py-4">
                <div className="min-w-0 pr-3">
                  <h3 className="truncate font-display text-base font-semibold sm:text-lg text-foreground">
                    {selectedCert.title}
                  </h3>
                  <p className="truncate text-xs text-muted-foreground sm:text-sm">{selectedCert.issuer}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {selectedCert.image && (
                    <a
                      href={selectedCert.image}
                      target="_blank"
                      rel="noreferrer"
                      className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-surface-2/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      <ExternalLink size={13} /> Full Size
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    aria-label="Close modal"
                    className="grid h-9 w-9 place-items-center rounded-xl border border-border/70 bg-surface/80 text-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Image Body - Perfectly framed, no clutter, preserved aspect ratio */}
              <div className="flex flex-1 items-center justify-center overflow-auto p-2 sm:p-6 bg-black/40">
                {selectedCert.image ? (
                  <img
                    src={selectedCert.image}
                    alt={`${selectedCert.title} - ${selectedCert.issuer}`}
                    className="max-h-[72vh] w-auto max-w-full rounded-lg object-contain shadow-md"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                    <Award size={48} className="text-primary/60 mb-3" />
                    <p className="text-sm font-medium">Verified Digital Credential</p>
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </PageShell>
  );
}
