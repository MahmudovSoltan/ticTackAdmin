// store/orderStore.ts
import { create } from "zustand";
import axios from "axios";
import type { Order, OrderStatus } from "../types/Types";

interface OrderStore {
  orders: Order[];
  fetchOrders: () => Promise<void>;
  updateOrderStatus: (id: number, newStatus: OrderStatus) => Promise<void>;
}

export const useOrderStore = create<OrderStore>((set, get) => ({
  orders: [],

  fetchOrders: async () => {
    try {
      const res = await axios.get<Order[]>("/api/orders"); // öz backend API endpoint-inə uyğunlaşdır
      set({ orders: res.data });
    } catch (err) {
      console.error("Failed to fetch orders", err);
    }
  },

  updateOrderStatus: async (id, newStatus) => {
    try {
      const res = await axios.patch<Order>(`/api/orders/${id}/status`, {
        status: newStatus,
      });

      // store-u güncəllə
      set((state) => ({
        orders: state.orders.map((order) =>
          order.id === id ? res.data : order
        ),
      }));
    } catch (err) {
      console.error("Failed to update order status", err);
    }
  },
}));
