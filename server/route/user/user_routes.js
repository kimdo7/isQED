var users = require('../../controller/user/users')
var email = require('../../gateway/email')

module.exports = function (app) {
    /**
     * @Regiseter new user
     */
    app.post('/api/user', (req, res) => {
        users.register(req, res)
    })

    /**
     * @get all user
     */
    app.get('/api/users', (req, res) => {
        users.getAll(req, res)
    })

    /**
     * @get user by id
     */
    app.get('/api/user/:id', (req, res) => {
        users.getById(req, res)
    })

    /**
     * @update user by id
     */
    app.put('/api/user/:id', (req, res) => {
        users.updateById(req, res)
    })

    /**
     * @delete user by id
     */
    app.delete('/api/user/:id', (req, res) => {
        users.deleteById(req, res)
    })

    /**
     * @send new action code to user
     */
    app.get('/api/user/activateCode/email/:id', (req, res) => {
        email.sendMail(req, res)
    })

    /**
     * @ativate user
     */
    app.get("/api/user/activate/:id/:code", (req, res) => {
        users.activateById(req, res)
    })

    /**
     * @login user
     */
    app.post("/api/user/login", (req, res) => {
        users.login(req, res)
    })

    /**
     * @request *forgot pass*
     */
    app.post("/api/user/requestForgotPassword", (req, res) => {
        users.requestForgotPassword(req, res)
    })

    /**
     * @reset password
     */
    app.post("/api/user/resetPassword/:id", (req, res) => {
        users.resetPassword(req, res)
    })



}
