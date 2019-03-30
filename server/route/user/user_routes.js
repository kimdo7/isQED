var users = require('../../controller/user/users')

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

    
}
