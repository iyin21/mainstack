import { Chart } from "react-google-charts"
import { Button } from "@components/index"
import { TransactionResponse } from "../../../types/api/transaction.type"
import dayjs from "dayjs"

// export const data = [
//     ["Date", "Revenue"],
//     ["Apr 1, 2022", "100"],
//     ["Apr 8, 2022", "100000"],
//     ["Apr 14", '50000'],
//     ['Apr 20', "50000"],
//     ["Apr 30, 2022", 100],
//   ];
export const options = {
    //title: "Company Performance",
    curveType: "function",
    colors: ["#FF5403"],
    legend: { position: "none" },
    vAxis: {
        animate: { startup: true, easing: "in" },
        gridlines: { color: "transparent" },
        // format: { format: "none" },
        //gridlines: { color: "#6B7A99",  },
        textStyle: { color: "#7F9395", fontName: "degular-variable" },
    },
    hAxis: {
        gridlines: { color: "transparent" },
        textStyle: { color: "#7F9395", fontName: "degular-variable", fontWeight:500,  },
    },
    //legend: { position: "bottom" },
    chartArea: { left: 30, width: "100%" },
}

const Balance = ({
    balance,
    transactionData,
}: {
    balance: number
    transactionData: TransactionResponse[]
}) => {
    console.log(transactionData)
    const data =
        transactionData &&
        transactionData.map((item, _) => {
            const arr = []
            arr.push(dayjs(item.date).format("MMM, DD YYYY"))
            arr.push(item.amount)
            return arr
        })

    data.unshift(["Date", "Revenue"])
    return (
        <div>
            <div className="flex ">
                <div>
                    <p className="text-[#56616B]">Available Balance</p>
                    <h1 className="font-bold">USD {balance}</h1>
                </div>
                <Button
                    variant="primary"
                    className="ml-20 w-[150px] h-fit !py-4"
                >
                    Withdraw
                </Button>
            </div>

            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    )
}

export default Balance
