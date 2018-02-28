var app = angular.module("app");
app.controller("tournamentQuestionCtrl",['$scope','$routeParams','tournamentQuestionService','loginService','urls','$http','Upload','$timeout','$location','tournamentService',
	function($scope,$routeParams,tournamentQuestionService,loginService,urls,$http,Upload,$timeout,$location,tournamentService){
		console.log($routeParams);
		$scope.message = false;
		$scope.modal = {
			list:true,
			add:false
		};
		$scope.level_id=$routeParams.id;
		var getList = function(){
			$scope.isBusyButton = true;
			tournamentQuestionService.getList($routeParams.id,function(res){
				$scope.results = res;
				$scope.isBusyButton = false;
			});
		};

		$scope.goLevelQuestion=function(level_id)
		{
			window.location.href="#!/tournament/question/"+level_id;
		}

		var getListLevels = function(){
			$scope.isBusyButton = true;
			tournamentService.getList(function(res){
				console.log(res);
				$scope.tournamentList = res;
				$scope.isBusyButton = false;
			});
		};
		getListLevels();


		$scope.deleteTournament = function(id){
			var temp = confirm('Are you sure.');
			console.log(temp);
			if(temp){
				$scope.isBusyButton = true;
				tournamentQuestionService.deleteMethod(id,function(res){
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

		$scope.openAddModal = function(){
			$scope.formData = {};
			$scope.formData.question_is = true;
			$scope.message = false;
			$scope.modal = {
				add:true,
				list:false
			};
		};

		$scope.openListModal = function(){
			$scope.message = false;
			getList();
			$scope.modal = {
				list:true,
				add:false
			};
		};

		$scope.openListModal();

		$scope.openEditModal = function(questionId){
			$scope.message = false;
			$scope.modal = {
				list:false,
				add:true
			};
			$scope.isBusyButton = true;
			tournamentQuestionService.getDetails(questionId,function(res){
				$scope.isBusyButton = false;
				$scope.formData = res;
			});
		};

		$scope.addMethod = function(tournament){
			tournament.type = "TOURNAMENT";
			tournament.level_id = $routeParams.id;
			console.log(tournament);
			$http.post(urls.BASE_API_URL+'/question/',tournament).then(function(res){
				if(res.data.success){
					$scope.isBusyButton = false;
					$scope.openListModal();
				}else{
					$scope.isBusyButton = false;
					$scope.message = res.data;
				}
			}).catch(function(err){
				console.log(err);
			});
		};

		$scope.updateMethod = function(tournament){
			tournament.type = "TOURNAMENT";
			tournament.level_id = $routeParams.id;
			$http.post(urls.BASE_API_URL+'/questions/edit/',tournament).then(function(res){
				if(res.data){
					$scope.isBusyButton = false;
					$scope.openListModal();
				}else{
					$scope.isBusyButton = false;
					$scope.message = res.data;
				}
			}).catch(function(err){
				console.log(err);
			});
		};
	}
]);
