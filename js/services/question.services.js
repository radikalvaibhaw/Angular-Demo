angular.module('app')
.factory('questionService',[
	'$rootScope','$location','$http','urls',function($rootScope,$location,$http,urls){
		var getList = function(callback){
			$http.get(urls.BASE_API_URL+'/question/').then(function(res){
				callback(res.data);
			}).catch(function(err){
				callback({success:false,message:'problem in api.'});
			});
		};

		var addList = function(data,callback){
			$http.post(urls.BASE_API_URL+'/question/',data).then(function(res){
				console.log(res);
				callback(res.data);
			}).catch(function(err){
				callback({success:false,message:'problem in api.'});
			});
		};

		var deleteMethod = function(id,callback){
			$http.delete(urls.BASE_API_URL+'/question/'+id).then(function(res){
				callback(res.data);
			}).catch(function(err){
				callback({success:false,message:'problem in api.'});
			});
		};

		var getDetails = function(id,callback){
			$http.get(urls.BASE_API_URL+'/question/details/'+id).then(function(res){
				callback(res.data);
			}).catch(function(err){
				callback({success:false,message:'problem in api.'});
			});
		};

		var updateMethod = function(data,callback){
			$http.post(urls.BASE_API_URL+'/question/edit/',data).then(function(res){
				callback(res.data);
			}).catch(function(err){
				callback({success:false,message:'problem in api.'});
			});
		};

		return {
			getList: getList,
			addList :addList,
			deleteMethod : deleteMethod,
			getDetails : getDetails,
			updateMethod : updateMethod
		};
	}
]);
