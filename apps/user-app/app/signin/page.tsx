"use client";
import { signIn } from "next-auth/react";
import { useRef } from "react";
import { TextInput } from "@repo/ui/components/text-input";
import { Button } from "@repo/ui/button";
import Link from "next/link";

export default function Signin() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="rounded-2xl w-full max-w-md border border-neutral-800">
                <div className="flex flex-col p-5 gap-2">
                    <div className="flex flex-col">
                        <p className="font-bold text-3xl">Login</p>
                        <p>Enter your email below to login to your account</p>
                    </div>
                    <TextInput ref={emailRef} type="text" placeholder="john.doe@example.com" size="large" label="Email" />
                    <TextInput ref={passwordRef} type="password" placeholder="•••••••• 🔒" size="large" label="Password" />
                    <Button size="large" theme="light" onClick={async () => {
                        await signIn("credentials", {
                            email: emailRef.current?.value,
                            password: passwordRef.current?.value,
                            callbackUrl: '/'
                        })
                    }}>Login with email</Button>
                    <div className="flex justify-center gap-1">
                        <p>Don't have an account?</p>
                        <Link href="/signup" className="underline underline-offset-3 cursor-pointer">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}