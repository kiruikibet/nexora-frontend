import { Link } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";
import { ROUTES } from "../../constants/routes";

function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <section className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl shadow-slate-950/10 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            Welcome back
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            Sign in to continue buying and selling.
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300">
            Manage orders, track conversations, and keep your storefront moving
            from one central account.
          </p>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
            A polished login surface with loading protection, validation
            placeholders, and responsive spacing.
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Sign In
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Use your email or username to access your marketplace account.
          </p>
          <div className="mt-8">
            <LoginForm />
          </div>
          <p className="mt-6 text-sm text-slate-600">
            New here?{" "}
            <Link
              to={ROUTES.AUTH.REGISTER}
              className="font-medium text-slate-950 hover:underline"
            >
              Create an account
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
