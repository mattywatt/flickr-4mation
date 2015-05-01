angular.module('flickrApp')
	   .controller('searchFormCtrl',
	   			  ['$scope',
				   '$http',
				   '$location',
				   'photoService',

function($scope, $http, $location, photoService) {

	$scope.search = function() {
		console.log('searching!' + $scope.searchTerm);
		photoService.search($scope.searchTerm).then(function(urls) {
        	$scope.photos = urls;
    	});
	};

}]);