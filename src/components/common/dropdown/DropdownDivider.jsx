function DropdownDivider({ className = "" }) {
  return (
    <hr className={["border-slate-200", className].filter(Boolean).join(" ")} />
  );
}

export default DropdownDivider;
