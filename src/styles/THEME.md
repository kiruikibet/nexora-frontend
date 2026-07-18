# Nexora Theme System

This document explains how the theme works, the different ways you can use it, and why each approach exists.

---

## How It All Fits Together

The theme lives in three files:

```
src/styles/
  theme.css   — defines every design value as a CSS variable inside Tailwind's @theme block
  tokens.js   — mirrors those values as JavaScript exports + pre-built reusable class strings
  index.js    — the single entry point: imports theme.css and re-exports everything from tokens.js
```

And it plugs into the app here:

```
src/index.css     ← imports theme.css  (loads all CSS tokens globally)
src/main.jsx      ← imports index.css  (runs once when the app starts)
```

Because `main.jsx` loads `index.css` which loads `theme.css`, every CSS token is available globally across the entire app from the moment the app boots. No component ever needs to import a CSS file to get the design tokens.

---

## The 4 Ways to Use the Theme

### Way 1 — Tailwind classes directly in JSX (most common, no import needed)

This is what you use 90% of the time. Because `theme.css` is loaded globally, Tailwind generates utility classes from every token automatically. You use them exactly like normal Tailwind classes — just write them in `className`.

```jsx
// No import needed — these classes are available in every component automatically
<div className="bg-surface border border-border rounded-card shadow-card p-6">
  <h2 className="text-body font-semibold">Title</h2>
  <p className="text-muted text-sm">Helper text</p>
  <span className="bg-brand text-inverted rounded-pill px-3 py-1 text-xs">Badge</span>
</div>
```

Why: Tailwind is a utility-first framework. Writing classes directly in JSX is the intended pattern — it keeps styles co-located with markup and requires zero setup per file. Since the tokens are loaded globally, you never have to think about where to import them.

---

### Way 2 — Reusable class strings from `tokens.js` (for patterns that repeat)

Some patterns are used identically across many components — a form input, a page container, a nav icon button. Writing the same 80-character class string in 10 different places is fragile: if you want to change the input style, you have to find and update every occurrence.

The solution is to define those patterns once as exported strings in `tokens.js`, then import and use them wherever needed.

```js
import { inputBase, fieldLabel, fieldError, pageContainer } from "../styles";
```

```jsx
// Every form across the app uses the exact same input style
<label className={fieldLabel}>Email</label>
<input className={inputBase} type="email" />
<p className={fieldError}>{error || " "}</p>

// Every page uses the exact same container width and padding
<div className={pageContainer}>…</div>

// Extend by composing with extra classes
<input className={`${inputBase} pl-10`} />  // add left padding for an icon
<div className={`${card} p-6`}>…</div>      // add padding to a card
```

The import path is `"../styles"` (or `"../../styles"` depending on depth), not `"../styles/tokens"`. That works because `styles/index.js` re-exports everything from `tokens.js`, so the folder itself is the entry point.

Why: One change in `tokens.js` updates every component that uses that string. It also makes components easier to read — `className={inputBase}` is immediately clear, whereas a 6-condition class string inline is not.

**Currently used in:**
- `LoginForm.jsx` — `inputBase`, `fieldLabel`, `fieldError`
- `RegisterForm.jsx` — `inputBase`, `fieldLabel`, `fieldError`
- `Navbar.jsx` — `navIconBtn`, `notifBadge`, `notifBadgeSm`
- `Footer.jsx` — `pageContainer`
- `HomePage.jsx` — `pageContainer`, `cardLg`, `capsHeading`, `displayHeading`

---

### Way 3 — Raw CSS variables in plain CSS files

When you're writing actual CSS (in `.css` files or `<style>` blocks) rather than Tailwind classes, you reference the tokens as CSS custom properties using `var()`.

```css
/* In any .css file */
.my-element {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  color: var(--color-body);
}

.my-element:hover {
  background-color: var(--color-surface-alt);
  border-color: var(--color-border-strong);
}
```

All variable names follow this pattern:
- Colors → `--color-{name}` (e.g. `--color-brand`, `--color-danger`)
- Radius → `--radius-{name}` (e.g. `--radius-card`, `--radius-pill`)
- Shadows → `--shadow-{name}` (e.g. `--shadow-card`)
- Spacing → `--spacing-{name}` (e.g. `--spacing-section`)
- Widths → `--width-{name}` (e.g. `--width-page`)
- Typography → `--font-{name}`, `--tracking-{name}`

