export interface Category {
  id: number;
  name: string;
  img_url: string;
  description: string;
  created_at: string;
}

export type CreateCategoryDataType = Omit<Category, "id" | "created_at">;
