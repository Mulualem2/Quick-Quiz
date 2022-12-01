const express = require('express')
const router = express.Router()

router.use('/login', require('./login'))
router.use('/signup', require('./signup'))
router.use('/forgotPassword', require('./forgotPassword'))
router.use('/resetPassword', require('./resetPassword'))

module.exports = router