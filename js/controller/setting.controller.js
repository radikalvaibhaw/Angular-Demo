var app = angular.module("app");
app.controller("settingCtrl",['$scope','settingService','loginService',function($scope,settingService,loginService){

	$scope.getSettingLists = function(){
		settingService.getSetting(function(res){
			$scope.settingList = res.result;
		});
	};

	$scope.openViewModel = function(){
		$scope.getSettingLists();
		$scope.pageModel={
			viewModel:true,
			addModel:false,
			editModel:false
		};
	};
	$scope.openViewModel();
	$scope.openEditModel = function(edit){
		$scope.edit = edit;
		$scope.pageModel={
			viewModel:false,
			addModel:false,
			editModel:true
		};
	};

	$scope.updateMethod = function(edit){
		$scope.isBusyButton = true;
		var req={
			value:edit.value,
			id:edit.id
		};
		settingService.updateSetting(req,function(res){
			console.log(res);
			if(res.success){
				$scope.openViewModel();
			}else{
				
			}
			$scope.isBusyButton = false;
		});
	};
}]);
