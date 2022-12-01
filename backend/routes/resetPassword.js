const router = require('express').Router()
const { resetPassword } = require('../controllers/resetPassword')
const { rePassword } = require('../controllers/rePassword')

router.get('/:id/:token', resetPassword)
router.post('/:id/:token', rePassword)

module.exports = router