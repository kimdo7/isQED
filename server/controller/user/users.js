var mongoose = require('mongoose')
var User = mongoose.model('User')
var Login = mongoose.model('Login')
var bcrypt = require("bcrypt")
var email = require("../../gateway/email")

/**
 * @DEBUG 
 * Instead of logd, use logd("Hello World"), or format parameters like logd("Hello %s", "world")
 *  - To see this output, you have to pass it into nodemon when you run it:
 *          In isQED directory, run "DEBUG=userlog nodemon server.js" 
 *  - To shut off logs, just run nodemon normally:
 *          In isQED directory, run "nodemon.server.js" (this shuts off logs)
 */
const logd = require('debug')('userslog')

module.exports = {
	/**
	 * @Create a *new* user
	 */
    register: (req, res) => {
        /**
         * @Validation of password
         */
        if (req.body.password !== req.body.confirm_password) {
            res.json({ message: 'Error', error: "Confirmation password does not match" })
            return
        } else if (req.body.password.length < 8) {
            res.json({ message: 'Error', error: "Password must be 8 characters or more" })
            return
        } else if (!req.body.email || req.body.email.length < 5) {
            return
        }
 
        /**
         * @Create Login first.
         */
        var newLogin = new Login({
            email: req.body.email,
            type: 9,
        })
        
        if (!newLogin.setPassword(req.body.password)) {
            res.json({ message: 'Error', error: "Password must be 8 characters or more" })
            return
        }
        newLogin.save((err, savedLogin) => {
            if (!savedLogin) {
                if (err && err.code === 11000) {
                    // If there is a Login and no User, we can create the User
                    // This is useful in development when our DB is messed up
                    User.findOne({email: req.body.email}, (err, existingUser) => {
                        if (!existingUser) {
                            // There is a Login with no user.
                            // We can hit this when there is a bug
                            // For now we will DELETE the Login. DANGEROUS
                            Login.findOneAndDelete({ email: req.body.email}, (err, existingLogin) => {
                                // Deleted!
                                res.json({ message: 'Error', error: "Error on server, please retry" })
                                return
                            })
                            
                        } else {
                            res.json({ message: 'Error', error: "Email is already registered", errorDetail: err })
                            return
                        }
                    })
                    return
                }
                res.json({ message: 'Error', error: "Password must be 8 characters or more", errorDetail: err })
                return
            }
            /**
             * @create new user
             */
            User.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                loginId: savedLogin.id,
            }, (err, newUser) => {
                if (err) {
                    res.json({ message: 'Error', error: err })
                } else {
                    // Success!
                    email.send(newUser.loginId)
                    res.json({ message: 'Success', "id": newUser.loginId })
            }
            })
        });
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
            } else {
                res.json({ message: 'Success', data: data })
            }
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
            } else {
                res.json({ message: 'Success', data: data })
            }
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
            } else if (data == null){
                res.json({ message: 'Error', error: "id is invalid" })

            } else {
                Login.findByIdAndDelete(data.loginId, function(err, data){
                    if (err) {
                        res.json({ message: 'Error', error: err })
                    }else{
                        res.json({ message: 'Success', data: data })
                    }
                })
            }
        })
    },
}
