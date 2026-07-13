import EmptyState from "../../components/common/EmptyState";

function ProductsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <EmptyState
        title="Products"
        description="Product listings, cards, and marketplace filters can live in this route.
"
        buttonText="Browse Products"
        onButtonClick={() => {}}
        icon={<BagIcon />}
      />
    </main>
  );
}

function BagIcon() {
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
        d="M6 7h12l1 14H5L6 7z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 7a3 3 0 0 1 6 0"
      />
    </svg>
  );
}

export default ProductsPage;
