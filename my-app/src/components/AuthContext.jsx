// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') setIsAuthenticated(true);
  }, []);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  };

  const signIn = (email, password) => {
    if (!validateEmail(email)) {
      setAuthError('Email must be a valid Gmail or Yahoo address');
      return false;
    }
    if (!validatePassword(password)) {
      setAuthError('Password must be at least 8 characters long, contain a number and a special character "!"');
      return false;
    }

    setAuthError('');
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    return true;
  };

  const signOut = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, authError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
