import axios from 'axios';
import { ApiResponse } from '../../../shared/interfaces/ApiResponse';
import { Order } from '../../../shared/interfaces/Order';

let isFetching = false; // Variável para controlar se uma chamada à API está em andamento

export const orderApiService = {
  fetchOrders: async (token: string): Promise<Order[]> => {
    // Verificar se uma chamada à API já está em andamento
    if (isFetching) {

      return [];
    }

    try {
      isFetching = true; // Define isFetching como true para indicar que uma nova requisição está sendo feita
      const response = await axios.get<ApiResponse<Order[]>>(process.env.REACT_APP_BACKEND_URL + 'checkout/orders', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 200 && response.data.success) {
        return response.data.data;
      } else {
        throw new Error('Erro ao buscar pedidos');
      }
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error);
      throw error;
    } finally {
      isFetching = false; // Define isFetching como false após a conclusão da requisição
    }
  }
};
