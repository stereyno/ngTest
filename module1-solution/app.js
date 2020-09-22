(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){


    $scope.foodCount = function () {

      if (($scope.items === undefined) || (!$scope.items.replace(/\s/g, ''))){

          $scope.message = "Please enter data first"

      }else if (($scope.items.split(",").length < 4) && ($scope.items.split(",").length > 0)){

           $scope.message = "Enjoy";

      }else if ($scope.items.length >= 4) {

            $scope.message = "Too Much"

      }


    };

}


})();
