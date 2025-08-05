import React from 'react';
import { Link } from 'react-router-dom';
import SidebarMenu from '../../../shared/components/sidebar/SideBarMenu';

const NotFoundPage: React.FC = () => {
  return (
    <div className="grid grid-cols-12 h-screen">
      <SidebarMenu /> {/* Adicione a barra lateral aqui */}
      <div className="col-span-11 py-4">
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">404 - Página não encontrada</h1>
            <p className="text-gray-600">A página que você está procurando não foi encontrada.</p>
            <Link to="/" className="text-blue-500 hover:underline">Voltar para a página inicial</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
