/**
 * Frontend application routes.
 *
 * These are the routes used by React Router.
 * Using constants prevents hardcoding paths throughout the application.
 */

export const ROUTES = Object.freeze({
  HOME: "/",

  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
  },

  BUYER: {
    DASHBOARD: "/buyer/dashboard",
    PROFILE: "/buyer/profile",
  },

  SELLER: {
    DASHBOARD: "/seller/dashboard",
    PROFILE: "/seller/profile",
  },

  ERRORS: {
    NOT_FOUND: "/404",
    FORBIDDEN: "/403",
  },
});