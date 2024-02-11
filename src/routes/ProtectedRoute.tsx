import React from 'react';
import { Route, Navigate } from 'react-router-dom'; // Corrigido o import
import { isAuthenticated } from '../modules/authentication/services/auth';

const ProtectedRoute: React.FC<{ path: string; element: React.ReactNode }> = ({ path, element }) => {
  return isAuthenticated() ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
