// store/categoryStore.ts
import { create } from "zustand";
import axios from "axios";
import type { Category } from "../types/Types";

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

export const useCategoryStore = create<CategoryStore>((set, get) => ({
  categories: [],
  selectedCategory: null,
  categoryModal: false,
  deleteModal: false,

  fetchCategories: async () => {
    try {
      const res = await axios.get<Category[]>("/api/categories");
      set({ categories: res.data });
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  },

  createCategory: async (category) => {
    try {
      const res = await axios.post<Category>("/api/categories", category);
      set((state) => ({
        categories: [...state.categories, res.data],
        categoryModal: false,
      }));
    } catch (err) {
      console.error("Error creating category:", err);
    }
  },

  updateCategory: async (id, updatedCategory) => {
    try {
      const res = await axios.put<Category>(`/api/categories/${id}`, updatedCategory);
      set((state) => ({
        categories: state.categories.map((cat) =>
          cat.id === id ? res.data : cat
        ),
        categoryModal: false,
        selectedCategory: null,
      }));
    } catch (err) {
      console.error("Error updating category:", err);
    }
  },

  deleteCategory: async (id) => {
    try {
      await axios.delete(`/api/categories/${id}`);
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
