'use strict';

/**
 * @ngdoc service
 * @name transportApp.movieFact
 * @description
 * # movieFact
 * Factory in the transportApp.
 */
angular.module('transportApp')
  .factory('movieFact', ['$http',function ($http) {
    // Service logic
    // ...

    var moviereq=null;
    var actorreq=null;

    // Public API here
    return {
      load: function () {
         moviereq = $http.get('http://localhost:8080/movie');
         console.debug(moviereq);
         return moviereq;
      },
      loadByEra: function (era) {
         moviereq = $http.get('http://localhost:8080/movie/search/findByEra?era='+era);
         console.debug(moviereq);
         return moviereq;
      },
      loadActors : function (url) {
         actorreq = $http.get(url);
         //console.debug(moviereq);
         return actorreq;
      }
    };
  }]);
