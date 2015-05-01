angular.module('flickrApp')
	   .controller('viewPhotoCtrl',
	   			  ['$scope',
				   '$http',
				   '$stateParams',
				   'photoService',

function($scope, $http, $stateParams, photoService) {
	
	console.log('view photo!');
	console.log($stateParams.photoId);

	photoService.getPhoto($stateParams.photoId, $stateParams.secret).then(function(photo) {
    	$scope.photo = photo;
	});

	photoService.getEXIF($stateParams.photoId, $stateParams.secret).then(function(EXIF) {
    	$scope.EXIF = EXIF;
	});

}]);