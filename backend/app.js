require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const routes = require('./routes/routes')
const mongoose = require('./config/db')

const app = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes)

app.listen(port, () => {
    mongoose.connection.once('open', () => {
        console.log('DB connected!!')
    })
    console.log(`Listening on http://localhost:${port}`)
})
