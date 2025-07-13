import express from 'express'
import prisma from '@repo/db/src/index'

const app = express();

app.get('/hdfcwebhook', async (req, res) => {
    
    const { token, userId, amount } = req.body

    try{
         await prisma.$transaction( async (tx) => { 
            await tx.balance.updateMany({
                where: {
                    userId: userId
                },
                data: {
                    amount: {
                        increment: amount
                    }
                }
            })

            await tx.onRampTransaction.updateMany({
                where: {
                    token: token
                },
                data: {
                    status: "Success"
                }
            })

            res.json({
                message: "Captured"
            })
         })

    }catch(e){
        console.log(e)
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }
})

app.listen(3002, () => {
    console.log(`Server running on PORT 3002`)
})