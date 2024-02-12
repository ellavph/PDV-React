// Arquivo: OrderTable.tsx

import React from 'react';
import { Order } from '../../interfaces/Order';

interface OrderTableProps {
  orders: Order[];
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-gray-600 to-gray-700 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Data de Criação</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Data de Atualização</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">ID do Checkout</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">ID do Pedido</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map(order => (
            <tr key={order.id} className="transition-transform duration-300 ease-in-out transform hover:scale-105">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-l-4 border-transparent">
                <span className="border-l-4 border-transparent pl-4">{order.id}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.createdAt}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.updatedAt}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.checkoutId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.orderId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
