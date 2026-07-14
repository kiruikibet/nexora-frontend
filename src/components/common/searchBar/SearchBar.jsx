import { useEffect, useId, useState } from "react";

import Button from "../Button";
import SearchIcon from "./SearchIcon";
import { searchBarBase, searchBarSizes } from "./SearchBarVariants";

function SearchBar({
  placeholder = "Search products...",
  value = "",
  size = "medium",
  loading = false,
  className = "",
  onChange,
  onSearch,
}) {
  const searchId = useId();
  const [internalValue, setInternalValue] = useState(value);

  const styles = searchBarSizes[size] ?? searchBarSizes.medium;

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    onSearch?.(String(formData.get("search") || "").trim());
  }

  function handleChange(event) {
    const nextValue = event.target.value;

    setInternalValue(nextValue);
    onChange?.(nextValue);
  }

  return (
    <form
      role="search"
      aria-label="Marketplace Search"
      onSubmit={handleSubmit}
      className={className}
    >
      <label htmlFor={searchId} className="sr-only">
        Search Products
      </label>

      <div className={[searchBarBase, styles.container].join(" ")}>
        <div className="flex items-center pl-4">
          <SearchIcon className={`text-slate-500 ${styles.icon}`} />
        </div>

        <input
          id={searchId}
          name="search"
          type="search"
          autoComplete="off"
          value={internalValue}
          onChange={handleChange}
          placeholder={placeholder}
          className={[
            "flex-1 border-0 bg-transparent outline-none text-slate-900 placeholder:text-slate-400",
            styles.input,
          ].join(" ")}
        />

        <Button
          type="submit"
          size={styles.button}
          loading={loading}
          className={`h-full rounded-l-none rounded-r-full ${styles.buttonPadding}`}
        >
          <span className="hidden sm:inline">Search</span>

          <span className="sm:hidden">
            <SearchIcon className="h-5 w-5 text-white" />
          </span>
        </Button>
      </div>
    </form>
  );
}

export default SearchBar;
