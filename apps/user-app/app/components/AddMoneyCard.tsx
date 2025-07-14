"use client"
import { Button } from "@repo/ui/components/Button"
import { Card } from "@repo/ui/components/Card"
import { Select } from "@repo/ui/components/Select"
import { TextInput } from "@repo/ui/components/text-input"
import { useRef, useState } from "react"
import { createOnRampTransaction } from "../lib/actions/createOnRampTransaction"
import { toast } from "sonner"

const SUPPORTED_BANKS = [
    { name: 'MNO Bank', redirectUrl: 'https://mnobank.com' },
    { name: 'LMN Bank', redirectUrl: 'https://lmnbank.com' }
]

export const AddMoneyCard = () => {
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl)
    const amountRef = useRef<HTMLInputElement>(null)
    const [ provider, setProvider ] = useState(SUPPORTED_BANKS[0]?.name)


    return (
        <Card title="Add Money">
            <TextInput ref={amountRef} type="text" size="large" placeholder="Amount" label="Amount" />
            <div>
                <div>Bank</div>
                <Select onSelect={(value) => { 
                    setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl) 
                    setProvider(SUPPORTED_BANKS.find(x => x.name === value)?.name)
                    }} options={SUPPORTED_BANKS.map(x => ({ key: x.name, value: x.name }))} />
            </div>
            <div className="flex justify-center"><Button size="small" theme="dark" onClick={async () => {
                await createOnRampTransaction(Number(amountRef.current?.value), provider!)
                toast.success('Please complete your transaction')
                }}>
                Add Money</Button></div>
        </Card>
    )
}