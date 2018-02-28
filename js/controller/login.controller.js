var app = angular.module("app");
app.controller("loginCtrl",['$scope','loginService','urls','$rootScope',function($scope,loginService,urls,$rootScope){
	console.log('In Login Controller:-'+window.location.origin);
	// $rootScope.isUserLogin = false;
	// $scope.adminLogin = function(login){
	// 	$scope.isBusyButton=true;
	// 	loginService.login(login,function(res){
	// 		console.log(res);
	// 		if(!res.error){
	// 			$rootScope.isUserLogin = true;
	// 			window.location.href = urls.BASE_URL;
	// 		}
	// 		$scope.isBusyButton=false;
	// 	});
	// };
}]);
