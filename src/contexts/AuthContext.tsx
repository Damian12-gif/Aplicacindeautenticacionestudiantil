import React, { createContext, useContext, useState, useEffect } from 'react';
import { Student, authenticateStudent } from '../data/mockStudents';

interface AuthContextType {
  student: Student | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [student, setStudent] = useState<Student | null>(null);

  // Verificar si hay una sesión guardada al cargar
  useEffect(() => {
    const savedStudent = localStorage.getItem('loggedStudent');
    if (savedStudent) {
      setStudent(JSON.parse(savedStudent));
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    const authenticatedStudent = authenticateStudent(username, password);
    if (authenticatedStudent) {
      setStudent(authenticatedStudent);
      localStorage.setItem('loggedStudent', JSON.stringify(authenticatedStudent));
      return true;
    }
    return false;
  };

  const logout = () => {
    setStudent(null);
    localStorage.removeItem('loggedStudent');
  };

  return (
    <AuthContext.Provider
      value={{
        student,
        login,
        logout,
        isAuthenticated: !!student,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
