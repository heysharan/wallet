import { Card } from "@repo/ui/components/Card"
import { BalanceSubCard } from '@repo/ui/components/BalanceSubCard'
interface balanceCardProps {
    amount: number,
    locked: number
}
export const BalanceCard = ({ amount, locked }: balanceCardProps) => {
    return (
        <Card title="Balance">
            <BalanceSubCard label="Unlocked Balance" value={amount / 100} />
            <BalanceSubCard label="Locked Balance" value={locked / 100} />
            <BalanceSubCard label="Total Balance" value={(amount + locked) / 100} />
        </Card>
    )
}