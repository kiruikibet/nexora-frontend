import { useId } from "react";

function SearchBar({
  placeholder = "Search products, categories, and brands...",
  categories = ["All Categories"],
  selectedCategory = "All Categories",
  onCategoryChange,
  onSearch,
  className = "",
}) {
  const searchId = useId();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    onSearch?.({
      query: String(formData.get("search") || "").trim(),
      category: String(formData.get("category") || selectedCategory),
    });
  };

  return (
    <form
      role="search"
      aria-label="Marketplace search"
      onSubmit={handleSubmit}
      className={className}
    >
      <label htmlFor={searchId} className="sr-only">
        Search products
      </label>

      <div className="flex h-12 w-full items-stretch overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm transition focus-within:border-slate-300 focus-within:ring-2 focus-within:ring-slate-900/5">
        <label className="sr-only" htmlFor={`${searchId}-category`}>
          Category
        </label>
        <div className="hidden border-r border-slate-200 bg-slate-50 px-4 sm:flex sm:items-center">
          <select
            id={`${searchId}-category`}
            name="category"
            value={selectedCategory}
            onChange={(event) => onCategoryChange?.(event.target.value)}
            className="max-w-[180px] appearance-none border-0 bg-transparent pr-6 text-sm font-medium text-slate-700 outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-3 px-4">
          <SearchIcon />
          <input
            id={searchId}
            name="search"
            type="search"
            placeholder={placeholder}
            className="min-w-0 flex-1 border-0 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
          />
        </div>

        <button
          type="submit"
          aria-label="Search marketplace"
          className="inline-flex h-full items-center justify-center bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 active:bg-slate-950"
        >
          Search
        </button>
      </div>
    </form>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4 shrink-0 text-slate-500"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.3-4.3" />
      <circle cx="11" cy="11" r="6.5" />
    </svg>
  );
}

export default SearchBar;
