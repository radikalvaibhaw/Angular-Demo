var app = angular.module("app");
app.controller("tournamentCtrl",['$scope','tournamentService','loginService','urls',
	function($scope,tournamentService,loginService,urls){
		$scope.message = false;
		var getList = function(){
			$scope.isBusyButton = true;
			tournamentService.getList(function(res){
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
				tournamentService.deleteTournament(id,function(res){
					console.log(res);
					$scope.message = res;
					if(res){
						getList();
					}else{
						$scope.isBusyButton = false;
						console.log('error');
					}
					// $scope.tournamentList = res;
					// $scope.isBusyButton = false;
				});
			}
		};
	}
]);

app.controller("addTournamentCtrl",['$scope','tournamentService','loginService','$location','$routeParams','Upload','urls',
	function($scope,tournamentService,loginService,$location,$routeParams,Upload,urls){
		console.log($routeParams);
		$scope.message = false;
		$scope.image_path='https://mobisolz.info:2217/images/';
		$scope.addMethod = function(tournament){

			if(tournament.voucher.name)
			{
				Upload.upload({
	               url: urls.BASE_API_URL+'/upload',
	               data: {file:tournament.voucher}
	            }).then(function (resp) {
	            	tournament.gift_voucher=resp.data.filename;
	            	if(tournament.image.name)
	            	{
	            		Upload.upload({
			                url: urls.BASE_API_URL+'/upload',
			                data: {file:tournament.image}
			            }).then(function (resp2) {
			            	//console.log(resp);
							$scope.isBusyButton = true;
							tournament.level_image=resp2.data.filename;
							tournamentService.addList(tournament,function(res){
								$scope.isBusyButton = false;
								$location.path('/tournament');
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
						tournamentService.addList(tournament,function(res){
							$scope.isBusyButton = false;
							$location.path('/tournament');
						});
	            	}
	            	
	            },function (resp) {
	                
	           	}, function (evt) {
	                console.log(evt);
	                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
	                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);          
	           	});
			}
			else{
				if(tournament.image.name)
            	{
            		Upload.upload({
		                url: urls.BASE_API_URL+'/upload',
		                data: {file:tournament.image}
		            }).then(function (resp2) {
		            	//console.log(resp);
						$scope.isBusyButton = true;
						tournament.level_image=resp2.data.filename;
						tournamentService.addList(tournament,function(res){
							$scope.isBusyButton = false;
							$location.path('/tournament');
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
					tournamentService.addList(tournament,function(res){
						$scope.isBusyButton = false;
						$location.path('/tournament');
					});
            	}
			}
		};

		var getData = function(id){
			$scope.isBusyButton = true;
			tournamentService.getDetails(id,function(res){
				$scope.isBusyButton = false;
				$scope.tournament = res;
				//$location.path('/tournament');
			});
		};

		$scope.updateMethod = function(tournament){
			console.log(tournament);

			if(tournament.voucher.name)
			{
				Upload.upload({
	               url: urls.BASE_API_URL+'/upload',
	               data: {file:tournament.voucher}
	            }).then(function (resp) {
	            	tournament.gift_voucher=resp.data.filename;
	            	if(tournament.image.name)
	            	{
	            		Upload.upload({
			                url: urls.BASE_API_URL+'/upload',
			                data: {file:tournament.image}
			            }).then(function (resp2) {
			            	//console.log(resp);
							$scope.isBusyButton = true;
							tournament.level_image=resp2.data.filename;
							tournamentService.updateMethod(tournament,function(res){
								$scope.isBusyButton = false;
								$location.path('/tournament');
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
	            		tournamentService.updateMethod(tournament,function(res){
							$scope.isBusyButton = false;
							$location.path('/tournament');
						});
	            	}
	            	
	            },function (resp) {
	                
	           	}, function (evt) {
	                console.log(evt);
	                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
	                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);          
	           	});	
			}
			else{
				if(tournament.image.name)
            	{
            		Upload.upload({
		                url: urls.BASE_API_URL+'/upload',
		                data: {file:tournament.image}
		            }).then(function (resp2) {
		            	//console.log(resp);
						$scope.isBusyButton = true;
						tournament.level_image=resp2.data.filename;
						tournamentService.updateMethod(tournament,function(res){
							$scope.isBusyButton = false;
							$location.path('/tournament');
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
            		tournamentService.updateMethod(tournament,function(res){
						$scope.isBusyButton = false;
						$location.path('/tournament');
					});
            	}	
			}
			
		};

		if($routeParams.id){
			getData($routeParams.id);
		}
	}
]);
