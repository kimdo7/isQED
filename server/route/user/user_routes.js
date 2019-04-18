var users = require('../../controller/user/users')

/**
 * We don't expose the raw database to end users.
 * Right now while we are debugging, it's OK to have the
 * user information available to anyone who isn't logged in.
 * But we NEVER want the DEBUG routes to go to production, 
 * because there is zero protection here to ensure users 
 * only get their own info.
 */
const DEBUG = true;

module.exports = function (app) {
    if (DEBUG) {
        /**
         * @get all user
         */
        app.get('/api/user', (req, res) => {
            users.debugGetAll(req, res)
        })

        /**
         * @Register a user
         */
        app.post('/api/user/register', (req, res) => {
            users.register(req, res)
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
}
