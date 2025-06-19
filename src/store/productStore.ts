import { create } from "zustand";
import type { Product } from "../types/Types";

interface ProductStore {
    product: Product | null;
    productModal: boolean;
    deleteModal: boolean;
    editProduct: (product: Product) => void;
    closeProductModal: () => void;
    openProductModal: () => void;
    createProduct: (product: Product) => void;
    closeDeleteModal: () => void;
    openDeleteModal: () => void;

}

export const useProductStore = create<ProductStore>((set) => ({
    productModal: false,
    deleteModal: false,
    product: null,
    editProduct: (product: Product) => set({ product, productModal: true }),
    openProductModal: () => set({ productModal: true }),
    closeProductModal: () => set({ productModal: false, product: null }),
    createProduct: (product: Product) => set((state) => ({
        product: product,
        productModal: true
    })),
    closeDeleteModal: () => set({ deleteModal: false }),
    openDeleteModal: () => set({ deleteModal: true }),
}));
