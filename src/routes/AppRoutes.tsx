// AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePDV from '../modules/checkout/pages/home';
import LoginForm from '../modules/authentication/components/LoginForm';
import NotFoundPage from '../shared/components/notfound/NotFoundPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePDV />} />
      {/* Rotas publicas abaixo */}
      <Route path="/login" element={<LoginForm />} /> 
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
