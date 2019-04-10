var nodemailer = require('nodemailer')
var mongoose = require('mongoose')
var Login = mongoose.model('Login')

/**
 * @DEBUG 
 * Instead of console.log, use logd("Hello World"), or format parameters like logd("Hello %s", "world")
 *  - To see this output, you have to pass it into nodemon when you run it:
 *          In isQED directory, run "DEBUG=QEDlog nodemon server.js" 
 *  - To shut off logs, just run nodemon normally:
 *          In isQED directory, run "nodemon.server.js" (this shuts off logs)
 */
const logd = require('debug')('QEDlog')


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kim.h.do.seven@gmail.com',
        pass: 'dorke5-maWciz-gygtup'
    }
})

var mailOptions = {
    from: 'kim.h.do.seven@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
}

module.exports = {
    sendMail: (req, res) => {
        /**
         * @param id user id
         * find user email
         */
        Login.findById(req.params.id, function (err, data) {
            if (err) {
                res.json({ message: 'Error', error: err })
            } else {

                var code = Math.floor(Math.random() * 900000) + 100000;     // returns a random integer from 100 000 to 10
                // mailOptions.to = "dohoangkimpy@gmail.com"

                /**
                 * *update to db*
                 */
                mailOptions.to = data.email
                mailOptions.text = code.toString()

                data.tempActivationCode = code.toString()
                data.save()
                logd("Activation code: " +code.toString())

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        res.json({ message: 'Error', error: err })
                    } else {
                        res.json({ message: 'Success', data: info.response })
                    }
                })
            }
        })
    },

    send: (login_id) => {
        Login.findById(login_id, function (err, data) {
            if (err) {
                logd("Send email error 12" + err)
            } else {
                var code = Math.floor(Math.random() * 900000) + 100000;     // returns a random integer from 100 000 to 10

                /**
                 * *update to db*
                 */
                mailOptions.to = data.email
                mailOptions.text = code.toString()

                data.tempActivationCode = code.toString()
                data.save()

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        logd("Send email error")
                    } else {
                        logd("Send email success")
                    }
                })
            }
        })
    },

    sendForgotMail: (email, tempPasscode, next) => {
        logd("sendForgotMail: " + user_id);

        if (!next) {
            logd("sendForgotMail missing next callback");
        } else if (!email) {
            logd("sendForgotMail missing email");
            next("missing email");
        } else if (!tempPasscode) {
            logd("sendForgotMail missing tempPasscode");
            next("missing tempPasscode");
        } else {
            mailOptions.to = data.email
            mailOptions.text = code.toString()
            var forgotMailOptions = { 
                from: mailOptions.from,
                // shoudl be to: email,
                to: mailOptions.to,// Using the fake address for now
                subject: "isQED Password Reset",
                text: "You have asked to reset your password. Please go to the validation page and enter the following reset code.\n " + tempPasscode,
            };
            transporter.sendMail(forgotMailOptions, function (err, info) {
                if (err) {
                    logd("sendForgotMail error to "+ email + " : " + err)
                    next(err);
                } else {
                    logd("sendForgotMail success to " + email)
                    next(null, "Success")
                }
            });
        }
    },

}