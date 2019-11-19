const express = require('express')

const router = express.Router()
const userController = require('./../controller/user')

router.get('/user/registration/entry', userController.userEntery)

router.post('/view/results', userController.userResult)

router.get('/result/checker', userController.resultChecker)

router.post('/club/answers', userController.userResponse)

module.exports = router

