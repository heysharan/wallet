"use client"
import { useBalance } from '@repo/store/src/hooks/useBalance'
import { AppBar } from '@repo/ui/components/appBar'
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Page() {
  const balance = useBalance();
  const session = useSession();
  return (
    <div className="bg-black min-h-screen text-5xl text-white">
      <AppBar user={session.data?.user} onSignIn={signIn} onSignOut={signOut}/>
      {/* User Application
      <p>User Balance: {JSON.stringify(balance)}</p> */}
    </div>
  );
}
