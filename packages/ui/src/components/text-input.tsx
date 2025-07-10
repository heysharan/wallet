import { ForwardedRef, forwardRef } from "react"

type inputProps = {
    type: string,
    placeholder?: string,
    size: string
    label?: string
}
let className: string

export const TextInput = forwardRef(( 
    { type, placeholder, size, label }: inputProps,
    ref: ForwardedRef<HTMLInputElement>
) => {
    if (size === 'large') {
        className = 'p-2 border border-neutral-800 rounded-lg outline-none text-neutral-400'
    }

    return (
        <div className="flex flex-col">
        <label className="font-light text-lg text-white">{label}</label>
        <input ref={ref} className={className} type={type} placeholder={placeholder}/>
        </div>
    )
})



{/* forwardRef({ ref: ForwardedRef<HTMLInputElement> }) => { return ( <input ref={ref}>Text</input> )} */}