import { useState } from "react";
import Button from "../common/Button";
import { inputBase, fieldLabel, fieldError } from "../../styles";

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
        <label htmlFor="identifier" className={fieldLabel}>
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
          className={inputBase}
          placeholder="name@company.com"
        />
        <p id="identifier-error" className={fieldError}>
          {errors.identifier || " "}
        </p>
      </div>

      <div>
        <label htmlFor="password" className={fieldLabel}>
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
          className={inputBase}
          placeholder="••••••••"
        />
        <p id="password-error" className={fieldError}>
          {errors.password || " "}
        </p>
      </div>

      <div className="flex items-center justify-between gap-3 text-sm">
        <a
          href="#forgot-password"
          className="font-medium text-secondary transition hover:text-body"
        >
          Forgot Password?
        </a>
        <a
          href="#register"
          className="font-medium text-secondary transition hover:text-body"
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
