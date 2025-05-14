// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');

  // Only access localStorage in useEffect to avoid React render errors
  useEffect(() => {
    try {
      const storedAuth = localStorage.getItem('isAuthenticated');
      if (storedAuth === 'true') {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }, []);

  // Validate email to only allow Gmail or Yahoo
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
    return regex.test(email);
  };

  // Validate password to ensure strength
  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  };

  // Handle sign-in with validation
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

  // Handle sign-out
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

// Hook to access auth context
export const useAuth = () => useContext(AuthContext);
