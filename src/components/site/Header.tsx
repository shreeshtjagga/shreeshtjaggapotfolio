import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Download, Menu, X } from "lucide-react";
import { navLinks, profile, RESUME_URL } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

function SocialIcons({ size = 16 }: { size?: number }) {
  const base =
    "grid h-9 w-9 place-items-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_18px_-4px_var(--glow)]";
  return (
    <>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={base}>
        <Linkedin size={size} />
      </a>
      <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={base}>
        <Github size={size} />
      </a>
      <Link to="/contact" aria-label="Email" className={base}>
        <Mail size={size} />
      </Link>
    </>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "backdrop-blur-xl" : "",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center gap-4 px-4 transition-all duration-500 sm:px-6",
          scrolled
            ? "my-2 h-14 rounded-2xl border border-border/70 bg-background/70 shadow-[var(--shadow-soft)] backdrop-blur-xl"
            : "h-20 border-b border-transparent",
        )}
      >
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-2.5 font-display text-sm font-semibold tracking-tight"
        >
          <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-primary/40 text-primary transition-transform duration-500 group-hover:rotate-6">
            <span className="absolute inset-0 rounded-xl bg-primary/10 blur-[6px]" />
            <span className="relative">SJ</span>
          </span>
          <span className="hidden truncate sm:inline">{profile.name}</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors duration-300",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active && (
                  <span className="absolute inset-0 rounded-full border border-primary/40 bg-primary/10 shadow-[0_0_20px_-6px_var(--glow)]" />
                )}
                <span className="relative">{l.label === "Education & Experience" ? "Experience" : l.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <div className="hidden items-center gap-2 md:flex">
            <SocialIcons />
          </div>
          <a
            href={RESUME_URL}
            download
            className="group relative hidden overflow-hidden rounded-full border border-primary/45 px-4 py-2 text-[13px] font-medium text-primary transition-all duration-300 hover:text-primary-foreground sm:inline-flex sm:items-center sm:gap-2"
          >
            <span className="absolute inset-0 -translate-x-full bg-[image:var(--gradient-accent)] transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-0" />
            <Download size={14} className="relative transition-transform duration-300 group-hover:translate-y-0.5" />
            <span className="relative">Resume</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border/70 text-foreground transition-colors hover:border-primary/50 hover:text-primary lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 origin-top bg-background/95 backdrop-blur-2xl transition-all duration-400 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex h-full flex-col justify-center gap-1 px-8" aria-label="Mobile">
          {navLinks.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "border-b border-border/50 py-4 font-display text-2xl transition-colors",
                pathname === l.to ? "text-primary" : "text-foreground/80",
              )}
              style={
                open
                  ? { animation: `rise-in .5s var(--ease-out-soft) both`, animationDelay: `${i * 55}ms` }
                  : undefined
              }
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-8 flex items-center gap-3">
            <SocialIcons size={18} />
            <a
              href={RESUME_URL}
              download
              className="ml-auto inline-flex items-center gap-2 rounded-full border border-primary/50 px-4 py-2 text-sm text-primary"
            >
              <Download size={15} /> Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
