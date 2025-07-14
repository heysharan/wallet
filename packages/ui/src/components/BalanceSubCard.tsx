interface balanceSubCardProps {
    label: string,
    value: number
}
export const BalanceSubCard = ({ label, value }: balanceSubCardProps) => {
    return (
        <div className="bg-neutral-950 rounded-lg flex justify-between px-4 py-2">
            <span>
                {label}
            </span>
            <span>
                {value} INR
            </span>
        </div>
    )
}