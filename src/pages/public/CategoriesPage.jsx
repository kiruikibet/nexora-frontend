import EmptyState from "../../components/common/EmptyState";

function CategoriesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <EmptyState
        title="Categories"
        description="Browse the category index, feature filters, and curated marketplace groupings here."
        buttonText="Explore Categories"
        onButtonClick={() => {}}
        icon={<GridIcon />}
      />
    </main>
  );
}

function GridIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"
      />
    </svg>
  );
}

export default CategoriesPage;
