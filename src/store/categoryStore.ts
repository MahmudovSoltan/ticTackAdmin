// store/categoryStore.ts
import { create } from "zustand";
import { createCtegoryFunc, deleteCtegory, editCtegory, getCtegoryList } from "../services/categories";
import type { Category } from "../types/category.types";

interface CategoryStore {
  categories: Category[];
  selectedCategory: Category | null;
  categoryModal: boolean;
  deleteModal: boolean;
  fetchCategories: () => Promise<void>;
  createCategory: (category: Omit<Category, "id" | "created_at">) => Promise<void>;
  updateCategory: (id: number, category: Partial<Category>) => Promise<void>;
  deleteCategory: (id: number) => Promise<void>;
  openCreateModal: () => void;
  openEditModal: (category: Category) => void;
  openDeleteModal: (category: Category) => void;
  closeModals: () => void;

}

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],
  selectedCategory: null,
  categoryModal: false,
  deleteModal: false,

  fetchCategories: async () => {
    try {
      const res = await getCtegoryList();
      set({ categories: res });
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  },

  createCategory: async (category) => {
    try {
      const res = await createCtegoryFunc(category);
      if (res) {
        set((state) => ({
          categories: [...state.categories, res],
          categoryModal: false,
        }));
      }
    } catch (err) {
      console.error("Error creating category:", err);
    }
  },

  updateCategory: async (id, updatedCategory) => {
    if (!updatedCategory.name || !updatedCategory.description || !updatedCategory.img_url) return;
    await editCtegory(id, {
      name: updatedCategory.name,
      description: updatedCategory.description,
      img_url: updatedCategory.img_url,
    });
  },

  deleteCategory: async (id) => {
    try {
      await deleteCtegory(id);
      set((state) => ({
        categories: state.categories.filter((cat) => cat.id !== id),
        deleteModal: false,
        selectedCategory: null,
      }));
    } catch (err) {
      console.error("Error deleting category:", err);
    }
  },

  openCreateModal: () => {
    set({ categoryModal: true, selectedCategory: null });
  },

  openEditModal: (category) => {
    set({ categoryModal: true, selectedCategory: category });
  },

  openDeleteModal: (category) => {
    set({ selectedCategory: category, deleteModal: true });
  },

  closeModals: () => {
    set({
      categoryModal: false,
      deleteModal: false,
      selectedCategory: null,
    });
  },
}));
