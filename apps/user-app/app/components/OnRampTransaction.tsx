import { Card } from "@repo/ui/components/Card"

interface onRampTransactionProps {
    status: "Success" | "Failure" | "Processing",
    token?: string,
    provider: string,
    amount: number,
    time: Date
}


export const OnRampTransaction = ({ transactions }: { transactions: onRampTransactionProps[] }) => {
    if (!transactions.length) {
        return (
            <Card title="Recent Transactions">
                <div className="bg-neutral-950 rounded-lg flex justify-center items-center px-4 py-2">
                    No Recent transactions
                </div>
            </Card>
        )
    }
    return (
        <Card title="Recent Transactions">
                {transactions.map((tx, index) => (<div key={index} className="bg-green-600 rounded-lg px-3 py-1 flex justify-between">
                    <div>
                        <p className="font-semibold">Received INR</p>
                        <p>{tx.time.toDateString()}</p>
                    </div>
                    <div className="flex justify-center items-center">
                        + Rs {tx.amount / 100}
                    </div>
                </div>))}
        </Card>
    )
}