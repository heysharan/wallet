import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Its working !"
    })
})

app.listen(3002, () => {
    console.log(`Server running on PORT 3002`)
})