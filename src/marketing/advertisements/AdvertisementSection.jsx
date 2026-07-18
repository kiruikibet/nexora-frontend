import AdvertisementLayout from "./AdvertisementLayout";
import useAdvertisements from "../../hooks/useAdvertisements";

/**
 * Public entry point for pages that need the full advertisement section.
 * Fetches data from the API and falls back to static data on error.
 */
function AdvertisementSection() {
  const { data, loading } = useAdvertisements();

  // Show nothing while the first load is in flight to avoid layout shift.
  // The request is fast and static data is used as fallback, so this is brief.
  if (loading) {
    return (
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <div className="h-36 animate-pulse rounded-2xl bg-slate-200 sm:h-48 lg:h-[280px]" />
      </div>
    );
  }

  return <AdvertisementLayout advertisements={data} />;
}

export default AdvertisementSection;
