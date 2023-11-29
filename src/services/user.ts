import axiosInstance from "./api.service";
import { UserResponse} from "../types/api/user.type";

export const fetchUser = async () => {
    const response = await axiosInstance.get<UserResponse>(`/user`)
    return response.data
}