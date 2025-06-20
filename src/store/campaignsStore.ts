import { create } from "zustand";
import type { Product } from "../types/Types";

interface CampinstStoreType {
    campingsModal: boolean,
    deleteModal: boolean,
    product: Product | null,
    editCampins: (product: Product) => void,
    deleteModalFunc: () => void,
    closeDeleteModal: () => void,
    openCampingsModal: () => void,
    closeCampingsModal: () => void
    

}
export const useCampinstStore = create<CampinstStoreType>((set) => ({
    campingsModal: false,
    deleteModal: false,
    product: null,
    editCampins : (product: Product) => set({ product, campingsModal: true }),
    deleteModalFunc: () => set({ deleteModal: true }),
    closeDeleteModal: () => set({ deleteModal: false }),
    openCampingsModal: () => set({ campingsModal: true }),
    closeCampingsModal: () => set({ campingsModal: false, product: null })
}))