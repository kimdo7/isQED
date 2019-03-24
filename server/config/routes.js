var path = require('path');
var fs   = require("fs")

// create a variable that points to the cpontollers folder
// read all of the files in the contollers_path and require (run) each of the javascript files
var controllers_path = path.join(__dirname, './../controller');
var controllers = [];

fs.readdirSync(controllers_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    var controller = require(controllers_path + '/' + file);
    controllers.push(controller);
   }
});

module.exports = function (app) {
    // each controller sets up its own routes. This stops routes from beommig a huge mess.
    // routes portion no longer needs to be touched. 
    // Copy controllers/users format
    for (controller of controllers) {
        controller.routes(app);
     };

    // this route will be triggered if any of the routes above did not match
    app.all("*", (req, res, next) => {
        console.log("returning index.html");
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}        