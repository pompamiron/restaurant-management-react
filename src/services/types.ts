export type AccessToken = string;

export type OrderStatus = "pending" | "completed" | "canceled";

export type PaymentStatus = 'unpaid'| 'paid';

export type OrderType = "To-Go" | "Dine-In";

export type User = {
  name: string;
  email: string;
};

export type Order = {
  id: number;
  description: string | null;
  order_type: OrderType;
  status: OrderStatus;
  payment_status: PaymentStatus;
  created_at: Date;
  items: Item[];
};

// Menu Items
export type MenuItem = {
  id: number;
  name: string;
  price: number;
};

export interface Item {
  id?: number;
  order_id?: number;
  menu_item_id: number;
  quantity: number;
  description: string;
  menu_item: MenuItem;
}
