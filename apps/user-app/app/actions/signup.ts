"use server"
import argon2 from 'argon2'
import prisma from "@repo/db/src/index"


export async function signup(firstname: string, lastname: string, age: number, email: string, password: string) {
    const hashedPassword = await argon2.hash(password)

    try {
        await prisma.$transaction(async (tx) => {
            const user = await tx.user.create({
                data: {
                    firstname: firstname,
                    lastname: lastname,
                    age: age,
                    email: email,
                    password: hashedPassword
                }
            })

            await tx.balance.create({
                data: {
                    amount: 0,
                    locked: 0,
                    userId: user.id
                }
            })
        })
        return true
    } catch (e) {
        return false
    }
}    