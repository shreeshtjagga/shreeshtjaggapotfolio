import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { m as ExternalLink, w as Award } from "../_libs/lucide-react.mjs";
import { i as CREDLY_URL, s as certifications } from "./router-BHLuj73U.mjs";
import { n as Reveal, t as PageShell } from "./Reveal-DeLNHloG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/certificates-tBzWJPOA.js
var import_jsx_runtime = require_jsx_runtime();
function Certificates() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		eyebrow: "Certificates",
		title: "Credentials that back the fundamentals.",
		intro: "Formal certifications across generative AI, cloud platforms, programming, and databases.",
		tone: "aqua",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6",
			children: certifications.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				variant: "scale",
				delay: i * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "surface-card lift-hover group flex h-full flex-col px-5 py-6 sm:px-6 sm:py-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl border border-primary/25 bg-surface-2/80 p-2.5 shadow-inner backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-primary/60 group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_-4px_var(--glow)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.logo,
									alt: `${c.issuer} logo`,
									loading: "lazy",
									className: "h-full w-full object-contain filter drop-shadow"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-auto shrink-0 text-primary/70 transition-transform duration-300 group-hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { size: 18 })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-base font-semibold leading-snug sm:text-lg",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground sm:text-sm",
							children: c.issuer
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-auto pt-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: c.credlyUrl || c.image || "https://www.credly.com/users/shreeshtjagga/badges/credly",
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex w-fit items-center gap-2 rounded-full border border-border/80 bg-surface/40 px-4 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_18px_-4px_var(--glow)] sm:text-[13px]",
								children: [c.credlyUrl ? "Verify on Credly" : "View Certificate", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
									size: 12,
									className: "transition-transform duration-300 group-hover:translate-x-0.5"
								})]
							})
						})
					]
				})
			}, c.title))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: 140,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-panel mt-10 flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-base font-semibold sm:text-lg",
						children: "Verified badges on Credly"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground sm:text-sm",
						children: "All digital credentials, issued and verifiable."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: CREDLY_URL,
					target: "_blank",
					rel: "noreferrer",
					className: "group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-primary/45 bg-primary/8 px-5 py-2.5 text-xs font-medium text-primary shadow-[0_0_16px_-6px_var(--glow)] transition-all duration-300 hover:-translate-y-0.5 sm:ml-auto sm:text-sm",
					children: ["View Credly profile", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
						size: 14,
						className: "transition-transform duration-300 group-hover:translate-x-0.5"
					})]
				})]
			})
		})]
	});
}
//#endregion
export { Certificates as component };
