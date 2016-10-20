(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope, $filter) {
  $scope.message = "";
  $scope.lunchItems = "";
  $scope.textColor = "";

  $scope.countItems = function () {
    var green = "green";
    var red = "red";

    if ($scope.lunchItems == "") {
      $scope.textColor = red;
      $scope.message = "Please enter data first";
      return;
    }
    var itemsArray = $scope.lunchItems.split(",");

    // remove empty elements
    for (var i=0; i<itemsArray.length; i++) {
      if (itemsArray[i] == "") {
        itemsArray.splice(i, 1);
        i--;
      }
    }

    if (itemsArray.length <= 3) {
      $scope.textColor = green;
      $scope.message = "Enjoy!";
    } else {
      $scope.textColor = green;
      $scope.message = "Too much!";
    }
  };
}

})();
