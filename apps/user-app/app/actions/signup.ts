"use server"
import argon2 from 'argon2'
import prisma from "@repo/db/src/index"


export async function signup (firstname: string, lastname: string, age: number, email: string, password: string) {
    const hashedPassword = await argon2.hash(password)

    try{
        await prisma.user.create({
            data: {
                firstname: firstname,
                lastname: lastname,
                age: age,
                email: email,
                password: hashedPassword
            }
        })
        return true
    }catch(e){
        return e
    }
}