# Nexora Theme System

A single source of truth for every color, radius, shadow, spacing, and reusable class string across the Nexora frontend. Defined once, used everywhere — no repeated values, no drift between components.

---

## File Structure

```
src/styles/
  theme.css    — CSS custom properties inside Tailwind v4's @theme block
  tokens.js    — Same values as JS exports + reusable Tailwind class strings
src/index.css  — Imports theme.css once, making all tokens globally available
```

`theme.css` is imported in `index.css`, which is loaded in `main.jsx`. Every component and page gets the tokens automatically — no per-file imports needed for Tailwind classes.

---

## Two Ways to Use the Theme

### 1. Tailwind utility classes (primary usage)

Tailwind v4 reads the `@theme` block in `theme.css` and auto-generates utility classes from every token. Use them exactly like standard Tailwind classes in JSX.

```jsx
<div className="bg-surface border border-border rounded-card shadow-card p-6">
  <h2 className="text-body font-semibold">Title</h2>
  <p className="text-muted text-sm">Helper text</p>
</div>
```

No imports required. The classes are available globally.

### 2. Reusable class strings from `tokens.js` (for repeated patterns)

For patterns that repeat across multiple components — form inputs, page containers, nav icon buttons — import the pre-built class strings from `tokens.js`. This prevents the same 80-character class string from being copy-pasted everywhere.

```js
import { inputBase, fieldLabel, fieldError, pageContainer } from "../styles/tokens";
```

```jsx
<label className={fieldLabel}>Email</label>
<input className={inputBase} type="email" />
<p className={fieldError}>{error || " "}</p>
```

### 3. Raw JS values (for inline styles and third-party libs)

When you need token values outside of Tailwind — charting libraries, canvas, animation configs, dynamic inline styles — import the raw values from `tokens.js`.

```js
import { colors, radius, shadows } from "../styles/tokens";

<div style={{ backgroundColor: colors.surfaceAlt, borderRadius: radius.card }} />
```

---

## Design Tokens Reference

### Colors

All available as `bg-*`, `text-*`, and `border-*` Tailwind classes.

| Token | Tailwind class | Hex | When to use |
|---|---|---|---|
| brand | `bg-brand` / `text-brand` | `#0f172a` | Primary CTAs, avatar bg, active states |
| brand-hover | — (hover variant) | `#1e293b` | Brand hover state |
| brand-dark | `bg-brand-dark` | `#020617` | Dark panels, footer bg |
| brand-muted | `bg-brand-muted` | `#f1f5f9` | Tinted backgrounds, hover states on light |
| brand-muted-hover | — (hover variant) | `#e2e8f0` | Hovered brand-muted areas |
| body | `text-body` | `#0f172a` | Default body copy |
| secondary | `text-secondary` | `#334155` | Secondary UI text, nav links |
| muted | `text-muted` | `#64748b` | Captions, helper text, icon labels |
| subtle | `text-subtle` | `#94a3b8` | Placeholders, disabled text |
| inverted | `text-inverted` | `#ffffff` | Text on dark backgrounds |
| on-dark | `text-on-dark` | `#cbd5e1` | Body text on dark panels (footer) |
| surface | `bg-surface` | `#ffffff` | Cards, modals, inputs |
| surface-alt | `bg-surface-alt` | `#f8fafc` | Page bg, section bg, inner panels |
| surface-dark | `bg-surface-dark` | `#0f172a` | Dark card panels |
| border | `border-border` | `#e2e8f0` | Default borders |
| border-strong | `border-border-strong` | `#cbd5e1` | Emphasized borders, input borders |
| danger | `text-danger` / `bg-danger` | `#e11d48` | Errors, destructive actions |
| danger-hover | — (hover variant) | `#be123c` | Danger hover state |
| success | `text-success` / `bg-success` | `#059669` | Confirmations, positive feedback |
| success-hover | — (hover variant) | `#047857` | Success hover state |
| badge | `bg-badge` | `#dc2626` | Notification / unread count badges |

### Border Radius

