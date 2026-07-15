import logoMark from "../../assets/images/logo.svg";

function Logo({ className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 md:gap-3 ${className}`.trim()}
    >
      <img
        src={logoMark}
        alt="Nexora Logo"
        className="h-9 w-9 md:h-11 md:w-11 shrink-0"
      />

      <span className="leading-none">
        <span className="block text-base md:text-lg font-semibold tracking-tight text-slate-950">
          Nexora
        </span>

        <span className="block text-[0.55rem] md:text-[0.68rem] uppercase tracking-[0.2em] md:tracking-[0.28em] text-slate-500">
          Marketplace
        </span>
      </span>
    </span>
  );
}

export default Logo;
