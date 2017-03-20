'use strict';
angular.module('transportApp')
  .factory('brodcast', ['$http',function ($http) {
    // Service logic
    // ...

    var state='90';
    

    // Public API here
    return {
      get: function(){
        return state;
      },
      set: function(era){
        state=era;
        return state;
      }
      
    };
  }]);