const resultServices = require('../services/result')
const questionServices = require('../services/questions')

const userEntery = async (req, res) => {
	try {
		res.render('welcome')
	} catch (error) {
		return res.render( 'error', {error: 'Unable to coonect' })
	}
}

const userResponse = async (req, res) => {
	const { email } = req.body
	let userAnswers = 0
	let count = 0

	for (let key in req.body) {
		if (key === 'email') {
			continue
		}
		const data = { _id: key }

		count += 1

		const result = await questionServices.findOneQuestion(data)

		if (req.body[key] === result.answer) {
			userAnswers += 1
		}
	}

	let resultData = {
		userAnswers, count, email
	}

	await resultServices.saveResult(resultData)

	res.render('result', { email, userAnswers, count })
}

const resultChecker = async (req, res) => {
	try {
		res.render('resultChecker')
	} catch (error) {
		return res.render('error', { error: 'Could not access result checker' })
	}
}


const userResult = async (req, res) => {
	const { email } = req.body

	try {
		const result = await resultServices.findResult(email)
		if (!result.length) {
			return res.render('error', { error: 'User does not exist' })
		}

		res.render('userResults', { result, email })

	} catch (error) {
		return res.render('error', { error: 'Uanble to fetch result' })
	}
}


module.exports = {
	userEntery,
	userResponse,
	resultChecker,
	userResult
}