import { useState } from "react";
import Button from "../common/button";

function LoginForm({ onSubmit }) {
  const [formData, setFormData] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!formData.identifier.trim()) {
      nextErrors.identifier = "Enter your email or username.";
    }

    if (!formData.password.trim()) {
      nextErrors.password = "Enter your password.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0 || loading) {
      return;
    }

    setLoading(true);

    try {
      await onSubmit?.(formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div>
        <label
          htmlFor="identifier"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Email or Username
        </label>
        <input
          id="identifier"
          name="identifier"
          type="text"
          autoComplete="username"
          value={formData.identifier}
          onChange={handleChange}
          aria-invalid={Boolean(errors.identifier)}
          aria-describedby={errors.identifier ? "identifier-error" : undefined}
          className="h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
          placeholder="name@company.com"
        />
        <p id="identifier-error" className="mt-1 min-h-5 text-sm text-rose-600">
          {errors.identifier || " "}
        </p>
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
          className="h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
          placeholder="••••••••"
        />
        <p id="password-error" className="mt-1 min-h-5 text-sm text-rose-600">
          {errors.password || " "}
        </p>
      </div>

      <div className="flex items-center justify-between gap-3 text-sm">
        <a
          href="#forgot-password"
          className="font-medium text-slate-700 transition hover:text-slate-900"
        >
          Forgot Password?
        </a>
        <a
          href="#register"
          className="font-medium text-slate-700 transition hover:text-slate-900"
        >
          Create Account
        </a>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="large"
        fullWidth
        loading={loading}
      >
        Sign In
      </Button>
    </form>
  );
}

export default LoginForm;
