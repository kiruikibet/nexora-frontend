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
    "border-slate-900 bg-slate-900 text-white hover:bg-slate-800 hover:border-slate-800 focus-visible:outline-slate-900 shadow-sm",

  secondary:
    "border-slate-300 bg-slate-100 text-slate-900 hover:bg-slate-200 hover:border-slate-400 focus-visible:outline-slate-900",

  outline:
    "border-slate-300 bg-white text-slate-900 hover:bg-slate-50 hover:border-slate-400 focus-visible:outline-slate-900",

  ghost:
    "border-transparent bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-slate-900",

  light:
    "border-transparent bg-slate-100 text-slate-800 hover:bg-slate-200 focus-visible:outline-slate-900",

  dark:
    "border-slate-950 bg-slate-950 text-white hover:bg-black hover:border-black focus-visible:outline-slate-950",

  link:
    "border-transparent bg-transparent text-slate-700 underline-offset-4 hover:underline hover:text-slate-950 shadow-none",

  danger:
    "border-rose-600 bg-rose-600 text-white hover:bg-rose-700 hover:border-rose-700 focus-visible:outline-rose-600",

  success:
    "border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700 hover:border-emerald-700 focus-visible:outline-emerald-600",
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