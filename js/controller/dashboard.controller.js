var app = angular.module("app");
app.controller("dashboardCtrl",['$scope','$http','dashboardService','loginService','Upload','urls',function($scope,$http,dashboardService,loginService,Upload,urls){
	$scope.message = {};
	$scope.isButtonBusy = false;
	$scope.uploadPic = function(file){
		$scope.isButtonBusy = true;
		console.log(file);
		var data = {
			category_name : 'Demo',
			file : file
		};
		$http.post(urls.BASE_API_URL+'/docs',file).then(function(res){
			$scope.isButtonBusy = false;
			console.log(res);
		}).catch(function(err){
			console.log(err);
			//callback({error:true,message:'problem in api.'});
		});
	};

	$scope.uploadFile = function(){
		if($scope.yourModel){
			$scope.isButtonBusy = true;
			$http.post(urls.BASE_API_URL+'/docs',$scope.yourModel).then(function(res){
				console.log(res);
				$scope.message = res.data;
				$scope.isButtonBusy = false;
			}).catch(function(err){
				console.log(err);
				//callback({error:true,message:'problem in api.'});
			});
		}else{
			alert('Bady Please select file');
		}
	};

	var getData = function(){
		$http.get(urls.BASE_API_URL+'/readFile').then(function(res){
			console.log(res);
		}).catch(function(err){
			console.log(err);
			//callback({error:true,message:'problem in api.'});
		});
	};
	//getData();
}]);
