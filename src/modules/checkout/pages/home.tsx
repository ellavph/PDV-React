import React, { useEffect, useState } from 'react';
import { Order } from '../../../shared/interfaces/Order';
import { LoaderAnimation } from '../../../assets/lottie/LottieAnimation';
import SidebarMenu from '../../../shared/components/sidebar/SideBarMenu';
import { useNavigate } from 'react-router-dom';
import { orderApiService } from '../services/fetchOrders';
import Ordertables from '../../../shared/components/table/tableOrders';

const HomePDV: React.FC = () => {
  const navigate = useNavigate(); // Obtenha a função de navegação
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false); // Estado para controlar se o usuário está autenticado ou não

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
      } else {
        try {
          const fetchedOrders = await orderApiService.fetchOrders(token);
          setOrders(fetchedOrders);
          setAuthenticated(true); // Define o estado autenticado como verdadeiro se a verificação de autenticação for bem-sucedida
        } catch (error) {
          console.error('Erro ao buscar os pedidos:', error);
          localStorage.removeItem('token');
          navigate('/login');
        } finally {
          setLoading(false);
        }
      }
    };
  
    checkAuth();
  }, [navigate]);

  // Renderiza o componente com os dados buscados da API se o estado de loading for false e o usuário estiver autenticado
  return (
    <div className="grid grid-cols-12 h-screen bg-gray-200">
      <SidebarMenu /> {/* Adicione a barra lateral aqui */}
      <div className="col-start-1 col-span-12 md:col-start-2 md:col-span-11 flex justify-center items-center py-4 px-4 w-full">
        {loading || !authenticated ? ( // Verifica se o usuário está autenticado antes de renderizar a página
          <div className="text-center">
            <LoaderAnimation />
            <p className="text-gray-600 mt-2">Carregando...</p>
          </div>
        ) : (
          <div className="w-full max-w-screen-2xl mx-auto">
            <Ordertables orders={orders} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePDV;
