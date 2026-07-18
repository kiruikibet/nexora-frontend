import AdvertisementCard from "./AdvertisementCard";
import AdvertisementSlider from "./AdvertisementSlider";

function AdvertisementLayout({ advertisements }) {
  if (!advertisements) return null;

  return (
    <section className="w-full">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">

        {/* ── Mobile: single full-width hero slider only ── */}
        <div className="lg:hidden">
          <div className="h-36 sm:h-48">
            <AdvertisementSlider
              slides={advertisements.hero}
              size="hero"
              interval={4000}
            />
          </div>
        </div>

        {/* ── Desktop: full 4-column grid ── */}
        <div
          className="hidden lg:grid lg:grid-cols-4 lg:gap-4"
          style={{ height: "280px" }}
        >
          {/* Hero — left large slot */}
          <div className="lg:col-span-2 h-full">
            <AdvertisementSlider
              slides={advertisements.hero}
              size="hero"
              interval={4000}
            />
          </div>

          {/* Right column */}
          <div className="lg:col-span-2 flex flex-col gap-4 h-full">
            {/* Top-right large slot */}
            <div className="flex-1">
              <AdvertisementSlider
                slides={advertisements.freeWeek}
                size="large"
                interval={5000}
              />
            </div>

            {/* Bottom-right two small tiles */}
            <div className="flex flex-1 gap-4">
              <div className="flex-1">
                <AdvertisementCard advertisement={advertisements.dailyDeals} />
              </div>
              <div className="flex-1">
                <AdvertisementCard advertisement={advertisements.tradeZone} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AdvertisementLayout;
