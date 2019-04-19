var mongoose = require('mongoose')
var Login = mongoose.model('Login')
var User = mongoose.model('User')
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
const DEBUG_DONT_SEND_EMAIL = false; // Set this to false to use the gateway.


/**
 * Like findById, but only gives back the login if it is currently signed in
 * @param {{session}} req The request from the client, used to check the session to see who is logged in
 * @param {string} login_id The ID that the user claims to be (usually in the URL), this has to match the session
 * @param {callback} next After the ID is looked up, this is called with (err, login) just like findById would
 */
var findByIdIfSignedIn = (req, login_id, next) => {
    // If they have a session, they are signed in
    var signed_in_login_id = req.session.login_id;
    logd("session: %o", req.session)

    if (!signed_in_login_id) {
        next("User is not logged in", null)
        return
    }

    // But the point of this function is to ensure that the login still
    // exists and matches the one that you expect (that was passed in)
    Login.findById(login_id, function (err, login) {
        if (err) {
            // We couldn't search the database, or it wasn't found
            next("Login not found", null)
            return
        } else if (!login || login.id !== login_id) {
            // We didn't have an error, but we didn't find the login (or the record is bad)
            next("Bad login record", null)
            return
        }

        // We do a === because it will only match if the string is the same
        // and will return false if one is undefined
        if (login.id === signed_in_login_id) {
            // We didn't have any error
            // And the signed in user is still in the DB
            next(null, login)
        } else {
            // We found a login, but that's not the one in the session!
            // Something bad is happening, don't say it's signed in
            logd("isSignedIn: expected " + login_id + " but session had " + signed_in_login_id)
            next("Wrong user login", null)
        }
    })
};

