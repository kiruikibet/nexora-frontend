const categories = [
  { label: "All Categories", icon: "◌" },
  { label: "Electronics", icon: "⌁" },
  { label: "Phones", icon: "⌲" },
  { label: "Computers", icon: "⌘" },
  { label: "Vehicles", icon: "✦" },
  { label: "Fashion", icon: "✿" },
  { label: "Furniture", icon: "▤" },
  { label: "Property", icon: "▦" },
  { label: "Services", icon: "◎" },
  { label: "Jobs", icon: "↗" },
  { label: "Agriculture", icon: "❋" },
  { label: "Books", icon: "☰" },
  { label: "Sports", icon: "◔" },
  { label: "More", icon: "⋯" },
];

function CategoryMenu({ onSelect }) {
  return (
    <nav
      aria-label="Marketplace categories"
      className="border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <button
              key={category.label}
              type="button"
              onClick={() => onSelect?.(category.label)}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-white hover:text-slate-950"
            >
              <span
                aria-hidden="true"
                className="text-base leading-none text-slate-500"
              >
                {category.icon}
              </span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default CategoryMenu;
