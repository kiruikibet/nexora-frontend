/**
 * API endpoint definitions.
 *
 * Every service imports its endpoints from here.
 * This provides a single source of truth for backend routes.
 */

export const API_ENDPOINTS = Object.freeze({
  AUTH: {
    REGISTER: "/accounts/register/",
    LOGIN: "/accounts/login/",
    LOGOUT: "/accounts/logout/",
    REFRESH: "/accounts/token/refresh/",
    PROFILE: "/accounts/profile/",
  },
});