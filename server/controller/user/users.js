var mongoose = require('mongoose')
var User = mongoose.model('User')
var bcrypt = require("bcrypt")
var email = require("../../gateway/email")

module.exports = {
	/**
	 * @Create a *new* user
	 */
    register: (req, res) => {
        if (req.body.password !== req.body.confirm_password) {
            res.json({ message: 'Error', error: "Not match password" })
            return
        }else if (req.body.password.length < 8){
            res.json({ message: 'Error', error: "Password must be 8 characters or more" })
            return
        }

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
                        // console.log(data["_id"])
                        email.send(data["_id"])
                        res.json({ message: 'Success', data: data })
                    }
                })
            })
            .catch(error => {
                res.json({ message: 'Error', error: "Hasing password error" })
                return
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

    activateById: (req, res) => {
        User.findById(req.params.id, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else {
                if (req.params.code !== data.tempActivationCode){
                    res.json({ message: 'Error', error: "wrong activation code" })
                    return
                }


                data.isActivate = true
                data.save()
                res.json({ message: 'Success', data: data })
            }
        })
    },

    login: (req, res) => {
        // do login stuff
    }
}
