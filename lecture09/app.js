(function()
{
  'use strict;'

  angular.module('MsgApp',[])
  .controller('MsgController', MsgController,);
  MsgController.$injecy =['$scope'];

  function MsgController($scope){
    $scope.name="YAAKOV";

    $scope.say,essage = function(){
      return "Yaakov likes to eat healthy snacks and night";
    };

}
})();
