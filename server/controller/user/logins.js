var mongoose = require('mongoose')
var Login = mongoose.model('Login')
var email = require("../../gateway/email")

var DEBUG_DONT_SEND_MAIL = true;

module.exports = {
	/**
	 * @Get *ALL* logins
	 * RETURNS EVERY PASSWORD HASH IN THE DATABASE!! DEBUGGING ONLY
	 */
    getAll: (req, res) => {
        Login.find({}, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else {
                res.json({ message: 'Success', data: data })
            }
        })
    },

	/**
	 * @GET login BY *ID*
	 * RETURNS PASSWORD HASH FOR ANY ID! DEBUGGING ONLY
	 */
    getById: (req, res) => {
        Login.findById(req.params.id, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else if (!data || data.id !== id || !data.userName || !data.passwordHash) {
                res.json({ message: 'Error', error: "bad login record" })
            } else {
                res.json({ message: 'Success', data: data })
            }
        })
    },

	/**
	 * @UPDATE *USER WITH ID*
	 * ALLOWS SETTING PASSWORD HASH FOR ANY ID! DEBUGGING ONLY
	 */
    updateById: (req, res) => {
        var update = req.body
        Login.findByIdAndUpdate(req.params.id, update, { $set: req.body }, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else {
                res.json({ message: 'Success', data: data })
            }
        })
    },

	/**
	 * @DELETE login BY *ID*
	 * ALLOWS MAKING ANY USER LOGIN GO AWAY. SHOULD MAKE THIS HARD TO DO
	 */
    deleteById: (req, res) => {
        var id = req.params.id
        Login.findByIdAndDelete(id, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else {
                res.json({ message: 'Success', data: data })
            }
        })
    },
    
    logout: (req, res) => {
        console.log("logout");
        // This is from the user
        req.session.login_id = null;
        res.json({ message: 'Success', data: 'Logged out'});
    },


    /**
     * @return the log in email base on user request
     */
    getLoginEmail: (req, res) => {
        Login.findById(req.params.id, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else {
                res.json({ message: 'Success', email: data.email })
            }
        })
    },


    /**
     * 
     */
    loginWithUserPass: (req, res) => {
        Login.find({ email: req.body.email }, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else if (data.length == 0) {
                res.json({ message: 'Error', error: "email is not exist" })
            } else {
                bcrypt.compare(req.body.password, data[0]["password"])
                    .then(result => {
                        if (result) {
                            data[0].isForgotPassword = false //turn forgot password flag off
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
        Login.find({ email: req.body.email }, function (err, data) {
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
                email.send(data[0]["_id"])
                res.json({ message: 'Success', data: data[0] })
            }
        })
    },

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
        Login.findById(req.params.id, function (err, data) {
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

    /**
     * @activate acount by id
     * *Confirm* with the *activation code*
     */
    activateById: (req, res) => {
        Login.findById(req.params.id, function (err, data) {
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

        
    loginWithUserPassword: (req, res) => {
        console.log("loginWithUserPassword");
        // This is from the user
        var username = req.body.userName;
        var givenPassword = req.body.password;
        var givenPasswordHash = req.body.passwordHash;// The client could instead send us the hashed password
        
        
        // when i creae a user, i need to register
        // create login and user record then
        // return the id and response
        // put it in a session - remember how user is going to be logged in
        
        
        if (!username) {
            res.json({ message: 'Error', error: "username is required" })
        } else if (!givenPassword && !givenPasswordHash) { // must have at least one of the two
            res.json({ message: 'Error', error: "password is required" })
        } else {
            // Don't leave the client logged in if they are trying to re-login and fail
            if (req.session) {
                req.session.login_id = null;
            }
            
            // 1. The login has to exist if we want to change a password
            Login.findOne({ userName: username }, function (err, login) {
                        if (err) {
                        console.log("loginWithUserPassword error finding: " + username);
                        res.json({ message: 'Error', error: err })
                        } else if (!login || !login.id || !login.isSameUserName(username) || !login.passwordHash) {
                        console.log("loginWithUserPassword none found: " + username);
                        res.json({ message: 'Error', error: "bad login record" })
                        } else {
                        console.log("loginWithUserPassword found: " + username);
                        // 2. the login exists, let's make sure the user knows the password
                        var goodPassword = false;
                        if (givenPassword) {
                        if (login.passwordMatchesHash(givenPassword)) {
                        goodPassword = true;
                        } else {
                        console.log("loginWithUserPassword given password is bad");
                        }
                        } else {
                        if (givenPasswordHash) {
                        if (login.isSamePasswordHash(givenPasswordHash)) {
                        goodPassword = true;
                        }
                        else
                        {
                        console.log("loginWithUserPassword givne passwordHash is bad");
                        }
                        }
                        }
                        
                        if (goodPassword) {
                        res.json({ message: 'Success', data: { login_id: login.id } });// DO NOT return password/hash
                        if (req.session) {
                        req.session.login_id = login.id;
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
        // - and the username, and the id
        var id = req.params.id;
        var username = req.body.userName;
        var newPassword = req.body.newPassword;
        var givenPassword = req.body.oldPassword;
        
        if (!username) {
            console.log("changePassword username is null or empty");
            res.json({ message: 'Error', error: "missing userName" });
        } else if (!id) {
            console.log("changePassword id is null or empty");
            res.json({ message: 'Error', error: "missing id in URL" });
        } else if (!newPassword) {
            console.log("changePassword newPassword is null or empty");
            res.json({ message: 'Error', error: "missing newPassword" });
        } else if (!givenPassword) {
            console.log("changePassword oldPassword is null or empty");
            res.json({ message: 'Error', error: "missing oldPassword" });
        } else {
            
            // Validate new password is good enough? That happens in setPassword
            
            // 1. The login has to exist if we want to change a password
            Login.findOne({ userName: username, _id: id }, function (err, login) {
                        if (err) {
                        res.json({ message: 'Error', error: err })
                        } else if (!login || !login.id || !login.isSameUserName(username) || !login.passwordHash) {
                        res.json({ message: 'Error', error: "bad login record" })
                        } else {
                        // 2. the login exists, let's make sure the user knows the old password
                        if (!login.passwordMatchesHash(givenPassword)) {
                        res.json({ message: 'Error', error: "old password didn't match" });
                        } else {
                        // 3. Now change the password
                        if (!login.setPassword(newPassword)) { // this generates the hash
                        res.json({ message: 'Error', error: "new password is not strong enough" });
                        } else if (!login.passwordMatchesHash(newPassword)) {
                        res.json({ message: 'Error', error: "internal error seting password" });
                        } else {
                        login.save(function (err, save_data) {
                                    if (err) {
                                    res.json({ message: 'Error', error: "failed to save updated password" });
                                    } else if (!save_data) {
                                    res.json({ message: 'Error', error: "save didn't return data" });
                                    } else {
                                    // Don't allow the user to stay logged in
                                    req.session.login_id = null;
                                    
                                    // 4. Success!  The user should really have to re-login to ensure the password worked
                                    //              We shouldn't let the user stay logged in with the old password on any
                                    //              other browser either. HOW?
                                    res.json({ message: 'Success', data: "yay" });// not sure we should return the password hash
                                    
                                    }
                                    });
                        }
                        }
                        
                        }
                        });
        }
    },
        
    createAndMailForgottenPasscode: (req, res) => {
        var id = req.params.id;
        var username = req.body.userName;
        var tempPasscode = null;
        
        // Don't allow the user to stay logged in
        req.session.login_id = null;
        
        if (!username) {
            console.log("createAndMailForgottenPasscode username is null or empty");
            res.json({ message: 'Error', error: "missing userName" });
        } else if (!id) {
            console.log("createAndMailForgottenPasscode id is null or empty");
            res.json({ message: 'Error', error: "missing id in URL" });
        } else {
            // 1. The login has to exist if we want to change a password
            Login.findOne({ userName: username, _id: id }, function (err, login) {
                        if (err) {
                        res.json({ message: 'Error', error: err })
                        } else if (!login || !login.id || !login.isSameUserName(username) || !login.passwordHash) {
                        res.json({ message: 'Error', error: "bad login record" })
                        } else {
                        // 2. the login exists, let's make sure the user knows the forgottenpassword code
                        tempPasscode = login.createTempForgottenPassword();
                        // passcode doesn't work unless we save it
                        login.save(function(err, savedLogin) {
                                    if (err) {
                                    console.log("createAndMailForgottenPasscode could not save the new temp passcode. Wont' take effect.");
                                    res.json({ message: 'Error', error: err })
                                    } else if (!tempPasscode) {
                                    console.log("createAndMailForgottenPasscode did not create a temp passcode.");
                                    res.json({ message: 'Error', error: "Could not generate temp passcode" })
                                    } else if (DEBUG_DONT_SEND_MAIL) {
                                    // Normally in production we would send mail
                                    // But we are debugging and want to avoid that.
                                    // So instead just log the temp passcode
                                    console.log("createAndMailForgottenPasscode DEBUG not sendign mail, would have sent to: " + login.userName + " the temp passcode: " + tempPasscode)
                                    res.json({ message: 'Success', error: "Passcode was generated, DEBUG success" })
                                    } else {
                                    // We should send the email from here
                                    // Assume the userName is an email address
                                    email.sendForgotMail(login.userName, tempPasscode, function(err, success) {
                                                        if (err) {
                                                        res.json({ message: 'Error', error: "Could not send mail for forgotten passcode" });
                                                        savedLogin.invalidateTempForgot();
                                                        savedLogin.save(function(err, secondSavedLogin) {
                                                                        if (err) {
                                                                        console.log("createAndMailForgottenPasscode could not save the invalidateTempForgot after an error");
                                                                        // already sent a response
                                                                        } else if (!secondSavedLogin) {
                                                                        console.log("createAndMailForgottenPasscode got a null without an err when tryign to save invalidateTempForgot after an error");
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
                        }
                        });
        }
        
        return tempPasscode;
    },
        
    changeForgottenPassword: (req, res) => {
        // do change password stuff
        // - to change the password you have to know the old password
        // - and the username, and the id
        var id = req.params.id;
        var username = req.body.userName;
        var newPassword = req.body.newPassword;
        var forgotPasswordCode = req.body.forgotPasswordCode;
        
        if (!username) {
            console.log("changeForgottenPassword userName is null or empty");
            res.json({ message: 'Error', error: "missing userName" });
        } else if (!id) {
            console.log("changeForgottenPassword id is null or empty");
            res.json({ message: 'Error', error: "missing id in URL" });
        } else if (!newPassword) {
            console.log("changeForgottenPassword newPassword is null or empty");
            res.json({ message: 'Error', error: "missing newPassword" });
        } else if (!forgotPasswordCode) {
            console.log("changeForgottenPassword forgotPasswordCode is null or empty");
            res.json({ message: 'Error', error: "missing forgotPasswordCode" });
        } else {
            
            // Validate new password is good enough? That happens in setPassword
            
            // 1. The login has to exist if we want to change a password
            Login.findOne({ userName: username, _id: id }, function (err, login) {
                        if (err) {
                        res.json({ message: 'Error', error: err })
                        } else if (!login || !login.id || !login.isSameUserName(username) || !login.passwordHash) {
                        res.json({ message: 'Error', error: "bad login record" })
                        } else {
                        // 2. the login exists, let's make sure the user knows the forgottenpassword code
                        if (!login.forgottenPasswordCodeIsValid(forgotPasswordCode)) { // security gate
                        // We need to save because an attempt was made
                        login.save(function(err, savedAttempt){
                                    if (err) {
                                    // this is bad,someone got a free attempt!
                                    console.log("ERROR: changeForgottenPassword attempt was made but couldn't save after invalid code!")
                                    } else {
                                    console.log("changeForgottenPassword saved failed attempt");
                                    }
                                    });
                        res.json({ message: 'Error', error: "forgotPasswordCode is invalid" });
                        } else {
                        // 3. Now change the password
                        if (!login.setPassword(newPassword)) { // this generates the hash
                        console.log("changeForgottenPassword newPassword is not valid");
                        res.json({ message: 'Error', error: "new password is not strong enough" });
                        } else if (!login.passwordMatchesHash(newPassword)) {
                        console.log("changeForgottenPassword newPassword cannot validate hash");
                        res.json({ message: 'Error', error: "internal error seting password" });
                        } else {
                        login.save(function (err, save_data) {
                                    if (err) {
                                    console.log("changeForgottenPassword save failed: " + err);
                                    res.json({ message: 'Error', error: "failed to save updated password" });
                                    } else if (!save_data) {
                                    console.log("changeForgottenPassword save didn't work properly");// should never happen
                                    res.json({ message: 'Error', error: "save didn't return data" });
                                    } else {
                                    // Log out the user to force using the new password
                                    req.session.login_id = null;
                                    
                                    // 4. Success!  The user should really have to re-login to ensure the password worked
                                    //              We shouldn't let the user stay logged in with the old password on any
                                    //              other browser either. HOW?
                                    res.json({ message: 'Success', data: "yay" });// not sure we should return the password hash
                                    }
                                    });
                        }
                        }
                        
                        }
                        });
        }
    },
        
        
    registerUserPassword: (req, res) => {
        // do registration stuff
        var username = req.body.userName;
        var password = req.body.password;
        console.log("registerUserPass");
        
        if (!username) {
            console.log("registerUserPass username is null or empty");
            res.json({ message: 'Error', error: "missing userName" });
            
        } else if (!password) {
            console.log("registerUserPass password is null or empty");
            res.json({ message: 'Error', error: "missing password" });
            
        } else {
            // 1. Make sure the username is not in use
            Login.findOne({ userName: username }, function (findErr, existingLogin) {
                        console.log("registerUserPass findOne");
                        if (existingLogin) {
                        console.log("registerUserPass findOne existing");
                        res.json({ message: 'Error', error: "username already exists" });
                        } else if (findErr && findErr != "Not found") {
                        console.log("registerUserPass findOne findErr");
                        res.json({ message: 'Error', error: findErr, errorMessage: "can't find username" });
                        } else {
                        console.log("registerUserPass findOne nothing found");
                        // 2. Make sure the password is strong and valid
                        //    (rely on middleware save() called by create())
                        // 3. Create a Login and set the password
                        
                        var newLogin = new Login();
                        newLogin.userName = username;
                        newLogin.tempForgotAttemptsRemaining = 0;
                        if (!newLogin.setPassword(password)) { // sets passwordHash
                        console.log("registerUserPass newLogin setPassword error");
                        if (!newLogin.isValidPassword(password)) {
                        res.json({ message: 'Error', error: { message: "Password isn't valid", info: "Password must be 8-64 characters, with at least one A-Z, one a-z, one 0-9 and one from '!@#$%^&*()=.-'" } });
                        } else if (!newLogin.isStrongPassword(password)) {
                        res.json({ message: 'Error', error: "Password isn't strong enough" });
                        } else {
                        res.json({ message: 'Error', error: "Password isn't set" });
                        }
                        } else {
                        console.log("registerUserPass newLogin " + newLogin.userName + ": " + newLogin.passwordHash);
                        // doesn't need middleware to save
                        newLogin.save(function (saveErr, savedLogin) {
                                        console.log("registerUserPass create");
                                        if (saveErr) {
                                        console.log("registerUserPass saveErr");
                                        res.json({ message: 'Error', error: saveErr, errorMessage: "Failed to create new login" })
                                        } else if (!savedLogin || !savedLogin.isSameUserName(username)) {
                                        console.log("registerUserPass create no login");
                                        res.json({ message: 'Error', error: "failed to create new login" });
                                        } else if (!savedLogin.passwordMatchesHash(password)) {
                                        console.log("registerUserPass create no hash");
                                        res.json({ message: 'Error', error: "internal error creating login" });
                                        } else {
                                        console.log("registerUserPass create success");
                                        // 4. Success!  The user should really have to re-login to ensure the password worked
                                        //              We shouldn't let the user stay logged in with the old password on any
                                        //              other browser either. HOW?
                                        res.json({ message: 'Success', data: "Yay, you are now registered" });// not sure we should return the password hash
                                        }
                                        });
                        }
                        }
                        });
        }
        // 5. Success!  The user should now be asked to login
    },
}

