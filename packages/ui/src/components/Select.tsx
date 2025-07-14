interface selectProps {
    options: {
        key: string
        value: string
    }[],
    onSelect: (value: string) => void
}
export const Select = ({ options, onSelect} : selectProps) => {
    return(
        <select className="p-2 border border-neutral-800 rounded-lg outline-none w-full text-neutral-400" onChange={(e) => onSelect(e.target.value)}>{options.map((option) => (<option className="text-black" key={option.key}>{option.value}</option>))}</select> 
    )
}