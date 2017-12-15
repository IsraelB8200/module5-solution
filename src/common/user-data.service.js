(function () {
  "use strict";

  angular.module('common').
  service('UserDataService', UserDataService);

  function UserDataService() {
    var service = this;
    var userData = {};
    var userRegistered = false;
    service.save = function (data) {
      userData = data;
      userRegistered = true;
    };

    service.isUserRegistered = function () {
      return userRegistered;
    };

    service.getRegisteredData = function () {
      return userData;
    };
  }
})();
