import { STORAGE_KEYS } from "../constants/storageKeys";

/**
 * Save JWT tokens to browser storage.
 *
 * @param {string} accessToken - Short-lived access token.
 * @param {string} refreshToken - Long-lived refresh token.
 */
export const saveTokens = (accessToken, refreshToken) => {
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
  localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
};

/**
 * Retrieve the access token.
 *
 * @returns {string | null}
 */
export const getAccessToken = () => {
  return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
};

/**
 * Retrieve the refresh token.
 *
 * @returns {string | null}
 */
export const getRefreshToken = () => {
  return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
};

/**
 * Remove all authentication tokens.
 */
export const removeTokens = () => {
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
};