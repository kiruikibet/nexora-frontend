import { useState } from "react";
import Button from "../common/Button";

function RegisterForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "buyer",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!formData.username.trim()) nextErrors.username = "Choose a username.";
    if (!formData.firstName.trim())
      nextErrors.firstName = "Enter your first name.";
    if (!formData.lastName.trim())
      nextErrors.lastName = "Enter your last name.";
    if (!formData.email.trim()) nextErrors.email = "Enter your email address.";
    if (!formData.password.trim()) nextErrors.password = "Create a password.";
    if (formData.password !== formData.confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match.";
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

  const fieldClassName =
    "h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10";

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Username" id="username" error={errors.username}>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            value={formData.username}
            onChange={handleChange}
            aria-invalid={Boolean(errors.username)}
            aria-describedby={errors.username ? "username-error" : undefined}
            className={fieldClassName}
            placeholder="jane_doe"
          />
        </Field>

        <Field label="First Name" id="firstName" error={errors.firstName}>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            value={formData.firstName}
            onChange={handleChange}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            className={fieldClassName}
            placeholder="Jane"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Last Name" id="lastName" error={errors.lastName}>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            value={formData.lastName}
            onChange={handleChange}
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            className={fieldClassName}
            placeholder="Doe"
          />
        </Field>

        <Field label="Email" id="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClassName}
            placeholder="jane@example.com"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Password" id="password" error={errors.password}>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? "password-error" : undefined}
            className={fieldClassName}
            placeholder="••••••••"
          />
        </Field>

        <Field
          label="Confirm Password"
          id="confirmPassword"
          error={errors.confirmPassword}
        >
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            value={formData.confirmPassword}
            onChange={handleChange}
            aria-invalid={Boolean(errors.confirmPassword)}
            aria-describedby={
              errors.confirmPassword ? "confirmPassword-error" : undefined
            }
            className={fieldClassName}
            placeholder="••••••••"
          />
        </Field>
      </div>

      <Field label="Account Type" id="accountType">
        <select
          id="accountType"
          name="accountType"
          value={formData.accountType}
          onChange={handleChange}
          className={fieldClassName}
        >
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
      </Field>

      <div className="text-sm">
        <a
          href="#login"
          className="font-medium text-slate-700 transition hover:text-slate-900"
        >
          Already have an account? Sign In
        </a>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="large"
        fullWidth
        loading={loading}
      >
        Create Account
      </Button>
    </form>
  );
}

function Field({ label, id, error, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        {label}
      </label>
      {children}
      <p id={`${id}-error`} className="mt-1 min-h-5 text-sm text-rose-600">
        {error || " "}
      </p>
    </div>
  );
}

export default RegisterForm;
