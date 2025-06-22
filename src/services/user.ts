import axiosInstance from "../utils/axiosInstance";

export const getUserList = async () => {
    try {
        const response = await axiosInstance.get("/api/tiktak/admin/users")
        return response.data.data
    } catch (err) {
        console.log(err);

    }
}