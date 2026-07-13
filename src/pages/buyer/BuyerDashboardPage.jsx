import EmptyState from "../../components/common/EmptyState";

function BuyerDashboardPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <EmptyState
        title="Buyer dashboard"
        description="This is a reusable dashboard shell ready for products, orders, messages, and notifications."
        buttonText="Browse Products"
        onButtonClick={() => {}}
        icon={<DashboardIcon />}
      />
    </main>
  );
}

function DashboardIcon() {
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
        d="M4 5h7v7H4zM13 5h7v4h-7zM13 11h7v8h-7zM4 14h7v5H4z"
      />
    </svg>
  );
}

export default BuyerDashboardPage;
