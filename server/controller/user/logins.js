var mongoose = require('mongoose')
var Login = mongoose.model('Login')
var emailGateway = require("../../gateway/email")

module.exports = {
    /**
     * @return the log in email base on user request
     */
    getLoginInfo: (req, res) => {
       
    },

    /**
     * @Get *ALL* LOGINS
     * RETURNS EVERY PASSWORD HASH IN THE DATABASE!! DEBUGGING ONLY
     */
    getAll: (req, res) => {
        Login.find({}, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
                return
            }
            res.json({ message: 'Success', data: data })
        })
    },

	/**
	 * @GET LOGIN BY *ID*
	 * RETURNS PASSWORD HASH FOR ANY ID! DEBUGGING ONLY
	 */
    getById: (req, res) => {
        Login.findById(req.params.id, function (err, login) {
            if (err) {
                res.json({ message: 'Error', error: err })
                return
            }

            if (!login || login.id !== req.params.id || !login.email || !login.passwordHash) {
                res.json({ message: 'Error', error: "bad login record" })
                return
            }
            res.json({ message: 'Success', data: login })
        })
    },

	/**
	 * @UPDATE *LOGIN WITH ID*
	 * ALLOWS SETTING PASSWORD HASH FOR ANY ID! DEBUGGING ONLY
	 */
    debugUpdateById: (req, res) => {
    },

    /**
     * @activate account by id
     * *Confirm* with the *activation code*
     * @param req Request from frontend {params.id, body.code, session.login_id}
     * @param res Response back to frontend {message: 'Error', error} or {message: 'Success', data}
     */
    verifyEmailUsingActivationCode: (req, res) => {
    },

    /**
     * @LOGOUT of *Login Session* (not being used yet. why?)
     */
    logout: (req, res) => {
    },

    /**
     * @changePassword
     * To do change password stuff
     * - to change the password, you have to know the old password
     * - and the email, and the id
     */
    changePassword: (req, res) => {
    },

    /**
     * @requestMailForActivation
     */
    requestMailForActivation: (req, res) => {
    },

    /**
     * @requestMailForForgottenPasscode
     */
    requestMailForForgottenPasscode: (req, res) => {

    },


    /**
     * Login the user
     * @param req this request must have a body.email that already exists as a user,
     *            and body.password or body.passwordHash (this lets you hash in the Angular code or on the server)
     *            The req must also have a session, and this function sets session.login_id and session.last_stage.
     * @param res this response is used to send res.json
     */
    loginWithUserPassword: (req, res) => {
        
    }
}