(function () {
    angular
        .module("APP_MODULE")
        .controller("UsersCtrl", UsersCtrl);

    UsersCtrl.$inject = ['$filter', '$window','$state','$stateParams',"UsersService" ];

    function UsersCtrl($filter, $window, $state, $stateParams, UsersService ) {
        var vm = this;

        // Exposed to view: data models ----------------
        vm.clickLogin=clickLogin;
        vm.clickCancel=clickCancel;

		  
		  stash.IndexCtrl_vm.crumb="Users";

		  function clickLogin() {
		  }

		  function clickCancel() {
		  	  // window.alert("cancel");
			  console.log("Users controller, cancel clicked, sending to MenuState");
			  $state.go("MenuState",{reload:true});
		  }
	}
})();
