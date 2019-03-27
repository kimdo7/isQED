var mongoose = require('mongoose')
var Login = mongoose.model('Login')

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
		User.find({}, function (err, data) {
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
			} else if (!data || data.id !== id || !data.userName || !data.passwordHash ) {
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
		Login.findOne({userName: username}, function (err, data) {
			if (err) {
				res.json({ message: 'Error', error: err })
			} else if (!data || !data.id || data.userName !== username || !data.passwordHash ) {
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

		if (!username) {
			res.json({ message: 'Error', error: "username is required" })
		} else if (!givenPassword && !givenPasswordHash) { // must have at least one of the two
			res.json({ message: 'Error', error: "password is required" })
		} else {
			// 1. The login has to exist if we want to change a password
			Login.findOne({userName: username}, function (err, login) {
				if (err) {
					res.json({ message: 'Error', error: err })
				} else if (!login || !login.id || !login.isSameUserName(username) || !login.passwordHash ) {
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
						res.json({ message: 'Error', error : "password wasn't given" });
					}
				}
			});
		}
	},

	changePassword: (req, res) => {
		// do change password stuff
		// - to change the password you have to know the old password
		// - and the username, and the id
		var id = req.body.id;// _id?
		var username = req.body.userName;
		var new_password = req.body.new_password;
		var givenPassword = req.body.old_password;

		// Validate new password is good enough? That happens in setPassword

		// 1. The login has to exist if we want to change a password
		Login.findOne({userName: username, _id: id}, function (err, login) {
			if (err) {
				res.json({ message: 'Error', error: err })
			} else if (!login || !login.id || !login.isSameUserName(username) || !login.passwordHash ) {
				res.json({ message: 'Error', error: "bad login record" })
			} else {
				// 2. the login exists, let's make sure the user knows the old password
				if (!login.passwordMatchesHash(givenPassword)) {
					res.json({ message: 'Error', error : "old password didn't match" });
				} else {
					// 3. Now change the password
					if (!login.setPassword(new_password)) { // this generates the hash
						res.json({ message: 'Error', error: "new password is not strong enough" });
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
		})

	},

	registerUserPass: (req, res) => {
		// do registration stuff
		var username = req.body.userName;
		var password = req.body.password;

		// 1. Make sure the username is not in use
		// 2. Make sure the pasword is strong and valid
		// 3. Create a Login and set the password
		// 4. Save it in the server
		// 5. Success!  The user should now be asked to login
	},
}
