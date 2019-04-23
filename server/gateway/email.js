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
const serverUrl = "http://localhost:8000"

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kim.h.do.seven@gmail.com',
        pass: 'dorke5-maWciz-gygtup'
    }
})

var fromAddress = 'kim.h.do.seven@gmail.com'
var fakeToAddress = 'fake@example.org'

module.exports = {
    /**
     * @sendActivation sends an email to the user if they aren't activated
     * 
     * @param login_id the user to send the mail to
     * @param next a callback (err) which gets null for success
     */
    sendActivation: (login_id, next) => {
        if (!login_id) {
            logd("sendActivation: Missing required login_id: " +  login_id)
            next("Missing user login id");
            return;  
        }
        Login.findById(login_id, (findErr, login) => {
            if (findErr) {
                logd("Send email error 12" + findErr)
                next("Failed to send " + findErr);
                return;
            } 
            if (!login) {
                logd("sendActivation: Could not find " +  login_id)
                next("Could not find user");
                return;  
            }
            if (login.isEmailVerified) {
                logd("not sending email because it is already verified");
                next("User is already activated ");
                return;
            }
            var code = Math.floor(Math.random() * 900000) + 100000;
            var codeString = "" + code;
            login.tempActivationCode = codeString;
            login.save((saveErr, savedLogin) => {
                if(saveErr) {
                    logd("Failed to save activation code")
                    next("Failed to save activation code " + saveErr)
                    return;
                }
                var emailBody = "Your activation code is " + codeString + "\n Click this link " + serverUrl + "/activate/" + login_id + "/" + codeString + "\n" // localhost:8000/activate/:login_id/:user_validationcode
                // Successfully saved the code, so we can send the email
                var activateMailOptions = {
                    from: fromAddress, 
                    //to: fakeToAddress, // for now, instead of login.email,
                    to: login.email, 
                    subject: "isQED account verification",
                    text: emailBody,
                }
                transporter.sendMail(activateMailOptions, function (sendErr, info) {
                    if (sendErr) {
                        logd("Send email error");
                        next("Send email error " + sendErr);
                        return
                    } 
                    logd("Send email success");
                    next(null);
                })
            });
        })
    },

    sendTempPassword: (login_id, tempPasscode, next) => {
        logd("sendTempPassword: " + login_id);

        if (!next) {
            logd("sendTempPassword missing next callback");
            return
        } else if (!login_id) {
            logd("sendTempPassword missing login_id");
            next("missing login_id");
            return
        } else if (!tempPasscode) {
            logd("sendTempPassword missing tempPasscode");
            next("missing tempPasscode");
            return
        }
        
        logd("sendTempPassword: about to findById " + login_id);
        Login.findById(login_id, function (findErr, login) {
            logd("sendTempPassword: in findById callback with err: %o and login: %o");
            if (findErr) {
                logd("Find email error" + findErr)
                next("Failed to send " + findErr);
                return
            } 

            if (!login) {
                logd("Find by login ID failed ")
                next("Failed to find user");
                return
            }

            logd("sendTempPassword: about to set options");

            var forgotMailOptions = { 
                from: fromAddress,
                // to: fakeToAddress,// for now, instead of to: login.email
                to: login.email,
                subject: "isQED Password Reset",
                // Still need to escape the email address
                text: "You have asked to reset your password. Please go to the validation page and enter the following reset code.\n " + tempPasscode + "\n Or click this link\n  " + serverUrl + "/reset_password/email/" + login.email + "/" + tempPasscode + "\n",
            };

            logd("sendTempPassword: about to send mail: %o", forgotMailOptions);
            transporter.sendMail(forgotMailOptions, function (err, info) {
                logd("sendTempPassword: in send mail callback");
                if (err) {
                    logd("sendTempPassword error to %s : %o", login.email, err)
                    next(err);
                    return
                }

                logd("sendTempPassword success to %s", login.email)
                next(null, "Success")
            });
        })
        logd("sendTempPassword: past findById");
    },

}