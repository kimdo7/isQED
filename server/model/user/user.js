var mongoose = require('mongoose')
var Schema = mongoose.Schema


var UserSchema = new Schema({
	first_name: { type: String, required: false, minlength: 2, trim: true },
	last_name: { type: String, required: false, minlength: 2, trim: true },
	email: { type: String, required: false, minlength: 6, unique: true },
	phone: { type: String, retuired: false },
	gender: { type: String, enum: ['MALE', 'FEMALE'], uppercase: true, trim: false },
	type: { type: Number, required: false, default: 9 }, // admin: 1, teacher: 5, student: 9 minimum
	loginId: { type: mongoose.Schema.Types.ObjectId, ref: 'Login', unique: true, required: false },// has to be created before the user
	isActivated: { type: Boolean, default: false },
	tempActivationCode : {type: String, minlength:5}
}, { 
	createdAt: 'created_at',
	updatedAt: 'updated_at',
	timestamps: true, 
	upsert: true, 
	collection: 'user' 
});


module.exports = mongoose.model('User', UserSchema)
