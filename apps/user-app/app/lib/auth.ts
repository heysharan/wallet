import prisma from "@repo/db/src";
import CredentialsProvider from "next-auth/providers/credentials"
import argon2 from 'argon2';
import { JWT } from 'next-auth/jwt'
import { Session } from 'next-auth'

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: {
                    type: "text",
                },
                password: {
                    type: "password"
                },
            },
            async authorize(credentials, req) {
                const email = credentials?.email;
                const password = credentials?.password;

                const response = await prisma.user.findFirst({
                    where: {
                        email: email
                    }
                });

                type StrictUser = {
                    id: string
                    name: string
                    email: string
                    age: number
                };

                if (!response || !response.id || !response.email || !response.age) {
                    throw new Error("Invalid User")
                }

                const strictUser: StrictUser = {
                    id: response.id.toString(),
                    email: response.email,
                    name: response.firstname,
                    age: response.age
                }

                const verifiedUser = await argon2.verify(response?.password!, password!)

                if (!verifiedUser) return null;

                return strictUser;
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callback: {
        async session({ token, session }: {token: JWT, session: Session}) {
            if(token.sub && session.user){
            session.user.id = token.sub
            }
            return session
        }
    },
    pages: {
        signIn: '/signin'
    }
}