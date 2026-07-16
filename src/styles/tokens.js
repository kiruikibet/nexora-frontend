/**
 * Nexora Design Tokens — JavaScript
 * ─────────────────────────────────────────────────────────────────────────────
 * Mirror of the CSS custom properties defined in theme.css.
 * Use these when you need token values inside JavaScript — inline styles,
 * canvas drawing, animation libraries, charting libraries, etc.
 *
 * HOW TO USE:
 *   import { colors, radius, shadows, spacing, cx } from "@/styles/tokens";
 *
 *   // Inline style
 *   <div style={{ backgroundColor: colors.surface, borderRadius: radius.card }} />
 *
 *   // Compose class strings
 *   className={cx(inputBase, "w-full")}
 *
 * NOTE: For Tailwind utility classes (the common case) you do NOT need this
 * file — just use the class names documented in theme.css directly in JSX.
 * For reusable class strings, import from the `classes` export below.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── Raw token values (for JS/inline use) ────────────────────────────────────

export const colors = {
  /* Brand */
  brand:             "#0f172a",
  brandHover:        "#1e293b",
  brandDark:         "#020617",
  brandMuted:        "#f1f5f9",
  brandMutedHover:   "#e2e8f0",

  /* Text */
  body:              "#0f172a",
  secondary:         "#334155",
  muted:             "#64748b",
  subtle:            "#94a3b8",
  inverted:          "#ffffff",
  onDark:            "#cbd5e1",

  /* Surfaces */
  surface:           "#ffffff",
  surfaceAlt:        "#f8fafc",
  surfaceDark:       "#0f172a",

  /* Borders */
  border:            "#e2e8f0",
  borderStrong:      "#cbd5e1",

  /* Semantic */
  danger:            "#e11d48",
  dangerHover:       "#be123c",
  success:           "#059669",
  successHover:      "#047857",
  badge:             "#dc2626",
};

export const radius = {
  card:   "1.5rem",
  panel:  "1rem",
  input:  "0.5rem",
  pill:   "9999px",
  badge:  "0.375rem",
};

export const shadows = {
  card:   "0 1px 3px rgba(15,23,42,0.08), 0 1px 2px rgba(15,23,42,0.06)",
  cardLg: "0 20px 60px rgba(15,23,42,0.08)",
  navbar: "0 1px 0 rgba(15,23,42,0.06)",
};

export const spacing = {
  section:   "4rem",
  sectionSm: "2.5rem",
};

export const widths = {
  page: "80rem",
};

export const fontFamily = {
  sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

export const letterSpacing = {
  display: "-0.025em",
  caps:    "0.2em",
};

// ─── Reusable class strings ───────────────────────────────────────────────────
// Import these wherever you need a consistent, token-backed class string.
// They compose Tailwind utility classes that map to the @theme tokens above.

/**
 * Standard form input / select / textarea.
 * Apply to: <input>, <select>, <textarea>
 *
 * @example
 *   <input className={inputBase} />
 *   <input className={`${inputBase} pl-10`} />   // with left icon
 */
export const inputBase =
  "h-11 w-full rounded-input border border-border-strong bg-surface px-4 text-sm text-body outline-none transition" +
  " placeholder:text-subtle" +
  " focus:border-brand focus:ring-2 focus:ring-brand/10" +
  " disabled:cursor-not-allowed disabled:opacity-60" +
  " aria-[invalid=true]:border-danger aria-[invalid=true]:ring-danger/10";

/**
 * Form field error message paragraph.
 * Always render it (even when empty) to prevent layout shift.
 *
 * @example
 *   <p id="field-error" className={fieldError}>{error || " "}</p>
 */
export const fieldError = "mt-1 min-h-5 text-sm text-danger";

/**
 * Form field label.
 *
 * @example
 *   <label htmlFor="email" className={fieldLabel}>Email</label>
 */
export const fieldLabel = "mb-1.5 block text-sm font-medium text-secondary";

/**
 * Page / section content wrapper.
 * Centered, max-width capped, with responsive horizontal padding.
 *
 * @example
 *   <div className={pageContainer}>…</div>
 */
export const pageContainer =
  "mx-auto max-w-page px-4 sm:px-6 lg:px-8";

/**
 * Vertical section padding (full section rhythm).
 *
 * @example
 *   <section className={sectionPadding}><div className={pageContainer}>…</div></section>
 */
export const sectionPadding = "py-section";

/**
 * Icon button used in the navbar (bell, messages, etc.).
 *
 * @example
 *   <button className={navIconBtn}><Icon icon={Bell} /></button>
 */
export const navIconBtn =
  "relative rounded-pill p-2 transition-colors hover:bg-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand";

/**
 * Unread / notification badge that floats over an icon.
 * Use the `sm` variant for mobile (smaller).
 *
 * @example
 *   <span className={notifBadge}>{count}</span>
 *   <span className={notifBadgeSm}>{count}</span>
 */
export const notifBadge =
  "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-pill bg-badge text-xs font-semibold text-inverted";

export const notifBadgeSm =
  "absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-pill bg-badge text-[10px] font-semibold text-inverted";

/**
 * Card — standard surface with border, radius, and shadow.
 *
 * @example
 *   <div className={card}>…</div>
 *   <div className={`${card} p-6`}>…</div>
 */
export const card =
  "rounded-card border border-border bg-surface shadow-card";

/**
 * Card — large elevated variant (hero sections, auth panels).
 */
export const cardLg =
  "rounded-card border border-border bg-surface shadow-card-lg";

/**
 * Inline "pill" label / tag (category badges, status chips).
 *
 * @example
 *   <span className={pillLabel}>New</span>
 */
export const pillLabel =
  "inline-flex items-center rounded-pill border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted shadow-sm";

/**
 * ALL-CAPS section heading (e.g. "Featured", "Categories").
 */
export const capsHeading =
  "text-xs font-semibold uppercase tracking-caps text-muted";

/**
 * Display / hero headline.
 */
export const displayHeading =
  "font-semibold tracking-display text-body";

// ─── Utility ──────────────────────────────────────────────────────────────────

/**
 * Tiny class-name joiner (no external dep needed).
 * Filters out falsy values so you can safely pass conditionals.
 *
 * @example
 *   cx("base-class", isActive && "active", className)
 */
export function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}
