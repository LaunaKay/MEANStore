msAppModule.factory('ProductFactory', function($http)
    {
    	var factory = {};
    	var products = [];

    	factory.getProducts = function(cbProducts)
    	{
    		$http.get('/products').success(function(output)
    		{
    			products = output;
    			cbProducts(products);
    		})
    	}
    	return factory;
    });
