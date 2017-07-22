(function () {
    // Attaches GroceryService service to the main Angular app module
    angular
        .module("APP_MODULE")
        .service("GroceryService", GroceryService);

    GroceryService.$inject = ['$http'];

    function GroceryService($http) {

        var service = this;

        // EXPOSED FUNCTIONS -------------------------------------------------------------------------------------------
        service.createGrocery=createGrocery;
        service.retrieveGroceriesByID=retrieveGroceriesByID;
        service.retrieveGroceries=retrieveGroceries;
        service.updateGrocery=updateGrocery;
        service.deleteGrocery=deleteGrocery;

        // EXPOSED MODELS -------------------------------------------------------------------------------------------
		  service.stash={}
		  service.stash.brandSearchString='';
		  service.stash.nameSearchString='';
		  service.stash.multiSearchString='';

        // Grocery services -------------------------------------------------------------------------

        function createGrocery(grocery) {
            return $http({
                method: 'POST',
                url: 'api/groceries',
                data: {grocery: grocery}
            });
        }

        function retrieveGroceriesByID(id) {
            return $http({
                method: 'GET',
                url: 'api/groceries/'+id,
            });
        }

        function retrieveGroceries(searchField,term,direction) {
				var searchString="";
				var params={};
				var dir='a';
				if (direction) dir=direction;
				if (searchField=="brand" || searchField=="name") {
					params[searchField]=term;
					params["orderfield"]=searchField;
					params["orderdirection"]=dir;
				} else {
					params["brand"]=term;
					params["name"]=term;
					params["orderfield"]="brand";
					params["orderdirection"]=dir;
				}
            return $http({
                method: 'GET',
                url: 'api/groceries/',
                params: params
            });
        }

        function updateGrocery(id,grocery) {
            return $http({
                method: 'PUT',
                url: 'api/groceries/' + id,
                data: {
                    grocery: grocery
                }
            });
        }

        function deleteGrocery(id) {
            return $http({
                method: 'DELETE',
                url: 'api/groceries/' + id,
            });
        }

    }
})();
