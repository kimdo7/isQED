var mongoose = require('mongoose')
var Schema = mongoose.Schema


var UserSchema = new Schema({
	first_name: { 
		type: String, 
		required: [true, "test"], 
		trim:true
	},
	last_name: {
		 type: String, 
		 required: true, 
		 trim: true 
		},
	email: { 
		type: String, 
		required: true, 
		minlength: 6, 
		unique: true },
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
	required: [true, "Customer phone number required"]
	},

	gender: {
		type: String,
		enum: ['MALE', 'FEMALE'],
		uppercase: true,
		trim: true, 
		default: "MALE"
	},

	age: {
		type: Number,
		min:[18, "You must be 18 years or older to sign in"],
		required: false
	},

	// admin: 1, teacher: 5, student: 9 minimum
	// user is student sccount.
	type: {
		type: Number,
		required: true,
		default: 9
	},


	loginId: {
    	type: mongoose.Schema.Types.ObjectId,
    	ref: 'Login'
  	},

	isActivated: { type: Boolean, default: false },
	tempActivationCode : {type: String, minlength:5}
}, { 
	timestamps: true, 
	upsert: true, 
	collection: 'user' 
});


module.exports = mongoose.model('User', UserSchema)
