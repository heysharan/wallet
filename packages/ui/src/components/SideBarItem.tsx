import { ReactNode } from "react"

interface SideBarItemProps {
    icon: ReactNode
    title: string
    onClick: () => void
    selected: boolean
}

export const SideBarItem = ({icon, title, onClick, selected }: SideBarItemProps ) => {
    return(
        <div className={`flex font-semibold cursor-pointer p-2 ${selected? 'bg-neutral-900 rounded-md': ''}`} onClick={onClick}>
            <div className="flex justify-center items-center">{icon}</div>
            <div className="flex justify-center items-center pl-2">{title}</div>
        </div>
    )
}