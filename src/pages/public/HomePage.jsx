import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { AdvertisementSection } from "../../marketing/advertisements";

const architectureColumns = [
  {
    title: "Presentation",
    items: ["Pages", "Layouts", "Components", "Assets", "Global styles"],
  },
  {
    title: "Routing",
    items: ["React Router", "Public routes", "Protected routes"],
  },
  {
    title: "Application",
    items: ["Global context", "Custom hooks", "Local state"],
  },
  { title: "Business", items: ["Services", "Validation", "Business rules"] },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent_35%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_100%)] text-body">
      <div className="sticky top-0 z-40">
        <Header />
      </div>

      <main>
        <div className="relative z-0 py-4">
          <AdvertisementSection />
        </div>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-caps text-muted shadow-sm">
                Nexora Marketplace
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-display text-brand-dark sm:text-5xl lg:text-6xl">
                A professional marketplace frontend built as a clean, reusable
                system.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
                This starter emphasizes modular React components, responsive
                navigation, accessible forms, and a production-ready Tailwind
                foundation for buyers and sellers.
              </p>
            </div>

            <div className="rounded-card border border-border bg-surface p-6 shadow-card-lg">
              <div className="grid gap-4 sm:grid-cols-2">
                {architectureColumns.map((column) => (
                  <div
                    key={column.title}
                    className="rounded-panel bg-surface-alt p-4"
                  >
                    <h2 className="text-sm font-semibold uppercase tracking-caps text-muted">
                      {column.title}
                    </h2>
                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {column.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-brand" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
