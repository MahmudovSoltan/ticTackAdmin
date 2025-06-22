import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosInstance";
import type { CreateProductType, Product } from "../types/Types";

export const getProductsList = async () => {
    try {
        const response = await axiosInstance.get("/api/tiktak/admin/products");

        return response.data.data;
    } catch (err) {
        console.error(err);
    }
};

export const createProductsFunc = async (data:CreateProductType) => {
    try {
        const response = await axiosInstance.post("/api/tiktak/admin/product", data);
        toast.success("Kampaniya uğurla yaradıldı");
        return response.data;
    } catch (error) {
        toast.error("Kampaniya yaradılarkən xəta baş verdi");
        console.error(error);
        throw new Error("Kampaniya yaradılmadı");
    }
};

export const editProduct = async (id: number, data: CreateProductType): Promise<Product | undefined> => {
    try {
        const res = await axiosInstance.put(`/api/tiktak/admin/products/${id}`, data);
        toast.success("Kampaniya uğurla yeniləndi");
        return res.data as Product;
    } catch (err) {
        toast.error("Kampaniya yenilənərkən xəta baş verdi");
        console.error(err);
        return undefined;
    }
};

export const deleteProduct = async (id: number): Promise<boolean> => {
    try {
        await axiosInstance.delete(`/api/tiktak/admin/products/${id}`);
        toast.success("Kampaniya uğurla silindi");
        return true;
    } catch (err) {
        toast.error("Kampaniya silinərkən xəta baş verdi");
        console.error(err);
        return false;
    }
};
