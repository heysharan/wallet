"use client";
import { signIn } from "next-auth/react";
import { useRef } from "react";
import { TextInput } from "@repo/ui/text-input";
import { Button } from "@repo/ui/button";

export default function Signin() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    return (
        <div className="bg-black min-h-screen flex justify-center items-center">
            <div className="rounded-2xl w-full max-w-md border border-neutral-800">
                <div className="flex flex-col p-5 gap-4 text-white">
                    <div className="flex flex-col">
                        <p className="font-bold text-3xl">Login</p>
                        <p>Enter your email below to login to your account</p>
                    </div>
                    <TextInput ref={emailRef} type="text" placeholder="someone@email.com" size="large" label="Email" />
                    <TextInput ref={passwordRef} type="password" size="large" label="Password" />
                    <Button size="large" theme="light" onClick={async () => {
                        await signIn("credentials", {
                            email: emailRef.current?.value,
                            password: passwordRef.current?.value,
                            callbackUrl: '/'
                        })
                    }}>Login with email</Button>
                    <div className="flex w-full items-center gap-4">
                        <div className="flex-grow h-px bg-neutral-600"></div>
                        <span className="text-neutral-500 text-sm">OR CONTINUE WITH</span>
                        <div className="flex-grow h-px bg-neutral-600"></div>
                    </div>
                    <Button size="large" theme="dark" onClick={() => { }}>Google</Button>
                    <Button size="large" theme="dark" onClick={() => { }}>Github</Button>
                </div>
            </div>
        </div>
    );
}
