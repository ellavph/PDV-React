import { Order } from "../../interfaces/Order";
import { ColumnDef } from "@tanstack/react-table";
import { FaEdit, FaTrash } from 'react-icons/fa';

const handleEditOrder = (orderId: number) => {
    console.log(`Editar pedido com ID ${orderId}`);
  };

  const handleDeleteOrder = (orderId: number) => {
    console.log(`Excluir pedido com ID ${orderId}`);
  };


export const columns: ColumnDef<Order>[] = [
    { accessorKey: "id", header: "ID", },
    { accessorKey: "createdAt", header: "Hora", },
    { accessorKey: "customer", header: "Cliente", },
    { accessorKey: "status", header: "Status", },
    {
      id: "actions",
      enableSorting: false,
      enableHiding: false,
      cell: ({ row }) => (
        <div className='text-center'>
          <button onClick={() => handleEditOrder(row.original.id)} className='text-gray-500 focus:outline-none mr-2 hover:text-gray-600'>
            <FaEdit className='w-4 h-4' />
          </button>
          <button onClick={() => handleDeleteOrder(row.original.id)} className='text-gray-500 focus:outline-none hover:text-gray-600'>
            <FaTrash className='w-4 h-4' />
          </button>
        </div>
      ),
    },
  ];