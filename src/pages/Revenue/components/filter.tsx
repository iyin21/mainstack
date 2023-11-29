import { Drawer, MultiSelect } from "@mantine/core"
import { Dispatch, SetStateAction, useState } from "react"
import { Button } from "@components/index"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

interface FilterDrawerProps {
    setOpenFilterDrawer: Dispatch<SetStateAction<boolean>>
    openFilterDrawer: boolean
}
const Filter = ({
    setOpenFilterDrawer,
    openFilterDrawer,
}: FilterDrawerProps) => {
    const [startDate, setStartDate] = useState(new Date(-1))
    const [endDate, setEndDate] = useState(new Date())
    const [value, setValue] = useState<string[]>([])
    const [transaction, setTransaction] = useState<string[]>([])
    const transactionTypes = [
        "Store Transactions",
        "Get Tipped",
        "Withdrawals",
        "Chargebacks",
        "Cashbacks",
        "Refer & Earn",
    ]
    const transactionStatus = ["Successful", "Pending", "Failed"]
    return (
        <Drawer
            opened={openFilterDrawer}
            onClose={() => setOpenFilterDrawer(false)}
            size="40%"
            withCloseButton
            position="right"
            padding="xl"
            closeOnClickOutside={true}
            title={<h4 className="font-bold">Filter</h4>}
        >
            <div className="flex justify-between">
                <Button variant="clear">Last 7 days</Button>
                <Button variant="clear">This month</Button>
                <Button variant="clear">Last 3 months</Button>
            </div>
            <p className="text-2md font-semibold mt-8 mb-4">Date Range</p>
            <div className="flex justify-between">
                <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    className="bg-[#EFF1F6] p-4 rounded-[12px]"
                />
                <DatePicker
                    selected={endDate}
                    onChange={(date: Date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    className="bg-[#EFF1F6] p-4 rounded-[12px]"
                />
            </div>
            <MultiSelect
                data={transactionTypes}
                value={value}
                onChange={setValue}
                label="Transaction Type"
                styles={() => ({
                    label: {
                        fontSize: "16px",
                        fontWeight: 700,
                        marginTop: "20px",
                    },
                    wrapper: {
                        paddingTop: "8px",
                        paddingBottom: "5px",
                    },
                    input: {
                        backgroundColor: "#EFF1F6",
                        padding: "20px",
                        border: "none",
                        borderRadius: 12,
                        fontSize: "16px",
                    },
                    pill: {
                        fontSize: "16px",
                    },
                })}
            />
            <MultiSelect
                data={transactionStatus}
                value={transaction}
                onChange={setTransaction}
                label="Transaction Status"
                styles={() => ({
                    label: {
                        fontSize: "16px",
                        fontWeight: 700,
                        marginTop: "20px",
                    },
                    wrapper: {
                        paddingTop: "8px",
                        paddingBottom: "5px",
                    },
                    input: {
                        backgroundColor: "#EFF1F6",
                        padding: "20px",
                        border: "none",
                        borderRadius: 12,
                        fontSize: "16px",
                    },
                    pill: {
                        fontSize: "16px",
                    },
                })}
            />
            <div className="flex bottom-0 fixed pb-6 w-[90%]">
                <Button variant="clear" className="font-semibold w-[50%]">
                    Clear
                </Button>
                <Button className="font-semibold bg-[#DBDEE5] text-white-100 w-[50%] ml-4">
                    Apply
                </Button>
            </div>
        </Drawer>
    )
}

export default Filter
