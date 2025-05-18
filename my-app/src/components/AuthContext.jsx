// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [user, setUser] = useState(null);

  // On mount, load user and auth state from localStorage
  useEffect(() => {
    try {
      const storedAuth = localStorage.getItem('isAuthenticated');
      const storedUser = localStorage.getItem('healthhub-user');

      if (storedAuth === 'true' && storedUser) {
        setIsAuthenticated(true);
        setUser(JSON.parse(storedUser));
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

  // Handle sign-in with validation and mock user setup
  const signIn = (email, password) => {
    if (!validateEmail(email)) {
      setAuthError('Email must be a valid Gmail or Yahoo address');
      return false;
    }
    if (!validatePassword(password)) {
      setAuthError('Password must be at least 8 characters long, contain a number and a special character "!"');
      return false;
    }

    const mockUser = {
      id: 'user-' + Math.floor(Math.random() * 10000),
      name: email.split('@')[0],
      email,
      healthProfile: email === 'demo@healthhub.com' ? {
        age: 35,
        gender: 'Male',
        height: 175,
        weight: 70,
        bmi: 22.9,
        bloodType: 'A+',
        genotype: 'AA',
        oxygenLevel: 98,
        conditions: ['Mild Hypertension', 'Seasonal Allergies']
      } : undefined
    };

    setUser(mockUser);
    setIsAuthenticated(true);
    setAuthError('');
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('healthhub-user', JSON.stringify(mockUser));
    return true;
  };

  // Handle sign-out
  const signOut = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('healthhub-user');
  };

  // Update health profile data
  const updateHealthProfile = (healthProfile) => {
    if (user) {
      const updatedUser = { ...user, healthProfile };
      setUser(updatedUser);
      localStorage.setItem('healthhub-user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signIn,
        signOut,
        authError,
        user,
        updateHealthProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook to access auth context
export const useAuth = () => useContext(AuthContext);
