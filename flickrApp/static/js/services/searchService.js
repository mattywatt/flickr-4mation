angular.module('flickrApp')
       .factory('photoService',
	
	function($http) {
        
		return {
			search: function(searchTerm) {
				var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=239125bcc03d4efa36227d1e4eec735a&text='+searchTerm+'&format=json&nojsoncallback=1';
				return $http.get(url)
							.then(function(result) {
								var photos = result.data.photos.photo;
								var photosResp = [];
								for (var i = 0; i < photos.length; i++) {
									// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
									var url = 'https://farm' + photos[i].farm + '.staticflickr.com/' + photos[i].server + '/' + photos[i].id + '_' + photos[i].secret + '.jpg';

									var photo = {
										id: photos[i].id,
										secret: photos[i].secret,
										title: photos[i].title,
										url: url
									};

									photosResp.push(photo);
								}
                            	return photosResp;
                        });
			},

			getEXIF: function(photoId, secret) {
				var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getExif&api_key=239125bcc03d4efa36227d1e4eec735a&photo_id='+photoId+'&secret='+secret+'&format=json&nojsoncallback=1';
				return $http.get(url)
							.then(function(result) {
								var EXIF = result.data.photo.exif;
								var EXIFResp = [];
								for (var i = 0; i < EXIF.length; i++) {
									EXIFResp.push({
										label: EXIF[i].label,
										value: EXIF[i].raw._content
									});
								}
                            	return EXIFResp;
                        });
			},


			getPhoto: function(photoId, secret) {
				var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=239125bcc03d4efa36227d1e4eec735a&photo_id='+photoId+'&secret='+secret+'&format=json&nojsoncallback=1';
				return $http.get(url)
							.then(function(result) {
								var photo = result.data.photo;
								var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
                            	var photoResp = {
                            		url: url
                            	};
                            	return photoResp;
                        });
			},

		}

	}
);