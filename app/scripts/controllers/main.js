'use strict';

/**
 * @ngdoc function
 * @name transportApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the transportApp
 */
angular.module('transportApp')
  .controller('MainCtrl', function ($scope,brodcast) {
    
    var state=null;
    var hrefCLick = function (url){
    	console.debug(url);
    	var eraurl = url.target.href;
    	var tokens = eraurl.split("/");
    	var len = tokens.length;
    	var era = tokens[len-1].substring(0,2);
    	console.debug(era);

brodcast.set(era);
    }
    $scope.hrefCLick=hrefCLick;

  });
