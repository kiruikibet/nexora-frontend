import axiosInstance from "../api/axios";
import { API_ENDPOINTS } from "../constants/apiEndpoints";

/**
 * Fetches the homepage advertisement grid from the backend.
 *
 * Returns an object shaped as:
 * {
 *   hero:       Slide[]   — slides for the left large auto-scrolling slot
 *   freeWeek:   Slide[]   — slides for the top-right auto-scrolling slot
 *   dailyDeals: Slide     — single object for bottom-right small tile
 *   tradeZone:  Slide     — single object for bottom-right small tile
 * }
 *
 * See ADVERTISEMENTS.md for the full field reference.
 */
export async function getAds() {
  const response = await axiosInstance.get(
    API_ENDPOINTS.MARKETING.ADVERTISEMENTS_HOMEPAGE
  );
  return response.data;
}
