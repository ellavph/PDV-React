import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiResponse } from '../../../shared/interfaces/ApiResponse';
import { Order } from '../../../shared/interfaces/Order';
import { MenuItem } from '../../../shared/interfaces/MenuItem';
import { LoaderAnimation } from '../../../assets/lottie/LottieAnimation';
import SidebarMenu from '../../../shared/components/sidebar/SideBarMenu';
import { useNavigate } from 'react-router-dom';

interface HomePDVProps {
  // Defina as propriedades necessárias
}

const HomePDV: React.FC<HomePDVProps> = () => {
  const navigate = useNavigate(); // Obtenha a função de navegação
  const [orders, setOrders] = useState<Order[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
      } else {
        try {
          const response = await axios.get<ApiResponse<Order[]>>(process.env.REACT_APP_BACKEND_URL + 'checkout/orders', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          if (response.data.success) {
            setOrders(response.data.data);
          } else {
            localStorage.removeItem('token');
            navigate('/login');
          }
        } catch (error) {
          console.error('Erro ao verificar o token:', error);
          // Adicione tratamento de erro adequado aqui
        } finally {
          setLoading(false);
        }
      }
    };
  
    checkAuth();
  }, []);

  // Renderiza o componente com os dados buscados da API se o estado de loading for false, caso contrário, exibe o componente de animação de carregamento
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-1 h-full bg-gray-700">
        <SidebarMenu /> {/* Adicione a barra lateral aqui */}
      </div>
      <div className="col-span-11 py-4">
        {loading ? (
          <LoaderAnimation /> // Renderiza o componente de animação de carregamento enquanto os dados estão sendo buscados
        ) : (
          <div>
            <h1 className="text-2xl font-bold mb-4">Lista de Pedidos</h1>
            <ul>
              {orders.map(order => (
                <li key={order.id} className="border border-gray-200 p-4 mb-2 rounded-md">
                  {/* Renderize as informações de cada pedido aqui */}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePDV;