import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as Boxes, S as Braces, _ as Cloud, h as Database, n as Wrench, u as Languages, x as Brain } from "../_libs/lucide-react.mjs";
import { u as skillGroups } from "./router-BHLuj73U.mjs";
import { n as Reveal, t as PageShell } from "./Reveal-DeLNHloG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills-BbFNkG1Y.js
var import_jsx_runtime = require_jsx_runtime();
var icons = {
	Languages: Braces,
	"ML / AI": Brain,
	"Frameworks & Libraries": Boxes,
	"Data & Infrastructure": Database,
	"Cloud & Deployment": Cloud,
	Tools: Wrench,
	"Spoken Languages": Languages
};
function initials(label) {
	const clean = label.split("—")[0].trim();
	const words = clean.split(/[\s-]+/).filter(Boolean);
	if (words.length === 1) return clean.slice(0, 2).toUpperCase();
	return words.slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		eyebrow: "Skills",
		title: "The toolkit behind the work.",
		intro: "Grouped by where they live in the stack — from writing models by hand to shipping them on infrastructure that stays up.",
		tone: "violet",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-6 sm:space-y-8 pb-6",
			children: skillGroups.map((group, gi) => {
				const Icon = icons[group.title] ?? Boxes;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: gi % 2 === 0 ? "slide-left" : "slide-right",
					delay: gi * 40,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "surface-card px-5 py-6 sm:px-7 sm:py-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-primary/35 bg-primary/10 text-primary shadow-[0_0_16px_-6px_var(--glow)] sm:h-10 sm:w-10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "truncate font-display text-base font-semibold sm:text-lg md:text-xl",
									children: group.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-auto shrink-0 font-mono text-xs text-muted-foreground",
									children: String(gi + 1).padStart(2, "0")
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 flex flex-wrap gap-2.5 sm:gap-3",
							children: group.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								title: item,
								className: "group relative flex items-center gap-2.5 rounded-xl border border-border/70 bg-surface/50 px-3.5 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/55 hover:shadow-[0_0_22px_-8px_var(--glow)] sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3",
								style: {
									animation: "pop-in .4s var(--ease-out-soft) both",
									animationDelay: `${i * 35}ms`
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-accent)] font-mono text-[10px] font-bold text-primary-foreground opacity-90 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 sm:h-8 sm:w-8 sm:text-[11px]",
									children: initials(item)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium text-foreground/90 sm:text-sm",
									children: item
								})]
							}) }, item))
						})]
					})
				}, group.title);
			})
		})
	});
}
//#endregion
export { Skills as component };
