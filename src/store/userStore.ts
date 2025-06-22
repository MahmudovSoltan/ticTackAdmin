import { create } from "zustand";
import type { UserType, } from "../types/Types";
import { getUserList } from "../services/user";
interface OrderStore {
    users: UserType[];
    fetchUsers: () => Promise<void>;
}

export const useUserStore = create<OrderStore>((set,) => ({
    users: [],
    fetchUsers: async () => {
        try {
            const users = await getUserList();
            set({ users });
        } catch (err) {
            console.error("Failed to fetch orders", err);
        }
    }


}));
