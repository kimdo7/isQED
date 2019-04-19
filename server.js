var express = require('express')
var session = require('express-session')
var mongoose = require('mongoose')


var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/frontend/dist/frontend'))

// Allow someone to be logged in for days before having to re-login
const day_in_ms = 24 * 60 * 60 * 1000
const maximum_session_in_ms = 4 * day_in_ms

app.set('trust proxy', 1) // trust first proxy
app.use(session({
    name: 'isQED',
    secret: 'A142F1A9-F694-46BE-9BB8-716B7C1CA4A0-isQED-awesome', // uuidgen
    resave: false,
    saveUninitialized: false,// we use this for login
    cookie: { 
        maxAge: maximum_session_in_ms,
        sameSite: true, // why not
    }
}))

// Depending on how we want the serve to run, we can use different databases
// we can start nodemon with different options like
// DEBUG=QEDlog QEDDB=UNIT_TESTING nodemon server.js
// https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html
const PRODUCTION = (process.env.QEDDB == "PRODUCTION")
const UNIT_TESTING = (process.env.QEDDB == "UNIT_TESTING")


// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
var mongoDB = 'mongodb://localhost/isQED'
if (PRODUCTION) {
    mongoDB = 'mongodb://a.real.server/isQED'
} else if (UNIT_TESTING) {
    mongoDB = 'mongodb://localhost/isQEDTestDB'
}
console.log("Using " + mongoDB)
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true)
mongoose.connect(
	mongoDB,
	{ useNewUrlParser: true }
)

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
	console.log('listening on port 8000')
})
