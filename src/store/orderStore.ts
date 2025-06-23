import { create } from "zustand";

import { getOrderList, patchOrderStatus } from "../services/orders";
import type { Order, OrderStatus } from "../types/order.types";

interface OrderStore {
  orders: Order[];
  fetchOrders: () => Promise<void>;
  updateOrderStatus: (id: number, newStatus: OrderStatus) => Promise<void>;
}

export const useOrderStore = create<OrderStore>((set) => ({
  orders: [],

  fetchOrders: async () => {
    try {
      const orders = await getOrderList(); 
      set({ orders });
    } catch (err) {
      console.error("Failed to fetch orders", err);
    }
  },

  updateOrderStatus: async (id, newStatus) => {
    try {
      const updatedOrder = await patchOrderStatus(id, newStatus);
      set((state) => ({
        orders: state.orders.map((order) =>
          order.id === id ? updatedOrder as Order : order
        ),
      }));
    } catch (err) {
      console.error("Failed to update order status", err);
    }
  },
}));
