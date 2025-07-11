import { ReactNode } from "react"

type buttonProps = {
    children: ReactNode,
    size: string,
    theme: string,
    onClick?: () => void
}
let className: string

export const Button = ({ children, onClick, size, theme }: buttonProps) => {
    if (size === 'large' && theme === 'light') {
        className = 'bg-white text-black px-7 py-2 cursor-pointer rounded-md font-light flex justify-center items-center w-full mt-4'
    } else if (size === 'large' && theme === 'dark') {
        className = 'bg-neutral-900 text-white px-7 py-2 cursor-pointer rounded-md font-light flex justify-center items-center w-full'
    } else if( size === 'small' && theme === 'dark') {
        className = 'text-black bg-white outline-none font-medium rounded-md text-sm px-7 py-2.5 cursor-pointer'
    }

    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    )
}