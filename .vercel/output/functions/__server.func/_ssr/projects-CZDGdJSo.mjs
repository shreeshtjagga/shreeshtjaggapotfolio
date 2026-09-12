import { i as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { f as Github, i as Sparkles, m as ExternalLink, t as X } from "../_libs/lucide-react.mjs";
import { l as projects, n as cn } from "./router-BHLuj73U.mjs";
import { n as Reveal, t as PageShell } from "./Reveal-DeLNHloG.mjs";
import { n as useReducedMotion } from "./motion-bits-CSt8HmYn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-CZDGdJSo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TiltCard({ children, className, max = 7 }) {
	const ref = (0, import_react.useRef)(null);
	const frame = (0, import_react.useRef)(0);
	const reduced = useReducedMotion();
	const onMove = (e) => {
		if (reduced) return;
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const px = (e.clientX - rect.left) / rect.width;
		const py = (e.clientY - rect.top) / rect.height;
		cancelAnimationFrame(frame.current);
		frame.current = requestAnimationFrame(() => {
			el.style.transition = "transform 0.08s ease-out, box-shadow 0.3s ease, border-color 0.3s ease";
			el.style.transform = `perspective(1000px) rotateX(${(.5 - py) * max * 1.4}deg) rotateY(${(px - .5) * max * 1.4}deg) translateZ(4px) translateY(-4px)`;
			el.style.setProperty("--mx", `${px * 100}%`);
			el.style.setProperty("--my", `${py * 100}%`);
		});
	};
	const onLeave = () => {
		const el = ref.current;
		if (!el) return;
		cancelAnimationFrame(frame.current);
		el.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease, border-color 0.4s ease";
		el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px)";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		className: cn("surface-card group relative overflow-hidden hover:border-primary/45 hover:shadow-[var(--shadow-glow)]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
			style: { background: "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), oklch(0.82 0.145 190 / 12%), transparent 65%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative",
			children
		})]
	});
}
function Tag({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "rounded-full border border-border/70 bg-surface/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors duration-300 group-hover:border-primary/35 group-hover:text-foreground/85",
		children
	});
}
function Actions({ p, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: p.repo,
				target: "_blank",
				rel: "noreferrer",
				onClick: (e) => e.stopPropagation(),
				className: "group/btn inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/40 px-4 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary sm:text-[13px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
					size: 14,
					className: "transition-transform duration-300 group-hover/btn:rotate-12"
				}), "Source Code"]
			}),
			p.demo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: p.demo,
				target: "_blank",
				rel: "noreferrer",
				onClick: (e) => e.stopPropagation(),
				className: "inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:text-[13px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 14 }), " Live Demo"]
			}) : null,
			!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-auto font-mono text-[11px] text-muted-foreground/70 hidden sm:inline",
				children: "Click card for details"
			})
		]
	});
}
function Projects() {
	const [active, setActive] = (0, import_react.useState)(null);
	const featured = projects.find((p) => p.featured);
	const rest = projects.filter((p) => !p.featured);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		eyebrow: "Projects",
		title: "Systems I designed, built, and shipped.",
		intro: "Each one started as a question about how something works — and ended as a running service.",
		tone: "mixed",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				variant: "scale",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					onClick: () => setActive(featured),
					className: "surface-card lift-hover group relative cursor-pointer overflow-hidden p-6 sm:p-8 md:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute inset-0 opacity-25 transition-opacity duration-500 group-hover:opacity-45 pointer-events-none",
						style: { background: "var(--gradient-accent)" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary shadow-[0_0_16px_-6px_var(--glow)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
										size: 12,
										className: "pulse-live"
									}), " Featured"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-muted-foreground",
									children: "Flagship project"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-2xl font-semibold sm:text-3xl md:text-4xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-shimmer",
									children: featured.title
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]",
								children: featured.oneLiner
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 flex flex-wrap gap-2",
								children: featured.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: t }, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-7",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Actions, { p: featured })
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6",
				children: rest.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "rise",
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
						className: "h-full cursor-pointer p-5 sm:p-6 md:p-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							onClick: () => setActive(p),
							className: "flex h-full flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-semibold leading-snug transition-colors duration-300 group-hover:text-primary sm:text-xl",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground",
									children: p.oneLiner
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-1.5 sm:gap-2",
									children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: t }, t))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-auto pt-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Actions, {
										p,
										compact: true
									})
								})
							]
						})
					})
				}, p.slug))
			}),
			active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "dialog",
				"aria-modal": "true",
				"aria-label": active.title,
				className: "fixed inset-0 z-[60] flex items-end justify-center bg-background/85 p-3 backdrop-blur-md sm:items-center sm:p-6",
				onClick: () => setActive(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-panel relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-6 sm:p-8",
					style: { animation: "pop-in .3s var(--ease-out-soft) both" },
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActive(null),
							"aria-label": "Close details",
							className: "absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-border/70 bg-surface/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
						}),
						active.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 12 }), " Featured"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 pr-10 font-display text-xl sm:text-2xl font-semibold",
							children: active.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-1.5",
							children: active.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: t }, t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3",
							children: active.bullets.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Actions, {
								p: active,
								compact: true
							})
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Projects as component };