| Token | Tailwind class | Value | When to use |
|---|---|---|---|
| card | `rounded-card` | `1.5rem` | Large cards, auth panels, hero boxes |
| panel | `rounded-panel` | `1rem` | Inner panels, dropdowns, modals |
| input | `rounded-input` | `0.5rem` | Form inputs, selects, textareas |
| pill | `rounded-pill` | `9999px` | Pill buttons, tags, avatar, badges |
| badge | `rounded-badge` | `0.375rem` | Small chips, labels |

### Shadows

| Token | Tailwind class | When to use |
|---|---|---|
| card | `shadow-card` | Standard card elevation |
| card-lg | `shadow-card-lg` | Hero sections, featured cards, auth panels |
| navbar | `shadow-navbar` | Sticky navigation bar |

### Spacing

| Token | Tailwind class | Value | When to use |
|---|---|---|---|
| section | `py-section` / `p-section` | `4rem` | Vertical section padding |
| section-sm | `py-section-sm` | `2.5rem` | Tighter section padding on small viewports |
| page width | `max-w-page` | `80rem` | Main content container max-width |

### Typography

| Token | Tailwind class | Value | When to use |
|---|---|---|---|
| font-sans | `font-sans` | Inter stack | Already applied to `<body>` globally |
| tracking-display | `tracking-display` | `-0.025em` | Large headlines and display text |
| tracking-caps | `tracking-caps` | `0.2em` | ALL-CAPS labels, category badges |

---

## Reusable Class Strings

Import these from `tokens.js` to avoid repeating long class strings across components.

### `inputBase`

Standard form input, select, or textarea. Includes focus ring, error state via `aria-invalid`, disabled state.

```js
import { inputBase } from "../styles/tokens";
```

```jsx
<input className={inputBase} type="text" />
<input className={`${inputBase} pl-10`} type="text" />  // with a left icon
<select className={inputBase}>…</select>
<textarea className={inputBase} />
```

Used in: `LoginForm.jsx`, `RegisterForm.jsx`

---

### `fieldLabel`

Form field label — `mb-1.5 block text-sm font-medium text-secondary`.

```jsx
<label htmlFor="email" className={fieldLabel}>Email</label>
```

Used in: `LoginForm.jsx`, `RegisterForm.jsx`

---

### `fieldError`

Error message below a field. Always render it (even empty) to prevent layout shift.

```jsx
<p id="email-error" className={fieldError}>{error || " "}</p>
```

Used in: `LoginForm.jsx`, `RegisterForm.jsx`

---

### `pageContainer`

Centered, max-width content wrapper with responsive horizontal padding.

```jsx
<div className={pageContainer}>…</div>

// With vertical padding
<section className={`${pageContainer} py-section`}>…</section>
```

Used in: `Navbar.jsx`, `Footer.jsx`, `HomePage.jsx` (via section wrapper)

---

### `sectionPadding`

Vertical section rhythm — `py-section` (4rem top + bottom).

```jsx
<section className={`${sectionPadding}`}>
  <div className={pageContainer}>…</div>
</section>
```

---

### `navIconBtn`

Icon button used in the navbar (messages, notifications, etc.). Includes focus ring and hover state.

```jsx
<button className={navIconBtn} aria-label="Notifications">
  <Icon icon={Bell} />
  {count > 0 && <span className={notifBadge}>{count}</span>}
</button>
```

Used in: `Navbar.jsx` (messages button, notifications button)

---

### `notifBadge` / `notifBadgeSm`

Floating unread count badge positioned over a `navIconBtn`. Use `notifBadgeSm` on mobile.

```jsx
// Desktop
<span className={notifBadge}>{unreadMessages}</span>

// Mobile
<span className={notifBadgeSm}>{unreadMessages}</span>
```

Used in: `Navbar.jsx` (desktop and mobile message/notification buttons)

---

### `card`

Standard card surface — `rounded-card border border-border bg-surface shadow-card`.

```jsx
<div className={card}>…</div>
<div className={`${card} p-6`}>…</div>
```

---

### `cardLg`

Elevated card for hero sections and auth panels — same as `card` but with `shadow-card-lg`.

