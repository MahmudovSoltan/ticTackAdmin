import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosInstance";
import type { CreateProductType, Product } from "../types/product.types";

export const getProductsList = async ():Promise<Product[]|null> => {
    try {
        const response = await axiosInstance.get("/api/tiktak/admin/products");

        return response.data.data;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const createProductsFunc = async (data:CreateProductType):Promise<Product|undefined> => {
    try {
        const response = await axiosInstance.post("/api/tiktak/admin/product", data);
        toast.success("Məhsul uğurla yaradıldı");
        return response.data;
    } catch (error) {
        toast.error("Məhsul yaradılarkən xəta baş verdi");
        console.error(error);
        throw new Error("Kampaniya yaradılmadı");
    }
};

export const editProduct = async (id: number, data: CreateProductType): Promise<Product | undefined> => {
    try {
        const res = await axiosInstance.put(`/api/tiktak/admin/products/${id}`, data);
        toast.success("Məhsul uğurla yeniləndi");
        return res.data as Product;
    } catch (err) {
        toast.error("Məhsul yenilənərkən xəta baş verdi");
        console.error(err);
        return undefined;
    }
};

export const deleteProduct = async (id: number): Promise<boolean> => {
    try {
        await axiosInstance.delete(`/api/tiktak/admin/products/${id}`);
        toast.success("Məhsul uğurla silindi");
        return true;
    } catch (err) {
        toast.error("Məhsul silinərkən xəta baş verdi");
        console.error(err);
        return false;
    }
};
