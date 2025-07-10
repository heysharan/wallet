// import { NextRequest, NextResponse } from "next/server";
// import argon2 from 'argon2'
// import prisma from '@repo/db/src/index'

// export const POST = async (req: NextRequest, res: NextResponse) => {
//     const { firstname, lastname, age, email, password } = await req.json()

//     const hashedPassword = await argon2.hash(password)

//     try{
//         await prisma.user.create({
//             data: {
//                 firstname: firstname,
//                 lastname: lastname,
//                 age: age,
//                 email: email,
//                 password: hashedPassword
//             }
//         })

//         return NextResponse.json({
//             message: "You have Signed Up!"
//         })
//     }catch(e){
//         return NextResponse.json({
//             error: e
//         })
//     }
// }

import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../../lib/auth"
import { NextResponse } from "next/server";

export const GET = async () => {
    const session = await getServerSession(NEXT_AUTH);
    if(session?.user){
        return NextResponse.json({
            user: session?.user
        })
    }
    return NextResponse.json({
        message: "You are not logged in"
    }, {
        status: 403
    })
}