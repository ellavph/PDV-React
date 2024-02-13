import React from 'react';
import { Order } from '../../interfaces/Order';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface OrderTableProps {
  orders: Order[];
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  const handleEditOrder = (orderId: number) => {
    console.log(`Editar pedido com ID ${orderId}`);
  };

  const handleDeleteOrder = (orderId: number) => {
    console.log(`Excluir pedido com ID ${orderId}`);
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-3xl"> {/* Adicionando container */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-gray-600 to-gray-700 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border">ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border">ID do Pedido</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border">Data de Criação</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border">Data de Atualização</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border">ID do Checkout</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map(order => (
              <tr key={order.id} className="hover:bg-gray-100 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border text-center">{order.orderId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border text-center">{order.createdAt}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border text-center">{order.updatedAt}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border text-center">{order.checkoutId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border text-center">
                  <button onClick={() => handleEditOrder(order.id)} className="text-gray-500 focus:outline-none mr-2 hover:text-gray-600">
                    <FaEdit className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDeleteOrder(order.id)} className="text-gray-500 focus:outline-none hover:text-gray-600">
                    <FaTrash className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
