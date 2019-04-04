var mongoose = require('mongoose')
var User = mongoose.model('User')
var Login = mongoose.model('Login')
var bcrypt = require("bcrypt")
var email = require("../../gateway/email")

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
        var regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}/;

        if (req.body.password !== req.body.confirm_password) {
            res.json({ message: 'Error', error: "Not match password" })
            return
        } else if (!req.body.password.match(regex)) {
            res.json({ message: 'Error', error: "Password parttern" })
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
                /**
                 * @create new user
                 */
                User.create({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                }, (err, user_data) => {
                    if (err) {
                        res.json({ message: 'Error', error: err })
                    } else {
                        /**
                         * @create new log in
                         */

                        Login.create({
                            userId: user_data.id,
                            email: req.body.email,
                            password: hashed_password,
                            type: 9,
                        }, (err, login_data) => {
                            if (err) {
                                res.json({ message: 'Error', error: err })
                            } else {
                                /**
                                 * @update user id
                                 */

                                user_data.loginId = login_data._id
                                user_data.save()

                                email.send(login_data["_id"])
                                res.json({ message: 'Success', "id": login_data._id })
                            }
                        })
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
