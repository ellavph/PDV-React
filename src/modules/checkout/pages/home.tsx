import React, { useEffect, useState } from 'react';
import { Order } from '../../../shared/interfaces/Order';
import { LoaderAnimation } from '../../../assets/lottie/LottieAnimation';
import SidebarMenu from '../../../shared/components/sidebar/SideBarMenu';
import { useNavigate } from 'react-router-dom';
import { orderApiService } from '../services/fetchOrders';
import OrderTable from '../../../shared/components/table/ordersTable';

const HomePDV: React.FC = () => {
  const navigate = useNavigate(); // Obtenha a função de navegação
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
      } else {
        try {
          const fetchedOrders = await orderApiService.fetchOrders(token);
          setOrders(fetchedOrders);
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

  // Renderiza o componente com os dados buscados da API se o estado de loading for false, caso contrário, exibe o componente de animação de carregamento
  return (
    <div className="grid grid-cols-12 h-screen">
      <SidebarMenu /> {/* Adicione a barra lateral aqui */}
      <div className="col-span-11 py-4">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <LoaderAnimation /> {/* Renderize o componente de animação de carregamento */}
              <p className="text-gray-600 mt-2">Carregando...</p>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold mb-4">Lista de Pedidos</h1>
            <OrderTable orders={orders} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePDV;
