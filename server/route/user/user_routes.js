var users = require('../../controller/user/users')
var email = require('../../gateway/email')

module.exports = function (app) {

    app.get('/api', function (req, res) {
        if (req.session.page_views) {
            req.session.page_views++;  // session counter
            res.send("You visited this page " + req.session.page_views + " times");
        } else {
            req.session.page_views = 1;
            res.send("Welcome to this page for the first time!");
        }
    });

    app.post('/api/user', (req, res) => {
        users.register(req, res)
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

    app.get('/api/user/email/:id', (req, res) => {
        email.sendMail(req, res)
    })

    app.get("/api/user/activate/:id/:code", (req, res) => {
        users.activateById(req, res)
    })
}
