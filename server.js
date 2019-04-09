var express = require('express')
var session = require('express-session')
var mongoose = require('mongoose')


var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public/dist/public'))

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  name: 'user',
  secret: 'A142F1A9-F694-46BE-9BB8-716B7C1CA4A0-isQED-awesome', // uuidgen
  resave: false,
  saveUninitialized: false,// we use this for login
  cookie: { 
	  maxAge: 60000,
	  sameSite: true, // why not
	 }
}))

  
// https://stackoverflow.com/questions/37183766/how-to-get-the-session-value-in-ejs
// this should make the session variable always defined in ejs
app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
})

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