```jsx
<div className={`${cardLg} p-6`}>…</div>
```

Used in: `HomePage.jsx` (architecture overview panel)

---

### `pillLabel`

Inline pill label for category badges, status chips, and tags.

```jsx
<span className={pillLabel}>Marketplace</span>
```

Used in: `HomePage.jsx` (hero eyebrow label)

---

### `capsHeading`

ALL-CAPS section heading — `text-xs font-semibold uppercase tracking-caps text-muted`.

```jsx
<h2 className={capsHeading}>Featured</h2>
<span className={capsHeading}>Presentation</span>
```

Used in: `HomePage.jsx` (architecture column titles), `Footer.jsx` (section headings)

---

### `displayHeading`

Display / hero headline base — `font-semibold tracking-display text-body`. Pair with a font-size class.

```jsx
<h1 className={`text-5xl lg:text-6xl ${displayHeading}`}>
  A professional marketplace frontend.
</h1>
```

Used in: `HomePage.jsx` (hero h1)

---

### `cx(...classes)`

Tiny class-name joiner utility. Filters falsy values so you can safely pass conditionals.

```js
import { cx } from "../styles/tokens";

cx("base-class", isActive && "active", className)
// → "base-class active extra"
```

---

## Component Variant Files

These files live alongside their component and use design tokens for all class values.

### `ButtonVariants.js`

Located at `src/components/common/button/ButtonVariants.js`.

Exports: `buttonBase`, `variantClasses`, `sizeClasses`, `widthClasses`, `shapeClasses`.

```js
import { buttonBase, variantClasses, sizeClasses } from "./ButtonVariants";
```

| Variant | When to use |
|---|---|
| `primary` | Main CTAs — Sign In, Submit, Create |
| `secondary` | Alternative CTAs |
| `outline` | Neutral actions — Sign In (unauthenticated nav) |
| `ghost` | Minimal actions, inline toolbar buttons |
| `light` | Light filled — subtle emphasis |
| `dark` | Dark filled — inverse of primary |
| `link` | Looks like a text link |
| `danger` | Destructive actions — Delete, Remove |
| `success` | Positive confirmation — Sell, Confirm |

| Size | Height | When to use |
|---|---|---|
| `xs` | 32px | Compact toolbars |
| `small` | 36px | Nav buttons, inline actions |
| `medium` | 44px | Default form buttons |
| `large` | 48px | Primary form submit buttons |
| `xl` | 56px | Hero CTAs |

| Shape | Class | When to use |
|---|---|---|
| `default` | `rounded-lg` | Most buttons |
| `pill` | `rounded-full` | Sell button, tags |
| `soft` | `rounded-xl` | Cards, panels |
| `square` | `rounded-none` | Icon-only toolbars |

---

### `avatarVariants.js`

Located at `src/components/common/avatar/avatarVariants.js`.

```js
import { avatarBase, avatarSizes } from "./avatarVariants";
```

`avatarBase` uses `bg-brand` and `text-inverted` tokens — circular, brand-colored with white initials.

| Size | Dimensions | When to use |
|---|---|---|
| `small` | 32×32px | Navbar compact avatar |
| `medium` | 40×40px | Dropdown header |
| `large` | 56×56px | Profile pages |
| `xlarge` | 80×80px | Profile hero |

---

### `searchBarVariants.js`

Located at `src/components/common/searchBar/searchBarVariants.js`.

```js
import { searchBarBase, searchBarSizes } from "./searchBarVariants";
```

`searchBarBase` uses `rounded-pill`, `border-border`, `bg-surface`, and `shadow-card` tokens — pill-shaped search container with focus ring.

| Size | Height | When to use |
|---|---|---|
| `small` | 40px | Navbar search |
| `medium` | 48px | Page-level search |
| `large` | 56px | Hero search |

---

## Raw CSS Variable Usage

Use `var(--token-name)` in plain CSS files or inline `style` attributes when Tailwind classes aren't available.

```css
.custom-element {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  font-family: var(--font-sans);
}
```

