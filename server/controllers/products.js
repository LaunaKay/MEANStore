console.log('initial routing through products controller');
var mongoose = require('mongoose');
var Product = mongoose.model('product');

module.exports = (function($scope)
{
	return{
		show: function(req, res)
		{
			console.log('inside message in ctl');
			Product.find({},function(err,results)
			{
				if(err)
				{
					console.log(err);
				}
				else
				{
					res.json(results);
				}
			})
		},
	// 	index: function(request, response){
	// 		console.log("Server / Ctrl / PRoduct - Index")
	// 	},
	// 	new: function(request, response){
	// 		console.log("Server / Ctrl / PRoduct - New")
	// 	},
	// 	create: function(request, response){
	// 		console.log("Server / Ctrl / PRoduct - Create")
	// 		var newUser = new User(request.body)
	// 		newUser.save(function(err, user){
	// 			if(err)
	// 				response.json(err)
	// 			else
	// 				response.json(user)
	// 		})
	// 	},
	// 	edit: function(request, response){
	// 		console.log("Server / Ctrl / PRoduct - Edit")
	// 	},
	// 	update: function(request, response){
	// 		console.log("Server / Ctrl / PRoduct - Update")
	// 	},
	// 	show: function(request, response){
	// 		console.log("Server / Ctrl / PRoduct - Show")
	// 	},
	// 	destroy: function(request, response){
	// 		console.log("Server / Ctrl / PRoduct - Destroy")
	// 	}
	}
})(console.log('returning products controller'));