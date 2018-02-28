angular.module('app')
.factory('dashboardService',[
	'$rootScope','$location','$http','urls',function($rootScope,$location,$http,urls){
		var getCustomerList = function(callback){
			$http.get(urls.BASE_API_URL+'/getCustomerList').then(function(res){
				callback(res.data);
			}).catch(function(err){
				callback({success:false,message:'problem in api.'});
			});
		};
		return {
			getCustomerList: getCustomerList
		};
	}
]);
