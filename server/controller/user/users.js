var mongoose = require('mongoose')
var User = mongoose.model('User')
var bcrypt = require("bcrypt")
var emailGateway = require("../../gateway/email")

// Instead of logd, use logd("Hello World"), or format parameters like logd("Hello %s", "world")
// To see this output, you have to pass it into nodemon when you run it:
//    DEBUG=userlog nodemon server.js
const logd = require('debug')('userlog')

// Set this to false to use the email gateway
const DEBUG_DONT_SEND_MAIL = true;

// This makes it easy to read error handling
// and cuts down on code length and nesting
// For example each check only takes one line instead of 5, even with logging
//  if (guard( !email, res, "error for client", "extra log info")) { return; }
//  if (guard( !email, res, "error for client", "extra log info")) { return; }
const guard = (errorCondition, res, err, logInfo) => { 
    if (errorCondition){
        // something has gone wrong, so we are going to log if we can
        if(logInfo){
            logd(logInfo);
        }
        // and we will send a json error back to the client
        if (res){
            res.json({message: 'Error', error: err});
        }
        // we return true so that the caller knows that there's an error or that the guard failed.
        return true;
    }
    // no error
    return false;
 }

module.exports = {
    /**
     * @Create a *new* user
     */
    register: (req, res) => {
        /**
         * @Validation of password
         */
        if (req.body.password !== req.body.confirm_password) {
            res.json({ message: 'Error', error: "Not match password" })
            return
        } else if (req.body.password.length < 8) {
            res.json({ message: 'Error', error: "Password must be 8 characters or more" })
            return
        }

        /**
         * @Passed *validation*
         * *more validation* will be check automaticly with schema
         * After passed *ALL* validation
         * Send email to *user* with activation code
         */

        bcrypt.hash(req.body.password, 10)
            .then(hashed_password => {
                User.create({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,

                    email: req.body.email,
                    type: 9,
                    password: hashed_password
                }, (err, data) => {
                    if (err) {
                        res.json({ message: 'Error', error: err })
                    } else {
                        emailGateway.send(data["_id"])
                        res.json({ message: 'Success', data: data })
                    }
                })
            })
            .catch(error => {
                res.json({ message: 'Error', error: "Hasing password error" })
                return
            })
    },

    /**
     * @Get *ALL* users
     */
    getAll: (req, res) => {
        User.find({}, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else {
                res.json({ message: 'Success', data: data })
            }
        })
    },

    /**
     * @GET USER BY *ID*
     */
    getById: (req, res) => {
        var id = req.params.id
        User.findById(id, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else if (!data || data.id !== id || !data.email || !data.passwordHash) {
                res.json({ message: 'Error', error: "bad user record", data: data })
            } else {
                res.json({ message: 'Success', data: data })
            }
        })
    },

    /**
     * @UPDATE *USER WITH ID*
     */
    updateById: (req, res) => {
        logd(req.body)
        var id = req.params.id
        var update = req.body
        User.findByIdAndUpdate(id, update, { $set: req.body }, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else {
                res.json({ message: 'Success', data: data })
            }
        })
    },

    /**
     * @DELETE *USER* BY *ID*
     */
    deleteById: (req, res) => {
        // D delete one user
        var id = req.params.id
        User.findByIdAndDelete(id, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else {
                res.json({ message: 'Success', data: data })
            }
        })
    },

    /**
     * @activate acount by id
     * *Confirm* with the *activation code*
     */
    activateById: (req, res) => {
        User.findById(req.params.id, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else {
                if (req.params.code !== data.tempActivationCode) {
                    res.json({ message: 'Error', error: "wrong activation code" })
                    return
                }

                data.isActivate = true
                data.save()
                res.json({ message: 'Success', data: data })
            }
        })
    },


    /**
     * @login Email will be unique
     *
     * *decrypt* and check password
     */
    login: (req, res) => {
        User.find({ email: req.body.email }, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else if (data.length == 0) {
                res.json({ message: 'Error', error: "email is not exist" })
            } else {
                bcrypt.compare(req.body.password, data[0]["password"])
                    .then(result => {
                        if (result) {
                            data[0].isForgotPassword = true //Password already confirmed
                            data[0].save()
                            res.json({ message: 'Success', data: data[0] })
                        } else {
                            res.json({ message: 'Error', error: "Wrong password" })
                        }
                    })
                    .catch(error => {
                        res.json({ message: 'Error', error: error })
                    })
            }
        })
    },

    /**
     * @Request *FORGOT PASS*
     *
     */
    requestForgotPassword: (req, res) => {
        User.find({ email: req.body.email }, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else if (data.length == 0) {
                res.json({ message: 'Error', error: "email is not exist" })
            } else {
                /**
                 * @param isForgotPassword to *TRUE*
                 * *SEND out email*
                 */
                data[0].isForgotPassword = true
                data[0].save()
                emailGateway.send(data[0]["_id"])
                res.json({ message: 'Success', data: data[0] })
            }
        })
    },
    /**
     * @Request *FORGOT PASS*
     *
     *
     */
    resetPassword: (req, res) => {
        /**
         * @Valdiation
         */
        if (req.body.password !== req.body.confirm_password) {
            res.json({ message: 'Error', error: "Not match password" })
            return
        } else if (req.body.password.length < 8) {
            res.json({ message: 'Error', error: "Password must be 8 characters or more" })
            return
        }

        /**
         * *Find* user base on id
         */
        User.findById(req.params.id, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else {
                /**
                 * @encrypt password
                 */
                bcrypt.hash(req.body.password, 10)
                    .then(hashed_password => {
                        data.password = hashed_password
                        data.isActivate = true
                        data.isForgotPassword = false
                        data.save()

                        res.json({ message: 'Success', data: data })
                    })
                    .catch(error => {
                        res.json({ message: 'Error', error: "Hasing password error" })
                        return
                    })
            }
        })
    },

    /*
    * LOGIN
    */

    /**
     * @Create a *new* user
     * ALLOWS ANYONE TO CREATE A LOGIN. MAY NOT ENSURE PASSWORD IS STRONG. DEBUGGING ONLY
     */
    create: (req, res) => {
        User.create(req.body, (err, data) => {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else {
                res.json({ message: 'Success', data: data })
            }
        })
    },

    /**
     * @GET user BY *email*
     * RETURNS PASSWORD HASH FOR ANY EMAIL! DEBUGGING ONLY
     */
    getByEmail: (req, res) => {
        var email = req.body.email;
        logd("getbyEmail: %s", email);
        User.findOne({ email: email }, function (err, user) {
            if (guard(  err, res, err, "getByEmail failed -- " + err)) { return; }
            if (guard(  !user, res, "no user found", "getbyEmail failed -- no user found")) { return; }
            if (guard(  !user.id, res, "no valid user found", "getByEmail failed -- user has no id")) { return; }
            if (guard(  !user.passwordHash, res, "no valid user found", "getByEmail failed -- user has no passwordHash")) { return; }
            if (guard(  !user.isSameEmail(email), res, "no valid user found", "getByEmail failed -- user has no id")) { return; }
            res.json({ message: 'Success', data: user });
        });
    },

    logout: (req, res) => {
        logd("logout");
        // This is from the user
        req.session.user_id = null;
        res.json({ message: 'Success', data: 'Logged out'});
    },

    loginWithUserPassword: (req, res) => {
        logd("loginWithUserPassword");
        // This is given by the end user
        var email = req.body.email;
        var givenPassword = req.body.password;
        var givenPasswordHash = req.body.passwordHash;// The client could instead send us the hashed password

        if (!email) {
            res.json({ message: 'Error', error: "email is required" })
        } else if (!givenPassword && !givenPasswordHash) { // must have at least one of the two
            res.json({ message: 'Error', error: "password is required" })
        } else {
            // Don't leave the client logged in if they are trying to re-login and fail
            if (req.session) {
                req.session.user_id = null;
            }

            // 1. The user has to exist if we want to change a password
            User.findOne({ email: email }, function (err, user) {
                if (err) {
                    logd("loginWithUserPassword error finding: " + email);
                    res.json({ message: 'Error', error: err })
                } else if (!user || !user.id || !user.isSameEmail(email) || !user.passwordHash) {
                    logd("loginWithUserPassword none found: " + email);
                    res.json({ message: 'Error', error: "bad user record" })
                } else {
                    logd("loginWithUserPassword found: " + email);
                    // 2. the user exists, let's make sure the user knows the password
                    var goodPassword = false;
                    if (givenPassword) {
                        if (user.passwordMatchesHash(givenPassword)) {
                            goodPassword = true;
                        } else {
                            logd("loginWithUserPassword given password is bad");
                        }
                    } else if (givenPasswordHash) {
                        if (user.isSamePasswordHash(givenPasswordHash)) {
                            goodPassword = true;
                        } else {
                            logd("loginWithUserPassword given passwordHash is bad");
                        }
                    }

                    if (goodPassword) {
                        res.json({ message: 'Success', data: { user_id: user.id } });// DO NOT return password/hash
                        if (req.session) {
                            req.session.user_id = user.id;
                        }
                    } else {
                        res.json({ message: 'Error', error: "correct password wasn't given" });
                    }
                }
            });
        }
    },

    changePassword: (req, res) => {
        // do change password stuff
        // - to change the password you have to know the old password
        // - and the email, and the id
        var id = req.params.id;
        var email = req.body.email;
        var newPassword = req.body.newPassword;
        var oldPassword = req.body.oldPassword;

        if (!email) {
            logd("changePassword email is null or empty");
            res.json({ message: 'Error', error: "missing email" });
            return;
        }
        if (!id) {
            logd("changePassword id is null or empty");
            res.json({ message: 'Error', error: "missing id in URL" });
            return;
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

        // Validate new password is good enough? That happens in setPassword

        // 1. The user has to exist if we want to change a password
        User.findOne({ email: email, _id: id }, function (err, user) {
            if (err) {
                logd("changePassword can't find email + id");
                res.json({ message: 'Error', error: err });
                return;
            }
            if (!user || !user.id || !user.isSameEmail(email) || !user.passwordHash) {
                logd("changePassword has bad user record");
                res.json({ message: 'Error', error: "bad user record" });
                return;
            }

            // 2. the user exists, let's make sure the user knows the old password
            if (!user.passwordMatchesHash(oldPassword)) {
                res.json({ message: 'Error', error: "old password didn't match" });
                return;
            }

            // 3. Now change the password
            if (!user.setPassword(newPassword)) { // this generates the hash
                res.json({ message: 'Error', error: "new password is not strong enough" });
                return;
            }
            if (!user.passwordMatchesHash(newPassword)) {
                res.json({ message: 'Error', error: "internal error seting password" });
                return;
            }

            user.save(function (err, save_data) {
                if (err) {
                    res.json({ message: 'Error', error: "failed to save updated password" });
                    return;
                }
                if (!save_data) {
                    res.json({ message: 'Error', error: "save didn't return data" });
                    return;
                }

                // 4. Success!  The user should really have to re-login to ensure the password worked
                //              We shouldn't let the user stay logged in with the old password on any
                //              other browser either. HOW?
                req.session.user_id = null;
                res.json({ message: 'Success', data: "yay" });// not sure we should return the password hash
            });
        });
    },

    createAndMailForgottenPasscode: (req, res) => {
        var id = req.params.id;
        var email = req.body.email;
        var tempPasscode = null;

        // Don't allow the user to stay logged in
        req.session.user_id = null;

        if (!email) {
            logd("createAndMailForgottenPasscode email is null or empty");
            res.json({ message: 'Error', error: "missing email" });
        } else if (!id) {
            logd("createAndMailForgottenPasscode id is null or empty");
            res.json({ message: 'Error', error: "missing id in URL" });
        } else {
            // 1. The user has to exist if we want to change a password
            User.findOne({ email: email, _id: id }, function (findErr, existingUser) {
                if (guard( findErr, res, "Failed to find user", "createAndMailForgottenPasscode failed to find user for: " + id + " : " + email + " -- " + findErr)) { return; }
                if (guard( !existingUser, res, "Failed to find user", "createAndMailForgottenPasscode no user object for: " + id + " : " + email)) { return; }
                if (guard( !existingUser.passwordHash, res, "Failed to find user", "createAndMailForgottenPasscode user has no hash: " + id + " : " + email)) { return; }
                if (guard( !existingUser.isSameEmail(email), res, "Failed to find user", "registerUserPass user email doesn't match")) { return; }

                // 2. the user exists, let's make sure the user creates a 'forgotten password' code (it's really like a separate password)
                tempPasscode = existingUser.createTempForgottenPassword();
                // passcode doesn't work unless we save it
                existingUser.save(function(err, savedUser) {
                    if (err) {
                        logd("createAndMailForgottenPasscode could not save the new temp passcode. Wont' take effect.");
                        res.json({ message: 'Error', error: err })
                    } else if (!tempPasscode) {
                        logd("createAndMailForgottenPasscode did not create a temp passcode.");
                        res.json({ message: 'Error', error: "Could not generate temp passcode" })
                    } else if (DEBUG_DONT_SEND_MAIL) {
                        // Normally in production we would send mail
                        // But we are debugging and want to avoid that.
                        // So instead just log the temp passcode
                        logd("createAndMailForgottenPasscode DEBUG not sending mail, would have sent to: %s the temp passcode: %s", email, tempPasscode)
                        res.json({ message: 'Success', error: "Passcode was generated, DEBUG success" })
                    } else {
                        // We should send the email from here
                        emailGateway.sendForgotMail(existingUser.email, tempPasscode, function(err, success) {
                            if (err) {
                                res.json({ message: 'Error', error: "Could not send mail for forgotten passcode" });

                                // Clean up since the temp passcode can never be used
                                savedUser.invalidateTempForgot();
                                savedUser.save(function(err, secondSavedUser) {
                                    if (err) {
                                        logd("createAndMailForgottenPasscode could not save the invalidateTempForgot after an error");
                                        // already sent a response
                                    } else if (!secondSavedUser) {
                                        logd("createAndMailForgottenPasscode got a null without an err when tryign to save invalidateTempForgot after an error");
                                        // already sent a response
                                    } else {
                                        // Succeeded to invalidate the temp passcode
                                        // but it still was an error sending the mail
                                        // already sent a response
                                    }
                                });
                            } else if (!success) { // shouldn't happen
                                res.json({ message: 'Error', error: "Internal server error sending mail" })
                            } else {
                                res.json({ message: 'Success', error: "Passcode was generated, please check mail" })
                            }
                        });
                    }
                });
            });
        }

        return tempPasscode;
    },

    changeForgottenPassword: (req, res) => {
        // do change password stuff
        // - to change the password you have to know the old password
        // - and the email, and the id
        var email = req.body.email;
        var newPassword = req.body.newPassword;
        var forgotPasswordCode = req.body.forgotPasswordCode;

        if (!email) {
            logd("changeForgottenPassword email is null or empty");
            res.json({ message: 'Error', error: "missing email" });
        } else if (!newPassword) {
            logd("changeForgottenPassword newPassword is null or empty");
            res.json({ message: 'Error', error: "missing newPassword" });
        } else if (!forgotPasswordCode) {
            logd("changeForgottenPassword forgotPasswordCode is null or empty");
            res.json({ message: 'Error', error: "missing forgotPasswordCode" });
        } else {

            // Validate new password is good enough? That happens in setPassword

            // 1. The user has to exist if we want to change a password
            User.findOne({ email: email }, function (err, user) {
                if (err) {
                    res.json({ message: 'Error', error: err })
                } else if (!user || !user.id || !user.isSameEmail(email) || !user.passwordHash) {
                    res.json({ message: 'Error', error: "bad user record" })
                } else {
                    // 2. the user exists, let's make sure the user knows the forgottenpassword code
                    if (!user.forgottenPasswordCodeIsValid(forgotPasswordCode)) { // security gate
                        // We need to save because an attempt was made
                        user.save(function(err, savedAttempt){
                            if (err) {
                                // this is bad,someone got a free attempt!
                                logd("ERROR: changeForgottenPassword attempt was made but couldn't save after invalid code!")
                            } else {
                                logd("changeForgottenPassword saved failed attempt");
                            }
                        });
                        res.json({ message: 'Error', error: "forgotPasswordCode is invalid" });
                    } else {
                        // 3. Now change the password
                        if (!user.setPassword(newPassword)) { // this generates the hash
                            logd("changeForgottenPassword newPassword is not valid");
                            res.json({ message: 'Error', error: "new password is not strong enough" });
                        } else if (!user.passwordMatchesHash(newPassword)) {
                            logd("changeForgottenPassword newPassword cannot validate hash");
                            res.json({ message: 'Error', error: "internal error setting password" });
                        } else {
                            // 4. Save the password to the database
                            user.save(function (err, save_data) {
                                if (err) {
                                    logd("changeForgottenPassword save failed: " + err);
                                    res.json({ message: 'Error', error: "failed to save updated password" });
                                } else if (!save_data) {
                                    logd("changeForgottenPassword save didn't work properly");// should never happen
                                    res.json({ message: 'Error', error: "save didn't return data" });
                                } else {
                                    // 5. Success!  The user should really have to re-login to ensure the password worked
                                    //              We shouldn't let the user stay logged in with the old password on any
                                    //              other browser either. HOW?
                                    res.json({ message: 'Success', data: "yay" });// not sure we should return the password hash
                                    req.session.user_id = null;
                                }
                            });
                        }
                    }
                }
            });
        }
    },

    /**
     *  LOGIN
     */
    registerUserPassword: (req, res) => {
        // do registration stuff
        var email = req.body.email;
        var password = req.body.password;
        var first_name = req.body.first_name;
        var last_name = req.body.last_name;

        if (guard( !email, res, "missing email", "registerUserPass email is null or empty")) { return; }
        if (guard( !password, res, "missing password", "registerUserPass password is null or empty")) { return; }
        if (guard( !first_name, res, "missing first_name", "registerUserPass first_name is null or empty")) { return; }
        if (guard( !last_name, res, "missing last_name", "registerUserPass last_name is null or empty")) { return; }

        // 1. Make sure the email is not in use
        User.findOne({ email: email }, function (findErr, existingUser) {
            if (guard( existingUser, res, "email already exists", "registerUserPass findOne existing")) { return; }
            if (guard( findErr && findErr != "Not found", res, "can't find email", "registerUserPass findOne findErr")) { return; }
            
            // 2. Create a User and set the password
            logd("registerUserPass findOne nothing found");
            var newUser = new User({
                email: email,
                password: password,
                first_name: first_name,
                last_name: last_name,
            });

            // 3. Make sure the password is strong and valid 
            if (!newUser.setPassword(password)) { // sets passwordHash
                // Password is no good. Let's give the best error we can
                const passwordRules = "Password must be 8-64 characters, with at least one A-Z, one a-z, one 0-9 and one from '!@#$%^&*()=.-'";
                if (guard( !newUser.isValidPassword(password), res, passwordRules, null)) { return; }
                if (guard( !newUser.isStrongPassword(password), res, "Password isn't strong enough. Try to make it more random.", null)) { return; }
                res.json({ message: 'Error', error: "Password isn't set" });
                return;
            } 
            // not relying on middleware to hash the password, because setPassword does that
            logd("registerUserPass newUser %s: %s", newUser.email, newUser.passwordHash);// eventually we won't log hash
            newUser.save(function (saveErr, savedUser) {
                if (guard( saveErr, res, "Failed to create new user", "registerUserPass save error: " + saveErr)) { return; }
                if (guard( !savedUser, res, "failed to create new user", "registerUserPass create failed to give a user")) { return; }
                if (guard( !savedUser.isSameEmail(email), res, "failed to create new user", "registerUserPass create failed to give a user the same email")) { return; }
                if (guard( !savedUser.passwordMatchesHash(password), res, "internal error creating user", "registerUserPass create no hash")) { return; }

                // 4. Success!  The user should really have to re-login to ensure the password worked
                //              We shouldn't let the user stay logged in with the old password on any
                //              other browser either. HOW?
                logd("registerUserPass create success");
                req.session.user_id = null;
                res.json({ message: 'Success', data: "Yay, you are now registered" });// not sure we should return the password hash
            });
        });
    },
}
