import { Order } from "../../interfaces/Order";
import { ColumnDef } from "@tanstack/react-table";
import { FaEdit, FaTrash } from 'react-icons/fa';
import DateTimeFormatter from "../../../utils/convertData";

const handleEditOrder = (orderId: number) => {
    console.log(`Editar pedido com ID ${orderId}`);
  };

  const handleDeleteOrder = (orderId: number) => {
    console.log(`Excluir pedido com ID ${orderId}`);
  };


  export const columns: ColumnDef<Order>[] = [
    { 
      accessorKey: "id", 
      header: () => <div className="text-gray-800 font-bold text-center">Pedido</div>, 
      cell: ({ row }) => <div className="text-center">{row?.id}</div>
    },
    { 
      accessorKey: "createdAt", 
      header: () => <div className="text-gray-800 font-bold text-center">Data Solicitação</div>, 
      cell: ({ row }) => <div className="text-center"><DateTimeFormatter isoDateTime={String(row?.original?.createdAt)} /></div>
    },
    
    { 
      accessorKey: "customer", 
      header: () => <div className="text-gray-800 font-bold text-center">Cliente</div>, 
      cell: ({ row }) => <div className="text-center">José</div>
    },
    { 
      accessorKey: "status", 
      header: () => <div className="text-gray-800 font-bold text-center">Status</div>, 
      cell: ({ row }) => <div className="text-center">Pago</div>
    },
    { 
      accessorKey: "value", 
      header: () => <div className="text-gray-800 font-bold text-center">Valor</div>, 
      cell: ({ row }) => <div className="text-center">R$ 24.98</div>
    },
    {
      id: "actions",
      header: () => (
        <div className="flex items-center justify-center">
          <div className="text-gray-800 font-bold">Ações</div>
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
      cell: ({ row }) => (
        <div className='text-center'>
          <button onClick={() => handleEditOrder(row?.original?.id)} className='text-gray-500 focus:outline-none mr-2 hover:text-gray-600'>
            <FaEdit className='w-4 h-4' />
          </button>
          <button onClick={() => handleDeleteOrder(row?.original?.id)} className='text-gray-500 focus:outline-none hover:text-gray-600'>
            <FaTrash className='w-4 h-4' />
          </button>
        </div>
      ),
    },
  ];
  