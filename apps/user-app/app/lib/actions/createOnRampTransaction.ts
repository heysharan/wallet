"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import prisma from "@repo/db/src/index"

export async function createOnRampTransaction(amount: number, provider: string) {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id
    const token = Math.random();

    if(!userId){
        return{
            message: "User not logged in!"
        }
    }

    await prisma.onRampTransaction.create({
        data: {
            userId: Number(userId),
            amount: amount*100,
            status: "Processing",
            startTime: new Date(),
            provider: provider,
            token: String(token)
        }
    })
} 