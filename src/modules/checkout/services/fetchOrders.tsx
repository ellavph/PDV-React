import { ApiResponse } from '../../../shared/interfaces/ApiResponse';
import { Order } from '../../../shared/interfaces/Order';
import axiosInstance from '../../../shared/services/httpInterceptor';

let isFetching = false; // Variável para controlar se uma chamada à API está em andamento

export const orderApiService = {
  fetchOrders: async (token: string): Promise<Order[]> => {
    if (isFetching) {

      return [];
    }

    try {
      isFetching = true; // Define isFetching como true para indicar que uma nova requisição está sendo feita
      const response = await axiosInstance.get<ApiResponse<Order[]>>(process.env.REACT_APP_BACKEND_URL + 'checkout/orders', {
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
      isFetching = false; 
    }
  }
};
