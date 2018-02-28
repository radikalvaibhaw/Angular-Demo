var app = angular.module("app");
app.controller("userCtrl",['$scope','userService','loginService','iosocket',function($scope,userService,loginService,iosocket){
	loginService.checkProtected(function(res){
		console.log(res);
	});

	var getUsersList = function(){

		iosocket.send({"type":"LOGIN","facebook_id":"1715429138515706","name":"Barnali Bhowmik Samanta","email":"barnalifacebook@gmail.com","profile_image_url":"https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/27332317_1703787213013232_7911176795124219504_n.jpg?oh=a7dd9b9a4f919c3f9175c7b0cc529308&oe=5B200C69"});

		iosocket.on('message', function(data) {
		    console.log(data);
		    //getStandaloneList();
		});
	};
	getUsersList();

	var getStandaloneList = function(){

		iosocket.send({"type":"STANDALONE"});

		iosocket.on('message', function(data) {
		    console.log(data);
		});
	};
	

	/*$scope.activeDeactiveUser=function(status,userId)
	{
		userService.activeDeactiveUser(status,userId,function(res){
			getUsersList();
		});
	}*/


	

	//iosocket.send({"type":"TOURNAMENT"});

}]);
