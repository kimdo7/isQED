var mongoose = require('mongoose')
var Schema = mongoose.Schema


var UserSchema = new Schema({
    first_name: { type: String, required: true, minlength: 2, match: /^[A-Za-z ]+$/ },
    last_name: { type: String, required: true, minlength: 2, match: /^[A-Za-z ]+$/ },
    email: { type: String, required: true, unique: true, match: /\S+@\S+\.\S+/ },
    phone: { type: String, match: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ },
    type: { type: Number, required: true, default: 9 },
    password: { type: String, required: true },
    isActivate: { type: Boolean, default: false },
    tempActivationCode: { type: String, minlength: 6, maxlength: 6, default: "000000" }
}, { timestamps: true, upsert: true, collection: 'user' })

module.exports = mongoose.model('User', UserSchema)