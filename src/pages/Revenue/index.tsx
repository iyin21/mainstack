import Balance from "./components/balance"
import Wallet from "./components/wallet"
import Transactions from "./components/transactions"
import Filter from "./components/filter"
import { useWallet, useTransactions } from "@hooks/revenue.hook"
import { Layout } from "@components/index"
import { useState } from "react"
import { CgSpinner } from "react-icons/cg"

const Revenue = () => {
    const { data: walletData, isLoading: isLoadingWallet } = useWallet()
    const { data: transactionData, isLoading: isLoadingTransaction } =
        useTransactions()
    const [openFilter, setOpenFilter] = useState(false)
    return (
        <Layout>
            <Filter
                setOpenFilterDrawer={setOpenFilter}
                openFilterDrawer={openFilter}
            />
            {isLoadingWallet || isLoadingTransaction ? (
                <div className="h-screen w-full flex items-center justify-center">
                    <CgSpinner className="animate-spin text-black-100 text-3xl " />
                </div>
            ) : (
                <div>
                    <div className="flex ">
                        <div className="w-[70%]">
                            <Balance
                                balance={walletData?.balance || 0}
                                transactionData={transactionData || []}
                            />
                        </div>
                        <div className="w-[30%] ml-20">
                            <Wallet
                                ledgerBalance={walletData?.ledger_balance || 0}
                                pendingPayout={walletData?.pending_payout || 0}
                                totalPayout={walletData?.total_payout || 0}
                                totalRevenue={walletData?.total_revenue || 0}
                            />
                        </div>
                    </div>
                    <Transactions
                        transactionData={transactionData}
                        setOpenFilter={setOpenFilter}
                    />
                </div>
            )}
        </Layout>
    )
}
export default Revenue
