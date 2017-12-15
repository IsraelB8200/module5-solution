(function () {
  'use strict';
  angular.module('public').
  component('myInfo',{
    templateUrl: 'src/public/my-info/my-info.component.html',
    bindings: {
      firstName: '<',
      lastName: '<',
      emailAddress: '<',
      phoneNumber: '<',
      favoriteDish: '<',
      favoriteDishTitle: '<',
      favoriteDishDesc: '<',
      favoriteDishImageUrl: '<',
      isUserRegistered: '<'
    },
    controller: MyInfoController
  });

  MyInfoController.$inject = ['UserDataService','ApiPath'];
  function MyInfoController(UserDataService, ApiPath) {
    var $ctrl = this;
    var isUserRegistered = UserDataService.isUserRegistered();
    $ctrl.isUserRegistered = isUserRegistered;
    if (isUserRegistered)
    {
      var userData = UserDataService.getRegisteredData();
      $ctrl.firstName = userData.firstName;
      $ctrl.lastName = userData.lastName;
      $ctrl.emailAddress = userData.emailAddress;
      $ctrl.phoneNumber = userData.phoneNumber;
      $ctrl.favoriteDishTitle = userData.favoriteDish.name;
      $ctrl.favoriteDishDesc = userData.favoriteDish.description;
      $ctrl.favoriteDishImageUrl = ApiPath + '/images/' + userData.favoriteDish.shortName + '.jpg';
    }
  }
})();
