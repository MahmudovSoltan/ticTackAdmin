// store/authStore.ts
import { create } from "zustand";
import type { AuthStore } from "../types/auth.types";




export const useAuthStore = create<AuthStore>((set) => ({
    accessToken: null,
    refreshToken: null,
    user: null,
    isInitialized: false,

    setTokens: (accessToken, refreshToken) => {
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
        set({ accessToken, refreshToken });
    },

    clearTokens: () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user")
        set({ accessToken: null, refreshToken: null, user: null });
    },

    initializeTokens: () => {
        const accessToken = localStorage.getItem("access_token");
        const refreshToken = localStorage.getItem("refresh_token");
        const user = localStorage.getItem("user");
        set({
            accessToken,
            refreshToken,
            user: user ? JSON.parse(user) : null,
            isInitialized: true,
        });
    },
    setUser: (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        set({ user });
    },
}));
