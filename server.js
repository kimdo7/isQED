var express = require('express')
var session = require('express-session')
var mongoose = require('mongoose')


var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public/dist/public'))

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

mongoose.set('useCreateIndex', true)
mongoose.connect(
	'mongodb://localhost/isQED',
	{ useNewUrlParser: true }
)

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
	console.log('listening on port 8000')
})
