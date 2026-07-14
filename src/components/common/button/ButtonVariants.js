export const buttonBase =
  "relative inline-flex items-center justify-center rounded-lg border font-medium transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

/**
 * Button Variants
 *
 * Primary   → Main call-to-action
 * Secondary → Alternative action
 * Outline   → Low emphasis
 * Ghost     → Minimal action
 * Danger    → Destructive action
 * Success   → Positive action
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

  danger:
    "border-rose-600 bg-rose-600 text-white hover:bg-rose-700 hover:border-rose-700 focus-visible:outline-rose-600",

  success:
    "border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700 hover:border-emerald-700 focus-visible:outline-emerald-600",
};

export const sizeClasses = {
  small: "h-9 px-3 text-sm",
  medium: "h-11 px-4 text-sm",
  large: "h-12 px-6 text-base",
};

export const widthClasses = {
  auto: "w-auto",
  full: "w-full",
};