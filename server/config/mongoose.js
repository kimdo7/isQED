var path = require('path');
var fs   = require("fs")

/**
 * *create* a variable that points to the models folder
 */
var models_path = path.join(__dirname, './../model');

/**
 * *read all of the files* in the models_path and require (run) each of the javascript files
 */
// 

var geese = [];
readFiles(models_path, geese)

function readFiles(curr_path, geese){
    console.log("SY reading " + curr_path);
    fs.readdirSync(curr_path).forEach(function (file) {
        if (file.indexOf('.js') >= 0) {
            console.log("SY requiring " + file);
            var goose = require(curr_path + '/' + file);
            geese.push(goose);
        } else {
            readFiles(curr_path + '/' + file, geese);
        }
    })
}

module.exports = geese;