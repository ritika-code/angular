(function() {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', [$'scope', $'filter', LunchCheckController]);


  function LunchCheckController($scope, $filter) {
    $scope.name="riti";

    $scope.upper = function() {
      var upCase=$filter('uppercase');
      $scope.name= upCase($scope.name);
    };

}
})();
