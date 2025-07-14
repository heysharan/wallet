import { ReactNode } from "react"

interface cardProps {
    title?: string,
    children: ReactNode
}

export const Card = ({ title, children }: cardProps) => {
    return(
        <div className="bg-neutral-900 rounded-xl flex flex-col gap-8 p-8">
           <h1 className="text-2xl font-semibold">{title}</h1>
           {children} 
        </div>
    )
}