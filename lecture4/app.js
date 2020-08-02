(function() {
  'use strict';


  angular.module('NameCalculator', [])

  .controller('NameCalculator',function ($scope) {
    $scope.name= "";
    $scope.totalValue = 0;
    $scope.displayNumeric = function () {
      var totalNameValue = 0;
      $scope.totalValue =totalNameValue;
    };
    function calculateNumericForString(string) {
      var totalStringValue =0;
      for(i=0;i<string.ength;i++)
      {
        totalStringValue +=string.charCodeAt(i);

      }
      return totalStringValue
    }


  });
})();
