import { WalletIcon } from "../icons/wallet"
import { Button } from "./button"

interface AppBarProps {
    user?: {
        name?: string | null
    },
    onSignIn: () => void,
    onSignOut: () => void
}

export const AppBar = ({ user, onSignIn, onSignOut }: AppBarProps) => {
    return (
        <div className="flex justify-between p-5">
            <div className="flex items-center justify-center gap-2">
                <WalletIcon />
                <p className="font-semibold text-white text-4xl">Wallet</p>
            </div>
            <Button onClick={user ? onSignOut : onSignIn} size="small" theme="dark">{user ? "Logout" : "Login"}</Button>
        </div>
    )
}