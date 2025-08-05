import { Order } from './Order';
import { MenuItem } from './MenuItem'

export interface HomePDVProps {
  orders: Order[];
  menuItems: MenuItem[];
  onCreateOrder: () => void;
  onCreateProduct: () => void;
}