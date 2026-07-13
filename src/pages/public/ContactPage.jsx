import EmptyState from "../../components/common/EmptyState";

function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <EmptyState
        title="Contact"
        description="Add support channels, contact details, and a lead form on this page."
        buttonText="Get in Touch"
        onButtonClick={() => {}}
        icon={<MailIcon />}
      />
    </main>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default ContactPage;
