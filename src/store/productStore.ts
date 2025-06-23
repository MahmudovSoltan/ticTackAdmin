import { create } from "zustand";
import { createProductsFunc, deleteProduct, editProduct, getProductsList } from "../services/products";
import type { CreateProductType, Product } from "../types/product.types";

interface ProductStore {
    product: CreateProductType | null;
    productModal: boolean;
    deleteModal: boolean;
    productId: number | null;
    products: Product[] | null;
    editProduct: (id: number, product: CreateProductType) => void;
    closeProductModal: () => void;
    openProductModal: () => void;
    createProduct: (product: CreateProductType) => Promise<void>;
    closeDeleteModal: () => void;
    openDeleteModal: (id: number) => void;
    editProductFunction: (id: number, data: CreateProductType) => Promise<void>;
    deleteProductFun: (id: number) => Promise<void>;
    fetchAllProducts: () => Promise<void>
}

export const useProductStore = create<ProductStore>((set) => ({
    productModal: false,
    deleteModal: false,
    product: null,
    productId: null,
    products: [],
    editProduct: (id: number, product: CreateProductType) => set({ product, productModal: true, productId: id }),
    openProductModal: () => set({ productModal: true }),
    closeProductModal: () => set({ productModal: false, product: null, productId: null }),
    createProduct: async (data: CreateProductType) => {
        await createProductsFunc(data)
    },
    closeDeleteModal: () => set({ deleteModal: false, productId: null }),
    openDeleteModal: (id: number) => set({ deleteModal: true, productId: id }),
    fetchAllProducts: async () => {
        const products = await getProductsList()
        set({ products })
    },
    editProductFunction: async (id: number, data: CreateProductType) => {
        await editProduct(id, data)
    },
    deleteProductFun: async (id: number) => {
        await deleteProduct(id)
    }

}));
