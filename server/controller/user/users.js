//note validation only apply for POST, PUT, or PATCH

var mongoose = require('mongoose')
var User = mongoose.model('User')
var Login = mongoose.model('Login')
var user_validations = require("../../validation/user/user_validations")
var user_res = require("../../http_response/user/user_responses")
var emailGateway = require("../../gateway/email")

module.exports = {
	/**
	 * @Get *ALL* users
     * 
     * Report:
     * @KimDo 1.0.0 *Completed*
	 */
    getAll: (req, res) => {
        User.find({}, function (err, data) {
            if (err) {
                console.log("err")
                user_res.error(res, err)
                return
            }
            user_res.all(res, data)
        })
    },

    /**
     * *POST*
	 * @Create a *new* user
     * 
     * *Validation*
        * *NOT PASS* return error
        * *PASS* do something
	 */
    register: (req, res) => {
        // Validation
        var invalidMessage = user_validations.isInvalidRegister(req.body)
        if (invalidMessage != undefined) {
            user_res.error(res, invalidMessage)
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
    },

	/**
	 * @GET USER BY *ID*
	 */
    getByLoginId: (req, res) => {
        var login_id = req.params.id
        User.find({ loginId: login_id }, function (err, data) {
            if (err || data.length == 0) {
                res.json({ message: 'Error', error: err })
                return
            }

            res.json({ message: 'Success', data: data[0] })
        })
    },

	/**
	 * @UPDATE *USER WITH ID*
	 */
    updateById: (req, res) => {
        // var id = req.params.id
        // var update = req.body
        // User.findByIdAndUpdate(id, update, { $set: req.body }, function (err, data) {
        //     if (err) {
        //         res.json({ message: 'Error', error: err })
        //         return
        //     }
        //     res.json({ message: 'Success', data: data })
        // })
    },

	/**
	 * @DELETE *USER* BY *ID*
     * @DELETE *Login* By loginId
	 */
    deleteById: (req, res) => {
        User.findByIdAndDelete(req.params.id, function (err, data) {
            if (err) {
                user_res.error(res, err)
                return
            }

            if (data == null) {
                user_res.error(res, "Invalid user id")
                return
            }

            Login.findByIdAndDelete(data.loginId, function (err, data) {
                if (err) {
                    user_res.error(res, err)
                    return
                }

                user_res.all(res, data)                
            })
        })
    },
}
