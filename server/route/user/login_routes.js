var users = require('../../controller/user/users')
const DEBUG = true;

module.exports = function (app) {
	if (DEBUG) {
		app.post('/api/login', (req, res) => {
			users.create(req, res)
		})

		app.get('/api/login', (req, res) => {
			users.getAll(req, res)
		})

		app.get('/api/login/:id', (req, res) => {
			users.getById(req, res)
		})

		app.get('/api/login/name/:username', (req, res) => {
			users.getByUserName(req, res)
		})

		app.put('/api/login/:id', (req, res) => {
			users.updateById(req, res)
		})

		app.delete('/api/login/:id', (req, res) => {
			users.deleteById(req, res)
		})
	}

	app.post('/api/register', (req, res) => {
		users.registerUserPass(req, res)
	})

	app.post('/api/login', (req, res) => {
		users.loginWithUserPass(req, res)
	})

	app.post('/api/changePassword', (req, res) => {
		users.changePass(req, res)
	})
}
