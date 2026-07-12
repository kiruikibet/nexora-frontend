// src/context/AuthContext.jsx

import { createContext, useContext, useState, useEffect } from "react";
import {
  login as loginService,
  register as registerService,
  getProfile,
} from "../services/authService";

import {
  saveTokens,
  removeTokens,
  getAccessToken,
} from "../utils/tokenStorage";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = getAccessToken();

      if (token) {
        try {
          const userData = await getProfile();

          setUser(userData);
        } catch (error) {
          removeTokens();
        }
      }

      setLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (credentials) => {
    const data = await loginService(credentials);

    saveTokens(data.access, data.refresh);

    setUser(data.user);

    return data;
  };

  const register = async (userData) => {
    const data = await registerService(userData);

    return data;
  };

  const logout = () => {
    removeTokens();

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
