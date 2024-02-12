// ProtectedRoute.tsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './auth';

interface ProtectedRouteProps {
  path: string;
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ path, element }) => {
  const isAuth = isAuthenticated(); // Verifique se o usuário está autenticado

  return isAuth ? (
    <Route path={path} element={element} /> // Renderize a rota se o usuário estiver autenticado
  ) : (
    <Navigate to="/login" replace /> // Redirecione para a página de login se o usuário não estiver autenticado
  );
};

export default ProtectedRoute;
