import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shreesht Jagga" },
      {
        name: "description",
        content:
          "Get in touch with Shreesht Jagga about software engineering and machine learning roles, collaborations, or research projects.",
      },
      { property: "og:title", content: "Contact — Shreesht Jagga" },
      { property: "og:description", content: "Reach out by email, LinkedIn, or GitHub." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Field({
  id,
  label,
  type = "text",
  textarea = false,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  const shared =
    "peer w-full rounded-xl border border-border/80 bg-surface/40 px-4 pt-6 pb-2 text-sm text-foreground outline-none transition-all duration-300 placeholder-transparent focus:border-primary/60 focus:shadow-[0_0_26px_-10px_var(--glow)]";
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          required
          placeholder={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(shared, "resize-none")}
        />
      ) : (
        <input
          id={id}
          type={type}
          required
          placeholder={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={shared}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-[11px] font-medium tracking-wide text-primary/85 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    const subject = encodeURIComponent(form.subject || `Message from ${form.name}`);
    window.setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    }, 650);
  };

  return (
    <PageShell
      eyebrow="Contact"
      title="Let's build something worth shipping."
      intro="Open to software engineering and machine learning roles, research collaborations, and interesting problems."
      tone="aqua"
    >
      <div className="grid gap-10 pb-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <form onSubmit={onSubmit} className="surface-card space-y-5 px-6 py-8 sm:px-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" value={form.name} onChange={set("name")} />
              <Field id="email" label="Email" type="email" value={form.email} onChange={set("email")} />
            </div>
            <Field id="subject" label="Subject" value={form.subject} onChange={set("subject")} />
            <Field id="message" label="Message" textarea value={form.message} onChange={set("message")} />

            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-16px_var(--glow)] disabled:opacity-70"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
              <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {status === "sent" && (
              <p
                className="inline-flex items-center gap-2 rounded-xl border border-primary/35 bg-primary/8 px-4 py-3 text-sm text-primary"
                style={{ animation: "pop-in .4s var(--ease-out-soft) both" }}
                role="status"
              >
                <CheckCircle2 size={16} /> Your mail client is opening — thanks for reaching out.
              </p>
            )}
          </form>
        </Reveal>

        <Reveal delay={140}>
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="surface-card lift-hover flex items-center gap-4 px-6 py-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/8 text-primary">
                <Mail size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">Email</span>
                <span className="block truncate text-sm text-foreground/90">{profile.email}</span>
              </span>
            </a>

            <div className="surface-card flex items-center gap-4 px-6 py-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/8 text-primary">
                <MapPin size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">Location</span>
                <span className="block text-sm text-foreground/90">{profile.location}</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: profile.github, icon: Github, label: "GitHub" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="surface-card lift-hover grid place-items-center gap-2 px-4 py-6 text-center"
                >
                  <Icon size={20} className="text-primary" />
                  <span className="text-sm text-foreground/90">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </PageShell>
  );
}
