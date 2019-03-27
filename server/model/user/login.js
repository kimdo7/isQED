var mongoose = require('mongoose')
var Schema = mongoose.Schema


// To register a login
// var Login = mongoose.model('Login');
// var newLogin = new Login({ user_name: 'someone@gmail.com' });
// if (newLogin.setPassword('AGreatPassword')) {
//     // This is a good user login
//     newLogin.save();// If upserts are allowed, this should either create (if the user_name doesn't exist) or update (if the user_name already exists)
// } else {
//    // This is not a good user login
//    error("bad password. Try harder.")	
// }

var LoginSchema = new Schema({
	// An _id field will be generated automatically

	user_name: { // probably will be the email from the user schema
		type: String, 
		required: true, 
		index: { unique: true } 
	},
	passwordHash: { 
		type: String, 
		required: true,
		minlength: 60,
		maxlength: 60,
	},
}, { 
	createdAt: 'created_at',
	updatedAt: 'updated_at',
	timestamps: true, 
	upsert: false, 
	collection: 'login' 
});

zxcvbn = require('../../config/zxcvbn');
LoginSchema.methods.isStrongPassword = function(newPassword){
	var strength = zxcvbn(newPassword);
	if (strength.score < 2) { // goes up to 4, which is strong
		return false; // not strong enough
	}

	// If we passed all that, it is acceptable
	return true;
}

// Explicitly check each rule for the password
// Easier to read than one regex
LoginSchema.methods.isValidPassword = function(newPassword){
	if (!newPassword || typeof(newPassword) !== 'string') {
		return false;// has to be a non-empty string
	}

	if (newPassword.length < 8 || newPassword.length > 64) {
		return false;// has to be from 8-32 chars
	}

	if (! /[A-Z]/.test(newPassword)) {
		return false;// has to have an ASCII capital
	}

	if (! /[a-z]/.test(newPassword)) {
		return false;// has to have an ASCII lowercase
	}

	if (! /[0-9]/.test(newPassword)) {
		return false;// has to have an ASCII digit
	}

	if (! /[!@#$%^&*()=.-]/.test(newPassword)) {
		return false;// has to have punctuation
	}

	// If we passed all that, it is acceptable
	return true;
};

// WHEN SOMEONE LOGS IN WITH USERNAME/PASSWORD
LoginSchema.methods.passwordMatchesHash = function(candidatePassword, callback){
    bcrypt.compare(candidatePassword, this.passwordHash, function(err, isMatch) {
        if (err) {
			return callback(err);
		}
        callback(null /* no error */, isMatch);
    });
};

// WHEN SOMEONE REGISTERS A NEW USERNAME/PASSWORD, OR CHANGES PASSWORD
LoginSchema.methods.setPassword = function(newPassword) {
	if (!isValidPassword(newPassword)) {
		return false;
	}
	if (!isStrongPassword(newPassword)) {
		return false;
	}

	this.passwordHash = Bcrypt.hashSync(password, 20);
	return true;
} 

LoginSchema.pre('save', function(next) {
    var login = this;

    // only hash the password if it has been modified (or is new)
    if (!login.isModified('password')) {
		return next();
	}

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) {
			return next(err);
		} 

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('Login', LoginSchema)
