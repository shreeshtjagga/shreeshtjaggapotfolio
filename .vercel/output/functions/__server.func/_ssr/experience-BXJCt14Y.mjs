import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as Briefcase, d as GraduationCap, m as ExternalLink, r as Trophy, s as MapPin } from "../_libs/lucide-react.mjs";
import { d as timeline } from "./router-BHLuj73U.mjs";
import { n as Reveal, t as PageShell } from "./Reveal-DeLNHloG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experience-BXJCt14Y.js
var import_jsx_runtime = require_jsx_runtime();
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		eyebrow: "Education & Experience",
		title: "A timeline of study and applied work.",
		intro: "Classroom fundamentals on one side, real inference pipelines on the other.",
		tone: "violet",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative pl-6 sm:pl-10 md:pl-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute left-[9px] top-2 bottom-2 w-px sm:left-[17px]",
				style: { background: "linear-gradient(180deg, transparent, oklch(0.82 0.145 190 / 60%), oklch(0.68 0.17 295 / 50%), transparent)" }
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-6 sm:space-y-8",
				children: timeline.map((entry, i) => {
					const Icon = entry.kind === "education" ? GraduationCap : entry.kind === "award" ? Trophy : Briefcase;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						variant: "slide-right",
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute -left-6 top-5 grid h-5 w-5 place-items-center rounded-full border border-primary/45 bg-background text-primary shadow-[0_0_12px_-4px_var(--glow)] sm:-left-10 sm:h-9 sm:w-9 md:-left-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 12,
									className: "sm:hidden"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 16,
									className: "hidden sm:block"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "surface-card lift-hover p-5 sm:p-7 md:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-primary sm:px-3 sm:py-1 sm:text-[11px]",
											children: entry.kind === "education" ? "Education" : entry.kind === "award" ? "Achievement" : "Experience"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs text-muted-foreground",
											children: entry.period
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 font-display text-lg font-semibold sm:text-xl md:text-2xl",
										children: entry.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center gap-2.5",
										children: [entry.org === "Cantilever Labs" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl border border-primary/25 bg-surface-2/80 p-1.5 shadow-inner backdrop-blur-md",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/logos/cantilever.svg",
												alt: "Cantilever Labs logo",
												loading: "lazy",
												className: "h-full w-full object-contain filter drop-shadow"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium text-foreground/85 sm:text-sm",
											children: entry.org
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 12 }),
											" ",
											entry.location
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-4 space-y-2.5 sm:mt-5 sm:space-y-3",
										children: entry.bullets.map((b, bi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
										}, bi))
									}),
									entry.link && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: entry.link,
										target: "_blank",
										rel: "noreferrer",
										className: "group mt-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/40 px-3.5 py-1.5 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary sm:mt-6 sm:px-4 sm:py-2 sm:text-[13px]",
										children: [entry.linkLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
											size: 13,
											className: "transition-transform duration-300 group-hover:translate-x-0.5"
										})]
									})
								]
							})]
						})
					}, entry.title);
				})
			})]
		})
	});
}
//#endregion
export { Experience as component };
