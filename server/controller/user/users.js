var mongoose = require('mongoose')
var User = mongoose.model('User')
var bcrypt = require("bcrypt")
var email = require("../../gateway/email")

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
                        email.send(data["_id"])
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
            } else {
                res.json({ message: 'Success', data: data })
            }
        })
    },

	/**
	 * @UPDATE *USER WITH ID*
	 */
    updateById: (req, res) => {
        console.log(req.body)
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
                email.send(data[0]["_id"])
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
    }
}
