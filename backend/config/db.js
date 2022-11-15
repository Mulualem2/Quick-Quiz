require('dotenv').config()
const mongoose = require('mongoose')

const uri = process.env.MONGODB_URI

mongoose.connect(uri)

module.exports = mongoose