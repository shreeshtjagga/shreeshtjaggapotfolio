import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as ArrowRight } from "../_libs/lucide-react.mjs";
import { o as aboutHighlights } from "./router-BHLuj73U.mjs";
import { n as Reveal, t as PageShell } from "./Reveal-DeLNHloG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-oskThAnB.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		eyebrow: "About",
		title: "Applied machine learning meets dependable engineering.",
		intro: "I specialize in building production-ready data pipelines, agentic AI platforms, and high-performance backend systems designed for reliability and scale.",
		tone: "aqua",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 sm:gap-10 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				variant: "scale",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative group mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:max-w-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/5] overflow-hidden rounded-3xl border border-primary/30 bg-surface/60 shadow-[var(--shadow-soft)] transition-all duration-500 group-hover:border-primary/60 group-hover:shadow-[var(--shadow-glow)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/avatar.svg",
							alt: "Shreesht Jagga — Profile Portrait",
							className: "h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105",
							onError: (e) => {
								e.currentTarget.src = "/avatar.svg";
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute -inset-3 -z-10 rounded-3xl blur-2xl transition-opacity duration-500 opacity-20 group-hover:opacity-35",
						style: { background: "var(--gradient-accent)" }
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [aboutHighlights.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 80,
				className: "mb-4 sm:mb-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted-foreground sm:text-[15px] sm:leading-[1.8]",
					children: line
				})
			}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 200,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-panel mt-8 flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-base font-semibold sm:text-lg",
							children: "Where I've studied and worked"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground sm:text-sm",
							children: "Geethanjali College of Engineering and Technology · Cantilever Labs"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex shrink-0 sm:ml-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/experience",
							className: "group inline-flex items-center gap-2 rounded-full border border-primary/45 bg-primary/8 px-4 py-2 text-xs font-medium text-primary shadow-[0_0_16px_-6px_var(--glow)] transition-all duration-300 hover:-translate-y-0.5 sm:px-5 sm:py-2.5 sm:text-sm",
							children: ["See the timeline", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								size: 14,
								className: "transition-transform duration-300 group-hover:translate-x-1"
							})]
						})
					})]
				})
			})] })]
		})
	});
}
//#endregion
export { About as component };
