import { createFileRoute } from "@tanstack/react-router";
import {
  Boxes,
  Braces,
  Brain,
  Cloud,
  Database,
  Languages,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { skillGroups } from "@/lib/portfolio-data";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Shreesht Jagga" },
      {
        name: "description",
        content:
          "Technical toolkit: Python, R, SQL, PyTorch, Scikit-learn, FastAPI, LangGraph, PostgreSQL, Redis, ChromaDB, AWS and more.",
      },
      { property: "og:title", content: "Skills — Shreesht Jagga" },
      {
        property: "og:description",
        content: "Languages, ML/AI, frameworks, data infrastructure, cloud, and tools.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: Skills,
});

const icons: Record<string, LucideIcon> = {
  Languages: Braces,
  "ML / AI": Brain,
  "Frameworks & Libraries": Boxes,
  "Data & Infrastructure": Database,
  "Cloud & Deployment": Cloud,
  Tools: Wrench,
  "Spoken Languages": Languages,
};

function initials(label: string) {
  const clean = label.split("—")[0]!.trim();
  const words = clean.split(/[\s-]+/).filter(Boolean);
  if (words.length === 1) return clean.slice(0, 2).toUpperCase();
  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function Skills() {
  return (
    <PageShell
      eyebrow="Skills"
      title="The toolkit behind the work."
      intro="Grouped by where they live in the stack — from writing models by hand to shipping them on infrastructure that stays up."
      tone="violet"
    >
      <div className="space-y-10 pb-6">
        {skillGroups.map((group, gi) => {
          const Icon = icons[group.title] ?? Boxes;
          return (
            <Reveal
              key={group.title}
              variant={gi % 2 === 0 ? "slide-left" : "slide-right"}
              delay={gi * 40}
            >
              <section className="surface-card px-5 py-5 sm:px-6">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-primary/35 bg-primary/8 text-primary">
                    <Icon size={16} />
                  </span>
                  <h2 className="truncate font-display text-base font-semibold sm:text-lg">
                    {group.title}
                  </h2>
                </div>

                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {group.items.map((item, i) => (
                    <li key={item}>
                      <div
                        title={item}
                        className="group relative flex items-center gap-2 rounded-xl border border-border/70 bg-surface/40 px-3 py-2 transition-all duration-400 hover:-translate-y-0.5 hover:border-primary/55 hover:shadow-[0_0_22px_-8px_var(--glow)]"
                        style={{
                          animation: "pop-in .5s var(--ease-out-soft) both",
                          animationDelay: `${i * 45}ms`,
                        }}
                      >
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-[image:var(--gradient-accent)] font-mono text-[9px] font-bold text-primary-foreground opacity-90 transition-transform duration-400 group-hover:scale-110 group-hover:rotate-6">
                          {initials(item)}
                        </span>
                        <span className="text-[13px] text-foreground/90">{item}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          );
        })}
      </div>
    </PageShell>
  );
}
