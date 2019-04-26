var logins = require('../../controller/user/logins')

/**
 * We don't expose the raw database to end users.
 * Right now while we are debugging, it's OK to have the
 * user information available to anyone who isn't logged in.
 * But we NEVER want the DEBUG routes to go to production, 
 * because there is zero protection here to ensure users 
 * only get their own info.
 */
const DEBUG = true;

/**
 * @DEBUG 
 * Instead of console.log, use logd("Hello World"), or format parameters like logd("Hello %s", "world")
 *  - To see this output, you have to pass it into nodemon when you run it:
 *          In isQED directory, run "DEBUG=QEDlog nodemon server.js" 
 *  - To shut off logs, just run nodemon normally:
 *          In isQED directory, run "nodemon.server.js" (this shuts off logs)
 */
const logd = require('debug')('QEDlog')


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
