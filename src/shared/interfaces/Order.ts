// interfaces/Order.ts

export interface Order {
    id: number;
    client: string;
    total: number;
    createdAt?: string;
    updatedAt?: string;
    checkoutId?: string;
    orderId?: string;
  }