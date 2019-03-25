var path = require('path')
var fs = require('fs')

/**
 * *read all of the files* in the models_path and require (run) each of the javascript files
 */

var models_path = path.join(__dirname, './../model')

readFiles(models_path)

function readFiles(curr_path) {
	fs.readdirSync(curr_path).forEach(function (file) {
		if (file.indexOf('.js') >= 0)
			require(curr_path + '/' + file)
		else
			readFiles(curr_path + '/' + file)
	})
}
