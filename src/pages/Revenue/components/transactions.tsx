import { Button } from "@components/index"
import { MdKeyboardArrowDown } from "react-icons/md"
import { GoDownload } from "react-icons/go"
import { TransactionResponse } from "../../../types/api/transaction.type"
import GreenArrow from "@assets/greenArrow.svg"
import RedArrow from "@assets/redArrow.svg"
import dayjs from "dayjs"

const Transactions = ({
    transactionData,
    setOpenFilter,
}: {
    transactionData?: TransactionResponse[]
    setOpenFilter: (val: boolean) => void
}) => {
    return (
        <div className="pb-6">
            <div className="flex justify-between">
                <div>
                    <h4 className="font-bold">
                        {transactionData?.length} Transactions
                    </h4>
                    <p className="text-md text-[#56616B]">
                        Your transactions for the last 7 days
                    </p>
                </div>
                <div className="flex">
                    <Button
                        variant="gray"
                        iconRight={<MdKeyboardArrowDown />}
                        onClick={() => setOpenFilter(true)}
                    >
                        Filter
                    </Button>
                    <Button
                        variant="gray"
                        className="ml-4"
                        iconRight={<GoDownload />}
                    >
                        Export list
                    </Button>
                </div>
            </div>
            <hr className="my-6" />
            {transactionData &&
                transactionData?.map((item, index) => (
                    <div className="flex mb-6 justify-between" key={index}>
                        <div className="flex">
                            <div>
                                {item.type === "withdrawal" ? (
                                    <img src={RedArrow} alt="" />
                                ) : (
                                    <img src={GreenArrow} alt="" />
                                )}
                            </div>
                            <div className="ml-3">
                                <p className="text-2md font-medium text-black-100">
                                    {item.type === "withdrawal"
                                        ? "Cash withdrawal"
                                        : item.metadata.product_name}
                                </p>
                                <p className="text-md text-[#56616B] mt-3 font-medium">
                                    {item.type === "withdrawal"
                                        ? item.status
                                        : item.metadata.name}
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="text-2md font-bold">
                                USD{item.amount}
                            </p>
                            <p className="text-md text-[#56616B] mt-1 font-medium">
                                {dayjs(item.date).format("MMM DD, YYYY")}
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Transactions
