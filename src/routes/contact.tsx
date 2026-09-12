import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, CheckCircle2, Copy, Github, Linkedin, Mail, MapPin, Send, Sparkles } from "lucide-react";
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
    "peer w-full rounded-xl border border-border/80 bg-surface/50 px-4 pt-6 pb-2.5 text-sm text-foreground outline-none transition-all duration-300 placeholder-transparent focus:border-primary/60 focus:shadow-[0_0_24px_-8px_var(--glow)]";
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
  const [copied, setCopied] = useState(false);

  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    const subject = encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`);
    
    setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    }, 450);
  };

  const resetForm = () => {
    setForm({ name: "", email: "", subject: "", message: "" });
    setStatus("idle");
  };

  return (
    <PageShell
      eyebrow="Contact"
      title="Let's build something worth shipping."
      intro="Open to software engineering and machine learning roles, research collaborations, and interesting problems."
      tone="aqua"
    >
      <div className="grid gap-6 sm:gap-8 pb-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="surface-card relative overflow-hidden p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="font-display text-lg font-semibold sm:text-xl">Send a Message</h2>
                <p className="mt-1 text-xs text-muted-foreground">Direct response typically within 24 hours</p>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-primary/30 bg-primary/8 text-primary shadow-[0_0_16px_-6px_var(--glow)]">
                <Sparkles size={18} />
              </span>
            </div>

            {status === "sent" ? (
              <div
                className="space-y-4 py-8 text-center"
                style={{ animation: "pop-in .4s var(--ease-out-soft) both" }}
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/15 text-primary shadow-[0_0_24px_-6px_var(--glow)]">
                  <CheckCircle2 size={30} />
                </div>
                <h3 className="font-display text-xl font-semibold">Message Ready &amp; Sent!</h3>
                <p className="mx-auto max-w-sm text-xs sm:text-sm text-muted-foreground">
                  Your mail client has been launched with your message. You can also copy my email directly if you prefer writing from your webmail.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/45 bg-primary/10 px-5 py-2.5 text-xs sm:text-sm font-medium text-primary transition-all duration-300 hover:shadow-[0_0_20px_-6px_var(--glow)]"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? "Email Copied!" : "Copy Email Address"}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                  <Field id="name" label="Your Name" value={form.name} onChange={set("name")} />
                  <Field id="email" label="Your Email" type="email" value={form.email} onChange={set("email")} />
                </div>
                <Field id="subject" label="Subject / Role" value={form.subject} onChange={set("subject")} />
                <Field id="message" label="Your Message" textarea value={form.message} onChange={set("message")} />

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-6px_var(--glow)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_var(--glow)] disabled:opacity-70 sm:px-6 sm:py-3"
                  >
                    {status === "sending" ? "Preparing…" : "Send Message"}
                    <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/30 px-4 py-2.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary sm:py-3"
                  >
                    {copied ? <Check size={14} className="text-primary" /> : <Copy size={14} />}
                    {copied ? "Copied!" : "Copy Email"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-4">
            <div className="surface-card lift-hover flex items-center justify-between gap-4 p-5 sm:px-6 sm:py-5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3.5 sm:gap-4 min-w-0"
              >
                <span className="grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/8 text-primary">
                  <Mail size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">Direct Email</span>
                  <span className="block truncate text-xs sm:text-sm font-medium text-foreground/90">{profile.email}</span>
                </span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                title="Copy email address"
                aria-label="Copy email address"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border/70 bg-surface/40 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              >
                {copied ? <Check size={15} className="text-primary" /> : <Copy size={15} />}
              </button>
            </div>

            <div className="surface-card flex items-center gap-3.5 sm:gap-4 p-5 sm:px-6 sm:py-5">
              <span className="grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/8 text-primary">
                <MapPin size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">Location</span>
                <span className="block text-xs sm:text-sm font-medium text-foreground/90">{profile.location}</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
              {[
                { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: profile.github, icon: Github, label: "GitHub" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="surface-card lift-hover group relative flex flex-col items-center justify-center gap-2 p-5 sm:p-6 text-center"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-primary/20 bg-primary/5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-[0_0_14px_-6px_var(--glow)]">
                    <Icon size={20} />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-foreground/90">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </PageShell>
  );
}
