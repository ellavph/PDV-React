import React, { useEffect, useState } from 'react';
import { Order } from '../../../shared/interfaces/Order';
import { LoaderAnimation } from '../../../assets/lottie/LottieAnimation';
import SidebarMenu from '../../../shared/components/sidebar/SideBarMenu';
import { useNavigate } from 'react-router-dom';
import { orderApiService } from '../services/fetchOrders';
import Ordertables from '../../../shared/components/table/tableOrders';
import CardInfo from '../../../shared/components/cards/card';

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
<div className="w-full max-w-screen-2xl mx-auto mt-4 md:mt-8 lg:mt-12"> {/* Adiciona margem ao contêiner */}
  <div className="flex flex-wrap justify-center">
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
      <div className="border border-gray-300 shadow-md rounded-lg"> {/* Adiciona uma borda e uma sombra ao card */}
        <CardInfo
          title="Titulo do card"
        />
      </div>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
      <div className="border border-gray-300 shadow-md rounded-lg"> {/* Adiciona uma borda e uma sombra ao card */}
        <CardInfo
          title="Título do Card"

        />
      </div>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
      <div className="border border-gray-300 shadow-md rounded-lg"> {/* Adiciona uma borda e uma sombra ao card */}
        <CardInfo
          title="Quantidade de pedidos"
        />
      </div>
    </div>
  </div>
  <Ordertables orders={orders} />
</div>
        )}
      </div>
    </div>
  );
  

  
};

export default HomePDV;
