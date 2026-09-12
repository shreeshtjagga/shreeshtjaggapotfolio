import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AlertCircle, Check, CheckCircle2, Clock, Copy, Github, Linkedin, Loader2, Mail, MapPin, Send, ShieldCheck, Sparkles } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { profile, WEB3FORMS_ACCESS_KEY } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const RATE_LIMIT_MS = 24 * 60 * 60 * 1000; // 24 hours

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Shreesht Jagga" },
      {
        name: "description",
        content:
          "Get in touch with Shreesht Jagga about software engineering and machine learning roles, collaborations, or research projects.",
      },
      { property: "og:title", content: "Contact | Shreesht Jagga" },
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
  disabled = false,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
  value: string;
  disabled?: boolean;
  onChange: (v: string) => void;
}) {
  const shared =
    "peer w-full rounded-xl border border-border/80 bg-surface/50 px-4 pt-6 pb-2.5 text-sm text-foreground outline-none transition-all duration-300 placeholder-transparent focus:border-primary/60 focus:shadow-[0_0_24px_-8px_var(--glow)] disabled:opacity-50 disabled:cursor-not-allowed";
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          required
          disabled={disabled}
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
          disabled={disabled}
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
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", honeypot: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [rateLimitedUntil, setRateLimitedUntil] = useState<number | null>(null);

  useEffect(() => {
    try {
      const lastSent = localStorage.getItem("contact_form_last_sent");
      if (lastSent) {
        const lastSentTime = parseInt(lastSent, 10);
        const timeElapsed = Date.now() - lastSentTime;
        if (timeElapsed < RATE_LIMIT_MS) {
          setRateLimitedUntil(lastSentTime + RATE_LIMIT_MS);
        }
      }
    } catch {
      // localStorage unavailable or private browsing
    }
  }, []);

  const getRemainingTime = () => {
    if (!rateLimitedUntil) return "";
    const remainingMs = Math.max(0, rateLimitedUntil - Date.now());
    const hours = Math.floor(remainingMs / (1000 * 60 * 60));
    const minutes = Math.ceil((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
    if (hours > 0) return `${hours} hr ${minutes} min`;
    return `${minutes} min`;
  };

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

    // Check honeypot (bot protection)
    if (form.honeypot) {
      // Bot filled hidden field; pretend success without calling API
      setStatus("sent");
      return;
    }

    // Check 24-hour rate limit
    if (rateLimitedUntil && Date.now() < rateLimitedUntil) {
      setStatus("error");
      setErrorMessage(
        `Rate limit active: You can send 1 message every 24 hours to prevent spam. Available again in ${getRemainingTime()}.`
      );
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    // Fallback if key is missing
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      const subject = encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || `New Portfolio Message from ${form.name}`,
          message: form.message,
          from_name: form.name,
          botcheck: false,
        }),
      });

      const data = await response.json();
      if (data.success) {
        const now = Date.now();
        try {
          localStorage.setItem("contact_form_last_sent", String(now));
        } catch {
          // ignore
        }
        setRateLimitedUntil(now + RATE_LIMIT_MS);
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "", honeypot: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Unable to send message. Please copy my email directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error sending message. Please send an email directly.");
    }
  };

  const isLocked = Boolean(rateLimitedUntil && Date.now() < rateLimitedUntil);

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
                <p className="mt-1 text-xs text-muted-foreground">Delivered directly to my inbox (1 message / 24h)</p>
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
                <h3 className="font-display text-xl font-semibold">Message Sent Successfully!</h3>
                <p className="mx-auto max-w-sm text-xs sm:text-sm text-muted-foreground">
                  Thank you for reaching out! Your message has been sent to Shreesht's inbox. You will receive a response shortly.
                </p>
                <div className="mx-auto max-w-sm rounded-xl border border-primary/20 bg-primary/5 p-3 text-xs text-muted-foreground">
                  <span className="flex items-center justify-center gap-1.5 font-medium text-primary">
                    <ShieldCheck size={14} /> Spam Protection Active
                  </span>
                  <span className="mt-1 block">To prevent automated spam, new form submissions are limited to 1 per 24 hours.</span>
                </div>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/45 bg-primary/10 px-5 py-2.5 text-xs sm:text-sm font-medium text-primary transition-all duration-300 hover:shadow-[0_0_20px_-6px_var(--glow)]"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? "Email Copied!" : "Copy Email Address"}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
                {/* 24-hour rate limit notice */}
                {isLocked && (
                  <div className="flex items-start gap-3 rounded-2xl border border-primary/35 bg-primary/8 p-4 text-xs text-foreground/90">
                    <Clock size={18} className="mt-0.5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-primary">Message Limit Active (1 per 24 hours)</p>
                      <p className="mt-0.5 text-muted-foreground">
                        You've recently sent a message. Form submissions will unlock again in <strong className="text-foreground">{getRemainingTime()}</strong>. For urgent matters, please use the direct email button below.
                      </p>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2.5 rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-xs text-destructive-foreground">
                    <AlertCircle size={16} className="shrink-0 text-destructive" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Honeypot hidden input for bot protection */}
                <input
                  type="text"
                  name="honeypot"
                  value={form.honeypot}
                  onChange={(e) => set("honeypot")(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  style={{ display: "none" }}
                />

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                  <Field id="name" label="Your Name" value={form.name} disabled={isLocked} onChange={set("name")} />
                  <Field id="email" label="Your Email" type="email" value={form.email} disabled={isLocked} onChange={set("email")} />
                </div>
                <Field id="subject" label="Subject / Role" value={form.subject} disabled={isLocked} onChange={set("subject")} />
                <Field id="message" label="Your Message" textarea value={form.message} disabled={isLocked} onChange={set("message")} />

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending" || isLocked}
                    className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-6px_var(--glow)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_var(--glow)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 sm:px-6 sm:py-3"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        <span>Sending…</span>
                      </>
                    ) : isLocked ? (
                      <>
                        <Clock size={15} />
                        <span>Locked (1 / 24h)</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
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
