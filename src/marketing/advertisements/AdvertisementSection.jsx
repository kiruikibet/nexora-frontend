import AdvertisementLayout from "./AdvertisementLayout";
import { advertisements } from "./advertisementData";

// Public entry point for pages that need the full advertisement section.
function AdvertisementSection() {
  return <AdvertisementLayout advertisements={advertisements} />;
}

export default AdvertisementSection;
