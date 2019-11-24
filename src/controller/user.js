const resultServices = require('../services/result')
const questionServices = require('../services/questions')
const mail = require('../helper/email')
const appRoot = require('app-root-path');
const ejs = require('ejs');


const userEntery = async (req, res) => {
	try {
		res.render('welcome')
	} catch (error) {
		return res.render( 'errorLog', {error: 'Unable to coonect' })
	}
}

const userResponse = async (req, res) => {
	const { email } = req.body
	let userAnswers = 0
	let count = 0

	try {
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
	
		const template = await ejs.renderFile(`${appRoot}/views/mail.ejs`,{ email, userAnswers, count });
	
		await mail.sendMail(email, template, "Test result")
	
		res.render('result', { email, userAnswers, count })

	} catch (error) {
		return res.render('errorLog', { error: 'Unable to submit' })
	}
}

const resultChecker = async (req, res) => {
	try {
		res.render('resultChecker')
	} catch (error) {
		return res.render('errorLog', { error: 'Could not access result checker' })
	}
}


const userResult = async (req, res) => {
	const { email } = req.body

	try {
		const result = await resultServices.findResult(email)
		if (!result) {
			return res.render('errorLog', { error: 'User does not exist' })
		}

		res.render('userResults', { result, email })

	} catch (error) {
		return res.render('errorLog', { error: 'Uanble to fetch result' })
	}
}


module.exports = {
	userEntery,
	userResponse,
	resultChecker,
	userResult
}