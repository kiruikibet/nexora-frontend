export const searchBarSizes = {
  small: {
    container: "h-10",
    input: "px-3 text-sm",
    icon: "h-4 w-4",
    button: "small",
    buttonPadding: "px-4",
  },

  medium: {
    container: "h-12",
    input: "px-4 text-sm md:text-base",
    icon: "h-5 w-5",
    button: "medium",
    buttonPadding: "px-5",
  },

  large: {
    container: "h-14",
    input: "px-5 text-base",
    icon: "h-6 w-6",
    button: "large",
    buttonPadding: "px-6",
  },
};

export const searchBarBase =
  "flex w-full overflow-hidden rounded-pill border border-border bg-surface shadow-card transition-all duration-200 focus-within:border-border-strong focus-within:ring-2 focus-within:ring-brand/5";