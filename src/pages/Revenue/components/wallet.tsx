import { AiOutlineInfoCircle } from "react-icons/ai"

interface WalletInterface {
    ledgerBalance: number
    totalPayout: number
    totalRevenue: number
    pendingPayout: number
}
const Wallet = ({
    ledgerBalance,
    totalPayout,
    totalRevenue,
    pendingPayout,
}: WalletInterface) => {
    return (
        <div>
            <div className="flex justify-between ">
                <div>
                    <p className="text-[#56616B] mb-4 text-md">
                        Ledger Balance
                    </p>
                    <h3 className="font-bold">USD {ledgerBalance}</h3>
                </div>
                <AiOutlineInfoCircle
                    color="#888F95"
                    className="cursor-pointer"
                />
            </div>
            <div className="flex mt-8 justify-between">
                <div>
                    <p className="text-[#56616B] mb-4 text-md">Total Payout</p>
                    <h3 className="font-bold">USD {totalPayout}</h3>
                </div>
                <AiOutlineInfoCircle
                    color="#888F95"
                    className="cursor-pointer"
                />
            </div>
            <div className="flex mt-8 justify-between">
                <div>
                    <p className="text-[#56616B] mb-4 text-md">Total Revenue</p>
                    <h3 className="font-bold">USD {totalRevenue}</h3>
                </div>
                <AiOutlineInfoCircle
                    color="#888F95"
                    className="cursor-pointer"
                />
            </div>
            <div className="flex mt-8 justify-between">
                <div>
                    <p className="text-[#56616B] mb-4 text-md">
                        Pending Payout
                    </p>
                    <h3 className="font-bold">USD {pendingPayout}</h3>
                </div>
                <AiOutlineInfoCircle
                    color="#888F95"
                    className="cursor-pointer"
                />
            </div>
        </div>
    )
}

export default Wallet
