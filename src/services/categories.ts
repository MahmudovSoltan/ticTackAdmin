import { toast } from "react-toastify";
import type { Category, CreateCategoryDataType } from "../types/Types";
import axiosInstance from "../utils/axiosInstance";

export const getCtegoryList = async (): Promise<Category[] | undefined> => {
    try {
        const response = await axiosInstance.get("/api/tiktak/admin/categories");

        return response.data.data;
    } catch (err) {
        console.error(err);
    }
};

export const createCtegoryFunc = async (data: CreateCategoryDataType): Promise<Category | undefined> => {
    try {
        const response = await axiosInstance.post("/api/tiktak/admin/category", data);
        toast.success("Kampaniya uğurla yaradıldı");
        return response.data;
    } catch (error) {
        toast.error("Kampaniya yaradılarkən xəta baş verdi");
        console.error(error);
        throw new Error("Kampaniya yaradılmadı");
    }
};

export const editCtegory = async (id: number, data:CreateCategoryDataType|undefined): Promise<Category | undefined> => {
    try {
        const res = await axiosInstance.put(`/api/tiktak/admin/categories/${id}`, data);
        toast.success("Kampaniya uğurla yeniləndi");
        return res.data;
    } catch (err) {
        toast.error("Kampaniya yenilənərkən xəta baş verdi");
        console.error(err);
        return undefined;
    }
};

export const deleteCtegory = async (id: number): Promise<boolean> => {
    try {
        await axiosInstance.delete(`/api/tiktak/admin/categories/${id}`);
        toast.success("Kampaniya uğurla silindi");
        return true;
    } catch (err) {
        toast.error("Kampaniya silinərkən xəta baş verdi");
        console.error(err);
        return false;
    }
};