Why: Some situations don't work with Tailwind classes — third-party component overrides, keyframe animations, pseudo-element styles, or CSS Modules. `var()` lets you stay on-token without needing Tailwind.

---

### Way 4 — Raw JS values for inline styles and third-party libraries

Tailwind classes and CSS variables don't work everywhere. Charting libraries, animation configs (GSAP, Framer Motion), canvas drawing, and dynamic `style` attributes all need actual JavaScript values. For those cases, import the raw values from `tokens.js`.

```js
import { colors, radius, shadows, spacing } from "../styles";
```

```jsx
// Dynamic inline style
<div style={{ backgroundColor: colors.surfaceAlt, borderRadius: radius.card }} />

// Framer Motion
<motion.div animate={{ backgroundColor: colors.brand }} />

// A charting library (Recharts, Chart.js, etc.)
const chartConfig = {
  colors: [colors.brand, colors.success, colors.danger],
  borderRadius: radius.badge,
};

// Canvas drawing
ctx.fillStyle = colors.brand;
ctx.strokeStyle = colors.border;
```

Why: JavaScript libraries can't read Tailwind class names or CSS variables — they need real hex values and pixel/rem strings. The `tokens.js` values are the exact same numbers that `theme.css` uses, so your JS-driven visuals stay in sync with your CSS.

---

## All Available Tokens

### Colors

| Tailwind class | JS key (`colors.*`) | Value | Use for |
|---|---|---|---|
| `bg-brand` / `text-brand` | `brand` | `#0f172a` | Primary CTAs, avatar backgrounds |
| `bg-brand-hover` | `brandHover` | `#1e293b` | Brand hover states |
| `bg-brand-dark` | `brandDark` | `#020617` | Darkest brand — footer, dark panels |
| `bg-brand-muted` | `brandMuted` | `#f1f5f9` | Tinted bg, hover on light surfaces |
| `text-body` | `body` | `#0f172a` | Default body copy |
| `text-secondary` | `secondary` | `#334155` | Secondary UI text, nav links, labels |
| `text-muted` | `muted` | `#64748b` | Captions, helper text, icon labels |
| `text-subtle` | `subtle` | `#94a3b8` | Placeholders, disabled text |
| `text-inverted` | `inverted` | `#ffffff` | Text on dark backgrounds |
| `text-on-dark` | `onDark` | `#cbd5e1` | Body text inside dark panels (footer) |
| `bg-surface` | `surface` | `#ffffff` | Cards, modals, inputs |
| `bg-surface-alt` | `surfaceAlt` | `#f8fafc` | Page bg, section bg, inner panels |
| `bg-surface-dark` | `surfaceDark` | `#0f172a` | Dark panels — footer, auth panels |
| `border-border` | `border` | `#e2e8f0` | Default borders everywhere |
| `border-border-strong` | `borderStrong` | `#cbd5e1` | Emphasized borders, input borders |
| `text-danger` / `bg-danger` | `danger` | `#e11d48` | Errors, destructive actions |
| `text-success` / `bg-success` | `success` | `#059669` | Confirmations, positive feedback |
| `bg-badge` | `badge` | `#dc2626` | Notification / unread count badges |

### Border Radius

| Tailwind class | JS key (`radius.*`) | Value | Use for |
|---|---|---|---|
| `rounded-card` | `card` | `1.5rem` | Large cards, auth panels, hero boxes |
| `rounded-panel` | `panel` | `1rem` | Inner panels, dropdowns, modals |
| `rounded-input` | `input` | `0.5rem` | Form inputs, selects, textareas |
| `rounded-pill` | `pill` | `9999px` | Pill buttons, avatar, badges, tags |
| `rounded-badge` | `badge` | `0.375rem` | Small chips, status labels |

### Shadows

| Tailwind class | JS key (`shadows.*`) | Use for |
|---|---|---|
| `shadow-card` | `card` | Standard card elevation |
| `shadow-card-lg` | `cardLg` | Hero sections, auth panels, featured cards |
| `shadow-navbar` | `navbar` | Sticky navigation bar |

