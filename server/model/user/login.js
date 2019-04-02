var mongoose = require('mongoose')
var Schema = mongoose.Schema
var bcrypt = require('bcrypt');
// var base32 = require('base32');



var LoginSchema = new Schema({
    userId: { type: String, unique: true },
    email: { type: String, required: true, unique: true, match: /\S+@\S+\.\S+/ },
    password: { type: String, required: true },
    isActivate: { type: Boolean, default: false },
    isForgotPassword: { type: Boolean, default: false },
    tempActivationCode: { type: String, minlength: 6, maxlength: 6, default: "000000" },
    type: { type: Number, required: true, default: 9 },
    passwordHash: { type: String, required: true, minlength: 60, maxlength: 60 },
    // When a user forgets their password, we basically email them a second temp password
    tempForgotHash: { type: String, required: false, minlength: 60, maxlength: 60 },
    tempForgotExpiry: { /* if missing, the tempForgotHash is invalid */ type: Date, required: false },
    tempForgotAttemptsRemaining: { /* if 0, the tempForgotHash is invalid*/ type: Number, required: false, max: 5, min: 0 },

}, { timestamps: true, upsert: true })


zxcvbn = require('../../config/zxcvbn');
LoginSchema.methods.isStrongPassword = function (newPassword) {
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
LoginSchema.methods.isValidPassword = function (newPassword) {
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

// WHEN SOMEONE REGISTERS A NEW USERNAME/PASSWORD, OR CHANGES PASSWORD
LoginSchema.methods.setPassword = function (newPassword) {
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
    if (!passwordHash) {
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
    this.password = passwordHash;
    return true;
}


// WHEN SOMEONE LOGS IN WITH USERNAME/PASSWORD
LoginSchema.methods.passwordMatchesHash = function (givenPassword) {
    if (!givenPassword) {
        console.log("Login passwordMatchesHash cannot match empty password");
        return false;
    }
    if (!this.passwordHash) {
        if (this.password) {
            // Compatibility for code still using Kim's password code
            this.passwordHash = this.password;
        }
        if (!this.passwordHash) {
            console.log("Login passwordMatchesHash cannot compare to empty hash");
            return false;
        }
    }
    return bcrypt.compareSync(givenPassword, this.passwordHash, this.password);
};

LoginSchema.methods.invalidateTempForgot = function () {
    this.tempForgotAttemptsRemaining = 0;
    this.tempForgotCode = null;
    this.tempForgotExpiry = null;
}

LoginSchema.methods.createTempForgottenPassword = function () {
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

LoginSchema.methods.isTempForgottenPassword = function () {
    if (!this.tempForgotHash) {
        console.log("Login isTempForgottenPassword: false  -- no tempForgotHash");
        this.invalidateTempForgot();
        return false;
    }
    if (!this.tempForgotExpiry) {
        console.log("Login isTempForgottenPassword: false -- no expiry");
        this.invalidateTempForgot();
        return false;
    }
    
    if (this.tempForgotExpiry < Date.now()) {
        console.log("Login isTempForgottenPassword: false -- expired! " + temp.tempForgotExpiry);
        this.invalidateTempForgot();
        return false;
    }
    
    if (!this.tempForgotAttemptsRemaining  || this.tempForgotAttemptsRemaining < 1) {
        console.log("Login isTempForgottenPassword: false -- no tempForgotAttemptsRemaining");
        this.invalidateTempForgot();
        return false;
    }
    if (!this.tempForgotAttemptsRemaining > 5) {
        console.log("Login isTempForgottenPassword: false -- too many tempForgotAttemptsRemaining: " + this.tempForgotAttemptsRemaining);
        this.invalidateTempForgot();
        return false;
    }
    
    // Make sure it's an integer
    var remainingAttempts = Math.floor(this.tempForgotAttemptsRemaining);
    this.tempForgotAttemptsRemaining = remainingAttempts;
    
    // If we made it here, there is a temp forgotten password
    return true;
}


LoginSchema.methods.forgottenPasswordCodeIsValid = function (givenForgotCode) {
    if (!givenForgotCode) {
        console.log("Login forgottenPasswordCodeIsValid cannot match empty givenForgotCode");
        return false;
    }
    
    if (!this.isTempForgottenPassword()) {
        return false;
    }
    
    // We are attempting the forgotten password (this is an integer from 1 to 5)
    this.tempForgotAttemptsRemaining -= 1;
    
    if (!bcrypt.compareSync(givenForgotCode, this.tempForgotHash)) {
        console.log("Login forgottenPasswordCodeIsValid: false -- attempt failed! invalid provided temp passcode");
        return false;
    }
    
    console.log("Login forgottenPasswordCodeIsValid: true -- success!");
    return true;
};

LoginSchema.methods.isSameUserName = function (expectedUserName) {
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

LoginSchema.methods.isSamePasswordHash = function (givenPasswordHash) {
    if (!givenPasswordHash) {
        return false;
    }
    
    if (!this.passwordHash) {
        if (this.password) {
            // for those who created passwords using Kim's password code
            this.passwordHash = this.password;
        }
        if (!this.passwordHash) {
            return false;
        }
    }
    
    if (this.passwordHash !== givenPasswordHash) {
        return false;
    }
    
    // If we get this far, it's the same hash
    return true;
};



module.exports = mongoose.model('Login', LoginSchema)
