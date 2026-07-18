import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Auto-scrolling advertisement slider.
 * Cycles through slides with a fade transition and dot indicators.
 */
function AdvertisementSlider({ slides, size = "default", interval = 4000 }) {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const isHero = size === "hero";
  const isLarge = size === "large" || isHero;

  function startTimer() {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, interval);
  }

  function resetTimer() {
    clearInterval(timerRef.current);
    startTimer();
  }

  useEffect(() => {
    if (slides.length <= 1) return;
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  function goTo(index) {
    setActive(index);
    resetTimer();
  }

  const slide = slides[active];

  return (
    <article className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-900 shadow-sm">

      {/* Slide images */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          aria-hidden={i !== active}
          className={[
            "absolute inset-0 transition-opacity duration-700",
            i === active ? "opacity-100" : "opacity-0 pointer-events-none",
          ].join(" ")}
        >
          <img
            src={s.image}
            alt={s.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
        </div>
      ))}

      {/* Slide content */}
      <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4">
        <div className="space-y-1">
          {slide.description && (
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/70 sm:text-xs">
              {slide.description}
            </p>
          )}

          <h3
            className={[
              "font-semibold leading-snug text-white drop-shadow-sm",
              isHero
                ? "text-base sm:text-xl lg:text-2xl"
                : "text-sm sm:text-base lg:text-lg",
            ].join(" ")}
          >
            {slide.title}
          </h3>

          {slide.ctaLabel && (
            slide.ctaHref ? (
              <Link
                to={slide.ctaHref}
                className="mt-1 inline-flex items-center justify-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900 transition-colors hover:bg-white/90 sm:px-4 sm:py-1.5 sm:text-sm"
              >
                {slide.ctaLabel}
              </Link>
            ) : (
              <button className="mt-1 inline-flex items-center justify-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900 transition-colors hover:bg-white/90 sm:px-4 sm:py-1.5 sm:text-sm">
                {slide.ctaLabel}
              </button>
            )
          )}
        </div>

        {/* Dot indicators */}
        {slides.length > 1 && (
          <div className="mt-2 flex gap-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={[
                  "h-1 rounded-full transition-all duration-300",
                  i === active ? "w-4 bg-white" : "w-1 bg-white/40",
                ].join(" ")}
              />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default AdvertisementSlider;
