var logins = require('../../controller/user/logins')

module.exports = function (app) {
    app.get("/api/logins", (req, res) =>{
        logins.getAll(req, res)
    })

    /**
     * @Login the user, starting their session
     */
    app.post('/api/login', (req, res) => {
        logins.loginWithUserPassword(req, res)
    })

    /**
     * @Logout the user, removing their session
     * It is safe to call this even if they aren't logged in
     */
    app.post('/api/logout', (req, res) => {
        logins.logout(req, res)
    })

    /**
     * @Change password when signed in already
     * This requires the user to be logged in. They don't have to be isEmailVerified
     */
    app.post('/api/changePassword/:id', (req, res) => {
        logins.changePassword(req, res);
    })

    /**
     * @Get the email for the signed in user
     * This requires the user to be logged in.
     */
    app.get('/api/logininfo/:id', (req, res) => {
        logins.getLoginInfo(req, res)
    })

    /**
     * @Get the email for the signed in user (using the cookie)
     * This requires the user to be logged in.
     */
    app.get('/api/logininfo', (req, res) => {
        logins.getLoginInfo(req, res)
    })


    /**
     * @Activate a user (they got the email from registration)
     * This requires the user to be logged in but not isEmailVerified
     */
    app.post("/api/login/activate/email/:id", (req, res) => {
        logins.verifyEmailUsingActivationCode(req, res)
    })

    /**
     * @Send new activation code to user
     *  (Note the users.register already sends the first mail, this is to get a new one)
     * This requires the user to be logged in but not isEmailVerified
     */
    app.post("/api/login/requestActivationCode/email", (req, res) => {
        logins.requestMailForActivation(req, res)
    })

    /**
     * @Send new temp password to user
     * This sends a mail to the email address with a temp password.
     * This temp password will allow them to change their real password.
     * Of course, they don't have to be logged in. This will log them out if they are.
     */ 
    app.post("/api/login/requestForgotPassword", (req, res) => {
        logins.requestMailForForgottenPasscode(req, res)
    })

    /**
     * @Change password after forgetting
     * This takes the temp password that was emailed to the user
     * And allows them to change their real password to something new
     * This does NOT log them in, they have to do that as the next step.
     */
    app.post('/api/login/changePasswordForgot', (req, res) => {
        logins.changePasswordAfterForgetting(req, res)
    })

}
