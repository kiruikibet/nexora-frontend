import EmptyState from "../../components/common/EmptyState";

function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <EmptyState
        title="About Nexora"
        description="Use this route for the marketplace story, mission, and team overview."
        buttonText="Read More"
        onButtonClick={() => {}}
        icon={<InfoIcon />}
      />
    </main>
  );
}

function InfoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8h.01" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

export default AboutPage;