All variable names follow the pattern:
- Colors → `--color-{name}`
- Radius → `--radius-{name}`
- Shadows → `--shadow-{name}`
- Spacing → `--spacing-{name}`
- Widths → `--width-{name}`
- Typography → `--font-{name}`, `--tracking-{name}`

---

## Adding New Tokens

1. Add the CSS variable to `theme.css` inside `@theme {}`:

```css
--color-accent: #6366f1; /* indigo-500 — accent highlights */
```

2. Mirror it in `tokens.js` under the matching export:

```js
export const colors = {
  ...
  accent: "#6366f1",
};
```

3. Use it immediately as `bg-accent` / `text-accent` anywhere — no restart needed in dev.

If it's a pattern that repeats across components, also add a class string export to `tokens.js`:

```js
export const accentBadge = "rounded-badge bg-accent text-inverted px-2 py-0.5 text-xs font-medium";
```

---

## Where Each Token is Used

| Token / Class string | Used in |
|---|---|
| `bg-brand`, `text-inverted` | `ButtonVariants.js` (primary), `avatarVariants.js` |
| `bg-brand-muted` | `ButtonVariants.js` (secondary, light, ghost hover), `navIconBtn`, dropdown items |
| `bg-surface`, `border-border` | `searchBarVariants.js`, `DropdownMenu.jsx`, `card`, `cardLg` |
| `bg-surface-dark` | `Footer.jsx` |
| `text-body` | `inputBase`, `displayHeading`, `ButtonVariants.js` (outline, secondary) |
| `text-secondary` | `fieldLabel`, `Navbar.jsx` (nav links, username) |
| `text-muted` | `capsHeading`, `pillLabel`, dropdown icons, `Footer.jsx` links |
| `text-subtle` | `inputBase` placeholder |
| `text-on-dark` | `Footer.jsx` body text |
| `text-danger`, `bg-danger` | `fieldError`, `inputBase` (aria-invalid), `ButtonVariants.js` (danger), `DropdownItem.jsx` |
| `bg-success` | `ButtonVariants.js` (success) — Sell button in `Navbar.jsx` |
| `bg-badge` | `notifBadge`, `notifBadgeSm` — `Navbar.jsx` |
| `rounded-card` | `card`, `cardLg` — `HomePage.jsx` |
| `rounded-panel` | `DropdownMenu.jsx` |
| `rounded-input` | `inputBase` — `LoginForm.jsx`, `RegisterForm.jsx` |
| `rounded-pill` | `searchBarBase`, `avatarBase`, `navIconBtn`, `notifBadge`, `pillLabel`, `Navbar.jsx` profile trigger |
| `shadow-card` | `card`, `searchBarBase` |
| `shadow-card-lg` | `cardLg` — `HomePage.jsx` hero panel |
| `shadow-navbar` | `Navbar.jsx` header |
| `max-w-page` | `pageContainer` — `Navbar.jsx`, `Footer.jsx`, `HomePage.jsx` |
| `py-section` | `sectionPadding` — `Footer.jsx` |
| `tracking-caps` | `capsHeading` — `HomePage.jsx`, `Footer.jsx` |
| `tracking-display` | `displayHeading` — `HomePage.jsx` hero h1 |
| `inputBase` | `LoginForm.jsx`, `RegisterForm.jsx` |
| `fieldLabel` | `LoginForm.jsx`, `RegisterForm.jsx` |
| `fieldError` | `LoginForm.jsx`, `RegisterForm.jsx` |
| `pageContainer` | `Navbar.jsx`, `Footer.jsx`, `HomePage.jsx` |
| `navIconBtn` | `Navbar.jsx` (messages, notifications — desktop + mobile) |
| `notifBadge` | `Navbar.jsx` (desktop) |
| `notifBadgeSm` | `Navbar.jsx` (mobile) |
| `cardLg` | `HomePage.jsx` (architecture panel) |
| `pillLabel` | `HomePage.jsx` (hero eyebrow) |
| `capsHeading` | `HomePage.jsx`, `Footer.jsx` |
| `displayHeading` | `HomePage.jsx` (hero h1) |
