var app = angular.module("app");
app.controller("transactionsCtrl",['$scope','transactionsService','loginService',
	function($scope,transactionsService,loginService){
		$scope.message = false;
		var currentPage = 0;
		$scope.limit = 10;
		$scope.search = '';
		var getList = function(currentPage){
			$scope.isBusyButton = true;
			transactionsService.getList(currentPage,$scope.search,$scope.limit,function(res){
				$scope.transactionList = res.data;
				$scope.isBusyButton = false;
			});
		};
		getList(currentPage);

		$scope.loadMoreFunction = function(){
			currentPage = currentPage +1;
			$scope.message = false;
			$scope.isBusyButton = true;
			transactionsService.getList(currentPage,$scope.search,$scope.limit,function(res){
				//$scope.transactionList = res.data;
				console.log(res.data);
				if(res.data.length===$scope.limit){
					angular.forEach(res.data,function(val){
						$scope.transactionList.push(val);
					});
					$scope.isBusyButton = false;
				}else if(res.data.length>0){
					angular.forEach(res.data,function(val){
						$scope.transactionList.push(val);
					});
					$scope.isBusyButton = false;
					$scope.message = "No more data to load.";
				}else{
					$scope.isBusyButton = false;
					$scope.message = "No more data to load.";
				}
			});
		};

		$scope.searchFunction = function(){
			$scope.message = false;
			$scope.isBusyButton = true;
			currentPage = 0;
			getList(currentPage);
		};

		$scope.resetFunction = function(){

		};
	}
]);
