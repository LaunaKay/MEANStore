msAppModule.config(function ($routeProvider)
	    {
	        $routeProvider
	            .when('/',
	            {
	                templateUrl: 'partials/dashboard.html',
	                controller: "customers",
        			controllerAs: "customers"
	            })
	            .when('/products',
	            {
	                templateUrl:'partials/products.html',
	                controller:"products",
	                controllerAs:"products"
	            })
	            .when('/orders',
	            {
	            	templateUrl:'partials/orders.html',
	            	controller:"products",
	            	controllerAs:"products"

	            })
	            .when('/customers',
	            {
	            	templateUrl:'partials/customers.html',
	            	controller:"customers",
	            	controllerAs:"customers"
	            })
	            .when('/settings',
	            {
	            	templateUrl:'partials/settings.html',
	            	controller:"customers",
	            	controllerAs:"customers"
	            })
	            .otherwise(
	            {
	                redirectTo: '/'
	            });
	    });