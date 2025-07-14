import prisma from "./index"
import argon2 from 'argon2';

async function main() {

    const [guhan, sunitha] = await prisma.$transaction(async (tx) => {
        const guhan = await tx.user.upsert({
            where: {
                email: 'hi@guhan.com'
            },
            update: {},
            create: {
                firstname: "Guhan",
                lastname: "C M",
                age: 18,
                email: "hi@guhan.com",
                password: await argon2.hash("Guhan"),
                onRampTransaction: {
                    create: {
                        startTime: new Date(),
                        status: "Success",
                        amount: 100000,
                        token: '246813579',
                        provider: "MNO Bank"
                    }
                }
            }
        })
        await tx.balance.upsert({
            where: {
                userId: Number(guhan.id)
            },
            update: {},
            create: {
                userId: Number(guhan.id),
                amount: 100000,
                locked: 0
            }
        })

        const sunitha = await tx.user.upsert({
            where: {
                email: 'hi@sunitha.com'
            },
            update: {},
            create: {
                firstname: "Sunitha",
                lastname: "M",
                age: 18,
                email: "hi@sunitha.com",
                password: await argon2.hash("Sunitha"),
                onRampTransaction: {
                    create: {
                        startTime: new Date(),
                        status: "Success",
                        amount: 500000,
                        token: '135798642',
                        provider: "MNO Bank"
                    }
                }
            }
        })


        await tx.balance.upsert({
            where: {
                userId: sunitha.id
            },
            update: {},
            create: {
                userId: Number(sunitha.id),
                amount: 500000,
                locked: 0
            }
        })
        return [guhan, sunitha]

    })
    
    console.log({ guhan, sunitha })
}

main().then(async () => { await prisma.$disconnect() }).catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1) })