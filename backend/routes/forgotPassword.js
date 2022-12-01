const router = require('express').Router()
const { forgotPassword } = require('../controllers/forgotPassword')

router.post('/', forgotPassword)

module.exports = router