angular.module('app')
.factory('standaloneQuestionService',[
	'$rootScope','$location','$http','urls',function($rootScope,$location,$http,urls){
		var getList = function(id,callback){
			$http.get(urls.BASE_API_URL+'/questions/'+id).then(function(res){
				callback(res.data);
			}).catch(function(err){
				callback({success:false,message:'problem in api.'});
			});
		};

		var addList = function(data,callback){
			$http.post(urls.BASE_API_URL+'/questions/',data).then(function(res){
				console.log(res);
				callback(res.data);
			}).catch(function(err){
				callback({success:false,message:'problem in api.'});
			});
		};

		var deleteMethod = function(id,callback){
			$http.delete(urls.BASE_API_URL+'/questions/'+id).then(function(res){
				callback(res.data);
			}).catch(function(err){
				callback({success:false,message:'problem in api.'});
			});
		};

		var getDetails = function(id,callback){
			$http.get(urls.BASE_API_URL+'/questions/details/'+id).then(function(res){
				callback(res.data);
			}).catch(function(err){
				callback({success:false,message:'problem in api.'});
			});
		};

		var updateMethod = function(data,callback){
			$http.post(urls.BASE_API_URL+'/questions/edit/',data).then(function(res){
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
