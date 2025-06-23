export interface loginType {
  phone: string;
  password: string;
}

export interface Role {
  role: "ADMIN";
}

export interface AuthStore {
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (accessToken: string, refreshToken: string) => void;
  clearTokens: () => void;
  initializeTokens: () => void;
  user: Role | null;
  setUser: (user: Role | null) => void;
  isInitialized: boolean;
}

interface tokenType {
  access_token: string,
  refresh_token: string
}


interface dataType {
  tokens: tokenType
}
interface profileType {
  id: number,
  full_name: string,
  phone: string,
  address: string | null,
  img_url: string | null,
  role: string,
  created_at: string
}
export interface loginResponseType {
  data: dataType,
  profile: profileType
}