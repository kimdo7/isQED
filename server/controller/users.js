var mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = {
    routes: function(app) {
        console.log("SY controller is user");

        app.post("/api/user", (req, res, next) => {
            this.create(req, res);
        });

        app.get("/api/user", (req, res, next) => {
            this.getAll(req, res);
        });

        app.get("/api/user/:id", (req, res, next) => {
            this.getById(req, res);
        });

        app.put("/api/user/:id", (req, res, next) => {
            this.updateById(req, res);
        });

        app.delete("/api/user/:id", (req, res, next) => {
            this.deleteById(req, res);
        });

        app.post("/api/login", (req,res) => {
            this.login(req, res);
        });
    },

    // CRUD
    create: (req, res, next) => {
           // C create a user
           var newUser = req.body;
           User.create(newUser, (err, user, next) => {
               if (err) {
                   res.status(400).send({
                       message: 'This is an error!'
                    });
               } else {
                   res.json(newUser);
               }  
           });
    },

    getAll: (req, res, next) => {
        // R list all users
        User.find({},function(err,bunchaUsers){
            if (err) {
                res.status(400).send({
                    message: 'This is an error!'
                 });
            } else {
                res.json(bunchaUsers);
            }
        });
    },

    getById: (req, res, next) => {
        // R return one user
        var id = req.params.id;
        User.findById(id, function (err, oneUser) {
            if (err) {
                res.status(400).send({
                    message: 'This is an error!'
                 });
            } else {
                res.json(oneUser);
            }  
        });
     },

    updateById: (req, res, next) => {
        console.log(req.body);
        // U update one user
        var id = req.params.id;
        var update = req.body;
        User.findByIdAndUpdate(id, update, {$set:req.body}, function(err, updateUser){
            if (err) {
                res.status(400).send({
                    message: 'This is an error!'
                 });
            } else {
                res.json(updateUser);
            }  
        })
    },

    deleteById: (req, res, next) => {
        // D delete one user
        var id = req.params.id;
        User.findByIdAndDelete(id, function (err, del) {
            if (err) {
                res.status(400).send({
                    message: 'This is an error!'
                 });
            } else {
                res.json({});
            }  
        });
    },

    // non-CRUD
    login: (req, res) => {
        // do login stuff
    },
    
}