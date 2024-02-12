

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import LoginForm from './modules/authentication/components/LoginForm';
import HomePDV from './modules/checkout/pages/home';

import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;