var users = require('../../controller/user/users')
var email = require('../../gateway/email')

const DEBUG = true;

module.exports = function (app) {
    /**
     * @Regiseter new user
     */
    app.post('/api/user', (req, res) => {
        users.register(req, res)
    })

    /**
     * @get all user
     */
    app.get('/api/users', (req, res) => {
        users.getAll(req, res)
    })

    /**
     * @get user by id
     */
    app.get('/api/user/:id', (req, res) => {
        users.getById(req, res)
    })

    /**
     * @update user by id
     */
    app.put('/api/user/:id', (req, res) => {
        users.updateById(req, res)
    })

    /**
     * @delete user by id
     */
    app.delete('/api/user/:id', (req, res) => {
        users.deleteById(req, res)
    })

    /**
     * @send new action code to user
     */
    app.get('/api/user/activateCode/email/:id', (req, res) => {
        email.sendMail(req, res)
    })

    /**
     * @ativate user
     */
    app.get("/api/user/activate/:id/:code", (req, res) => {
        users.activateById(req, res)
    })

    /**
     * @login user
     */
    app.post("/api/user/login", (req, res) => {
        users.login(req, res)
    })

    /**
     * @request *forgot pass*
     */
    app.post("/api/user/requestForgotPassword", (req, res) => {
        users.requestForgotPassword(req, res)
    })

    /**
     * @reset password
     */
    app.post("/api/user/resetPassword/:id", (req, res) => {
        users.resetPassword(req, res)
    })

// LOGIN
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

	app.post('/api/doRegister', (req, res) => {
		users.registerUserPassword(req, res)
	})

	app.post('/api/doLogin', (req, res) => {
		users.loginWithUserPassword(req, res)
	})

	app.post('/api/doLogout', (req, res) => {
		users.logout(req, res)
	})

	app.post('/api/forgotPassword/:id', (req, res) => {
		users.createAndMailForgottenPasscode(req, res) 
	})

	app.post('/api/changeForgottenPassword/:id', (req, res) => {
		users.changeForgottenPassword(req, res)
	})

	app.post('/api/changePassword/:id', (req, res) => {
		users.changePassword(req, res)
	})
}
