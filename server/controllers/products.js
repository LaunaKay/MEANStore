var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function() {
	return {
		index: function(request, response){
			console.log("Server / Ctrl / PRoduct - Index")
		},
		new: function(request, response){
			console.log("Server / Ctrl / PRoduct - New")
		},
		create: function(request, response){
			console.log("Server / Ctrl / PRoduct - Create")
			var newUser = new User(request.body)
			newUser.save(function(err, user){
				if(err)
					response.json(err)
				else
					response.json(user)
			})
		},
		edit: function(request, response){
			console.log("Server / Ctrl / PRoduct - Edit")
		},
		update: function(request, response){
			console.log("Server / Ctrl / PRoduct - Update")
		},
		show: function(request, response){
			console.log("Server / Ctrl / PRoduct - Show")
		},
		destroy: function(request, response){
			console.log("Server / Ctrl / PRoduct - Destroy")
		}
	}
})();