



export interface Product {
  id: number,
  title: string,
  img_url: string,
  description: string,
  price: string,
  type: string,
  created_at: string,
  category: Category
}

export interface CreateProductType {
  title: string,
  description: string,
  price: string,
  type: string, /* Please check button. this is ENUM ProductMeasure*/
  img_url: string /* OPTIONALY */,
  category_id: number
}

export interface Category {
  id: number;
  name: string;
  img_url: string;
  description: string;
  created_at: string;
}

export interface CampaignsType {
  id?: number | undefined,
  title: string,
  description: string,
  img_url?: string,
  created_at?: string
}




export interface OrderItem {
  id: number;
  quantity: number;
  total_price: string;
  product: Product;
}
export interface User {
  id: number;
  full_name: string;
  img_url: string;
}

export type OrderStatus = "PENDING" | "SHIPPED" | "DELIVERED" | "CANCELLED";
export interface UserType {
  id: number,
  full_name: string,
  phone: string,
  address: null | string,
  img_url: null | string,
  role: string,
  created_at: string
}
export interface Order {
  id: number;
  orderNumber: string;
  total: string;
  deliveryFee: string;
  paymentMethod: string;
  status: OrderStatus;
  note: string;
  address: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  items: OrderItem[];
}


export interface AuthStore {
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (accessToken: string, refreshToken: string) => void;
  clearTokens: () => void;
  initializeTokens: () => void;
  user: Role | null,
  setUser: (user: Role | null) => void,
  isInitialized: boolean

}

export interface Role {
  role: "ADMIN"
}

export interface loginType { phone: string, password: string }