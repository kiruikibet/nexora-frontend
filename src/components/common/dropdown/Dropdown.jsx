import { DropdownProvider, useDropdown } from "./DropdownContext";

function DropdownContainer({ children }) {
  const { dropdownRef, openDropdown, closeDropdown } = useDropdown();

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      {children}
    </div>
  );
}

function Dropdown({ children, align = "right" }) {
  return (
    <DropdownProvider align={align}>
      <DropdownContainer>{children}</DropdownContainer>
    </DropdownProvider>
  );
}

export default Dropdown;
