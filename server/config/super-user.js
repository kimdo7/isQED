const readline = require('readline')
var mongoose = require('mongoose')
var User = mongoose.model('User')
var Login = mongoose.model('Login')
var bcrypt = require('bcrypt');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getFirstName = () => {
    return new Promise((resolve, reject) => {
        rl.question('Enter your first name: ', (answer) => {
            resolve(answer)
        })
    })
}

const getLastName = () => {
    return new Promise((resolve, reject) => {
        rl.question('Enter your last name: ', (answer) => {
            resolve(answer)
        })
    })
}

const getEmail = () => {
    return new Promise((resolve, reject) => {
        rl.question('Enter your email: ', (answer) => {
            resolve(answer)
        })
    })
}

const getPassword = () => {
    return new Promise((resolve, reject) => {
        rl.question('Enter your password: ', (answer) => {
            resolve(answer)
        })
    })
}

module.exports = {
    create: async () => {
        var obj = {
            first_name: "Kim",
            last_name: "Do",
            email: "kim@admin.com",
            password: "Helloworld123"

        }
        await getFirstName().then(first_name => obj.firstName = first_name)
        await getLastName().then(last_name => obj.last_name = last_name)
        await getEmail().then(email => obj.email = email)
        await getPassword().then(password => obj.password = password)
        rl.close()

        User.create({
            first_name: obj.first_name,
            last_name: obj.last_name,
            email: obj.email,
        }, function (err, user) {
            if (err) {
                console.log(err)
                process.exit(1)
                return
            }

            Login.create({
                password: bcrypt.hashSync(obj.password, 10),
                email: obj.email,
                is_email_verified: true,
                type: 1
            }, function (err, login) {
                if (err) {
                    console.log(err)
                    process.exit(1)
                    return
                }

                user.loginId = login._id
                user.save()


                console.log("\nSuccesss Create User")
                process.exit(1)
            })

        })

        // process.exit(1)
    }
}