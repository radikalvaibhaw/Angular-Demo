angular.module('app')
.factory('settingService',[
	'$rootScope','$location','$http','urls',function($rootScope,$location,$http,urls){
		var getSetting = function(callback){
			$http.get(urls.BASE_API_URL+'/getSetting').then(function(res){
				callback(res.data);
			}).catch(function(err){
				callback({success:false,message:'problem in api.'});
			});
		};

		var updateSetting = function(data,callback){
			$http.post(urls.BASE_API_URL+'/updateSetting',data).then(function(res){
				console.log(res);
				callback(res.data);
			}).catch(function(err){
				callback({success:false,message:'problem in api.'});
			});
		};

		return {
			getSetting: getSetting,
			updateSetting: updateSetting
		};
	}
]);
