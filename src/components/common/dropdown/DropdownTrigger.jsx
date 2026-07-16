import { cloneElement, isValidElement } from "react";
import { useDropdown } from "./DropdownContext";

function DropdownTrigger({ children }) {
  const { toggleDropdown, open } = useDropdown();

  if (!isValidElement(children)) {
    throw new Error(
      "Dropdown.Trigger expects a single React element as its child.",
    );
  }

  return cloneElement(children, {
    onClick: (event) => {
      children.props.onClick?.(event);
      toggleDropdown();
    },

    "aria-haspopup": "menu",
    "aria-expanded": open,
  });
}

export default DropdownTrigger;
