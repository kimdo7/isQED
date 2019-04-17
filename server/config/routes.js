var path = require('path')
var fs = require('fs')

// create a variable that points to the cpontollers folder
// read all of the files in the contollers_path and require (run) each of the javascript files
var route_path = path.join(__dirname, './../route')

function exportRoutes(curr_path, app) {
    fs.readdirSync(curr_path).forEach(function (file) {
        if (file.indexOf('.js') >= 0)
            require(curr_path + '/' + file)(app)
        else
            exportRoutes(curr_path + '/' + file, app)
    })
}

module.exports = function (app) {
	/**
	 * EXPORT *ALL* THE ROUTE
	 */

    exportRoutes(route_path, app)

    // this route will be triggered if any of the routes above did not match
    app.all('*', (req, res) => {
        res.sendFile(path.resolve('./frontend/dist/frontend/index.html'))
    })
}
