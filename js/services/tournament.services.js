angular.module('app')
.factory('tournamentService',[
	'$rootScope','$location','$http','urls',function($rootScope,$location,$http,urls){
		var getList = function(callback){
			$http.get(urls.BASE_API_URL+'/tournament/').then(function(res){
				callback(res.data);
			}).catch(function(err){
				callback({success:false,message:'problem in api.'});
			});
		};

		var addList = function(data,callback){
			$http.post(urls.BASE_API_URL+'/tournament/',data).then(function(res){
				console.log(res);
				callback(res.data);
			}).catch(function(err){
				callback({success:false,message:'problem in api.'});
			});
		};

		var deleteTournament = function(id,callback){
			$http.delete(urls.BASE_API_URL+'/tournament/'+id).then(function(res){
				callback(res.data);
			}).catch(function(err){
				callback({success:false,message:'problem in api.'});
			});
		};

		var getDetails = function(id,callback){
			$http.get(urls.BASE_API_URL+'/tournament/details/'+id).then(function(res){
				callback(res.data);
			}).catch(function(err){
				callback({success:false,message:'problem in api.'});
			});
		};

		var updateMethod = function(data,callback){
			$http.post(urls.BASE_API_URL+'/tournament/edit/',data).then(function(res){
				callback(res.data);
			}).catch(function(err){
				callback({success:false,message:'problem in api.'});
			});
		};

		return {
			getList: getList,
			addList :addList,
			deleteTournament : deleteTournament,
			getDetails : getDetails,
			updateMethod : updateMethod
		};
	}
]);
