var mongoose = require('mongoose')
var Schema = mongoose.Schema


var UserSchema = new Schema({
	first_name: { type: String, required: true, minlength: 2, trim: true },
	last_name: { type: String, required: true, minlength: 2, trim: true },
	email: { type: String, required: true, minlength: 6, unique: true },
	phone: { 
		type: String, 
		validate:[{
			validator: function( number ) {
				return /\d{3}-\d{3}-\d{4}/.test(number);
			},
			message: "{ VALUE } is not a valid phone number"
		},
		{
			validator: function( number ) {
				return false;
			},
			message: "{ VALUE } failed this validator"
		}
		],
	required: false[false, "Customer phone number required"]
	},
	gender: { type: String, enum: ['MALE', 'FEMALE'], uppercase: true, trim: true },
	age: { type: Number, required: false },
	type: { type: Number, required: true, default: 9 }, // admin: 1, teacher: 5, student: 9 minimum
	loginId: { type: mongoose.Schema.Types.ObjectId, ref: 'Login', unique: true, required: true },// has to be created before the user
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
