import { useEffect, useState } from "react";
import { getAds } from "../services/advertisementService";
import { advertisements as fallbackData } from "../marketing/advertisements/advertisementData";

/**
 * Fetches homepage advertisements from the API.
 *
 * Falls back to the static advertisementData.js if the request fails
 * so the section always renders something, even when the API is down.
 *
 * @returns {{ data: object, loading: boolean, error: Error|null }}
 */
function useAdvertisements() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetch() {
      try {
        const result = await getAds();
        if (!cancelled) setData(result);
      } catch (err) {
        if (!cancelled) {
          setError(err);
          // Graceful fallback — show static placeholder data
          setData(fallbackData);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetch();
    return () => { cancelled = true; };
  }, []);

  return { data, loading, error };
}

export default useAdvertisements;
