// https://www.npmjs.com/package/bcrypt

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var crypto = require('crypto')
var bcrypt = require('bcrypt');

var LoginSchema = new Schema({
    // Needed for Login
    password: { type: String, required: true, },
    email: { type: String, required: true, unique: true, match: /\S+@\S+\.\S+/ },

    // Email verification / activation
    is_email_verified: { type: Boolean, default: false },
    temp_activation_code: { type: Number, min: 100000, max: 999999 },

    // Phone number and verification
    is_phone_verified: { type: Boolean, default: false },
    phone: { type: String, match: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ },

    // Account role: what account is allowed to do
    type: { type: Number, required: true, default: 9 },

    // Password reset: we basically email them a second temp password
    is_forgot_password: { type: Boolean, default: false },

    //attempt
    login_attempt: { type: Number, default: 0, required: true },
    forgot_password_code_attempt: { type: Number, default: 0, required: true },
}, { timestamps: true, upsert: true, collection: 'login' })


module.exports = mongoose.model('Login', LoginSchema)

LoginSchema.methods.hashPassword = function(password){
    return  bcrypt.hashSync(password, saltRounds);
}