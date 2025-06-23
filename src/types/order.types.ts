// Order status enum
export type OrderStatus = "PENDING" | "SHIPPED" | "DELIVERED" | "CANCELLED";

// Category
export interface Category {
  id: number;
  name: string;
  img_url: string;
  description: string;
  created_at: string;
}

// Product
export interface Product {
  id: number;
  title: string;
  img_url: string;
  description: string;
  price: string;
  type: string; // əgər bu enum-dursa ayrıca type yaradıla bilər
  created_at: string;
  category: Category;
}

// OrderItem
export interface OrderItem {
  id: number;
  quantity: number;
  total_price: string;
  product: Product;
}

// User
export interface User {
  id: number;
  full_name: string;
  img_url: string;
}

// Order
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
