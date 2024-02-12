// genericTableService.ts

import { useTable, Column } from 'react-table';

interface GenericTableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
}

const useGenericTable = <T extends object>({ columns, data }: GenericTableProps<T>) => {
  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<T>({ columns, data });

  return {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
  };
};

export default useGenericTable;
