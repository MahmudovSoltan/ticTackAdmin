import { toast } from "react-toastify";
import type { CampaignsType } from "../types/Types";
import axiosInstance from "../utils/axiosInstance";

export const getCampingsList = async () => {
    try {
        const response = await axiosInstance.get("/api/tiktak/admin/campaigns");

        return response.data.data;
    } catch (err) {
        console.error(err);
    }
};

export const createCampingsFunc = async (data: CampaignsType) => {
    try {
        const response = await axiosInstance.post("/api/tiktak/admin/campaign", data);
        toast.success("Kampaniya uğurla yaradıldı");
        getCampingsList()
        return response.data;
    } catch (error) {
        toast.error("Kampaniya yaradılarkən xəta baş verdi");
        console.error(error);
        throw new Error("Kampaniya yaradılmadı");
    }
};

export const puthCamping = async (id: number, data: CampaignsType): Promise<CampaignsType | undefined> => {
    try {
        const res = await axiosInstance.put(`/api/tiktak/admin/campaigns/${id}`, data);
        toast.success("Kampaniya uğurla yeniləndi");
        getCampingsList()
        return res.data;
    } catch (err) {
        toast.error("Kampaniya yenilənərkən xəta baş verdi");
        console.error(err);
        return undefined;
    }
};

export const deleteCampaign = async (id: number): Promise<boolean> => {
    try {
        await axiosInstance.delete(`/api/tiktak/admin/campaigns/${id}`);
        toast.success("Kampaniya uğurla silindi");
        getCampingsList()
        return true;
    } catch (err) {
        toast.error("Kampaniya silinərkən xəta baş verdi");
        console.error(err);
        return false;
    }
};
