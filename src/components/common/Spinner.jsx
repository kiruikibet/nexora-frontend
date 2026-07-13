const sizeClasses = {
  small: "h-4 w-4 border-2",
  medium: "h-5 w-5 border-2",
  large: "h-8 w-8 border-[3px]",
};

const colorClasses = {
  primary: "border-slate-200 border-t-slate-900",
  white: "border-white/30 border-t-white",
  neutral: "border-slate-200 border-t-slate-500",
};

function Spinner({ size = "medium", color = "primary", fullScreen = false }) {
  const spinner = (
    <span
      aria-hidden="true"
      className={`inline-block animate-spin rounded-full border-solid ${sizeClasses[size]} ${colorClasses[color]}`}
    />
  );

  if (fullScreen) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 backdrop-blur-sm"
        role="status"
        aria-live="polite"
        aria-label="Loading"
      >
        {spinner}
      </div>
    );
  }

  return (
    <span role="status" aria-live="polite" aria-label="Loading">
      {spinner}
    </span>
  );
}

export default Spinner;
