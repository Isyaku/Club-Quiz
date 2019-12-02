const questionServices = require('../services/questions')

const register = async (req, res) => {
	res.render('createQuestion', { response: '' })
}
const registerQuestion = async (req, res) => {
	let data = {
		question: req.body.question,
		option1: req.body.option1,
		option2: req.body.option2,
		option3: req.body.option3,
		answer: req.body.answer
	}
	try {

		if (!data.question) {
			return res.send({ error: 'Enter a question' })
		}

		if (!data.option1) {
			return res.send({ error: 'Enter option1' })
		}

		if (!data.option2) {
			return res.send({ error: 'Enter option2' })
		}

		if (!data.option3) {
			return res.send({ error: 'Enter option3' })
		}

		if (!data.answer) {
			return res.send({ error: 'Enter answer' })
		}

		await questionServices.creatQuestion(data)
		res.render('createQuestion', { response: 'You just added a question' })

	} catch (error) {
		return res.render('error', { error: 'Uanble to register question' })
	}
}

const getQuestions = async (req, res) => {
	const { email } = req.body

	try {
		const result = await questionServices.findQuestion({})
		res.render('questions', { result, email })

	} catch (error) {
		return res.render('errorLog', { error: 'Uanble to fetch questions' })
	}
}

module.exports = {
	register,
	registerQuestion,
	getQuestions
}