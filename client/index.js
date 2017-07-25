(function () {
    angular
        .module("APP_MODULE")
        .controller("IndexCtrl", IndexCtrl);

    // IndexCtrl.$inject = ['$filter', '$window', 'IndexService','$state','$stateParams'];
    IndexCtrl.$inject = ['$filter', '$window', '$state', '$stateParams' ];

    function IndexCtrl($filter, $window, $state, $stateParams) {
        var vm = this;
		  stash.IndexCtrl_vm=vm;

        // Exposed to view: data models ----------------
        vm.crumb="hello";
		  vm.menuItems = ["Log In","Log Out"];
		  vm.menuClick=menuClick;

		  function menuClick(i) {
			  console.log("Clicked item",i);
			  if (i==0) $state.go("LoginState",{reload:true});
			  if (i==1) $state.go("YyyState",{reload:true});
		  }
	}
})();
