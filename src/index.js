const express = require('express')
require('../src/db/mongoose')
const userRouter = require('../src/routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)

app.get('/', (req, res) => {
    res.status(200).send('Hello')
})

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`)
})