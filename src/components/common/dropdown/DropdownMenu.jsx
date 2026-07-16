import { useDropdown } from "./DropdownContext";

function DropdownMenu({ children, className = "", width = "w-64" }) {
  const { open, align } = useDropdown();

  const alignment =
    align === "left" ? "left-0 origin-top-left" : "right-0 origin-top-right";

  return (
    <div
      role="menu"
      className={[
        "absolute z-50 mt-2 overflow-hidden",

        // Width
        width,

        // Styling
        "rounded-xl border border-slate-200",
        "bg-white shadow-xl ring-1 ring-black/5",

        // Animation
        "transition-all duration-200 ease-out",

        open
          ? "visible translate-y-0 scale-100 opacity-100"
          : "pointer-events-none invisible -translate-y-2 scale-95 opacity-0",

        // Alignment
        alignment,

        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

export default DropdownMenu;
