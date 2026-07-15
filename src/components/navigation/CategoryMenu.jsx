import Button from "../common/Button";

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
      <div className="mx-auto max-w-7xl px-3 py-1  sm:px-6 sm:py-3 lg:px-8">
        <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <Button
              key={category.label}
              type="button"
              onClick={() => onSelect?.(category.label)}
              variant="outline"
              shape="pill"
              size="xs"
              className="
                shrink-0
                bg-slate-50
                text-slate-700
                hover:bg-white
                hover:border-slate-300
                hover:text-slate-950
                px-3
                py-1
                text-xs
                md:px-4
                md:py-2
                md:text-sm
              "
            >
              <span
                aria-hidden="true"
                className="text-xs leading-none text-slate-500 md:text-sm"
              >
                {category.icon}
              </span>

              <span className="whitespace-nowrap">{category.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default CategoryMenu;
