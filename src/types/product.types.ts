import type { Category } from "./category.types";

export interface Product {
  id: number;
  title: string;
  img_url: string;
  description: string;
  price: string;
  type: ProductMeasure; // ENUM ola bilər, əgər varsa onu ayrıca tip kimi çıxart
  created_at: string;
  category: Category;
}

export interface CreateProductType {
  title: string;
  description: string;
  price: string;
  type: string; // enum varsa: ProductMeasure
  img_url?: string;
  category_id?: number;
}


export type ProductMeasure =
  | 'kg'
  | 'gr'
  | 'litre'
  | 'ml'
  | 'meter'
  | 'cm'
  | 'mm'
  | 'piece'
  | 'packet'
  | 'box';


