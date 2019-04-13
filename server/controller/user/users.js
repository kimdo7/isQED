var mongoose = require('mongoose')
var User = mongoose.model('User')
var Login = mongoose.model('Login')
var bcrypt = require("bcrypt")
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

        if (!req.body.password.match(regex)) {
            res.json({ message: 'Error', error: "Password is not matching the rules" })
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
        
        if (!newLogin.setPassword(req.body.password)) {
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
            res.json({ message: 'Error', error: "Internal server error with password" })
            return
        }
        if (!newLogin.isSameEmail(req.body.email)) {
            res.json({ message: 'Error', error: "Internal server error with email" })
            return
        }
        newLogin.save((err, savedLogin) => {
            if (!savedLogin) {
                if (err && err.code === 11000) {
                    // If there is a Login and no User, we can create the User
                    // This is useful in development when our DB is messed up
                    User.findOne({email: req.body.email}, (err2, existingUser) => {
                        if (!existingUser) {
                            // There is a Login with no user.
                            // We can hit this when there is a bug
                            // For now we will DELETE the Login. DANGEROUS DEBUG ONLY
                            Login.findOneAndDelete({ email: req.body.email}, (err3, existingLogin) => {
                                // Deleted!
                                logd("register: didn't find a login user " + err + " then " + err2 + " then " + err3)
                                res.json({ message: 'Error', error: "Error on server, please retry" })
                                return
                            })
                        }     
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
                    if (err) {
                        res.json({ message: 'Error', error: err })
                        return
                    }
                    if (!newLogin.isSameEmail(newUser.email)) {
                        res.json({ message: 'Error', error: "Internal server error with user email" })
                        return
                    }
                    
                    // Success!
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
                    res.json({ message: 'Success', login_id: newUser.loginId })
                }
            )
        });
    },

	/**
	 * @Get *ALL* users
	 */
    getAll: (req, res) => {
        User.find({}, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
                return
            }
            res.json({ message: 'Success', data: data })
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
                return
            } 
            res.json({ message: 'Success', data: data })
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

            if (data == null){
                res.json({ message: 'Error', error: "id is invalid" })
                return
            } 
            
            Login.findByIdAndDelete(data.loginId, function(err, data){
                if (err) {
                    res.json({ message: 'Error', error: err })
                    return
                }
                res.json({ message: 'Success', data: data })
            })
        })
    },
}
