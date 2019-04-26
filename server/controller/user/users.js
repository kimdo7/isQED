var mongoose = require('mongoose')
var User = mongoose.model('User')
var Login = mongoose.model('Login')
var emailGateway = require("../../gateway/email")

/**
 * @DEBUG 
 * Instead of console.log, use logd("Hello World"), or format parameters like logd("Hello %s", "world")
 *  - To see this output, you have to pass it into nodemon when you run it:
 *          In isQED directory, run "DEBUG=QEDlog nodemon server.js" 
 *  - To shut off logs, just run nodemon normally:
 *          In isQED directory, run "nodemon.server.js" (this shuts off logs)
 */
const logd = require('debug')('QEDlog')

module.exports = {
	/**
	 * @Get *ALL* users
	 */
    debugGetAll: (req, res) => {
        User.find({}, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
                return
            }
            res.json({ message: 'Success', data: data })
        })
    },

    /**
	 * @Create a *new* user
	 */
    register: (req, res) => {
        /**
         * @Validation of password
         * @PasswordStrength 
            * *At least 8 characters in length*
            * *Lowercase letters*
            * *Uppercase letters*
            * *Numbers*
            * *Special characters*
         */
        var regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9].{7,}/;
        logd("register")

        if (!req.body.password.match(regex)) {
            res.json({ message: 'Error', error: "Password must be 8 or more characters. Must have least one A-Z, one a-z, one 0-9'" })
            return
        }
        if (!req.body.email || req.body.email.length < 5) {
            res.json({ message: 'Error', error: "Email is not long enough" })
            return
        }
        if (!req.body.first_name) {
            res.json({ message: 'Error', error: "First name is missing" })
            return
        }
        if (!req.body.last_name) {
            res.json({ message: 'Error', error: "Last name is missing" })
            return
        }

        /**
         * @Create Login first.
         */
        var newLogin = new Login({
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            type: 9,
        })

        var password = req.body.password
        if (!newLogin.setPassword(password)) {
            logd("register: bad password")
            // Password is no good. Let's give the best error we can
            if (!newLogin.isValidPassword(password)) {
                res.json({ message: 'Error', error: "Password must be 8 or more characters. Must have least one A-Z, one a-z, one 0-9'" })
                return
            }

            if (!newLogin.isStrongPassword(password)) {
                res.json({ message: 'Error', error: "Password isn't strong enough. Try to make it more random." })
                return
            }

            res.json({ message: 'Error', error: "Password isn't set" })
            return
        }

        if (!newLogin.passwordMatchesHash(req.body.password)) {
            logd("register: setPassword doesn't match hash")
            res.json({ message: 'Error', error: "Internal server error with password" })
            return
        }
        if (!newLogin.isSameEmail(req.body.email)) {
            logd("register: email doesn't match")
            res.json({ message: 'Error', error: "Internal server error with email" })
            return
        }
        newLogin.save((err, savedLogin) => {
            if (!savedLogin) {
                if (err && err.code === 11000) {
                    // If there is a Login and no User, we can create the User
                    // This is useful in development when our DB is messed up
                    logd("register: login already exists. does user?")
                    User.findOne({ email: req.body.email }, (err2, existingUser) => {
                        if (!existingUser) {
                            // There is a Login with no user.
                            // We can hit this when there is a bug
                            // For now we will DELETE the Login. DANGEROUS DEBUG ONLY
                            logd("register: No existing user record. Cleaning up prior failed login record")
                            Login.findOneAndDelete({ email: req.body.email }, (err3, existingLogin) => {
                                // Deleted!
                                logd("register: didn't find a login user " + err + " then " + err2 + " then " + err3)
                                res.json({ message: 'Error', error: "Error on server, please click register once more" })
                                return
                            })
                            return
                        }
                        logd("register: There is already an existing login and user")
                        res.json({ message: 'Error', error: "Email is already registered", errorDetail: err })
                    })
                    return
                }

                logd("register: couldn't save");
                res.json({ message: 'Error', error: "Password must be 8 characters or more", errorDetail: err })
                return
            }

            /** 
             * We saved the login. 
             * Now @Create new user
             */
            User.create(
                {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    loginId: savedLogin.id,
                },
                (err, newUser) => {
                    logd("register: saved user: (error %o)", err)

                    if (err && err.code === 11000) {
                        // If there was no Login but an existing User record
                        // Let's delete the old user record
                        logd("register: Login is new, but old user already exists. Clean up the prior user record")
                        User.findOneAndDelete({ email: req.body.email }, (err2, existingUser) => {
                            if (!existingUser) {
                                logd("register: Failed to clean up prior user record")
                                return
                            }
                            logd("register: Cleaned up prior user record")
                        })
                        res.json({ message: 'Error', error: "Registration error. Please click register again." })
                        return
                    } else if (err) {
                        res.json({ message: 'Error', error: err })
                        return
                    }
                    if (!newLogin.isSameEmail(newUser.email)) {
                        res.json({ message: 'Error', error: "Internal server error with user email" })
                        return
                    }

                    // Success!
                    logd("register: success")

                    // Log in the user, send them activation mail
                    req.session.last_stage = 'registered'
                    req.session.login_id = savedLogin.id;
                    req.session.save()
                    emailGateway.sendActivation(savedLogin.id, (sendErr) => {
                        if (sendErr) {
                            // we weren't able to send the email
                            // but we were able to create the user
                            // pretend that we sent them the email
                            // they can always click the button on the activation form to resend
                            // SO DO NOTHING HERE!
                        }
                    })
                    // server responds with LoginInfo
                    // Before when we were doing a register, we weren't telling the front end enough info.
                    // Now we make sure the client has more to show. See LoginInfo in login.service.ts
                    res.json({ message: 'Success', data: {
                            login_id: newUser.loginId,
                            email: savedLogin.email,
                            isEmailVerified: savedLogin.isEmailVerified,
                            isSignedIn: savedLogin.id? true: false,
                            state: "Registered",
                    }})
                }
            )
        });
    },

	/**
	 * @GET USER BY *ID*
	 */
    getByLoginId: (req, res) => {
        var login_id = req.params.id
        console.log("here" + login_id)
        User.find({loginId: login_id}, function (err, data) {
            if (err || data.length  == 0) {
                res.json({ message: 'Error', error: err })
                return
            }

            res.json({ message: 'Success', data: data [0]})
        })
    },

	/**
	 * @UPDATE *USER WITH ID*
	 */
    updateById: (req, res) => {
        var id = req.params.id
        var update = req.body
        User.findByIdAndUpdate(id, update, { $set: req.body }, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
                return
            }
            res.json({ message: 'Success', data: data })
        })
    },

	/**
	 * @DELETE *USER* BY *ID*
     * @DELETE *Login* By loginId
	 */
    deleteById: (req, res) => {
        User.findByIdAndDelete(req.params.id, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
                return
            }

            if (data == null) {
                res.json({ message: 'Error', error: "id is invalid" })
                return
            }

            Login.findByIdAndDelete(data.loginId, function (err, data) {
                if (err) {
                    res.json({ message: 'Error', error: err })
                    return
                }
                res.json({ message: 'Success', data: data })
            })
        })
    },
}
