export interface User {
  id: number;
  full_name: string;
  img_url: string;
}

export interface UserType {
  id: number;
  full_name: string;
  phone: string;
  address: string | null;
  img_url: string | null;
  role: string;
  created_at: string;
}
