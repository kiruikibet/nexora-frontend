import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent_35%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_100%)] text-slate-900">
      <Navbar />

      <main>
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-600 shadow-sm">
                Nexora Marketplace
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                A professional marketplace frontend built as a clean, reusable
                system.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                This starter emphasizes modular React components, responsive
                navigation, accessible forms, and a production-ready Tailwind
                foundation for buyers and sellers.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="grid gap-4 sm:grid-cols-2">
                {architectureColumns.map((column) => (
                  <div
                    key={column.title}
                    className="rounded-2xl bg-slate-50 p-4"
                  >
                    <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {column.title}
                    </h2>
                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {column.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-slate-900" />
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
