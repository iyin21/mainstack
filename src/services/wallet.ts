import axiosInstance from "./api.service";
import { WalletResponse} from "../types/api/wallet.type";

export const fetchWallet = async () => {
    const response = await axiosInstance.get<WalletResponse>(`/wallet`)
    return response.data
}