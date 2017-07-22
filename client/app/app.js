// Create the main application module
(function () {
    angular
        .module("APP_MODULE", [
            "ngMessages",   // ngMessages simple show/hide form error messages, work with ngModel $error object
            "ngAnimate",    // ngAnimate module supports both CSS-based and JS-based animations via callback hooks
            "ui.router"     // Client-side #-based routing
   ]);

 	angular.module("APP_MODULE").config(myRoutesConfig);

  	myRoutesConfig.$inject=["$stateProvider","$urlRouterProvider"];

  	// Define UI states

 	function myRoutesConfig($stateProvider,$urlRouterProvider) {
 		$stateProvider.state('XxxState', {url:"/XxxUrl",templateUrl:"/app/xxx_feature/xxx_view.html",controller:'XxxCtrl as ctrl'});
 		$stateProvider.state('YyyState', {url:"/YyyUrl",templateUrl:"/app/yyy_feature/yyy_view.html",controller:'YyyCtrl as ctrl'});
 		$urlRouterProvider.otherwise("/XxxUrl"); // also sets initial state if not provided
	}
})();
               
