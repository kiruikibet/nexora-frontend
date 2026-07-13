import { Link } from "react-router-dom";
import RegisterForm from "../../components/auth/RegisterForm";
import { ROUTES } from "../../constants/routes";

function RegisterPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            Get started
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
            Create your Nexora account.
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600">
            Set up a buyer or seller profile with a simple, accessible
            registration flow.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <StatCard
              title="Fast signup"
              description="Minimal friction and clear field feedback."
            />
            <StatCard
              title="Role-based"
              description="Choose a buyer or seller account type."
            />
          </div>
        </section>

        <section className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-950/10 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Register</h2>
          <p className="mt-2 text-sm text-slate-300">
            Join the marketplace and start building your profile.
          </p>
          <div className="mt-8 rounded-2xl bg-white p-5 text-slate-900 shadow-lg">
            <RegisterForm />
          </div>
          <p className="mt-6 text-sm text-slate-300">
            Already have an account?{" "}
            <Link
              to={ROUTES.AUTH.LOGIN}
              className="font-medium text-white hover:underline"
            >
              Sign In
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}

function StatCard({ title, description }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5">
      <h2 className="text-sm font-semibold text-slate-950">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

export default RegisterPage;
