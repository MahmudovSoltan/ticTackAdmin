import { create } from "zustand";
import { createCampingsFunc, deleteCampaign, getCampingsList, puthCamping } from "../services/campins";
import type { CampaignsType } from "../types/campaign.types";

interface CampinstStoreType {
    campingsModal: boolean,
    deleteModal: boolean,
    product: CampaignsType | null,
    editCampins: (product: CampaignsType) => void,
    deleteModalFunc: (id:number) => void,
    closeDeleteModal: () => void,
    openCampingsModal: () => void,
    closeCampingsModal: () => void,
    fetchCampins: () => Promise<void>,
    campoings: CampaignsType[],
    createCampings: (data: CampaignsType) => Promise<void>,
    editCampinsFuntion: (id: number, data: CampaignsType) => Promise<void>,
    deleteCampaignFunc: (id: number) => Promise<void>,
    productId: number | null


}
export const useCampinstStore = create<CampinstStoreType>((set) => ({
    campingsModal: false,
    deleteModal: false,
    product: null,
    productId: null,
    campoings: [],
    editCampins: (product: CampaignsType) => set({ product, campingsModal: true }),
    deleteModalFunc: (id:number) => set({ deleteModal: true ,productId:id}),
    closeDeleteModal: () => set({ deleteModal: false, productId: null }),
    openCampingsModal: () => set({ campingsModal: true }),
    closeCampingsModal: () => set({ campingsModal: false, product: null }),
    fetchCampins: async () => {
        try {
            const campoings = await getCampingsList();
            set({ campoings });
        } catch (err) {
            console.error("Failed to fetch campings", err);
        }
    },
    createCampings: async (data) => {
        await createCampingsFunc(data);
        await useCampinstStore.getState().fetchCampins();
    },
    editCampinsFuntion: async (id: number, data: CampaignsType) => {
        await puthCamping(id, data);
        await useCampinstStore.getState().fetchCampins();
    },
    deleteCampaignFunc: async (id: number) => {
        await deleteCampaign(id);
        await useCampinstStore.getState().fetchCampins();
    }
}));

function fetchCampins() {
    throw new Error("Function not implemented.");
}
