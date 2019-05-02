var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    loginId : {type: String, unique: true},
    first_name: { type: String, required: true, minlength: 2, match: /^[A-Za-z][A-Za-z ]*[A-Za-z]$/ }, // No space at beginning or end
    last_name: { type: String, required: true, minlength: 2, match: /^[A-Za-z][A-Za-z ]*[A-Za-z]$/ }, // No space at beginning or end
    email: { type: String, required: true, unique: true, match: /\S+@\S+\.\S+/ },
    phone: { type: String, match: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ },
}, { timestamps: true, upsert: true })

module.exports = mongoose.model('User', UserSchema)