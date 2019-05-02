'use strict'

var express = require('express')
var mongoose = require('mongoose')
var app = express()
var bodyParser = require('body-parser')

const STATE = require("./server/config/state").getAll()

/**
 * Start with pasuse state
 */
var currState = STATE.PAUSE






/**
 * *LISTENING to 3 ARGUMENTS*
 * @Command @file @option
 */
process.argv.forEach(function (val, index, array) {
    if (array.length != 3) {
        console.error("Error!! Must have $nodemon server.js 'option'")
        process.exit(1)
    }

    switch (array[2]) {
        case "run": currState = STATE.RUNNING; break;
        case "unitTest": currState = STATE.UNIT_TEST; break;
        case "createSuperUser": currState = STATE.CREATE_SUPER_USER; break;
    }
});

/**
 * *ONLY spin the serve on running and test*
 */
if (currState == STATE.RUNNING || currState == STATE.UNIT_TEST) {
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(express.static(__dirname + '/frontend/dist/frontend'))

    // Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
    // by default, you need to set it to false.
    var mongoDB = (currState == STATE.RUNNING) ? 'mongodb://localhost/isQED' : 'mongodb://localhost/isQEDTestDB'

    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true)
    mongoose.connect(mongoDB, { useNewUrlParser: true })

    require('./server/config/mongoose.js')
    require('./server/config/routes.js')(app)

    // Setting our Server to Listen on Port: 8000
    app.listen(8000, function () {
        console.log('listening on http://localhost:8000')
    })
} else if (currState == STATE.CREATE_SUPER_USER) {
    
    var mongoDB = 'mongodb://localhost/isQED'

    // mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true)
    mongoose.connect(mongoDB, { useNewUrlParser: true })

    require('./server/config/mongoose.js')

    //create super user
    require("./server/config/super-user").create()

}








