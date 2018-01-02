(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lista = "";
  $scope.items = 0;


  $scope.checkIfTooMuch =  function () {
      $scope.items = numberOfItems($scope.lista);
      $scope.messageStyle = "green";

      if ($scope.lista == "" || $scope.items == 0  ) {
        $scope.mensaje = "Please enter data first";
        $scope.messageStyle = "red";
      } else {

        if ($scope.items <=3 ) {
          $scope.mensaje = "Enjoy!";
        } else if ($scope.items > 3 ) {
          $scope.mensaje = "Too much!";
        }
      }
  };

  function numberOfItems (aList) {
    var arrayOfStrings = aList.split(",");
    var items = 0;
    for (var i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i].trim() != "") {
        items++;
      }
    }
    console.log("numero de items:" + items);
    return items;
  }
}

})();
