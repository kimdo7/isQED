var mongoose = require('mongoose')
var Schema = mongoose.Schema

var LoginSchema = new Schema({
    userId: { type: String, unique: true },
    email: { type: String, required: true, unique: true, match: /\S+@\S+\.\S+/ },
    password: { type: String, required: true },
    isActivate: { type: Boolean, default: false },
    isForgotPassword: { type: Boolean, default: false },
    tempActivationCode: { type: String, minlength: 6, maxlength: 6, default: "000000" },
    type: { type: Number, required: true, default: 9 },

}, { timestamps: true, upsert: true })

module.exports = mongoose.model('Login', LoginSchema)