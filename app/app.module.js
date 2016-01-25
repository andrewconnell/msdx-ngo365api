(function () {
  'use strict';

  var app = angular.module('ngMicrosoftGraph', [
    'ngRoute',
    'AdalAngular'
  ]);

  app.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider',
    function ($routeProvider, $httpProvider, adalProvider) {
      // setup routes in the app
      $routeProvider
        .when('/', {
          templateUrl: 'app/home.html',
        })
        .when('/contacts', {
          templateUrl: 'app/contacts/list.html',
          controller: 'ngMicrosoftGraph.contactsController',
          controllerAs: 'vm',
          requireADLogin: true
        })
        .otherwise({ redirectTo: '/' });

      adalProvider.init({
        tenant: 'INSERT_AAD_TENANT_ID',
        clientId: 'INSERT_AAD_APP_ID',
        postLogoutRedirectUrl: 'http://localhost:8080',
        endpoints: {
          'https://graph.microsoft.com/v1.0': 'https://graph.microsoft.com/'
        }
      }, $httpProvider);

    }]);
})();