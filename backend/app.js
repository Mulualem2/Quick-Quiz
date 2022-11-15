require('dotenv').config()
const express = require('express')
const cors = require('cors')

const routes = require('./routes/routes')
const mongoose = require('./config/db')

const app = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/', routes)

app.listen(port, () => {
    mongoose.connection.once('open', () => {
        console.log('DB connected!!')
    })
    console.log(`Listening on http://localhost:${port}`)
})
