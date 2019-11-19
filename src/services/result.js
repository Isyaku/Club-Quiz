const resultModel = require('./../models/result')

const saveResult = data => resultModel.create(data)

const findResult = email => resultModel.find({email})


module.exports = {
	saveResult,
	findResult
}
