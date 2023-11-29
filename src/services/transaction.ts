import axiosInstance from "./api.service";
import { TransactionResponse} from "../types/api/transaction.type";

export const fetchTransactions = async () => {
    const response = await axiosInstance.get<TransactionResponse[]>(`/transactions`)
    return response.data
}