const express = require('express')
const user = require('./user')
const questions = require('./questions')


const router = express.Router()
// All your parent route link should be in this file
// Create your route file in the routes folder and link your file here
/**
 * e.g const userRoute = require('./userRoute');
 *     router.use("/user", userRoute)
 */

router.use('/api/v1/', user)
router.use('/api/v1/', questions)

module.exports = router
