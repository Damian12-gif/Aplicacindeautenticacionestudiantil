import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LoginForm } from './components/LoginForm';
import { Layout } from './components/Layout';
import { StudentProfile } from './components/StudentProfile';
import { AcademicHistory } from './components/AcademicHistory';

function AppContent() {
  const { isAuthenticated } = useAuth();
  const [currentView, setCurrentView] = useState<'perfil' | 'historial'>('perfil');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === '/perfil' || hash === '/historial') {
        setCurrentView(hash.slice(1) as 'perfil' | 'historial');
      }
    };

    // Establecer vista inicial
    handleHashChange();

    // Escuchar cambios en el hash
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Si no está autenticado, mostrar formulario de login
  if (!isAuthenticated) {
    return <LoginForm />;
  }

  // Si está autenticado, mostrar la aplicación
  return (
    <Layout>
      {currentView === 'perfil' ? <StudentProfile /> : <AcademicHistory />}
    </Layout>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
