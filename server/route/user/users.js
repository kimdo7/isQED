var users = require('../../controller/user/users')

module.exports = function (app) {
    app.post('/api/user', (req, res) => {
        users.create(req, res)
    })

    app.get('/api/users', (req, res) => {
        users.getAll(req, res)
    })

    app.get('/api/user/:id', (req, res) => {
        users.getById(req, res)
    })

    app.put('/api/user/:id', (req, res) => {
        users.updateById(req, res)
    })

    app.delete('/api/user/:id', (req, res) => {
        users.deleteById(req, res)
    })

  app.post('/api/login', (req, res) => {
        users.login(req, res)
  })
}
