(function () {
  "use strict";
  angular.module('public').
  component('signUp', {
    templateUrl: 'src/public/sign-up/sign-up.component.html',
    bindings: {
      firstName: '<',
      lastName: '<',
      emailAddress: '<',
      phoneNumber: '<',
      favoriteDish: '<'
    },
    controller: SignUpController
  });

SignUpController.$inject = ['MenuService', 'UserDataService'];
function SignUpController(MenuService, UserDataService) {
  var $ctrl = this;
  //$ctrl.firstName = "Israel";
  var userData = {};
  $ctrl.submit = function () {

    var promise = MenuService.getMenuItem($ctrl.favoriteDish);

    promise.then(function (response) {
        $ctrl.favoriteDishNotExists = false;
        userData.firstName = $ctrl.firstName;
        userData.lastName = $ctrl.lastName;
        userData.emailAddress = $ctrl.emailAddress;
        userData.phoneNumber = $ctrl.phoneNumber;
        userData.favoriteDish = {};
        userData.favoriteDish.shortName = response.short_name;
        userData.favoriteDish.name = response.name;
        userData.favoriteDish.description = response.description;
        UserDataService.save(userData);
        $ctrl.completed = true;
      })
      .catch(function (error) {
        $ctrl.favoriteDishNotExists = true;
        $ctrl.completed = false;
      });
  };

}

})();
