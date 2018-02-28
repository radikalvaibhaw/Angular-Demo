angular.module('app')
.factory('transactionsService',[
	'$rootScope','$location','$http','urls',function($rootScope,$location,$http,urls){
		var getList = function(currentPage,search,limit,callback){
			if(search===''){
				search = 0;
			}
			$http.get(urls.BASE_API_URL+'/getTransactionList/'+currentPage+'/'+search+'/'+limit).then(function(res){
				callback(res.data);
			}).catch(function(err){
				callback({success:false,message:'problem in api.'});
			});
		};

		return {
			getList: getList
		};
	}
]);
