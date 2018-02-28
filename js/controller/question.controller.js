var app = angular.module("app");
app.controller("questionCtrl",['$scope','questionService','loginService','urls','Upload','$timeout',
	function($scope,questionService,loginService,urls,Upload,$timeout){
		$scope.message = false;
		var getList = function(){
			$scope.isBusyButton = true;
			questionService.getList(function(res){
				$scope.results = res;
				$scope.isBusyButton = false;
			});
		};
		getList();

		$scope.deleteTournament = function(id){
			var temp = confirm('Are you sure.');
			console.log(temp);
			if(temp){
				$scope.isBusyButton = true;
				questionService.deleteMethod(id,function(res){
					console.log(res);
					$scope.message = res;
					if(res){
						getList();
					}else{
						$scope.isBusyButton = false;
						console.log('error');
					}
				});
			}
		};
	}
]);

app.controller("addQuestionCtrl",['$scope','questionService','loginService','$location','$routeParams','Upload','urls','$http',
	function($scope,questionService,loginService,$location,$routeParams,Upload,urls,$http){
		console.log($routeParams);
		$scope.message = false;
		$scope.addMethod = function(tournament,mp3){
			tournament.mp3 = mp3;
			console.log(tournament);
			$http.post(urls.BASE_API_URL+'/question/',tournament).then(function(res){
				if(res.data.success){
					$scope.isBusyButton = false;
					$location.path('/question');
				}else{
					$scope.isBusyButton = false;
					$scope.message = res.data;
				}
			}).catch(function(err){
				console.log(err);
				//callback({success:false,message:'problem in api.'});
			});
			// $scope.isBusyButton = true;
			/*questionService.addList(tournament,function(res){
				$scope.isBusyButton = false;
				$location.path('/question');
			});*/
		};

		var getData = function(id){
			$scope.isBusyButton = true;
			questionService.getDetails(id,function(res){
				$scope.isBusyButton = false;
				$scope.formData = res;
				//$location.path('/tournament');
			});
		};

		$scope.updateMethod = function(tournament){
			$scope.isBusyButton = true;
			questionService.updateMethod(tournament,function(res){
				$scope.isBusyButton = false;
				$location.path('/question');
			});
		};

		if($routeParams.id){
			getData($routeParams.id);
		}
	}
]);
