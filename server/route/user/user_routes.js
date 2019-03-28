var users = require('../../controller/user/users')

module.exports = function (app) {
	
	app.get('/api', function(req, res){
		if(reg.session.page_views){
			reg.session.page_views++;  // session counter
			res.send("You visied this page " + reg.session.page_views + " times");
		}else{
			reg.session.page_views = 1;
			res.send("Welcome to this page for the first time!");
		}
	});

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
}
