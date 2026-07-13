/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { login, register, getProfile } from "../services/authService";
import {
  saveTokens,
  removeTokens,
  getAccessToken,
} from "../utils/tokenStorage";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
   * Initialize authentication when the app loads
   */
  useEffect(() => {
    let isMounted = true;
    async function initializeAuth() {
      try {
        const token = getAccessToken();

        if (!token) {
          if (isMounted) {
            setLoading(false);
          }

          return;
        }

        const userData = await getProfile();

        if (isMounted) {
          setUser(userData);
        }
      } catch (error) {
        removeTokens();

        if (isMounted) {
          setUser(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    initializeAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  /**
   * Login
   */
  const loginUser = useCallback(async (credentials) => {
    const data = await login(credentials);

    saveTokens(data.access, data.refresh);

    setUser(data.user);

    return data;
  }, []);

  /**
   * Register
   */
  const registerUser = useCallback(async (userData) => {
    const data = await register(userData);
    await login({
      username_or_email: userData.email,
      password: userData.password,
    });

    return data;
  }, []);

  /**
   * Logout
   */
  const logout = useCallback(() => {
    removeTokens();
    setUser(null);
  }, []);

  /**
   * Update logged-in user
   * Useful after editing profile
   */
  const updateUser = useCallback((updates) => {
    setUser((current) => (current ? { ...current, ...updates } : current));
  }, []);

  /**
   * Memoize context value
   */
  const value = useMemo(
    () => ({
      user,
      loading,
      login: loginUser,
      register: registerUser,
      logout,
      updateUser,
      isAuthenticated: !!user,
    }),
    [user, loading, loginUser, registerUser, logout, updateUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
