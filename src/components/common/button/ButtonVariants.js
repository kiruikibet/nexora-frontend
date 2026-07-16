export const buttonBase =
  "relative inline-flex items-center justify-center gap-2 border font-medium transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

/**
 * Button Variants
 *
 * primary    → Main CTA
 * secondary  → Alternative CTA
 * outline    → Neutral button
 * ghost      → Minimal action
 * danger     → Delete / Remove
 * success    → Confirm / Success
 * light      → Light filled background
 * dark       → Dark filled background
 * link       → Looks like text
 */

export const variantClasses = {
  primary:
    "border-brand bg-brand text-inverted hover:bg-slate-800 hover:border-slate-800 focus-visible:outline-brand shadow-sm",

  secondary:
    "border-border-strong bg-brand-muted text-body hover:bg-slate-200 hover:border-slate-400 focus-visible:outline-brand",

  outline:
    "border-border-strong bg-surface text-body hover:bg-surface-alt hover:border-slate-400 focus-visible:outline-brand",

  ghost:
    "border-transparent bg-transparent text-slate-700 hover:bg-brand-muted hover:text-body focus-visible:outline-brand",

  light:
    "border-transparent bg-brand-muted text-slate-800 hover:bg-slate-200 focus-visible:outline-brand",

  dark:
    "border-brand-dark bg-brand-dark text-inverted hover:bg-black hover:border-black focus-visible:outline-brand-dark",

  link:
    "border-transparent bg-transparent text-slate-700 underline-offset-4 hover:underline hover:text-brand-dark shadow-none",

  danger:
    "border-danger bg-danger text-inverted hover:bg-danger-hover hover:border-danger-hover focus-visible:outline-danger",

  success:
    "border-success bg-success text-inverted hover:bg-success-hover hover:border-success-hover focus-visible:outline-success",
};

export const sizeClasses = {
  xs: "h-8 px-2.5 text-xs",
  small: "h-9 px-3 text-sm",
  medium: "h-11 px-4 text-sm",
  large: "h-12 px-6 text-base",
  xl: "h-14 px-8 text-lg",
};

export const widthClasses = {
  auto: "w-auto",
  full: "w-full",
};

export const shapeClasses = {
  default: "rounded-lg",
  pill: "rounded-full",
  square: "rounded-none",
  soft: "rounded-xl",
};