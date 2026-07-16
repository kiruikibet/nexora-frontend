import { Link } from "react-router-dom";
import { useDropdown } from "./DropdownContext";
import Icon from "../icons";

function DropdownItem({
  children,
  icon,
  to,
  onClick,
  danger = false,
  disabled = false,
  badge,
  shortcut,
  className = "",
}) {
  const { closeDropdown } = useDropdown();

  const baseClasses = [
    "flex w-full items-center gap-3 px-4 py-3 text-sm transition-colors",
    "focus:outline-none focus:bg-brand-muted",
    disabled
      ? "cursor-not-allowed opacity-50"
      : danger
        ? "text-danger hover:bg-red-50"
        : "text-slate-700 hover:bg-brand-muted",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  function handleClick(event) {
    if (disabled) {
      event.preventDefault();
      return;
    }

    onClick?.(event);

    closeDropdown();
  }

  const content = (
    <>
      {/* Left Icon */}
      {icon && (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center text-muted">
          <Icon icon={icon} size={18} strokeWidth={2} />
        </span>
      )}

      {/* Text */}
      <span className="flex-1 text-left">{children}</span>

      {/* Badge */}
      {badge && (
        <span className="rounded-pill bg-brand-muted px-2 py-0.5 text-xs font-medium text-slate-600">
          {badge}
        </span>
      )}

      {/* Shortcut */}
      {shortcut && <span className="text-xs text-subtle">{shortcut}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={handleClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={baseClasses}
      onClick={handleClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export default DropdownItem;
