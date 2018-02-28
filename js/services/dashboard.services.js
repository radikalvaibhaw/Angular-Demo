angular.module('app')
.factory('dashboardService',[
	'$rootScope','$location','$http','urls',function($rootScope,$location,$http,urls1){
		var login = function(data,callback){
			$http.post(urls.BASE_API_URL+'/login',data).then(function(res){
				if(res.data.success){
					callback({error:false,message:'Login successfully.',data:res.data.data});
				}else{
					callback({error:true,message:'Please enter valid email and password.'});
				}
			}).catch(function(err){
				callback({error:true,message:'problem in api.'});
			});
		};

		var getUsersList = function(callback){
			$http.get(urls.BASE_API_URL+'/users').then(function(res){
				if(res.data.success){
					callback({error:false,message:'Login successfully.',data:res.data.data});
				}
			}).catch(function(err){
				callback({error:true,message:'problem in api.'});
			});
		};
		return {
			login: login,
			getUsersList : getUsersList
		};
	}
]);
