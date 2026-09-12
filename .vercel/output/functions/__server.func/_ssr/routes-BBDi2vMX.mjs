import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as ArrowRight, c as Mail, f as Github, l as Linkedin, p as FileText } from "../_libs/lucide-react.mjs";
import { a as RESUME_URL, c as profile } from "./router-BHLuj73U.mjs";
import { n as SplitText, t as Ambient } from "./AnimatedText-FpMhT5I7.mjs";
import { t as Typewriter } from "./motion-bits-CSt8HmYn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BBDi2vMX.js
var import_jsx_runtime = require_jsx_runtime();
var hero_mark_default = "/assets/hero-mark-BALPQdzn.png";
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-page-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ambient, { tone: "mixed" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-7xl items-center gap-8 px-4 pt-28 pb-12 sm:px-6 sm:pt-36 md:pt-40 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary shadow-[0_0_20px_-6px_var(--glow)]",
							style: { animation: "rise-in .5s var(--ease-out-soft) both" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary pulse-live" }), "Open to SWE / ML roles"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.2rem]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitText, {
									text: "Shreesht",
									delay: 80
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitText, {
									text: "Jagga",
									delay: 360,
									charClassName: "text-gradient"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-mono text-sm text-muted-foreground sm:text-base md:text-lg",
							style: {
								animation: "rise-in .6s var(--ease-out-soft) both",
								animationDelay: "600ms"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typewriter, { phrases: [...profile.rotatingRoles] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base",
							style: {
								animation: "rise-in .6s var(--ease-out-soft) both",
								animationDelay: "750ms"
							},
							children: profile.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-3 sm:gap-4",
							style: {
								animation: "rise-in .6s var(--ease-out-soft) both",
								animationDelay: "900ms"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/projects",
									className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[image:var(--gradient-accent)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_var(--glow)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_var(--glow)] sm:px-6 sm:py-3",
									children: ["View My Work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										size: 16,
										className: "transition-transform duration-300 group-hover:translate-x-1"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-border/80 bg-surface/40 px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary sm:px-6 sm:py-3",
									children: "Contact Me"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: RESUME_URL,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 rounded-full border border-border/40 px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary sm:py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 15 }), " Resume"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-3 sm:mt-10",
							style: {
								animation: "rise-in .6s var(--ease-out-soft) both",
								animationDelay: "1050ms"
							},
							children: [[{
								href: profile.linkedin,
								icon: Linkedin,
								label: "LinkedIn"
							}, {
								href: profile.github,
								icon: Github,
								label: "GitHub"
							}].map(({ href, icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": label,
								className: "group grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-surface/30 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_24px_-6px_var(--glow)] sm:h-11 sm:w-11",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 18,
									className: "transition-transform duration-300 group-hover:rotate-[8deg]"
								})
							}, label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								"aria-label": "Email",
								className: "group grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-surface/30 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_24px_-6px_var(--glow)] sm:h-11 sm:w-11",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									size: 18,
									className: "transition-transform duration-300 group-hover:rotate-[8deg]"
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[500px]",
					style: {
						animation: "rise-in .8s var(--ease-out-soft) both",
						animationDelay: "200ms"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_mark_default,
						alt: "Minimal hexagon and connected-node mark representing machine learning and data systems",
						width: 1024,
						height: 1024,
						className: "robot-float relative z-10 mx-auto w-full select-none object-contain opacity-95 mix-blend-screen drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute inset-4 -z-10 rounded-full blur-[70px] sm:blur-[90px]",
						style: {
							background: "var(--gradient-accent)",
							opacity: .25
						}
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 pb-12 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 sm:grid-cols-3",
					children: [
						{
							k: "Focus",
							v: "Applied ML & Backend Systems"
						},
						{
							k: "Based in",
							v: profile.location
						},
						{
							k: "Currently",
							v: profile.subRole
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background/60 px-5 py-5 backdrop-blur-sm sm:px-6 sm:py-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] uppercase tracking-[0.22em] text-primary/80",
							children: s.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm font-medium text-foreground/90",
							children: s.v
						})]
					}, s.k))
				})
			})
		]
	});
}
//#endregion
export { Home as component };