### Spacing

| Tailwind class | JS key (`spacing.*`) | Value | Use for |
|---|---|---|---|
| `py-section` / `p-section` | `section` | `4rem` | Vertical section padding |
| `py-section-sm` | `sectionSm` | `2.5rem` | Tighter padding on smaller viewports |
| `max-w-page` | `widths.page` | `80rem` | Main content container max-width |

### Typography

| Tailwind class | Value | Use for |
|---|---|---|
| `font-sans` | Inter stack | Applied to `<body>` globally — rarely need to write this |
| `tracking-display` | `-0.025em` | Large headlines and display text |
| `tracking-caps` | `0.2em` | ALL-CAPS labels, category badges |

---

## Reusable Class Strings Reference

These are all exported from `tokens.js` and available via `import { ... } from "../styles"`.

### `inputBase`
Standard form input, select, or textarea. Includes focus ring, error state, and disabled state.

```jsx
<input className={inputBase} />
<input className={`${inputBase} pl-10`} />   // with a left icon
<select className={inputBase}>…</select>
```

### `fieldLabel`
Form field label — consistent size, weight, and color.

```jsx
<label htmlFor="email" className={fieldLabel}>Email</label>
```

### `fieldError`
Error message below a field. Always render it even when empty (the `min-h` prevents layout shift).

```jsx
<p id="email-error" className={fieldError}>{error || " "}</p>
```

### `pageContainer`
Centered, responsive content wrapper used on every page and layout.

```jsx
<div className={pageContainer}>…</div>
<section className={`${pageContainer} py-16`}>…</section>
```

### `sectionPadding`
Vertical section rhythm — `py-section` (4rem top and bottom).

```jsx
<section className={sectionPadding}>
  <div className={pageContainer}>…</div>
</section>
```

### `navIconBtn`
Icon button for the navbar (bell, messages, etc.). Handles hover, focus ring, and positioning for a badge.

```jsx
<button className={navIconBtn} aria-label="Notifications">
  <Icon icon={Bell} />
  {count > 0 && <span className={notifBadge}>{count}</span>}
</button>
```

### `notifBadge` / `notifBadgeSm`
Floating unread count badge. `notifBadge` is for desktop, `notifBadgeSm` is slightly smaller for mobile.

```jsx
<span className={notifBadge}>{unreadMessages}</span>    // desktop
<span className={notifBadgeSm}>{unreadMessages}</span>  // mobile
```

### `card`
Standard card surface — border, rounded corners, white background, light shadow.

```jsx
<div className={`${card} p-6`}>…</div>
```

### `cardLg`
Elevated card for hero sections and auth panels — same as `card` but with a heavier shadow.

```jsx
<div className={`${cardLg} p-6`}>…</div>
```

### `pillLabel`
Inline pill tag for category chips, status labels, eyebrow text.

```jsx
<span className={pillLabel}>Nexora Marketplace</span>
```

### `capsHeading`
ALL-CAPS section heading — uppercase, wide letter-spacing, muted color.

```jsx
<h2 className={capsHeading}>Featured Categories</h2>
```

### `displayHeading`
Display/hero headline base. Pair with a font-size class.

```jsx
<h1 className={`text-5xl lg:text-6xl ${displayHeading}`}>
  A professional marketplace.
</h1>
```

### `cx(...classes)`
Utility to join class names, filtering out any falsy values. No external dependency needed.

```js
cx("base", isActive && "bg-brand", className)
// → "base bg-brand extra"
```

---

## Adding New Tokens

1. Add the CSS variable to `theme.css` inside `@theme {}`:

```css
--color-accent: #6366f1; /* indigo-500 — accent highlights */
```

2. Mirror it in `tokens.js`:

```js
export const colors = {
  ...
  accent: "#6366f1",
};
```

3. Use it immediately anywhere as `bg-accent` / `text-accent` — no restart needed.

If it's a pattern that repeats across components, also add a class string to `tokens.js`:

```js
export const accentTag = "rounded-badge bg-accent/10 text-accent px-2 py-0.5 text-xs font-medium";
```

Then import and use it like any other class string:

```js
import { accentTag } from "../styles";
```
