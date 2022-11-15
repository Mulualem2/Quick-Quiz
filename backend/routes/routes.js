const express = require('express')
const router = express.Router()

router.use('/login', require('./login'))
router.use('/signup', require('./signup'))

module.exports = router