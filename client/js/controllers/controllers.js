 msAppModule.controller('products', function($scope, ProductFactory)
    {
    	ProductFactory.getProducts(function(data)
    	{
    		$scope.products = data;
    	})
    });