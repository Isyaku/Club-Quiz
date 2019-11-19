const mongoose = require('mongoose')

const { Schema } = mongoose
const Users = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password:{
		type: String,
		required: true,
		unique: true
	}
})

module.exports = mongoose.model('Users', Users)