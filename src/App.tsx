

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../src/styles/globals.css'

import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;