var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    // bcrypt = require(bcrypt),
    // SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
    first_name: { type: String, required: true, minlength: 2 },
    last_name: { type: String, required: true, minlength: 2 },
    user_name: { type: String, required: true, index: {unique: true }},
    password: { type: String, required: true , },
    email: { type: String, required: true, minlength: 6 },
    phone: { type: String, trim: true },
}, { 
    timestamps: true, 
    upsert:true, 
    collection: 'user',
});

console.log("SY running user.js");


// Anything that uses var user = require('user');
// can now use user.User
module.exports = mongoose.model('User', UserSchema, /* plural */ 'users');
