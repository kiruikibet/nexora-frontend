import { forwardRef } from "react";

import Spinner from "../Spinner";

import {
  buttonBase,
  variantClasses,
  sizeClasses,
  widthClasses,
  shapeClasses,
} from "./ButtonVariants";

const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "medium",
    shape = "default",
    width,
    fullWidth = false,

    type = "button",

    loading = false,
    disabled = false,

    onClick,
    className = "",

    ...props
  },
  ref,
) {
  const resolvedWidth = width ?? (fullWidth ? "full" : "auto");

  const isDisabled = disabled || loading;

  const spinnerColor = ["primary", "danger", "success", "dark"].includes(
    variant,
  )
    ? "white"
    : "neutral";

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading || undefined}
      {...props}
      className={[
        buttonBase,
        variantClasses[variant] ?? variantClasses.primary,
        sizeClasses[size] ?? sizeClasses.medium,
        widthClasses[resolvedWidth] ?? widthClasses.auto,
        shapeClasses[shape] ?? shapeClasses.default,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className={[
          "inline-flex items-center gap-2 whitespace-nowrap",
          loading && "invisible",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </span>

      {loading && (
        <span
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <Spinner size="small" color={spinnerColor} />
        </span>
      )}
    </button>
  );
});

export default Button;
