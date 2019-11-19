const mongoose = require('mongoose')

const { Schema } = mongoose
const Questions = new Schema({
	question: String,
	option1: String,
	option2: String,
	option3: String,
	answer: String
})

module.exports = mongoose.model('Questions', Questions)