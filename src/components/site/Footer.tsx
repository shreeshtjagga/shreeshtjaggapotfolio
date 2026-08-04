import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative mt-24 border-t border-border/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr_auto]">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            {profile.role} · {profile.location}
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm" aria-label="Footer">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="underline-sweep w-fit text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-start gap-3">
          {[
            { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: profile.github, icon: Github, label: "GitHub" },
            { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_22px_-6px_var(--glow)]"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border/50 px-6 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-primary/45 bg-background/80 text-primary backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_26px_-6px_var(--glow)]",
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
