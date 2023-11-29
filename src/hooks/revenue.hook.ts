import { useQuery } from "@tanstack/react-query"

import { fetchTransactions } from "@services/transaction"
import { fetchWallet } from "@services/wallet"
import { fetchUser } from "@services/user"

export const useTransactions = () => {
    const result = useQuery({
        queryKey: ["transcations"],
        queryFn: () => fetchTransactions(),
    })
    return result
}

export const useUser = () => {
    const result = useQuery({
        queryKey: ["user"],
        queryFn: () => fetchUser(),
    })
    return result
}

export const useWallet = () => {
    const result = useQuery({
        queryKey: ["Wallet"],
        queryFn: () => fetchWallet(),
    })
    return result
}
