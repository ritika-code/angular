(function(){
  'use strict';

  angular.module('MsgApp',[])
  .controller('MsgController', MsgController);

  MsgController.$inject=['$scope', '$filter'];

  function MsgController($scope, $filter){
    $scope.name="yaakov";
    $scope.stateOfBeing="hungry";
    $scope.cookieCost = .45;

$scope.sayMesssage=function(){
  var msg ="riti like to eat healthy snacks at night";
  var output=$filter('uppercase')(msg);
  return output;
};

$scope.feedYaakov = function(){
  $scope.stateofBeing ="fed";
};
  }
