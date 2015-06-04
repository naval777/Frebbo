


(function () {
  'use strict';
  angular.module('main',['ngRoute','ngCookies','ngMaterial','angularFileUpload','smart-table']);
})();

(function () {
  'use strict';
angular
  .module('main')
  .run(run);

run.$inject = ['$http'];

/**
* @name run
* @desc Update xsrf $http headers to align with Django's defaults
*/
function run($http) {
  $http.defaults.xsrfHeaderName = 'X-CSRFToken';
  $http.defaults.xsrfCookieName = 'csrftoken';
}

})();    


(function () {
  'use strict';
 angular.module('main')

 .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('indigo');


});

})();