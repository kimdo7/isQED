var logins = require('../../controller/user/logins')
const DEBUG = true;

module.exports = function (app) {
	if (DEBUG) {
		app.post('/api/login', (req, res) => {
		 	logins.create(req, res)
		})

		app.get('/api/login', (req, res) => {
			logins.getAll(req, res)
		})


		app.get('/api/login/:id', (req, res) => {
			logins.getById(req, res)
		})

		app.get('/api/login/name/:username', (req, res) => {
			logins.getByUserName(req, res)
		})

		app.put('/api/login/:id', (req, res) => {
			logins.updateById(req, res)
		})

		app.delete('/api/login/:id', (req, res) => {
			logins.deleteById(req, res)
		})
	}

	app.post('/api/doRegister', (req, res) => {
        logins.registerUserPassword(req, res)
	})
	
	app.post('/api/doLogin', (req, res) => {
		logins.loginWithUserPassword(req, res)
	})

	app.post('/api/doLogout', (req, res) => {
		logins.logout(req, res)
	})

	app.post('/api/forgotPassword/:id', (req, res) => {
        logins.createAndMailForgottenPasscode(req, res) 
	})
	
	app.post('/api/changeForgottenPassword/:id', (req, res) => {
        logins.changeForgottenPassword(req, res)
	})
	
	app.post('/api/changePassword/:id', (req, res) => {
		logins.changePassword(req, res)
	})
}

/**
 * @PostmanTestCases
 * 
 * Get	localhost:8000/api/login
 * 
 * 
 * 
 * 
 * 
 * 
 */