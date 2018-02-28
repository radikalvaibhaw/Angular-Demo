var app = angular.module("app", ["ngRoute","ui.router"]);
app.constant('urls',{
		BASE_URL: window.location.origin +'/#!',
		//BASE_API_URL : window.location.origin +'/login'
});
app.config(function($routeProvider,urls,$httpProvider,$stateProvider, $urlRouterProvider) {
	// $httpProvider.interceptors.push(['$q', function ($q) {
 //        return {
	// 		'request': function (config) {
 //                config.headers = config.headers || {};
 //                return config;
 //            },
 //            'responseError': function (response) {
 //                console.log(response);
 //                if (response.status === 401 || response.status === 403 || response.status === 500) {
 //                    var login_url = urls.BASE_URL+'/login';
	// 				window.location.href = login_url;
 //                }
 //                return $q.reject(response);
 //            }
 //        };
 //    }]);

    $urlRouterProvider.otherwise('login');

    $stateProvider
    .state("login", {
        templateUrl : "./view/login.html",
		controller : "loginCtrl"
    })    
	
    
	/*.otherwise({
        templateUrl : "../view/login.html",
		controller : "loginCtrl"
    });*/
});

// app.controller('mainCtrl',function($scope,loginService,$rootScope,urls,$location) {
//     console.log('ok');
// 	loginService.checkProtected(function(res){
// 		if(res.error){
// 			$rootScope.isUserLogin = true;
// 		}else{
// 			$rootScope.isUserLogin = false;
// 		}
// 	});
// 	$scope.logout = function (){
// 		loginService.logout(function(res){
// 			if(!res.error){
// 				$rootScope.isUserLogin = false;
// 				var login_url = urls.BASE_URL+'/login';
// 				window.location.href = login_url;
// 			}
// 		});
// 	};
// 	$scope.getMenuClass = function (path) {
//         return ($location.path().substr(0, path.length) === path) ? 'active' : '';
//     };
// });

// app.factory('iosocket', function ($rootScope) {
//     var iosocket = io.connect('http://192.168.1.133:2217');
//     iosocket.on('connect', function () {
//         iosocket.emit('join', 'Hello World from client');
//         iosocket.on('message', function(message,callback) {
//             //console.log(message);
//         });
//         iosocket.on('disconnect', function() {
//             console.log('disconnect');
//         });
//     });
//     return iosocket;
// });
