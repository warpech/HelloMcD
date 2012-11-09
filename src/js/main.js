/*
 * Main Module 
 *
 */
var myModule = angular.module('ng-remote', ['ui', 'StarcounterLib'], function ($routeProvider, $locationProvider) {
 
});

function MyCtrl($scope, $filter) {
  $scope.dumpItems = function(){
    console.log("dump", $scope.Items);
  }
}