
import React from 'react';
import { PendingOrdersTableProps } from '../../../shared/interfaces/PendingOrdersTable';

const PendingOrdersTable: React.FC<PendingOrdersTableProps> = ({ orders }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <h2 className="text-lg font-semibold">Pedidos Pendentes</h2>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="text-left">Pedido</th>
            <th className="text-left">Cliente</th>
            <th className="text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.client}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PendingOrdersTable;