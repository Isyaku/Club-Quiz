const mongoose = require('mongoose')

const { Schema } = mongoose
const Results = new Schema({
	email: {
		type: String,
		required: true
	},
	userAnswers: Number,
	count: Number,

})

module.exports = mongoose.model('ourResults', Results)