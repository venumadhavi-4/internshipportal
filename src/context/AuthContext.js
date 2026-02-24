import React, { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    const saved = localStorage.getItem('authState');
    return saved ? JSON.parse(saved) : { token: '', role: '', email: '' };
  });

  const login = (payload) => {
    const next = { token: 'mock-jwt-token', ...payload };
    localStorage.setItem('authState', JSON.stringify(next));
    setAuth(next);
  };

  const logout = () => {
    localStorage.removeItem('authState');
    setAuth({ token: '', role: '', email: '' });
  };

  const value = useMemo(() => ({ auth, login, logout }), [auth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
