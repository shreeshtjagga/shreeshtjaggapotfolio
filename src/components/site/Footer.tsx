import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 380);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative mt-16 sm:mt-20 border-t border-border/60 bg-surface/20 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 sm:px-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm sm:text-base font-semibold text-foreground/90">{profile.name}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {profile.subRole} · {profile.location}
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium sm:gap-x-5" aria-label="Footer">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label === "Education & Experience" ? "Experience" : l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3.5 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <div className="flex items-center gap-2">
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
                className="grid h-8 w-8 place-items-center rounded-full border border-border/70 bg-surface/30 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_16px_-4px_var(--glow)]"
              >
                <Icon size={14} />
              </a>
            ))}
            <Link
              to="/contact"
              aria-label="Email"
              className="grid h-8 w-8 place-items-center rounded-full border border-border/70 bg-surface/30 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_16px_-4px_var(--glow)]"
            >
              <Mail size={14} />
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "fixed bottom-5 right-5 z-40 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-primary/45 bg-background/85 text-primary backdrop-blur-md shadow-[0_0_20px_-6px_var(--glow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_28px_-4px_var(--glow)]",
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
}
