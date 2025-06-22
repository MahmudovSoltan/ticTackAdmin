// services/logout.ts
import type { NavigateFunction } from "react-router-dom";
import { useAuthStore } from "../store/authStore";


export const logout = (navigate: NavigateFunction) => {
  const { clearTokens } = useAuthStore.getState();

  clearTokens();

  // Optional: Əgər serverə logout sorğusu atmaq istəsən:
  // await axiosInstance.post("/api/tiktak/auth/logout");

  navigate("/"); // və ya "/login" kimi
};
