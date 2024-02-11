import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe Route aqui
import ProtectedRoute from './ProtectedRoute';
import LoginForm from '../modules/authentication/components/LoginForm';;
import HomePDV from '../modules/checkout/pages/home';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <ProtectedRoute path="/home" element={<HomePDV />} />
        {/* Adicione outras rotas protegidas conforme necessário */}
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
