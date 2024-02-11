// components/HomePDV/HomePDV.tsx

import React from 'react';
import InfoCard from '../../../shared/components/infocard/InfoCard';;
import PendingOrdersTable from './PendingOrderTable';
import SidebarMenu from '../../../shared/components/sidebar/SideBarMenu';
import CreateButtons from '../../../shared/components/buttons/createButtons';
import { HomePDVProps } from '../../../shared/interfaces/Home';

const HomePDV: React.FC<HomePDVProps> = ({ orders, menuItems, onCreateOrder, onCreateProduct }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="w-full md:w-1/2 lg:w-1/4">
        <InfoCard title="Total de Pedidos" value={orders.length} />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4">
        <PendingOrdersTable orders={orders} />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4">
        <SidebarMenu />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4">
        <CreateButtons onCreateOrder={onCreateOrder} onCreateProduct={onCreateProduct} />
      </div>
    </div>
  );
}

export default HomePDV;