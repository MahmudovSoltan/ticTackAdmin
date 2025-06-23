import type { UserType } from "../types/user.types";
import axiosInstance from "../utils/axiosInstance";

export const getUserList = async (): Promise<UserType[] | undefined> => {
    try {
        const response = await axiosInstance.get("/api/tiktak/admin/users")
        return response.data.data
    } catch (err) {
        console.log(err);

    }
}