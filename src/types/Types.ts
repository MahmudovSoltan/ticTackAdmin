   
  export interface Product {
    no: number;
    date: string;
    desc: string;
    content: string;
}

export interface Category {
  id: number;
  name: string;
  img_url: string;
  description: string;
  created_at: string;
}

// types/Order.ts
export interface Category {
  id: number;
  name: string;
  img_url: string;
  description: string;
  created_at: string;
}

export interface Product {
  id: number;
  title: string;
  img_url: string;
  description: string;
  price: string;
  type: string;
  created_at: string;
  category: Category;
}

export interface OrderItem {
  id: number;
  quantity: number;
  total_price: string;
  product: Product;
}

export interface User {
  id: number;
  full_name: string;
  img_url: string;
}

export type OrderStatus = "PENDING" | "SHIPPED" | "DELIVERED" | "CANCELLED";

export interface Order {
  id: number;
  orderNumber: string;
  total: string;
  deliveryFee: string;
  paymentMethod: string;
  status: OrderStatus;
  note: string;
  address: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  items: OrderItem[];
}
