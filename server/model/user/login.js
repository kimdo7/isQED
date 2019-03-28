var mongoose = require('mongoose')
var Schema = mongoose.Schema
var bcrypt = require('bcrypt');


// To register a login
// var Login = mongoose.model('Login');
// var newLogin = new Login({ userName: 'someone@gmail.com' });
// if (newLogin.setPassword('AGreatPassword')) {
//     // This is a good user login
//     newLogin.save();// If upserts are allowed, this should either create (if the userName doesn't exist) or update (if the userName already exists)
// } else {
//    // This is not a good user login
//    error("bad password. Try harder.")	
// }

var LoginSchema = new Schema({
	// An _id field will be generated automatically

	userName: { // probably will be the email from the user schema
		type: String, 
        required: true, 
        minlength: 6,
		unique: true, 
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

// May be able to do this. we never want to set the real password in mongodb
// If someone tries to update the DB with a password, it wont' get saved.
// You can:
//    1.     var login = new Login(); // could be Login.findById or Login.findByUserName
//           login.userName = 'foo@bar.com';
//           login.password = 'password'; // virtual set
//           login.save(); // pre-save middleware runs, set passwordHash
//           https://stackoverflow.com/questions/14588032/mongoose-password-hashing/14595363#14595363
//    1.5.   Login.create({userName: username, password: password},
//               function(err, login) {});
//           https://mongoosejs.com/docs/middleware.html
//           Note: The create() function fires save() hooks.

//    2.     var login = new Login();
//           login.userName = 'foo@bar.com';
//           login.setPassword('password'); // sets passwordHash
//           login.save(); // doesn't need middleware to save
// You cannot Login.findOneAndUpdate({userName:'foo@bar.com'}, {set: {password: 'password'}})
//  because there is no password in the database and the pre 'save' middleware doesnt' work
LoginSchema
    .virtual('password')
    // set methods
    .set(function (password) {
        this._password = password;
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
// Test username and password dev1testing@gmail.com Lav3Lam0!
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

// WHEN SOMEONE REGISTERS A NEW USERNAME/PASSWORD, OR CHANGES PASSWORD
LoginSchema.methods.setPassword = function(newPassword) {
	if (!this.isValidPassword(newPassword)) {
        console.log("password is not valid");
		return false;
	}
	if (!this.isStrongPassword(newPassword)) {
        console.log("password is not strong");
		return false;
	}
    // generate a salt
    var SALT_WORK_FACTOR = 10;
    var salt = bcrypt.genSaltSync(SALT_WORK_FACTOR)
    if (!salt) {
        console.log("can't generate salt");
        return false;
    }

    // hash the password using our new salt
    var passwordHash = bcrypt.hashSync(newPassword, salt);
    if (!passwordHash ) {
        console.log("can't generate hash");
        return false;
    } else if (passwordHash.length < 60) {
        console.log("hash isn't long enough");
        return false;
    } else if (passwordHash.length > 60) {
        console.log("hash is too long");
        return false;
    }

    if (!bcrypt.compareSync(newPassword, passwordHash)) {
        return false;
    }

    this.passwordHash = passwordHash;
	return true;
} 

LoginSchema.pre('save', function(next) {
    var login = this;

    // only hash the password if it has been modified (or is new)
    if (login._password === undefined) {
        return next();
    }

    // password is modified
    if (!setPassword(login._password)) {
        return next("Password not strong enough");
    }
    return next(null, login);
});


// WHEN SOMEONE LOGS IN WITH USERNAME/PASSWORD
LoginSchema.methods.passwordMatchesHash = function(givenPassword) {
    if (!givenPassword) {
        console.log("Login passwordMatchesHash cannot match empty password");
        return false;
    }
    if (!this.passwordHash) {
        console.log("Login passwordMatchesHash cannot compare to empty hash");
        return false;
    }
    return bcrypt.compareSync(givenPassword, this.passwordHash);
};

LoginSchema.methods.isSameUserName = function(expectedUserName) {
    if (!expectedUserName) {
        return false;
    }

    if (!this.userName) {
        return false;
    }

    if (this.userName !== expectedUserName) {
        return false;
    }

    // If we get this far, it's the same name
    return true;
};

LoginSchema.methods.isSamePasswordHash = function(givenPasswordHash) {
    if (!givenPasswordHash) {
        return false;
    }

    if (!this.passwordHash) {
        return false;
    }

    if (this.passwordHash !== givenPasswordHash) {
        return false;
    }

    // If we get this far, it's the same hash
    return true;
};


module.exports = mongoose.model('Login', LoginSchema)