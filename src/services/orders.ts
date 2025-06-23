import type { Order, OrderStatus } from "../types/order.types";
import axiosInstance from "../utils/axiosInstance";

export const getOrderList = async (): Promise<Order[] | undefined>  => {
    try {
        const response = await axiosInstance.get("/api/tiktak/orders/admin")
        return response.data.data
    } catch (err) {
        console.log(err);

    }
}


export const patchOrderStatus = async (id: number, status: OrderStatus): Promise<Order | undefined> => {

    try {
        const res = await axiosInstance.put(`/api/tiktak/orders/admin/${id}/status`, { status });
        return res.data;
    } catch (err) {
        console.log(err);
        return undefined;
    }

};