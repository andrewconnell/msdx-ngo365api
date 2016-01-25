(function () {
  'use strict';

  angular.module('ngMicrosoftGraph').controller('ngMicrosoftGraph.contactsController',
      ['$http', contactsController]);

  function contactsController($http) {
    var vm = this;

    // collection of contacts
    vm.contacts = {};

    // activate the controller
    getContacts();

function getContacts() {
  $http({
    method:'GET',
    url: 'https://graph.microsoft.com/v1.0/me/contacts',
    headers: {
      'ACCEPT': 'application/json'
    }
  }).success(function (response){
    vm.contacts = response.value;
  });
}
  }

})();