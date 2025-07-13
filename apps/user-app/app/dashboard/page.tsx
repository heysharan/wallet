import { Home } from "@repo/ui/icons/home"
import { Transfer } from "@repo/ui/icons/transfer"
import { Clock } from "@repo/ui/icons/clock"
import Link from "next/link"
import { AppBarClient } from "../AppbarClient"

export default function Dashboard () {
    return(
        <div>
            <AppBarClient />
            <div className="flex flex-col">
            <span className="hover:bg-neutral-900 rounded-md p-2 flex justify-center cursor-pointer font-semibold">Home</span>
            <span className="hover:bg-neutral-900 rounded-md p-2 flex justify-center cursor-pointer font-semibold">Transfer</span>
            <span className="hover:bg-neutral-900 rounded-md p-2 flex justify-center cursor-pointer font-semibold">Transactions </span>
            </div>
        </div>
    )
}