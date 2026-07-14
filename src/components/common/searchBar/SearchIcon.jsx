function SearchIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="m21 21-4.3-4.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default SearchIcon;
