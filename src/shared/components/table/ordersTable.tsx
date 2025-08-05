import React, { useEffect, useState } from 'react';
import { Order } from '../../interfaces/Order';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface OrderTableProps {
  orders: Order[];
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8; // Defina o número de itens por página

  const totalPages = Math.ceil(orders.length / itemsPerPage);

  const handleEditOrder = (orderId: number) => {
    console.log(`Editar pedido com ID ${orderId}`);
  };

  const handleDeleteOrder = (orderId: number) => {
    console.log(`Excluir pedido com ID ${orderId}`);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, orders.length);
  const currentOrders = orders.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-3xl">
      <div className="overflow-x-auto relative">
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
            {currentOrders.map(order => (
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
      <div className="mt-4 flex justify-between rounded-full">
        {currentPage > 0 && (
          <button
            onClick={prevPage}
            className="py-2 px-4 rounded-md bg-gray-700 hover:bg-slate-900 text-gray-200 mr-auto"
          >
            Anterior
          </button>
        )}
        {currentPage < totalPages - 1 && (
          <button
            onClick={nextPage}
            className="py-2 px-4 rounded-md bg-gray-700 hover:bg-slate-900 transition-colors text-gray-200 ml-auto"
          >
            Próximo
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderTable;
