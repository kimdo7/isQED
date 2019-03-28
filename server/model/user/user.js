var mongoose = require('mongoose')
var Schema = mongoose.Schema


var UserSchema = new Schema({
    first_name: { type: String, required: true, minlength: 2 },
    last_name: { type: String, required: true, minlength: 2 },
    email: { type: String, required: true, minlength: 6, unique: true },
    phone: { type: String, trim: true },
    type: { type: Number, required: true, default: 9 },
    //loginId: { type: mongoose.Schema.Types.ObjectId, ref: 'Login', unique: false, required: false },
    isActivate: { type: Boolean, default: false },
    tempActivationCode: { type: String, minlength: 5 }
}, { timestamps: true, upsert: true, collection: 'user' })

module.exports = mongoose.model('User', UserSchema)
