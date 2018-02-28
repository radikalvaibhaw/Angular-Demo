angular.module('app')
.factory('userService',[
	'$rootScope','$location','$http','urls',function($rootScope,$location,$http,urls){
		var getUsersList = function(callback){
			$http.get(urls.BASE_API_URL+'/users').then(function(res){
				console.log(res.data);
				//if(res.data.success){
					callback({error:false,message:'Get user successfully.',data:res.data});
				//}
			}).catch(function(err){
				callback({error:true,message:'problem in api.'});
			});
		};
		var activeDeactiveUser = function(status,userId,callback){
			$http.get(urls.BASE_API_URL+'/user/'+status+'/'+userId).then(function(res){
				console.log(res.data);
				//if(res.data.success){
					callback({error:false,message:'update user successfully.',data:res.data});
				//}
			}).catch(function(err){
				callback({error:true,message:'problem in api.'});
			});
		};
		return {
			getUsersList : getUsersList,
			activeDeactiveUser : activeDeactiveUser
		};
	}
]);
