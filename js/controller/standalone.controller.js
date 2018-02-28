var app = angular.module("app");
app.controller("standaloneCtrl",['$scope','standaloneService','loginService','urls',
	function($scope,standaloneService,loginService,urls){
		$scope.message = false;
		var getList = function(){
			$scope.isBusyButton = true;
			standaloneService.getList(function(res){
				console.log(res);
				$scope.tournamentList = res;
				$scope.isBusyButton = false;
			});
		};
		getList();

		$scope.deleteTournament = function(id){
			var temp = confirm('Are you sure.');
			console.log(temp);
			if(temp){
				$scope.isBusyButton = true;
				standaloneService.deleteMethod(id,function(res){
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

app.controller("addStandaloneCtrl",['$scope','standaloneService','loginService','$location','$routeParams','Upload','urls',
	function($scope,standaloneService,loginService,$location,$routeParams,Upload,urls){
		console.log($routeParams);
		$scope.message = false;
		$scope.image_path='https://mobisolz.info:2217/images/';
		$scope.addMethod = function(tournament){
			if(tournament.image.name)
	        {			
				Upload.upload({
	               url: urls.BASE_API_URL+'/upload',
	               data: {file:tournament.image}
	            }).then(function (resp) {
	            	//console.log(resp);
					$scope.isBusyButton = true;
					tournament.level_image=resp.data.filename;
					standaloneService.addList(tournament,function(res){
						$scope.isBusyButton = false;
						$location.path('/standalone');
					});
				},function (resp) {
	                
	           	}, function (evt) {
	                console.log(evt);
	                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
	                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);          
	           	});	
	        }
	        else{
	        	$scope.isBusyButton = true;
	        	tournament.level_image='education_icon_1.png';
				standaloneService.addList(tournament,function(res){
					$scope.isBusyButton = false;
					$location.path('/standalone');
				});
	        }
		};

		var getData = function(id){
			$scope.isBusyButton = true;
			standaloneService.getDetails(id,function(res){
				$scope.isBusyButton = false;
				$scope.tournament = res;
				//$location.path('/tournament');
			});
		};

		$scope.updateMethod = function(tournament){	
			if(tournament.image.name)
	        {		
				Upload.upload({
	               url: urls.BASE_API_URL+'/upload',
	               data: {file:tournament.image}
	            }).then(function (resp) {
	            	console.log(resp.data);
					$scope.isBusyButton = true;
					tournament.level_image=resp.data.filename;
					standaloneService.updateMethod(tournament,function(res){
						$scope.isBusyButton = false;
						$location.path('/standalone');
					});
				},function (resp) {
	                
	           	}, function (evt) {
	                console.log(evt);
	                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
	                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);          
	           	});
	        }
	        else{
	        	$scope.isBusyButton = true;
				tournament.level_image='education_icon_1.png';
				standaloneService.updateMethod(tournament,function(res){
					$scope.isBusyButton = false;
					$location.path('/standalone');
				});
	        }
			
					
		};

		if($routeParams.id){
			getData($routeParams.id);
		}
	}
]);

app.directive('onlyDigits', function () {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (inputValue) {
                if (inputValue === undefined) return '';
                var transformedInput = inputValue.replace(/[^0-9]/g, '');
                if (transformedInput !== inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }
                return transformedInput;
            });
        }
    };
});