module.exports = {
    /**
     * @Get *ALL* LOGINS
     * RETURNS EVERY PASSWORD HASH IN THE DATABASE!! DEBUGGING ONLY
     */
    debugGetAll: (req, res) => {
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
    debugGetById: (req, res) => {
        Login.findById(req.params.id, function (err, login) {
            if (err) {
                res.json({ message: 'Error', error: err })
                return
            }
            if (!login || login.id !== req.params.id || !login.email || !login.passwordHash) {
                res.json({ message: 'Error', error: "bad login record", data: login })
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
        logd(req.body)
        var update = req.body
        Login.findByIdAndUpdate(req.params.id, update, { $set: req.body }, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
                return
            }
            res.json({ message: 'Success', data: data })
        })
    },

	/**
	 * @DELETE LOGIN BY *ID*
	 * ALLOWS MAKING ANY USER LOGIN GO AWAY. SHOULD MAKE THIS HARD TO DO
     * DEBUG ONLY
	 */
    debugDeleteById: (req, res) => {
        var id = req.params.id
        Login.findByIdAndDelete(id, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
                return
            }
            res.json({ message: 'Success', data: data })
        })
    },


    /**
     * @activate account by id
     * *Confirm* with the *activation code*
     */
    activateById: (req, res) => {
        logd("activateById")
        if (!req.params.id) {
            res.json({ message: 'Error', error: "Missing id" })
            return
        }
        if (!req.body.code) {
            res.json({ message: 'Error', error: "Missing code" })
            return
        }
        logd("activateById: About to find signed in ID " + req.params.id)
        findByIdIfSignedIn(req, req.params.id, (err, login) => {
            if (err && err == "User is not logged in") {
                res.json({ message: 'Error', error: "You need to sign in", errorDetail: err, signInNeeded: true })
                return
            } else if (err || !login) {
                logd("login can't be an error or null")
                res.json({ message: 'Error', error: "You need to sign in", errorDetail: err })
                return
            }

            // If we are signed in, now check the activation
            logd("activateById: compare request " + req.body.code + " to " + login["tempActivationCode"])
            if (req.body.code === "" + login.tempActivationCode) {
                login.isEmailVerified = true
                login.save()
                res.json({
                    message: 'Success', data: {
                        login_id: login.id,
                        email: login.email,
                        isEmailVerified: login.isEmailVerified
                    }
                })
            } else {
                res.json({ message: 'Error', error: "Wrong activation code" })
                return
            }

        })
    },

    /**
     * @LOGOUT of *Login Session* (not being used yet. why?)
     */
    logout: (req, res) => {
        logd("logout");
        // This is from the login
        req.session.last_stage = 'logout'
        req.session.login_id = null;
        res.json({ message: 'Success', data: 'Logged out' });
    },

    /**
     * @changePassword
     * To do change password stuff
     * - to change the password, you have to know the old password
     * - and the email, and the id
     */
    changePassword: (req, res) => {
        var id = req.params.id;
        var email = req.body.email;
        var newPassword = req.body.newPassword;
        var oldPassword = req.body.oldPassword;

        logd('Running changePassword...')

        if (!email) {
            logd("changePassword email is null or empty");
            res.json({ message: 'Error', error: "missing email" });
            return;
        }

        if (!id) {
            logd("changePassword id is null or empty");
            res.json({ message: 'Error', error: "missing id in URL" });
        }

        if (!oldPassword) {
            logd("changePassword oldPassword is null or empty");
            res.json({ message: 'Error', error: "missing oldPassword" });
            return;
        }

        if (!newPassword) {
            logd("changePassword newPassword is null or empty");
            res.json({ message: 'Error', error: "missing newPassword" });
            return;
        }

        /**
         * @Validate new password is good enought? That happens in setPassword
         */

        // 1. The login user has to exist if we want to change a password
        findByIdIfSignedIn(req, id, function (err, login) {
            if (err) {
                logd("changePassword can't find email + id");
                res.json({ message: 'Error', error: err });
                return;
            }

            if (!login || !login.id || !login.isSameEmail(email) || !login.passwordHash) {
                logd("changePassword has bad login user record");
                res.json({ message: 'Error', error: "bad login user record" });
                return;
            }

            // 2. the login user exists, lets make sure the login user knows the old password
            if (!login.passwordMatchesHash(oldPassword)) {
                res.json({ message: 'Error', error: "old password didn't match " });
                return;
            }

            // 3. Now change the password
            if (!login.setPassword(newPassword)) { // this generates the hash
                res.json({ message: 'Error', error: "new password is not strong enough" });
                return;
            }
            if (!login.passwordMatchesHash(newPassword)) {
                res.json({ message: 'Error', error: "internal error setting password" });
                return;
            }

            login.save(function (err, save_data) {
                if (err) {
                    res.json({ message: 'Error', error: "failed to save updated password" });
                    return;
                }

                if (!save_data) {
                    res.json({ message: 'Error', error: "save didn't return data" });
                    return;
                }

                // 4. Success! The login user should really have to re-login to ensure the password worked. 
                //          We shouldn't let the login user stay logged in with the old password on any
                //          other browser either. How?
                req.session.last_stage = 'changePassword'
                req.session.login_id = null;
                res.json({ message: 'Success', data: "yay" }); // not sure we should return the password hash
            });
        })
    },


    /**
     * @requestMailForActivation
     */
    requestMailForActivation: (req, res) => {

        if (!req.session) {
            res.json({ message: 'Error', error: "You need to be signed in" })
            return;
        }

        if (!req.body.id) {
            res.json({ message: 'Error', error: "No id given" })
            return;
        }

        if (req.body.id !== req.session.login_id) {
            res.json({ message: 'Error', error: "ID is not logeed in" })
            return;
        }

        emailGateway.sendActivation(req.session.login_id, (err) => {
            if (err) {
                res.json({ message: 'Error', error: "A mail couldn't be sent", errorDetail: err })
                return;
            }

            res.json({ message: 'Success', data: "yay" });
        })
    },

    /**
     * @requestMailForForgottenPasscode
     */
    requestMailForForgottenPasscode: (req, res) => {
        var email = req.body.email;
        var tempPasscode = null;

        // Don't allow the user to stay logged in if they forgot.
        // We may want to change this later but it means more testings
        req.session.last_stage = 'forgotPassword'
        req.session.login_id = null;
        req.session.save()

        if (!email) {
            logd("requestMailForForgottenPasscode email is null or empty");
            res.json({ message: 'Error', error: "missing email" });
            return
        }

        // 1. The login user has to exist if we want to change a password
        Login.findOne({ email: email }, function (findErr, login) {
            if (findErr) {
                res.json({ message: 'Error', error: "Failed to find login user" })
                logd("requestMailForForgottenPasscode failed to find login user for: " + id + " : " + email + " -- " + findErr)
                return
            } else if (!login) {
                res.json({ message: 'Error', error: "Failed to find login user" });
                logd("requestMailForForgottenPasscode no login user object for: " + email)
                return;
            }
            if (!login.passwordHash) {
                res.json({ message: 'Error', error: "Failed to find login user" });
                logd("requestMailForForgottenPasscode login user has no hash: " + id + " : " + email);
                return;
            }
            if (!login.isSameEmail(email)) {
                res.json({ message: 'Error', error: "Failed to find login user" });
                logd("requestMailForForgottenPasscode login user email doesn't match");
                return;
            }

            // 2. the login user exists, lets make sure the login user knows the forgotten password code
            tempPasscode = login.createTempForgottenPassword();
            // passcode doesn't work unless we save it
            login.save(function (err, savedUser) {
                if (err) {
                    logd("requestMailForForgottenPasscode could not save the new temp passcode. Wont' take effect.");
                    res.json({ message: 'Error', error: err })
                    return
                }
                if (!tempPasscode) {
                    logd("requestMailForForgottenPasscode did not create a temp passcode.");
                    res.json({ message: 'Error', error: "Could not generate temp passcode" })
                    return
                }
                if (DEBUG_DONT_SEND_EMAIL) {
                    // Normally in production we would send email
                    // But we are debugging and want to avoid that
                    // So instead just log the temp passcode
                    logd("requestMailForForgottenPasscode DEBUG not sending email, would have sent to %s the temp passcode %s", email, tempPasscode);
                    res.json({ message: 'Success', error: "Passcode was generated, DEBUG success" })
                    return
                }

                // we should send the email from here
                emailGateway.sendTempPassword(login.id, tempPasscode, function (err, success) {
                    if (err) {
                        res.json({ message: 'Error', error: "Could not send mail for forgotten passcode" });

                        // Clean up since the temppasscode can never be used
                        savedUser.invalidateTempForgot();
                        savedUser.save(function (err, secondSavedUser) {
                            if (err) {
                                logd("requestMailForForgottenPasscode could not save the invalidateTempForgot after an error");
                                // already sent a respons
                            } else if (!secondSavedUser) {
                                logd("requestMailForForgottenPasscode got a null without an err when trying to save invalidateTempForgot after an error");
                                // already sent a response
                            } else {
                                // Succeeded to invalidate the temp passcode
                                // but it still was an error sending the mail
                                // already sent a response
                            }
                        });
                        return
                    } else if (!success) { // shouldn't happen
                        res.json({ message: 'Error', error: "Internal server error sending mail" })
                        return
                    }

                    res.json({ message: 'Success', data: { info: "Passcode was generated, please check mail" } })
                });
            });
        });
    },

    changePasswordAfterForgetting: (req, res) => {
        // do change password stuff
        // - to change the password you have to know the temp password
        // - and the email
        var email = req.body.email
        var tempPassword = req.body.tempPassword;
        var newPassword = req.body.newPassword

        logd('changePasswordAfterForgetting...')

        if (!email) {
            logd("changePasswordAfterForgetting email is null or empty");
            res.json({ message: 'Error', error: "missing email" });
            return
        }
        if (!tempPassword) {
            logd("changePasswordAfterForgetting tempPassword is null or empty");
            res.json({ message: 'Error', error: "missing tempPassword" });
            return
        }
        if (!newPassword) {
            logd("changePasswordAfterForgetting newPassword is null or empty");
            res.json({ message: 'Error', error: "missing newPassword" })
            return
        }


        // Validate new password is good enough? That happens in setPassword

        // 1. The login user has to exist if we want to change a password
        Login.findOne({ email: email }, (err, login) => {
            if (err) {
                res.json({ message: 'Error', error: err })
                return
            }
            if (!login || !login.id || !login.isSameEmail(email) || !login.passwordHash) {
                res.json({ message: 'Error', error: "Bad login user record" })
                return
            }

            // 2. the login User exists, l
            //    make sure the user knows the temp password
            if (!login.forgottenPasswordCodeIsValid(tempPassword)) { // security gate
                // we need to save because an attempt was made
                login.save(function (err, savedAttempt) {
                    if (err) {
                        // this is bad, someone got a free attempt
                        logd("ERROR: changePasswordAfterForgetting attempt was made but couldn't save after invalid code")
                        return
                    }

                    logd("changePasswordAfterForgetting saved updated attempt count");
                });
                res.json({ message: 'Error', error: "tempPassword is invalid" });
                return
            }

            // 3. They got the temp password correct.
            //    Now change to the new password they wanted
            if (!login.setPassword(newPassword)) { // this generates the hash
                logd("changePasswordAfterForgetting newPassword is not valid");
                res.json({ message: 'Error', error: "new password is not strong enough" });
                return
            } else if (!login.passwordMatchesHash(newPassword)) {
                logd("changePasswordAfterForgetting newPassword cannot validate hash");
                res.json({ message: 'Error', error: "internal error setting password" });
                return
            }

            // 4. Save the password to the database
            login.save((err, save_data) => {
                if (err) {
                    logd("changePasswordAfterForgetting save failed: " + err);
                    res.json({ message: 'Error', error: "Failed to save updated password" });
                    return
                }
                if (!save_data) {
                    logd("changePasswordAfterForgetting save didn't work properly"); // should never happen
                    res.json({ message: 'Error', error: "Failed to update password" });
                    return
                }

                // Success! The login user should really have to re-login to ensure the password worked
                // We shouldn't let the login user stay logged in with the old password on any other brother. How?
                req.session.last_stage = 'changePasswordAfterForgetting'
                req.session.login_id = null;
                res.json({ message: 'Success', data: { login_id: save_data.id } });
            })
        })
    },

    /**
     * Login the user
     * @param req this request must have a body.email that already exists as a user,
     *            and body.password or body.passwordHash (this lets you hash in the Angular code or on the server)
     *            The req must also have a session, and this function sets session.login_id and session.last_stage.
     * @param res this response is used to send res.json
     */
    loginWithUserPassword: (req, res) => {
        console.log(req.body.email);
        console.log(req.body.password);
        // This is given by the end user
        var email = req.body.email;
        var givenPassword = req.body.password;
        var givenPasswordHash = req.body.passwordHash; // The client could instead send us the hashed password

        if (!email) {
            res.json({ message: 'Error', error: "email is required" })
            return
        }
        if (!givenPassword && !givenPasswordHash) {
            // must have at least one of the two
            res.json({ message: 'Error', error: "password is required" })
            return
        }

        // Don't leave the client logged in
        // if they are trying to re-login and fail they should be logged out
        if (req.session) {
            req.session.last_stage = 'startLogin'
            req.session.login_id = null
            req.session.save()
        }

        // 1. The user has to exist if we want to change a password
        Login.findOne({ email: email }, function (err, login) {
            if (err) {
                logd("loginWithUserPassword error finding: " + email);
                res.json({ message: 'Error', error: err })
                return
            }
            if (!login || !login.id || !login.isSameEmail(email) || !login.passwordHash) {
                logd("loginWithUserPassword none found: " + email + " -- " + login.id + " " + login.isSameEmail(email));
                res.json({ message: 'Error', error: "Bad login record" })
                return
            }

            logd("loginWithUserPassword found: " + email);
            // 2. the user exists, lets make sure the user knows the password
            // checks for either you are allowed to have a given password or a password hash
            var goodPassword = false;
            if (givenPassword) {
                if (!login.passwordMatchesHash(givenPassword)) {
                    logd("loginWithUserPassword given password is bad");
                    res.json({ message: 'Error', error: "Given password wasn't correct" });
                    return
                }
                goodPassword = true;

            }
            if (givenPasswordHash) {
                if (!login.isSamePasswordHash(givenPasswordHash)) {

                    logd("loginWithUserPassword given passwordHash is bad");
                    res.json({ message: 'Error', error: "Given passwordHash wasn't correct" });
                    return
                }
                goodPassword = true;
            }

            if (!goodPassword) {
                res.json({ message: 'Error', error: "correct password wasn't given" });
                return
            }

            if (!req.session) {
                res.json({ message: 'Error', error: "missing a request session" });
                return
            }

            req.session.last_stage = 'loggedIn'
            req.session.login_id = login.id;
            res.json({
                message: 'Success', data: {
                    login_id: login.id,
                    email: login.email,
                    isEmailVerified: login.isEmailVerified,
                }
            }) // DO NOT RETURN PASSWORD HASH
        });
    },

    /**
     * @return the log in email base on user request
     */
    getLoginEmail: (req, res) => {
        findByIdIfSignedIn(req, req.params.id, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
                return
            }

            res.json({ message: 'Success', email: data.email })
        });
    },

}