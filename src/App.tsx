import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './modules/authentication/components/LoginForm';
import Home from './modules/checkout/pages/home';

const App: React.FC = () => {

  return (
    <Router>
      <div className="App bg-white">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          {/* Adicione outras rotas conforme necessário */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
