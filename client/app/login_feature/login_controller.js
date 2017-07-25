(function () {
    angular
        .module("APP_MODULE")
        .controller("LoginCtrl", LoginCtrl);

    LoginCtrl.$inject = ['$filter', '$window','$state','$stateParams',"LoginService" ];

    function LoginCtrl($filter, $window, $state, $stateParams, LoginService ) {
        var vm = this;

        // Exposed to view: data models ----------------
        vm.clickLogin=clickLogin;
        vm.clickCancel=clickCancel;

		  stash.IndexCtrl_vm.crumb="Log In";

		  function clickLogin() {
		  }

		  function clickCancel() {
			  console.log("Login controller, cancel clicked, sending to Welcome state");
			  $state.go("WelcomeState",{reload:true});
		  }
	}
})();
