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

	app.post('/api/register', (req, res) => {
        // logins.registerUserPass(req, res)
        logins.register(req, res)
	})
	
	app.post('/api/login', (req, res) => {
		logins.loginWithUserPass(req, res)
	})

	app.post('/api/changePassword/:id', (req, res) => {
		logins.changePassword(req, res)
	})
}
