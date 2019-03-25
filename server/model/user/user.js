var mongoose = require('mongoose')

var Schema = mongoose.Schema

var UserSchema = new Schema({
	first_name: { type: String, required: true, minlength: 2 },
	last_name: { type: String, required: true, minlength: 2 },
	user_name: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	email: { type: String, required: true, minlength: 6, unique: true },
	phone: { type: String, trim: true },
	isActivate: { type: Boolean, default: false },
	tempActivationCode : {type: String, minlength:5}
}, { timestamps: true, upsert: true, collection: 'user' })

module.exports = mongoose.model('User', UserSchema)
