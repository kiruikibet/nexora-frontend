import { createContext, useContext, useEffect, useRef, useState } from "react";

const DropdownContext = createContext(null);

export function DropdownProvider({ children, align = "right" }) {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const openDropdown = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const closeDropdown = () => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 120);
  };

  const toggleDropdown = () => {
    clearTimeout(timeoutRef.current);
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      document.removeEventListener("keydown", handleEscape);

      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <DropdownContext.Provider
      value={{
        open,
        align,
        dropdownRef,
        openDropdown,
        closeDropdown,
        toggleDropdown,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
}

export function useDropdown() {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error("useDropdown must be used inside DropdownProvider.");
  }

  return context;
}
