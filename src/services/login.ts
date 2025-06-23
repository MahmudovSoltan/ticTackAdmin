import { toast } from "react-toastify";
import { useAuthStore } from "../store/authStore";
import axiosInstance from "../utils/axiosInstance";
import type { loginResponseType, loginType } from "../types/Types";

export const login = async (data: loginType): Promise<loginResponseType | undefined> => {
    try {
        const response = await axiosInstance.post("/api/tiktak/auth/admin/login", data);

        const access_token = response.data.data.tokens.access_token;
        const refresh_token = response.data.data.tokens.refresh_token;
        const profile = response.data.data.profile;

        const { setTokens, setUser } = useAuthStore.getState();
        setTokens(access_token, refresh_token);
        setUser(profile);

        toast.success("Uğurla giriş etdiniz!"); // ✅ əvvəlcə toast göstər
        setTimeout(() => {
            if (profile.role === "ADMIN") {
                window.location.href = "/orders";
            }
        }, 1000); // ✅ toast göstərildikdən sonra yönləndir

        return response.data;
    } catch (err: any) {
        const message = err?.response?.data?.message || "Xəta baş verdi!";
        toast.error(message); // ✅ səhv mesajı varsa göstər
        console.error(err);
    }
};
