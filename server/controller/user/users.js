var mongoose = require('mongoose')

var User = mongoose.model('User')

module.exports = {
	/**
	 * @Create a *new* user
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

	login: (req, res) => {
		// do login stuff
	}
}
