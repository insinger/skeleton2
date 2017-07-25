(function () {
    // Attaches UsersService service to the main Angular app module
    angular
        .module("APP_MODULE")
        .service("UsersService", UsersService);

    UsersService.$inject = ['$http'];

    function UsersService($http) {

        var service = this;

        // EXPOSED FUNCTIONS -------------------------------------------------------------------------------------------
        service.func=func();

        // Users services -------------------------------------------------------------------------
		  function func() {
		     return true;
		  }
    }
})();
