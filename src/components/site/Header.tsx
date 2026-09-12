import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Github, Linkedin, FileText, Menu, X } from "lucide-react";
import { navLinks, profile, RESUME_URL } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

function SocialIcons({ size = 16 }: { size?: number }) {
  const base =
    "grid h-9 w-9 place-items-center rounded-full border border-border/70 bg-surface/30 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_18px_-4px_var(--glow)]";
  return (
    <>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={base}>
        <Linkedin size={size} />
      </a>
      <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={base}>
        <Github size={size} />
      </a>
    </>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
          "mx-auto flex max-w-7xl items-center gap-3 px-4 transition-all duration-500 sm:px-6",
          scrolled
            ? "my-2 h-14 rounded-2xl border border-border/70 bg-background/80 shadow-[var(--shadow-soft)] backdrop-blur-xl"
            : "h-20 border-b border-transparent",
        )}
      >
        <Link
          to="/"
          onClick={() => {
            setOpen(false);
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          }}
          className="group flex min-w-0 items-center gap-2.5 font-display text-sm font-semibold tracking-tight"
        >
          <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-primary/40 bg-primary/8 text-primary transition-transform duration-500 group-hover:rotate-6">
            <span className="absolute inset-0 rounded-xl bg-primary/10 blur-[6px]" />
            <span className="relative">SJ</span>
          </span>
          <span className="truncate sm:inline text-foreground/90 group-hover:text-primary transition-colors">{profile.name}</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-0.5 xl:flex" aria-label="Main">
          {navLinks.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors duration-300",
                  active ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground",
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

        <div className="ml-auto flex items-center gap-2 xl:ml-2">
          <div className="hidden items-center gap-2 md:flex">
            <SocialIcons />
          </div>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative hidden overflow-hidden rounded-full border border-primary/45 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary shadow-[0_0_14px_-6px_var(--glow)] transition-all duration-300 hover:text-primary-foreground sm:inline-flex sm:items-center sm:gap-2 sm:px-4 sm:py-2 sm:text-[13px]"
          >
            <span className="absolute inset-0 -translate-x-full bg-[image:var(--gradient-accent)] transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-0" />
            <FileText size={14} className="relative transition-transform duration-300 group-hover:scale-110" />
            <span className="relative">Resume</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border/70 bg-surface/40 text-foreground transition-colors hover:border-primary/50 hover:text-primary xl:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl transition-all duration-300 xl:hidden overflow-y-auto pt-24 pb-12",
          open ? "pointer-events-auto opacity-100 visible" : "pointer-events-none opacity-0 invisible",
        )}
      >
        <nav className="flex min-h-[calc(100vh-9rem)] flex-col justify-center gap-1 px-8 max-w-md mx-auto" aria-label="Mobile">
          {navLinks.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => {
                setOpen(false);
                window.scrollTo({ top: 0, left: 0, behavior: "instant" });
              }}
              className={cn(
                "border-b border-border/40 py-3.5 font-display text-xl sm:text-2xl transition-colors",
                pathname === l.to ? "text-primary font-semibold" : "text-foreground/80 hover:text-primary",
              )}
              style={
                open
                  ? { animation: `rise-in .4s var(--ease-out-soft) both`, animationDelay: `${i * 45}ms` }
                  : undefined
              }
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-8 flex items-center justify-between gap-4">
            <SocialIcons size={18} />
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-[0_0_16px_-6px_var(--glow)]"
            >
              <FileText size={15} /> Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
