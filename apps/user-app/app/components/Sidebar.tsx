"use client"
import { SideBarItem } from "@repo/ui/components/SideBarItem"
import { Clock } from "@repo/ui/icons/clock"
import { Home } from "@repo/ui/icons/home"
import { Transfer } from "@repo/ui/icons/transfer"
import { usePathname, useRouter } from "next/navigation"

export const Sidebar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const navItem = [
        { href: '/dashboard', title: 'Home', icon: <Home /> },
        { href: '/transfer', title: 'Transfer', icon: <Transfer /> },
        { href: '/transactions', title: 'Transactions', icon: <Clock /> }
    ]

    return (
        <div className="w-64 min-h-screen overflow-hidden flex flex-col gap-3 pt-40">
            {navItem.map((item, index) => (<SideBarItem key={index} icon={item.icon} title={item.title} onClick={() => { router.push(item.href) }} selected={pathname === item.href} />))}
        </div>
    )
}