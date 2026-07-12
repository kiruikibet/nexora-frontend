import axiosInstance from "../api/axios";
import { API_ENDPOINTS } from "../constants/apiEndpoints";

/**
 * Register a new user.
 *
 * @param {Object} userData
 * @returns {Promise<Object>}
 */
export const register = async (userData) => {
  const response = await axiosInstance.post(
    API_ENDPOINTS.AUTH.REGISTER,
    userData
  );

  return response.data;
};


/**
 * Login user.
 *
 * @param {Object} credentials
 * @returns {Promise<Object>}
 */
export const login = async (credentials) => {
  const response = await axiosInstance.post(
    API_ENDPOINTS.AUTH.LOGIN,
    credentials
  );

  return response.data;
};


/**
 * Logout user.
 *
 * @returns {Promise<Object>}
 */
export const logout = async () => {
  const response = await axiosInstance.post(
    API_ENDPOINTS.AUTH.LOGOUT
  );

  return response.data;
};


/**
 * Get current authenticated user profile.
 *
 * @returns {Promise<Object>}
 */
export const getProfile = async () => {
  const response = await axiosInstance.get(
    API_ENDPOINTS.AUTH.PROFILE
  );

  return response.data;
};