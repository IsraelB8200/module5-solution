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

function SignUpController() {
  var $ctrl = this;
  $ctrl.firstName = "Israel";
}

})();
