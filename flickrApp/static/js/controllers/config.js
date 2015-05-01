angular.module('flickrApp', ['ui.router'])
	   .config(['$stateProvider',

function($stateProvider) {

	$stateProvider
		.state('viewPhoto', {
            url: '/photo/:photoId/:secret',
            templateUrl: 'static/js/templates/viewphoto.html',
            controller: 'viewPhotoCtrl'
        })
        .state('search', {
            url: '/search',
            templateUrl: 'static/js/templates/searchform.html',
            controller: 'searchFormCtrl'
        });

}]);

