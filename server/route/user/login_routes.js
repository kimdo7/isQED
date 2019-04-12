var logins = require('../../controller/user/logins')

const DEBUG = true;

module.exports = function (app) {
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
    app.get('/api/login/email/:id', (req, res) => {
        logins.getLoginEmail(req, res)
    })

    /**
     * @Activate a user (they got the email from registration)
     * This requires the user to be logged in but not isEmailVerified
     */
    app.get("/api/login/activate/:id/:code", (req, res) => {
        logins.activateById(req, res)
    })

    /**
     * @Send new activation code to user
     *  (Note the users.register already sends the first mail, this is to get a new one)
     * This requires the user to be logged in but not isEmailVerified
     */
    app.get("/api/login/activateCode/email/:id", (req, res) => {
        logins.sendMail(req, res)
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
    app.post('/api/changePassword/forgot', (req, res) => {
        logins.changePasswordAfterForgetting(req, res);
    })

    // DEBUG ONLY - don't use this in production!
    if (DEBUG) {
        app.get('/api/login', (req, res) => {
            logins.debugGetAll(req, res)
        })
        
        app.get('/api/login/:id', (req, res) => {
            logins.debugGetById(req, res)
        })
        
        app.put('/api/login/:id', (req, res) => {
            logins.debugUpdateById(req, res)
        })

        app.delete('/api/login/:id', (req, res) => {
            logins.debugDeleteById(req, res)
        })
    }
}
