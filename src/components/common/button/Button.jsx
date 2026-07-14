import Spinner from "../Spinner";
import {
  buttonBase,
  sizeClasses,
  variantClasses,
  widthClasses,
} from "./ButtonVariants";

function Button({
  children,
  variant = "primary",
  size = "medium",
  width,
  type = "button",
  loading = false,
  disabled = false,
  fullWidth = false,
  onClick,
  className = "",
  ...props
}) {
  const resolvedWidth = width ?? (fullWidth ? "full" : "auto");
  const isDisabled = disabled || loading;
  const spinnerColor = variant === "primary" ? "white" : "neutral";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading || undefined}
      {...props}
      className={[
        buttonBase,
        variantClasses[variant] || variantClasses.primary,
        sizeClasses[size] || sizeClasses.medium,
        widthClasses[resolvedWidth] || widthClasses.auto,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className={loading ? "invisible inline-flex items-center" : undefined}
      >
        {children}
      </span>
      {loading ? (
        <span
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <Spinner size="small" color={spinnerColor} />
        </span>
      ) : null}
    </button>
  );
}

export default Button;
