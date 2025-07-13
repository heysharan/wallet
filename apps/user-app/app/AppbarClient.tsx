"use client"
import { AppBar } from '@repo/ui/components/Appbar'
import { signIn, signOut, useSession } from 'next-auth/react';

export const AppBarClient = () => {
    const session = useSession();

    return (
        <div>
            <AppBar user={session.data?.user} onSignIn={signIn} onSignOut={signOut} />
        </div>
    )
}