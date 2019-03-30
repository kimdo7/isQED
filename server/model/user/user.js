var mongoose = require('mongoose')
var Schema = mongoose.Schema
var bcrypt = require('bcrypt');
var base32 = require('base32');


var UserSchema = new Schema({
    first_name: { type: String, required: true, minlength: 2, match: /^[A-Za-z ]+$/ },
    last_name: { type: String, required: true, minlength: 2, match: /^[A-Za-z ]+$/ },
    email: { type: String, required: true, unique: true, match: /\S+@\S+\.\S+/ },
    phone: { type: String, match: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ },
    type: { type: Number, required: true, default: 9 },
    password: { type: String, required: true },
    isActivate: { type: Boolean, default: false },
    isForgotPassword: { type: Boolean, default: false },
    tempActivationCode: { type: String, minlength: 6, maxlength: 6, default: "000000" },
// LOGIN
    passwordHash: { type: String, required: true, minlength: 60, maxlength: 60 },
    // When a user forgets their password, we basically email them a second temp password
    tempForgotHash: { type: String, required: false, minlength: 60, maxlength: 60 },
    tempForgotExpiry: { type: Date, required: false },// if null, the tempForgotHash is invalid 
    tempForgotAttemptsRemaining: { type: Number, required: false, max: 3, min: 0 },// if 0 or null, the tempForgotHash is invalid
}, { timestamps: true, upsert: true, collection: 'user' })



// Instead of logd, use logd("Hello World"), or format parameters like logd("Hello %s", "world")
// To see this output, you have to pass it into nodemon when you run it:
//    DEBUG=userlog nodemon server.js
const logd = require('debug')('userlog')

//           var user = new User();
//           user.email = 'foo@bar.com';
//           user.setPassword('password'); // sets passwordHash
//           user.save(); // doesn't need middleware to save
// You cannot User.findOneAndUpdate({email:'foo@bar.com'}, {set: {password: 'password'}})
// because there is no password in the database, only a hash and the pre 'save' middleware doesnt' work


zxcvbn = require('../../config/zxcvbn');
UserSchema.methods.isStrongPassword = function (newPassword) {
    var strength = zxcvbn(newPassword);
    if (strength.score < 2) { // goes up to 4, which is strong
        return false; // not strong enough
    }

    // If we passed all that, it is acceptable
    return true;
}

// Explicitly check each rule for the password
// Easier to read than one regex
UserSchema.methods.isValidPassword = function (newPassword) {
    if (!newPassword || typeof (newPassword) !== 'string') {
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

// WHEN SOMEONE REGISTERS A NEW USERNAME/PASSWORD, OR CHANGES PASSWORD, 
// YOU HAVE TO CALL setPassword and then save()
UserSchema.methods.setPassword = function (newPassword) {
    if (!this.isValidPassword(newPassword)) {
        logd("password is not valid");
        return false;
    }
    if (!this.isStrongPassword(newPassword)) {
        logd("password is not strong");
        return false;
    }
    // generate a salt
    var SALT_WORK_FACTOR = 10;
    var salt = bcrypt.genSaltSync(SALT_WORK_FACTOR)
    if (!salt) {
        logd("can't generate salt");
        return false;
    }

    // hash the password using our new salt
    var passwordHash = bcrypt.hashSync(newPassword, salt);
    if (!passwordHash) {
        logd("can't generate hash");
        return false;
    } else if (passwordHash.length < 60) {
        logd("hash isn't long enough");
        return false;
    } else if (passwordHash.length > 60) {
        logd("hash is too long");
        return false;
    }

    if (!bcrypt.compareSync(newPassword, passwordHash)) {
        return false;
    }

    this.passwordHash = passwordHash;
    return true;
}

UserSchema.pre('save', function (next) {
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
UserSchema.methods.passwordMatchesHash = function (givenPassword) {
    if (!givenPassword) {
        logd("Login passwordMatchesHash cannot match empty password");
        return false;
    }
    if (!this.passwordHash) {
        logd("Login passwordMatchesHash cannot compare to empty hash");
        return false;
    }
    return bcrypt.compareSync(givenPassword, this.passwordHash);
};

UserSchema.methods.invalidateTempForgot = function () {
    this.tempForgotAttemptsRemaining = 0;
    this.tempForgotCode = null;
    this.tempForgotExpiry = null;
}

UserSchema.methods.createTempForgottenPassword = function () {
    // Get rid of any existing temp passcode first
    this.invalidateTempForgot();
    
    this.tempForgotAttemptsRemaining = 5;
    this.tempForgotExpiry = Date.now() + 3 * 60 * 60 * 1000;// 3 hours from now?
    var tempPasscode = base32.sha1(bcrypt.genSaltSync(10));// this is just random, but the letters are typable
    this.tempForgotHash = bcrypt.hashSync(tempPasscode, 10);

    if (!this.tempForgotHash) {
        return null;
    }

    // If we made it here, there is a temp  forgotten password
    // The caller needs to mail it out
    return tempPasscode;
}

UserSchema.methods.isTempForgottenPassword = function () {
    if (!this.tempForgotHash) {
        logd("Login isTempForgottenPassword: false  -- no tempForgotHash");
        this.invalidateTempForgot();
        return false;
    }
    if (!this.tempForgotExpiry) {
        logd("Login isTempForgottenPassword: false -- no expiry");
        this.invalidateTempForgot();
        return false;
    }

    if (this.tempForgotExpiry < Date.now()) {
        logd("Login isTempForgottenPassword: false -- expired! " + temp.tempForgotExpiry);
        this.invalidateTempForgot();
        return false;
    }

    if (!this.tempForgotAttemptsRemaining  || this.tempForgotAttemptsRemaining < 1) {
        logd("Login isTempForgottenPassword: false -- no tempForgotAttemptsRemaining");
        this.invalidateTempForgot();
        return false;
    }
    if (!this.tempForgotAttemptsRemaining > 5) {
        logd("Login isTempForgottenPassword: false -- too many tempForgotAttemptsRemaining: " + this.tempForgotAttemptsRemaining);
        this.invalidateTempForgot();
        return false;
    }

    // Make sure it's an integer 
    var remainingAttempts = Math.floor(this.tempForgotAttemptsRemaining);
    this.tempForgotAttemptsRemaining = remainingAttempts;

    // If we made it here, there is a temp forgotten password
    return true;
}


UserSchema.methods.forgottenPasswordCodeIsValid = function (givenForgotCode) {
    if (!givenForgotCode) {
        logd("Login forgottenPasswordCodeIsValid cannot match empty givenForgotCode");
        return false;
    }

    if (!this.isTempForgottenPassword()) {
        return false;
    }

    // We are attempting the forgotten password (this is an integer from 1 to 5)
    this.tempForgotAttemptsRemaining -= 1;

    if (!bcrypt.compareSync(givenForgotCode, this.tempForgotHash)) {
        logd("Login forgottenPasswordCodeIsValid: false -- attempt failed! invalid provided temp passcode");
        return false;
    }

    logd("Login forgottenPasswordCodeIsValid: true -- success!");
    return true;
};

UserSchema.methods.isSameEmail = function (expectedUserName) {
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

UserSchema.methods.isSamePasswordHash = function (givenPasswordHash) {
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

module.exports = mongoose.model('User', UserSchema)