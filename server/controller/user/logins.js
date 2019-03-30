var mongoose = require('mongoose')
var bcrypt = require("bcrypt")
var Login = mongoose.model('Login')
var email = require("../../gateway/email")

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
}
