"use client"
import { useBalance } from '@repo/store/src/hooks/useBalance'
import { AppBar } from '@repo/ui/components/Appbar'
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Page() {
  const balance = useBalance();
  const session = useSession();
  return (
    <main>
        <AppBar user={session.data?.user} onSignIn={signIn} onSignOut={signOut} />
    </main>
  );
}
