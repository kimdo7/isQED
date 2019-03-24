var path = require('path');


var dumpObject = function (obj) {
    var propValue;
    for (var propName in obj) {
        propValue = obj[propName]
        console.log("> ", propName, ": ", "...");
    }
};

module.exports = function (app, geese) {
    // geese is an array of required mongoose models
    for (goose of geese) {
        console.log("SY goose is " + goose);
        dumpObject(goose);
        var modelName = goose.modelName;
        console.log("SY adding CRUD for " + modelName);

        app.post("/api/" + modelName, (req, res, next) => {
            // C create a user
            var newGuy = req.body;
            goose.create(newGuy, (err, guy) => {
                if (err) {
                    res.status(400).send({
                        message: 'This is an error!'
                     });
                } else {
                    res.json(guy);
                }  
            });
        });

        app.get("/api/" + modelName, (req, res, next) => {
            // R list all users
            var query = goose.find();
            query.exec(function (err, bunchaGeese) {
                if (err) {
                    res.status(400).send({
                        message: 'This is an error!'
                     });
                } else {
                    res.json(bunchaGeese);
                }
            });
        });

        app.get("/api/" + modelName + "/:id", goose.findById,(req, res, next) => {
            // R return one user
            var id = req.params.id;
            goose.findById(id, function (err, oneGoose) {
                if (err) {
                    res.status(400).send({
                        message: 'This is an error!'
                     });
                } else {
                    res.json(oneGoose);
                }  
            });
         });

        app.put("/api/" + modelName + "/:id", (req, res, next) => {
            console.log(req.body);
            // U update one user
            var id = req.params.id;
            var update = req.body;
            goose.findByIdAndUpdate(id, update, {$set:req.body}, function(err, updateGoose){
                if (err) {
                    res.status(400).send({
                        message: 'This is an error!'
                     });
                } else {
                    res.json(updateGoose);
                }  
            })
            // res.json(goose.findByIdAndUpdate(id, update));
        });

        app.delete("/api/" + modelName + "/:id", (req, res, next) => {
            // D delete one user
            var id = req.params.id;
            goose.findByIdAndDelete(id, function (err, del) {
                if (err) {
                    res.status(400).send({
                        message: 'This is an error!'
                     });
                } else {
                    res.json({});
                }  
            });
        });
    }

    // this route will be triggered if any of the routes above did not match
    app.all("*", (req, res, next) => {
        console.log("returning index.html");
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });


}        