import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context with default value
const AuthContext = createContext();

// Custom hook for accessing the auth context
export const useAuth = () => useContext(AuthContext);

const EXPIRY_TIME = 3600000; // 1 hour in milliseconds

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedAuth = localStorage.getItem('isAuthenticated');
    const expiryTime = localStorage.getItem('expiryTime');
    if (savedAuth && expiryTime) {
      if (new Date().getTime() > JSON.parse(expiryTime)) {
        localStorage.clear();
        return false;
      }
      return JSON.parse(savedAuth);
    }
    return false;
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('expiryTime', JSON.stringify(new Date().getTime() + EXPIRY_TIME));
    } else {
      localStorage.clear();
    }
  }, [isAuthenticated, user]);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
