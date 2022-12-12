const router = require('express').Router()
const {addQuiz} = require('../controllers/myQuiz')

// router.post('/', signup)
router.post('/add', addQuiz)
// router.post('/edit/:id', signup)
// router.post('/delete/:id', signup)

module.exports = router