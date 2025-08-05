import React, { useState } from 'react';
import { columns } from './columns';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuCheckboxItem } from '@radix-ui/react-dropdown-menu';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Order } from '../../interfaces/Order';
import { FaPlusCircle } from 'react-icons/fa';

import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { ModalPedido } from '../modal/productModal'


import { LoaderAnimation } from '../../../assets/lottie/LottieAnimation';


interface OrderTableProps {
  orders: Order[];
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {

  const [ModalAberta, setModalAberta] = useState(false);

  const abrirModalPedido = () => {
    setModalAberta(true);
  };

  const fecharModalPedido = () => {
    setModalAberta(false);
  };

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: orders,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });


  return (
    <div className='p-6 max-w-8xl mx-auto bg-zinc-100 rounded-lg'>
      <div className='border bg-zinc-200 rounded-lg'>
        <div className="w-full">
          <div className="flex justify-between items-center py-4">
            <Input
              placeholder="Busque pelo número"
              value={(table.getColumn("id")?.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                table.getColumn("id")?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />

          <div className="w-full flex justify-end items-center mt-4 md:mt-0 md:mr-4 space-x-2">
                <div className="hidden sm:flex flex-grow justify-end pr-4">
                  <Button size="lg" onClick={abrirModalPedido}>
                    <FaPlusCircle className='w-4 h-4 mr-2' />
                    <span className="hidden md:inline-block">Criar Pedido</span>
                  </Button>
                </div>
                <ModalPedido open={ModalAberta} onClose={fecharModalPedido} />
                <div className="sm:hidden flex-grow justify-end pr-4">
                  <Button size="sm" onClick={abrirModalPedido}>
                    <FaPlusCircle className='w-4 h-4 mr-2' />
                  </Button>
                </div>
              </div>

            <DropdownMenu>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      )
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row, index) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" 
                    >
                      {row.getVisibleCells().map((cell, cellIndex) => (
                        <TableCell
                          key={cell.id}
                          className={`border border-gray-300 py-2 pl-4 pr-4 ${cellIndex === 0 ? "border-l-0" : ""}`}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      <LoaderAnimation/>
                    </TableCell>
                  </TableRow>
                )}
            </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">

            <div className="space-x-2  mx-auto">
              <Button
                variant="default"
                size="default"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Anterior
              </Button>
              <Button
                variant="default"
                size="default"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Próximo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;