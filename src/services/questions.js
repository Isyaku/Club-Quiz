const questionModel = require('../models/questions')

const creatQuestion = data => questionModel.create(data)
const findQuestion = () => questionModel.find()
const findOneQuestion = data => questionModel.findOne(data)

module.exports = {
	creatQuestion,
	findQuestion,
	findOneQuestion
}
