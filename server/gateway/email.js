var nodemailer = require('nodemailer')
var mongoose = require('mongoose')
var Login = mongoose.model('Login')

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
        console.log(login_id)
        Login.findById(login_id, function (err, data) {
            if (err) {
                console.log("Send email error 12" + err)
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

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log("Send email error")
                    } else {
                        console.log("Send email sucess")
                    }
                })
            }
        })
    }

}