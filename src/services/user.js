const userModel = require('./../models/user')

const creatUser= data => userModel.create(data)


module.exports = {
	creatUser
}
