import { getServerSession } from "next-auth";
import { AddMoneyCard } from "../../components/AddMoneyCard";
import { BalanceCard } from "../../components/BalanceCard";
import { OnRampTransaction } from "../../components/OnRampTransaction";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/src/index"


const getBalance = async () => {
    const session = await getServerSession(authOptions);
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user.id)
        }
    })
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

const getOnRampTransaction = async () => {
    const session = await getServerSession(authOptions);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user.id)
        }
    })
    return txns.map((t) => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

export default async function Transfer() {
    const balance = await getBalance();
    const transactions = await getOnRampTransaction();
    return (
        <div className="flex flex-col gap-4 h-full">

            <h1 className="text-3xl font-bold p-4">Transfer</h1>

            <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3">
                    <AddMoneyCard />
                </div>
                <div className="col-span-1">
                    <BalanceCard amount={balance.amount} locked={balance.locked} />
                </div>
                <div className="col-span-1">
                    <OnRampTransaction transactions={transactions}/> 
                </div>
            </div>
        </div>
    )
}