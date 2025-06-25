import axiosInstance from "../utils/axiosInstance";

export const uploadImage = async (file: File): Promise<string> => {
    if (!file) throw new Error("File is required");

    const fd = new FormData();
    fd.append("file", file);

    // FormData-nı yoxlamaq
    for (const [key, value] of fd.entries()) {
        console.log(key, value);
    }

    try {
        const res = await axiosInstance.post<{
            data: {
                url: string,
                message: string, result: boolean
            }
        }>(
            "/api/tiktak/upload",
            fd,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
        console.log(res.data.data.url
        );

        return res.data.data.url;
    } catch (error) {
        console.error("Upload error:", error);
        throw new Error("Failed to upload image");
    }
};