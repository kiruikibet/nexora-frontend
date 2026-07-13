import EmptyState from "../../components/common/EmptyState";

function SellerDashboardPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <EmptyState
        title="Seller dashboard"
        description="A flexible seller workspace for inventory, product management, and fulfillment tasks."
        buttonText="Add Product"
        onButtonClick={() => {}}
        icon={<StoreIcon />}
      />
    </main>
  );
}

function StoreIcon() {
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
        d="M3 9h18l-1.5-4.5h-15z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 9v10h14V9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-5h6v5" />
    </svg>
  );
}

export default SellerDashboardPage;
