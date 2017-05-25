
(function () {
    'use script';

    angular.module('Twitter', ['ngRoute', 'ngRecourse'])
      .config(TwitterConfig);

    TwitterConfig.$inject = ['$RouteProvider'];
    function TwitterConfig($RouteProvider) {

      $RouteProvider
      .when('/', {
        templateUrl: 'view/home.html',
        controller: 'HomeController'
      })
      .otherwise({
        redirectTo: '/'
      });
    }
})();
