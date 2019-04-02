var logins = require('../../controller/user/logins')
var email = require('../../gateway/email')

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

	app.post('/api/login', (req, res) => {
		logins.loginWithUserPass(req, res)
    })


	app.get('/api/login/email/:id', (req, res) => {
		logins.getLoginEmail(req, res)
    })
    
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
    
	app.post('/api/login/changePassword/:id', (req, res) => {
		logins.changePassword(req, res)
    })
    
    /**
     * @ativate user
     */
    app.get("/api/login/activate/:id/:code", (req, res) => {
        logins.activateById(req, res)
    })

    /**
     * @request *forgot password*
     */
    app.post("/api/login/requestForgotPassword", (req, res) => {
        logins.requestForgotPassword(req, res)
    })

    /**
     * @reset password
     */
    app.post("/api/user/resetPassword/:id", (req, res) => {
        logins.resetPassword(req, res)
    })

    /**
     * @send new action code to user
     */
    app.get('/api/login/activateCode/email/:id', (req, res) => {
        email.sendMail(req, res)
    })
}
