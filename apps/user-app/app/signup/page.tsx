"use client";
import { Button } from "@repo/ui/components/Button";
import { TextInput } from "@repo/ui/components/text-input";
import { useRef } from "react";
import { signup } from "../lib/actions/signup";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submit = async () => {
    const response = await signup(
      firstNameRef.current?.value!,
      lastNameRef.current?.value!,
      parseInt(ageRef.current?.value!),
      emailRef.current?.value!,
      passwordRef.current?.value!
    );
    if (response) {
      toast.success("Signup Done!")
      router.push('/signin')
    } else {
      toast.error('Something went wrong! Please Try again')
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col p-5 gap-2 rounded-2xl w-full max-w-md border border-neutral-800">
        <div className="flex flex-col">
          <p className="font-bold text-3xl">Signup</p>
          <p>Enter your email to sign up for an account</p>
        </div>
        <TextInput ref={firstNameRef} type="text" placeholder="John" size="large" label="Firstname" />
        <TextInput ref={lastNameRef} type="text" placeholder="Doe" size="large" label="Lastname" />
        <TextInput ref={ageRef} type="text" placeholder="18" size="large" label="Age" />
        <TextInput ref={emailRef} type="text" placeholder="john.doe@example.com" size="large" label="Email" />
        <TextInput ref={passwordRef} type="password" placeholder="•••••••• 🔒" size="large" label="Password" />
        <Button size="large" theme="light" onClick={submit}> Signup with email </Button>
        <div className="flex justify-center gap-1">
          <p>Already have an account?</p>
          <Link href="/signin" className="underline underline-offset-3 cursor-pointer">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
