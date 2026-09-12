import { i as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Send, c as Mail, f as Github, g as Copy, i as Sparkles, l as Linkedin, s as MapPin, v as CircleCheck, y as Check } from "../_libs/lucide-react.mjs";
import { c as profile, n as cn } from "./router-BHLuj73U.mjs";
import { n as Reveal, t as PageShell } from "./Reveal-DeLNHloG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-GowP7wSg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Field({ id, label, type = "text", textarea = false, value, onChange }) {
	const shared = "peer w-full rounded-xl border border-border/80 bg-surface/50 px-4 pt-6 pb-2.5 text-sm text-foreground outline-none transition-all duration-300 placeholder-transparent focus:border-primary/60 focus:shadow-[0_0_24px_-8px_var(--glow)]";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [textarea ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			id,
			rows: 5,
			required: true,
			placeholder: label,
			value,
			onChange: (e) => onChange(e.target.value),
			className: cn(shared, "resize-none")
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			type,
			required: true,
			placeholder: label,
			value,
			onChange: (e) => onChange(e.target.value),
			className: shared
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: id,
			className: "pointer-events-none absolute left-4 top-2 text-[11px] font-medium tracking-wide text-primary/85 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-primary",
			children: label
		})]
	});
}
function Contact() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		subject: "",
		message: ""
	});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const set = (k) => (v) => setForm((f) => ({
		...f,
		[k]: v
	}));
	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(profile.email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2400);
		} catch {
			setCopied(true);
			setTimeout(() => setCopied(false), 2400);
		}
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		setStatus("sending");
		const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
		const subject = encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`);
		setTimeout(() => {
			window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
			setStatus("sent");
		}, 450);
	};
	const resetForm = () => {
		setForm({
			name: "",
			email: "",
			subject: "",
			message: ""
		});
		setStatus("idle");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		eyebrow: "Contact",
		title: "Let's build something worth shipping.",
		intro: "Open to software engineering and machine learning roles, research collaborations, and interesting problems.",
		tone: "aqua",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 sm:gap-8 pb-6 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card relative overflow-hidden p-6 sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold sm:text-xl",
						children: "Send a Message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Direct response typically within 24 hours"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 place-items-center rounded-xl border border-primary/30 bg-primary/8 text-primary shadow-[0_0_16px_-6px_var(--glow)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 18 })
					})]
				}), status === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 py-8 text-center",
					style: { animation: "pop-in .4s var(--ease-out-soft) both" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/15 text-primary shadow-[0_0_24px_-6px_var(--glow)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 30 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold",
							children: "Message Ready & Sent!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto max-w-sm text-xs sm:text-sm text-muted-foreground",
							children: "Your mail client has been launched with your message. You can also copy my email directly if you prefer writing from your webmail."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-4 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: copyEmail,
								className: "inline-flex items-center gap-2 rounded-full border border-primary/45 bg-primary/10 px-5 py-2.5 text-xs sm:text-sm font-medium text-primary transition-all duration-300 hover:shadow-[0_0_20px_-6px_var(--glow)]",
								children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 16 }), copied ? "Email Copied!" : "Copy Email Address"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: resetForm,
								className: "inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40",
								children: "Send Another Message"
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "space-y-4 sm:space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2 sm:gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "name",
								label: "Your Name",
								value: form.name,
								onChange: set("name")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "email",
								label: "Your Email",
								type: "email",
								value: form.email,
								onChange: set("email")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "subject",
							label: "Subject / Role",
							value: form.subject,
							onChange: set("subject")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "message",
							label: "Your Message",
							textarea: true,
							value: form.message,
							onChange: set("message")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3 sm:gap-4 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: status === "sending",
								className: "group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-6px_var(--glow)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_var(--glow)] disabled:opacity-70 sm:px-6 sm:py-3",
								children: [status === "sending" ? "Preparing…" : "Send Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
									size: 15,
									className: "transition-transform duration-300 group-hover:translate-x-1"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: copyEmail,
								className: "inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/30 px-4 py-2.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary sm:py-3",
								children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									size: 14,
									className: "text-primary"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 14 }), copied ? "Copied!" : "Copy Email"]
							})]
						})
					]
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card lift-hover flex items-center justify-between gap-4 p-5 sm:px-6 sm:py-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${profile.email}`,
								className: "flex items-center gap-3.5 sm:gap-4 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/8 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs text-muted-foreground",
										children: "Direct Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-xs sm:text-sm font-medium text-foreground/90",
										children: profile.email
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: copyEmail,
								title: "Copy email address",
								"aria-label": "Copy email address",
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border/70 bg-surface/40 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary",
								children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									size: 15,
									className: "text-primary"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 15 })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card flex items-center gap-3.5 sm:gap-4 p-5 sm:px-6 sm:py-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/8 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 18 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs text-muted-foreground",
									children: "Location"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs sm:text-sm font-medium text-foreground/90",
									children: profile.location
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-3.5 sm:gap-4",
							children: [{
								href: profile.linkedin,
								icon: Linkedin,
								label: "LinkedIn"
							}, {
								href: profile.github,
								icon: Github,
								label: "GitHub"
							}].map(({ href, icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href,
								target: "_blank",
								rel: "noreferrer",
								className: "surface-card lift-hover group relative flex flex-col items-center justify-center gap-2 p-5 sm:p-6 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 place-items-center rounded-xl border border-primary/20 bg-primary/5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-[0_0_14px_-6px_var(--glow)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 20 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs sm:text-sm font-medium text-foreground/90",
									children: label
								})]
							}, label))
						})
					]
				})
			})]
		})
	});
}
//#endregion
export { Contact as component };
