import { createContext, useContext, useState } from 'react';

// Create context
const AuthContext = createContext();

// Custom hook
export const useAuth = () => useContext(AuthContext);

// Provider
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
  );

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
