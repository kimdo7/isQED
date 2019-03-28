var mongoose = require('mongoose')
var bcrypt = require("bcrypt")
var Login = mongoose.model('Login')
var User = mongoose.model('User')
var email = require("../../gateway/email")

module.exports = {
    














	/**
	 * @Create a *new* login
	 * ALLOWS ANYONE TO CREATE A LOGIN. MAY NOT ENSURE PASSWORD IS STRONG. DEBUGGING ONLY
	 */
    create: (req, res) => {
        Login.create(req.body, (err, data) => {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else {
                res.json({ message: 'Success', data: data })
            }
        })
    },

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
        var id = req.params.id
        Login.findById(id, function (err, data) {
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
	 * @GET login BY *user name*
	 * RETURNS PASSWORD HASH FOR ANY USER NAME! DEBUGGING ONLY
	 */
    getByUserName: (req, res) => {
        var username = req.params.username
        Login.findOne({ userName: username }, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else if (!data || !data.id || data.userName !== username || !data.passwordHash) {
                res.json({ message: 'Error', error: "bad login record" })
            } else {
                res.json({ message: 'Success', data: data })
            }
        });
    },

	/**
	 * @UPDATE *USER WITH ID*
	 * ALLOWS SETTING PASSWORD HASH FOR ANY ID! DEBUGGING ONLY
	 */
    updateById: (req, res) => {
        console.log(req.body)
        var id = req.params.id
        var update = req.body
        Login.findByIdAndUpdate(id, update, { $set: req.body }, function (err, data) {
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
        // D delete one login
        var id = req.params.id
        Login.findByIdAndDelete(id, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else {
                res.json({ message: 'Success', data: data })
            }
        })
    },


    // var Login = mongoose.model('Login');
    // var newLogin = new Login({ userName: 'someone@gmail.com' });
    // if (newLogin.setPassword('AGreatPassword')) {
    //     // This is a good user login
    //     newLogin.save();// If upserts are allowed, this should either create (if the userName doesn't exist) or update (if the userName already exists)
    // } else {
    //    // This is not a good user login
    //    error("bad password. Try harder.")	
    // }

    loginWithUserPass: (req, res) => {
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
            // 1. The login has to exist if we want to change a password
            Login.findOne({ userName: username }, function (err, login) {
                if (err) {
                    res.json({ message: 'Error', error: err })
                } else if (!login || !login.id || !login.isSameUserName(username) || !login.passwordHash) {
                    res.json({ message: 'Error', error: "bad login record" })
                } else {
                    // 2. the login exists, let's make sure the user knows the password
                    var login = data;
                    var goodPassword = false;
                    if (givenPassword) {
                        if (login.passwordMatchesHash(givenPassword)) {
                            goodPassword = true;
                        }
                    } else {
                        if (givenPasswordHash) {
                            if (login.isSamePasswordHash(givenPasswordHash)) {
                                goodPassword = true;
                            }
                        }
                    }

                    if (goodPassword) {
                        res.json({ message: 'Success', data: "yay" });// not sure we should return the password hash
                        // TODO: remember this in the session
                    } else {
                        res.json({ message: 'Error', error: "password wasn't given" });
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

    registerUserPass: (req, res) => {
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
