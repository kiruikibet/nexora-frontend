function DropdownHeader({ children, className = "" }) {
  return (
    <div
      className={["border-b border-slate-200 px-4 py-3", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

export default DropdownHeader;
