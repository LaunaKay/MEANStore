var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
	return {
		index: function(request, response){
			console.log("Server / Ctrl / Customer - Index")
		},
		new: function(request, response){
			console.log("Server / Ctrl / Customer - New")
		},
		create: function(request, response){
			console.log("Server / Ctrl / Customer - Create")
			var newUser = new User(request.body)
			newUser.save(function(err, user){
				if(err)
					response.json(err)
				else
					response.json(user)
			})
		},
		edit: function(request, response){
			console.log("Server / Ctrl / Customer - Edit")
		},
		update: function(request, response){
			console.log("Server / Ctrl / Customer - Update")
		},
		show: function(request, response){
			console.log("Server / Ctrl / Customer - Show")
		},
		destroy: function(request, response){
			console.log("Server / Ctrl / Customer - Destroy")

		}
	}
})();