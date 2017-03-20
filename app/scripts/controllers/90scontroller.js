'use strict';

/**
 * @ngdoc function
 * @name transportApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the transportApp
 */

angular.module('transportApp')
  .controller('90Ctrl', function ($scope,movieFact,brodcast) {
  	var era=brodcast.get();
  	//var era='90';
movieFact.loadByEra(era).then(function moviesreceived (response){
	
	console.debug($scope.$MainCtrl);
	$scope.movies = response.data._embedded.movie;
	setActors();
}, function failure(status){
	
});

	function setActors(){
		
		var arrayLength = $scope.movies.length;
		

		for( var i = 0; i < arrayLength; i++){
			if($scope.movies[i] && $scope.movies[i]._links.actors)
			{
				
				movieFact.loadActors($scope.movies[i]._links.actors.href).then(function gotactor(response){
					
					var movieId= getMovieIdFromURL(response.config.url);
					$scope.movies[movieId].actor=response.data._embedded.actor[0].name;
					

				}, function failure(){});
			}

		}

	}

	function getMovieIdFromURL(url){
		var res = url.split("/");
		var len = res.length;
		var arrayLength = $scope.movies.length;
		

		for( var i = 0; i < arrayLength; i++){
			//console.debug($scope.movies[i]._links.movie.href);
			if($scope.movies[i]._links.movie.href+'/actors'==url)
				return i;
		}
		//console.debug($scope.movies._links.movies.href);
		return res[len-2];
	}
  
  });
