import { Link } from "react-router-dom";

// Reusable visual card for a single advertisement tile.
function AdvertisementCard({ advertisement, size = "default" }) {
  if (!advertisement) {
    return null;
  }

  const isHero = size === "hero";
  const isLarge = size === "large" || isHero;

  const content = (
    <article
      className={[
        "group relative h-full min-h-0 w-full overflow-hidden rounded-2xl bg-slate-900 shadow-sm",
        isHero && "min-h-0 lg:min-h-0",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <img
        src={advertisement.image}
        alt={advertisement.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

      <div
        className={[
          "absolute inset-0 flex h-full w-full flex-col justify-end p-4 sm:p-5",
          isLarge && "lg:p-6",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="max-w-full space-y-2">
          {advertisement.description ? (
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/80 sm:text-sm">
              {advertisement.description}
            </p>
          ) : null}

          <h3
            className={[
              "text-balance font-semibold text-white drop-shadow-sm",
              isHero
                ? "text-2xl sm:text-3xl lg:text-4xl"
                : "text-lg sm:text-xl",
            ].join(" ")}
          >
            {advertisement.title}
          </h3>

          {advertisement.ctaLabel ? (
            advertisement.ctaHref ? (
              <Link
                to={advertisement.ctaHref}
                className="inline-flex w-fit items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-white/90"
              >
                {advertisement.ctaLabel}
              </Link>
            ) : (
              <button className="inline-flex w-fit items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-white/90">
                {advertisement.ctaLabel}
              </button>
            )
          ) : null}
        </div>
      </div>
    </article>
  );

  if (advertisement.ctaHref && !advertisement.ctaLabel) {
    return <Link to={advertisement.ctaHref}>{content}</Link>;
  }

  return content;
}

export default AdvertisementCard;
