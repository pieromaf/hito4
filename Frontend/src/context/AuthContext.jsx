import { createContext, useState } from 'react';

// Crear el contexto de autenticación
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token')); // Inicia con true si hay un token
  const [token, setToken] = useState(localStorage.getItem('token')); // Almacena el token inicial

  const login = (token) => {
    // Guardar el token en localStorage y actualizar el estado
    localStorage.setItem('token', token);
    setToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Eliminar el token y actualizar el estado
    localStorage.removeItem('token');
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
