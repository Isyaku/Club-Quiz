const express = require('express')

const router = express.Router()
const questionController = require('./../controller/questions')

router.get('/enter/questions', questionController.register)

router.post('/register/question', questionController.registerQuestion)

router.post('/take/quiz', questionController.getQuestions)






module.exports = router
