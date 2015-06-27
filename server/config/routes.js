module.exports = function(app) {
	console.log('inside routes');
  	var customers = require('../controllers/customersController.js');
  	var products = require('../controllers/products.js');

// Customers
    // Index
    app.get('/customers', function(req, res)
    	{
    		console.log('inside routes/customers');
    		customers.index(req, res)
    	})
	// New
	app.get('/customers/new', function(request, response) { customers.create(request, response) })
	// Show
	app.get('/customers/:id', function(request, response) { customers.show(request, response) })
	// Edit
	app.post('/customers/:id/edit', function(request, response) { customers.update(request, response) })
	// Create
	app.post('/customers', function(request, response) { customers.create(request, response) })
	// Destroy app.delete('/customers/:id')
	app.post('/customers/:id/destroy', function(request, response) { customers.destroy(request, response) })
	// Update app.put/patch('/customers/:id')
	app.post('/customers/:id/update', function(request, response) { customers.update(request, response) })

//PRODUCTS
    // Index
	app.get('/products', function(req, res)
		{
			products.show(req,res);
		});
	// New
	app.get('/products/new', function(req, res) { products.create(req, res) })
	// Show
	app.get('/products/:id', function(req, res) { products.show(req, res) })
	// Edit
	app.post('/products/:id/edit', function(req, res) { products.update(req, res) })
	// Create
	app.post('/products', function(req, res) { products.create(req, res) })
	// Destroy app.delete('/products/:id')
	app.post('/products/:id/destroy', function(req, res) { products.destroy(req, res) })
	// Update app.put/patch('/products/:id')
	app.post('/products/:id/update', function(req, res) { products.update(req, res) })



// WILDCARD Redirect to Mask unused urls.
	app.get('/*', function(request, response){
		response.redirect('/')
	})
	app.post('/*', function(request, response){
		response.redirect('/')
	})

}